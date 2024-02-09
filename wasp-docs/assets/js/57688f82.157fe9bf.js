"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[6476],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||r;return a?o.createElement(m,s(s({ref:t},c),{},{components:a})):o.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<r;p++)s[p]=a[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},38610:(e,t,a)=>{a.d(t,{Z:()=>r});var o=a(67294),n=a(44996);const r=e=>o.createElement("div",null,o.createElement("p",{align:"center"},o.createElement("figure",null,o.createElement("img",{style:{width:e.width},alt:e.alt,src:(0,n.Z)(e.source)}),o.createElement("figcaption",{class:"image-caption",style:{fontStyle:"italic",opacity:.6,fontSize:"0.9rem"}},e.caption))))},80472:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=a(87462),n=(a(67294),a(3905));a(39960),a(44996),a(38610);const r={title:"Using Product Requirement Documents to Generate Better Web Apps with AI",authors:["vinny"],image:"/img/prd/outsmarting-ai-1600.gif",tags:["ai","prd","product requirement","react","full-stack","generate","hack"]},s="TL;DR",i={permalink:"/wasp-docs/blog/2023/08/23/using-product-requirement-documents-generate-better-web-apps-with-ai",editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/blog/2023-08-23-using-product-requirement-documents-generate-better-web-apps-with-ai.md",source:"@site/blog/2023-08-23-using-product-requirement-documents-generate-better-web-apps-with-ai.md",title:"Using Product Requirement Documents to Generate Better Web Apps with AI",description:"I\u2019m an indiehacker that likes creating lots of fun side-projects, like my SaaS app CoverLetterGPT with ~4,000 users. That\u2019s why I've been on the lookout for AI-assisted coding tools to help me kickstart new full-stack web apps as quickly as possible.",date:"2023-08-23T00:00:00.000Z",formattedDate:"August 23, 2023",tags:[{label:"ai",permalink:"/wasp-docs/blog/tags/ai"},{label:"prd",permalink:"/wasp-docs/blog/tags/prd"},{label:"product requirement",permalink:"/wasp-docs/blog/tags/product-requirement"},{label:"react",permalink:"/wasp-docs/blog/tags/react"},{label:"full-stack",permalink:"/wasp-docs/blog/tags/full-stack"},{label:"generate",permalink:"/wasp-docs/blog/tags/generate"},{label:"hack",permalink:"/wasp-docs/blog/tags/hack"}],readingTime:8.07,hasTruncateMarker:!1,authors:[{name:"Vinny",title:"DevRel @ Wasp",url:"https://vincanger.github.io",email:"vince@wasp-lang.dev",imageURL:"https://vincanger.github.io/assets/vince_smiley.jpg",key:"vinny"}],frontMatter:{title:"Using Product Requirement Documents to Generate Better Web Apps with AI",authors:["vinny"],image:"/img/prd/outsmarting-ai-1600.gif",tags:["ai","prd","product requirement","react","full-stack","generate","hack"]},prevItem:{title:"Build your own AI Meme Generator & learn how to use OpenAI's function calls",permalink:"/wasp-docs/blog/2023/09/17/ai-meme-generator-how-to-use-openai-function-call"},nextItem:{title:"Build a real-time voting app with WebSockets, React & TypeScript \ud83d\udd0c\u26a1\ufe0f",permalink:"/wasp-docs/blog/2023/08/09/build-real-time-voting-app-websockets-react-typescript"}},l={authorsImageUrls:[void 0]},p=[],c={toc:p},u="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"I\u2019m an indiehacker that likes creating lots of fun side-projects, like my SaaS app ",(0,n.kt)("a",{parentName:"p",href:"https://CoverLetterGPT.xyz"},"CoverLetterGPT")," with ~4,000 users. That\u2019s why I've been on the lookout for AI-assisted coding tools to help me kickstart new full-stack web apps as quickly as possible."),(0,n.kt)("p",null,"I tried out a bunch, but found that most of them produced codebases that were too simple to work with, or getting a good result was just about as time consuming as coding it myself."),(0,n.kt)("p",null,"But through the process of trying out different tools and methods, I stumbled across a hack that helped me create comprehensive, functional codebases for full-stack apps with Auth, API routes, Tailwind CSS, DB management, and other more complex features."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"The trick?")," Ask ",(0,n.kt)("a",{parentName:"p",href:"https://chat.openai.com"},"ChatGPT")," to write you a detailed Product Requirement Doc for the app you\u2019d like to create, and then pass this to Wasp\u2019s ",(0,n.kt)("a",{parentName:"p",href:"https://magic-app-generator.wasp-lang.dev/"},"GPT Web App Generator"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/92bf5pjvdpfkdppcer0j.png",alt:"Image description"})),(0,n.kt)("p",null,"The results are really surprising and give you a far better starter codebase than the other tools I\u2019ve tried (mainly due to the specificity of the generator itself)."),(0,n.kt)("p",null,"And best of all, its free to use! \ud83e\udd11"),(0,n.kt)("h1",{id:"intro"},"Intro"),(0,n.kt)("p",null,"I\u2019m a self-taught, full-stack web developer and I have a lot of fun building side projects."),(0,n.kt)("p",null,"For example, the side project I\u2019m most proud of is an open-source cover letter generator SaaS App, ",(0,n.kt)("a",{parentName:"p",href:"https://CoverLetterGPT.xyz"},"CoverLetterGPT"),", which has close to 4,000 users!"),(0,n.kt)("p",null,"I also have a lot of ridiculous side-project ideas, like ",(0,n.kt)("a",{parentName:"p",href:"https://boozetube.netlify.app/"},"this app")," that can turn your favorite tech influencer\u2019s YouTube videos into a drinking game. \ud83e\udd23"),(0,n.kt)("p",null,"That\u2019s why I\u2019ve been trying out lots of AI-assisted coding tools to generate ",(0,n.kt)("strong",{parentName:"p"},"fully-functional, full-stack web apps")," as quickly as possible."),(0,n.kt)("p",null,"There are the obvious tools at the moment, like using ChatGPT and Copilot within your IDE, but new ones are popping up all the time, especially those that act as AI assistants or \u201cagents\u201d."),(0,n.kt)("p",null,"I\u2019ve gotten a chance to try out some of them, and I even wrote a long-form comparison piece where I put ",(0,n.kt)("a",{parentName:"p",href:"https://dev.to/wasp/smol-ai-vs-wasp-ai-which-is-the-better-ai-junior-developer-4fcb"},"two such tools to the test"),", so check that out if you\u2019re interested."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"But there\u2019s a major problem with these tools"),": even though they\u2019re able to generate some good boilerplate code, they often include a lot of errors and don\u2019t make the developer's job ",(0,n.kt)("em",{parentName:"p"},"that")," much easier in the end."),(0,n.kt)("h1",{id:"where-the-problem-lies"},"Where the problem lies"),(0,n.kt)("p",null,"On paper, AI-assisted coding tools generally save devs time and effort, especially when it comes to isolated code snippets."),(0,n.kt)("p",null,"On one hand, we have tools like ChatGPT and Copilot, which aid you with refactoring, fixing errors, or generating a snippet of code. It's much like assembling a jigsaw puzzle, where the tools serve you the next piece that fits the immediate gap."),(0,n.kt)("p",null,"But coding isn't just about filling the next available space; it\u2019s about ",(0,n.kt)("strong",{parentName:"p"},"envisioning the entire picture"),", understanding the broader system and how different pieces interrelate."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://media3.giphy.com/media/SrnCKS6s02XT2tw6kz/giphy.gif?cid=7941fdc6b01lfcj3taubztyp823itz03hhy9qx8p0mslbtij&ep=v1_gifs_search&rid=giphy.gif&ct=g",alt:"https://media3.giphy.com/media/SrnCKS6s02XT2tw6kz/giphy.gif?cid=7941fdc6b01lfcj3taubztyp823itz03hhy9qx8p0mslbtij&ep=v1_gifs_search&rid=giphy.gif&ct=g"})),(0,n.kt)("p",null,"AI-assisted coding tools that behave more like agents have the potential to understand this broader context needed to generate larger codebases, but it\u2019s easier said than done. Currently, most of the tools out there end up generating code that comes full of errors."),(0,n.kt)("p",null,"Worst of all, some of the code they output can be so messy it actually means ",(0,n.kt)("em",{parentName:"p"},"more")," work for you."),(0,n.kt)("h1",{id:"how-to-fix-it"},"How to fix it"),(0,n.kt)("p",null,"AI assistants, much like novice apprentices, need a comprehensive understanding of what they should work towards. To achieve this, you need to craft a detailed outline along with a comprehensive set of instructions to give the AI as much context as possible."),(0,n.kt)("p",null,"You essentially want to be taking on the role of a Product Manager/Designer and be giving the AI a ",(0,n.kt)("strong",{parentName:"p"},"Product Requirement Document (PRD)"),", i.e. an authoritative document that clearly outlines the"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"purpose,\n"),(0,n.kt)("li",{parentName:"ul"},"features,\n"),(0,n.kt)("li",{parentName:"ul"},"functionality,\n"),(0,n.kt)("li",{parentName:"ul"},"and behavior\n")),(0,n.kt)("p",null,"of the product to be developed."),(0,n.kt)("p",null,"But supplying the PRD is just half the battle. This is because components of your web app within the frontend and backend need to know about each other."),(0,n.kt)("p",null,"And this is where most of these tools fall short, with tools like ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/smol-ai/developer"},"Smol-Developer")," creating decent client and server code that work great on their own, but unfortunately don\u2019t work together!"),(0,n.kt)("p",null,"Given this, it seems like an AI tool that already knows the ins and outs of the whole system, that understands the interconnectedness of various parts of a web app, is our best bet."),(0,n.kt)("p",null,"In short, we need a tool that doesn't just 'do its task' but 'understands the project'."),(0,n.kt)("h1",{id:"the-best-tool-for-the-job-gpt-web-app-generator"},"The Best Tool for the Job: GPT Web App Generator."),(0,n.kt)("p",null,"Remember, I\u2019m focusing on generating comprehensive full-stack codebases here, and for that Wasp\u2019s ",(0,n.kt)("a",{parentName:"p",href:"https://magic-app-generator.wasp-lang.dev/"},"GPT Web App Generator")," gets the job done surprisingly well."),(0,n.kt)("p",null,"How does it do this? Well, the full answer lies in how ",(0,n.kt)("a",{parentName:"p",href:"https://wasp-lang.dev/"},"Wasp")," as a framework is able to help you build full-stack React/NodeJS web apps."),(0,n.kt)("p",null,"It\u2019s beyond the scope of this article to ",(0,n.kt)("a",{parentName:"p",href:"https://wasp-lang.dev/docs"},"explain it in full detail"),", but the TL;DR is that Wasp has a compiler that helps build your app based on a config file. The config file is like a set of ",(0,n.kt)("strong",{parentName:"p"},"instructions")," that its compiler understands and uses to piece together the different parts of the full-stack app for you."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://media1.giphy.com/media/heVoZxS2qAGk4Ay5E5/giphy.gif?cid=7941fdc6x2abm5omkgd1d79rz6dt5kzaead3mxu8xt4xuwc2&ep=v1_gifs_search&rid=giphy.gif&ct=g",alt:"https://media1.giphy.com/media/heVoZxS2qAGk4Ay5E5/giphy.gif?cid=7941fdc6x2abm5omkgd1d79rz6dt5kzaead3mxu8xt4xuwc2&ep=v1_gifs_search&rid=giphy.gif&ct=g"})),(0,n.kt)("p",null,"This is what makes it easier for the AI to get all the pieces of the app right! Once it writes the fundamental client and server code, along with the main config file, the Wasp compiler takes over and pieces it all together, removing a lot of potential possibilities for errors!"),(0,n.kt)("p",null,"In the end, you get a React/NodeJS codebase with features like:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"full-stack auth"),(0,n.kt)("li",{parentName:"ol"},"server config and API routes"),(0,n.kt)("li",{parentName:"ol"},"tailwind CSS config and styles"),(0,n.kt)("li",{parentName:"ol"},"cron jobs and queues"),(0,n.kt)("li",{parentName:"ol"},"email sending"),(0,n.kt)("li",{parentName:"ol"},"deployment")),(0,n.kt)("p",null,"What\u2019s cool too is that this tool doesn't require you to be highly explicit, ",(0,n.kt)("a",{parentName:"p",href:"https://dev.to/wasp/how-we-built-a-gpt-code-agent-that-generates-full-stack-web-apps-in-react-nodejs-explained-simply-4f9"},"because the specifics are baked into the tool itself"),". In other words, ",(0,n.kt)("strong",{parentName:"p"},"it saves you tons of time and energy without compromising on the quality or coherence of the end product.")),(0,n.kt)("h1",{id:"the-hack-getting-gpt-to-write-the-prd-for-you"},"The Hack: Getting GPT to write the PRD for you"),(0,n.kt)("p",null,"Ok, but if you\u2019re like me, you don\u2019t really know how to write a good PRD. Plus, writing a detailed PRD can be pretty time-consuming. But luckily ChatGPT knows how."),(0,n.kt)("p",null,"Thanks, ChatGPT \ud83d\ude4f"),(0,n.kt)("p",null,"So to get really great results out of Wasp\u2019s ",(0,n.kt)("a",{parentName:"p",href:"https://magic-app-generator.wasp-lang.dev/"},"GPT Web App Generator"),", I first ask ",(0,n.kt)("a",{parentName:"p",href:"https://chat.openai.com"},"ChatGPT")," (using GPT-4) to write a detailed product requirement doc for me, like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plaintext"},"Write a Product Requirement Document for the following full-stack app:\n\nAn app where users can track their house plants and their watering schedule.\n")),(0,n.kt)("p",null,"And then I\u2019ll slightly modify ChatGPT\u2019s output before I pass it to GPT Web App Generator:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plaintext"},"Product Requirements Document for a House Plants Tracking Application\n\n1. **Product Title**: GreenLush: Your House Plant Care Companion\n\n2. **Purpose**: \n\nThe GreenLush app is designed to help users manage their house plants and keep track of their watering schedules. This app will serve as a reminder tool, a database for plant types, and a platform for users to know more about house plant care. \n\n3. **Features and Functionality**:\n\n    3.1. **User Registration & Profile Management**: To allow users to create and manage their account.\n    \n    3.2. **Plant Database**: A comprehensive directory of house plants, with visuals and information about each type.\n    \n    3.3. **Plant Profile**: Users can create a profile for each house plant they own, fill in its type, and assign a custom nickname and photo.\n    \n    3.4. **Watering Schedule**: By selecting or inputting the type of plant, the app will suggest an ideal watering schedule. Users can confirm or customize this schedule and notifications will be sent when it's time to water each specific plant. \n\n    3.5. **House Plant Care Tips**: A section of the app that provides general care tips and recommendations for house plants.\n\n4. **Behavior of the Product**:\n\n    4.1. Users will be prompted to sign up when they open the app for the first time. \n  \n    4.2. Once registered, users will be able to browse the plant database, create and manage plant profiles, set watering schedules, and read plant care tips. \n\n    4.3. Notification alerts will be sent according to the set watering schedule.\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cdyywqox4zq00lmqjdw2.png",alt:"Image description"})),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://magic-app-generator.wasp-lang.dev/"},"GPT Web App Generator")," will start generating a plan for your app, execute that plan file by file, and even do some error-checking and fixing."),(0,n.kt)("p",null,"Pretty neat!"),(0,n.kt)("p",null,"Then, the generated app code can be reviewed before you download it and run it locally. This is nice because sometimes it\u2019s useful to tweak the prompt and a few settings to see if you get better results."),(0,n.kt)("p",null,"Best of all, the process is free. You don\u2019t even need to use your own API key!"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/z3f440u6xj3oadx21dhw.png",alt:"Image description"})),(0,n.kt)("p",null,"The picture above is the actual generated, working full-stack app I got out-of-the-box from the example prompt above. All I had to do was initialize the database, register/log in, and BOOM, the app was up and running!"),(0,n.kt)("p",null,"\ud83e\udd29 BTW, If you want to check out the code that GPT Web App Generator created based on the above PRD, go here: ",(0,n.kt)("a",{parentName:"p",href:"https://magic-app-generator.wasp-lang.dev/result/1f28b518-0cca-4352-84e4-69a4ac04d0fa"},"https://magic-app-generator.wasp-lang.dev/result/1f28b518-0cca-4352-84e4-69a4ac04d0fa")),(0,n.kt)("p",null,"There are more examples of types of apps you can build with this tool, ",(0,n.kt)("a",{parentName:"p",href:"https://dev.to/wasp/gpt-web-app-generator-let-ai-create-a-full-stack-react-nodejs-codebase-based-on-your-description-2g39"},"written about here"),", but it\u2019s probably best to just play around with it yourself and see what you can get!"),(0,n.kt)("h1",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"There are several really cool AI-assisted coding tools out there, but for kickstarting a full-stack React/NodeJS app, I\u2019ve found ",(0,n.kt)("a",{parentName:"p",href:"https://magic-app-generator.wasp-lang.dev/"},"GPT Web App Generator")," to be the best performing one."),(0,n.kt)("p",null,"It consistently generates functional, comprehensive full-stack starter codebases that need little to no error-fixing, depending on the complexity of the app."),(0,n.kt)("p",null,"Couple that with the \u201cPRD hack\u201d, and you can save yourself a substantial amount of time by avoiding writing a ton of boilerplate."))}h.isMDXComponent=!0}}]);