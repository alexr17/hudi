"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[66577],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(r),m=i,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},11179:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],l={title:"Monitor Hudi metrics with Datadog",excerpt:"Introducing the feature of reporting Hudi metrics via Datadog HTTP API",author:"rxu",category:"blog"},p=void 0,c={permalink:"/cn/blog/2020/05/28/monitoring-hudi-metrics-with-datadog",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2020-05-28-monitoring-hudi-metrics-with-datadog.md",source:"@site/blog/2020-05-28-monitoring-hudi-metrics-with-datadog.md",title:"Monitor Hudi metrics with Datadog",description:"Availability",date:"2020-05-28T00:00:00.000Z",formattedDate:"May 28, 2020",tags:[],readingTime:1.415,truncated:!0,authors:[{name:"rxu"}],prevItem:{title:"Incremental Processing on the Data Lake",permalink:"/cn/blog/2020/08/18/hudi-incremental-processing-on-data-lakes"},nextItem:{title:"Apache Hudi Support on Apache Zeppelin",permalink:"/cn/blog/2020/04/27/apache-hudi-apache-zepplin"}},u={authorsImageUrls:[void 0]},d=[{value:"Availability",id:"availability",children:[],level:2},{value:"Introduction",id:"introduction",children:[],level:2},{value:"Configurations",id:"configurations",children:[],level:2},{value:"Demo",id:"demo",children:[],level:2}],s={toc:d};function m(e){var t=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"availability"},"Availability"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"0.6.0 (unreleased)")),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.datadoghq.com/"},"Datadog")," is a popular monitoring service. In the upcoming ",(0,a.kt)("inlineCode",{parentName:"p"},"0.6.0")," release of Apache Hudi, we will introduce the feature of reporting Hudi metrics via Datadog HTTP API, in addition to the current reporter types: Graphite and JMX."),(0,a.kt)("h2",{id:"configurations"},"Configurations"),(0,a.kt)("p",null,"Similar to other supported reporters, turning on Datadog reporter requires these 2 properties."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"hoodie.metrics.on=true\nhoodie.metrics.reporter.type=DATADOG\n")),(0,a.kt)("p",null,"The following property sets the Datadog API site. It determines whether the requests will be sent to ",(0,a.kt)("inlineCode",{parentName:"p"},"api.datadoghq.eu")," (EU) or ",(0,a.kt)("inlineCode",{parentName:"p"},"api.datadoghq.com")," (US). Set this according to your Datadog account settings."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"hoodie.metrics.datadog.api.site=EU # or US\n")),(0,a.kt)("p",null,"The property ",(0,a.kt)("inlineCode",{parentName:"p"},"hoodie.metrics.datadog.api.key")," allows you to set the api key directly from the configuration. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"hoodie.metrics.datadog.api.key=<your api key>\nhoodie.metrics.datadog.api.key.supplier=<your api key supplier>\n")),(0,a.kt)("p",null,"Due to security consideration in some cases, you may prefer to return the api key at runtime. To go with this approach, implement ",(0,a.kt)("inlineCode",{parentName:"p"},"java.util.function.Supplier<String>")," and set the implementation's FQCN to ",(0,a.kt)("inlineCode",{parentName:"p"},"hoodie.metrics.datadog.api.key.supplier"),", and make sure ",(0,a.kt)("inlineCode",{parentName:"p"},"hoodie.metrics.datadog.api.key")," is ",(0,a.kt)("em",{parentName:"p"},"not")," set since it will take higher precedence."),(0,a.kt)("p",null,"The following property helps segregate metrics by setting different prefixes for different jobs. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"hoodie.metrics.datadog.metric.prefix=<your metrics prefix>\n")),(0,a.kt)("p",null,"Note that it will use ",(0,a.kt)("inlineCode",{parentName:"p"},".")," to delimit the prefix and the metric name. For example, if the prefix is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"foo"),", then ",(0,a.kt)("inlineCode",{parentName:"p"},"foo.")," will be prepended to the metric name."),(0,a.kt)("p",null,"There are other optional properties, which are explained in the configuration reference page."),(0,a.kt)("h2",{id:"demo"},"Demo"),(0,a.kt)("p",null,"In this demo, we ran a ",(0,a.kt)("inlineCode",{parentName:"p"},"HoodieDeltaStreamer")," job with metrics turn on and other configurations set properly. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"datadog metrics demo",src:r(12685).Z})),(0,a.kt)("p",null,"As shown above, we were able to collect Hudi's action-related metrics like"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<prefix>.<table name>.commit.totalScanTime")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<prefix>.<table name>.clean.duration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<prefix>.<table name>.index.lookup.duration"))),(0,a.kt)("p",null,"as well as ",(0,a.kt)("inlineCode",{parentName:"p"},"HoodieDeltaStreamer"),"-specific metrics"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<prefix>.<table name>.deltastreamer.duration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<prefix>.<table name>.deltastreamer.hiveSyncDuration"))))}m.isMDXComponent=!0},12685:function(e,t,r){t.Z=r.p+"assets/images/2020-05-28-datadog-metrics-demo-fff08d34cd7ef2473f16e9b48dd66793.png"}}]);