"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[96374],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),h=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=h(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=h(a),d=n,m=c["".concat(s,".").concat(d)]||c[d]||u[d]||o;return a?r.createElement(m,i(i({ref:t},l),{},{components:a})):r.createElement(m,i({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var h=2;h<o;h++)i[h]=a[h];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},92389:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return p},metadata:function(){return h},toc:function(){return u}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=["components"],p={title:"Apache Hudi - 2021 a Year in Review",excerpt:"A reflection on the growth and momentum of Apache Hudi in 2021",author:"vinoth",category:"blog",image:"/assets/images/Hudi_community.png"},s=void 0,h={permalink:"/blog/2022/01/06/apache-hudi-2021-a-year-in-review",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2022-01-06-apache-hudi-2021-a-year-in-review.md",source:"@site/blog/2022-01-06-apache-hudi-2021-a-year-in-review.md",title:"Apache Hudi - 2021 a Year in Review",description:"As the year came to end, I took some time to reflect on where we are and what we accomplished in 2021. I am humbled by how strong our community is and how regardless of it being another tough pandemic year, that people from around the globe leaned in together and made this the best year yet for Apache Hudi. In this blog I want to recap some of the 2021 highlights.",date:"2022-01-06T00:00:00.000Z",formattedDate:"January 6, 2022",tags:[],readingTime:3.09,truncated:!0,authors:[{name:"vinoth"}],prevItem:{title:"Change Data Capture with Debezium and Apache Hudi",permalink:"/blog/2022/01/14/change-data-capture-with-debezium-and-apache-hudi"},nextItem:{title:"Hudi Z-Order and Hilbert Space Filling Curves",permalink:"/blog/2021/12/29/hudi-zorder-and-hilbert-space-filling-curves"}},l={authorsImageUrls:[void 0]},u=[],c={toc:u};function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As the year came to end, I took some time to reflect on where we are and what we accomplished in 2021. I am humbled by how strong our community is and how regardless of it being another tough pandemic year, that people from around the globe leaned in together and made this the best year yet for Apache Hudi. In this blog I want to recap some of the 2021 highlights."),(0,o.kt)("img",{src:"/assets/images/Hudi_community.png",alt:"drawing",width:"600"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Community"))),(0,o.kt)("p",null,"I want to call out how amazing it is to see such a diverse group of people step up and contribute to this project. There were over 30,000 interactions with the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/"},"project on github"),", up 2x from last year. Over the last year 300 people have contributed to the project, with over 3,000 PRs over 5 releases. We moved Apache Hudi from release 0.5.X all the way to our feature packed 0.10.0 release. Come and join us on our ",(0,o.kt)("a",{parentName:"p",href:"https://join.slack.com/t/apache-hudi/shared_invite/enQtODYyNDAxNzc5MTg2LTE5OTBlYmVhYjM0N2ZhOTJjOWM4YzBmMWU2MjZjMGE4NDc5ZDFiOGQ2N2VkYTVkNzU3ZDQ4OTI1NmFmYWQ0NzE"},"active slack channel"),"! Over 850 community members engaged on our slack, up about 100% from the year before. I want to add a special shout out to our top slack participants who have helped answer so many questions and drive rich discussions on our channel. Sivabalan Narayanan, Nishith Agarwal, Bhavani Sudha Saktheeswaran, Vinay Patil, Rubens Soto, Dave Hagman, Raghav Tandon, Sagar Sumit, Joyan Sil, Jake D, Felix Jose, Nick Vintila, KimL, Andrew Sukhan, Danny Chan, Biswajit Mohapatra, and Pratyaksh Sharma! I know I am missing plenty of other important callouts, every PR that landed this year has helped shape Hudi into what it is today. Thank you!"),(0,o.kt)("img",{src:"/assets/images/powers/logo-wall.png",alt:"drawing",width:"600"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Impact"))),(0,o.kt)("p",null,"In 2021, I personally developed a deeper gratitude and understanding of the magnitude of the impact we are making in the industry. Throughout the year I met more and more people that told me about how Hudi transformed their business and I was impressed by the large variety of use cases and applications that Hudi was able to serve. Some from the community who publicly shared their story include: ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/big-data/how-amazon-transportation-service-enabled-near-real-time-event-analytics-at-petabyte-scale-using-aws-glue-with-apache-hudi/"},"Amazon"),", ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/big-data/how-ge-aviation-built-cloud-native-data-pipelines-at-enterprise-scale-using-the-aws-platform/"},"GE"),", ",(0,o.kt)("a",{parentName:"p",href:"https://s.apache.org/hudi-robinhood-talk"},"Robinhood"),", ",(0,o.kt)("a",{parentName:"p",href:"http://hudi.apache.org/blog/2021/09/01/building-eb-level-data-lake-using-hudi-at-bytedance"},"ByteDance"),", ",(0,o.kt)("a",{parentName:"p",href:"https://blogs.halodoc.io/data-platform-2-0-part-1/"},"Halodoc"),", ",(0,o.kt)("a",{parentName:"p",href:"https://developpaper.com/baixin-banks-real-time-data-lake-evolution-scheme-based-on-apache-hudi/"},"Baixin Bank"),", ",(0,o.kt)("a",{parentName:"p",href:"https://developpaper.com/practice-of-apache-hudi-in-building-real-time-data-lake-at-station-b/"},"BiliBili"),", and so many more that haven\u2019t even shared yet. One particular highlight from 2021 was attending ",(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/lGm8qe4tBrg?t=2115"},"AWS Re:Invent")," and meeting an overwhelmingly large number of users who expressed joy with using Apache Hudi. This raises my sense of responsibility even more to be aware of just how many people depend on Apache Hudi."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"New Features"))),(0,o.kt)("p",null,"Apache Hudi has come a long way in 2021 from v0.5.X to 0.10.0. Throughout this year we have developed innovative and leading edge features that make it easier and easier to build streaming data lakes. Some of these features include ",(0,o.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/table_management"},"Spark SQL DML Support"),", ",(0,o.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/clustering"},"Clustering"),", ",(0,o.kt)("a",{parentName:"p",href:"https://hudi.apache.org/blog/2021/12/29/hudi-zorder-and-hilbert-space-filling-curves"},"Z-Order/Hilbert curves"),", ",(0,o.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/metadata"},"Metadata Table file listing elimination"),", ",(0,o.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/markers"},"Timeline Server Markers"),", ",(0,o.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/precommit_validator"},"Precommit Validators"),", ",(0,o.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/writing_data#flink-sql-writer"},"Flink MOR write/read"),", ",(0,o.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/concurrency_control"},"Parallel Write support with OCC"),", ",(0,o.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/clustering"},"Clustering"),", ",(0,o.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/querying_data#spark-incr-query"},"Incremental Queries for MOR"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/tree/master/hudi-kafka-connect"},"Kafka Connect Sink"),", Delta Streamer sources for ",(0,o.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/hoodie_deltastreamer/#s3-events"},"S3")," and ",(0,o.kt)("a",{parentName:"p",href:"https://hudi.apache.org/releases/release-0.10.0/#debezium-deltastreamer-sources"},"Debezium"),", ",(0,o.kt)("a",{parentName:"p",href:"https://hudi.apache.org/releases/release-0.10.0/#dbt-support"},"DBT Support")," all of which are were added in 2021. To top it all, we put together ",(0,o.kt)("a",{parentName:"p",href:"https://hudi.apache.org/blog/2021/07/21/streaming-data-lake-platform"},"a manifesto")," to realize our vision for streaming data lakes."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"The Road Ahead"))),(0,o.kt)("p",null,"2021 may have been our best year so far, but it still feels like we are just getting started when we look at our new year's resolutions for 2022. In the year ahead we have bold plans to realize the first cut of our entire vision and take Hudi 1.0, that includes full-featured multi-modal indexing for faster writes/queries, pathbreaking lock free concurrency, new server components for caching/metadata and finally Flink based incremental materialized views! \xa0",(0,o.kt)("em",{parentName:"p"},"You can find our")," ",(0,o.kt)("a",{parentName:"p",href:"https://hudi.apache.org/roadmap"},(0,o.kt)("em",{parentName:"a"},"detailed roadmap here")),(0,o.kt)("em",{parentName:"p"},".")),(0,o.kt)("p",null,"I look forward to continued collaboration with the growing Hudi community! Come join our ",(0,o.kt)("a",{parentName:"p",href:"https://hudi.apache.org/community/syncs"},(0,o.kt)("em",{parentName:"a"},"community events"))," ",(0,o.kt)("em",{parentName:"p"},"and discussions in our")," ",(0,o.kt)("a",{parentName:"p",href:"https://join.slack.com/t/apache-hudi/shared_invite/enQtODYyNDAxNzc5MTg2LTE5OTBlYmVhYjM0N2ZhOTJjOWM4YzBmMWU2MjZjMGE4NDc5ZDFiOGQ2N2VkYTVkNzU3ZDQ4OTI1NmFmYWQ0NzE"},(0,o.kt)("em",{parentName:"a"},"slack channel")),(0,o.kt)("em",{parentName:"p"},"! Happy new year 2022!")))}d.isMDXComponent=!0}}]);