"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3886],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6003:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:5,title:"Part 4: Game Controller",sidebar_label:"Game Controller",draft:!1},l=void 0,o={unversionedId:"assignments/rock-paper-scissors/controller",id:"assignments/rock-paper-scissors/controller",title:"Part 4: Game Controller",description:"Putting it all together",source:"@site/content/coursework/assignments/3.rock-paper-scissors/4.controller.md",sourceDirName:"assignments/3.rock-paper-scissors",slug:"/assignments/rock-paper-scissors/controller",permalink:"/IT3049C/coursework/assignments/rock-paper-scissors/controller",draft:!1,editUrl:"https://github.com/IT4063C/IT4063C.github.io/tree/main/content/coursework/assignments/3.rock-paper-scissors/4.controller.md",tags:[],version:"current",lastUpdatedBy:"Wes Reed",lastUpdatedAt:1671045369,formattedLastUpdatedAt:"Dec 14, 2022",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Part 4: Game Controller",sidebar_label:"Game Controller",draft:!1},sidebar:"coursework",previous:{title:"Game Logic",permalink:"/IT3049C/coursework/assignments/rock-paper-scissors/logic"},next:{title:"Finalize",permalink:"/IT3049C/coursework/assignments/rock-paper-scissors/finalize"}},s={},p=[{value:"Putting it all together",id:"putting-it-all-together",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"putting-it-all-together"},"Putting it all together"),(0,r.kt)("p",null,"The Resources folder structure should look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"  resources\n  \u251c\u2500\u2500 images\n  \u2502   \u2514\u2500\u2500 .gitkeep\n  \u251c\u2500\u2500 scripts\n  \u2502   \u251c\u2500\u2500 rock_paper_scissors.js\n++\u2502   \u2514\u2500\u2500 index.js\n  \u2514\u2500\u2500 styles\n      \u2514\u2500\u2500 styles.css\n")),(0,r.kt)("p",null,"The marked file is the file you'll be using in the part of the assignment."),(0,r.kt)("p",null,"In this final piece of the assignment, we will need to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"get a handle of all elements of interest."),(0,r.kt)("li",{parentName:"ul"},"then We will add event listeners to the buttons"),(0,r.kt)("li",{parentName:"ul"},"We will call on our RockPaperScissors class methods as needed.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"create constants ",(0,r.kt)("inlineCode",{parentName:"li"},"const")," of element handlers to the following elements")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"welcomeScreen for ",(0,r.kt)("inlineCode",{parentName:"p"},"#welcome-screen"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"gameScreen for ",(0,r.kt)("inlineCode",{parentName:"p"},"#game-screen"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"startGameButton for ",(0,r.kt)("inlineCode",{parentName:"p"},"#start-game-button"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"userName for ",(0,r.kt)("inlineCode",{parentName:"p"},"#username"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"userSelection for ",(0,r.kt)("inlineCode",{parentName:"p"},"#user-selection"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"goButton for ",(0,r.kt)("inlineCode",{parentName:"p"},"#go-button"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"scoreParagraph for ",(0,r.kt)("inlineCode",{parentName:"p"},"#score"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"gameHistoryParagraph for ",(0,r.kt)("inlineCode",{parentName:"p"},"#game-history")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const welcomeScreen = document.getElementById(`welcome-screen`);\n")),(0,r.kt)("p",{parentName:"li"},"OR, using the ",(0,r.kt)("inlineCode",{parentName:"p"},"querySelector")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const gameScreen = document.querySelector(`#game-screen`);\n")))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"programmatically, hide the ",(0,r.kt)("inlineCode",{parentName:"p"},"gameScreen")," using Bootstrap's class ",(0,r.kt)("inlineCode",{parentName:"p"},"d-none")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'gameScreen.classList.add("d-none")\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"add an Event Listener to the ",(0,r.kt)("inlineCode",{parentName:"p"},"start-game-button")," on the click event. The event handler should:\na. get username from the text input and store it a variable to be used in the next step.\nb. instantiate the game object from the ",(0,r.kt)("inlineCode",{parentName:"p"},"RockPaperScissors")," class."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"game = new RockPaperScissors(username);\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"* **Note**: The top of the file already has a declared(but not initialized) variable `game`. I'm assigning the value of the new class object to this variable, instead of declaring it in the eventHandler. *Remember* variables are scoped in JS, if the variable is declared inside the event handler scope, it will only be accessible from there.\n")),(0,r.kt)("p",{parentName:"li"},"c. hide the welcomeScreen and display the gameScreen Instead."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"* tip: you'll be adding and removing the `d-none` class.\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a function named ",(0,r.kt)("inlineCode",{parentName:"p"},"function updateScoreTallyUI(){...}")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Modify the ",(0,r.kt)("inlineCode",{parentName:"li"},"#score")," paragraph. It should look something like this",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<USERNAME>: <USER_SCORE>  v  CPU: <CPU_SCORE>"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"* i.e. if `username` is *Wes* and the `userScore` is 3 and the `cpuScore` is 5, it would change the scoreParagraph to `Wes: 3  v  CPU: 5`\n")),"you can get the ",(0,r.kt)("inlineCode",{parentName:"li"},"username"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"score")," object from the game object. ",(0,r.kt)("inlineCode",{parentName:"li"},"game.username"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"game.score")))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a function named ",(0,r.kt)("inlineCode",{parentName:"p"},"function updateGameHistoryUI(){...}")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"it makes use of the class property ",(0,r.kt)("inlineCode",{parentName:"li"},"gameHistoryLog"),"."),(0,r.kt)("li",{parentName:"ul"},"it clears the current game history paragraph"),(0,r.kt)("li",{parentName:"ul"},"and replaces it with the content of the array."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"add an Event Listener to the ",(0,r.kt)("inlineCode",{parentName:"p"},"go-button")," on the click event."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"get the userSelection from the select"),(0,r.kt)("li",{parentName:"ul"},"call the ",(0,r.kt)("inlineCode",{parentName:"li"},"play(userSelection)")," of the ",(0,r.kt)("inlineCode",{parentName:"li"},"game")," object."),(0,r.kt)("li",{parentName:"ul"},"update the text of ",(0,r.kt)("inlineCode",{parentName:"li"},"scoreParagraph")," using the ",(0,r.kt)("inlineCode",{parentName:"li"},"updateScoreTallyUI()")," function"),(0,r.kt)("li",{parentName:"ul"},"update the ",(0,r.kt)("inlineCode",{parentName:"li"},"gameHistoryParagraph")," using the ",(0,r.kt)("inlineCode",{parentName:"li"},"updateGameHistoryUI()")," function")))))}m.isMDXComponent=!0}}]);