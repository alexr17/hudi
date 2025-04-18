/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.apache.spark.sql

import org.apache.spark.sql.catalyst.TableIdentifier
import org.apache.spark.sql.catalyst.analysis.{AnalysisErrorAt, ResolvedTable}
import org.apache.spark.sql.catalyst.expressions.{Attribute, AttributeSet, Expression, ProjectionOverSchema}
import org.apache.spark.sql.catalyst.planning.ScanOperation
import org.apache.spark.sql.catalyst.plans.logical._
import org.apache.spark.sql.connector.catalog.{Identifier, Table, TableCatalog}
import org.apache.spark.sql.execution.command.RepairTableCommand
import org.apache.spark.sql.execution.datasources.{HadoopFsRelation, LogicalRelation}
import org.apache.spark.sql.execution.datasources.parquet.{HoodieFormatTrait, ParquetFileFormat}
import org.apache.spark.sql.internal.SQLConf
import org.apache.spark.sql.types.StructType

object HoodieSpark34CatalystPlanUtils extends HoodieSpark3CatalystPlanUtils {

  def unapplyResolvedTable(plan: LogicalPlan): Option[(TableCatalog, Identifier, Table)] =
    plan match {
      case ResolvedTable(catalog, identifier, table, _) => Some((catalog, identifier, table))
      case _ => None
    }

  override def unapplyMergeIntoTable(plan: LogicalPlan): Option[(LogicalPlan, LogicalPlan, Expression)] = {
    plan match {
      case MergeIntoTable(targetTable, sourceTable, mergeCondition, _, _, _) =>
        Some((targetTable, sourceTable, mergeCondition))
      case _ => None
    }
  }

  override def maybeApplyForNewFileFormat(plan: LogicalPlan): LogicalPlan = {
    plan match {
      case s@ScanOperation(_, _, _,
      l@LogicalRelation(fs: HadoopFsRelation, _, _, _))
        if fs.fileFormat.isInstanceOf[ParquetFileFormat with HoodieFormatTrait]
          && !fs.fileFormat.asInstanceOf[ParquetFileFormat with HoodieFormatTrait].isProjected =>
        FileFormatUtilsForFileGroupReader.applyNewFileFormatChanges(s, l, fs)
      case _ => plan
    }
  }

  override def projectOverSchema(schema: StructType, output: AttributeSet): ProjectionOverSchema =
    ProjectionOverSchema(schema, output)

  override def isRepairTable(plan: LogicalPlan): Boolean = {
    plan.isInstanceOf[RepairTableCommand]
  }

  override def getRepairTableChildren(plan: LogicalPlan): Option[(TableIdentifier, Boolean, Boolean, String)] = {
    plan match {
      case rtc: RepairTableCommand =>
        Some((rtc.tableName, rtc.enableAddPartitions, rtc.enableDropPartitions, rtc.cmd))
      case _ =>
        None
    }
  }

  override def failAnalysisForMIT(a: Attribute, cols: String): Unit = {
    a.failAnalysis(
      errorClass = "_LEGACY_ERROR_TEMP_2309",
      messageParameters = Map(
        "sqlExpr" -> a.sql,
        "cols" -> cols))
  }

  override def unapplyCreateIndex(plan: LogicalPlan): Option[(LogicalPlan, String, String, Boolean, Seq[(Seq[String], Map[String, String])], Map[String, String])] = {
    plan match {
      case ci@CreateIndex(table, indexName, indexType, ignoreIfExists, columns, properties) =>
        Some((table, indexName, indexType, ignoreIfExists, columns.map(col => (col._1.name, col._2)), properties))
      case _ =>
        None
    }
  }

  override def unapplyDropIndex(plan: LogicalPlan): Option[(LogicalPlan, String, Boolean)] = {
    plan match {
      case ci@DropIndex(table, indexName, ignoreIfNotExists) =>
        Some((table, indexName, ignoreIfNotExists))
      case _ =>
        None
    }
  }

  override def unapplyShowIndexes(plan: LogicalPlan): Option[(LogicalPlan, Seq[Attribute])] = {
    plan match {
      case ci@ShowIndexes(table, output) =>
        Some((table, output))
      case _ =>
        None
    }
  }

  override def unapplyRefreshIndex(plan: LogicalPlan): Option[(LogicalPlan, String)] = {
    plan match {
      case ci@RefreshIndex(table, indexName) =>
        Some((table, indexName))
      case _ =>
        None
    }
  }

  override def unapplyInsertIntoStatement(plan: LogicalPlan): Option[(LogicalPlan, Seq[String], Map[String, Option[String]], LogicalPlan, Boolean, Boolean)] = {
    plan match {
      case insert: InsertIntoStatement =>
        // https://github.com/apache/spark/pull/36077
        // first: in this pr, spark34 support default value for insert into, it will regenerate the user specified cols
        //        so, no need deal with it in hudi side
        // second: in this pr, it will append hoodie meta field with default value, has some bug, it look like be fixed
        //         in spark35(https://github.com/apache/spark/pull/41262), so if user want specified cols, need disable default feature.
        if (SQLConf.get.enableDefaultColumns) {
          if (insert.userSpecifiedCols.nonEmpty) {
            throw new AnalysisException("hudi not support specified cols when enable default columns, " +
              "please disable 'spark.sql.defaultColumn.enabled'")
          }
          Some((insert.table, Seq.empty, insert.partitionSpec, insert.query, insert.overwrite, insert.ifPartitionNotExists))
        } else {
          Some((insert.table, insert.userSpecifiedCols, insert.partitionSpec, insert.query, insert.overwrite, insert.ifPartitionNotExists))
        }
      case _ =>
        None
    }
  }

  override def createProjectForByNameQuery(lr: LogicalRelation, plan: LogicalPlan): Option[LogicalPlan] = {
    plan match {
      case insert: InsertIntoStatement =>
        Some(ResolveInsertionBase.createProjectForByNameQuery(lr.catalogTable.get.qualifiedName, insert))
      case _ =>
        None
    }
  }
}
