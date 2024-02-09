"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[3979],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var r=a.createContext({}),u=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(r.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),c=o,m=d["".concat(r,".").concat(c)]||d[c]||h[c]||s;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=c;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<s;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},38610:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),o=n(44996);const s=e=>a.createElement("div",null,a.createElement("p",{align:"center"},a.createElement("figure",null,a.createElement("img",{style:{width:e.width},alt:e.alt,src:(0,o.Z)(e.source)}),a.createElement("figcaption",{class:"image-caption",style:{fontStyle:"italic",opacity:.6,fontSize:"0.9rem"}},e.caption))))},7889:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var a=n(87462),o=(n(67294),n(3905)),s=(n(39960),n(44996),n(38610));const i={title:"A Guide to Windows Development with Wasp & WSL",authors:["martinovicdev"],image:"/img/wsl-guide/wsl-guide-banner.jpeg",tags:["wsl","windows","tutorial"]},l=void 0,r={permalink:"/wasp-docs/blog/2023/11/21/guide-windows-development-wasp-wsl",editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/blog/2023-11-21-guide-windows-development-wasp-wsl.md",source:"@site/blog/2023-11-21-guide-windows-development-wasp-wsl.md",title:"A Guide to Windows Development with Wasp & WSL",description:"<ImgWithCaption",date:"2023-11-21T00:00:00.000Z",formattedDate:"November 21, 2023",tags:[{label:"wsl",permalink:"/wasp-docs/blog/tags/wsl"},{label:"windows",permalink:"/wasp-docs/blog/tags/windows"},{label:"tutorial",permalink:"/wasp-docs/blog/tags/tutorial"}],readingTime:9.825,hasTruncateMarker:!1,authors:[{name:"Boris Martinovi\u0107",title:"Contributor @ Wasp",url:"https://martinovic.dev",imageURL:"https://github.com/martinovicdev.png",key:"martinovicdev"}],frontMatter:{title:"A Guide to Windows Development with Wasp & WSL",authors:["martinovicdev"],image:"/img/wsl-guide/wsl-guide-banner.jpeg",tags:["wsl","windows","tutorial"]},prevItem:{title:"On the Importance of RFCs in Programming",permalink:"/wasp-docs/blog/2023/12/05/writing-rfcs"},nextItem:{title:"Wasp Launch Week #4: Waspolution",permalink:"/wasp-docs/blog/2023/10/13/wasp-launch-week-four"}},u={authorsImageUrls:[void 0]},p=[{value:"What is WSL and why should I be interested in it?",id:"what-is-wsl-and-why-should-i-be-interested-in-it",level:2},{value:"Installing WSL on the Windows operating system",id:"installing-wsl-on-the-windows-operating-system",level:2},{value:"Cool WSL featues to help you along the way",id:"cool-wsl-featues-to-help-you-along-the-way",level:3},{value:"Getting started with development on WSL",id:"getting-started-with-development-on-wsl",level:2},{value:"Installing Wasp",id:"installing-wasp",level:3},{value:"Setting up VS Code",id:"setting-up-vs-code",level:3},{value:"Conclusion",id:"conclusion",level:2}],d={toc:p},h="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(s.Z,{alt:"WSL Guide Banner",source:"/img/wsl-guide/wsl-guide-banner.jpeg",mdxType:"ImgWithCaption"}),(0,o.kt)("p",null,"If you are having a hard time with Wasp development on Windows, don't be afraid! We will go through all necessary steps to set up your dev environment and get you started with Wasp development in Windows in no time."),(0,o.kt)("h2",{id:"what-is-wsl-and-why-should-i-be-interested-in-it"},"What is WSL and why should I be interested in it?"),(0,o.kt)("p",null,"Windows Subsystem for Linux (or WSL) lets developers run a fully functional and native GNU/Linux environment directly on Windows. In other words, we can run Linux directly without using a virtual machine or dual-booting the system."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The first cool thing about it is that WSL allows you to never switch OS\u2019s, but still have the best of both worlds inside your OS."),"\nWhat does that mean for us regular users? When you look at the way WSL works in practice, it can be considered a Windows feature that runs a Linux OS directly inside Windows 10 or 11, with a fully functional Linux file system, Linux command line tools, and Linux GUI apps (",(0,o.kt)("em",{parentName:"p"},"really cool, btw"),"). Besides that, it uses much fewer resources for running when compared to a virtual machine and also doesn\u2019t require a separate tool for creating and managing those virtual machines."),(0,o.kt)("p",null,"WSL is mainly catered to developers, so this article will be focused on developer usage and how to set up a fully working dev environment with VS Code. Inside this article, we\u2019ll go through some of the cool features and how they can be used in practice. Plus, the best way to understand new things is to actually start using them."),(0,o.kt)("h2",{id:"installing-wsl-on-the-windows-operating-system"},"Installing WSL on the Windows operating system"),(0,o.kt)("p",null,"In order to install WSL on your Windows, first enable ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v"},"Hyper-V")," architecture is Microsoft\u2019s hardware virtualization solution. To install it, right-click on the Windows Terminal/Powershell and open it in Administrator mode."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6wm5xniz2nehrccczeh6.png",alt:"Image description"})),(0,o.kt)("p",null,"Then, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All\n")),(0,o.kt)("p",null,"That will ensure that you have all the prerequisites for the installation. Then, open the Powershell (best done in Windows Terminal) in the Administrator mode. Then, run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wsl \u2014install\n")),(0,o.kt)("p",null,"There is a plethora of Linux distributions to be installed, but Ubuntu is the one installed by default. This guide will feature many console commands, but most of them will be a copy-paste process."),(0,o.kt)("p",null,"If you have installed Docker before, there is a decent chance that you have WSL 2 installed on your system already. In that case, you will get a prompt to install the distribution of your choice. Since this tutorial will be using Ubuntu, I suggest running."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," wsl --install -d Ubuntu\n")),(0,o.kt)("p",null,"After installing Ubuntu (or another distro of your choice), you will enter your Linux OS and be prompted with a welcome screen. There, you will enter some basic info. First, you will enter your username and after that your password. Both of those will be Linux-specific, so you don\u2019t necessarily have to repeat your Windows credentials. After we\u2019ve done this, the installation part is over! You have successfully installed Ubuntu on your Windows machine! It still feels weird to say this, right?"),(0,o.kt)("h3",{id:"cool-wsl-featues-to-help-you-along-the-way"},"Cool WSL featues to help you along the way"),(0,o.kt)("p",null,"But before we get down to our dev environment setup, I want to show you a couple of cool tricks that will make your life easier and help you understand why WSL is actually a game-changer for Windows users."),(0,o.kt)("p",null,"The first cool thing with WSL is that you don\u2019t have to give up the current way of managing files through Windows Explorer. In your sidebar in Windows Explorer, you can find the Linux option now right under the network tab."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/647jdnzilrucsijtye3v.png",alt:"Image description"})),(0,o.kt)("p",null,"From there, you can access and manage your Linux OS\u2019s file system directly from the Windows Explorer. What is really cool with this feature is that you can basically copy, paste, and move files between different operating systems without any issues, which opens up a whole world of possibilities. Effectively, you don\u2019t have to change much in your workflow with files and you can move many projects and files from one OS to another effortlessly. If you download an image for your web app on your Windows browser, just copy and paste it to your Linux OS."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/iqjsd1oz5a4alu6q08re.png",alt:"Image description"})),(0,o.kt)("p",null,"Another very important thing, which we will use in our example is WSL2 virtual routes. As you now have OS inside your OS, they have a way of communicating. When you want to access your Linux OS\u2019s network (for example, when you want to access your web app running locally in Linux), you can use ",(0,o.kt)("em",{parentName:"p"},"${PC-name}.local"),". For me, since my PC name is Boris-PC, my network address is boris-pc.local. That way you don\u2019t have to remember different IP addresses, which is really cool. If you want your address for whatever reason, you can go to your Linux distro\u2019s terminal, and type ipconfig. Then, you can see your Windows IP and Linux\u2019s IP address. With that, you can communicate with both operating systems without friction."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lkhcfiybnobuoziitwtm.png",alt:"Image description"})),(0,o.kt)("p",null,"The final cool thing I want to highlight is Linux GUI apps. It is a very cool feature that helps make WSL a more attractive proposal for regular users as well. You can install any app you want on your Linux system using popular package managers, such as apt (default on Ubuntu) or flatpak. Then you can launch them as well from the command line and the app will start and be visible inside your Windows OS. But that can cause some friction and is not user-friendly. The really ground-breaking part of this feature is that you can launch them directly from your Windows OS without even starting WSL yourself. Therefore, you can create shortcuts and pin them to the Start menu or taskbar without any friction and really have no need to think about where your app comes from. For the showcase, I have installed Dolphin File Manager and run it through Windows OS. You can see it action below side by side with Windows Explorer."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yq1nxj244jd1fci13oay.png",alt:"Image description"})),(0,o.kt)("h2",{id:"getting-started-with-development-on-wsl"},"Getting started with development on WSL"),(0,o.kt)("p",null,"After hearing all about the cool features of WSL, let\u2019s slowly get back on track with our tutorial. Next up is setting up our dev environment and starting our first app. I\u2019ll be setting up a web dev environment and we\u2019ll use ",(0,o.kt)("a",{parentName:"p",href:"https://wasp-lang.dev/"},"Wasp")," as an example."),(0,o.kt)("p",null,"If you aren\u2019t familiar with it, Wasp is a Rails-like framework for React, Node.js, and Prisma. It\u2019s a fast and easy way to develop and deploy your full-stack web apps. For our tutorial, Wasp is a perfect candidate, since it doesn\u2019t support Windows development natively, but only through WSL as it requires a Unix environment."),(0,o.kt)("p",null,"Let\u2019s get started with installing Node.js first. At the moment, Wasp requires users to use the Node v18 (version requirement will be relaxed very soon), so we want to start with both Node.js and NVM installation."),(0,o.kt)("p",null,"But first things first, let\u2019s start with Node.js. In WSL, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"sudo apt install nodejs\n")),(0,o.kt)("p",null,"in order to install Node on your Linux environment. Next up is NVM. I suggest going to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"https://github.com/nvm-sh/nvm")," and getting the latest install script from there. The current download is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- [https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh](https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh) | bash\n")),(0,o.kt)("p",null,"After this, we have both Node.js and NVM set up in our system."),(0,o.kt)("h3",{id:"installing-wasp"},"Installing Wasp"),(0,o.kt)("p",null,"Next up is installing Wasp on our Linux environment. Wasp installation is also pretty straightforward and easy. So just copy and paste this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSL [https://get.wasp-lang.dev/installer.sh](https://get.wasp-lang.dev/installer.sh) | sh\n")),(0,o.kt)("p",null,"and wait for the installer to finish up its thing. Great! But, if you did your WSL setup from 0, you will notice the following warning underneath: It looks like '/home/boris/.local/bin' is not on your PATH! You will not be able to invoke wasp from the terminal by its name."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/em932e89tlzajv4rm6up.png",alt:"Image description"})),(0,o.kt)("p",null,"Let\u2019s fix this quickly. In order to do this, let\u2019s run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," code ~/.profile\n")),(0,o.kt)("p",null,"If we don\u2019t already have VS Code, it will automatically set up everything needed and boot up so you can add the command to the end of your file. It will be different for everyone depending on their system name. For example, mine is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export PATH=$PATH:/home/boris/.local/bin\n")),(0,o.kt)("p",null,"Great! Now we just need to swap node version to v18.14.2 to ensure full compatibility with Wasp. We\u2019ll install and switch to Node 18 in one go! To do this, simply run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nvm install v18.14.2 && nvm use v18.14.2\n")),(0,o.kt)("h3",{id:"setting-up-vs-code"},"Setting up VS Code"),(0,o.kt)("p",null,"After setting up Wasp, we want to see how to run the app and access it from VS Code. Under the hood, you will still be using WSL for our development, but we\u2019ll be able to use our VS Code from Host OS (Windows) for most of the things."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/orifa202sph4swgbir2d.png",alt:"Image description"})),(0,o.kt)("p",null,"To get started, download the ",(0,o.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl"},"WSL extension")," to your VS Code in Windows. Afterward, let\u2019s start a new Wasp project to see how it works in action. Open your VS Code Command Palette (ctrl + shift + P) and select the option to \u201cOpen Folder in WSL\u201d."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/l1le8xvk6a8a8teog8eo.png",alt:"Image description"})),(0,o.kt)("p",null,"The folder that I have opened is"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\\\\wsl.localhost\\Ubuntu\\home\\boris\\Projects\n")),(0,o.kt)("p",null,"That is the \u201cProjects\u201d folder inside my home folder in WSL. There are 2 ways for us to know that we are in WSL: The top bar and in the bottom left corner of VS Code. In both places, we have WSL: Ubuntu written, as is shown on screenshots."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mzhu765415sravn3vypu.png",alt:"Image description"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cpy4kggtsobod1vk1dqn.png",alt:"Image description"})),(0,o.kt)("p",null,"Once inside this folder, I will open a terminal. It will also be already connected to the proper folder in WSL, so we can get down to business! Let\u2019s run the"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wasp new\n")),(0,o.kt)("p",null,"command to create a new Wasp application. I have chosen the basic template, but you are free to create a project of your choosing, e.g. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/SaaS-Template-GPT"},"SaaS starter")," with GPT, Stripe and more preconfigured. As shown in the screenshot, we should change the current directory of our project to the proper one and then run our project with it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wasp start\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/l453mcae56kfa3yrm7j4.png",alt:"Image description"})),(0,o.kt)("p",null,"And just like that, a new screen will open on my Windows machine, showcasing that my Wasp app is open. Cool! My address is still the default localhost:3000, but it is being run from the WSL. Congratulations, you\u2019ve successfully started your first Wasp app through WSL. That wasn\u2019t hard, was it?"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vfyfok2eg0xjhqcqhgoe.png",alt:"Image description"})),(0,o.kt)("p",null,"For our final topic, I want to highlight Git workflow with WSL, as it is relatively painless to set up. You can always do the manual git config setup, but I have something cooler for you: Sharing credentials between Windows and WSL. To set up sharing Git credentials, we have to do the following. In Powershell (on Windows), configure the credential manager on Windows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git config --global credential.helper wincred\n")),(0,o.kt)("p",null,"And let\u2019s do the same inside WSL."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'git config --global credential.helper "/mnt/c/Program\\ Files/Git/mingw64/bin/git-credential-manager.exe"\n')),(0,o.kt)("p",null,"This allows us to share our Git username and password. Anything set up in Windows will work in WSL (and vice-versa) and we can use Git inside WSL as we prefer (via VS Code GUI or via shell)."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Through our journey here, we have learned what WSL is, how it can be useful for enhancing our workflow with our Windows PC, but also how to set up your initial development environment on it. Microsoft has done a fantastic job with this tool and has really made Windows OS a much more approachable and viable option for all developers. We went through how to install the dev tools needed to kickstart development and how to get a handle on a basic dev workflow. Here are some important links if you want to dive deeper into the topic:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/WSL"},"https://github.com/microsoft/WSL")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/windows/wsl/install"},"https://learn.microsoft.com/en-us/windows/wsl/install")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/docs/remote/wsl"},"https://code.visualstudio.com/docs/remote/wsl"))))}c.isMDXComponent=!0}}]);