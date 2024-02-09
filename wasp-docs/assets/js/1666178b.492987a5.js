"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[9020],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),c=i,h=d["".concat(l,".").concat(c)]||d[c]||m[c]||r;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:i,s[1]=o;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},38610:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),i=n(44996);const r=e=>a.createElement("div",null,a.createElement("p",{align:"center"},a.createElement("figure",null,a.createElement("img",{style:{width:e.width},alt:e.alt,src:(0,i.Z)(e.source)}),a.createElement("figcaption",{class:"image-caption",style:{fontStyle:"italic",opacity:.6,fontSize:"0.9rem"}},e.caption))))},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),i=n(86010);const r={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r.tabItem,s),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(87462),i=n(67294),r=n(86010),s=n(12466),o=n(16550),l=n(91980),u=n(67392),p=n(50012);function d(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:i}}=e;return{value:t,label:n,attributes:a,default:i}}))}function m(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=m(e),[s,o]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[l,u]=h({queryString:n,groupId:a}),[d,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,p.Nk)(n);return[a,(0,i.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),k=(()=>{const e=l??d;return c({value:e,tabValues:r})?e:null})();(0,i.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!c({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var k=n(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:n,selectedValue:o,selectValue:l,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),m=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==o&&(d(t),l(a))},c=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:c,onClick:m},s,{className:(0,r.Z)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":o===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=g(e);return i.createElement("div",{className:(0,r.Z)("tabs-container",y.tabList)},i.createElement(f,(0,a.Z)({},e,t)),i.createElement(N,(0,a.Z)({},e,t)))}function b(e){const t=(0,k.Z)();return i.createElement(v,(0,a.Z)({key:String(t)},e))}},46300:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),i=n(50012);function r(e){let{path:t}=e;const[n]=(0,i.Nk)("docusaurus.tab.js-ts"),r=t.lastIndexOf("{"),s=t.slice(r+1,t.length-1),[o,l]=s.split(","),u=t.slice(0,r);return a.createElement("code",null,u+("js"===n?o:l))}},87587:(e,t,n)=>{n.d(t,{Jp:()=>r,aH:()=>s});var a=n(67294);const i=e=>{let{color:t,children:n}=e;return a.createElement("span",{style:{border:`2px solid ${t}`,display:"inline-block",padding:"0.2em 0.4em",color:t,borderRadius:"0.4em",fontSize:"0.8em",lineHeight:"1",fontWeight:"bold"}},n)};function r(){return a.createElement(i,{color:"#0b62f5"},"internal")}function s(){return a.createElement(i,{color:"#f59e0b"},"required")}},20858:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(87462),i=(n(67294),n(3905));n(46300);const r={toc:[]},s="wrapper";function o(e){let{components:t,...n}=e;return(0,i.kt)(s,(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Using multiple auth identities for a single user",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Wasp currently doesn't support multiple auth identities for a single user. This means, for example, that a user can't have both an email-based auth identity and a Google-based auth identity. This is something we will add in the future with the introduction of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/issues/954"},"account merging feature"),"."),(0,i.kt)("p",{parentName:"admonition"},"Account merging means that multiple auth identities can be merged into a single user account. For example, a user's email and Google identity can be merged into a single user account. Then the user can log in with either their email or Google account and they will be logged into the same account.")))}o.isMDXComponent=!0},20422:(e,t,n)=>{n.d(t,{ZP:()=>u});var a=n(87462),i=(n(67294),n(3905)),r=(n(46300),n(85162)),s=n(74866);const o={toc:[]},l="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(l,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"getEmail")," helper returns the user's email or ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," if the user doesn't have an email auth identity."),(0,i.kt)(s.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/client/MainPage.jsx"',title:'"src/client/MainPage.jsx"'},"import { getEmail } from '@wasp/auth/user'\n\nconst MainPage = ({ user }) => {\n  const email = getEmail(user)\n  // ...\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=src/server/tasks.js",title:"src/server/tasks.js"},"import { getEmail } from '@wasp/auth/user.js'\n\nexport const createTask = async (args, context) => {\n  const email = getEmail(context.user)\n  // ...\n}\n"))),(0,i.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/client/MainPage.tsx"',title:'"src/client/MainPage.tsx"'},"import { getEmail } from '@wasp/auth/user'\nimport { User as AuthenticatedUser } from '@wasp/auth/types'\n\nconst MainPage = ({ user }: { user: AuthenticatedUser }) => {\n  const email = getEmail(user)\n  // ...\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/server/tasks.ts",title:"src/server/tasks.ts"},"import { getEmail } from '@wasp/auth/user.js'\n\nexport const createTask: CreateTask<...>  = async (args, context) => {\n  const email = getEmail(context.user)\n  // ...\n}\n")))))}u.isMDXComponent=!0},35259:(e,t,n)=>{n.d(t,{ZP:()=>u});var a=n(87462),i=(n(67294),n(3905)),r=(n(46300),n(85162)),s=n(74866);const o={toc:[]},l="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(l,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"getUsername")," helper returns the user's username or ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," if the user doesn't have a username auth identity."),(0,i.kt)(s.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/client/MainPage.jsx"',title:'"src/client/MainPage.jsx"'},"import { getUsername } from '@wasp/auth/user'\n\nconst MainPage = ({ user }) => {\n  const username = getUsername(user)\n  // ...\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=src/server/tasks.js",title:"src/server/tasks.js"},"import { getUsername } from '@wasp/auth/user.js'\n\nexport const createTask = async (args, context) => {\n  const username = getUsername(context.user)\n  // ...\n}\n"))),(0,i.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/client/MainPage.tsx"',title:'"src/client/MainPage.tsx"'},"import { getUsername } from '@wasp/auth/user'\nimport { User as AuthenticatedUser } from '@wasp/auth/types'\n\nconst MainPage = ({ user }: { user: AuthenticatedUser }) => {\n  const username = getUsername(user)\n  // ...\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/server/tasks.ts",title:"src/server/tasks.ts"},"import { getUsername } from '@wasp/auth/user.js'\n\nexport const createTask: CreateTask<...>  = async (args, context) => {\n  const username = getUsername(context.user)\n  // ...\n}\n")))))}u.isMDXComponent=!0},51176:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>N,frontMatter:()=>m,metadata:()=>h,toc:()=>k});var a=n(87462),i=(n(67294),n(3905)),r=(n(46300),n(85162)),s=n(74866),o=n(38610),l=n(87587),u=n(20858),p=n(20422),d=n(35259);const m={title:"Auth Entities"},c=void 0,h={unversionedId:"auth/entities/entities",id:"auth/entities/entities",title:"Auth Entities",description:"Wasp supports multiple different authentication methods and for each method, we need to store different information about the user. For example, if you are using the Username & password authentication method, we need to store the user's username and password. On the other hand, if you are using the Email authentication method, you will need to store the user's email, password and for example, their email verification status.",source:"@site/docs/auth/entities/entities.md",sourceDirName:"auth/entities",slug:"/auth/entities/",permalink:"/docs/auth/entities/",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/docs/auth/entities/entities.md",tags:[],version:"current",frontMatter:{title:"Auth Entities"},sidebar:"docs",previous:{title:"Google",permalink:"/docs/auth/social-auth/google"},next:{title:"Starter Templates",permalink:"/docs/project/starter-templates"}},g={},k=[{value:"Entities Explained",id:"entities-explained",level:2},{value:"User Entity",id:"user-entity",level:3},{value:"Example App Model",id:"example-app-model",level:3},{value:"<code>Auth</code> Entity <Internal />",id:"auth-entity-",level:3},{value:"<code>AuthIdentity</code> Entity <Internal />",id:"authidentity-entity-",level:3},{value:"<code>Session</code> Entity <Internal />",id:"session-entity-",level:3},{value:"Accessing the Auth Fields",id:"accessing-the-auth-fields",level:2},{value:"<code>getEmail</code>",id:"getemail",level:3},{value:"<code>getUsername</code>",id:"getusername",level:3},{value:"<code>getFirstProviderUserId</code>",id:"getfirstprovideruserid",level:3},{value:"<code>findUserIdentity</code>",id:"finduseridentity",level:3},{value:"Custom Signup Action",id:"custom-signup-action",level:2}],y={toc:k},f="wrapper";function N(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Wasp supports multiple different authentication methods and for each method, we need to store different information about the user. For example, if you are using the ",(0,i.kt)("a",{parentName:"p",href:"./username-and-pass"},"Username & password")," authentication method, we need to store the user's username and password. On the other hand, if you are using the ",(0,i.kt)("a",{parentName:"p",href:"./email"},"Email")," authentication method, you will need to store the user's email, password and for example, their email verification status."),(0,i.kt)("h2",{id:"entities-explained"},"Entities Explained"),(0,i.kt)("p",null,"To store user information, Wasp creates a few entities behind the scenes. In this section, we will explain what entities are created and how they are connected."),(0,i.kt)("h3",{id:"user-entity"},"User Entity"),(0,i.kt)("p",null,"When you want to add authentication to your app, you need to specify the user entity e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"User"),' in your Wasp file. This entity is a "business logic user" which represents a user of your app. '),(0,i.kt)("p",null,"You can use this entity to store any information about the user that you want to store. For example, you might want to store the user's name or address. You can also use the user entity to define the relations between users and other entities in your app. For example, you might want to define a relation between a user and the tasks that they have created."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp"},"entity User {=psl\n  id Int @id @default(autoincrement())\n  // Any other fields you want to store about the user\npsl=}\n")),(0,i.kt)("p",null,"You ",(0,i.kt)("strong",{parentName:"p"},"own")," the user entity and you can modify it as you wish. You can add new fields to it, remove fields from it, or change the type of the fields. You can also add new relations to it or remove existing relations from it."),(0,i.kt)(o.Z,{alt:"Auth Entities in a Wasp App",source:"img/auth-entities/model.png",caption:"Auth Entities in a Wasp App",mdxType:"ImgWithCaption"}),(0,i.kt)("p",null,"On the other hand, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Auth"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthIdentity")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Session")," entities are created behind the scenes and are used to store the user's login credentials. You as the developer don't need to care about this entity most of the time. Wasp ",(0,i.kt)("strong",{parentName:"p"},"owns")," these entities."),(0,i.kt)("p",null,"In the case you want to create a custom signup action, you will need to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Auth")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthIdentity")," entities directly."),(0,i.kt)("h3",{id:"example-app-model"},"Example App Model"),(0,i.kt)("p",null,"Let's imagine we created a simple tasks management app:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The app has email and Google-based auth."),(0,i.kt)("li",{parentName:"ul"},"Users can create tasks and see the tasks that they have created.")),(0,i.kt)("p",null,"Let's look at how would that look in the database:"),(0,i.kt)(o.Z,{alt:"Example of Auth Entities",source:"img/auth-entities/model-example.png",caption:"Example of Auth Entities",mdxType:"ImgWithCaption"}),(0,i.kt)("p",null,"If we take a look at an example user in the database, we can see:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The business logic user, ",(0,i.kt)("inlineCode",{parentName:"li"},"User")," is connected to multiple ",(0,i.kt)("inlineCode",{parentName:"li"},"Task")," entities.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'In this example, "Example User" has two tasks.'))),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"User")," is connected to exactly one ",(0,i.kt)("inlineCode",{parentName:"li"},"Auth")," entity."),(0,i.kt)("li",{parentName:"ul"},"Each ",(0,i.kt)("inlineCode",{parentName:"li"},"Auth")," entity can have multiple ",(0,i.kt)("inlineCode",{parentName:"li"},"AuthIdentity")," entities.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"In this example, the ",(0,i.kt)("inlineCode",{parentName:"li"},"Auth")," entity has two ",(0,i.kt)("inlineCode",{parentName:"li"},"AuthIdentity")," entities: one for the email-based auth and one for the Google-based auth."))),(0,i.kt)("li",{parentName:"ul"},"Each ",(0,i.kt)("inlineCode",{parentName:"li"},"Auth")," entity can have multiple ",(0,i.kt)("inlineCode",{parentName:"li"},"Session")," entities.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"In this example, the ",(0,i.kt)("inlineCode",{parentName:"li"},"Auth")," entity has one ",(0,i.kt)("inlineCode",{parentName:"li"},"Session")," entity.")))),(0,i.kt)(u.ZP,{mdxType:"MultipleIdentitiesWarning"}),(0,i.kt)("h3",{id:"auth-entity-"},(0,i.kt)("inlineCode",{parentName:"h3"},"Auth")," Entity ",(0,i.kt)(l.Jp,{mdxType:"Internal"})),(0,i.kt)("p",null,"Wasp's internal ",(0,i.kt)("inlineCode",{parentName:"p"},"Auth")," entity is used to connect the business logic user, ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," with the user's login credentials."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp"},"entity Auth {=psl\n  id         String         @id @default(uuid())\n  userId     Int?           @unique\n  // Wasp injects this relation on the User entity as well\n  user       User?          @relation(fields: [userId], references: [id], onDelete: Cascade) \n  identities AuthIdentity[]\n  sessions   Session[]\npsl=}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Auth")," fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id")," is a unique identifier of the ",(0,i.kt)("inlineCode",{parentName:"li"},"Auth")," entity."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"userId")," is a foreign key to the ",(0,i.kt)("inlineCode",{parentName:"li"},"User")," entity.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"It is used to connect the ",(0,i.kt)("inlineCode",{parentName:"li"},"Auth")," entity with the business logic user."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user")," is a relation to the ",(0,i.kt)("inlineCode",{parentName:"li"},"User")," entity.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This relation is injected on the ",(0,i.kt)("inlineCode",{parentName:"li"},"User")," entity as well."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"identities")," is a relation to the ",(0,i.kt)("inlineCode",{parentName:"li"},"AuthIdentity")," entity."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sessions")," is a relation to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Session")," entity.")),(0,i.kt)("h3",{id:"authidentity-entity-"},(0,i.kt)("inlineCode",{parentName:"h3"},"AuthIdentity")," Entity ",(0,i.kt)(l.Jp,{mdxType:"Internal"})),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthIdentity")," entity is used to store the user's login credentials for various authentication methods."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp"},'entity AuthIdentity {=psl\n  providerName   String\n  providerUserId String\n  providerData   String @default("{}")\n  authId         String\n  auth           Auth   @relation(fields: [authId], references: [id], onDelete: Cascade)\n\n  @@id([providerName, providerUserId])  \npsl=}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthIdentity")," fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"providerName")," is the name of the authentication provider.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For example, ",(0,i.kt)("inlineCode",{parentName:"li"},"email")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"google"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"providerUserId")," is the user's ID in the authentication provider.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For example, the user's email or Google ID."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"providerData")," is a JSON string that contains additional data about the user from the authentication provider.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For example, for password based auth, this field contains the user's hashed password."),(0,i.kt)("li",{parentName:"ul"},"This field is a ",(0,i.kt)("inlineCode",{parentName:"li"},"String")," and not a ",(0,i.kt)("inlineCode",{parentName:"li"},"Json")," type because ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/prisma/prisma/issues/3786"},"Prisma doesn't support the ",(0,i.kt)("inlineCode",{parentName:"a"},"Json")," type for SQLite"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"authId")," is a foreign key to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Auth")," entity.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"It is used to connect the ",(0,i.kt)("inlineCode",{parentName:"li"},"AuthIdentity")," entity with the ",(0,i.kt)("inlineCode",{parentName:"li"},"Auth")," entity."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"auth")," is a relation to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Auth")," entity.")),(0,i.kt)("h3",{id:"session-entity-"},(0,i.kt)("inlineCode",{parentName:"h3"},"Session")," Entity ",(0,i.kt)(l.Jp,{mdxType:"Internal"})),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Session")," entity is used to store the user's session information. It is used to keep the user logged in between page refreshes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp"},"entity Session {=psl\n  id        String   @id @unique\n  expiresAt DateTime\n  userId    String\n  auth      Auth     @relation(references: [id], fields: [userId], onDelete: Cascade)\n\n  @@index([userId])\npsl=}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Session")," fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id")," is a unique identifier of the ",(0,i.kt)("inlineCode",{parentName:"li"},"Session")," entity."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"expiresAt")," is the date when the session expires."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"userId")," is a foreign key to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Auth")," entity.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"It is used to connect the ",(0,i.kt)("inlineCode",{parentName:"li"},"Session")," entity with the ",(0,i.kt)("inlineCode",{parentName:"li"},"Auth")," entity."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"auth")," is a relation to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Auth")," entity.")),(0,i.kt)("h2",{id:"accessing-the-auth-fields"},"Accessing the Auth Fields"),(0,i.kt)("p",null,"If you are looking to access the user's email or username in your code, you can do that by accessing the info about the user that is stored in the ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthIdentity")," entity."),(0,i.kt)("p",null,"Everywhere where Wasp gives you the ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," object, it also includes the ",(0,i.kt)("inlineCode",{parentName:"p"},"auth")," relation with the ",(0,i.kt)("inlineCode",{parentName:"p"},"identities")," relation. This means that you can access the auth identity info by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"user.auth.identities")," array."),(0,i.kt)("p",null,"To make things a bit easier for you, Wasp offers a few helper functions that you can use to access the auth identity info."),(0,i.kt)("h3",{id:"getemail"},(0,i.kt)("inlineCode",{parentName:"h3"},"getEmail")),(0,i.kt)(p.ZP,{mdxType:"GetEmail"}),(0,i.kt)("h3",{id:"getusername"},(0,i.kt)("inlineCode",{parentName:"h3"},"getUsername")),(0,i.kt)(d.ZP,{mdxType:"GetUsername"}),(0,i.kt)("h3",{id:"getfirstprovideruserid"},(0,i.kt)("inlineCode",{parentName:"h3"},"getFirstProviderUserId")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"getFirstProviderUserId")," helper returns the first user ID (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"username")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"email"),") that it finds for the user or ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," if it doesn't find any."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#authidentity-entity-"},"As mentioned before"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"providerUserId")," field is how providers identify our users. For example, the user's ",(0,i.kt)("inlineCode",{parentName:"p"},"username")," in the case of the username auth or the user's ",(0,i.kt)("inlineCode",{parentName:"p"},"email")," in the case of the email auth. This can be useful if you support multiple authentication methods and you need ",(0,i.kt)("em",{parentName:"p"},"any")," ID that identifies the user in your app."),(0,i.kt)(s.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/client/MainPage.jsx"',title:'"src/client/MainPage.jsx"'},"import { getFirstProviderUserId } from '@wasp/auth/user'\n\nconst MainPage = ({ user }) => {\n  const userId = getFirstProviderUserId(user)\n  // ...\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=src/server/tasks.js",title:"src/server/tasks.js"},"import { getFirstProviderUserId } from '@wasp/auth/user.js'\n\nexport const createTask = async (args, context) => {\n  const userId = getFirstProviderUserId(context.user)\n  // ...\n}\n"))),(0,i.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/client/MainPage.tsx"',title:'"src/client/MainPage.tsx"'},"import { getFirstProviderUserId } from '@wasp/auth/user'\nimport { User as AuthenticatedUser } from '@wasp/auth/types'\n\nconst MainPage = ({ user }: { user: AuthenticatedUser }) => {\n  const userId = getFirstProviderUserId(user)\n  // ...\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/server/tasks.ts",title:"src/server/tasks.ts"},"import { getFirstProviderUserId } from '@wasp/auth/user.js'\n\nexport const createTask: CreateTask<...>  = async (args, context) => {\n  const userId = getFirstProviderUserId(context.user)\n  // ...\n}\n")))),(0,i.kt)("h3",{id:"finduseridentity"},(0,i.kt)("inlineCode",{parentName:"h3"},"findUserIdentity")),(0,i.kt)("p",null,"You can find a specific auth identity by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"findUserIdentity")," helper function. This function takes a ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"providerName")," and returns the first ",(0,i.kt)("inlineCode",{parentName:"p"},"providerName")," identity that it finds or ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," if it doesn't find any."),(0,i.kt)("p",null,"Possible provider names are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"email")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"username")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"google")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"github"))),(0,i.kt)("p",null,"This can be useful if you want to check if the user has a specific auth identity. For example, you might want to check if the user has an email auth identity or Google auth identity."),(0,i.kt)(s.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/client/MainPage.jsx"',title:'"src/client/MainPage.jsx"'},"import { findUserIdentity } from '@wasp/auth/user'\n\nconst MainPage = ({ user }) => {\n  const emailIdentity = findUserIdentity(user, 'email')\n  const googleIdentity = findUserIdentity(user, 'google')\n  if (emailIdentity) {\n    // ...\n  } else if (googleIdentity) {\n    // ...\n  }\n  // ...\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=src/server/tasks.js",title:"src/server/tasks.js"},"import { findUserIdentity } from '@wasp/auth/user.js'\n\nexport const createTask = async (args, context) => {\n  const emailIdentity = findUserIdentity(context.user, 'email')\n  const googleIdentity = findUserIdentity(context.user, 'google')\n  if (emailIdentity) {\n    // ...\n  } else if (googleIdentity) {\n    // ...\n  }\n  // ...\n}\n"))),(0,i.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/client/MainPage.tsx"',title:'"src/client/MainPage.tsx"'},"import { findUserIdentity } from '@wasp/auth/user'\nimport { User as AuthenticatedUser } from '@wasp/auth/types'\n\nconst MainPage = ({ user }: { user: AuthenticatedUser }) => {\n  const emailIdentity = findUserIdentity(user, 'email')\n  const googleIdentity = findUserIdentity(user, 'google')\n  if (emailIdentity) {\n    // ...\n  } else if (googleIdentity) {\n    // ...\n  }\n  // ...\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/server/tasks.ts",title:"src/server/tasks.ts"},"import { findUserIdentity } from '@wasp/auth/user.js'\n\nexport const createTask: CreateTask<...>  = async (args, context) => {\n  const emailIdentity = findUserIdentity(context.user, 'email')\n  const googleIdentity = findUserIdentity(context.user, 'google')\n  if (emailIdentity) {\n    // ...\n  } else if (googleIdentity) {\n    // ...\n  }\n  // ...\n}\n")))),(0,i.kt)("h2",{id:"custom-signup-action"},"Custom Signup Action"),(0,i.kt)("p",null,"Let's take a look at how you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Auth")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthIdentity")," entities to create custom login and signup actions. For example, you might want to create a custom signup action that creates a user in your app and also creates a user in a third-party service."),(0,i.kt)("admonition",{title:"Custom Signup Examples",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"In the ",(0,i.kt)("a",{parentName:"p",href:"./email#creating-a-custom-sign-up-action"},"Email")," section of the docs we give you an example for custom email signup and in the ",(0,i.kt)("a",{parentName:"p",href:"./username-and-pass#2-creating-your-custom-sign-up-action"},"Username & password")," section of the docs we give you an example for custom username & password signup.")),(0,i.kt)("p",null,"Below is a simplified version of a custom signup action which you probably wouldn't use in your app but it shows you how you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Auth")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthIdentity")," entities to create a custom signup action."),(0,i.kt)(s.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'// ...\n\naction customSignup {\n  fn: import { signup } from "@server/auth/signup.js",\n  entities: [User]\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/server/auth/signup.js"',title:'"src/server/auth/signup.js"'},"import {\n  createProviderId,\n  sanitizeAndSerializeProviderData,\n  createUser,\n} from '@wasp/auth/utils.js'\n\nexport const signup = async (args, { entities: { User } }) => {\n  try {\n    // Provider ID is a combination of the provider name and the provider user ID\n    // And it is used to uniquely identify the user in your app\n    const providerId = createProviderId('username', args.username)\n    // sanitizeAndSerializeProviderData hashes the password and returns a JSON string\n    const providerData = await sanitizeAndSerializeProviderData({\n      hashedPassword: args.password,\n    })\n\n    await createUser(\n      providerId,\n      providerData,\n      // Any additional data you want to store on the User entity\n      {},\n    )\n\n    // This is equivalent to:\n    // await User.create({\n    //   data: {\n    //     auth: {\n    //       create: {\n    //         identities: {\n    //             create: {\n    //                 providerName: 'username',\n    //                 providerUserId: args.username\n    //                 providerData,\n    //             },\n    //         },\n    //       }\n    //     },\n    //   }\n    // })\n  } catch (e) {\n    return {\n      success: false,\n      message: e.message,\n    }\n  }\n\n  // Your custom code after sign-up.\n  // ...\n\n  return {\n    success: true,\n    message: 'User created successfully',\n  }\n}\n"))),(0,i.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'// ...\n\naction customSignup {\n  fn: import { signup } from "@server/auth/signup.js",\n  entities: [User]\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/server/auth/signup.ts"',title:'"src/server/auth/signup.ts"'},"import {\n  createProviderId,\n  sanitizeAndSerializeProviderData,\n  createUser,\n} from '@wasp/auth/utils.js'\nimport type { CustomSignup } from '@wasp/actions/types'\n\ntype CustomSignupInput = {\n  username: string\n  password: string\n}\ntype CustomSignupOutput = {\n  success: boolean\n  message: string\n}\n\nexport const signup: CustomSignup<\n  CustomSignupInput,\n  CustomSignupOutput\n> = async (args, { entities: { User } }) => {\n  try {\n    // Provider ID is a combination of the provider name and the provider user ID\n    // And it is used to uniquely identify the user in your app\n    const providerId = createProviderId('username', args.username)\n    // sanitizeAndSerializeProviderData hashes the password and returns a JSON string\n    const providerData = await sanitizeAndSerializeProviderData<'username'>({\n      hashedPassword: args.password,\n    })\n\n    await createUser(\n      providerId,\n      providerData,\n      // Any additional data you want to store on the User entity\n      {},\n    )\n\n    // This is equivalent to:\n    // await User.create({\n    //   data: {\n    //     auth: {\n    //       create: {\n    //         identities: {\n    //             create: {\n    //                 providerName: 'username',\n    //                 providerUserId: args.username\n    //                 providerData,\n    //             },\n    //         },\n    //       }\n    //     },\n    //   }\n    // })\n  } catch (e) {\n    return {\n      success: false,\n      message: e.message,\n    }\n  }\n\n  // Your custom code after sign-up.\n  // ...\n\n  return {\n    success: true,\n    message: 'User created successfully',\n  }\n}\n")))),(0,i.kt)("p",null,"You can use whichever method suits your needs better: either the ",(0,i.kt)("inlineCode",{parentName:"p"},"createUser")," function or Prisma's ",(0,i.kt)("inlineCode",{parentName:"p"},"User.create")," method. The ",(0,i.kt)("inlineCode",{parentName:"p"},"createUser")," function is a bit more convenient to use because it hides some of the complexity. On the other hand, the ",(0,i.kt)("inlineCode",{parentName:"p"},"User.create")," method gives you more control over the data that is stored in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Auth")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthIdentity")," entities."))}N.isMDXComponent=!0}}]);