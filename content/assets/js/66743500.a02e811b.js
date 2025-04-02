"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[3202],{28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>d});var s=i(96540);const t={},a=s.createContext(t);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(a.Provider,{value:n},e.children)}},35845:e=>{e.exports=JSON.parse('{"permalink":"/blog/2025/04/02/secondary-index","editUrl":"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2025-04-02-secondary-index.md","source":"@site/blog/2025-04-02-secondary-index.md","title":"Introducing Secondary Index in Apache Hudi Lakehouse Platform","description":"Apache Hudi 1.0 introduces Secondary Indexes, enabling faster queries on non-primary key fields. This improves data retrieval in Lakehouse architectures by reducing data scans. Hudi also offers asynchronous indexing for scalability and efficient index maintenance without disrupting data ingestion. By the end of this blog, you\'ll understand how these features enhance Hudi\'s capabilities as a high-performance lakehouse platform.","date":"2025-04-02T00:00:00.000Z","tags":[{"inline":true,"label":"Apache Hudi","permalink":"/blog/tags/apache-hudi"},{"inline":true,"label":"Indexing","permalink":"/blog/tags/indexing"},{"inline":true,"label":"Performance","permalink":"/blog/tags/performance"}],"readingTime":9.72,"hasTruncateMarker":false,"authors":[{"name":"Dipankar Mazumdar, Aditya Goenka","key":null,"page":null}],"frontMatter":{"title":"Introducing Secondary Index in Apache Hudi Lakehouse Platform","excerpt":"What\'s & How\'s of Secondary indexes in Hudi 1.0","author":"Dipankar Mazumdar, Aditya Goenka","category":"blog","image":"/assets/images/blog/sec-thumb.jpg","tags":["Apache Hudi","Indexing","Performance"]},"unlisted":false,"nextItem":{"title":"Powering Amazon Unit Economics at Scale Using Apache Hudi","permalink":"/blog/2025/03/31/amazon-hudi"}}')},92531:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var s=i(35845),t=i(74848),a=i(28453);const r={title:"Introducing Secondary Index in Apache Hudi Lakehouse Platform",excerpt:"What's & How's of Secondary indexes in Hudi 1.0",author:"Dipankar Mazumdar, Aditya Goenka",category:"blog",image:"/assets/images/blog/sec-thumb.jpg",tags:["Apache Hudi","Indexing","Performance"]},d=void 0,o={authorsImageUrls:[void 0]},l=[{value:"Apache Hudi&#39;s Multi-Modal Indexing System",id:"apache-hudis-multi-modal-indexing-system",level:2},{value:"Introducing Secondary Index",id:"introducing-secondary-index",level:2},{value:"Creating a Secondary Index in Hudi",id:"creating-a-secondary-index-in-hudi",level:3},{value:"Asynchronous Indexing in Hudi",id:"asynchronous-indexing-in-hudi",level:3},{value:"Benchmarking",id:"benchmarking",level:2},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{title:"TL;DR",type:"tip",children:(0,t.jsx)(n.p,{children:"Apache Hudi 1.0 introduces Secondary Indexes, enabling faster queries on non-primary key fields. This improves data retrieval in Lakehouse architectures by reducing data scans. Hudi also offers asynchronous indexing for scalability and efficient index maintenance without disrupting data ingestion. By the end of this blog, you'll understand how these features enhance Hudi's capabilities as a high-performance lakehouse platform."})}),"\n",(0,t.jsxs)(n.p,{children:["Indexes are a fundamental data structure that enables efficient data retrieval by eliminating the need to scan the entire dataset for every query. In the context of a Lakehouse, where records are written as immutable data files (such as Parquet) at scale, indexing becomes crucial in reducing lookup times. Otherwise, a lot of time will be spent by the compute engine on finding out where exactly a particular record exists amongst thousands of files in the data lake storage, which is computationally expensive at scale. Indexing is not only important for ",(0,t.jsx)(n.em,{children:"reads"})," in a lakehouse architecture, but also for ",(0,t.jsx)(n.em,{children:"writes"}),", such as upserts and deletes, as you need to know where the record is to update it."]}),"\n",(0,t.jsxs)(n.p,{children:["One of the standout design choices in Apache Hudi that separates it from other lakehouse formats is its ",(0,t.jsx)(n.a,{href:"https://hudi.apache.org/docs/next/indexes/",children:"indexing"})," capability, which has been central to its architecture from the beginning. Hudi is heavily optimized to handle mutable change streams with varying write patterns, and indexing plays a pivotal role in making upserts and deletes efficient."]}),"\n",(0,t.jsx)(n.p,{children:"Hudi's indexing mechanism is designed to efficiently manage record lookups and updates by maintaining a structured mapping between records and file groups. Here's how it works:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The first time a record is ingested into Hudi, it is assigned to a ",(0,t.jsx)(n.a,{href:"https://hudi.apache.org/tech-specs/#file-layout-hierarchy",children:"File Group"})," - a logical grouping of files. This assignment typically remains unchanged throughout the record's lifecycle. However, in cases such as clustering or cross-partition updates, the record may be remapped to a different file group. Even in such scenarios, Hudi ensures that a given record key is associated with exactly one file group at any completed instant on the timeline"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Hudi maintains a mapping between the incoming ",(0,t.jsx)(n.a,{href:"https://hudi.apache.org/docs/key_generation",children:"record\u2019s key"})," (unique identifier) and the File Group where it resides."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The index is responsible for quickly locating records based on this File Group mapping, eliminating the need for full dataset scans."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This strategy allows Hudi to determine whether a record exists and pinpoint its exact location, enabling faster upserts and deletes."}),"\n",(0,t.jsx)(n.h2,{id:"apache-hudis-multi-modal-indexing-system",children:"Apache Hudi's Multi-Modal Indexing System"}),"\n",(0,t.jsxs)(n.p,{children:["While Hudi\u2019s indexes have set a benchmark for fast writes, bringing those advantages to queries was equally important. This led to the design of a generalized indexing subsystem that enhances performance in the lakehouse. Hudi\u2019s ",(0,t.jsx)(n.a,{href:"https://www.onehouse.ai/blog/introducing-multi-modal-index-for-the-lakehouse-in-apache-hudi",children:"multi-modal indexing"})," redefines indexing in data lakes by employing multiple index types, each optimized for different workloads and query patterns. It is built on scalable metadata that supports multiple index types without extra overhead, ACID-compliant updates to keep indexes in sync with the data table, and optimized lookups that minimize full scans for low-latency queries on large datasets."]}),"\n",(0,t.jsxs)(n.p,{children:["At the core of Hudi\u2019s indexing design is its ",(0,t.jsx)(n.a,{href:"https://hudi.apache.org/docs/metadata",children:"metadata table"}),", a specialized Merge-on-Read table that houses multiple index types as separate partitions. These indexes serve various purposes, improving the efficiency of reads, writes, and upserts."]}),"\n",(0,t.jsx)("img",{src:"/assets/images/blog/hudi-stack-indexes.png",alt:"index",width:"800",align:"middle"}),"\n",(0,t.jsx)(n.p,{children:"Some key indexes within Hudi\u2019s metadata table include:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"File Index - Stores a compact listing of files, reducing the overhead of expensive file system operations."}),"\n",(0,t.jsx)(n.li,{children:"Column Stats Index - Tracks min/max statistics for each column, enabling more effective data pruning."}),"\n",(0,t.jsx)(n.li,{children:"Bloom Filter Index - Stores precomputed bloom filters for all data files, optimizing record lookups."}),"\n",(0,t.jsx)(n.li,{children:"Partition Stats Index - Stores aggregated partition-related information which helps in efficient partition pruning by skipping entire folders very quickly."}),"\n",(0,t.jsx)(n.li,{children:"Record-Level Index - Maintains direct mappings to individual records, facilitating faster upserts and deletes."}),"\n",(0,t.jsx)(n.li,{children:"Secondary Index - Allow users to create indexes on columns that are not part of record key columns in Hudi tables."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"By structuring these indexes as individual partitions within the metadata table, Hudi ensures efficient retrieval, quick lookups, and scalability, even as the data volume grows. In this blog, we will focus on secondary indexes and understand how it can help accelerate query performance in a lakehouse."}),"\n",(0,t.jsx)(n.h2,{id:"introducing-secondary-index",children:"Introducing Secondary Index"}),"\n",(0,t.jsx)(n.p,{children:"A secondary index is an indexing mechanism commonly used in database systems to provide efficient access to records based on non-primary key attributes. Unlike primary indexes, which enforce uniqueness and define the main data layout, secondary indexes serve as auxiliary data structures that accelerate lookups on fields that are frequently queried but are not the primary key."}),"\n",(0,t.jsxs)(n.p,{children:["For example, in an OLTP (Online Transaction Processing) database, a primary index might be defined on a unique ",(0,t.jsx)(n.code,{children:"order_id"}),", whereas a secondary index could be created on ",(0,t.jsx)(n.code,{children:"customer_id"})," to quickly fetch all orders placed by a specific customer. Secondary indexes enhance query performance by reducing the need for full table scans, especially in analytical workloads that involve complex filtering or joins."]}),"\n",(0,t.jsxs)(n.p,{children:["With ",(0,t.jsx)(n.a,{href:"https://hudi.apache.org/blog/2024/12/16/announcing-hudi-1-0-0/",children:"Hudi 1.0"}),", Apache Hudi introduces ",(0,t.jsx)(n.a,{href:"https://hudi.apache.org/docs/next/indexes#secondary-index",children:"secondary indexes"}),", bringing database-style indexing capabilities to the Lakehouse. Secondary indexes allow queries to scan significantly fewer files, reducing query latency and compute costs. This is especially beneficial for cloud-based query engines (such as AWS Athena), where pricing is based on the amount of data scanned. A secondary index in Hudi allows users to index any column beyond the record key (primary key), making queries on non-primary key fields much faster. This extends Hudi\u2019s existing ",(0,t.jsx)(n.a,{href:"https://hudi.apache.org/blog/2023/11/01/record-level-index/",children:"record-level index"}),", which optimizes writes and reads based on the record key."]}),"\n",(0,t.jsx)("img",{src:"/assets/images/blog/secondary_index.png",alt:"sec_index",width:"800",align:"middle"}),"\n",(0,t.jsx)(n.p,{children:"Here is how the secondary index works in Hudi."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Indexes Non-Primary Key Columns: Unlike the record-level index, which tracks record keys, secondary indexes help accelerate queries on fields outside the primary key."}),"\n",(0,t.jsx)(n.li,{children:"Stores Mappings Between Secondary and Primary Keys: Hudi maintains a mapping between secondary keys (e.g., city, driver) and record keys, enabling fast lookups for non-primary key queries."}),"\n",(0,t.jsx)(n.li,{children:"Minimizes Data Scans via Index-Aware Query Execution: During query execution, the secondary index enables data skipping, allowing Hudi to prune unnecessary files before scanning."}),"\n",(0,t.jsx)(n.li,{children:"SQL-Based Index Management: Users can create, drop, and manage indexes using SQL, making secondary indexes easily accessible."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Hudi supports hash-based secondary indexes, which are horizontally scalable by distributing keys across shards for fast writes and lookups."}),"\n",(0,t.jsxs)(n.p,{children:["If you are interested in the implementation details of secondary indexes, you can read more ",(0,t.jsx)(n.a,{href:"https://hudi.apache.org/tech-specs-1point0/#secondary-index",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"creating-a-secondary-index-in-hudi",children:"Creating a Secondary Index in Hudi"}),"\n",(0,t.jsx)(n.p,{children:"In Hudi 1.0, secondary indexes are supported currently in Apache Spark, with future support planned for Flink, Presto, and Trino in Hudi 1.1."}),"\n",(0,t.jsx)(n.p,{children:"Let\u2019s see an example of creating a Hudi table with a secondary index."}),"\n",(0,t.jsxs)(n.p,{children:["First, let\u2019s create a table with a record index enabled. The record index maintains mappings of record keys (",(0,t.jsx)(n.code,{children:"id"}),") to file groups, enabling fast updates, deletes, and lookups."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"DROP TABLE IF EXISTS hudi_table;\nCREATE TABLE hudi_table (\n    ts BIGINT,\n    id STRING,\n    rider STRING,\n    driver STRING,\n    fare DOUBLE,\n    city STRING,\n    state STRING\n) USING hudi\nOPTIONS (\n    primaryKey = 'id',\n    hoodie.metadata.record.index.enable = 'true',  -- Enable record index\n    hoodie.write.record.merge.mode = \"COMMIT_TIME_ORDERING\" -- Only Required for 1.0.0 version\n)\nPARTITIONED BY (city, state)\nLOCATION 'file:///tmp/hudi_test_table';\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Now we can create a secondary index on the ",(0,t.jsx)(n.code,{children:"city"})," field to optimize queries filtering on this column."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE INDEX idx_city \nON hudi_table USING secondary_index(city);\n"})}),"\n",(0,t.jsx)(n.p,{children:"Now, when executing a query such as:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT rider FROM hudi_table WHERE city = 'SFO';\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u2705 Hudi first checks the secondary index to determine which records match the filter condition.",(0,t.jsx)(n.br,{}),"\n","\u2705 It then uses the record index to locate the exact file group for retrieval.",(0,t.jsx)(n.br,{}),"\n","\u2705 Data skipping is applied, reducing the number of files read from cloud storage."]}),"\n",(0,t.jsx)(n.p,{children:"Users can also create secondary indexes using the Spark DataSource API by setting the following configurations:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Config Name"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Default"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"hoodie.metadata.index.secondary.enable"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"true"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"Enables secondary index maintenance. When true, Hudi writers automatically maintain all secondary indexes within the metadata table. When disabled, secondary indexes must be created manually using SQL."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"hoodie.datasource.write.secondarykey.column"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"(N/A)"}),(0,t.jsxs)(n.td,{style:{textAlign:"left"},children:["Specifies the columns to be used as secondary keys. Supports dot notation for nested fields (e.g., ",(0,t.jsx)(n.code,{children:"customer.region"}),")."]})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"asynchronous-indexing-in-hudi",children:"Asynchronous Indexing in Hudi"}),"\n",(0,t.jsxs)(n.p,{children:["A notable thing about Hudi\u2019s indexing system is that it offers ",(0,t.jsx)(n.a,{href:"https://www.onehouse.ai/blog/asynchronous-indexing-using-hudi",children:"asynchronous indexing"})," as a service. Traditional indexing approaches often introduce performance bottlenecks, as index maintenance needs to be performed synchronously with writes. Hudi\u2019s asynchronous indexing service eliminates the performance bottlenecks of traditional indexing by decoupling index maintenance from ingestion. Instead of requiring synchronous updates that slow down writes, Hudi builds indexes in the background, ensuring ingestion remains uninterrupted."]}),"\n",(0,t.jsxs)(n.p,{children:["A key aspect of this design is timeline-consistent indexing, where a new indexing action is introduced in Hudi\u2019s transactional ",(0,t.jsx)(n.a,{href:"https://hudi.apache.org/docs/timeline",children:"timeline"}),". The indexer service schedules indexing by adding an ",(0,t.jsx)(n.code,{children:"indexing.requested"})," instant, moves it to ",(0,t.jsx)(n.code,{children:"inflight"})," during execution, and finally marks it ",(0,t.jsx)(n.code,{children:"completed"})," once indexing is done, without locking index file writes. This enables a scalable indexing framework, allowing indexes to be dynamically added or removed without downtime as datasets grow. Async indexing also supports multiple index types, including secondary indexes."]}),"\n",(0,t.jsx)(n.h2,{id:"benchmarking",children:"Benchmarking"}),"\n",(0,t.jsxs)(n.p,{children:["We ran a simple benchmark using the TPCDS 1TB dataset, created the index on one of the fact table ",(0,t.jsx)(n.code,{children:"web_sales"})," and ran a complex join query with lookup on customer id."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Setup:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Uses 1TB TPCDS public dataset."}),"\n",(0,t.jsx)(n.li,{children:"Apache Spark version -  3.5.5 installed on EMR cluster"}),"\n",(0,t.jsx)(n.li,{children:"Apache Hudi version - 1.0.1"}),"\n",(0,t.jsxs)(n.li,{children:["Table on which secondary index is created - ",(0,t.jsx)(n.code,{children:"web_sales"})]}),"\n",(0,t.jsxs)(n.li,{children:["Column on which Secondary Index is created - ",(0,t.jsx)(n.code,{children:"ws_ship_customer_sk"})]}),"\n",(0,t.jsxs)(n.li,{children:["Cluster Configurations","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Nodes: m5.xlarge (10 executors)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["To evaluate performance, we executed the same query multiple times within the same Spark session. The table below demonstrates an approximately ",(0,t.jsx)(n.strong,{children:"33%"})," improvement in the first run and a ",(0,t.jsx)(n.strong,{children:"58%"})," improvement in the second run. Additionally, the amount of data scanned was reduced by ",(0,t.jsx)(n.strong,{children:"90%"})," when using the secondary index."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"}}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Run 1"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Run 2"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Files Read"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"File Size Read"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Rows Scanned"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"Without Secondary index"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"32 sec"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"14 sec"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"5000"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"67 GB"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"719 M"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"With Secondary Index"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"22 sec"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"6 sec"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"521"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"7 GB"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"75 M"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Read Query used for Benchmarking:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT\n   ws.ws_order_number,\n   ws.ws_item_sk,\n   ws.ws_quantity,\n   ws.ws_sales_price,\n   c.c_customer_id,\n   c.c_first_name,\n   c.c_last_name,\n   d.d_date,\n   wp.wp_web_page_id\nFROM\n   web_sales ws\nJOIN\n   tpcds_hudi_1tb.customer c ON ws.ws_ship_customer_sk = c.c_customer_sk\nJOIN\n   tpcds_hudi_1tb.date_dim d ON ws.ws_ship_date_sk = d.d_date_sk\nJOIN\n   tpcds_hudi_1tb.web_page wp ON ws.ws_web_page_sk = wp.wp_web_page_sk\nWHERE\n   ws.ws_ship_customer_sk = '647632'\nORDER BY\n   ws.ws_order_number\n"})}),"\n",(0,t.jsx)(n.p,{children:"As shown in the DAG below, there is a significant difference in the amount of data scanned and other metrics (see the highlighted part) for the websales table, both with and without the secondary index."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Spark SQL Stats  with Secondary index"})}),"\n",(0,t.jsx)("img",{src:"/assets/images/blog/sec_index_spark1.png",alt:"orch",width:"600",align:"middle"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Spark SQL Stats  without Secondary index"})}),"\n",(0,t.jsx)("img",{src:"/assets/images/blog/sec_index_spark2.png",alt:"orch",width:"600",align:"middle"}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsxs)(n.p,{children:["Indexing has been a core component of Apache Hudi since its inception, enabling efficient upserts and deletes at scale. With Hudi 1.0, the introduction of secondary indexing expands these capabilities by allowing queries to efficiently filter and retrieve records based on ",(0,t.jsx)(n.em,{children:"non-primary key"})," fields, significantly reducing data scans and improving query performance. Looking ahead, secondary indexing in Hudi opens new possibilities for further optimizations, such as accelerating complex joins and MERGE INTO operations."]}),"\n",(0,t.jsxs)(n.p,{children:["Additionally, to ensure that index maintenance does not introduce bottlenecks, Hudi\u2019s ",(0,t.jsx)(n.em,{children:"asynchronous indexing"})," service decouples index updates from ingestion, enabling seamless scaling while keeping indexes timeline-consistent and ACID-compliant. These advancements further solidify Hudi\u2019s role as a high-performance lakehouse platform, making data structures such as secondary indexes more accessible."]}),"\n",(0,t.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}}}]);