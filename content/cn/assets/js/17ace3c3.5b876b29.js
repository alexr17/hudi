"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[29013],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return b}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),d=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),b=r,f=p["".concat(u,".").concat(b)]||p[b]||l[b]||i;return n?o.createElement(f,a(a({ref:t},c),{},{components:n})):o.createElement(f,a({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var d=2;d<i;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},10627:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],s={title:"Baidu Cloud",keywords:["hudi","hive","baidu","bos","spark","presto"],summary:"In this page, we go over how to configure Hudi with bos filesystem.",last_modified_at:new Date("2021-06-09T21:38:24.000Z")},u=void 0,d={unversionedId:"bos_hoodie",id:"version-0.10.1/bos_hoodie",title:"Baidu Cloud",description:"In this page, we explain how to get your Hudi job to store into Baidu BOS.",source:"@site/versioned_docs/version-0.10.1/bos_hoodie.md",sourceDirName:".",slug:"/bos_hoodie",permalink:"/cn/docs/0.10.1/bos_hoodie",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.10.1/bos_hoodie.md",tags:[],version:"0.10.1",frontMatter:{title:"Baidu Cloud",keywords:["hudi","hive","baidu","bos","spark","presto"],summary:"In this page, we go over how to configure Hudi with bos filesystem.",last_modified_at:"2021-06-09T21:38:24.000Z"},sidebar:"version-0.10.1/docs",previous:{title:"IBM Cloud",permalink:"/cn/docs/0.10.1/ibm_cos_hoodie"},next:{title:"JuiceFS",permalink:"/cn/docs/0.10.1/jfs_hoodie"}},c=[{value:"Baidu BOS configs",id:"baidu-bos-configs",children:[{value:"Baidu BOS Credentials",id:"baidu-bos-credentials",children:[],level:3},{value:"Baidu bos Libs",id:"baidu-bos-libs",children:[],level:3}],level:2}],l={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this page, we explain how to get your Hudi job to store into Baidu BOS."),(0,i.kt)("h2",{id:"baidu-bos-configs"},"Baidu BOS configs"),(0,i.kt)("p",null,"There are two configurations required for Hudi-BOS compatibility:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Adding Baidu BOS Credentials for Hudi"),(0,i.kt)("li",{parentName:"ul"},"Adding required Jars to classpath")),(0,i.kt)("h3",{id:"baidu-bos-credentials"},"Baidu BOS Credentials"),(0,i.kt)("p",null,"Add the required configs in your core-site.xml from where Hudi can fetch them. Replace the ",(0,i.kt)("inlineCode",{parentName:"p"},"fs.defaultFS")," with your BOS bucket name, replace ",(0,i.kt)("inlineCode",{parentName:"p"},"fs.bos.endpoint")," with your bos endpoint, replace ",(0,i.kt)("inlineCode",{parentName:"p"},"fs.bos.access.key")," with your bos key, replace ",(0,i.kt)("inlineCode",{parentName:"p"},"fs.bos.secret.access.key")," with your bos secret key. Hudi should be able to read/write from the bucket."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<property>\n  <name>fs.defaultFS</name>\n  <value>bos://bucketname/</value>\n</property>\n\n<property>\n  <name>fs.bos.endpoint</name>\n  <value>bos-endpoint-address</value>\n  <description>Baidu bos endpoint to connect to,for example : http://bj.bcebos.com</description>\n</property>\n\n<property>\n  <name>fs.bos.access.key</name>\n  <value>bos-key</value>\n  <description>Baidu access key</description>\n</property>\n\n<property>\n  <name>fs.bos.secret.access.key</name>\n  <value>bos-secret-key</value>\n  <description>Baidu secret key.</description>\n</property>\n\n<property>\n  <name>fs.bos.impl</name>\n  <value>org.apache.hadoop.fs.bos.BaiduBosFileSystem</value>\n</property>\n")),(0,i.kt)("h3",{id:"baidu-bos-libs"},"Baidu bos Libs"),(0,i.kt)("p",null,"Baidu hadoop libraries jars to add to our classpath"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"com.baidubce:bce-java-sdk:0.10.165"),(0,i.kt)("li",{parentName:"ul"},"bos-hdfs-sdk-1.0.2-community.jar ")),(0,i.kt)("p",null,"You can  download the bos-hdfs-sdk jar from ",(0,i.kt)("a",{parentName:"p",href:"https://sdk.bce.baidu.com/console-sdk/bos-hdfs-sdk-1.0.2-community.jar.zip"},"here")," , and then unzip it."))}p.isMDXComponent=!0}}]);