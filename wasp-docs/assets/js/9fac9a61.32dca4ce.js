"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[3049],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=m(n),d=o,p=h["".concat(s,".").concat(d)]||h[d]||c[d]||i;return n?a.createElement(p,r(r({ref:t},u),{},{components:n})):a.createElement(p,r({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:o,r[1]=l;for(var m=2;m<i;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38610:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),o=n(44996);const i=e=>a.createElement("div",null,a.createElement("p",{align:"center"},a.createElement("figure",null,a.createElement("img",{style:{width:e.width},alt:e.alt,src:(0,o.Z)(e.source)}),a.createElement("figcaption",{class:"image-caption",style:{fontStyle:"italic",opacity:.6,fontSize:"0.9rem"}},e.caption))))},42427:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(87462),o=(n(67294),n(3905)),i=n(38610);const r={title:"On the Importance of Naming in Programming",authors:["martinsos"],image:"/img/on-importance-of-naming-in-programming/variables-naming-pet-white.png",tags:["programming","clean-code"]},l=void 0,s={permalink:"/wasp-docs/blog/2023/10/12/on-importance-of-naming-in-programming",editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/blog/2023-10-12-on-importance-of-naming-in-programming.md",source:"@site/blog/2023-10-12-on-importance-of-naming-in-programming.md",title:"On the Importance of Naming in Programming",description:"In stories, you will often find the motif of a powerful demon that can be controlled only by knowing its true name. Once the hero finds out that name, through cunning dialogue or by investigating ancient tomes, they can turn things around and banish the demon!",date:"2023-10-12T00:00:00.000Z",formattedDate:"October 12, 2023",tags:[{label:"programming",permalink:"/wasp-docs/blog/tags/programming"},{label:"clean-code",permalink:"/wasp-docs/blog/tags/clean-code"}],readingTime:11.35,hasTruncateMarker:!1,authors:[{name:"Martin Sosic",title:"Co-founder & CTO @ Wasp",url:"https://github.com/martinsos",email:"martin@wasp-lang.dev",imageURL:"https://github.com/martinsos.png",key:"martinsos"}],frontMatter:{title:"On the Importance of Naming in Programming",authors:["martinsos"],image:"/img/on-importance-of-naming-in-programming/variables-naming-pet-white.png",tags:["programming","clean-code"]},prevItem:{title:"Wasp Launch Week #4: Waspolution",permalink:"/wasp-docs/blog/2023/10/13/wasp-launch-week-four"},nextItem:{title:"Contributing to Tech Communities: How Open-Source can land you a job and get you out of the Skill Paradox",permalink:"/wasp-docs/blog/2023/10/04/contributing-open-source-land-a-job"}},m={authorsImageUrls:[void 0]},u=[{value:"Don\u2019t give a name, find it",id:"dont-give-a-name-find-it",level:2},{value:"Things to look out for when figuring out a name",id:"things-to-look-out-for-when-figuring-out-a-name",level:2},{value:"The simple technique for figuring out a name every time",id:"the-simple-technique-for-figuring-out-a-name-every-time",level:2}],h={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In stories, you will often find the motif of a powerful demon that ",(0,o.kt)("strong",{parentName:"p"},"can be controlled only by knowing its true name"),". Once the hero finds out that name, through cunning dialogue or by investigating ancient tomes, they can turn things around and banish the demon!"),(0,o.kt)("p",null,"I firmly believe writing code is not much different: through finding good names for functions, variables, and other constructs, we truly recognize the essence of the problem we are solving. ",(0,o.kt)("strong",{parentName:"p"},"The consequence of clarity gained is not just good names but also cleaner code and improved architecture"),"."),(0,o.kt)(i.Z,{alt:"The power of correct naming in programming",source:"img/on-importance-of-naming-in-programming/naming-banish-thee-white.png",mdxType:"ImgWithCaption"}),(0,o.kt)("p",null,"I would go as far as to say that ",(0,o.kt)("strong",{parentName:"p"},"90% of writing clean code is \u201cjust\u201d naming things correctly"),".\nSounds simple, but it is really not!"),(0,o.kt)("p",null,"Let\u2019s take a look at a couple of examples."),(0,o.kt)("h1",{id:"example-1"},"Example #1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Given first and last name of a person, returns the\n// demographic statistics for all matching people.\nasync function demo (a, b) {\n  const c = await users(a, b);\n  return [\n    avg(c.map(a => a.info[0])),\n    median(c.map(a => a.info[1]))\n  ];\n}\n")),(0,o.kt)("p",null,"What is wrong with this code?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The name of the function ",(0,o.kt)("inlineCode",{parentName:"li"},"demo")," is ",(0,o.kt)("strong",{parentName:"li"},"very vague"),": it could stand for \u201cdemolish\u201d, or as in \u201cgiving a demo/presentation\u201d, \u2026 ."),(0,o.kt)("li",{parentName:"ol"},"Names ",(0,o.kt)("inlineCode",{parentName:"li"},"a"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"b"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"c")," are ",(0,o.kt)("strong",{parentName:"li"},"completely uninformative"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"a")," is reused in lambda inside the ",(0,o.kt)("inlineCode",{parentName:"li"},"map"),", ",(0,o.kt)("strong",{parentName:"li"},"shadowing")," the ",(0,o.kt)("inlineCode",{parentName:"li"},"a")," that is a function argument, confusing the reader and making it easier to make a mistake when modifying the code in the future and reference the wrong variable."),(0,o.kt)("li",{parentName:"ol"},"The returned object doesn\u2019t have any info about what it contains, instead, ",(0,o.kt)("strong",{parentName:"li"},"you need to be careful about the order of its elements")," when using it later."),(0,o.kt)("li",{parentName:"ol"},"The name of the field ",(0,o.kt)("inlineCode",{parentName:"li"},".info")," in the result of a call to ",(0,o.kt)("inlineCode",{parentName:"li"},"users()")," function gives us ",(0,o.kt)("strong",{parentName:"li"},"no information as to what it contains"),", which is made further worse by its elements being accessed by their position, also hiding any information about them and making our code prone to silently work wrong if their ordering changes.")),(0,o.kt)("p",null,"Let\u2019s fix it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"async function fetchDemographicStatsForFirstAndLastName (\n  firstName, lastName\n) {\n  const users = await fetchUsersByFirstAndLastName(\n    firstName, lastName\n  );\n  return {\n    averageAge: avg(users.map(u => u.stats.age)),\n    medianSalary: median(users.map(u => u.stats.salary))\n  };\n}\n")),(0,o.kt)("p",null,"What did we do?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"The name of the function now exactly reflects what it does, no more no less"),". ",(0,o.kt)("inlineCode",{parentName:"li"},"fetch")," in the name even indicates it does some IO (input/output, in this case fetching from the database), which can be good to know since IO is relatively slow/expensive compared to pure code."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"We made other names informative enough"),": not too much, not too little.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Notice how ",(0,o.kt)("strong",{parentName:"li"},"we used the name ",(0,o.kt)("inlineCode",{parentName:"strong"},"users")," for fetched users"),", and not something longer like ",(0,o.kt)("inlineCode",{parentName:"li"},"usersWithSpecifiedFirstAndLastName")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"fetchedUsers"),": there is no need for a longer name, as this variable is very local, short-lived, and there is enough context around it to make it clear what it is about."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Inside lambda, we went with a single-letter name"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"u"),", which might seem like bad practice. But, here, it is perfect: this variable is extremely short-lived, and it is clear from context what it stands for. Also, we picked specifically the letter ",(0,o.kt)("inlineCode",{parentName:"li"},"u")," for a reason, as it is the first letter of ",(0,o.kt)("inlineCode",{parentName:"li"},"user"),", therefore making that connection obvious."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"We named values in the object that we return"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"averageAge")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"medianSalary"),". Now any code that will use our function won\u2019t need to rely on the ordering of items in the result, and also will be easy and informative to read.")),(0,o.kt)("p",null,"Finally, notice how there is no comment above the function anymore. The thing is, ",(0,o.kt)("strong",{parentName:"p"},"the comment is not needed anymore"),": it is all clear from the function name and arguments!"),(0,o.kt)("h1",{id:"example-2"},"Example #2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Find a free machine and use it, or create a new machine\n// if needed. Then on that machine, set up the new worker \n// with the given Docker image and setup cmd. Finally,\n// start executing a job on that worker and return its id.\nasync function getJobId (\n  machineType, machineRegion,\n  workerDockerImage, workerSetupCmd,\n  jobDescription\n) {\n  ...\n}\n")),(0,o.kt)("p",null,"In this example, we are ignoring the implementation details and will focus just on getting the name and arguments right."),(0,o.kt)("p",null,"What is wrong with this code?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"The function name is hiding a lot of details about what it is doing"),". It doesn\u2019t mention at all that we have to procure the machine or set up the worker, or that function will result in the creation of a job that will continue executing somewhere in the background. Instead, it gives a feeling that we are doing something simple, due to the verb ",(0,o.kt)("inlineCode",{parentName:"li"},"get"),": we are just obtaining an id of an already existing job.\nImagine seeing a call to this function somewhere in the code: ",(0,o.kt)("inlineCode",{parentName:"li"},"getJobId(...)")," \u2192 ",(0,o.kt)("strong",{parentName:"li"},"you are not expecting it to take long or do all of the stuff that it really does, which is bad"),".")),(0,o.kt)("p",null,"Ok, this sounds easy to fix, let\u2019s give it a better name!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"async function procureFreeMachineAndSetUpTheDockerWorkerThenStartExecutingTheJob (\n  machineType, machineRegion,\n  workerDockerImage, workerSetupCmd,\n  jobDescription\n) {\n  ...\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Uff, that is one long and complicated name"),". But the truth is, that we can\u2019t really make it shorter without losing valuable information about what this function does and what we can expect from it. Therefore, ",(0,o.kt)("strong",{parentName:"p"},"we are stuck"),", we can\u2019t find a better name! What now?"),(0,o.kt)("p",null,"The thing is, ",(0,o.kt)("strong",{parentName:"p"},"you can't give a good name if you don't have clean code behind it"),". So a bad name is not just a naming mishap, but often also an indicator of problematic code behind it, a failure in design. Code so problematic, that you don\u2019t even know what to name it \u2192 there is no straightforward name to give to it, because it is not a straightforward code!"),(0,o.kt)(i.Z,{alt:"Bad name is hiding bad code",source:"img/on-importance-of-naming-in-programming/bad-name-bad-code-scooby.png",mdxType:"ImgWithCaption"}),(0,o.kt)("p",null,"In our case, the problem is that this ",(0,o.kt)("strong",{parentName:"p"},"function is trying to do too much at once"),". A long name and many arguments are indicators of this, although these can be okay in some situations. Stronger indicators are the usage of words \u201cand\u201d and \u201cthen\u201d in the name, as well as argument names that can be grouped by prefixes (",(0,o.kt)("inlineCode",{parentName:"p"},"machine"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"worker"),")."),(0,o.kt)("p",null,"The solution here is to clean up the code by breaking down the function into multiple smaller functions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"async function procureFreeMachine (type, region) { ... }\nasync function setUpDockerWorker (machineId, dockerImage, setupCmd) { ... }\nasync function startExecutingJob (workerId, jobDescription) { ... }\n")),(0,o.kt)("h1",{id:"what-is-a-good-name"},"What is a good name?"),(0,o.kt)("p",null,"But let\u2019s take a step back - what is a bad name, and what is a good name? What does that mean, how do we recognize them?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Good name doesn\u2019t misdirect, doesn\u2019t omit, and doesn\u2019t assume"),"."),(0,o.kt)("p",null,"A good name should give you a good idea about what the variable contains or function does. A good name will tell you all there is to know or will tell you enough to know where to look next. It will not let you guess, or wonder. It will not misguide you. A good name is obvious, and expected. It is consistent. Not overly creative. It will not assume context or knowledge that the reader is not likely to have."),(0,o.kt)("p",null,"Also, ",(0,o.kt)("strong",{parentName:"p"},"context is king:")," you can\u2019t evaluate the name without the context in which it is read. ",(0,o.kt)("inlineCode",{parentName:"p"},"verifyOrganizationChainCredentials")," could be a terrible name or a great name. ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," could be a great name or a terrible name. It depends on the story, the surroundings, on the problem the code is solving. Names tell a story, and they need to fit together like a story."),(0,o.kt)("h1",{id:"examples-of-famous-bad-names"},"Examples of famous bad names"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"JavaScript"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"I was the victim of this bad naming myself: my parents bought me a book about JavaScript while I wanted to learn Java."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"HTTP Authorization header"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"It is named ",(0,o.kt)("inlineCode",{parentName:"li"},"Authorization"),", but is used for authentication! And those are not the same: authentication is about identifying yourself, and authorization is about granting permissions. More about it can be found here: ",(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/30062024/why-is-the-http-header-for-authentication-called-authorization"},"https://stackoverflow.com/questions/30062024/why-is-the-http-header-for-authentication-called-authorization")," ."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Wasp-lang"),":",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This one is my fault: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wasp-lang/wasp"},"Wasp")," is a full-stack JS web framework that uses a custom config language as only a small part of its codebase, but I put ",(0,o.kt)("inlineCode",{parentName:"li"},"-lang")," in the name and scared a lot of people away because they thought it was a whole new general programming language!")))),(0,o.kt)("h1",{id:"how-to-come-up-with-a-good-name"},"How to come up with a good name"),(0,o.kt)("h2",{id:"dont-give-a-name-find-it"},"Don\u2019t give a name, find it"),(0,o.kt)("p",null,"The best advice is maybe not to give a name, but instead to ",(0,o.kt)("strong",{parentName:"p"},"find out")," a name. You shouldn\u2019t be making up an original name, as if you are naming a pet or a child; ",(0,o.kt)("strong",{parentName:"p"},"you are instead looking for the essence of the thing you are naming, and the name should present itself based on it"),". If you don\u2019t like the name you discovered, it means you don\u2019t like the thing you are naming, and you should change that thing by improving the design of your code (as we did in the example #2)."),(0,o.kt)(i.Z,{alt:"You shouldn't name your variables the same way you name your pets, and vice versa",source:"img/on-importance-of-naming-in-programming/variables-naming-pet-white.png",mdxType:"ImgWithCaption"}),(0,o.kt)("h2",{id:"things-to-look-out-for-when-figuring-out-a-name"},"Things to look out for when figuring out a name"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"First, make sure it is not a bad name :)"),". Remember: don\u2019t misdirect, don\u2019t omit, don\u2019t assume."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Make it reflect what it represents.")," Find the essence of it, capture it in the name. Name is still ugly? Improve the code. You have also other things to help you here \u2192 type signature, and comments. But those come secondary."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Make it play nicely with the other names around it.")," It should have a clear relation to them - be in the same \u201cworld\u201d. It should be similar to similar stuff, opposite to opposite stuff. It should make a story together with other names around it. It should take into account the context it is in."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Length follows the scope"),". In general, the shorter-lived the name is, and the smaller its scope is, the shorter the name can/should be, and vice versa. This is why it can be ok to use one-letter variables in short lambda functions. If not sure, go for the longer name."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Stick to the terminology you use in the codebase"),". If you so far used the term ",(0,o.kt)("inlineCode",{parentName:"li"},"server"),", don\u2019t for no reason start using the term ",(0,o.kt)("inlineCode",{parentName:"li"},"backend")," instead. Also, if you use ",(0,o.kt)("inlineCode",{parentName:"li"},"server")," as a term, you likely shouldn't go with ",(0,o.kt)("inlineCode",{parentName:"li"},"frontend"),": instead, you will likely want to use ",(0,o.kt)("inlineCode",{parentName:"li"},"client"),", which is a term more closely related to the ",(0,o.kt)("inlineCode",{parentName:"li"},"server"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Stick to the conventions you use in the codebase"),". Examples of some of the conventions that I often use in my codebases:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"prefix ",(0,o.kt)("inlineCode",{parentName:"li"},"is")," when the variable is Bool (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"isAuthEnabled"),")"),(0,o.kt)("li",{parentName:"ul"},"prefix ",(0,o.kt)("inlineCode",{parentName:"li"},"ensure")," for the functions that are idempotent, that will do something (e.g allocate a resource) only if it hasn\u2019t been set up so far (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"ensureServerIsRunning"),").")))),(0,o.kt)("h2",{id:"the-simple-technique-for-figuring-out-a-name-every-time"},"The simple technique for figuring out a name every time"),(0,o.kt)("p",null,"If you are ever having trouble coming up with a name, do the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Write a comment above the function/variable where you ",(0,o.kt)("strong",{parentName:"li"},"describe what it is, in human language"),", as if you were describing it to your colleague. It might be one sentence or multiple sentences.\nThis is the essence of what your function/variable does, what it is."),(0,o.kt)("li",{parentName:"ol"},"Now, you take the role of the sculptor, and you chisel at and ",(0,o.kt)("strong",{parentName:"li"},"shape that description of your function/variable until you get a name"),", by taking pieces of it away. You stop when you feel that one more hit of your imagined chisel at it would take too much away."),(0,o.kt)("li",{parentName:"ol"},"Is your name still too complex/confusing? If that is so, that means that the code behind is too complex, and should be reorganized! ",(0,o.kt)("strong",{parentName:"li"},"Go refactor it"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Ok, all done")," \u2192 you have a nice name!"),(0,o.kt)("li",{parentName:"ol"},"That comment above the function/variable? Remove everything from it that is now captured in the code (name + arguments + type signature). If you can remove the whole comment, great. Sometimes you can\u2019t, because some stuff can\u2019t be captured in the code (e.g. certain assumptions, explanations, examples, \u2026), and that is also okay. But don\u2019t repeat in the comment what you can say in the code instead. ",(0,o.kt)("strong",{parentName:"li"},"Comments are a necessary evil and are here to capture knowledge that you can\u2019t capture in your names and/or types"),".")),(0,o.kt)("p",null,"Don\u2019t get overly stuck on always figuring out the perfect name at the get-go \u2192 it is okay to do multiple iterations of your code, with both your code and name improving with each iteration."),(0,o.kt)("h1",{id:"reviewing-code-with-naming-in-mind"},"Reviewing code with naming in mind"),(0,o.kt)("p",null,"Once you start thinking a lot about naming, you will see how it will change your code review process: focus shifts from looking at implementation details to looking at names first."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"When I am doing a code review, there is one predominant thought I will be thinking about: \u201cIs this name clear?\u201d"),". From there, the whole review evolves and results in clean code."),(0,o.kt)("p",null,"Inspecting a name is a single point of pressure, that untangles the whole mess behind it. Search for bad names, and you will sooner or later uncover the bad code if there is some."),(0,o.kt)("h1",{id:"further-reading"},"Further reading"),(0,o.kt)("p",null,"If you haven\u2019t yet read it, I would recommend reading the book ",(0,o.kt)("strong",{parentName:"p"},"Clean Code by Robert Martin"),". It has a great chapter on naming and also goes much further on how to write code that you and others will enjoy reading and maintaining."),(0,o.kt)("p",null,"Also, ",(0,o.kt)("a",{parentName:"p",href:"https://martinfowler.com/bliki/TwoHardThings.html"},"A popular joke about naming being hard"),"."))}d.isMDXComponent=!0}}]);