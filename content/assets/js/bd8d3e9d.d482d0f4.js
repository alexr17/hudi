"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[32746],{28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var t=i(96540);const a={},s=t.createContext(a);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(s.Provider,{value:n},e.children)}},30714:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>d});var t=i(46601),a=i(74848),s=i(28453);const r={title:"Powering Amazon Unit Economics at Scale Using Apache Hudi",excerpt:"How Amazon's Profit Intelligence team uses Apache Hudi to power hundreds of pipelines",author:"Jason, Abhishek, Sethu in collaboration with Dipankar",category:"blog",image:"/assets/images/blog/concurrency_control/amz-1200x600.jpg",tags:["Apache Hudi","Amazon","Community"]},o=void 0,l={authorsImageUrls:[void 0]},d=[{value:"The Business Need: Profit Intelligence and Unit Economics",id:"the-business-need-profit-intelligence-and-unit-economics",level:2},{value:"Amazon\u2019s Data Lakehouse Journey",id:"amazons-data-lakehouse-journey",level:2},{value:"Early Phase",id:"early-phase",level:3},{value:"Intermediate Phase",id:"intermediate-phase",level:3},{value:"Current State: Nexus + Apache Hudi",id:"current-state-nexus--apache-hudi",level:3},{value:"Key Modules of Nexus",id:"key-modules-of-nexus",level:4},{value:"Why Apache Hudi?",id:"why-apache-hudi",level:2},{value:"Key Learnings from Operating Hudi at Amazon Scale",id:"key-learnings-from-operating-hudi-at-amazon-scale",level:2},{value:"1. Concurrency Control",id:"1-concurrency-control",level:3},{value:"2. Metadata Table Management: Async vs Sync Trade-Offs",id:"2-metadata-table-management-async-vs-sync-trade-offs",level:3},{value:"3. Cost Management",id:"3-cost-management",level:3},{value:"Operational Scale: Nexus by the Numbers",id:"operational-scale-nexus-by-the-numbers",level:2}];function c(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.admonition,{title:"TL;DR",type:"tip",children:(0,a.jsx)(n.p,{children:"Amazon\u2019s Profit Intelligence team built Nexus, a configuration-driven platform powered by Apache Hudi, to scale unit economics across thousands of retail use cases. Nexus manages over 1,200 tables, processes hundreds of billions of rows daily, and handles ~1 petabyte of data churn each month. This blog dives into their data lakehouse journey, Nexus architecture, Hudi integration, and key operational learnings."})}),"\n",(0,a.jsx)(n.p,{children:"Understanding and improving unit-level profitability at Amazon's scale is a massive challenge - one that requires flexibility, precision, and operational efficiency. In this blog, we walk through how Amazon\u2019s Profit Intelligence team built a scalable, configuration-driven platform called Nexus, and how Apache Hudi became the cornerstone of its data lake architecture."}),"\n",(0,a.jsx)(n.p,{children:"By combining declarative configuration with Hudi's advanced table management capabilities, the team has enabled thousands of retail business use cases to run seamlessly, allowing finance and pricing teams to self-serve insights on cost and profitability, without constantly relying on engineering intervention."}),"\n",(0,a.jsx)(n.h2,{id:"the-business-need-profit-intelligence-and-unit-economics",children:"The Business Need: Profit Intelligence and Unit Economics"}),"\n",(0,a.jsxs)(n.p,{children:["Within Amazon\u2019s Worldwide Stores, the Selling Partner Services (SPS) team supports seller-facing operations. A key part of this effort is computing ",(0,a.jsx)(n.strong,{children:"Contribution Profit"})," - a granular metric that captures revenue, costs, and profitability at the unit level, such as ",(0,a.jsx)(n.em,{children:"a shipped item to the customer"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Contribution Profit powers decision-making for a range of downstream teams including:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Pricing"}),"\n",(0,a.jsx)(n.li,{children:"Forecasting"}),"\n",(0,a.jsx)(n.li,{children:"Finance"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"The challenge? Supporting the scale and diversity of retail use cases across Amazon's global business, while maintaining a data platform that's both extensible and maintainable."}),"\n",(0,a.jsx)(n.h2,{id:"amazons-data-lakehouse-journey",children:"Amazon\u2019s Data Lakehouse Journey"}),"\n",(0,a.jsx)(n.p,{children:"Over the past decade, the architecture behind Contribution Profit has gone through several phases of evolution, driven by the need to better support Amazon\u2019s growing and diverse retail business use cases."}),"\n",(0,a.jsx)(n.h3,{id:"early-phase",children:"Early Phase"}),"\n",(0,a.jsx)("img",{src:"/assets/images/blog/fig1_amz.png",alt:"redshift",width:"800",align:"middle"}),"\n",(0,a.jsx)(n.p,{children:"Initial implementations relied on ETL pipelines that published data to Redshift, often with unstructured job flows. Business logic could exist at various layers of the ETL and was written entirely in SQL, making it difficult to track, maintain, or modify. These pipelines lacked systematic enforcement of patterns, which led to fragmentation and technical debt."}),"\n",(0,a.jsx)(n.h3,{id:"intermediate-phase",children:"Intermediate Phase"}),"\n",(0,a.jsx)("img",{src:"/assets/images/blog/fig2_amz.png",alt:"flink",width:"800",align:"middle"}),"\n",(0,a.jsx)(n.p,{children:"To improve scalability and support streaming workloads, the team transitioned to a setup involving Apache Flink and a custom-built data lake. Although this introduced broader data processing flexibility, it still had major drawbacks:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Redshift-based ETLs remained in use."}),"\n",(0,a.jsx)(n.li,{children:"Business logic and schema changes required engineering involvement."}),"\n",(0,a.jsx)(n.li,{children:"There were ongoing scalability and maintainability issues with the custom data lake."}),"\n",(0,a.jsx)(n.li,{children:"Flink introduced operational challenges of its own, such as handling version upgrades through AWS Managed Flink and providing done signal in batch operation."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"current-state-nexus--apache-hudi",children:"Current State: Nexus + Apache Hudi"}),"\n",(0,a.jsx)(n.p,{children:"Each of the prior approaches came with tradeoffs, especially around business logic being tightly coupled with code, making it hard for non-engineers to simulate or change metrics for a specific retail business."}),"\n",(0,a.jsxs)(n.p,{children:["Recognizing the need for better abstraction and operational maturity, the team built Nexus - a configuration-driven platform for defining and orchestrating data pipelines. All lake interactions including ingestion, transformation, schema evolution, and table management now go through Nexus. Nexus is powered by ",(0,a.jsx)(n.a,{href:"https://hudi.apache.org",children:(0,a.jsx)(n.strong,{children:"Apache Hudi"})}),", which provides the foundation for scalable ingestion, efficient upserts, schema evolution, and transactional guarantees on Amazon S3."]}),"\n",(0,a.jsx)(n.p,{children:"This new architecture enabled the team to decouple business logic from engineering code, allowing business teams to define logic declaratively. It also introduced standardization across workloads, eliminated redundant pipelines, and laid the groundwork for scaling unit economics calculations across thousands of use cases."}),"\n",(0,a.jsx)(n.h4,{id:"key-modules-of-nexus",children:"Key Modules of Nexus"}),"\n",(0,a.jsx)("img",{src:"/assets/images/blog/fig3_amz.png",alt:"nexus",width:"800",align:"middle"}),"\n",(0,a.jsx)(n.p,{children:"Nexus consists of four core components:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Configuration Layer"})}),"\n",(0,a.jsx)(n.p,{children:"The topmost layer where users define their business logic in a declarative format. These configurations are typically generated and enriched with metadata by internal systems."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"NexusFlow (Orchestration)"})}),"\n",(0,a.jsx)("img",{src:"/assets/images/blog/fig4_amz.png",alt:"orch",width:"1000",align:"middle"}),"\n",(0,a.jsx)("p",{align:"center",children:(0,a.jsx)("em",{children:"Figure: Sample NexusFlow Config"})}),"\n",(0,a.jsx)(n.p,{children:"Responsible for generating and executing workflows. It operates on two levels:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Logical Layer: Comprising NexusETL jobs and other tasks."}),"\n",(0,a.jsx)(n.li,{children:"Physical Layer: Implemented via AWS Step Functions to orchestrate EMR jobs and related dependencies. NexusFlow supports extensibility through a federated model and can execute diverse task types like Spark jobs, Redshift queries, wait conditions, and legacy ETLs."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"NexusETL (Execution)"})}),"\n",(0,a.jsx)("img",{src:"/assets/images/blog/fig5_amz.png",alt:"etl",width:"1000",align:"middle"}),"\n",(0,a.jsx)("p",{align:"center",children:(0,a.jsx)("em",{children:"Figure: Sample NexusETL Config"})}),"\n",(0,a.jsx)(n.p,{children:"Executes Spark-based data transformation jobs. Jobs are defined entirely in configuration, with support for:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Built-in transforms like joins and filters"}),"\n",(0,a.jsx)(n.li,{children:"Custom UDFs"}),"\n",(0,a.jsx)(n.li,{children:"Source/Sink/Transform operators: It operates at the job abstraction level and is typically invoked by NexusFlow during orchestration."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"NexusDataLake (Storage)"})}),"\n",(0,a.jsx)("img",{src:"/assets/images/blog/fig5_amz.png",alt:"datalake",width:"1000",align:"middle"}),"\n",(0,a.jsx)("p",{align:"center",children:(0,a.jsx)("em",{children:"Figure: Sample NexusDataLake Config"})}),"\n",(0,a.jsx)(n.p,{children:"A storage abstraction layer built on Apache Hudi. NexusDataLake manages:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Table creation"}),"\n",(0,a.jsx)(n.li,{children:"Schema inference and evolution"}),"\n",(0,a.jsx)(n.li,{children:"Catalog integration: All interactions with Hudi, such as inserts, upserts, table schema changes, and metadata syncs are funneled through NexusETL and NexusFlow, maintaining consistency across the platform."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"By standardizing how data is defined, processed, and stored, Nexus has enabled a scalable, maintainable, and extensible architecture. Every data lake interaction - from ingestion to table maintenance, is performed through this configuration-first model, which now powers hundreds of use cases across Amazon retail."}),"\n",(0,a.jsx)(n.h2,{id:"why-apache-hudi",children:"Why Apache Hudi?"}),"\n",(0,a.jsx)(n.p,{children:"Apache Hudi has been central to Nexus\u2019 success, providing the core data lake storage layer for scalable ingestion, updates, and metadata management. It enables fast, incremental updates at massive scale while maintaining transactional guarantees on top of Amazon S3."}),"\n",(0,a.jsx)(n.p,{children:"In Amazon\u2019s current architecture:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Copy-on-Write (COW) table type is used for all Hudi tables."}),"\n",(0,a.jsx)(n.li,{children:"Workloads generate hundreds of billions of row updates daily, with write patterns spanning concentrated single-partition updates and wide-range backfills across up to 90 partitions."}),"\n",(0,a.jsx)(n.li,{children:"All Hudi interactions, including inserts, schema changes, and metadata syncs, are managed through Nexus."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Key Capabilities used with Apache Hudi"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Efficient Upserts"}),(0,a.jsx)(n.br,{}),"\n","Hudi\u2019s design primitives such as ",(0,a.jsx)(n.a,{href:"https://hudi.apache.org/docs/indexes",children:"indexes"})," for Copy-on-Write (CoW) tables enable high-throughput update patterns by avoiding the need to join against the entire dataset to determine which files to rewrite, which is particularly critical for our daily workloads."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Incremental Processing"}),(0,a.jsx)(n.br,{}),"\n","By using Hudi\u2019s native ",(0,a.jsx)(n.a,{href:"https://www.onehouse.ai/blog/getting-started-incrementally-process-data-with-apache-hudi",children:"incremental pull"})," capabilities, downstream systems are able to consume only the changes between commits. This is essential for efficiently updating Contribution Profit metrics that power business decision-making."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Metadata Table"}),(0,a.jsx)(n.br,{}),"\n","Enabling the ",(0,a.jsx)(n.a,{href:"https://hudi.apache.org/docs/metadata",children:"metadata table"})," (",(0,a.jsx)(n.code,{children:"hoodie.metadata.enable=true"}),") significantly reduced job runtimes by avoiding expensive file listings on S3. This is an important optimization given the scale at which we process updates across more than 1200 Hudi tables."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Schema Evolution"}),(0,a.jsx)(n.br,{}),"\n","Table creation and evolution are fully managed through configuration in Nexus. Hudi\u2019s built-in support for ",(0,a.jsx)(n.a,{href:"https://hudi.apache.org/docs/schema_evolution",children:"schema evolution"})," has allowed the team to onboard new use cases and adapt to changing schemas without requiring expensive rewrites or manual interventions."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"key-learnings-from-operating-hudi-at-amazon-scale",children:"Key Learnings from Operating Hudi at Amazon Scale"}),"\n",(0,a.jsx)(n.p,{children:"Operating Apache Hudi at the scale and velocity required by Amazon\u2019s Profit Intelligence workloads surfaced a set of hard-earned lessons, especially around concurrency, metadata handling, and cost optimization. These learnings reflect both architectural refinements and operational trade-offs that others adopting Hudi at large scale may find useful."}),"\n",(0,a.jsx)(n.h3,{id:"1-concurrency-control",children:"1. Concurrency Control"}),"\n",(0,a.jsx)(n.p,{children:"At Amazon\u2019s ingestion scale - hundreds of billions of rows per day and thousands of concurrent table updates, multi-writer concurrency is a reality, not an edge case."}),"\n",(0,a.jsx)(n.p,{children:"The team initially used Optimistic Concurrency Control (OCC), which works well in environments with low write conflicts. OCC assumes that concurrent writers rarely overlap, and when they do, the job retries after detecting a conflict. However, in high-contention scenarios, like multiple jobs writing to the same partition within a short time window, this led to frequent retries and job failures."}),"\n",(0,a.jsx)(n.p,{children:"To resolve this, the team pivoted to a new table structure designed to minimize concurrent insertions. This change helped reduce contention by lowering the likelihood of multiple writers operating on overlapping partitions simultaneously. The updated design enabled using OCC while avoiding the excessive retries and failures we had initially encountered."}),"\n",(0,a.jsx)(n.h3,{id:"2-metadata-table-management-async-vs-sync-trade-offs",children:"2. Metadata Table Management: Async vs Sync Trade-Offs"}),"\n",(0,a.jsxs)(n.p,{children:["Apache Hudi\u2019s metadata table dramatically improves performance by avoiding expensive file listings on cloud object stores like S3. It maintains a persistent ",(0,a.jsx)(n.em,{children:"index"})," ",(0,a.jsx)(n.em,{children:"of files"}),", enabling faster operations such as file pruning, and data skipping."]}),"\n",(0,a.jsxs)(n.p,{children:["The team enabled Hudi\u2019s metadata table early (",(0,a.jsx)(n.code,{children:"hoodie.metadata.enable=true"}),") and started off with synchronous cleaning but switched to asynchronous cleaning to reduce job runtime. However, we ran into an issue when experimenting with asynchronous cleaning. Due to a ",(0,a.jsx)(n.a,{href:"https://github.com/apache/hudi/issues/11535",children:"known issue (#11535)"}),", async cleaning wasn\u2019t properly cleaning up metadata entries."]}),"\n",(0,a.jsx)(n.p,{children:"To ensure the metadata tables were properly cleaned, we switched all of  our Hudi workloads back to synchronous cleaning."}),"\n",(0,a.jsx)(n.h3,{id:"3-cost-management",children:"3. Cost Management"}),"\n",(0,a.jsx)(n.p,{children:"While Apache Hudi helped Amazon reduce data duplication and improve ingestion efficiency, we quickly realized that operational costs were not driven by storage - but by the API interaction patterns with S3."}),"\n",(0,a.jsx)(n.p,{children:"Breakdown of the cost profile:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"70% of total cost"})," came from ",(0,a.jsx)(n.code,{children:"PUT"})," requests (writes)"]}),"\n",(0,a.jsxs)(n.li,{children:["Combined ",(0,a.jsx)(n.code,{children:"PUT + GET"})," operations accounted for ",(0,a.jsx)(n.strong,{children:"80%"})," of the bill"]}),"\n",(0,a.jsx)(n.li,{children:"Storage cost remained a small fraction, even with 3+ PB of total data under management"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Their data ingestion patterns contributed to this:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Daily workloads: Heavy concentration (99%) of updates into a single partition"}),"\n",(0,a.jsx)(n.li,{children:"Backfill workloads: Spread evenly across 30\u201390 partitions"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"To manage this:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["We moved to ",(0,a.jsx)(n.strong,{children:"S3 Intelligent-Tiering"})," to reduce unused data storage costs"]}),"\n",(0,a.jsxs)(n.li,{children:["Enabled ",(0,a.jsx)(n.strong,{children:"EMR cluster auto-scaling"})," to dynamically adjust compute resources"]}),"\n",(0,a.jsxs)(n.li,{children:["Batched writes and carefully tuned Hudi configurations (e.g., ",(0,a.jsx)(n.code,{children:"write.batch.size"}),", ",(0,a.jsx)(n.code,{children:"compaction.small.file.limit"}),") to reduce unnecessary file churn"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"operational-scale-nexus-by-the-numbers",children:"Operational Scale: Nexus by the Numbers"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{style:{textAlign:"left"},children:"Metric"}),(0,a.jsx)(n.th,{style:{textAlign:"left"},children:"Value"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{style:{textAlign:"left"},children:"Tables Managed"}),(0,a.jsx)(n.td,{style:{textAlign:"left"},children:"1200+ (5\u201315 updates/day per table)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{style:{textAlign:"left"},children:"Legacy SQL Deprecated"}),(0,a.jsx)(n.td,{style:{textAlign:"left"},children:"300,000+ lines"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{style:{textAlign:"left"},children:"Total Data Managed"}),(0,a.jsx)(n.td,{style:{textAlign:"left"},children:"~3 Petabytes"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{style:{textAlign:"left"},children:"Monthly Data Changes"}),(0,a.jsx)(n.td,{style:{textAlign:"left"},children:"~1 Petabyte added/deleted"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{style:{textAlign:"left"},children:"Daily Record Updates"}),(0,a.jsx)(n.td,{style:{textAlign:"left"},children:"Hundreds of billions"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{style:{textAlign:"left"},children:"Developer Time Saved"}),(0,a.jsx)(n.td,{style:{textAlign:"left"},children:"300+ days"})]})]})]}),"\n",(0,a.jsx)(n.p,{children:"Nexus with Apache Hudi as the foundation has significantly improved the scale, modularity, and maintainability of the data lake operations at Amazon. As the business use cases scale, the team is also focused on managing the increasing complexity of the data lake, while ensuring that both technical and non-technical stakeholders can interact with Nexus effectively."}),"\n",(0,a.jsxs)(n.p,{children:["This blog is based on Amazon\u2019s presentation at the Hudi Community Sync. If you are interested in watching the recorded version of the video, you can find it ",(0,a.jsx)(n.a,{href:"https://www.youtube.com/watch?v=rMXhlb7Uci8",children:"here"}),"."]}),"\n",(0,a.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},46601:e=>{e.exports=JSON.parse('{"permalink":"/blog/2025/03/31/amazon-hudi","editUrl":"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2025-03-31-amazon-hudi.md","source":"@site/blog/2025-03-31-amazon-hudi.md","title":"Powering Amazon Unit Economics at Scale Using Apache Hudi","description":"Amazon\u2019s Profit Intelligence team built Nexus, a configuration-driven platform powered by Apache Hudi, to scale unit economics across thousands of retail use cases. Nexus manages over 1,200 tables, processes hundreds of billions of rows daily, and handles ~1 petabyte of data churn each month. This blog dives into their data lakehouse journey, Nexus architecture, Hudi integration, and key operational learnings.","date":"2025-03-31T00:00:00.000Z","tags":[{"inline":true,"label":"Apache Hudi","permalink":"/blog/tags/apache-hudi"},{"inline":true,"label":"Amazon","permalink":"/blog/tags/amazon"},{"inline":true,"label":"Community","permalink":"/blog/tags/community"}],"readingTime":8.605,"hasTruncateMarker":false,"authors":[{"name":"Jason, Abhishek, Sethu in collaboration with Dipankar","key":null,"page":null}],"frontMatter":{"title":"Powering Amazon Unit Economics at Scale Using Apache Hudi","excerpt":"How Amazon\'s Profit Intelligence team uses Apache Hudi to power hundreds of pipelines","author":"Jason, Abhishek, Sethu in collaboration with Dipankar","category":"blog","image":"/assets/images/blog/concurrency_control/amz-1200x600.jpg","tags":["Apache Hudi","Amazon","Community"]},"unlisted":false,"nextItem":{"title":"Building an Amazon Sales Analytics Pipeline with Apache Hudi on Databricks","permalink":"/blog/2025/03/13/hudi-on-dbr"}}')}}]);