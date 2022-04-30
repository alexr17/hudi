"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[13173],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return g}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),g=o,f=d["".concat(c,".").concat(g)]||d[g]||p[g]||i;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88570:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],l={title:"Google Cloud",keywords:["hudi","hive","google cloud","storage","spark","presto"],summary:"In this page, we go over how to configure hudi with Google Cloud Storage.",last_modified_at:new Date("2019-12-30T19:59:57.000Z")},c=void 0,u={unversionedId:"gcs_hoodie",id:"gcs_hoodie",title:"Google Cloud",description:"For Hudi storage on GCS, regional buckets provide an DFS API with strong consistency.",source:"@site/docs/gcs_hoodie.md",sourceDirName:".",slug:"/gcs_hoodie",permalink:"/docs/next/gcs_hoodie",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/docs/gcs_hoodie.md",tags:[],version:"current",frontMatter:{title:"Google Cloud",keywords:["hudi","hive","google cloud","storage","spark","presto"],summary:"In this page, we go over how to configure hudi with Google Cloud Storage.",last_modified_at:"2019-12-30T19:59:57.000Z"},sidebar:"docs",previous:{title:"AWS S3",permalink:"/docs/next/s3_hoodie"},next:{title:"Alibaba Cloud",permalink:"/docs/next/oss_hoodie"}},s=[{value:"GCS Configs",id:"gcs-configs",children:[{value:"GCS Credentials",id:"gcs-credentials",children:[],level:3},{value:"GCS Libs",id:"gcs-libs",children:[],level:3}],level:2}],p={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"For Hudi storage on GCS, ",(0,i.kt)("strong",{parentName:"p"},"regional")," buckets provide an DFS API with strong consistency."),(0,i.kt)("h2",{id:"gcs-configs"},"GCS Configs"),(0,i.kt)("p",null,"There are two configurations required for Hudi GCS compatibility:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Adding GCS Credentials for Hudi"),(0,i.kt)("li",{parentName:"ul"},"Adding required jars to classpath")),(0,i.kt)("h3",{id:"gcs-credentials"},"GCS Credentials"),(0,i.kt)("p",null,"Add the required configs in your core-site.xml from where Hudi can fetch them. Replace the ",(0,i.kt)("inlineCode",{parentName:"p"},"fs.defaultFS")," with your GCS bucket name and Hudi should be able to read/write from the bucket."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"  <property>\n    <name>fs.defaultFS</name>\n    <value>gs://hudi-bucket</value>\n  </property>\n\n  <property>\n    <name>fs.gs.impl</name>\n    <value>com.google.cloud.hadoop.fs.gcs.GoogleHadoopFileSystem</value>\n    <description>The FileSystem for gs: (GCS) uris.</description>\n  </property>\n\n  <property>\n    <name>fs.AbstractFileSystem.gs.impl</name>\n    <value>com.google.cloud.hadoop.fs.gcs.GoogleHadoopFS</value>\n    <description>The AbstractFileSystem for gs: (GCS) uris.</description>\n  </property>\n\n  <property>\n    <name>fs.gs.project.id</name>\n    <value>GCS_PROJECT_ID</value>\n  </property>\n  <property>\n    <name>google.cloud.auth.service.account.enable</name>\n    <value>true</value>\n  </property>\n  <property>\n    <name>google.cloud.auth.service.account.email</name>\n    <value>GCS_SERVICE_ACCOUNT_EMAIL</value>\n  </property>\n  <property>\n    <name>google.cloud.auth.service.account.keyfile</name>\n    <value>GCS_SERVICE_ACCOUNT_KEYFILE</value>\n  </property>\n")),(0,i.kt)("h3",{id:"gcs-libs"},"GCS Libs"),(0,i.kt)("p",null,"GCS hadoop libraries to add to our classpath"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"com.google.cloud.bigdataoss:gcs-connector:1.6.0-hadoop2")))}d.isMDXComponent=!0}}]);