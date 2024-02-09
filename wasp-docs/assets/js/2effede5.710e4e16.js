"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[4600],{85162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),o=n(86010);const s={tabItem:"tabItem_Ymn6"};function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(s.tabItem,r),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>S});var a=n(87462),o=n(67294),s=n(86010),r=n(12466),i=n(16550),l=n(91980),c=n(67392),u=n(50012);function p(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function d(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(s),(0,o.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=d(e),[r,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[l,c]=k({queryString:n,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),g=(()=>{const e=l??p;return m({value:e,tabValues:s})?e:null})();(0,o.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,s]),tabValues:s}}var g=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,r.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==i&&(p(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},r,{className:(0,s.Z)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":i===t})}),n??t)})))}function f(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=h(e);return o.createElement("div",{className:(0,s.Z)("tabs-container",v.tabList)},o.createElement(b,(0,a.Z)({},e,t)),o.createElement(f,(0,a.Z)({},e,t)))}function S(e){const t=(0,g.Z)();return o.createElement(y,(0,a.Z)({key:String(t)},e))}},87587:(e,t,n)=>{n.d(t,{Jp:()=>s,aH:()=>r});var a=n(67294);const o=e=>{let{color:t,children:n}=e;return a.createElement("span",{style:{border:`2px solid ${t}`,display:"inline-block",padding:"0.2em 0.4em",color:t,borderRadius:"0.4em",fontSize:"0.8em",lineHeight:"1",fontWeight:"bold"}},n)};function s(){return a.createElement(o,{color:"#0b62f5"},"internal")}function r(){return a.createElement(o,{color:"#f59e0b"},"required")}},48863:(e,t,n)=>{n.d(t,{A:()=>r,v:()=>i});var a=n(67294),o=n(50012),s=n(49875);function r(e){let{children:t}=e;const[n]=(0,o.Nk)("docusaurus.tab.js-ts");return"ts"===n&&a.createElement(s.Z,null,t)}function i(e){let{children:t}=e;const[n]=(0,o.Nk)("docusaurus.tab.js-ts");return"js"===n&&a.createElement(s.Z,null,t)}},52701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>p,toc:()=>m});var a=n(87462),o=(n(67294),n(3905)),s=n(85162),r=n(74866),i=(n(44996),n(48863)),l=n(87587);const c={title:"Web Sockets"},u=void 0,p={unversionedId:"advanced/web-sockets",id:"advanced/web-sockets",title:"Web Sockets",description:"Wasp provides a fully integrated WebSocket experience by utilizing Socket.IO on the client and server.",source:"@site/docs/advanced/web-sockets.md",sourceDirName:"advanced",slug:"/advanced/web-sockets",permalink:"/docs/advanced/web-sockets",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/docs/advanced/web-sockets.md",tags:[],version:"current",frontMatter:{title:"Web Sockets"},sidebar:"docs",previous:{title:"Recurring Jobs",permalink:"/docs/advanced/jobs"},next:{title:"Custom HTTP API Endpoints",permalink:"/docs/advanced/apis"}},d={},m=[{value:"Turn On WebSockets in Your Wasp File",id:"turn-on-websockets-in-your-wasp-file",level:2},{value:"Defining the Events Handler",id:"defining-the-events-handler",level:2},{value:"<code>webSocketFn</code> Function",id:"websocketfn-function",level:3},{value:"Using the WebSocket On The Client",id:"using-the-websocket-on-the-client",level:2},{value:"<code>useSocket</code> Hook",id:"usesocket-hook",level:3},{value:"<code>useSocketListener</code> Hook",id:"usesocketlistener-hook",level:3},{value:"API Reference",id:"api-reference",level:2}],k={toc:m},h="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Wasp provides a fully integrated WebSocket experience by utilizing ",(0,o.kt)("a",{parentName:"p",href:"https://socket.io/"},"Socket.IO")," on the client and server. "),(0,o.kt)("p",null,"We handle making sure your URLs are correctly setup, CORS is enabled, and provide a useful ",(0,o.kt)("inlineCode",{parentName:"p"},"useSocket")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"useSocketListener")," abstractions for use in React components."),(0,o.kt)("p",null,"To get started, you need to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Define your WebSocket logic on the server."),(0,o.kt)("li",{parentName:"ol"},"Enable WebSockets in your Wasp file, and connect it with your server logic."),(0,o.kt)("li",{parentName:"ol"},"Use WebSockets on the client, in React, via ",(0,o.kt)("inlineCode",{parentName:"li"},"useSocket")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"useSocketListener"),"."),(0,o.kt)("li",{parentName:"ol"},"Optionally, type the WebSocket events and payloads for full-stack type safety.")),(0,o.kt)("p",null,"Let's go through setting up WebSockets step by step, starting with enabling WebSockets in your Wasp file."),(0,o.kt)("h2",{id:"turn-on-websockets-in-your-wasp-file"},"Turn On WebSockets in Your Wasp File"),(0,o.kt)("p",null,"We specify that we are using WebSockets by adding ",(0,o.kt)("inlineCode",{parentName:"p"},"webSocket")," to our ",(0,o.kt)("inlineCode",{parentName:"p"},"app")," and providing the required ",(0,o.kt)("inlineCode",{parentName:"p"},"fn"),". You can optionally change the auto-connect behavior."),(0,o.kt)(r.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-wasp",metastring:"title=todoApp.wasp",title:"todoApp.wasp"},'app todoApp {\n  // ...\n\n  webSocket: {\n    fn: import { webSocketFn } from "@server/webSocket.js",\n    autoConnect: true, // optional, default: true\n  },\n}\n'))),(0,o.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-wasp",metastring:"title=todoApp.wasp",title:"todoApp.wasp"},'app todoApp {\n  // ...\n\n  webSocket: {\n    fn: import { webSocketFn } from "@server/webSocket.js",\n    autoConnect: true, // optional, default: true\n  },\n}\n')))),(0,o.kt)("h2",{id:"defining-the-events-handler"},"Defining the Events Handler"),(0,o.kt)("p",null,"Let's define the WebSockets server with all of the events and handler functions."),(0,o.kt)(i.A,{mdxType:"ShowForTs"},(0,o.kt)("admonition",{title:"Full-stack type safety",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Check this out: we'll define the event types and payloads on the server, and they will be ",(0,o.kt)("strong",{parentName:"p"},"automatically exposed on the client"),". This helps you avoid mistakes when emitting events or handling them."))),(0,o.kt)("h3",{id:"websocketfn-function"},(0,o.kt)("inlineCode",{parentName:"h3"},"webSocketFn")," Function"),(0,o.kt)("p",null,"On the server, you will get Socket.IO ",(0,o.kt)("inlineCode",{parentName:"p"},"io: Server")," argument and ",(0,o.kt)("inlineCode",{parentName:"p"},"context")," for your WebSocket function. The ",(0,o.kt)("inlineCode",{parentName:"p"},"context")," object give you access to all of the entities from your Wasp app. "),(0,o.kt)("p",null,"You can use this ",(0,o.kt)("inlineCode",{parentName:"p"},"io")," object to register callbacks for all the regular ",(0,o.kt)("a",{parentName:"p",href:"https://socket.io/docs/v4/server-api/"},"Socket.IO events"),".  Also, if a user is logged in, you will have a ",(0,o.kt)("inlineCode",{parentName:"p"},"socket.data.user")," on the server."),(0,o.kt)("p",null,"This is how we can define our ",(0,o.kt)("inlineCode",{parentName:"p"},"webSocketFn")," function:"),(0,o.kt)(r.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/server/webSocket.js",title:"src/server/webSocket.js"},"import { v4 as uuidv4 } from 'uuid'\nimport { getFirstProviderUserId } from '@wasp/auth/user.js'\n\nexport const webSocketFn = (io, context) => {\n  io.on('connection', (socket) => {\n    const username = getFirstProviderUserId(socket.data.user) ?? 'Unknown'\n    console.log('a user connected: ', username)\n\n    socket.on('chatMessage', async (msg) => {\n      console.log('message: ', msg)\n      io.emit('chatMessage', { id: uuidv4(), username, text: msg })\n      // You can also use your entities here:\n      // await context.entities.SomeEntity.create({ someField: msg })\n    })\n  })\n}\n"))),(0,o.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/server/webSocket.ts",title:"src/server/webSocket.ts"},"import type { WebSocketDefinition, WaspSocketData } from '@wasp/webSocket'\nimport { v4 as uuidv4 } from 'uuid'\nimport { getFirstProviderUserId } from '@wasp/auth/user.js'\n\nexport const webSocketFn: WebSocketFn = (io, context) => {\n  io.on('connection', (socket) => {\n    const username = getFirstProviderUserId(socket.data.user) ?? 'Unknown'\n    console.log('a user connected: ', username)\n\n    socket.on('chatMessage', async (msg) => {\n      console.log('message: ', msg)\n      io.emit('chatMessage', { id: uuidv4(), username, text: msg })\n      // You can also use your entities here:\n      // await context.entities.SomeEntity.create({ someField: msg })\n    })\n  })\n}\n\n// Typing our WebSocket function with the events and payloads\n// allows us to get type safety on the client as well\n\ntype WebSocketFn = WebSocketDefinition<\n  ClientToServerEvents,\n  ServerToClientEvents,\n  InterServerEvents,\n  SocketData\n>\n\ninterface ServerToClientEvents {\n  chatMessage: (msg: { id: string, username: string, text: string }) => void;\n}\n\ninterface ClientToServerEvents {\n  chatMessage: (msg: string) => void;\n}\n\ninterface InterServerEvents {}\n\n// Data that is attached to the socket.\n// NOTE: Wasp automatically injects the JWT into the connection,\n// and if present/valid, the server adds a user to the socket.\ninterface SocketData extends WaspSocketData {}\n")))),(0,o.kt)("h2",{id:"using-the-websocket-on-the-client"},"Using the WebSocket On The Client"),(0,o.kt)(i.A,{mdxType:"ShowForTs"},(0,o.kt)("admonition",{title:"Full-stack type safety",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"All the hooks we use are typed with the events and payloads you defined on the server. VS Code will give you autocomplete for the events and payloads, and you will get type errors if you make a mistake."))),(0,o.kt)("h3",{id:"usesocket-hook"},(0,o.kt)("inlineCode",{parentName:"h3"},"useSocket")," Hook"),(0,o.kt)("p",null,"Client access to WebSockets is provided by the ",(0,o.kt)("inlineCode",{parentName:"p"},"useSocket")," hook. It returns:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"socket: Socket")," for sending and receiving events."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"isConnected: boolean")," for showing a display of the Socket.IO connection status.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Note: Wasp automatically connects and establishes a WebSocket connection from the client to the server by default, so you do not need to explicitly ",(0,o.kt)("inlineCode",{parentName:"li"},"socket.connect()")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"socket.disconnect()"),". "),(0,o.kt)("li",{parentName:"ul"},"If you set ",(0,o.kt)("inlineCode",{parentName:"li"},"autoConnect: false")," in your Wasp file, then you should call these as needed.")))),(0,o.kt)("p",null,"All components using ",(0,o.kt)("inlineCode",{parentName:"p"},"useSocket")," share the same underlying ",(0,o.kt)("inlineCode",{parentName:"p"},"socket"),"."),(0,o.kt)("h3",{id:"usesocketlistener-hook"},(0,o.kt)("inlineCode",{parentName:"h3"},"useSocketListener")," Hook"),(0,o.kt)("p",null,"Additionally, there is a ",(0,o.kt)("inlineCode",{parentName:"p"},"useSocketListener: (event, callback) => void")," hook which is used for registering event handlers. It takes care of unregistering the handler on unmount."),(0,o.kt)(r.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=src/client/ChatPage.jsx",title:"src/client/ChatPage.jsx"},"import React, { useState } from 'react'\nimport {\n  useSocket,\n  useSocketListener,\n} from '@wasp/webSocket'\n\nexport const ChatPage = () => {\n  const [messageText, setMessageText] = useState('')\n  const [messages, setMessages] = useState([])\n  const { socket, isConnected } = useSocket()\n\n  useSocketListener('chatMessage', logMessage)\n\n  function logMessage(msg) {\n    setMessages((priorMessages) => [msg, ...priorMessages])\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault()\n    socket.emit('chatMessage', messageText)\n    setMessageText('')\n  }\n\n  const messageList = messages.map((msg) => (\n    <li key={msg.id}>\n      <em>{msg.username}</em>: {msg.text}\n    </li>\n  ))\n  const connectionIcon = isConnected ? '\ud83d\udfe2' : '\ud83d\udd34'\n\n  return (\n    <>\n      <h2>Chat {connectionIcon}</h2>\n      <div>\n        <form onSubmit={handleSubmit}>\n          <div>\n            <div>\n              <input\n                type=\"text\"\n                value={messageText}\n                onChange={(e) => setMessageText(e.target.value)}\n              />\n            </div>\n            <div>\n              <button type=\"submit\">Submit</button>\n            </div>\n          </div>\n        </form>\n        <ul>{messageList}</ul>\n      </div>\n    </>\n  )\n}\n"))),(0,o.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("p",null,"Wasp's ",(0,o.kt)("strong",{parentName:"p"},"full-stack type safety")," kicks in here: all the event types and payloads are automatically inferred from the server and are available on the client \ud83d\udd25"),(0,o.kt)("p",null,"You can additionally use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ClientToServerPayload")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ServerToClientPayload")," helper types to get the payload type for a specific event."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=src/client/ChatPage.tsx",title:"src/client/ChatPage.tsx"},"import React, { useState } from 'react'\nimport {\n  useSocket,\n  useSocketListener,\n  ServerToClientPayload,\n} from '@wasp/webSocket'\n\nexport const ChatPage = () => {\n  const [messageText, setMessageText] = useState<\n    // We are using a helper type to get the payload type for the \"chatMessage\" event.\n    ClientToServerPayload<'chatMessage'>\n  >('')\n  const [messages, setMessages] = useState<\n    ServerToClientPayload<'chatMessage'>[]\n  >([])\n  // The \"socket\" instance is typed with the types you defined on the server.\n  const { socket, isConnected } = useSocket()\n\n  // This is a type-safe event handler: \"chatMessage\" event and its payload type\n  // are defined on the server.\n  useSocketListener('chatMessage', logMessage)\n\n  function logMessage(msg: ServerToClientPayload<'chatMessage'>) {\n    setMessages((priorMessages) => [msg, ...priorMessages])\n  }\n\n  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {\n    e.preventDefault()\n    // This is a type-safe event emitter: \"chatMessage\" event and its payload type\n    // are defined on the server.\n    socket.emit('chatMessage', messageText)\n    setMessageText('')\n  }\n\n  const messageList = messages.map((msg) => (\n    <li key={msg.id}>\n      <em>{msg.username}</em>: {msg.text}\n    </li>\n  ))\n  const connectionIcon = isConnected ? '\ud83d\udfe2' : '\ud83d\udd34'\n\n  return (\n    <>\n      <h2>Chat {connectionIcon}</h2>\n      <div>\n        <form onSubmit={handleSubmit}>\n          <div>\n            <div>\n              <input\n                type=\"text\"\n                value={messageText}\n                onChange={(e) => setMessageText(e.target.value)}\n              />\n            </div>\n            <div>\n              <button type=\"submit\">Submit</button>\n            </div>\n          </div>\n        </form>\n        <ul>{messageList}</ul>\n      </div>\n    </>\n  )\n}\n")))),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)(r.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-wasp",metastring:"title=todoApp.wasp",title:"todoApp.wasp"},'app todoApp {\n  // ...\n\n  webSocket: {\n    fn: import { webSocketFn } from "@server/webSocket.js",\n    autoConnect: true, // optional, default: true\n  },\n}\n'))),(0,o.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-wasp",metastring:"title=todoApp.wasp",title:"todoApp.wasp"},'app todoApp {\n  // ...\n\n  webSocket: {\n    fn: import { webSocketFn } from "@server/webSocket.js",\n    autoConnect: true, // optional, default: true\n  },\n}\n')))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"webSocket")," dict has the following fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"fn: WebSocketFn")," ",(0,o.kt)(l.aH,{mdxType:"Required"})),(0,o.kt)("p",{parentName:"li"},"The function that defines the WebSocket events and handlers.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"autoConnect: bool")),(0,o.kt)("p",{parentName:"li"},"Whether to automatically connect to the WebSocket server. Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."))))}g.isMDXComponent=!0}}]);