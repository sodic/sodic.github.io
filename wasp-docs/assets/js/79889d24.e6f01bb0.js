"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[8790],{85162:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),s=a(86010);const i={tabItem:"tabItem_Ymn6"};function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(i.tabItem,r),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(87462),s=a(67294),i=a(86010),r=a(12466),o=a(16550),l=a(91980),u=a(67392),p=a(50012);function d(e){return function(e){return s.Children.map(e,(e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:s}}=e;return{value:t,label:a,attributes:n,default:s}}))}function c(e){const{values:t,children:a}=e;return(0,s.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(i),(0,s.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=c(e),[r,o]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[l,u]=g({queryString:a,groupId:n}),[d,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,p.Nk)(a);return[n,(0,s.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),k=(()=>{const e=l??d;return m({value:e,tabValues:i})?e:null})();(0,s.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:r,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),h(e)}),[u,h,i]),tabValues:i}}var k=a(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:o,selectValue:l,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),c=e=>{const t=e.currentTarget,a=p.indexOf(t),n=u[a].value;n!==o&&(d(t),l(n))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:r}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:c},r,{className:(0,i.Z)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":o===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return s.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=h(e);return s.createElement("div",{className:(0,i.Z)("tabs-container",f.tabList)},s.createElement(b,(0,n.Z)({},e,t)),s.createElement(w,(0,n.Z)({},e,t)))}function v(e){const t=(0,k.Z)();return s.createElement(y,(0,n.Z)({key:String(t)},e))}},46300:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),s=a(50012);function i(e){let{path:t}=e;const[a]=(0,s.Nk)("docusaurus.tab.js-ts"),i=t.lastIndexOf("{"),r=t.slice(i+1,t.length-1),[o,l]=r.split(","),u=t.slice(0,i);return n.createElement("code",null,u+("js"===a?o:l))}},48863:(e,t,a)=>{a.d(t,{A:()=>r,v:()=>o});var n=a(67294),s=a(50012),i=a(49875);function r(e){let{children:t}=e;const[a]=(0,s.Nk)("docusaurus.tab.js-ts");return"ts"===a&&n.createElement(i.Z,null,t)}function o(e){let{children:t}=e;const[a]=(0,s.Nk)("docusaurus.tab.js-ts");return"js"===a&&n.createElement(i.Z,null,t)}},29:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>k,frontMatter:()=>u,metadata:()=>d,toc:()=>m});var n=a(87462),s=(a(67294),a(3905)),i=(a(46300),a(85162)),r=a(74866),o=a(44996),l=a(48863);const u={title:"7. Adding Authentication"},p=void 0,d={unversionedId:"tutorial/auth",id:"version-0.11.8/tutorial/auth",title:"7. Adding Authentication",description:"Most apps today require some sort of registration and login flow, so Wasp has first-class support for it. Let's add it to our Todo app!",source:"@site/versioned_docs/version-0.11.8/tutorial/07-auth.md",sourceDirName:"tutorial",slug:"/tutorial/auth",permalink:"/wasp-docs/docs/0.11.8/tutorial/auth",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/versioned_docs/version-0.11.8/tutorial/07-auth.md",tags:[],version:"0.11.8",sidebarPosition:7,frontMatter:{title:"7. Adding Authentication"},sidebar:"docs",previous:{title:"6. Modifying Data",permalink:"/wasp-docs/docs/0.11.8/tutorial/actions"},next:{title:"Entities",permalink:"/wasp-docs/docs/0.11.8/data-model/entities"}},c={},m=[{value:"Creating a User Entity",id:"creating-a-user-entity",level:2},{value:"Adding Auth to the Project",id:"adding-auth-to-the-project",level:2},{value:"Adding Login and Signup Pages",id:"adding-login-and-signup-pages",level:2},{value:"Update the Main Page to Require Auth",id:"update-the-main-page-to-require-auth",level:2},{value:"Defining a User-Task Relation",id:"defining-a-user-task-relation",level:2},{value:"Updating Operations to Check Authentication",id:"updating-operations-to-check-authentication",level:2},{value:"Logout Button",id:"logout-button",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}],g={toc:m},h="wrapper";function k(e){let{components:t,...a}=e;return(0,s.kt)(h,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Most apps today require some sort of registration and login flow, so Wasp has first-class support for it. Let's add it to our Todo app!"),(0,s.kt)("p",null,"First, we'll create a Todo list for what needs to be done (luckily we have an app for this now \ud83d\ude04)."),(0,s.kt)("ul",{className:"contains-task-list"},(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Create a ",(0,s.kt)("inlineCode",{parentName:"li"},"User")," entity."),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Tell Wasp to use the username and password authentication."),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Add login and signup pages."),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Update the main page to require authentication."),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Add a relation between ",(0,s.kt)("inlineCode",{parentName:"li"},"User")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"Task")," entities."),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Modify our queries and actions so that users can only see and modify their tasks."),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Add a logout button.")),(0,s.kt)("h2",{id:"creating-a-user-entity"},"Creating a User Entity"),(0,s.kt)("p",null,"Since Wasp manages authentication, it expects certain fields to exist on the ",(0,s.kt)("inlineCode",{parentName:"p"},"User")," entity. Specifically, it expects a unique ",(0,s.kt)("inlineCode",{parentName:"p"},"username")," field and a ",(0,s.kt)("inlineCode",{parentName:"p"},"password")," field, both of which should be strings."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},"// ...\n\nentity User {=psl\n    id       Int    @id @default(autoincrement())\n    username String @unique\n    password String\npsl=}\n")),(0,s.kt)("p",null,"As we talked about earlier, we have to remember to update the database schema:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"wasp db migrate-dev\n")),(0,s.kt)("h2",{id:"adding-auth-to-the-project"},"Adding Auth to the Project"),(0,s.kt)("p",null,"Next, we want to tell Wasp that we want to use full-stack ",(0,s.kt)("a",{parentName:"p",href:"../auth/overview"},"authentication")," in our app:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'{7-16} title="main.wasp"',"{7-16}":!0,title:'"main.wasp"'},'app TodoApp {\n  wasp: {\n    version: "^0.11.0"\n  },\n  title: "Todo app",\n\n  auth: {\n    // Tells Wasp which entity to use for storing users.\n    userEntity: User,\n    methods: {\n      // Enable username and password auth.\n      usernameAndPassword: {}\n    },\n    // We\'ll see how this is used a bit later.\n    onAuthFailedRedirectTo: "/login"\n  }\n}\n\n// ...\n')),(0,s.kt)("p",null,"By doing this, Wasp will create:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"../auth/ui"},"Auth UI")," with login and signup forms."),(0,s.kt)("li",{parentName:"ul"},"A ",(0,s.kt)("inlineCode",{parentName:"li"},"logout()")," action."),(0,s.kt)("li",{parentName:"ul"},"A React hook ",(0,s.kt)("inlineCode",{parentName:"li"},"useAuth()"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"context.user")," for use in Queries and Actions.")),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Wasp also supports authentication using ",(0,s.kt)("a",{parentName:"p",href:"../auth/social-auth/google"},"Google"),", ",(0,s.kt)("a",{parentName:"p",href:"../auth/social-auth/github"},"GitHub"),", and ",(0,s.kt)("a",{parentName:"p",href:"../auth/email"},"email"),", with more on the way!")),(0,s.kt)("h2",{id:"adding-login-and-signup-pages"},"Adding Login and Signup Pages"),(0,s.kt)("p",null,"Wasp creates the login and signup forms for us, but we still need to define the pages to display those forms on. We'll start by declaring the pages in the Wasp file:"),(0,s.kt)(r.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'// ...\n\nroute SignupRoute { path: "/signup", to: SignupPage }\npage SignupPage {\n  component: import Signup from "@client/SignupPage.jsx"\n}\n\nroute LoginRoute { path: "/login", to: LoginPage }\npage LoginPage {\n  component: import Login from "@client/LoginPage.jsx"\n}\n'))),(0,s.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'// ...\n\nroute SignupRoute { path: "/signup", to: SignupPage }\npage SignupPage {\n  component: import Signup from "@client/SignupPage.tsx"\n}\n\nroute LoginRoute { path: "/login", to: LoginPage }\npage LoginPage {\n  component: import Login from "@client/LoginPage.tsx"\n}\n')))),(0,s.kt)("p",null,"Great, Wasp now knows these pages exist! Now, the React code for the pages:"),(0,s.kt)(r.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/client/LoginPage.jsx"',title:'"src/client/LoginPage.jsx"'},"import { Link } from 'react-router-dom'\nimport { LoginForm } from '@wasp/auth/forms/Login'\n\nconst LoginPage = () => {\n  return (\n    <div style={{ maxWidth: '400px', margin: '0 auto' }}>\n      <LoginForm />\n      <br />\n      <span>\n        I don't have an account yet (<Link to=\"/signup\">go to signup</Link>).\n      </span>\n    </div>\n  )\n}\n\nexport default LoginPage\n"))),(0,s.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/client/LoginPage.tsx"',title:'"src/client/LoginPage.tsx"'},"import { Link } from 'react-router-dom'\nimport { LoginForm } from '@wasp/auth/forms/Login'\n\nconst LoginPage = () => {\n  return (\n    <div style={{ maxWidth: '400px', margin: '0 auto' }}>\n      <LoginForm />\n      <br />\n      <span>\n        I don't have an account yet (<Link to=\"/signup\">go to signup</Link>).\n      </span>\n    </div>\n  )\n}\n\nexport default LoginPage\n")))),(0,s.kt)("p",null,"The Signup page is very similar to the login one:"),(0,s.kt)(r.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/client/SignupPage.jsx"',title:'"src/client/SignupPage.jsx"'},"import { Link } from 'react-router-dom'\nimport { SignupForm } from '@wasp/auth/forms/Signup'\n\nconst SignupPage = () => {\n  return (\n    <div style={{ maxWidth: '400px', margin: '0 auto' }}>\n      <SignupForm />\n      <br />\n      <span>\n        I already have an account (<Link to=\"/login\">go to login</Link>).\n      </span>\n    </div>\n  )\n}\n\nexport default SignupPage\n"))),(0,s.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/client/SignupPage.tsx"',title:'"src/client/SignupPage.tsx"'},"import { Link } from 'react-router-dom'\nimport { SignupForm } from '@wasp/auth/forms/Signup'\n\nconst SignupPage = () => {\n  return (\n    <div style={{ maxWidth: '400px', margin: '0 auto' }}>\n      <SignupForm />\n      <br />\n      <span>\n        I already have an account (<Link to=\"/login\">go to login</Link>).\n      </span>\n    </div>\n  )\n}\n\nexport default SignupPage\n")))),(0,s.kt)(l.A,{mdxType:"ShowForTs"},(0,s.kt)("admonition",{title:"Type-safe links",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Since you are using Typescript, you can benefit from using Wasp's type-safe ",(0,s.kt)("inlineCode",{parentName:"p"},"Link")," component and the ",(0,s.kt)("inlineCode",{parentName:"p"},"routes")," object. Check out the ",(0,s.kt)("a",{parentName:"p",href:"../advanced/links"},"type-safe links docs")," for more details."))),(0,s.kt)("h2",{id:"update-the-main-page-to-require-auth"},"Update the Main Page to Require Auth"),(0,s.kt)("p",null,"We don't want users who are not logged in to access the main page, because they won't be able to create any tasks. So let's make the page private by requiring the user to be logged in:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'{4} title="main.wasp"',"{4}":!0,title:'"main.wasp"'},'// ...\n\npage MainPage {\n  authRequired: true,\n  component: import Main from "@client/MainPage"\n}\n')),(0,s.kt)("p",null,"Now that auth is required for this page, unauthenticated users will be redirected to ",(0,s.kt)("inlineCode",{parentName:"p"},"/login"),", as we specified with ",(0,s.kt)("inlineCode",{parentName:"p"},"app.auth.onAuthFailedRedirectTo"),"."),(0,s.kt)("p",null,"Additionally, when ",(0,s.kt)("inlineCode",{parentName:"p"},"authRequired")," is ",(0,s.kt)("inlineCode",{parentName:"p"},"true"),", the page's React component will be provided a ",(0,s.kt)("inlineCode",{parentName:"p"},"user")," object as prop."),(0,s.kt)(r.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'{1} title="src/client/MainPage.jsx"',"{1}":!0,title:'"src/client/MainPage.jsx"'},"const MainPage = ({ user }) => {\n  // Do something with the user\n}\n"))),(0,s.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'{3} title="src/client/MainPage.tsx"',"{3}":!0,title:'"src/client/MainPage.tsx"'},"import { User } from '@wasp/entities'\n\nconst MainPage = ({ user }: { user: User }) => {\n  // Do something with the user\n}\n")))),(0,s.kt)("p",null,"Ok, time to test this out. Navigate to the main page (",(0,s.kt)("inlineCode",{parentName:"p"},"/"),") of the app. You'll get redirected to ",(0,s.kt)("inlineCode",{parentName:"p"},"/login"),", where you'll be asked to authenticate."),(0,s.kt)("p",null,"Since we just added users, you don't have an account yet. Go to the signup page and create one. You'll be sent back to the main page where you will now be able to see the TODO list!"),(0,s.kt)("p",null,"Let's check out what the database looks like. Start the Prisma Studio:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"wasp db studio\n")),(0,s.kt)("img",{alt:"Database demonstration - password hashing",src:(0,o.Z)("img/wasp_db_hash_demonstration.gif"),style:{border:"1px solid black"}}),(0,s.kt)("p",null,"We see there is a user and that its password is already hashed \ud83e\udd2f"),(0,s.kt)("p",null,"However, you will notice that if you try logging in as different users and creating some tasks, all users share the same tasks. That's because we haven't yet updated the queries and actions to have per-user tasks. Let's do that next."),(0,s.kt)("h2",{id:"defining-a-user-task-relation"},"Defining a User-Task Relation"),(0,s.kt)("p",null,"First, let's define a one-to-many relation between users and tasks (check the ",(0,s.kt)("a",{parentName:"p",href:"https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-schema/relations"},"Prisma docs on relations"),"):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'{7,14-15} title="main.wasp"',"{7,14-15}":!0,title:'"main.wasp"'},"// ...\n\nentity User {=psl\n    id       Int     @id @default(autoincrement())\n    username String  @unique\n    password String\n    tasks    Task[]\npsl=}\n\nentity Task {=psl\n    id          Int     @id @default(autoincrement())\n    description String\n    isDone      Boolean @default(false)\n    user        User?    @relation(fields: [userId], references: [id])\n    userId      Int?\npsl=}\n\n// ...\n")),(0,s.kt)("p",null,"As always, we have to update the database:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"wasp db migrate-dev\n")),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"We made ",(0,s.kt)("inlineCode",{parentName:"p"},"user")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"userId")," in ",(0,s.kt)("inlineCode",{parentName:"p"},"Task")," optional (via ",(0,s.kt)("inlineCode",{parentName:"p"},"?"),") because that allows us to keep the existing tasks, which don't have a user assigned, in the database. This is not recommended because it allows an unwanted state in the database (what is the purpose of the task not belonging to anybody?) and normally we would not make these fields optional. Instead, we would do a data migration to take care of those tasks, even if it means just deleting them all. However, for this tutorial, for the sake of simplicity, we will stick with this.")),(0,s.kt)("h2",{id:"updating-operations-to-check-authentication"},"Updating Operations to Check Authentication"),(0,s.kt)("p",null,"Next, let's update the queries and actions to forbid access to non-authenticated users and to operate only on the currently logged-in user's tasks:"),(0,s.kt)(r.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'{1,4-6} title="src/server/queries.js"',"{1,4-6}":!0,title:'"src/server/queries.js"'},"import HttpError from '@wasp/core/HttpError.js'\n\nexport const getTasks = async (args, context) => {\n  if (!context.user) {\n    throw new HttpError(401)\n  }\n  return context.entities.Task.findMany({\n    where: { user: { id: context.user.id } },\n    orderBy: { id: 'asc' },\n  })\n}\n"))),(0,s.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'{3,6-8,10} title="src/server/queries.ts"',"{3,6-8,10}":!0,title:'"src/server/queries.ts"'},"import { Task } from '@wasp/entities'\nimport { GetTasks } from '@wasp/queries/types'\nimport HttpError from '@wasp/core/HttpError.js'\n\nexport const getTasks: GetTasks<void, Task[]> = async (args, context) => {\n  if (!context.user) {\n    throw new HttpError(401)\n  }\n  return context.entities.Task.findMany({\n    where: { user: { id: context.user.id } },\n    orderBy: { id: 'asc' },\n  })\n}\n")))),(0,s.kt)(r.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'{1,4-6,10,16-18} title="src/server/actions.js"',"{1,4-6,10,16-18}":!0,title:'"src/server/actions.js"'},"import HttpError from '@wasp/core/HttpError.js'\n\nexport const createTask = async (args, context) => {\n  if (!context.user) {\n    throw new HttpError(401)\n  }\n  return context.entities.Task.create({\n    data: {\n      description: args.description,\n      user: { connect: { id: context.user.id } },\n    },\n  })\n}\n\nexport const updateTask = async (args, context) => {\n  if (!context.user) {\n    throw new HttpError(401)\n  }\n  return context.entities.Task.updateMany({\n    where: { id: args.id, user: { id: context.user.id } },\n    data: { isDone: args.isDone },\n  })\n}\n"))),(0,s.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'{3,11-13,17,28-30,32} title="src/server/actions.ts"',"{3,11-13,17,28-30,32}":!0,title:'"src/server/actions.ts"'},"import { Task } from '@wasp/entities'\nimport { CreateTask, UpdateTask } from '@wasp/actions/types'\nimport HttpError from '@wasp/core/HttpError.js'\n\ntype CreateTaskPayload = Pick<Task, 'description'>\n\nexport const createTask: CreateTask<CreateTaskPayload, Task> = async (\n  args,\n  context\n) => {\n  if (!context.user) {\n    throw new HttpError(401)\n  }\n  return context.entities.Task.create({\n    data: {\n      description: args.description,\n      user: { connect: { id: context.user.id } },\n    },\n  })\n}\n\ntype UpdateTaskPayload = Pick<Task, 'id' | 'isDone'>\n\nexport const updateTask: UpdateTask<\n  UpdateTaskPayload,\n  { count: number }\n> = async ({ id, isDone }, context) => {\n  if (!context.user) {\n    throw new HttpError(401)\n  }\n  return context.entities.Task.updateMany({\n    where: { id, user: { id: context.user.id } },\n    data: { isDone },\n  })\n}\n")))),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Due to how Prisma works, we had to convert ",(0,s.kt)("inlineCode",{parentName:"p"},"update")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"updateMany")," in ",(0,s.kt)("inlineCode",{parentName:"p"},"updateTask")," action to be able to specify the user id in ",(0,s.kt)("inlineCode",{parentName:"p"},"where"),".")),(0,s.kt)("p",null,"With these changes, each user should have a list of tasks that only they can see and edit."),(0,s.kt)("p",null,"Try playing around, adding a few users and some tasks for each of them. Then open the DB studio:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"wasp db studio\n")),(0,s.kt)("img",{alt:"Database demonstration",src:(0,o.Z)("img/wasp_db_demonstration.gif"),style:{border:"1px solid black"}}),(0,s.kt)("p",null,"You will see that each user has their tasks, just as we specified in our code!"),(0,s.kt)("h2",{id:"logout-button"},"Logout Button"),(0,s.kt)("p",null,"Last, but not least, let's add the logout functionality:"),(0,s.kt)(r.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'{2,10} title="src/client/MainPage.jsx"',"{2,10}":!0,title:'"src/client/MainPage.jsx"'},"// ...\nimport logout from '@wasp/auth/logout'\n//...\n\nconst MainPage = () => {\n  // ...\n  return (\n    <div>\n      // ...\n      <button onClick={logout}>Logout</button>\n    </div>\n  )\n}\n"))),(0,s.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'{2,10} title="src/client/MainPage.tsx"',"{2,10}":!0,title:'"src/client/MainPage.tsx"'},"// ...\nimport logout from '@wasp/auth/logout'\n//...\n\nconst MainPage = () => {\n  // ...\n  return (\n    <div>\n      // ...\n      <button onClick={logout}>Logout</button>\n    </div>\n  )\n}\n")))),(0,s.kt)("p",null,"This is it, we have a working authentication system, and our Todo app is multi-user!"),(0,s.kt)("h2",{id:"whats-next"},"What's Next?"),(0,s.kt)("p",null,"We did it \ud83c\udf89 You've followed along with this tutorial to create a basic Todo app with Wasp."),(0,s.kt)(l.v,{mdxType:"ShowForJs"},(0,s.kt)("p",null,"You can find the complete code for the JS version of the tutorial ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/tree/release/examples/tutorials/TodoApp"},"here"),".")),(0,s.kt)(l.A,{mdxType:"ShowForTs"},(0,s.kt)("p",null,"You can find the complete code for the TS version of the tutorial ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/tree/release/examples/tutorials/TodoAppTs"},"here"),".")),(0,s.kt)("p",null,"You should be ready to learn about more complicated features and go more in-depth with the features already covered. Scroll through the sidebar on the left side of the page to see every feature Wasp has to offer. Or, let your imagination run wild and start building your app! \u2728"),(0,s.kt)("p",null,"Looking for inspiration?"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Get a jump start on your next project with ",(0,s.kt)("a",{parentName:"li",href:"../project/starter-templates"},"Starter Templates")),(0,s.kt)("li",{parentName:"ul"},"Make a real-time app with ",(0,s.kt)("a",{parentName:"li",href:"../advanced/web-sockets"},"Web Sockets"))),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"If you notice that some of the features you'd like to have are missing, or have any other kind of feedback, please write to us on ",(0,s.kt)("a",{parentName:"p",href:"https://discord.gg/rzdnErX"},"Discord")," or create an issue on ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp"},"Github"),", so we can learn which features to add/improve next \ud83d\ude4f"),(0,s.kt)("p",{parentName:"admonition"},"If you would like to contribute or help to build a feature, let us know! You can find more details on contributing ",(0,s.kt)("a",{parentName:"p",href:"/wasp-docs/docs/0.11.8/contributing"},"here"),".")),(0,s.kt)("p",null,"Oh, and do ",(0,s.kt)("a",{parentName:"p",href:"/#signup"},(0,s.kt)("strong",{parentName:"a"},"subscribe to our newsletter")),"! We usually send one per month, and Matija does his best to unleash his creativity to make them engaging and fun to read :D!"))}k.isMDXComponent=!0}}]);