"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3376],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||y[d]||o;return n?i.createElement(f,r(r({ref:t},u),{},{components:n})):i.createElement(f,r({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1562:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>y,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const o={slug:"vscode-extensions",title:"Visual Studio Code Settings and Extensions Sync",authors:["ygilany","reedws"],tags:["vscode","uses"]},r=void 0,s={permalink:"/IT3049C/blog/vscode-extensions",editUrl:"https://github.com/reedws/IT3049C/tree/main/blog/2022-01-13-vscode/index.md",source:"@site/blog/2022-01-13-vscode/index.md",title:"Visual Studio Code Settings and Extensions Sync",description:"In my demo videos, you may notice that my Visual Studio Code IDE, provides with me with a lot of cheaters, helpers, and utilities that makes development a little easier.",date:"2022-01-13T00:00:00.000Z",formattedDate:"January 13, 2022",tags:[{label:"vscode",permalink:"/IT3049C/blog/tags/vscode"},{label:"uses",permalink:"/IT3049C/blog/tags/uses"}],readingTime:1.82,hasTruncateMarker:!1,authors:[{name:"Yahya Gilany",title:"Class Instructor",url:"https://yahya-gilany.com",imageURL:"https://yahya-gilany.com/img/Yahya1.webp",key:"ygilany"},{name:"Andrew Lively",title:"Class Instructor",imageURL:"https://avatars.githubusercontent.com/u/24629474?v=4",key:"reedws"}],frontMatter:{slug:"vscode-extensions",title:"Visual Studio Code Settings and Extensions Sync",authors:["ygilany","reedws"],tags:["vscode","uses"]},prevItem:{title:"Updating the README assignment checks badge",permalink:"/IT3049C/blog/github-actions-badge"}},l={authorsImageUrls:[void 0,void 0]},c=[{value:"Settings Sync",id:"settings-sync",level:2},{value:"Some of my Extensions",id:"some-of-my-extensions",level:2}],u={toc:c};function y(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In my demo videos, you may notice that my Visual Studio Code IDE, provides with me with a lot of cheaters, helpers, and utilities that makes development a little easier.\nIn this post, I'm sharing some instructions for how you can setup you VSCode IDE with the same settings and extensions I have here."),(0,a.kt)("h2",{id:"settings-sync"},"Settings Sync"),(0,a.kt)("p",null,"One helpful way to avoid setting up your VSCode IDE from scratch is to use the built-in Settings Sync. Settings Sync lets you share your Visual Studio Code configurations such as settings, keybindings, and installed extensions across your machines so you are always working with your favorite setup."),(0,a.kt)("p",null,"You can turn on Settings Sync using the Turn On Settings Sync... entry in the Manage gear menu at the bottom of the Activity Bar."),(0,a.kt)("img",{alt:"Turn on Sync command",src:n(1900).Z,style:{border:"1px solid black",marginBottom:"2em"}}),(0,a.kt)("p",null,"You will be asked to sign in and what preferences you would like to sync. Generally, you will want to sync everything but there is a case to turn some of these off on some devices."),(0,a.kt)("img",{alt:"Settings Sync configure dialog",src:n(6850).Z,style:{border:"1px solid black",marginBottom:"2em"}}),(0,a.kt)("p",null,"Selecting the Sign in & Turn on button will ask you to choose between signing in with your Microsoft or GitHub account. I recommend using your GitHub account since you will most likely need to sign in with GitHub for other extensions."),(0,a.kt)("img",{alt:"Settings Sync configure dialog",src:n(6874).Z,style:{border:"1px solid black",marginBottom:"2em"}}),(0,a.kt)("p",null,"After making this selection, the browser will open so that you can sign in to your Microsoft or GitHub account. When a Microsoft account is chosen, you can use either personal accounts, such as Outlook accounts, or Azure accounts, and you can also link a GitHub account to a new or existing Microsoft account."),(0,a.kt)("p",null,"After signing in, Settings Sync will be turned on and continue to synchronize your preferences automatically in the background."),(0,a.kt)("p",null,"For more information on Settings Sync, see this article from Microsoft: ",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/editor/settings-sync"},"Settings Sync"),"."),(0,a.kt)("h2",{id:"some-of-my-extensions"},"Some of my Extensions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag"},"Auto Close Tag")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag"},"Auto Rename Tag")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel"},"Babel JavaScript")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig"},"EditorConfig for VS Code")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"},"ESLint")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow"},"indent-rainbow")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree"},"Todo Tree")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense"},"Path Intellisense")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=GitHub.copilot"},"GitHub Copilot"))))}y.isMDXComponent=!0},1900:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/1-turn-on-sync-2d1964dd5d110bac56cdf124ba3d0e5b.png"},6850:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/2-sync-configure-2063f18d245ff272d73069057ef8affb.png"},6874:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,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"}}]);