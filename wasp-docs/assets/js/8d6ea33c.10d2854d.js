"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[7084],{85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(87462),r=a(67294),o=a(86010),i=a(12466),s=a(16550),l=a(91980),u=a(67392),c=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[l,u]=h({queryString:a,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),g=(()=>{const e=l??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var g=a(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:a,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==s&&(p(t),l(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":s===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},r.createElement(k,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function y(e){const t=(0,g.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},46300:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(50012);function o(e){let{path:t}=e;const[a]=(0,r.Nk)("docusaurus.tab.js-ts"),o=t.lastIndexOf("{"),i=t.slice(o+1,t.length-1),[s,l]=i.split(","),u=t.slice(0,o);return n.createElement("code",null,u+("js"===a?s:l))}},48863:(e,t,a)=>{a.d(t,{A:()=>i,v:()=>s});var n=a(67294),r=a(50012),o=a(49875);function i(e){let{children:t}=e;const[a]=(0,r.Nk)("docusaurus.tab.js-ts");return"ts"===a&&n.createElement(o.Z,null,t)}function s(e){let{children:t}=e;const[a]=(0,r.Nk)("docusaurus.tab.js-ts");return"js"===a&&n.createElement(o.Z,null,t)}},23045:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),o=(a(46300),a(85162)),i=a(74866),s=(a(44996),a(48863));const l={title:"2. Project Structure"},u=void 0,c={unversionedId:"tutorial/project-structure",id:"version-0.11.8/tutorial/project-structure",title:"2. Project Structure",description:"After creating a new Wasp project, you'll get a file structure that looks like this:",source:"@site/versioned_docs/version-0.11.8/tutorial/02-project-structure.md",sourceDirName:"tutorial",slug:"/tutorial/project-structure",permalink:"/wasp-docs/docs/0.11.8/tutorial/project-structure",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/versioned_docs/version-0.11.8/tutorial/02-project-structure.md",tags:[],version:"0.11.8",sidebarPosition:2,frontMatter:{title:"2. Project Structure"},sidebar:"docs",previous:{title:"1. Creating a New Project",permalink:"/wasp-docs/docs/0.11.8/tutorial/create"},next:{title:"3. Pages & Routes",permalink:"/wasp-docs/docs/0.11.8/tutorial/pages"}},p={},d=[{value:"<code>main.wasp</code>",id:"mainwasp",level:2}],m={toc:d},h="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"After creating a new Wasp project, you'll get a file structure that looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 main.wasp              # Your Wasp code goes here.\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u251c\u2500\u2500 client             # Your client code (JS/CSS/HTML) goes here.\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 Main.css\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 MainPage.jsx\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 tsconfig.json\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 vite.config.ts\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 vite-env.d.ts\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 waspLogo.png\n\u2502\xa0\xa0 \u251c\u2500\u2500 server             # Your server code (Node JS) goes here.\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 tsconfig.json\n\u2502\xa0\xa0 \u251c\u2500\u2500 shared             # Your shared (runtime independent) code goes here.\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 tsconfig.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 .waspignore\n\u2514\u2500\u2500 .wasproot\n")),(0,r.kt)("p",null,"By ",(0,r.kt)("em",{parentName:"p"},"your code"),", we mean the ",(0,r.kt)("em",{parentName:"p"},'"the code you write"'),", as opposed to the code generated by Wasp. Wasp expects you to separate all of your code\u2014which we call external code\u2014into three folders to make it obvious how each file is executed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/client"),": Contains the code executed on the client, in the browser."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/server"),": Contains the code executed on the server, with Node."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/shared"),": Contains code that may be executed on both the client and server.")),(0,r.kt)("p",null,"Many of the other files (",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"vite-env.d.ts"),", etc.) are used by your IDE to improve your development experience with tools like autocompletion, intellisense, and error reporting.\nThe file ",(0,r.kt)("inlineCode",{parentName:"p"},"vite.config.ts")," is used to configure ",(0,r.kt)("a",{parentName:"p",href:"https://vitejs.dev/guide/"},"Vite"),", Wasp's build tool of choice.\nWe won't be configuring Vite in this tutorial, so you can safely ignore the file. Still, if you ever end up wanting more control over Vite, you'll find everything you need to know in ",(0,r.kt)("a",{parentName:"p",href:"/wasp-docs/docs/0.11.8/project/custom-vite-config"},"custom Vite config docs"),"."),(0,r.kt)("admonition",{title:"TypeScript Support",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Wasp supports TypeScript out of the box, but you are free to choose between or mix JavaScript and TypeScript as you see fit."),(0,r.kt)("p",{parentName:"admonition"},"We'll provide you with both JavaScript and TypeScript code in this tutorial. Code blocks will have a toggle to switch between vanilla \ud83c\udf66 JavaScript and TypeScript.")),(0,r.kt)("p",null,"The most important file in the project is ",(0,r.kt)("inlineCode",{parentName:"p"},"main.wasp"),". Wasp uses the configuration within it to perform its magic. Based on what you write, it generates a bunch of code for your database, server-client communication, React routing, and more."),(0,r.kt)("p",null,"Let's look a bit closer at ",(0,r.kt)("inlineCode",{parentName:"p"},"main.wasp.")),(0,r.kt)("h2",{id:"mainwasp"},(0,r.kt)("inlineCode",{parentName:"h2"},"main.wasp")),(0,r.kt)("p",null,"This file, written in our Wasp configuration language, defines your app and lets Wasp take care a ton of features to your app for you. The file contains several ",(0,r.kt)("em",{parentName:"p"},"declarations")," which, together, describe all the components of your app."),(0,r.kt)("p",null,"The default Wasp file generated via ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp new")," on the previous page looks like:"),(0,r.kt)(i.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app TodoApp {\n  wasp: {\n    version: "^0.11.6" // Pins the version of Wasp to use.\n  },\n  title: "Todo app" // Used as the browser tab title. Note that all strings in Wasp are double quoted!\n}\n\nroute RootRoute { path: "/", to: MainPage }\n\npage MainPage {\n  // We specify that the React implementation of the page is the default export\n  // of `src/client/MainPage.jsx`. This statement uses standard JS import syntax.\n  // Use `@client` to reference files inside the `src/client` folder.\n  component: import Main from "@client/MainPage.jsx"\n}\n'))),(0,r.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app TodoApp {\n  wasp: {\n    version: "^0.11.6" // Pins the version of Wasp to use.\n  },\n  title: "Todo app" // Used as the browser tab title. Note that all strings in Wasp are double quoted!\n}\n\nroute RootRoute { path: "/", to: MainPage }\n\npage MainPage {\n  // We specify that the React implementation of the page is the default export\n  // of `src/client/MainPage.tsx`. This statement uses standard JS import syntax.\n  // Use `@client` to reference files inside the `src/client` folder.\n  component: import Main from "@client/MainPage.tsx"\n}\n')))),(0,r.kt)(s.A,{mdxType:"ShowForTs"},(0,r.kt)("admonition",{title:"Using TypeScript",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The default project uses JavaScript. In order to use TypeScript, you'll need to rename ",(0,r.kt)("inlineCode",{parentName:"p"},"MainPage.jsx")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"MainPage.tsx")," and update the import statement in the Wasp file."))),(0,r.kt)("p",null,"This file uses three declaration types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"app"),": Top-level configuration information about your app.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"route"),": Describes which path each page should be accessible from.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"page"),": Defines a web page and the React component that will be rendered when the page is loaded."))),(0,r.kt)("p",null,"In the next section, we'll explore how ",(0,r.kt)("strong",{parentName:"p"},"route")," and ",(0,r.kt)("strong",{parentName:"p"},"page")," work together to build your web app."))}f.isMDXComponent=!0}}]);