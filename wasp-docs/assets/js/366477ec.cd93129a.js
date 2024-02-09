"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[2015],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),h=o,g=d["".concat(l,".").concat(h)]||d[h]||c[h]||i;return a?n.createElement(g,r(r({ref:t},u),{},{components:a})):n.createElement(g,r({ref:t},u))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},16551:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=a(87462),o=(a(67294),a(3905)),i=a(44996);const r={title:"Wasp - language for developing full-stack Javascript web apps with no boilerplate",authors:["martinsos"],tags:["wasp"]},s=void 0,l={permalink:"/blog/2021/03/02/wasp-alpha",editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/blog/2021-03-02-wasp-alpha.md",source:"@site/blog/2021-03-02-wasp-alpha.md",title:"Wasp - language for developing full-stack Javascript web apps with no boilerplate",description:"\x3c!---",date:"2021-03-02T00:00:00.000Z",formattedDate:"March 2, 2021",tags:[{label:"wasp",permalink:"/blog/tags/wasp"}],readingTime:6.79,hasTruncateMarker:!0,authors:[{name:"Martin Sosic",title:"Co-founder & CTO @ Wasp",url:"https://github.com/martinsos",email:"martin@wasp-lang.dev",imageURL:"https://github.com/martinsos.png",key:"martinsos"}],frontMatter:{title:"Wasp - language for developing full-stack Javascript web apps with no boilerplate",authors:["martinsos"],tags:["wasp"]},prevItem:{title:"How to implement a Discord bot (in NodeJS) that requires new members to introduce themselves",permalink:"/blog/2021/04/29/discord-bot-introduction"},nextItem:{title:"Journey to YCombinator",permalink:"/blog/2021/02/23/journey-to-ycombinator"}},p={authorsImageUrls:[void 0]},u=[{value:"Why Wasp?",id:"why-wasp",level:2},{value:"Why a language (DSL), aren\u2019t frameworks solving this already?",id:"why-a-language-dsl-arent-frameworks-solving-this-already",level:2},{value:"How does it work?",id:"how-does-it-work",level:2},{value:"Where is Wasp now and where is it going?",id:"where-is-wasp-now-and-where-is-it-going",level:2},{value:"What Wasp currently supports:",id:"what-wasp-currently-supports",level:3},{value:"What is coming:",id:"what-is-coming",level:3}],d={toc:u},c="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{alt:"Wasp logo",src:(0,i.Z)("img/wasp-logo-wide.png"),height:"150px"})),(0,o.kt)("p",null,"For the last year and a half, my twin brother and I have been working on ",(0,o.kt)("a",{parentName:"p",href:"https://wasp-lang.dev"},"Wasp"),": a new programming language for developing full-stack web apps with less code."),(0,o.kt)("p",null,"Wasp is a ",(0,o.kt)("strong",{parentName:"p"},"simple declarative language")," that makes developing web apps easy while still allowing you to use the latest technologies like ",(0,o.kt)("strong",{parentName:"p"},"React, Node.js, and Prisma"),"."),(0,o.kt)("p",null,"In this post, I will share with you why we believe Wasp could be a big thing for web development, how it works, where we are right now and what is the plan for the future!"),(0,o.kt)("h2",{id:"why-wasp"},"Why Wasp?"),(0,o.kt)("p",null,"You know how to use React, know your way around HTML/CSS/\u2026, know how to write business logic on the backend (e.g. in Node), but when you want to build an actual web app and deploy it for others to use, you drown in all the details and extra work - responsive UI, proper error handling, security, building, deployment, authentication, managing server state on the client, managing database, different environments, ...."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{alt:"Iceberg of web app development",src:(0,i.Z)("img/iceberg-of-web-app-dev.png"),width:"500px"})),(0,o.kt)("p",null,"Jose Aguinaga described in a fun way the unexpected complexity of web app development in his blog post ",(0,o.kt)("a",{parentName:"p",href:"https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f"},'"How it feels to learn JavaScript in 2016"'),", which still feels relevant 4 years later. "),(0,o.kt)("p",null,"We are building Wasp because even though we are both experienced developers and have worked on multiple complex web apps in various technologies (JQuery -> Backbone -> Angular -> React, own scripts / makefile -> Grunt -> Gulp -> Webpack, PHP -> Java -> Node.js, \u2026), we still feel ",(0,o.kt)("strong",{parentName:"p"},"building web apps is harder than it should be"),", due to a lot of boilerplate and repetitive work involved in the process.  "),(0,o.kt)("p",null,"The main insight for us was that while the tech stack keeps advancing rapidly, the core requirements of the apps are mostly remaining the same (auth, routing, data model CRUD, ACL, \u2026)."),(0,o.kt)("p",null,"That is why almost 2 years ago we started thinking about ",(0,o.kt)("strong",{parentName:"p"},"separating web app specification")," (what it should do) ",(0,o.kt)("strong",{parentName:"p"},"from its implementation")," (how it should do it).",(0,o.kt)("br",{parentName:"p"}),"\n","This led us to the idea of extracting common web app features and concepts into a special specification language (Wasp), while the implementation details are still described via a modern stack (right now React, Node.js, Prisma)."),(0,o.kt)("p",null,"Our vision with Wasp is to create ",(0,o.kt)("strong",{parentName:"p"},"a powerful but simple language where you can describe your web app as humanly as possible"),".\nWe want to make the top of that iceberg on the image above as pleasant as possible while making the bottom part much smaller.",(0,o.kt)("br",{parentName:"p"}),"\n","In such language, with just a few words, you can specify pages and their routes, specify which type of authentication you want, define basic entities / data models, describe basic data flow, choose where you want to deploy, implement specific details in React/Node, and let Wasp take care of connecting it all, building it and deploying it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Example of wasp code describing part of a simple full-stack web app."',title:'"Example',of:!0,wasp:!0,code:!0,describing:!0,part:!0,a:!0,simple:!0,"full-stack":!0,web:!0,'app."':!0},'app todoApp {\n  title: "ToDo App" /* visible in tab */\n}\n\nroute "/" -> page Main\npage Main {\n  component: import Main from "@ext/Main.js"  /* Import your React code. */\n}\n\nauth { /* full-stack auth out-of-the-box */\n  userEntity: User,\n  methods: {\n    usernameAndPassword: {}\n  }\n}\n\nentity User {=psl\n  id          Int     @id @default(autoincrement())\n  username    String  @unique\n  password    String\npsl=}\n')),(0,o.kt)("p",null,"Check ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/blob/release/examples/tutorials/TodoApp/main.wasp"},"here")," for the complete example."),(0,o.kt)("h2",{id:"why-a-language-dsl-arent-frameworks-solving-this-already"},"Why a language (DSL), aren\u2019t frameworks solving this already?"),(0,o.kt)("p",null,"Frameworks (like e.g. Ruby on Rails or Meteor) are a big inspiration to us.\nHowever, we want to take things one step further - by designing a language specialized for the domain of web apps (a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Domain-specific_language"},"DSL"),") we can get rid of a lot of boilerplate and provide a cleaner & simpler developer experience."),(0,o.kt)("p",null,"On the other hand, we are not trying to replace everything with Wasp nor think that would make sense - just the opposite, Wasp acts as a \u201cglue\u201d between your React and Node.js code, saving you from the grunt work while allowing you to keep the flexibility of writing your own code.\n",(0,o.kt)("strong",{parentName:"p"},"The majority of the code is still being written in React and Node.js, with Wasp serving as the backbone of your whole application.")),(0,o.kt)("p",null,"Another benefit of a DSL is that it allows Wasp to ",(0,o.kt)("strong",{parentName:"p"},"understand the web app\u2019s requirements during the build time and reason about it")," before generating the final code, and this is what we are especially excited about."),(0,o.kt)("p",null,"For example, when generating code to be deployed to production, it could pick the most appropriate architecture based on its understanding of the web app and deploy it to serverless or another type of architecture (or even a combination).\nAnother example would be reusing your data model logic through all the parts of the stack while defining it just once in Wasp."),(0,o.kt)("p",null,"DSL opens the potential for optimizations, static analysis, extensibility, and unparalleled ergonomics."),(0,o.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,o.kt)("p",null,"Wasp compiler compiles the .wasp/React/Node.js source code into just React/Node.js target code.",(0,o.kt)("br",{parentName:"p"}),"\n","Currently, Wasp supports only Javascript, but we plan to add Typescript soon.",(0,o.kt)("br",{parentName:"p"}),"\n","Technical note: Wasp compiler is implemented in Haskell."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Wasp compilation diagram",src:a(44470).Z,width:"1525",height:"696"})),(0,o.kt)("p",null,"While right now only React and Node.js are supported, we plan to support multiple other technologies in the future."),(0,o.kt)("p",null,"Generated code is human readable and can easily be inspected and even ejected if Wasp becomes too limiting.\nIf not ejecting, there is no need for you to ever look at the generated code - it is generated by Wasp in the background."),(0,o.kt)("p",null,"Wasp is used via ",(0,o.kt)("inlineCode",{parentName:"p"},"wasp")," CLI - to run wasp project in development, all you need to do is run ",(0,o.kt)("inlineCode",{parentName:"p"},"wasp start"),"."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{alt:"Wasp CLI output",src:(0,i.Z)("img/wasp-cli-output.png")})),(0,o.kt)("h2",{id:"where-is-wasp-now-and-where-is-it-going"},"Where is Wasp now and where is it going?"),(0,o.kt)("p",null,"Our big vision is to move as much of the web app domain knowledge as possible into the Wasp language itself, giving Wasp more power and flexibility."),(0,o.kt)("p",null,"Ultimately, since Wasp would have such a deep understanding of the web app's requirements, we could generate a visual editor on top of it - allowing non-developers to participate in development alongside developers."),(0,o.kt)("p",null,"Also, Wasp wouldn't be tied to the specific technology but rather support multiple technologies (React/Angular/..., Node/Go/...**."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Wasp is currently in Alpha")," and some features are still rough or missing, there are things we haven\u2019t solved yet and others that will probably change as we progress, but ",(0,o.kt)("strong",{parentName:"p"},"you can try it out and build and deploy web apps"),"!"),(0,o.kt)("h3",{id:"what-wasp-currently-supports"},"What Wasp currently supports:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u2705 full-stack auth (username & password)"),(0,o.kt)("li",{parentName:"ul"},"\u2705 pages & routing"),(0,o.kt)("li",{parentName:"ul"},"\u2705 blurs the line between client & server - define your server actions and queries and call them directly in your client code (RPC)!"),(0,o.kt)("li",{parentName:"ul"},"\u2705 smart caching of server actions and queries (automatic cache invalidation)"),(0,o.kt)("li",{parentName:"ul"},"\u2705 entity (data model) definition with Prisma.io"),(0,o.kt)("li",{parentName:"ul"},"\u2705 ACL on frontend"),(0,o.kt)("li",{parentName:"ul"},"\u2705 importing NPM dependencies ")),(0,o.kt)("h3",{id:"what-is-coming"},"What is coming:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u23f3 ACL on backend"),(0,o.kt)("li",{parentName:"ul"},"\u23f3 one-click deployment"),(0,o.kt)("li",{parentName:"ul"},"\u23f3 more auth methods (Google, Linkedin, ...**"),(0,o.kt)("li",{parentName:"ul"},"\u23f3 tighter integration of entities with other features"),(0,o.kt)("li",{parentName:"ul"},"\u23f3 themes and layouts"),(0,o.kt)("li",{parentName:"ul"},"\u23f3 support for explicitly defined server API"),(0,o.kt)("li",{parentName:"ul"},"\u23f3 inline JS - the ability to mix JS code with Wasp code!"),(0,o.kt)("li",{parentName:"ul"},"\u23f3 Typescript support"),(0,o.kt)("li",{parentName:"ul"},"\u23f3 server-side rendering"),(0,o.kt)("li",{parentName:"ul"},"\u23f3 Visual Editor"),(0,o.kt)("li",{parentName:"ul"},"\u23f3 support for different languages on the backend"),(0,o.kt)("li",{parentName:"ul"},"\u23f3 richer wasp language with better tooling ")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"You can check out our repo")," at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp"},"https://github.com/wasp-lang/wasp")," and ",(0,o.kt)("strong",{parentName:"p"},"give it a try")," at ",(0,o.kt)("a",{parentName:"p",href:"https://wasp-lang.dev/docs"},"https://wasp-lang.dev/docs")," -> we are always looking for feedback and suggestions on how to shape Wasp!"),(0,o.kt)("p",null,"We also have a ",(0,o.kt)("strong",{parentName:"p"},"community")," on ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/rzdnErX"},"Discord"),", where we chat about Wasp-related stuff - join us to see what we are up to, share your opinions or get help with your Wasp project."))}h.isMDXComponent=!0},44470:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/wasp-compilation-6585aca9de412cf27332aa8f21e7da4d.png"}}]);