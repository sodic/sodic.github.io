"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[7030],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=p(a),c=o,g=d["".concat(l,".").concat(c)]||d[c]||h[c]||s;return a?n.createElement(g,i(i({ref:t},u),{},{components:a})):n.createElement(g,i({ref:t},u))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,i=new Array(s);i[0]=c;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:o,i[1]=r;for(var p=2;p<s;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},38610:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),o=a(44996);const s=e=>n.createElement("div",null,n.createElement("p",{align:"center"},n.createElement("figure",null,n.createElement("img",{style:{width:e.width},alt:e.alt,src:(0,o.Z)(e.source)}),n.createElement("figcaption",{class:"image-caption",style:{fontStyle:"italic",opacity:.6,fontSize:"0.9rem"}},e.caption))))},54474:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=a(87462),o=(a(67294),a(3905)),s=(a(39960),a(38610));const i={title:"Building a full-stack app for learning Italian: Supabase vs. Wasp",authors:["miho"],image:"/img/building-a-full-stack-app-supabase-vs-wasp.jpg",tags:["Full-stack","Supabase","Wasp","WebDev"]},r=void 0,l={permalink:"/wasp-docs/blog/2023/03/08/building-a-full-stack-app-supabase-vs-wasp",editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/blog/2023-03-08-building-a-full-stack-app-supabase-vs-wasp.md",source:"@site/blog/2023-03-08-building-a-full-stack-app-supabase-vs-wasp.md",title:"Building a full-stack app for learning Italian: Supabase vs. Wasp",description:"<ImgWithCaption",date:"2023-03-08T00:00:00.000Z",formattedDate:"March 8, 2023",tags:[{label:"Full-stack",permalink:"/wasp-docs/blog/tags/full-stack"},{label:"Supabase",permalink:"/wasp-docs/blog/tags/supabase"},{label:"Wasp",permalink:"/wasp-docs/blog/tags/wasp"},{label:"WebDev",permalink:"/wasp-docs/blog/tags/web-dev"}],readingTime:13.135,hasTruncateMarker:!0,authors:[{name:"Mihovil Ilakovac",title:"Founding Engineer @ Wasp",url:"https://ilakovac.com",email:"miho@wasp-lang.dev",imageURL:"https://github.com/infomiho.png",key:"miho"}],frontMatter:{title:"Building a full-stack app for learning Italian: Supabase vs. Wasp",authors:["miho"],image:"/img/building-a-full-stack-app-supabase-vs-wasp.jpg",tags:["Full-stack","Supabase","Wasp","WebDev"]},prevItem:{title:"New React docs pretend SPAs don't exist anymore",permalink:"/wasp-docs/blog/2023/03/17/new-react-docs-pretend-spas-dont-exist"},nextItem:{title:'10 "Hard Truths" All Junior Developers Need to Hear',permalink:"/wasp-docs/blog/2023/03/03/ten-hard-truths-junior-developers-need-to-hear"}},p={authorsImageUrls:[void 0]},u=[{value:"Intro",id:"intro",level:2},{value:"What to expect",id:"what-to-expect",level:3},{value:"I wanted to learn Italian fast",id:"i-wanted-to-learn-italian-fast",level:3},{value:"The learning method",id:"the-learning-method",level:3},{value:"Building the Phrase Tutor app",id:"building-the-phrase-tutor-app",level:2},{value:"Initial Supabase version",id:"initial-supabase-version",level:3},{value:"Joining Wasp and dogfooding it",id:"joining-wasp-and-dogfooding-it",level:3},{value:"Let&#39;s compare some of the features",id:"lets-compare-some-of-the-features",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"It&#39;s all about the use case",id:"its-all-about-the-use-case",level:3}],d={toc:u},h="wrapper";function c(e){let{components:t,...a}=e;return(0,o.kt)(h,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("br",null),(0,o.kt)(s.Z,{alt:"wasp vs. supabase",source:"img/building-a-full-stack-app-supabase-vs-wasp.jpg",mdxType:"ImgWithCaption"}),(0,o.kt)("h2",{id:"intro"},"Intro"),(0,o.kt)("h3",{id:"what-to-expect"},"What to expect"),(0,o.kt)("p",null,"In this blog post, I will explain how I created the ",(0,o.kt)("a",{parentName:"p",href:"https://phrasetutor.com/"},"Phrase Tutor")," app for learning Italian phrases using two different technologies. I will share some code snippets to show what was required to build the app with both Wasp and Supabase."),(0,o.kt)(s.Z,{alt:"Phrase Tutor\u2019s front-end",source:"img/building-a-full-stack-app-supabase-vs-wasp/phrase_tutor.gif",caption:"Phrase Tutor\u2019s front-end",mdxType:"ImgWithCaption"}),(0,o.kt)("p",null,"As a senior full-stack developer with experience in building many side-projects, I prefer a quick development cycle. I enjoy turning ideas into POCs in just a few days or even hours."),(0,o.kt)("p",null,"We will examine how each technology can help when building a full-stack app and where Wasp and Supabase excel."),(0,o.kt)("h3",{id:"i-wanted-to-learn-italian-fast"},"I wanted to learn Italian fast"),(0,o.kt)("p",null,"Whenever I travel abroad, I enjoy imagining what it would be like to live in that place. For instance, I usually don't like taking crowded public transportation, but for some reason, it brings me joy when I do it in a foreign country. It's all about the feeling that I'm living there. One of the most important things for me to fully experience the culture is to learn the language or, at the very least, be able to not speak English all the time."),(0,o.kt)(s.Z,{alt:"Pretending to be Italian",source:"img/building-a-full-stack-app-supabase-vs-wasp/italian.gif",caption:"Pretending to be Italian",mdxType:"ImgWithCaption"}),(0,o.kt)("p",null,"My girlfriend and I were planning a trip to Italy, and I wanted to learn some Italian. I thought about what would be the easiest way to learn as much as possible with the least amount of effort. I decided that learning the top 100 Italian phrases would be a good start. I had a week to do it, and learning 100 phrases seemed doable if I practiced every day."),(0,o.kt)("h3",{id:"the-learning-method"},"The learning method"),(0,o.kt)("p",null,'In high school, I had a system for learning historical facts and dates quickly called "focusing on things you don\u2019t know".'),(0,o.kt)("p",null,"Here's how it works:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Gather a pool of facts you want to learn (e.g. "When did WWI start?" - "1914").'),(0,o.kt)("li",{parentName:"ol"},"Ask yourself each question in the pool."),(0,o.kt)("li",{parentName:"ol"},"If you know the answer, remove the fact from the pool."),(0,o.kt)("li",{parentName:"ol"},"If you don't know the answer, keep it in the pool."),(0,o.kt)("li",{parentName:"ol"},"Repeat with the smaller pool until there are no more facts left.")),(0,o.kt)("p",null,"I made a small app for this and shared it with my classmates, but it didn't go further than that."),(0,o.kt)("p",null,"Now, I want to use the same method to learn Italian phrases for my trip. So, as a better developer now, I'll make a proper app and host it somewhere \ud83d\ude42"),(0,o.kt)("h2",{id:"building-the-phrase-tutor-app"},"Building the Phrase Tutor app"),(0,o.kt)("p",null,'We will create an app that follows the method described above. The app will show you a phrase and you can tell it if you know the translation or not by selecting "I knew it" or "I didn\'t know it".'),(0,o.kt)(s.Z,{alt:"How the learning in the app should work",source:"img/building-a-full-stack-app-supabase-vs-wasp/phrases.png",caption:"How the learning in the app should work",mdxType:"ImgWithCaption"}),(0,o.kt)("p",null,"The app will keep track of your answers and suggest which phrases you should learn next \ud83d\udd75\ufe0f"),(0,o.kt)("p",null,"I\u2019ve built the app twice: first with Supabase and then with Wasp. Supabase is a well-rounded open-source Backend as a Service (BaaS) product that adds superpowers to your front-end apps. On the other hand, Wasp is an open-source framework for building full-stack apps that helps to keep the boilerplate low. Let\u2019s see how they compare."),(0,o.kt)("h3",{id:"initial-supabase-version"},"Initial Supabase version"),(0,o.kt)("p",null,'When I made the initial version, I worked heavily with Vue.js, which I used to create the first version of the Phrase Tutor app. I started by collecting some phrases. I searched on Google for "best Italian phrases to learn" and came across an article titled "100 Italian phrases to learn." (After extracting the phrases from the HTML, I found out that there were only 96 phrases, but that was still good enough for me.)'),(0,o.kt)("p",null,"The initial app contained the phrases in a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/infomiho/phrase-tutor-supabase/blob/master/src/phrases/italian.json"},"JSON file")," that the frontend loaded. It was completely static, but it worked."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "group": "general",\n    "translations": {\n        "en": "Yes",\n        "it": "Si"\n    }\n}\n')),(0,o.kt)("p",null,"I put it on Cloudflare Pages and it went live."),(0,o.kt)("p",null,"I showed it to my girlfriend, but she didn't like some of the phrases I used. If only I had a backend with a database to edit the phrases. Then I had an idea: let's add a database with ",(0,o.kt)("a",{parentName:"p",href:"https://supabase.com/"},"Supabase"),"."),(0,o.kt)("p",null,"Supabase is a managed backend solution that provides a lot of free stuff: a PostgreSQL database and social authentication among other things."),(0,o.kt)(s.Z,{alt:"Phrase Tutor built with Supabase",source:"img/building-a-full-stack-app-supabase-vs-wasp/supabase.png",caption:"Phrase Tutor built with Supabase",mdxType:"ImgWithCaption"}),(0,o.kt)("p",null,"I set up the database tables using the Supabase UI which was pretty straightforward."),(0,o.kt)("p",null,"The table I needed only had a few fields:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE phrases (\n    id bigint  NOT NULL,\n    group character varying  NULL,\n    translations_en text  NOT NULL,\n    translations_it text  NOT NULL\n);\n")),(0,o.kt)("p",null,"Then I had to seed the database with some SQL. Executing SQL statements is easy with the use of Supabase\u2019s UI. You just log in, open the SQL editor and paste in the code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO phrases(id,\"group\",translations_en,translations_it) VALUES (1,'general','Yes','Si');\nINSERT INTO phrases(id,\"group\",translations_en,translations_it) VALUES (2,'general','No','No');\n...\n")),(0,o.kt)("p",null,"Integrating Supabase into my existing front-end app was simple using their ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/infomiho/phrase-tutor-supabase/blob/master/src/services/supabase.ts#L4"},"Javascript SDK"),". If you're familiar with Firebase, it should feel similar. Essentially, you build your SQL queries on the frontend and use the resulting data in your app."),(0,o.kt)("p",null,"Using the SDK felt pretty straightforward and I could get what I wanted out of the database without much hassle."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'const { data, error } = await supabase.from("phrases").select("*");\n')),(0,o.kt)("p",null,"And just like that, my static Vue.js app had a database to rely on \ud83c\udf89"),(0,o.kt)("p",null,"Adding the login with Google was a matter of enabling it in Supabase UI and setting up the Client ID and Client Secret variables. In order to trigger the login process with Google, I ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/infomiho/phrase-tutor-supabase/blob/master/src/stores/user.ts#L9"},"once again")," relied on their Javascript SDK."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'supabase.auth.signInWithOAuth({ provider: "google" });\n')),(0,o.kt)("p",null,"Awesome! I'm glad that I can now edit the phrases and that there is a login feature that I plan to use later."),(0,o.kt)("p",null,"In the future, I have plans to add more languages to the app and also allow registered users to contribute new phrases and translations. I believe this will make the app more useful and engaging for language learners."),(0,o.kt)("p",null,"And just like that, my app went from a pure static app to an app with a database and Google login \ud83e\udd2f"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Check out the deployed app written with Vue.js and Supabase: ",(0,o.kt)("a",{parentName:"p",href:"https://phrase-tutor.pages.dev/"},"https://phrase-tutor.pages.dev"))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"View the source ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/infomiho/phrase-tutor-supabase"},"here"))),(0,o.kt)("h3",{id:"joining-wasp-and-dogfooding-it"},"Joining Wasp and dogfooding it"),(0,o.kt)("p",null,"Some background before the second part: I started working at Wasp earlier this year. I'm really happy to work on a technology that solves a problem I care about: when I do side-projects, I dislike writing the same dull parts every time from scratch. I copy and paste from my previous side projects, but eventually, the code snippets become old and outdated."),(0,o.kt)("p",null,"Naturally, I wanted to test out Wasp by rewriting one of my side projects. I decided to see how Wasp could work with the Phrase Tutor project."),(0,o.kt)("p",null,"Wasp works by having an easy-to-understand config file called ",(0,o.kt)("inlineCode",{parentName:"p"},"main.wasp")," which coordinates your pieces of client and server functionalities. Its main purpose is to keep you productive and focused on writing interesting bits. It feels pretty much like using a web framework that covers your whole app."),(0,o.kt)(s.Z,{alt:"Phrase Tutor built with Wasp",source:"img/building-a-full-stack-app-supabase-vs-wasp/wasp.png",caption:"Phrase Tutor built with Wasp",mdxType:"ImgWithCaption"}),(0,o.kt)("p",null,"Let's begin by creating the data models. Wasp uses Prisma under the hood to communicate with your database, which makes it easy to manage your database without worrying about the details. This is just one of the many choices the framework made for me, and I appreciate the feeling of using a setup that works."),(0,o.kt)("p",null,"I had to first declare all of the entities I needed with Prisma PSL in the Wasp config file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-wasp"},"entity Phrase {=psl\n  id Int @id @default(autoincrement())\n  group String\n  phrase String\n  translations Translation[]\npsl=}\n\nentity Language {=psl\n  id Int @id @default(autoincrement())\n  name String @unique\n  emoji String\n  translations Translation[]\npsl=}\n\nentity Translation {=psl\n  id Int @id @default(autoincrement())\n  phraseId Int\n  languageId Int\n  translation String\n  phrase Phrase @relation(fields: [phraseId], references: [id], onDelete: Cascade)\n  language Language @relation(fields: [languageId], references: [id], onDelete: Cascade)\npsl=}\n\n")),(0,o.kt)("p",null,"I'm using a PostgreSQL database again, and you can see that the field definitions are similar."),(0,o.kt)("p",null,"I improved the data schema a bit by defining three tables instead of one. I separated the concept of a ",(0,o.kt)("inlineCode",{parentName:"p"},"Phrase")," from the concepts of ",(0,o.kt)("inlineCode",{parentName:"p"},"Language")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Translation"),". This will make it easier to add new languages in the future."),(0,o.kt)("p",null,"I added some phrases to the database using Prisma and a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/infomiho/phrase-tutor-wasp/blob/master/src/server/actions.js#L1"},"Wasp action"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'export async function seedItalianPhrases(args, context) {\n    const data = [\n       {\n            id: 1,\n            group: "general",\n            translations_en: "Yes",\n            translations_it: "Si"\n        },\n        ...\n    ]\n    for (const phrase of seedPhrases) {\n        await context.entities.Phrase.create({\n            ...\n        });\n    }\n}\n')),(0,o.kt)("p",null,"Let\u2019s now look at what I needed to do to get the data flowing from the backend to my React app."),(0,o.kt)("p",null,"First, I declared a query in my Wasp config file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-wasp"},'app phraseTutor {\n  ...\n}\n...\n\nquery fetchAllPhrases {\n  fn: import { getAllPhrases } from "@server/queries.js",\n  entities: [Phrase]\n}\n')),(0,o.kt)("p",null,"Then I wrote the code for my backend to fetch the phrases. You\u2019ll notice it\u2019s quite similar to the code I wrote for fetching phrases with the Supabase SDK, but I had to include the ",(0,o.kt)("inlineCode",{parentName:"p"},"translations")," relation since we now have multiple tables."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// My query got the Prisma entity through the context parameter\n// which I just used to fetch all the phrases\nexport async function getAllPhrases(args, context) {\n    return context.entities.Phrase.findMany({\n        include: {\n            translations: true\n        }\n    });\n}\n")),(0,o.kt)("p",null,"And lastly, I could just import the query into my React app. It\u2019s set up in a way that it handles cache invalidation automatically, one less thing to worry about, which is awesome \ud83d\ude0e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// Wasp relies on React Query in the background\nconst { data: phrases, isLoading } = useQuery(fetchAllPhrases);\n")),(0,o.kt)("p",null,"Let\u2019s also add support for Google auth for our app. It involves declaring you want it in the Wasp file, adding some env variables and using it in the React application."),(0,o.kt)("p",null,"We declare it to the Wasp file by adding the ",(0,o.kt)("inlineCode",{parentName:"p"},"google")," key under ",(0,o.kt)("inlineCode",{parentName:"p"},"auth"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-wasp"},'app phraseTutor {\n  ...\n  auth: {\n    userEntity: User,\n    externalAuthEntity: SocialUser,\n    methods: {\n      // Define we want the Google auth\n      google: {\n        // Optionally, we can adjust what is saved from the user\'s data\n        getUserFieldsFn: import { getUserFields } from "@server/auth/google.js"\n      }\n    },\n    onAuthFailedRedirectTo: "/"\n  },\n  ...\n}\n\n// Some of the entities needed for auth\nentity User {=psl\n  id Int @id @default(autoincrement())\n  username String @unique\n  password String\n  profilePicture String\n  externalAuthAssociations SocialUser[]\n  createdAt DateTime @default(now())\npsl=}\n\nentity SocialUser {=psl\n  id          Int       @id @default(autoincrement())\n  provider    String\n  providerId  String\n  user        User      @relation(fields: [userId], references: [id], onDelete: Cascade)\n  userId      Int\n  createdAt   DateTime  @default(now())\n  @@unique([provider, providerId, userId])\npsl=}\n')),(0,o.kt)("p",null,"And \u2026 that\u2019s it. We can now use the Google auth in our frontend \ud83c\udf89"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { signInUrl as googleSignInUrl } from "@wasp/auth/helpers/Google";\n...\nconst { data: user } = useAuth();\n')),(0,o.kt)("p",null,"Writing a full-stack React and Express.js with Wasp felt like a guided experience; I didn't have to focus too hard on the dev tooling, building, or deploying."),(0,o.kt)("p",null,"Instead, I could focus on the logic needed for Phrase Tutor to work and just run ",(0,o.kt)("inlineCode",{parentName:"p"},"wasp start")," most of the time. I did need to write some extra code to get everything running, but I'm free to customize this code however I want."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Check out the deployed project built with Wasp: ",(0,o.kt)("a",{parentName:"p",href:"https://phrasetutor.com/"},"https://phrasetutor.com"))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"View the source ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/infomiho/phrase-tutor-wasp"},"here"))),(0,o.kt)("h3",{id:"lets-compare-some-of-the-features"},"Let's compare some of the features"),(0,o.kt)("p",null,"I want to compare the features of Supabase and Wasp. It's good to think about different ways to do things and their pros and cons."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Feature"),(0,o.kt)("th",{parentName:"tr",align:null},"Supabase"),(0,o.kt)("th",{parentName:"tr",align:null},"Wasp"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Getting data from the API"),(0,o.kt)("td",{parentName:"tr",align:null},"Use the Supabase JS SDK to query database tables"),(0,o.kt)("td",{parentName:"tr",align:null},"Declare query in Wasp config and use Prisma JS SDK to implement it")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Custom business logic"),(0,o.kt)("td",{parentName:"tr",align:null},"Writing custom PostgreSQL procedures or by writing edge functions"),(0,o.kt)("td",{parentName:"tr",align:null},"Declare actions in the Wasp file and write server-side JS")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Defining the database schema"),(0,o.kt)("td",{parentName:"tr",align:null},"Visual editor or by CREATE TABLE query"),(0,o.kt)("td",{parentName:"tr",align:null},"By code - edit Prisma schema and commit changes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Auth"),(0,o.kt)("td",{parentName:"tr",align:null},"Enable in UI"),(0,o.kt)("td",{parentName:"tr",align:null},"Enable it in the Wasp file")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Deployment"),(0,o.kt)("td",{parentName:"tr",align:null},"Supabase managed instance or self-host it"),(0,o.kt)("td",{parentName:"tr",align:null},"Deploy anywhere, support for ",(0,o.kt)("a",{parentName:"td",href:"https://fly.io"},"https://fly.io")," one line deployment")))),(0,o.kt)("p",null,"With Supabase, I liked how familiar the SDK felt and their UI made it easy to configure parts of my backend. I didn\u2019t need to think about deploying Supabase since I used their hosted version, but it did get paused after 1 week of inactivity on the free tier."),(0,o.kt)("p",null,"On the other hand, Wasp felt like the glue for my React + Express.js + Prisma app and I needed to write more code to get things done. It felt more explicit because I wrote code closer to what I would normally write. I deployed it to ",(0,o.kt)("a",{parentName:"p",href:"https://fly.io"},"fly.io")," with the Wasp command ",(0,o.kt)("inlineCode",{parentName:"p"},"wasp deploy fly launch")," and it\u2019s now live on ",(0,o.kt)("a",{parentName:"p",href:"https://phrasetutor.com/"},"https://phrasetutor.com")),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("h3",{id:"its-all-about-the-use-case"},"It's all about the use case"),(0,o.kt)("p",null,"Choosing the right solution for your needs can be difficult. That's why it's important to try out different options and see how they work for you. In this case, I compared two options: Supabase and Wasp."),(0,o.kt)("p",null,"Supabase is a great choice if you want a well-rounded open-source BaaS product that adds superpowers to your front-end apps. It provides a lot of free stuff, such as a PostgreSQL database and social authentication, which can make development easier and faster. It also has a nice SDK and UI that the end user can use to easily define their app's configuration."),(0,o.kt)("p",null,"Wasp is an open-source framework for building full-stack apps that helps out with keeping the boilerplate low. It is a bit more explicit about some things, such as defining your auth entities, but that can be a plus when you have more advanced use cases. By using Wasp as the glue for your full-stack application, you can have the best of both worlds: a development and production setup that works out of the box while still allowing you to develop your app any way you like."),(0,o.kt)("p",null,"In the case of Phrase Tutor, I liked working with both Supabase and Wasp. I did, however, get a different feeling from working with the two technologies. With Supabase I felt like my front-end app got instant superpowers and it now has a database and login, which was nice considering the effort I had to put in. But now I had a black-box dependency that I needed to build around."),(0,o.kt)("p",null,"When I used Wasp to rebuild Phrase Tutor, it felt different because it was a full-stack app. I had more control over the application code, so I could change it and evolve it as I wanted. I felt like I had built an app that could grow in any direction. Although I had to write more code, it felt like a good trade-off for future needs."),(0,o.kt)("p",null,"To decide which option is best for you, I would suggest trying both and seeing how you feel. It is easy to set up both tools and see if they make sense for you."),(0,o.kt)(s.Z,{alt:"Grazie for reading \ud83d\ude43",source:"img/building-a-full-stack-app-supabase-vs-wasp/thank_you.png",caption:"Grazie for reading \ud83d\ude43",mdxType:"ImgWithCaption"}),(0,o.kt)("p",null,"If you try out the Phrase Tutor app, please let me know what you think. You can reach me on Twitter. I'm always looking for ways to make it better."))}c.isMDXComponent=!0}}]);