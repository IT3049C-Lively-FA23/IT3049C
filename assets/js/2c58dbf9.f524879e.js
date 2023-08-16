"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5897],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),r=a(7294),o=a(6010),l=a(2389),s=a(7392),i=a(7094),p=a(2466);const c="tabList__CuJ",u="tabItem_LNqP";function d(e){var t,a;const{lazy:l,block:d,defaultValue:m,values:h,groupId:f,className:v}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),k=(0,s.l)(g,((e,t)=>e.value===t.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===m?m:null!=(t=null!=m?m:null==(a=b.find((e=>e.props.default)))?void 0:a.props.value)?t:b[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:w}=(0,i.U)(),[j,C]=(0,r.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:O}=(0,p.o5)();if(null!=f){const e=N[f];null!=e&&e!==j&&g.some((t=>t.value===e))&&C(e)}const S=e=>{const t=e.currentTarget,a=T.indexOf(t),n=g[a].value;n!==j&&(O(t),C(n),null!=f&&w(f,String(n)))},I=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=T.indexOf(e.currentTarget)+1;a=null!=(n=T[t])?n:T[0];break}case"ArrowLeft":{var r;const t=T.indexOf(e.currentTarget)-1;a=null!=(r=T[t])?r:T[T.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},v)},g.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:e=>T.push(e),onKeyDown:I,onFocus:S,onClick:S},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":j===t})}),null!=a?a:t)}))),l?(0,r.cloneElement)(b.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function m(e){const t=(0,l.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},2698:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));a(5488),a(5162);const o={slug:"phaser-vscode-intellisense",title:"How to get Phaser Intellisense in VSCode",authors:["ygilany"],tags:["phaser","vscode","development-productivity"]},l=void 0,s={permalink:"/IT3049C/blog/phaser-vscode-intellisense",editUrl:"https://github.com/reedws/IT3049C/tree/main/blog/2022-03-27-phaser-vscode-intellisense/index.mdx",source:"@site/blog/2022-03-27-phaser-vscode-intellisense/index.mdx",title:"How to get Phaser Intellisense in VSCode",description:"What is Phaser?",date:"2022-03-27T00:00:00.000Z",formattedDate:"March 27, 2022",tags:[{label:"phaser",permalink:"/IT3049C/blog/tags/phaser"},{label:"vscode",permalink:"/IT3049C/blog/tags/vscode"},{label:"development-productivity",permalink:"/IT3049C/blog/tags/development-productivity"}],readingTime:1.82,hasTruncateMarker:!1,authors:[{name:"Yahya Gilany",title:"Class Instructor",url:"https://yahya-gilany.com",imageURL:"https://yahya-gilany.com/img/Yahya1.webp",key:"ygilany"}],frontMatter:{slug:"phaser-vscode-intellisense",title:"How to get Phaser Intellisense in VSCode",authors:["ygilany"],tags:["phaser","vscode","development-productivity"]},nextItem:{title:"Updating the README assignment checks badge",permalink:"/IT3049C/blog/github-actions-badge"}},i={authorsImageUrls:[void 0]},p=[{value:"What is Phaser?",id:"what-is-phaser",level:3},{value:"What is VS Code?",id:"what-is-vs-code",level:3},{value:"What is Intellisense?",id:"what-is-intellisense",level:3},{value:"How to enable Phaser Intellisense in VSCode?",id:"how-to-enable-phaser-intellisense-in-vscode",level:3},{value:"Other untested alternatives",id:"other-untested-alternatives",level:3}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"what-is-phaser"},"What is Phaser?"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'"Phaser is a fast, free, and fun open source HTML5 game framework that offers WebGL and Canvas rendering across desktop and mobile web browsers. Games can be compiled to iOS, Android and native apps by using 3rd party tools. You can use JavaScript or TypeScript for development."',(0,r.kt)("sup",{parentName:"p",id:"fnref-(1)-f452d6"},(0,r.kt)("a",{parentName:"sup",href:"#fn-(1)-f452d6",className:"footnote-ref"},"(1)")))),(0,r.kt)("h3",{id:"what-is-vs-code"},"What is VS Code?"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'"Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages (such as C++, C#, Java, Python, PHP, Go) and runtimes (such as .NET and Unity)"',(0,r.kt)("sup",{parentName:"p",id:"fnref-(2)-f452d6"},(0,r.kt)("a",{parentName:"sup",href:"#fn-(2)-f452d6",className:"footnote-ref"},"(2)")))),(0,r.kt)("h3",{id:"what-is-intellisense"},"What is Intellisense?"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'"IntelliSense is a general term for various code editing features including: code completion, parameter info, quick info, and member lists. IntelliSense features are sometimes called by other names such as "code completion", "content assist", and "code hinting."',(0,r.kt)("sup",{parentName:"p",id:"fnref-(3)-f452d6"},(0,r.kt)("a",{parentName:"sup",href:"#fn-(3)-f452d6",className:"footnote-ref"},"(3)")))),(0,r.kt)("h3",{id:"how-to-enable-phaser-intellisense-in-vscode"},"How to enable Phaser Intellisense in VSCode?"),(0,r.kt)("p",null,"We will need to make use of a TypeScript functionality to enable Intellisense."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"At the root of your project, create a file named ",(0,r.kt)("inlineCode",{parentName:"li"},"jsconfig.json"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},"tsconfig.json")," with the following content.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The presence of this file, indicates to VSCode that this is the root of a JavaScript project. You can use it to specify certain features you'd like VSCode's JS Language Service to provide, such as typing. ",(0,r.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/docs/languages/jsconfig#_why-do-i-need-a-jsconfigjson-file"},"Learn more about ",(0,r.kt)("inlineCode",{parentName:"a"},"jsconfig.json")," file here"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="<root>/jsconfig.json"',title:'"<root>/jsconfig.json"'},"{}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"OR")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="<root>/tsconfig.json"',title:'"<root>/tsconfig.json"'},'{\n  "allowJs": true\n}\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"At the root of your project, create a folder named ",(0,r.kt)("inlineCode",{parentName:"li"},"defs"),",  ",(0,r.kt)("inlineCode",{parentName:"li"},"types"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},"typings"),"."),(0,r.kt)("li",{parentName:"ol"},"Download and the save ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/photonstorm/phaser/raw/master/types/phaser.d.ts"},(0,r.kt)("inlineCode",{parentName:"a"},"phaser.d.ts"))," file into that folder. This file contains the definitions for Phaser.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: you may need to install TypeScript to your project or globally"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev typescript\n")),(0,r.kt)("p",{parentName:"blockquote"},"OR"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --global typescript\n"))),(0,r.kt)("h3",{id:"other-untested-alternatives"},"Other untested alternatives"),(0,r.kt)("p",null,"The following repos seemed like good templates to use for Phaser Development. It includes many tools to improve the overall development experience."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/yandeu/phaser-project-template-es6"},"yandeu/phaser-project-template-es6")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/yandeu/phaser-project-template"},"yandeu/phaser-project-template"))),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-(1)-f452d6"},(0,r.kt)("a",{parentName:"li",href:"https://newdocs.phaser.io/docs/3.55.2"},"Phaser Framework"),".",(0,r.kt)("a",{parentName:"li",href:"#fnref-(1)-f452d6",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-(2)-f452d6"},(0,r.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/docs/editor/intellisense#:~:text=IntelliSense%20is%20a%20general%20term,%2C%20and%20%22code%20hinting.%22"},"What is Visual Studio Code?"),".",(0,r.kt)("a",{parentName:"li",href:"#fnref-(2)-f452d6",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-(3)-f452d6"},(0,r.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/docs/editor/intellisense#:~:text=IntelliSense%20is%20a%20general%20term,%2C%20and%20%22code%20hinting.%22"},"IntelliSense in Visual Studio Code"),".",(0,r.kt)("a",{parentName:"li",href:"#fnref-(3)-f452d6",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);