"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[68752],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?i.createElement(m,o(o({ref:t},p),{},{components:n})):i.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68302:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],s={title:"Performance",keywords:["hudi","index","storage","compaction","cleaning","implementation"],toc:!1,last_modified_at:new Date("2019-12-30T19:59:57.000Z")},l=void 0,c={unversionedId:"performance",id:"version-0.10.1/performance",title:"Performance",description:"Optimized DFS Access",source:"@site/versioned_docs/version-0.10.1/performance.md",sourceDirName:".",slug:"/performance",permalink:"/cn/docs/0.10.1/performance",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.10.1/performance.md",tags:[],version:"0.10.1",frontMatter:{title:"Performance",keywords:["hudi","index","storage","compaction","cleaning","implementation"],toc:!1,last_modified_at:"2019-12-30T19:59:57.000Z"},sidebar:"version-0.10.1/docs",previous:{title:"Query Engine Setup",permalink:"/cn/docs/0.10.1/query_engine_setup"},next:{title:"Deployment",permalink:"/cn/docs/0.10.1/deployment"}},p=[{value:"Optimized DFS Access",id:"optimized-dfs-access",children:[],level:2},{value:"Performance Gains",id:"performance-gains",children:[{value:"Upserts",id:"upserts",children:[],level:3},{value:"Indexing",id:"indexing",children:[],level:3},{value:"Snapshot Queries",id:"snapshot-queries",children:[],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,s=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"optimized-dfs-access"},"Optimized DFS Access"),(0,a.kt)("p",null,"Hudi also performs several key storage management functions on the data stored in a Hudi table. A key aspect of storing data on DFS is managing file sizes and counts\nand reclaiming storage space. For e.g HDFS is infamous for its handling of small files, which exerts memory/RPC pressure on the Name Node and can potentially destabilize\nthe entire cluster. In general, query engines provide much better performance on adequately sized columnar files, since they can effectively amortize cost of obtaining\ncolumn statistics etc. Even on some cloud data stores, there is often cost to listing directories with large number of small files."),(0,a.kt)("p",null,"Here are some ways to efficiently manage the storage of your Hudi tables."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",{parentName:"li",href:"/docs/configurations#compactionSmallFileSize"},"small file handling feature")," in Hudi, profiles incoming workload\nand distributes inserts to existing file groups instead of creating new file groups, which can lead to small files."),(0,a.kt)("li",{parentName:"ul"},"Cleaner can be ",(0,a.kt)("a",{parentName:"li",href:"/docs/configurations#retainCommits"},"configured")," to clean up older file slices, more or less aggressively depending on maximum time for queries to run & lookback needed for incremental pull"),(0,a.kt)("li",{parentName:"ul"},"User can also tune the size of the ",(0,a.kt)("a",{parentName:"li",href:"/docs/configurations#limitFileSize"},"base/parquet file"),", ",(0,a.kt)("a",{parentName:"li",href:"/docs/configurations#logFileMaxSize"},"log files")," & expected ",(0,a.kt)("a",{parentName:"li",href:"/docs/configurations#parquetCompressionRatio"},"compression ratio"),",\nsuch that sufficient number of inserts are grouped into the same file group, resulting in well sized base files ultimately."),(0,a.kt)("li",{parentName:"ul"},"Intelligently tuning the ",(0,a.kt)("a",{parentName:"li",href:"/docs/configurations#withBulkInsertParallelism"},"bulk insert parallelism"),", can again in nicely sized initial file groups. It is in fact critical to get this right, since the file groups\nonce created cannot be deleted, but simply expanded as explained before."),(0,a.kt)("li",{parentName:"ul"},"For workloads with heavy updates, the ",(0,a.kt)("a",{parentName:"li",href:"/docs/concepts#merge-on-read-table"},"merge-on-read table")," provides a nice mechanism for ingesting quickly into smaller files and then later merging them into larger base files via compaction.")),(0,a.kt)("h2",{id:"performance-gains"},"Performance Gains"),(0,a.kt)("p",null,"In this section, we go over some real world performance numbers for Hudi upserts, incremental pull and compare them against\nthe conventional alternatives for achieving these tasks. "),(0,a.kt)("h3",{id:"upserts"},"Upserts"),(0,a.kt)("p",null,"Following shows the speed up obtained for NoSQL database ingestion, from incrementally upserting on a Hudi table on the copy-on-write storage,\non 5 tables ranging from small to huge (as opposed to bulk loading the tables)"),(0,a.kt)("figure",null,(0,a.kt)("img",{className:"docimage",src:n(28323).Z,alt:"hudi_upsert_perf1.png"})),(0,a.kt)("p",null,"Given Hudi can build the table incrementally, it opens doors for also scheduling ingesting more frequently thus reducing latency, with\nsignificant savings on the overall compute cost."),(0,a.kt)("figure",null,(0,a.kt)("img",{className:"docimage",src:n(1620).Z,alt:"hudi_upsert_perf2.png"})),(0,a.kt)("p",null,"Hudi upserts have been stress tested upto 4TB in a single commit across the t1 table.\nSee ",(0,a.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/HUDI/Tuning+Guide"},"here")," for some tuning tips."),(0,a.kt)("h3",{id:"indexing"},"Indexing"),(0,a.kt)("p",null,"In order to efficiently upsert data, Hudi needs to classify records in a write batch into inserts & updates (tagged with the file group\nit belongs to). In order to speed this operation, Hudi employs a pluggable index mechanism that stores a mapping between recordKey and\nthe file group id it belongs to. By default, Hudi uses a built in index that uses file ranges and bloom filters to accomplish this, with\nupto 10x speed up over a spark join to do the same. "),(0,a.kt)("p",null,"Hudi provides best indexing performance when you model the recordKey to be monotonically increasing (e.g timestamp prefix), leading to range pruning filtering\nout a lot of files for comparison. Even for UUID based keys, there are ",(0,a.kt)("a",{parentName:"p",href:"https://www.percona.com/blog/2014/12/19/store-uuid-optimized-way/"},"known techniques")," to achieve this.\nFor e.g , with 100M timestamp prefixed keys (5% updates, 95% inserts) on a event table with 80B keys/3 partitions/11416 files/10TB data, Hudi index achieves a\n",(0,a.kt)("strong",{parentName:"p"},"~7X (2880 secs vs 440 secs) speed up")," over vanilla spark join. Even for a challenging workload like an '100% update' database ingestion workload spanning\n3.25B UUID keys/30 partitions/6180 files using 300 cores, Hudi indexing offers a ",(0,a.kt)("strong",{parentName:"p"},"80-100% speedup"),"."),(0,a.kt)("h3",{id:"snapshot-queries"},"Snapshot Queries"),(0,a.kt)("p",null,"The major design goal for snapshot queries is to achieve the latency reduction & efficiency gains in previous section,\nwith no impact on queries. Following charts compare the Hudi vs non-Hudi tables across Hive/Presto/Spark queries and demonstrate this."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Hive")),(0,a.kt)("figure",null,(0,a.kt)("img",{className:"docimage",src:n(74998).Z,alt:"hudi_query_perf_hive.png"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Spark")),(0,a.kt)("figure",null,(0,a.kt)("img",{className:"docimage",src:n(2772).Z,alt:"hudi_query_perf_spark.png"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Presto")),(0,a.kt)("figure",null,(0,a.kt)("img",{className:"docimage",src:n(85603).Z,alt:"hudi_query_perf_presto.png"})))}d.isMDXComponent=!0},74998:function(e,t,n){t.Z=n.p+"assets/images/hudi_query_perf_hive-f7884cd11e19b3885a6c92d699cde0ba.png"},85603:function(e,t,n){t.Z=n.p+"assets/images/hudi_query_perf_presto-4aa54422d000ede251c11b93df259be7.png"},2772:function(e,t,n){t.Z=n.p+"assets/images/hudi_query_perf_spark-e829c75ccd5285e157f24bf83e65ff9a.png"},28323:function(e,t,n){t.Z=n.p+"assets/images/hudi_upsert_perf1-8f41921dacb5fb026f1e5457f8c47aa6.png"},1620:function(e,t,n){t.Z=n.p+"assets/images/hudi_upsert_perf2-d4bfcab4e9e8d942a02b712797ee2755.png"}}]);