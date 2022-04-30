"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[63993],{3905:function(e,i,t){t.d(i,{Zo:function(){return f},kt:function(){return p}});var n=t(67294);function a(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function r(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?r(Object(t),!0).forEach((function(i){a(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function s(e,i){if(null==e)return{};var t,n,a=function(e,i){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],i.indexOf(t)>=0||(a[t]=e[t]);return a}(e,i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),u=function(e){var i=n.useContext(o),t=i;return e&&(t="function"==typeof e?e(i):l(l({},i),e)),t},f=function(e){var i=u(e.components);return n.createElement(o.Provider,{value:i},e.children)},c={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},d=n.forwardRef((function(e,i){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),d=u(t),p=a,m=d["".concat(o,".").concat(p)]||d[p]||c[p]||r;return t?n.createElement(m,l(l({ref:i},f),{},{components:t})):n.createElement(m,l({ref:i},f))}));function p(e,i){var t=arguments,a=i&&i.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=d;var s={};for(var o in i)hasOwnProperty.call(i,o)&&(s[o]=i[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<r;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},34012:function(e,i,t){t.r(i),t.d(i,{assets:function(){return f},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var n=t(87462),a=t(63366),r=(t(67294),t(3905)),l=["components"],s={title:"Streaming Responsibly - How Apache Hudi maintains optimum sized files",excerpt:"Maintaining well-sized files can improve query performance significantly",author:"shivnarayan",category:"blog"},o=void 0,u={permalink:"/cn/blog/2021/03/01/hudi-file-sizing",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2021-03-01-hudi-file-sizing.md",source:"@site/blog/2021-03-01-hudi-file-sizing.md",title:"Streaming Responsibly - How Apache Hudi maintains optimum sized files",description:"Apache Hudi is a data lake platform technology that provides several functionalities needed to build and manage data lakes.",date:"2021-03-01T00:00:00.000Z",formattedDate:"March 1, 2021",tags:[],readingTime:4.33,truncated:!0,authors:[{name:"shivnarayan"}],prevItem:{title:"Employing correct configurations for Hudi's cleaner table service",permalink:"/cn/blog/2021/06/10/employing-right-configurations-for-hudi-cleaner"},nextItem:{title:"Apache Hudi Key Generators",permalink:"/cn/blog/2021/02/13/hudi-key-generators"}},f={authorsImageUrls:[void 0]},c=[{value:"Configs",id:"configs",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],d={toc:c};function p(e){var i=e.components,s=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},d,s,{components:i,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Apache Hudi is a data lake platform technology that provides several functionalities needed to build and manage data lakes.\nOne such key feature that hudi provides is self-managing file sizing so that users don\u2019t need to worry about\nmanual table maintenance. Having a lot of small files will make it harder to achieve good query performance, due to query engines\nhaving to open/read/close files way too many times, to plan and execute queries. But for streaming data lake use-cases,\ninherently ingests are going to end up having smaller volume of writes, which might result in lot of small files if no special handling is done."),(0,r.kt)("h1",{id:"during-write-vs-after-write"},"During Write vs After Write"),(0,r.kt)("p",null,"Common approaches to writing very small files and then later stitching them together solve for system scalability issues posed\nby small files but might violate query SLA's by exposing small files to them. In fact, you can easily do so on a Hudi table,\nby running a clustering operation, as detailed in a ",(0,r.kt)("a",{parentName:"p",href:"/blog/2021/01/27/hudi-clustering-intro"},"previous blog"),". "),(0,r.kt)("p",null,"In this blog, we discuss file sizing optimizations in Hudi, during the initial write time, so we don't have to effectively\nre-write all data again, just for file sizing. If you want to have both (a) self managed file sizing and\n(b) Avoid exposing small files to queries, automatic file sizing feature saves the day."),(0,r.kt)("p",null,"Hudi has the ability to maintain a configured target file size, when performing inserts/upsert operations.\n(Note: bulk_insert operation does not provide this functionality and is designed as a simpler replacement for\nnormal ",(0,r.kt)("inlineCode",{parentName:"p"},"spark.write.parquet"),")."),(0,r.kt)("h2",{id:"configs"},"Configs"),(0,r.kt)("p",null,"For illustration purposes, we are going to consider only COPY_ON_WRITE table."),(0,r.kt)("p",null,"Configs of interest before we dive into the algorithm:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/configurations#limitFileSize"},"Max file size"),": Max size for a given data file. Hudi will try to maintain file sizes to this configured value ",(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/configurations#compactionSmallFileSize"},"Soft file limit"),": Max file size below which a given data file is considered to a small file ",(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/configurations#insertSplitSize"},"Insert split size"),": Number of inserts grouped for a single partition. This value should match\nthe number of records in a single file (you can determine based on max file size and per record size)")),(0,r.kt)("p",null,"For instance, if your first config value is 120MB and 2nd config value is set to 100MB, any file whose size is < 100MB\nwould be considered a small file."),(0,r.kt)("p",null,"If you wish to turn off this feature, set the config value for soft file limit to 0."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Let\u2019s say this is the layout of data files for a given partition."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Initial layout",src:t(82998).Z}),"\n",(0,r.kt)("em",{parentName:"p"},"Figure: Initial data file sizes for a given partition of interest")),(0,r.kt)("p",null,"Let\u2019s assume the configured values for max file size and small file size limit are 120MB and 100MB. File_1\u2019s current\nsize is 40MB, File_2\u2019s size is 80MB, File_3\u2019s size is 90MB, File_4\u2019s size is 130MB and File_5\u2019s size is 105MB. Let\u2019s see\nwhat happens when a new write happens. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1:")," Assigning updates to files. In this step, We look up the index to find the tagged location and records are\nassigned to respective files. Note that we assume updates are only going to increase the file size and that would simply result\nin a much bigger file. When updates lower the file size (by say, nulling out lot of fields), then a subsequent write will deem\nit a small file."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2:"),"  Determine small files for each partition path. The soft file limit config value will be leveraged here\nto determine eligible small files. In our example, given the config value is set to 100MB, the small files are File_1(40MB)\nand File_2(80MB) and file_3\u2019s (90MB)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3:")," Once small files are determined, incoming inserts are assigned to them so that they reach their max capacity of\n120MB. File_1 will be ingested with 80MB worth of inserts, file_2 will be ingested with 40MB worth of inserts and\nFile_3 will be ingested with 30MB worth of inserts."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bin packing small files",src:t(45651).Z}),"\n",(0,r.kt)("em",{parentName:"p"},"Figure: Incoming records are bin packed to existing small files")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 4:")," Once all small files are bin packed to its max capacity and if there are pending inserts unassigned, new file\ngroups/data files are created and inserts are assigned to them. Number of records per new data file is determined from insert split\nsize config. Assuming the insert split size is configured to 120k records, if there are 300k remaining records, 3 new\nfiles will be created in which 2 of them (File_6 and File_7) will be filled with 120k records and the last one (File_8)\nwill be filled with 60k records (assuming each record is 1000 bytes). In future ingestions, 3rd new file will be\nconsidered as a small file to be packed with more data."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Assigning to new files",src:t(2374).Z}),"\n",(0,r.kt)("em",{parentName:"p"},"Figure: Remaining records are assigned to new files")),(0,r.kt)("p",null,"Hudi leverages mechanisms such as custom partitioning for optimized record distribution to different files, executing\nthe algorithm above. After this round of ingestion is complete, all files except File_8 are nicely sized to the optimum size.\nThis process is followed during every ingestion to ensure there are no small files in your Hudi tables. "),(0,r.kt)("p",null,"Hopefully the blog gave you an overview into how hudi manages small files and assists in boosting your query performance."))}p.isMDXComponent=!0},2374:function(e,i,t){i.Z=t.p+"assets/images/adding_new_files-13e5a1cf0c213c07a412b09a29be4e3d.png"},45651:function(e,i,t){i.Z=t.p+"assets/images/bin_packing_existing_data_files-021f5b531f048bfd9cc1230f93c22a71.png"},82998:function(e,i,t){i.Z=t.p+"assets/images/initial_layout-ba5e4c454e6d2328f74dfc5e9fa2966a.png"}}]);