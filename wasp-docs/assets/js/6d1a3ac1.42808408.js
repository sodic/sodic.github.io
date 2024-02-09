"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[9210],{85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),o=n(86010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),o=n(67294),r=n(86010),i=n(12466),l=n(16550),p=n(91980),s=n(67392),u=n(50012);function c(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function m(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,p._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=m(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[p,s]=f({queryString:n,groupId:a}),[c,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,u.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),h=(()=>{const e=p??c;return d({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),y(e)}),[s,y,r]),tabValues:r}}var h=n(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:l,selectValue:p,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),a=s[n].value;a!==l&&(c(t),p(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},i,{className:(0,r.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function b(e){const t=y(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",k.tabList)},o.createElement(g,(0,a.Z)({},e,t)),o.createElement(v,(0,a.Z)({},e,t)))}function N(e){const t=(0,h.Z)();return o.createElement(b,(0,a.Z)({key:String(t)},e))}},46300:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),o=n(50012);function r(e){let{path:t}=e;const[n]=(0,o.Nk)("docusaurus.tab.js-ts"),r=t.lastIndexOf("{"),i=t.slice(r+1,t.length-1),[l,p]=i.split(","),s=t.slice(0,r);return a.createElement("code",null,s+("js"===n?l:p))}},48863:(e,t,n)=>{n.d(t,{A:()=>i,v:()=>l});var a=n(67294),o=n(50012),r=n(49875);function i(e){let{children:t}=e;const[n]=(0,o.Nk)("docusaurus.tab.js-ts");return"ts"===n&&a.createElement(r.Z,null,t)}function l(e){let{children:t}=e;const[n]=(0,o.Nk)("docusaurus.tab.js-ts");return"js"===n&&a.createElement(r.Z,null,t)}},32124:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>y});var a=n(87462),o=(n(67294),n(3905)),r=(n(46300),n(85162)),i=n(74866);const l={toc:[]},p="wrapper";function s(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Setting the correct env variable",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If you set the ",(0,o.kt)("inlineCode",{parentName:"p"},"baseDir")," option, make sure that the ",(0,o.kt)("inlineCode",{parentName:"p"},"WASP_WEB_CLIENT_URL")," env variable also includes that base directory."),(0,o.kt)("p",{parentName:"admonition"},"For example, if you are serving your app from ",(0,o.kt)("inlineCode",{parentName:"p"},"https://example.com/my-app"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"WASP_WEB_CLIENT_URL")," should be also set to ",(0,o.kt)("inlineCode",{parentName:"p"},"https://example.com/my-app"),", and not just ",(0,o.kt)("inlineCode",{parentName:"p"},"https://example.com"),".")))}s.isMDXComponent=!0;var u=n(48863);const c={title:"Client Config"},m=void 0,d={unversionedId:"project/client-config",id:"version-0.11.8/project/client-config",title:"Client Config",description:"You can configure the client using the client field inside the app declaration:",source:"@site/versioned_docs/version-0.11.8/project/client-config.md",sourceDirName:"project",slug:"/project/client-config",permalink:"/wasp-docs/docs/0.11.8/project/client-config",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/versioned_docs/version-0.11.8/project/client-config.md",tags:[],version:"0.11.8",frontMatter:{title:"Client Config"},sidebar:"docs",previous:{title:"Customizing the App",permalink:"/wasp-docs/docs/0.11.8/project/customizing-app"},next:{title:"Server Config",permalink:"/wasp-docs/docs/0.11.8/project/server-config"}},f={},y=[{value:"Root Component",id:"root-component",level:2},{value:"Defining a Common Layout",id:"defining-a-common-layout",level:3},{value:"Setting up a Provider",id:"setting-up-a-provider",level:3},{value:"Setup Function",id:"setup-function",level:2},{value:"Running Some Code",id:"running-some-code",level:3},{value:"Overriding Default Behaviour for Queries",id:"overriding-default-behaviour-for-queries",level:3},{value:"Base Directory",id:"base-directory",level:2},{value:"API Reference",id:"api-reference",level:2}],h={toc:y},k="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(k,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can configure the client using the ",(0,o.kt)("inlineCode",{parentName:"p"},"client")," field inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"app")," declaration:"),(0,o.kt)(i.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app MyApp {\n  title: "My app",\n  // ...\n  client: {\n    rootComponent: import Root from "@client/Root.jsx",\n    setupFn: import mySetupFunction from "@client/myClientSetupCode.js"\n  }\n}\n'))),(0,o.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app MyApp {\n  title: "My app",\n  // ...\n  client: {\n    rootComponent: import Root from "@client/Root.tsx",\n    setupFn: import mySetupFunction from "@client/myClientSetupCode.ts"\n  }\n}\n')))),(0,o.kt)("h2",{id:"root-component"},"Root Component"),(0,o.kt)("p",null,'Wasp gives you the option to define a "wrapper" component for your React app.'),(0,o.kt)("p",null,"It can be used for a variety of purposes, but the most common ones are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Defining a common layout for your application."),(0,o.kt)("li",{parentName:"ul"},"Setting up various providers that your application needs.")),(0,o.kt)("h3",{id:"defining-a-common-layout"},"Defining a Common Layout"),(0,o.kt)("p",null,"Let's define a common layout for your application:"),(0,o.kt)(i.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app MyApp {\n  title: "My app",\n  // ...\n  client: {\n    rootComponent: import Root from "@client/Root.jsx",\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/client/Root.jsx"',title:'"src/client/Root.jsx"'},"export default function Root({ children }) {\n  return (\n    <div>\n      <header>\n        <h1>My App</h1>\n      </header>\n      {children}\n      <footer>\n        <p>My App footer</p>\n      </footer>\n    </div>\n  )\n}\n"))),(0,o.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app MyApp {\n  title: "My app",\n  // ...\n  client: {\n    rootComponent: import Root from "@client/Root.tsx",\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/client/Root.tsx"',title:'"src/client/Root.tsx"'},"export default function Root({ children }: { children: React.ReactNode }) {\n  return (\n    <div>\n      <header>\n        <h1>My App</h1>\n      </header>\n      {children}\n      <footer>\n        <p>My App footer</p>\n      </footer>\n    </div>\n  )\n}\n")))),(0,o.kt)("h3",{id:"setting-up-a-provider"},"Setting up a Provider"),(0,o.kt)("p",null,"This is how to set up various providers that your application needs:"),(0,o.kt)(i.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app MyApp {\n  title: "My app",\n  // ...\n  client: {\n    rootComponent: import Root from "@client/Root.jsx",\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/client/Root.jsx"',title:'"src/client/Root.jsx"'},"import store from './store'\nimport { Provider } from 'react-redux'\n\nexport default function Root({ children }) {\n  return <Provider store={store}>{children}</Provider>\n}\n"))),(0,o.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app MyApp {\n  title: "My app",\n  // ...\n  client: {\n    rootComponent: import Root from "@client/Root.tsx",\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/client/Root.tsx"',title:'"src/client/Root.tsx"'},"import store from './store'\nimport { Provider } from 'react-redux'\n\nexport default function Root({ children }: { children: React.ReactNode }) {\n  return <Provider store={store}>{children}</Provider>\n}\n")))),(0,o.kt)("p",null,"As long as you render the children, you can do whatever you want in your root\ncomponent."),(0,o.kt)("p",null,"Read more about the root component in the ",(0,o.kt)("a",{parentName:"p",href:"#rootcomponent-clientimport"},"API Reference"),"."),(0,o.kt)("h2",{id:"setup-function"},"Setup Function"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"setupFn")," declares a ",(0,o.kt)(u.A,{mdxType:"ShowForTs"},"Typescript"),(0,o.kt)(u.v,{mdxType:"ShowForJs"},"JavaScript")," function that Wasp executes on the client before everything else."),(0,o.kt)("h3",{id:"running-some-code"},"Running Some Code"),(0,o.kt)("p",null,"We can run any code we want in the setup function."),(0,o.kt)("p",null,"For example, here's a setup function that logs a message every hour:"),(0,o.kt)(i.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/client/myClientSetupCode.js"',title:'"src/client/myClientSetupCode.js"'},"export default async function mySetupFunction() {\n  let count = 1\n  setInterval(\n    () => console.log(`You have been online for ${count++} hours.`),\n    1000 * 60 * 60\n  )\n}\n"))),(0,o.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/client/myClientSetupCode.ts"',title:'"src/client/myClientSetupCode.ts"'},"export default async function mySetupFunction(): Promise<void> {\n  let count = 1\n  setInterval(\n    () => console.log(`You have been online for ${count++} hours.`),\n    1000 * 60 * 60\n  )\n}\n")))),(0,o.kt)("h3",{id:"overriding-default-behaviour-for-queries"},"Overriding Default Behaviour for Queries"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You can change the options for a ",(0,o.kt)("strong",{parentName:"p"},"single")," Query using the ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," object, as described ",(0,o.kt)("a",{parentName:"p",href:"../data-model/operations/queries#the-usequery-hook-1"},"here"),".")),(0,o.kt)("p",null,"Wasp's ",(0,o.kt)("inlineCode",{parentName:"p"},"useQuery")," hook uses ",(0,o.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"useQuery")," hook under the hood. Since ",(0,o.kt)("inlineCode",{parentName:"p"},"react-query")," comes configured with aggressive but sane default options, you most likely won't have to change those defaults for all Queries."),(0,o.kt)("p",null,"If you do need to change the global defaults, you can do so inside the client setup function."),(0,o.kt)("p",null,"Wasp exposes a ",(0,o.kt)("inlineCode",{parentName:"p"},"configureQueryClient")," hook that lets you configure ",(0,o.kt)("em",{parentName:"p"},"react-query"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryClient")," object:"),(0,o.kt)(i.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/client/myClientSetupCode.js"',title:'"src/client/myClientSetupCode.js"'},"import { configureQueryClient } from '@wasp/queryClient'\n\nexport default async function mySetupFunction() {\n  // ... some setup\n  configureQueryClient({\n    defaultOptions: {\n      queries: {\n        staleTime: Infinity,\n      },\n    },\n  })\n  // ... some more setup\n}\n"))),(0,o.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/client/myClientSetupCode.ts"',title:'"src/client/myClientSetupCode.ts"'},"import { configureQueryClient } from '@wasp/queryClient'\n\nexport default async function mySetupFunction(): Promise<void> {\n  // ... some setup\n  configureQueryClient({\n    defaultOptions: {\n      queries: {\n        staleTime: Infinity,\n      },\n    },\n  })\n  // ... some more setup\n}\n")))),(0,o.kt)("p",null,"Make sure to pass in an object expected by the ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryClient"),"'s constructor, as\nexplained in\n",(0,o.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/QueryClient"},"react-query's docs"),"."),(0,o.kt)("p",null,"Read more about the setup function in the ",(0,o.kt)("a",{parentName:"p",href:"#setupfn-clientimport"},"API Reference"),"."),(0,o.kt)("h2",{id:"base-directory"},"Base Directory"),(0,o.kt)("p",null,"If you need to serve the client from a subdirectory, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"baseDir")," option:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app MyApp {\n  title: "My app",\n  // ...\n  client: {\n    baseDir: "/my-app",\n  }\n}\n')),(0,o.kt)("p",null,"This means that if you serve your app from ",(0,o.kt)("inlineCode",{parentName:"p"},"https://example.com/my-app"),", the\nrouter will work correctly, and all the assets will be served from\n",(0,o.kt)("inlineCode",{parentName:"p"},"https://example.com/my-app"),"."),(0,o.kt)(s,{mdxType:"BaseDirEnvNote"}),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)(i.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app MyApp {\n  title: "My app",\n  // ...\n  client: {\n    rootComponent: import Root from "@client/Root.jsx",\n    setupFn: import mySetupFunction from "@client/myClientSetupCode.js"\n  }\n}\n'))),(0,o.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'app MyApp {\n  title: "My app",\n  // ...\n  client: {\n    rootComponent: import Root from "@client/Root.tsx",\n    setupFn: import mySetupFunction from "@client/myClientSetupCode.ts",\n    baseDir: "/my-app",\n  }\n}\n')))),(0,o.kt)("p",null,"Client has the following options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h4",{parentName:"li",id:"rootcomponent-clientimport"},(0,o.kt)("inlineCode",{parentName:"h4"},"rootComponent: ClientImport")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"rootComponent")," defines the root component of your client application. It is\nexpected to be a React component, and Wasp will use it to wrap your entire app.\nIt must render its children, which are the actual pages of your application."),(0,o.kt)("p",{parentName:"li"},"Here's an example of a root component that both sets up a provider and\nrenders a custom layout:"),(0,o.kt)(i.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/client/Root.jsx"',title:'"src/client/Root.jsx"'},"import store from './store'\nimport { Provider } from 'react-redux'\n\nexport default function Root({ children }) {\n  return (\n    <Provider store={store}>\n      <Layout>{children}</Layout>\n    </Provider>\n  )\n}\n\nfunction Layout({ children }) {\n  return (\n    <div>\n      <header>\n        <h1>My App</h1>\n      </header>\n      {children}\n      <footer>\n        <p>My App footer</p>\n      </footer>\n    </div>\n  )\n}\n"))),(0,o.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/client/Root.tsx"',title:'"src/client/Root.tsx"'},"import store from './store'\nimport { Provider } from 'react-redux'\n\nexport default function Root({ children }: { children: React.ReactNode }) {\n  return (\n    <Provider store={store}>\n      <Layout>{children}</Layout>\n    </Provider>\n  )\n}\n\nfunction Layout({ children }: { children: React.ReactNode }) {\n  return (\n    <div>\n      <header>\n        <h1>My App</h1>\n      </header>\n      {children}\n      <footer>\n        <p>My App footer</p>\n      </footer>\n    </div>\n  )\n}\n"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h4",{parentName:"li",id:"setupfn-clientimport"},(0,o.kt)("inlineCode",{parentName:"h4"},"setupFn: ClientImport")),(0,o.kt)(u.A,{mdxType:"ShowForTs"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"setupFn")," declares a Typescript function that Wasp executes on the client\nbefore everything else. It is expected to be asynchronous, and\nWasp will await its completion before rendering the page. The function takes no\narguments, and its return value is ignored.")),(0,o.kt)(u.v,{mdxType:"ShowForJs"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"setupFn")," declares a JavaScript function that Wasp executes on the client\nbefore everything else. It is expected to be asynchronous, and\nWasp will await its completion before rendering the page. The function takes no\narguments, and its return value is ignored.")),(0,o.kt)("p",{parentName:"li"},"You can use this function to perform any custom setup (e.g., setting up\nclient-side periodic jobs)."),(0,o.kt)(i.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/client/myClientSetupCode.js"',title:'"src/client/myClientSetupCode.js"'},"export default async function mySetupFunction() {\n  // Run some code\n}\n"))),(0,o.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/client/myClientSetupCode.ts"',title:'"src/client/myClientSetupCode.ts"'},"export default async function mySetupFunction(): Promise<void> {\n  // Run some code\n}\n"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h4",{parentName:"li",id:"basedir-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"baseDir: String")),(0,o.kt)("p",{parentName:"li"},"If you need to serve the client from a subdirectory, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"baseDir")," option."),(0,o.kt)("p",{parentName:"li"},"If you set ",(0,o.kt)("inlineCode",{parentName:"p"},"baseDir")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"/my-app")," for example, that will make Wasp set the ",(0,o.kt)("inlineCode",{parentName:"p"},"basename")," prop of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Router")," to\n",(0,o.kt)("inlineCode",{parentName:"p"},"/my-app"),". It will also set the ",(0,o.kt)("inlineCode",{parentName:"p"},"base")," option of the Vite config to ",(0,o.kt)("inlineCode",{parentName:"p"},"/my-app"),"."),(0,o.kt)("p",{parentName:"li"},"This means that if you serve your app from ",(0,o.kt)("inlineCode",{parentName:"p"},"https://example.com/my-app"),", the router will work correctly, and all the assets will be served from ",(0,o.kt)("inlineCode",{parentName:"p"},"https://example.com/my-app"),"."),(0,o.kt)(s,{mdxType:"BaseDirEnvNote"}))))}g.isMDXComponent=!0}}]);