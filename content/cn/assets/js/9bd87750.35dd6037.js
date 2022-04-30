"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[93017],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,b=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(b,a(a({ref:t},l),{},{components:n})):r.createElement(b,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21424:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],s={title:"BOS Filesystem",keywords:["hudi","hive","baidu","bos","spark","presto"],summary:"In this page, we go over how to configure Hudi with BOS filesystem.",last_modified_at:new Date("2021-06-09T21:38:24.000Z"),language:"cn"},u=void 0,c={unversionedId:"bos_hoodie",id:"bos_hoodie",title:"BOS Filesystem",description:"\u8fd9\u4e2a\u9875\u9762\u63cf\u8ff0\u4e86\u5982\u4f55\u8ba9\u4f60\u7684Hudi\u4efb\u52a1\u4f7f\u7528Baidu BOS\u5b58\u50a8\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/bos_hoodie.md",sourceDirName:".",slug:"/bos_hoodie",permalink:"/cn/docs/next/bos_hoodie",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/docs/bos_hoodie.md",tags:[],version:"current",frontMatter:{title:"BOS Filesystem",keywords:["hudi","hive","baidu","bos","spark","presto"],summary:"In this page, we go over how to configure Hudi with BOS filesystem.",last_modified_at:"2021-06-09T21:38:24.000Z",language:"cn"},sidebar:"docs",previous:{title:"IBM Cloud Object Storage \u6587\u4ef6\u7cfb\u7edf",permalink:"/cn/docs/next/ibm_cos_hoodie"},next:{title:"JuiceFS",permalink:"/cn/docs/next/jfs_hoodie"}},l=[{value:"Baidu BOS \u90e8\u7f72",id:"baidu-bos-\u90e8\u7f72",children:[{value:"Baidu BOS \u76f8\u5173\u7684\u914d\u7f6e",id:"baidu-bos-\u76f8\u5173\u7684\u914d\u7f6e",children:[],level:3},{value:"Baidu BOS Libs",id:"baidu-bos-libs",children:[],level:3}],level:2}],p={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u8fd9\u4e2a\u9875\u9762\u63cf\u8ff0\u4e86\u5982\u4f55\u8ba9\u4f60\u7684Hudi\u4efb\u52a1\u4f7f\u7528Baidu BOS\u5b58\u50a8\u3002"),(0,i.kt)("h2",{id:"baidu-bos-\u90e8\u7f72"},"Baidu BOS \u90e8\u7f72"),(0,i.kt)("p",null,"\u4e3a\u4e86\u8ba9Hudi\u4f7f\u7528BOS\uff0c\u9700\u8981\u589e\u52a0\u4e24\u90e8\u5206\u7684\u914d\u7f6e:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e3aHudi\u589e\u52a0Baidu BOS\u7684\u76f8\u5173\u914d\u7f6e"),(0,i.kt)("li",{parentName:"ul"},"\u589e\u52a0Jar\u5305\u5230classpath")),(0,i.kt)("h3",{id:"baidu-bos-\u76f8\u5173\u7684\u914d\u7f6e"},"Baidu BOS \u76f8\u5173\u7684\u914d\u7f6e"),(0,i.kt)("p",null,"\u65b0\u589e\u4e0b\u9762\u7684\u914d\u7f6e\u5230\u4f60\u7684Hudi\u80fd\u8bbf\u95ee\u7684core-site.xml\u6587\u4ef6\u3002\u4f7f\u7528\u4f60\u7684BOS bucket name\u66ff\u6362\u6389",(0,i.kt)("inlineCode",{parentName:"p"},"fs.defaultFS"),"\uff0c\u4f7f\u7528BOS endpoint\u5730\u5740\u66ff\u6362",(0,i.kt)("inlineCode",{parentName:"p"},"fs.bos.endpoint"),"\uff0c\u4f7f\u7528BOS\u7684key\u548csecret\u5206\u522b\u66ff\u6362",(0,i.kt)("inlineCode",{parentName:"p"},"fs.bos.access.key"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"fs.bos.secret.access.key"),"\uff0c\u8fd9\u6837Hudi\u5c31\u80fd\u8bfb\u5199\u76f8\u5e94\u7684bucket\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<property>\n    <name>fs.defaultFS</name>\n    <value>bos://bucketname/</value>\n</property>\n\n<property>\n    <name>fs.bos.endpoint</name>\n    <value>bos-endpoint-address</value>\n    <description>Baidu bos endpoint to connect to,for example : http://bj.bcebos.com</description>\n</property>\n\n<property>\n    <name>fs.bos.access.key</name>\n    <value>bos-key</value>\n    <description>Baidu access key</description>\n</property>\n\n<property>\n    <name>fs.bos.secret.access.key</name>\n    <value>bos-secret-key</value>\n    <description>Baidu secret key.</description>\n</property>\n\n<property>\n    <name>fs.bos.impl</name>\n    <value>org.apache.hadoop.fs.bos.BaiduBosFileSystem</value>\n</property>\n")),(0,i.kt)("h3",{id:"baidu-bos-libs"},"Baidu BOS Libs"),(0,i.kt)("p",null,"\u65b0\u589eBaidu hadoop\u7684jar\u5305\u6dfb\u52a0\u5230classpath."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"com.baidubce:bce-java-sdk:0.10.165"),(0,i.kt)("li",{parentName:"ul"},"bos-hdfs-sdk-1.0.2-community.jar ")),(0,i.kt)("p",null,"\u53ef\u4ee5\u4ece",(0,i.kt)("a",{parentName:"p",href:"https://sdk.bce.baidu.com/console-sdk/bos-hdfs-sdk-1.0.2-community.jar.zip"},"\u8fd9\u91cc")," \u4e0b\u8f7dbos-hdfs-sdk jar\u5305\uff0c\u7136\u540e\u89e3\u538b\u3002"))}d.isMDXComponent=!0}}]);