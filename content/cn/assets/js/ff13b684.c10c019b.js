"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[56434],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=l(r),f=i,m=s["".concat(u,".").concat(f)]||s[f]||d[f]||a;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=s;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},50058:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],c={title:"Hudi Z-Order and Hilbert Space Filling Curves",excerpt:"Explore the benefits of new Apache Hudi Z-Order and Hilbert Curves",author:"Alexey Kudinkin and Tao Meng",category:"blog",image:"/assets/images/zordercurve.png"},u=void 0,l={permalink:"/cn/blog/2021/12/29/hudi-zorder-and-hilbert-space-filling-curves",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2021-12-29-hudi-zorder-and-hilbert-space-filling-curves.md",source:"@site/blog/2021-12-29-hudi-zorder-and-hilbert-space-filling-curves.md",title:"Hudi Z-Order and Hilbert Space Filling Curves",description:"As of Hudi v0.10.0, we are excited to introduce support for an advanced Data Layout Optimization technique known in the database realm as Z-order and Hilbert space filling curves.",date:"2021-12-29T00:00:00.000Z",formattedDate:"December 29, 2021",tags:[],readingTime:8.5,truncated:!0,authors:[{name:"Alexey Kudinkin and Tao Meng"}],prevItem:{title:"Apache Hudi - 2021 a Year in Review",permalink:"/cn/blog/2022/01/06/apache-hudi-2021-a-year-in-review"},nextItem:{title:"Lakehouse Concurrency Control: Are we too optimistic?",permalink:"/cn/blog/2021/12/16/lakehouse-concurrency-control-are-we-too-optimistic"}},p={authorsImageUrls:[void 0]},d=[],s={toc:d};function f(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"As of Hudi v0.10.0, we are excited to introduce support for an advanced Data Layout Optimization technique known in the database realm as ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Z-order_curve"},"Z-order")," and ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hilbert_curve"},"Hilbert")," space filling curves."))}f.isMDXComponent=!0}}]);