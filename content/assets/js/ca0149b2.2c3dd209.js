"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[18450],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||r;return n?o.createElement(g,i(i({ref:t},l),{},{components:n})):o.createElement(g,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},29895:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],s={title:"Async Compaction Deployment Models",excerpt:"Mechanisms for executing compaction jobs in Hudi asynchronously",author:"vbalaji",category:"blog"},c=void 0,p={permalink:"/blog/2020/08/21/async-compaction-deployment-model",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2020-08-21-async-compaction-deployment-model.md",source:"@site/blog/2020-08-21-async-compaction-deployment-model.md",title:"Async Compaction Deployment Models",description:"We will look at different deployment models for executing compactions asynchronously.",date:"2020-08-21T00:00:00.000Z",formattedDate:"August 21, 2020",tags:[],readingTime:1.925,truncated:!0,authors:[{name:"vbalaji"}],prevItem:{title:"Ingest multiple tables using Hudi",permalink:"/blog/2020/08/22/ingest-multiple-tables-using-hudi"},nextItem:{title:"Efficient Migration of Large Parquet Tables to Apache Hudi",permalink:"/blog/2020/08/20/efficient-migration-of-large-parquet-tables"}},l={authorsImageUrls:[void 0]},u=[{value:"Spark Structured Streaming",id:"spark-structured-streaming",children:[],level:2},{value:"DeltaStreamer Continuous Mode",id:"deltastreamer-continuous-mode",children:[],level:2},{value:"Hudi CLI",id:"hudi-cli",children:[],level:2},{value:"Hudi Compactor Script",id:"hudi-compactor-script",children:[],level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We will look at different deployment models for executing compactions asynchronously."),(0,r.kt)("h1",{id:"compaction"},"Compaction"),(0,r.kt)("p",null,"For Merge-On-Read table, data is stored using a combination of columnar (e.g parquet) + row based (e.g avro) file formats.\nUpdates are logged to delta files & later compacted to produce new versions of columnar files synchronously or\nasynchronously. One of th main motivations behind Merge-On-Read is to reduce data latency when ingesting records.\nHence, it makes sense to run compaction asynchronously without blocking ingestion."),(0,r.kt)("h1",{id:"async-compaction"},"Async Compaction"),(0,r.kt)("p",null,"Async Compaction is performed in 2 steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Compaction Scheduling")),": This is done by the ingestion job. In this step, Hudi scans the partitions and selects ",(0,r.kt)("strong",{parentName:"li"},"file\nslices")," to be compacted. A compaction plan is finally written to Hudi timeline."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Compaction Execution")),": A separate process reads the compaction plan and performs compaction of file slices.")),(0,r.kt)("h1",{id:"deployment-models"},"Deployment Models"),(0,r.kt)("p",null,"There are few ways by which we can execute compactions asynchronously. "),(0,r.kt)("h2",{id:"spark-structured-streaming"},"Spark Structured Streaming"),(0,r.kt)("p",null,"With 0.6.0, we now have support for running async compactions in Spark\nStructured Streaming jobs. Compactions are scheduled and executed asynchronously inside the\nstreaming job.  Async Compactions are enabled by default for structured streaming jobs\non Merge-On-Read table."),(0,r.kt)("p",null,"Here is an example snippet in java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},'import org.apache.hudi.DataSourceWriteOptions;\nimport org.apache.hudi.HoodieDataSourceHelpers;\nimport org.apache.hudi.config.HoodieCompactionConfig;\nimport org.apache.hudi.config.HoodieWriteConfig;\n\nimport org.apache.spark.sql.streaming.OutputMode;\nimport org.apache.spark.sql.streaming.ProcessingTime;\n\n\n DataStreamWriter<Row> writer = streamingInput.writeStream().format("org.apache.hudi")\n        .option(DataSourceWriteOptions.OPERATION_OPT_KEY(), operationType)\n        .option(DataSourceWriteOptions.TABLE_TYPE_OPT_KEY(), tableType)\n        .option(DataSourceWriteOptions.RECORDKEY_FIELD_OPT_KEY(), "_row_key")\n        .option(DataSourceWriteOptions.PARTITIONPATH_FIELD_OPT_KEY(), "partition")\n        .option(DataSourceWriteOptions.PRECOMBINE_FIELD_OPT_KEY(), "timestamp")\n        .option(HoodieCompactionConfig.INLINE_COMPACT_NUM_DELTA_COMMITS_PROP, "10")\n        .option(DataSourceWriteOptions.ASYNC_COMPACT_ENABLE_OPT_KEY(), "true")\n        .option(HoodieWriteConfig.TABLE_NAME, tableName).option("checkpointLocation", checkpointLocation)\n        .outputMode(OutputMode.Append());\n writer.trigger(new ProcessingTime(30000)).start(tablePath);\n')),(0,r.kt)("h2",{id:"deltastreamer-continuous-mode"},"DeltaStreamer Continuous Mode"),(0,r.kt)("p",null,"Hudi DeltaStreamer provides continuous ingestion mode where a single long running spark application",(0,r.kt)("br",{parentName:"p"}),"\n","ingests data to Hudi table continuously from upstream sources. In this mode, Hudi supports managing asynchronous\ncompactions. Here is an example snippet for running in continuous mode with async compactions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"spark-submit --packages org.apache.hudi:hudi-utilities-bundle_2.11:0.6.0 \\\n--class org.apache.hudi.utilities.deltastreamer.HoodieDeltaStreamer \\\n--table-type MERGE_ON_READ \\\n--target-base-path <hudi_base_path> \\\n--target-table <hudi_table> \\\n--source-class org.apache.hudi.utilities.sources.JsonDFSSource \\\n--source-ordering-field ts \\\n--schemaprovider-class org.apache.hudi.utilities.schema.FilebasedSchemaProvider \\\n--props /path/to/source.properties \\\n--continous\n")),(0,r.kt)("h2",{id:"hudi-cli"},"Hudi CLI"),(0,r.kt)("p",null,"Hudi CLI is yet another way to execute specific compactions asynchronously. Here is an example "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"hudi:trips->compaction run --tableName <table_name> --parallelism <parallelism> --compactionInstant <InstantTime>\n...\n")),(0,r.kt)("h2",{id:"hudi-compactor-script"},"Hudi Compactor Script"),(0,r.kt)("p",null,"Hudi provides a standalone tool to also execute specific compactions asynchronously. Here is an example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"spark-submit --packages org.apache.hudi:hudi-utilities-bundle_2.11:0.6.0 \\\n--class org.apache.hudi.utilities.HoodieCompactor \\\n--base-path <base_path> \\\n--table-name <table_name> \\\n--instant-time <compaction_instant> \\\n--schema-file <schema_file>\n")))}d.isMDXComponent=!0}}]);