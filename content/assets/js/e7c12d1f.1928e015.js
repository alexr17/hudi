"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[96043],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),h=i,f=c["".concat(s,".").concat(h)]||c[h]||p[h]||r;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},47208:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],l={version:"0.8.0",title:"Flink Guide",toc:!0,last_modified_at:new Date("2020-03-16T03:40:57.000Z")},s=void 0,d={unversionedId:"flink-quick-start-guide",id:"version-0.8.0/flink-quick-start-guide",title:"Flink Guide",description:"This guide provides a quick peek at Hudi's capabilities using flink SQL client. Using flink SQL, we will walk through",source:"@site/versioned_docs/version-0.8.0/flink-quick-start-guide.md",sourceDirName:".",slug:"/flink-quick-start-guide",permalink:"/docs/0.8.0/flink-quick-start-guide",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.8.0/flink-quick-start-guide.md",tags:[],version:"0.8.0",frontMatter:{version:"0.8.0",title:"Flink Guide",toc:!0,last_modified_at:"2020-03-16T03:40:57.000Z"},sidebar:"version-0.8.0/docs",previous:{title:"Spark Guide",permalink:"/docs/0.8.0/quick-start-guide"},next:{title:"Use Cases",permalink:"/docs/0.8.0/use_cases"}},u=[{value:"Setup",id:"setup",children:[{value:"Step.1 download flink jar",id:"step1-download-flink-jar",children:[],level:3},{value:"Step.2 start flink cluster",id:"step2-start-flink-cluster",children:[],level:3},{value:"Step.3 start flink SQL client",id:"step3-start-flink-sql-client",children:[],level:3}],level:2},{value:"Insert data",id:"insert-data",children:[],level:2},{value:"Query data",id:"query-data",children:[],level:2},{value:"Update data",id:"update-data",children:[],level:2},{value:"Streaming query",id:"streaming-query",children:[],level:2},{value:"Delete data",id:"deletes",children:[],level:2},{value:"Where to go from here?",id:"where-to-go-from-here",children:[],level:2}],p={toc:u};function c(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide provides a quick peek at Hudi's capabilities using flink SQL client. Using flink SQL, we will walk through\ncode snippets that allows you to insert and update a Hudi table of default table type:\n",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts#copy-on-write-table"},"Copy on Write")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts#merge-on-read-table"},"Merge On Read"),".\nAfter each write operation we will also show how to read the data snapshot (incrementally read is already on the roadmap)."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"We use the ",(0,r.kt)("a",{parentName:"p",href:"https://ci.apache.org/projects/flink/flink-docs-stable/dev/table/sqlClient"},"Flink Sql Client")," because it's a good\nquick start tool for SQL users."),(0,r.kt)("h3",{id:"step1-download-flink-jar"},"Step.1 download flink jar"),(0,r.kt)("p",null,"Hudi works with Flink-1.11.x version. You can follow instructions ",(0,r.kt)("a",{parentName:"p",href:"https://flink.apache.org/downloads"},"here")," for setting up flink.\nThe hudi-flink-bundle jar is archived with scala 2.11, so it\u2019s recommended to use flink 1.11 bundled with scala 2.11."),(0,r.kt)("h3",{id:"step2-start-flink-cluster"},"Step.2 start flink cluster"),(0,r.kt)("p",null,"Start a standalone flink cluster within hadoop environment.\nBefore you start up the cluster, we suggest to config the cluster as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"in ",(0,r.kt)("inlineCode",{parentName:"li"},"$FLINK_HOME/conf/flink-conf.yaml"),", add config option ",(0,r.kt)("inlineCode",{parentName:"li"},"taskmanager.numberOfTaskSlots: 4")),(0,r.kt)("li",{parentName:"ul"},"in ",(0,r.kt)("inlineCode",{parentName:"li"},"$FLINK_HOME/conf/workers"),", add item ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost")," as 4 lines so that there are 4 workers on the local cluster")),(0,r.kt)("p",null,"Now starts the cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# HADOOP_HOME is your hadoop root directory after unpack the binary package.\nexport HADOOP_CLASSPATH=`$HADOOP_HOME/bin/hadoop classpath`\n\n# Start the flink standalone cluster\n./bin/start-cluster.sh\n")),(0,r.kt)("h3",{id:"step3-start-flink-sql-client"},"Step.3 start flink SQL client"),(0,r.kt)("p",null,"Hudi has a prepared bundle jar for flink, which should be loaded in the flink SQL Client when it starts up.\nYou can build the jar manually under path ",(0,r.kt)("inlineCode",{parentName:"p"},"hudi-source-dir/packaging/hudi-flink-bundle"),", or download it from the\n",(0,r.kt)("a",{parentName:"p",href:"https://repo.maven.apache.org/maven2/org/apache/hudi/hudi-flink-bundle_2.11/"},"Apache Official Repository"),"."),(0,r.kt)("p",null,"Now starts the SQL CLI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# HADOOP_HOME is your hadoop root directory after unpack the binary package.\nexport HADOOP_CLASSPATH=`$HADOOP_HOME/bin/hadoop classpath`\n\n./bin/sql-client.sh embedded -j .../hudi-flink-bundle_2.1?-*.*.*.jar shell\n")),(0,r.kt)("div",{className:"notice--info"},(0,r.kt)("h4",null,"Please note the following: "),(0,r.kt)("ul",null,(0,r.kt)("li",null,"We suggest hadoop 2.9.x+ version because some of the object storage has filesystem implementation only after that"),(0,r.kt)("li",null,"The flink-parquet and flink-avro formats are already packaged into the hudi-flink-bundle jar"))),(0,r.kt)("p",null,"Setup table name, base path and operate using SQL for this guide.\nThe SQL CLI only executes the SQL line by line."),(0,r.kt)("h2",{id:"insert-data"},"Insert data"),(0,r.kt)("p",null,"Creates a flink hudi table first and insert data into the Hudi table using SQL ",(0,r.kt)("inlineCode",{parentName:"p"},"VALUES")," as below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- sets up the result mode to tableau to show the results directly in the CLI\nset execution.result-mode=tableau;\n\nCREATE TABLE t1(\n  uuid VARCHAR(20),\n  name VARCHAR(10),\n  age INT,\n  ts TIMESTAMP(3),\n  `partition` VARCHAR(20)\n)\nPARTITIONED BY (`partition`)\nWITH (\n  'connector' = 'hudi',\n  'path' = 'schema://base-path',\n  'table.type' = 'MERGE_ON_READ' -- this creates a MERGE_ON_READ table, by default is COPY_ON_WRITE\n);\n\n-- insert data using values\nINSERT INTO t1 VALUES\n  ('id1','Danny',23,TIMESTAMP '1970-01-01 00:00:01','par1'),\n  ('id2','Stephen',33,TIMESTAMP '1970-01-01 00:00:02','par1'),\n  ('id3','Julian',53,TIMESTAMP '1970-01-01 00:00:03','par2'),\n  ('id4','Fabian',31,TIMESTAMP '1970-01-01 00:00:04','par2'),\n  ('id5','Sophia',18,TIMESTAMP '1970-01-01 00:00:05','par3'),\n  ('id6','Emma',20,TIMESTAMP '1970-01-01 00:00:06','par3'),\n  ('id7','Bob',44,TIMESTAMP '1970-01-01 00:00:07','par4'),\n  ('id8','Han',56,TIMESTAMP '1970-01-01 00:00:08','par4');\n")),(0,r.kt)("h2",{id:"query-data"},"Query data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- query from the hudi table\nselect * from t1;\n")),(0,r.kt)("p",null,"This query provides snapshot querying of the ingested data.\nRefer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts#table-types--queries"},"Table types and queries")," for more info on all table types and query types supported.\n{: .notice--info}"),(0,r.kt)("h2",{id:"update-data"},"Update data"),(0,r.kt)("p",null,"This is similar to inserting new data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- this would update the record with key 'id1'\ninsert into t1 values\n  ('id1','Danny',27,TIMESTAMP '1970-01-01 00:00:01','par1');\n")),(0,r.kt)("p",null,"Notice that the save mode is now ",(0,r.kt)("inlineCode",{parentName:"p"},"Append"),". In general, always use append mode unless you are trying to create the table for the first time.\n",(0,r.kt)("a",{parentName:"p",href:"#query-data"},"Querying")," the data again will now show updated records. Each write operation generates a new ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts"},"commit"),"\ndenoted by the timestamp. Look for changes in ",(0,r.kt)("inlineCode",{parentName:"p"},"_hoodie_commit_time"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"age")," fields for the same ",(0,r.kt)("inlineCode",{parentName:"p"},"_hoodie_record_key"),"s in previous commit.\n{: .notice--info}"),(0,r.kt)("h2",{id:"streaming-query"},"Streaming query"),(0,r.kt)("p",null,"Hudi flink also provides capability to obtain a stream of records that changed since given commit timestamp.\nThis can be achieved using Hudi's streaming querying and providing a start time from which changes need to be streamed.\nWe do not need to specify endTime, if we want all changes after the given commit (as is the common case). "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t1(\n  uuid VARCHAR(20),\n  name VARCHAR(10),\n  age INT,\n  ts TIMESTAMP(3),\n  `partition` VARCHAR(20)\n)\nPARTITIONED BY (`partition`)\nWITH (\n  'connector' = 'hudi',\n  'path' = 'oss://vvr-daily/hudi/t1',\n  'table.type' = 'MERGE_ON_READ',\n  'read.streaming.enabled' = 'true',  -- this option enable the streaming read\n  'read.streaming.start-commit' = '20210316134557' -- specifies the start commit instant time\n  'read.streaming.check-interval' = '4' -- specifies the check interval for finding new source commits, default 60s.\n);\n\n-- Then query the table in stream mode\nselect * from t1;\n")),(0,r.kt)("p",null,"This will give all changes that happened after the ",(0,r.kt)("inlineCode",{parentName:"p"},"read.streaming.start-commit")," commit. The unique thing about this\nfeature is that it now lets you author streaming pipelines on streaming or batch data source.\n{: .notice--info}"),(0,r.kt)("h2",{id:"deletes"},"Delete data"),(0,r.kt)("p",null,"When consuming data in streaming query, hudi flink source can also accepts the change logs from the underneath data source,\nit can then applies the UPDATE and DELETE by per-row level. You can then sync a NEAR-REAL-TIME snapshot on hudi for all kinds\nof RDBMS."),(0,r.kt)("h2",{id:"where-to-go-from-here"},"Where to go from here?"),(0,r.kt)("p",null,"We used flink here to show case the capabilities of Hudi. However, Hudi can support multiple table types/query types and\nHudi tables can be queried from query engines like Hive, Spark, Flink, Presto and much more. We have put together a\n",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=VhNgUsxdrD0"},"demo video")," that show cases all of this on a docker based setup with all\ndependent systems running locally. We recommend you replicate the same setup and run the demo yourself, by following\nsteps ",(0,r.kt)("a",{parentName:"p",href:"/docs/docker_demo"},"here")," to get a taste for it. Also, if you are looking for ways to migrate your existing data\nto Hudi, refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/migration_guide"},"migration guide"),"."))}c.isMDXComponent=!0}}]);