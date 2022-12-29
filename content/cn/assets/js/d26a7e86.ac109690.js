"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[20700],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),h=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=h(a),c=r,m=u["".concat(l,".").concat(c)]||u[c]||p[c]||i;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var h=2;h<i;h++)o[h]=a[h];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6127:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>h});var n=a(87462),r=(a(67294),a(3905));const i={title:"Apache Hudi 2022 - A year in Review",excerpt:"2022 was the best year for Apache Hudi yet! Huge thank you to everyone who contributed!",author:"Sivabalan Narayanan",category:"blog",image:"/assets/images/blog/Apache-Hudi-2022-Review.png",tags:["apache hudi"]},o=void 0,s={permalink:"/cn/blog/2022/12/29/Apache-Hudi-2022-A-Year-In-Review",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2022-12-29-Apache-Hudi-2022-A-Year-In-Review.md",source:"@site/blog/2022-12-29-Apache-Hudi-2022-A-Year-In-Review.md",title:"Apache Hudi 2022 - A year in Review",description:"Apache Hudi Momentum",date:"2022-12-29T00:00:00.000Z",formattedDate:"December 29, 2022",tags:[{label:"apache hudi",permalink:"/cn/blog/tags/apache-hudi"}],readingTime:7.36,truncated:!1,authors:[{name:"Sivabalan Narayanan"}],nextItem:{title:"Build Your First Hudi Lakehouse with AWS S3 and AWS Glue",permalink:"/cn/blog/2022/12/19/Build-Your-First-Hudi-Lakehouse-with-AWS-Glue-and-AWS-S3"}},l={authorsImageUrls:[void 0]},h=[{value:"Apache Hudi Momentum",id:"apache-hudi-momentum",children:[],level:2},{value:"Key Releases in 2022",id:"key-releases-in-2022",children:[],level:2},{value:"Community Events",id:"community-events",children:[],level:2},{value:"Community Content",id:"community-content",children:[],level:2},{value:"What to look for in 2023",id:"what-to-look-for-in-2023",children:[],level:2}],d={toc:h};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("img",{src:"/assets/images/blog/Apache-Hudi-2022-Review.png",alt:"drawing",style:{width:"80%",display:"block",marginLeft:"auto",marginRight:"auto"}}),(0,r.kt)("h2",{id:"apache-hudi-momentum"},"Apache Hudi Momentum"),(0,r.kt)("p",null,"As we wrap up 2022 I want to take the opportunity to reflect on and highlight the incredible progress of the Apache Hudi\nproject and most importantly, the community. First and foremost, I want to thank all of the contributors who have made\n2022 the best year for the project ever. There were ",(0,r.kt)("a",{parentName:"p",href:"https://ossinsight.io/analyze/apache/hudi#pull-requests"},"over 2,200 PRs"),"\ncreated (+38% YoY) and over 600+ users engaged on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/"},"Github"),". The Apache Hudi community\n",(0,r.kt)("a",{parentName:"p",href:"https://join.slack.com/t/apache-hudi/shared_invite/zt-1e94d3xro-JvlNO1kSeIHJBTVfLPlI5w"},"slack channel")," has grown to more\nthan 2,600 users (+100% YoY growth) averaging nearly 200 messages per month! The most impressive stat is that with this\nvolume growth, the median response time to questions is ~3h. ",(0,r.kt)("a",{parentName:"p",href:"https://join.slack.com/t/apache-hudi/shared_invite/zt-1e94d3xro-JvlNO1kSeIHJBTVfLPlI5w"},"Come join the community"),"\nwhere people are sharing and helping each other!"),(0,r.kt)("img",{src:"/assets/images/blog/Apache-Hudi-Pull-Request-History.png",alt:"drawing",style:{width:"80%",display:"block",marginLeft:"auto",marginRight:"auto"}}),(0,r.kt)("h2",{id:"key-releases-in-2022"},"Key Releases in 2022"),(0,r.kt)("p",null,"2022 has been a year jam packed with exciting new features for Apache Hudi across 0.11.0 and 0.12.0 releases. In addition to new features, vendor/ecosystem partnerships and relationships have been strengthened across many in the community. ",(0,r.kt)("a",{parentName:"p",href:"https://www.onehouse.ai/blog/apache-hudi-native-aws-integrations"},"AWS continues to double down")," on Apache Hudi, upgrading versions in ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-hudi.html"},"EMR"),", ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/athena/latest/ug/querying-hudi.html"},"Athena"),", ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/redshift/latest/dg/c-spectrum-external-tables.html"},"Redshift"),", and announcing a new ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-format-hudi.html"},"native connector inside Glue"),". ",(0,r.kt)("a",{parentName:"p",href:"https://prestodb.io/docs/current/connector/hudi.html"},"Presto")," and ",(0,r.kt)("a",{parentName:"p",href:"https://trino.io/docs/current/connector/hudi.html"},"Trino")," merged native Hudi connectors for interactive analytics. ",(0,r.kt)("a",{parentName:"p",href:"https://hudi.apache.org/blog/2022/07/11/build-open-lakehouse-using-apache-hudi-and-dbt/"},"DBT"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/tree/master/hudi-kafka-connect"},"Confluent"),", ",(0,r.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/syncing_datahub"},"Datahub"),", and several others have added support for Hudi tables. While Google has supported Hudi for a while in ",(0,r.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/gcp_bigquery/"},"BigQuery")," and ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/blog/products/data-analytics/getting-started-with-new-table-formats-on-dataproc"},"Dataproc"),", it also announced plans to add Hudi in ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/blog/products/data-analytics/building-most-open-data-cloud-all-data-all-source-any-platform"},"BigLake"),". The first tutorial for ",(0,r.kt)("a",{parentName:"p",href:"https://www.onehouse.ai/blog/apache-hudi-on-microsoft-azure"},"Hudi on Azure Synapse Analytics")," was published."),(0,r.kt)("p",null,"While there are too many features added in 2022 to list them all, take a look at some of the exciting highlights:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hudi.apache.org/blog/2022/05/17/Introducing-Multi-Modal-Index-for-the-Lakehouse-in-Apache-Hudi"},"Multi-Modal Index")," is a first-of-its-kind high-performance indexing subsystem for the Lakehouse. It improves metadata lookup performance by up to 100x and reduces overall query latency by up to 30x. Two new indices were added to the metadata table - Bloom filter index that enables faster upsert performance and",(0,r.kt)("a",{parentName:"li",href:"https://hudi.apache.org/blog/2022/06/09/Singificant-queries-speedup-from-Hudi-Column-Stats-Index-and-Data-Skipping-features"},"  column stats index along with Data skipping"),"  helps speed up queries dramatically."),(0,r.kt)("li",{parentName:"ul"},"Hudi added support for ",(0,r.kt)("a",{parentName:"li",href:"https://hudi.apache.org/releases/release-0.11.0/#async-indexer"},"asynchronous indexing")," to assist building such indices without blocking ingestion so that regular writers don't need to scale up resources for such one off spikes."),(0,r.kt)("li",{parentName:"ul"},"A new type of index called Bucket Index was introduced this year. This could be game changing for deterministic workloads with partitioned datasets. It is very light-weight and allows the distribution of records to buckets using a hash function."),(0,r.kt)("li",{parentName:"ul"},"Filesystem based Lock Provider - This implementation avoids the need of external systems and leverages the abilities of underlying filesystem to support lock provider needed for optimistic concurrency control in case of multiple writers. Please check the ",(0,r.kt)("a",{parentName:"li",href:"https://hudi.apache.org/docs/configurations#Locks-Configurations"},"lock configuration")," for details."),(0,r.kt)("li",{parentName:"ul"},"Deltastreamer Graceful Completion - Users can now configure a post-write completion strategy with deltastreamer continuous mode for graceful shutdown."),(0,r.kt)("li",{parentName:"ul"},"Schema on read is supported as an experimental feature since 0.11.0, allowing users to leverage Spark SQL DDL\xa0 support for ",(0,r.kt)("a",{parentName:"li",href:"https://hudi.apache.org/docs/schema_evolution"},"evolving data schema")," needs(drop, rename etc).\xa0 Added support for a lot of ",(0,r.kt)("a",{parentName:"li",href:"https://hudi.apache.org/docs/procedures/"},"CALL commands")," to invoke an array of actions on Hudi tables."),(0,r.kt)("li",{parentName:"ul"},"It is now feasible to ",(0,r.kt)("a",{parentName:"li",href:"https://hudi.apache.org/docs/encryption/"},"encrypt")," your data that you store with Apache Hudi."),(0,r.kt)("li",{parentName:"ul"},"Pulsar Write Commit Callback - On new events to the Hudi table, users can get notified via Pulsar."),(0,r.kt)("li",{parentName:"ul"},"Flink Enhancements: We added metadata table support, async clustering, data skipping, and bucket index for write paths. We also extended flink support to versions 1.13.x, 1.14.x and",(0,r.kt)("a",{parentName:"li",href:"https://hudi.apache.org/releases/release-0.12.0/#bundle-updates"},"  1.15.x"),"."),(0,r.kt)("li",{parentName:"ul"},"Presto Hudi integration: In addition to the hive connector we have had for a long time, we added ",(0,r.kt)("a",{parentName:"li",href:"https://prestodb.io/docs/current/connector/hudi.html"},"native Presto Hudi connector"),". This enables users to get access to advanced features of Hudi faster. Users can now leverage metadata table to reduce file listing cost. We also added support for accessing clustered datasets this year."),(0,r.kt)("li",{parentName:"ul"},"Trino Hudi integration: We also added ",(0,r.kt)("a",{parentName:"li",href:"https://trino.io/docs/current/connector/hudi.html"},"native Trino Hudi connector")," to assist in querying Hudi tables via Trino Engine. Users can now leverage metadata table to make their queries performant."),(0,r.kt)("li",{parentName:"ul"},"Performance enhancements: Many performance optimizations were landed by the community throughout the year to keep Hudi on par with competition or better. Check out this ",(0,r.kt)("a",{parentName:"li",href:"https://hudi.apache.org/blog/2022/06/29/Apache-Hudi-vs-Delta-Lake-transparent-tpc-ds-lakehouse-performance-benchmarks"},"TPC-DS benchmark")," comparing Hudi vs Delta Lake."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hudi.apache.org/releases/release-0.12.2#long-term-support"},"Long Term Support"),": We start to maintain 0.12 as the Long Term Support releases for users to migrate to and stay for a longer duration. In lieu of that, we have made 0.12.1\xa0 and 0.12.2 releases to assist users with stable release that comes packed with a lot of stability and bug fixes.")),(0,r.kt)("h2",{id:"community-events"},"Community Events"),(0,r.kt)("p",null,"Apache Hudi is a global community and thankfully we live in a world today that empowers virtual collaboration and productivity. In addition to connecting virtually this year we have seen the Apache Hudi community gather at many events in person. Re:Invent, Data+AI Summit, Flink Forward, Alluxio Day, Data Council, PrestoCon, Confluent Current, DBT Coalesce, Cinco de Trino, Data Platform Summit, and many more."),(0,r.kt)("img",{src:"/assets/images/blog/Apache-Hudi-Conferences.png",alt:"drawing",style:{width:"80%",display:"block",marginLeft:"auto",marginRight:"auto"}}),(0,r.kt)("p",null,"You don\u2019t have to travel far to meet and collaborate with the Hudi community. We hold monthly virtual meetups, weekly office hours, and there are plenty of friendly faces on Hudi Slack who like to talk shop. Join us via Zoom for the next Hudi meetup!"),(0,r.kt)("h2",{id:"community-content"},"Community Content"),(0,r.kt)("p",null,"A wide diversity of organizations around the globe use Apache Hudi as the foundation of their production data platforms. Over 800+ organizations have engaged with Hudi (up 60% YoY) Here are a few highlights of content written by the community sharing their experiences, designs, and best practices:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/blogs/big-data/part-1-build-your-apache-hudi-data-lake-on-aws-using-amazon-emr/"},"Build your Hudi data lake on AWS")," - Suthan Phillips and Dylan Qu from AWS"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/playlist?list=PLL2hlSFBmWwwbMpcyMjYuRn8cN99gFSY6"},"Soumil Shah Hudi Youtube Playlist")," - Soumil Shah from JobTarget"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/walmartglobaltech/implementation-of-scd-2-slowly-changing-dimension-with-apache-hudi-465e0eb94a5"},"SCD-2 with Apache Hudi")," - Jayasheel Kalgal from Walmart"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.onehouse.ai/blog/apache-hudi-vs-delta-lake-vs-apache-iceberg-lakehouse-feature-comparison"},"Hudi vs Delta vs Iceberg comparisons")," - Kyle Weller from Onehouse"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/blogs/big-data/how-nerdwallet-uses-aws-and-apache-hudi-to-build-a-serverless-real-time-analytics-platform/"},"Serverless, real-time analytics platform")," - Kevin Chun from NerdWallet"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://hudi.apache.org/blog/2022/07/11/build-open-lakehouse-using-apache-hudi-and-dbt/"},"DBT and Hudi to Build Open Lakehouse")," - Vinoth Govindarajan from Apple"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.onehouse.ai/blog/apache-hudi-vs-delta-lake-transparent-tpc-ds-lakehouse-performance-benchmarks"},"TPC-DS Benchmarks Hudi vs Delta Lake")," - Alexey Kudinkin from Onehouse"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://blogs.halodoc.io/key-learnings-on-using-apache-hudi-in-building-lakehouse-architecture-halodoc/"},"Key Learnings Using Hudi building a Lakehouse")," - Jitendra Shah from Halodoc"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/blogs/architecture/insights-for-ctos-part-3-growing-your-business-with-modern-data-capabilities/"},"Growing your business with modern data capabilities")," - Jonathan Hwang from Zendesk"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/blogs/big-data/create-a-low-latency-source-to-data-lake-pipeline-using-amazon-msk-connect-apache-flink-and-apache-hudi/"},"Low-latency data lake using MSK, Flink, and Hudi")," - Ali Alemi from AWS"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://robinhood.engineering/author-balaji-varadarajan-e3f496815ebf"},"Fresher data lakes on AWS S3")," - Balaji Varadarajan from Robinhood"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=ZamXiT9aqs8"},"Experiences with Hudi from Uber meetup")," - Sam Guleff from Walmart and Vinay Patil from Disney+ Hotstar")),(0,r.kt)("h2",{id:"what-to-look-for-in-2023"},"What to look for in 2023"),(0,r.kt)("p",null,"Thanks to the strength of the community, Apache Hudi has a bright future for 2023. Check out ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/9LPSdd-AS8E?t=2090"},"this recording")," from our Re:Invent meetup where Vinoth Chandar talks about exciting new features to expect in 2023."),(0,r.kt)("p",null,"0.13.0 will be the next major release, with a package of exciting new features. Here are a few highlights:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cwiki.apache.org/confluence/display/HUDI/RFC-08++Record+level+indexing+mechanisms+for+Hudi+datasets"},"Record-key-based index")," to speed up the lookup of records for UUID-based updates and deletes, well tested with 10+ TB index data for hundreds of billions of records at Uber;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/hudi/blob/master/rfc/rfc-42/rfc-42.md"},"Consistent Hashing Index")," with dynamically-sized buckets to achieve fast upsert performance with no data skew among file groups compared to existing ",(0,r.kt)("a",{parentName:"li",href:"https://cwiki.apache.org/confluence/display/HUDI/RFC+-+29%3A+Hash+Index"},"Bucket Index"),";"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/hudi/blob/master/rfc/rfc-51/rfc-51.md"},"New CDC format")," with Debezium-like database change logs to provide before and after image and operation field for streaming changes from Hudi tables, friendly to engines like Flink;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/hudi/blob/master/rfc/rfc-46/rfc-46.md"},"New Record Merge API")," to support engine-specific record representation for more efficient writes;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/hudi/blob/master/rfc/rfc-56/rfc-56.md"},"Early detection of conflicts")," among concurrent writers to give back compute resources proactively.")),(0,r.kt)("p",null,"The long-term vision of Apache Hudi is to make streaming data lake the mainstream, achieving sub-minute commit SLAs with stellar query performance and incremental ETLs.\xa0 We plan to harden the indexing subsystem with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/pull/7080"},"Table APIs")," for easy integration with query engines and access to Hudi metadata and indexes, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/pull/7235"},"Indexing Functions")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/master/rfc/rfc-60/rfc-60.md"},"a Federated Storage Layer")," to eliminate the notion of partitions and reduce I/O, and new ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/pull/5370"},"secondary indexes"),".\xa0 To realize fast queries, we will provide an option of a standalone ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/pull/4718"},"MetaServer")," serving Hudi metadata to plan queries in milliseconds and a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1QBgLw11TM2Qf1KUESofGrQDb63EuggNCpPaxc82Kldo/edit#slide=id.gf7e0551254_0_5"},"Hudi-aware lake cache")," that speeds up the read performance of MOR tables along with fast writes for updates.\xa0 Incremental and streaming SQL will be enhanced in Spark and Flink.\xa0 For Hudi on Flink, we plan to make the multi-modal indexing production-ready, bring read and write compatibility between Flink and Spark engines, and harden the streaming capabilities, including CDC, streaming ETL semantics, pre-aggregation models and materialized views."),(0,r.kt)("p",null,"Check out ",(0,r.kt)("a",{parentName:"p",href:"https://hudi.apache.org/roadmap"},"Hudi Roadmap")," for more to come in 2023!"),(0,r.kt)("p",null,"If you haven't tried Apache Hudi yet, 2023 is your year! Here are a few useful links to help you get started:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://hudi.apache.org/docs/overview"},"Apache Hudi Docs")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://join.slack.com/t/apache-hudi/shared_invite/zt-1e94d3xro-JvlNO1kSeIHJBTVfLPlI5w"},"Hudi Slack Channel")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://hudi.apache.org/community/office_hours"},"Hudi Weekly Office Hours")," and ",(0,r.kt)("a",{parentName:"li",href:"https://hudi.apache.org/community/syncs#monthly-community-call"},"Monthly Meetup")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://hudi.apache.org/contribute/how-to-contribute"},"Contributor Guide"))),(0,r.kt)("p",null,"If you enjoyed Hudi in 2022 don't forget to give it a little star on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/"},"Github")," \u2b50"))}u.isMDXComponent=!0}}]);