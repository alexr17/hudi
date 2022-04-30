"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[27535],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91729:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],i={version:"0.5.3",title:"S3 Filesystem",keywords:["hudi","hive","aws","s3","spark","presto"],summary:"In this page, we go over how to configure Hudi with S3 filesystem.",last_modified_at:new Date("2019-12-30T19:59:57.000Z"),language:"cn"},l=void 0,c={unversionedId:"s3_hoodie",id:"version-0.5.3/s3_hoodie",title:"S3 Filesystem",description:"In this page, we explain how to get your Hudi spark job to store into AWS S3.",source:"@site/i18n/cn/docusaurus-plugin-content-docs/version-0.5.3/s3_hoodie.md",sourceDirName:".",slug:"/s3_hoodie",permalink:"/cn/docs/0.5.3/s3_hoodie",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.5.3/s3_hoodie.md",tags:[],version:"0.5.3",frontMatter:{version:"0.5.3",title:"S3 Filesystem",keywords:["hudi","hive","aws","s3","spark","presto"],summary:"In this page, we go over how to configure Hudi with S3 filesystem.",last_modified_at:"2019-12-30T19:59:57.000Z",language:"cn"},sidebar:"version-0.5.3/docs",previous:{title:"\u4e91\u50a8\u5b58",permalink:"/cn/docs/0.5.3/cloud"},next:{title:"GCS Filesystem",permalink:"/cn/docs/0.5.3/gcs_hoodie"}},u=[{value:"AWS configs",id:"aws-configs",children:[{value:"AWS Credentials",id:"aws-credentials",children:[],level:3},{value:"AWS Libs",id:"aws-libs",children:[],level:3}],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this page, we explain how to get your Hudi spark job to store into AWS S3."),(0,o.kt)("h2",{id:"aws-configs"},"AWS configs"),(0,o.kt)("p",null,"There are two configurations required for Hudi-S3 compatibility:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Adding AWS Credentials for Hudi"),(0,o.kt)("li",{parentName:"ul"},"Adding required Jars to classpath")),(0,o.kt)("h3",{id:"aws-credentials"},"AWS Credentials"),(0,o.kt)("p",null,"Simplest way to use Hudi with S3, is to configure your ",(0,o.kt)("inlineCode",{parentName:"p"},"SparkSession")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"SparkContext")," with S3 credentials. Hudi will automatically pick this up and talk to S3."),(0,o.kt)("p",null,"Alternatively, add the required configs in your core-site.xml from where Hudi can fetch them. Replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"fs.defaultFS")," with your S3 bucket name and Hudi should be able to read/write from the bucket."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"  <property>\n      <name>fs.defaultFS</name>\n      <value>s3://ysharma</value>\n  </property>\n\n  <property>\n      <name>fs.s3.impl</name>\n      <value>org.apache.hadoop.fs.s3native.NativeS3FileSystem</value>\n  </property>\n\n  <property>\n      <name>fs.s3.awsAccessKeyId</name>\n      <value>AWS_KEY</value>\n  </property>\n\n  <property>\n       <name>fs.s3.awsSecretAccessKey</name>\n       <value>AWS_SECRET</value>\n  </property>\n\n  <property>\n       <name>fs.s3n.awsAccessKeyId</name>\n       <value>AWS_KEY</value>\n  </property>\n\n  <property>\n       <name>fs.s3n.awsSecretAccessKey</name>\n       <value>AWS_SECRET</value>\n  </property>\n")),(0,o.kt)("p",null,"Utilities such as hudi-cli or deltastreamer tool, can pick up s3 creds via environmental variable prefixed with ",(0,o.kt)("inlineCode",{parentName:"p"},"HOODIE_ENV_"),". For e.g below is a bash snippet to setup\nsuch variables and then have cli be able to work on datasets stored in s3"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"export HOODIE_ENV_fs_DOT_s3a_DOT_access_DOT_key=$accessKey\nexport HOODIE_ENV_fs_DOT_s3a_DOT_secret_DOT_key=$secretKey\nexport HOODIE_ENV_fs_DOT_s3_DOT_awsAccessKeyId=$accessKey\nexport HOODIE_ENV_fs_DOT_s3_DOT_awsSecretAccessKey=$secretKey\nexport HOODIE_ENV_fs_DOT_s3n_DOT_awsAccessKeyId=$accessKey\nexport HOODIE_ENV_fs_DOT_s3n_DOT_awsSecretAccessKey=$secretKey\nexport HOODIE_ENV_fs_DOT_s3n_DOT_impl=org.apache.hadoop.fs.s3a.S3AFileSystem\n")),(0,o.kt)("h3",{id:"aws-libs"},"AWS Libs"),(0,o.kt)("p",null,"AWS hadoop libraries to add to our classpath"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"com.amazonaws:aws-java-sdk:1.10.34"),(0,o.kt)("li",{parentName:"ul"},"org.apache.hadoop:hadoop-aws:2.7.3")),(0,o.kt)("p",null,"AWS glue data libraries are needed if AWS glue data is used"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"com.amazonaws.glue:aws-glue-datacatalog-hive2-client:1.11.0"),(0,o.kt)("li",{parentName:"ul"},"com.amazonaws:aws-java-sdk-glue:1.11.475")))}d.isMDXComponent=!0}}]);