"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[4828],{85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(87462),r=a(67294),l=a(86010),o=a(12466),s=a(16550),i=a(91980),p=a(67392),u=a(50012);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,p]=g({queryString:a,groupId:n}),[c,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),k=(()=>{const e=i??c;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),h(e)}),[p,h,l]),tabValues:l}}var k=a(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=p[a].value;n!==s&&(c(t),i(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":s===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function y(e){const t=(0,k.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},46300:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(50012);function l(e){let{path:t}=e;const[a]=(0,r.Nk)("docusaurus.tab.js-ts"),l=t.lastIndexOf("{"),o=t.slice(l+1,t.length-1),[s,i]=o.split(","),p=t.slice(0,l);return n.createElement("code",null,p+("js"===a?s:i))}},48863:(e,t,a)=>{a.d(t,{A:()=>o,v:()=>s});var n=a(67294),r=a(50012),l=a(49875);function o(e){let{children:t}=e;const[a]=(0,r.Nk)("docusaurus.tab.js-ts");return"ts"===a&&n.createElement(l.Z,null,t)}function s(e){let{children:t}=e;const[a]=(0,r.Nk)("docusaurus.tab.js-ts");return"js"===a&&n.createElement(l.Z,null,t)}},42058:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>d,toc:()=>g});var n=a(87462),r=(a(67294),a(3905)),l=a(46300),o=a(85162),s=a(74866),i=a(44996),p=a(48863);const u={title:"3. Pages & Routes"},c=void 0,d={unversionedId:"tutorial/pages",id:"tutorial/pages",title:"3. Pages & Routes",description:"In the default main.wasp file created by wasp new, there is a page and a route declaration:",source:"@site/docs/tutorial/03-pages.md",sourceDirName:"tutorial",slug:"/tutorial/pages",permalink:"/wasp-docs/docs/tutorial/pages",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/docs/tutorial/03-pages.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"3. Pages & Routes"},sidebar:"docs",previous:{title:"2. Project Structure",permalink:"/wasp-docs/docs/tutorial/project-structure"},next:{title:"4. Database Entities",permalink:"/wasp-docs/docs/tutorial/entities"}},m={},g=[{value:"The MainPage Component",id:"the-mainpage-component",level:2},{value:"Adding a Second Page",id:"adding-a-second-page",level:2},{value:"Cleaning Up",id:"cleaning-up",level:2}],h={toc:g},k="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(k,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the default ",(0,r.kt)("inlineCode",{parentName:"p"},"main.wasp")," file created by ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp new"),", there is a ",(0,r.kt)("strong",{parentName:"p"},"page")," and a ",(0,r.kt)("strong",{parentName:"p"},"route")," declaration:"),(0,r.kt)(s.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'route RootRoute { path: "/", to: MainPage }\n\npage MainPage {\n  // We specify that the React implementation of the page is the default export\n  // of `src/client/MainPage.jsx`. This statement uses standard JS import syntax.\n  // Use `@client` to reference files inside the `src/client` folder.\n  component: import Main from "@client/MainPage.jsx"\n}\n'))),(0,r.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'route RootRoute { path: "/", to: MainPage }\n\npage MainPage {\n  // We specify that the React implementation of the page is the default export\n  // of `src/client/MainPage.tsx`. This statement uses standard JS import syntax.\n  // Use `@client` to reference files inside the `src/client` folder.\n  component: import Main from "@client/MainPage.tsx"\n}\n')))),(0,r.kt)("p",null,"Together, these declarations tell Wasp that when a user navigates to ",(0,r.kt)("inlineCode",{parentName:"p"},"/"),", it should render the default export from ",(0,r.kt)("inlineCode",{parentName:"p"},"src/client/MainPage"),"."),(0,r.kt)("h2",{id:"the-mainpage-component"},"The MainPage Component"),(0,r.kt)("p",null,"Let's take a look at the React component referenced by the page declaration:"),(0,r.kt)(s.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/client/MainPage.jsx"',title:'"src/client/MainPage.jsx"'},"import waspLogo from './waspLogo.png'\nimport './Main.css'\n\nconst MainPage = () => {\n  // ...\n}\nexport default MainPage\n"))),(0,r.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/client/MainPage.tsx"',title:'"src/client/MainPage.tsx"'},"import waspLogo from './waspLogo.png'\nimport './Main.css'\n\nconst MainPage = () => {\n  // ...\n}\nexport default MainPage\n")))),(0,r.kt)("p",null,"Since Wasp uses React for the frontend, this is a normal functional React component. It also uses the CSS and logo image that are located next to it in the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/client")," folder."),(0,r.kt)("p",null,"That is all the code you need! Wasp takes care of everything else necessary to define, build, and run the web app."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"wasp start")," automatically picks up the changes you make and restarts the app, so keep it running in the background.")),(0,r.kt)("h2",{id:"adding-a-second-page"},"Adding a Second Page"),(0,r.kt)("p",null,"To add more pages, you can create another set of ",(0,r.kt)("strong",{parentName:"p"},"page")," and ",(0,r.kt)("strong",{parentName:"p"},"route")," declarations. You can even add parameters to the URL path, using the same syntax as ",(0,r.kt)("a",{parentName:"p",href:"https://reactrouter.com/web/"},"React Router"),". Let's test this out by adding a new page:"),(0,r.kt)(s.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'route HelloRoute { path: "/hello/:name", to: HelloPage }\npage HelloPage {\n  component: import Hello from "@client/HelloPage.jsx"\n}\n'))),(0,r.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'route HelloRoute { path: "/hello/:name", to: HelloPage }\npage HelloPage {\n  component: import Hello from "@client/HelloPage.tsx"\n}\n')))),(0,r.kt)("p",null,"When a user visits ",(0,r.kt)("inlineCode",{parentName:"p"},"/hello/their-name"),", Wasp will render the component exported from ",(0,r.kt)("inlineCode",{parentName:"p"},"src/client/HelloPage")," and pass the URL parameter the same way as in React Router:"),(0,r.kt)(s.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/client/HelloPage.jsx"',title:'"src/client/HelloPage.jsx"'},"const HelloPage = (props) => {\n  return <div>Here's {props.match.params.name}!</div>\n}\n\nexport default HelloPage\n"))),(0,r.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/client/HelloPage.tsx"',title:'"src/client/HelloPage.tsx"'},"import { RouteComponentProps } from 'react-router-dom'\n\nconst HelloPage = (props: RouteComponentProps<{ name: string }>) => {\n  return <div>Here's {props.match.params.name}!</div>\n}\n\nexport default HelloPage\n")))),(0,r.kt)("p",null,"Now you can visit ",(0,r.kt)("inlineCode",{parentName:"p"},"/hello/johnny"),' and see "Here\'s johnny!"'),(0,r.kt)(p.A,{mdxType:"ShowForTs"},(0,r.kt)("admonition",{title:"Type-safe links",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Since you are using Typescript, you can benefit from using Wasp's type-safe ",(0,r.kt)("inlineCode",{parentName:"p"},"Link")," component and the ",(0,r.kt)("inlineCode",{parentName:"p"},"routes")," object. Check out the ",(0,r.kt)("a",{parentName:"p",href:"../advanced/links"},"type-safe links docs")," for more details."))),(0,r.kt)("h2",{id:"cleaning-up"},"Cleaning Up"),(0,r.kt)("p",null,"Let's prepare for building the Todo app by cleaning up the project and removing files and code we won't need. Start by deleting ",(0,r.kt)("inlineCode",{parentName:"p"},"Main.css"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"waspLogo.png"),", and ",(0,r.kt)(l.Z,{path:"HelloPage.{jsx,tsx}",mdxType:"FileExtSwitcher"})," that we just created in the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/client/")," folder."),(0,r.kt)("p",null,"Since we deleted ",(0,r.kt)(l.Z,{path:"HelloPage.{jsx,tsx}",mdxType:"FileExtSwitcher"}),", we also need to remember to remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"route")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"page")," declarations we wrote for it. Your Wasp file should now look like this:"),(0,r.kt)(s.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app TodoApp {\n  wasp: {\n    version: "^0.11.0"\n  },\n  title: "Todo app"\n}\n\nroute RootRoute { path: "/", to: MainPage }\npage MainPage {\n  component: import Main from "@client/MainPage.jsx"\n}\n'))),(0,r.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app TodoApp {\n  wasp: {\n    version: "^0.11.0"\n  },\n  title: "Todo app"\n}\n\nroute RootRoute { path: "/", to: MainPage }\npage MainPage {\n  component: import Main from "@client/MainPage.tsx"\n}\n')))),(0,r.kt)("p",null,"Next, we'll remove most of the code from the ",(0,r.kt)("inlineCode",{parentName:"p"},"MainPage")," component:"),(0,r.kt)(s.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/client/MainPage.jsx"',title:'"src/client/MainPage.jsx"'},"const MainPage = () => {\n  return <div>Hello world!</div>\n}\n\nexport default MainPage\n"))),(0,r.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/client/MainPage.tsx"',title:'"src/client/MainPage.tsx"'},"const MainPage = () => {\n  return <div>Hello world!</div>\n}\n\nexport default MainPage\n")))),(0,r.kt)("p",null,"At this point, the main page should look like this:"),(0,r.kt)("img",{alt:"Todo App - Hello World",src:(0,i.Z)("img/todo-app-hello-world.png"),style:{border:"1px solid black"}}),(0,r.kt)("p",null,"In the next section, we'll start implementing some features of the Todo app!"))}f.isMDXComponent=!0}}]);