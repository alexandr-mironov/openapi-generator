"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9754],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return g}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8592:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],i={id:"release-summary",title:"Release Summary"},s=void 0,c={unversionedId:"release-summary",id:"release-summary",title:"Release Summary",description:"Versioning",source:"@site/../docs/release-summary.md",sourceDirName:".",slug:"/release-summary",permalink:"/docs/release-summary",draft:!1,editUrl:"https://github.com/OpenAPITools/openapi-generator/edit/master/website/../docs/release-summary.md",tags:[],version:"current",lastUpdatedBy:"masudanaokinino",lastUpdatedAt:1705998707,formattedLastUpdatedAt:"Jan 23, 2024",frontMatter:{id:"release-summary",title:"Release Summary"},sidebar:"docs",previous:{title:"Swagger Codegen Fork: Q&A",permalink:"/docs/fork-qna"},next:{title:"Release Notes: 3.0.0",permalink:"/docs/release-3-0-0"}},u={},p=[{value:"Versioning",id:"versioning",level:2},{value:"Cadence",id:"cadence",level:2}],m={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"versioning"},"Versioning"),(0,o.kt)("p",null,"We version artifacts in the common ",(0,o.kt)("inlineCode",{parentName:"p"},"major.minor.patch")," strategy."),(0,o.kt)("p",null,"We decided versions should be incremented according to the following rules. The examples provided below are not exhaustive."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"right"},"Part"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Breaking Changes?"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Rule"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Examples"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"major"),(0,o.kt)("td",{parentName:"tr",align:"center"},"YES"),(0,o.kt)("td",{parentName:"tr",align:"left"},"breaking changes without fallback"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("ul",null,(0,o.kt)("li",null,"New Features"),(0,o.kt)("li",null,"Large refactors"),(0,o.kt)("li",null,"Removal of deprecated code"),(0,o.kt)("li",null,"Changes to coding interfaces"),(0,o.kt)("li",null,"Large changes to template bound variables")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"minor"),(0,o.kt)("td",{parentName:"tr",align:"center"},"ALLOWED"),(0,o.kt)("td",{parentName:"tr",align:"left"},"breaking changes with fallback"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("ul",null,(0,o.kt)("li",null,"Adding new generator behavior which doesn't affect custom templates (or does, with config option for old behavior)"),(0,o.kt)("li",null,"Changing generator templates in a way in which switching to custom templates results in old behavior"),(0,o.kt)("li",null,"Introducing deprecated methods in generators or other shared code")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},"patch"),(0,o.kt)("td",{parentName:"tr",align:"center"},"NO"),(0,o.kt)("td",{parentName:"tr",align:"left"},"new features without breaking changes"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("ul",null,(0,o.kt)("li",null,"New generators"),(0,o.kt)("li",null,"Bug fixes in template or generators")))))),(0,o.kt)("h2",{id:"cadence"},"Cadence"),(0,o.kt)("p",null,"For patch release (e.g. 3.0.5 to 3.0.6), we plan to do it on a ",(0,o.kt)("em",{parentName:"p"},"weekly basis"),"."),(0,o.kt)("p",null,"For minor release (e.g. 3.1.6 to 3.2.0), we plan to do it on a ",(0,o.kt)("em",{parentName:"p"},"monthly basis"),"."),(0,o.kt)("p",null,"For major releases (e.g. 3.3.6 to 4.0.0), we plan to do it on a ",(0,o.kt)("em",{parentName:"p"},"quarterly basis"),"."))}d.isMDXComponent=!0}}]);