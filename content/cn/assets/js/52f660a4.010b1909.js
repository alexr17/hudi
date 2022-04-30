"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[31769],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(p,".").concat(m)]||d[m]||l[m]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7986:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Ingesting Database changes via Sqoop/Hudi",excerpt:"Learn how to ingesting changes from a HUDI dataset using Sqoop/Hudi",author:"vinoth",category:"blog"},p=void 0,u={permalink:"/cn/blog/2019/09/09/ingesting-database-changes",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2019-09-09-ingesting-database-changes.md",source:"@site/blog/2019-09-09-ingesting-database-changes.md",title:"Ingesting Database changes via Sqoop/Hudi",description:"Very simple in just 2 steps.",date:"2019-09-09T00:00:00.000Z",formattedDate:"September 9, 2019",tags:[],readingTime:.605,truncated:!0,authors:[{name:"vinoth"}],prevItem:{title:"Delete support in Hudi",permalink:"/cn/blog/2020/01/15/delete-support-in-hudi"},nextItem:{title:"Registering sample dataset to Hive via beeline",permalink:"/cn/blog/2019/05/14/registering-dataset-to-hive"}},c={authorsImageUrls:[void 0]},l=[],d={toc:l};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Very simple in just 2 steps."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1"),": Extract new changes to users table in MySQL, as avro data files on DFS"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"// Command to extract incrementals using sqoop\nbin/sqoop import \\\n  -Dmapreduce.job.user.classpath.first=true \\\n  --connect jdbc:mysql://localhost/users \\\n  --username root \\\n  --password ******* \\\n  --table users \\\n  --as-avrodatafile \\\n  --target-dir \\ \n  s3:///tmp/sqoop/import-1/users\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2"),": Use your fav datasource to read extracted data and directly \u201cupsert\u201d the users table on DFS/Hive"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'// Spark Datasource\nimport org.apache.hudi.DataSourceWriteOptions._\n// Use Spark datasource to read avro\nval inputDataset = spark.read.avro("s3://tmp/sqoop/import-1/users/*");\n     \n// save it as a Hudi dataset\ninputDataset.write.format("org.apache.hudi\u201d)\n  .option(HoodieWriteConfig.TABLE_NAME, "hoodie.users")\n  .option(RECORDKEY_FIELD_OPT_KEY(), "userID")\n  .option(PARTITIONPATH_FIELD_OPT_KEY(),"country")\n  .option(PRECOMBINE_FIELD_OPT_KEY(), "last_mod")\n  .option(OPERATION_OPT_KEY(), UPSERT_OPERATION_OPT_VAL())\n  .mode(SaveMode.Append)\n  .save("/path/on/dfs");\n')),(0,o.kt)("p",null,"Alternatively, you can also use the Hudi ",(0,o.kt)("a",{parentName:"p",href:"https://hudi.apache.org/writing_data#deltastreamer"},"DeltaStreamer")," tool with the DFSSource."))}m.isMDXComponent=!0}}]);