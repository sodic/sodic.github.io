(function(e){function t(t){for(var c,i,r=t[0],s=t[1],l=t[2],d=0,b=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&b.push(a[i][0]),a[i]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);u&&u(t);while(b.length)b.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(c=!1)}c&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var c={},a={app:0},o=[];function i(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=c,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"00f6":function(e,t,n){"use strict";n("f6bf")},"061d":function(e,t,n){},"06fd":function(e,t,n){"use strict";n("6baa")},"1cab":function(e,t,n){},2005:function(e,t,n){},"27a8":function(e,t,n){},"34ab":function(e,t,n){"use strict";n("2005")},5318:function(e,t,n){"use strict";n("1cab")},"6baa":function(e,t,n){},"7fb6":function(e,t,n){"use strict";n("cf54")},8655:function(e,t,n){},af12:function(e,t,n){"use strict";n("8655")},b22c:function(e,t,n){"use strict";n("061d")},cd49:function(e,t,n){"use strict";n.r(t);n("4160"),n("159b"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),a=(n("b0c0"),{class:"column"}),o={class:"column-header"},i={class:"button-container"},r=Object(c["g"])(" Compile (Ctrl + ⏎) "),s={class:"column"},l={class:"column-header"},u={class:"tab-container"},d=Object(c["h"])("label",{class:"option-label"}," Code: ",-1),b={class:"tab-container"},f=Object(c["h"])("label",{class:"option-label"}," View: ",-1);function p(e,t,n,p,O,j){var v=Object(c["o"])("SelectSample"),m=Object(c["o"])("FontAwesomeIcon"),h=Object(c["o"])("Editor"),y=Object(c["o"])("CodePreview"),g=Object(c["o"])("Loader"),S=Object(c["o"])("Error"),w=Object(c["o"])("SymbolTable"),k=Object(c["o"])("CodeDisplay");return Object(c["k"])(),Object(c["d"])("main",{id:"main",onKeydownCapture:t[3]||(t[3]=Object(c["u"])(Object(c["v"])((function(){return e.compile&&e.compile.apply(e,arguments)}),["ctrl","prevent"]),["enter"]))},[Object(c["h"])("section",a,[Object(c["h"])("div",o,[Object(c["h"])("div",i,[Object(c["h"])(v,{setSource:e.setSource},null,8,["setSource"]),Object(c["h"])("button",{onClick:t[1]||(t[1]=function(){return e.attemptCompile&&e.attemptCompile.apply(e,arguments)}),class:"actionable"},[Object(c["h"])("span",null,[Object(c["h"])(m,{icon:"cog",class:"icon"}),r])])])]),(Object(c["k"])(),Object(c["d"])(c["b"],null,[e.isEditable?(Object(c["k"])(),Object(c["d"])(h,{key:0,"initial-content":e.initialSource,modelValue:e.source,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.source=t})},null,8,["initial-content","modelValue"])):(Object(c["k"])(),Object(c["d"])(y,{key:1,content:e.source},null,8,["content"]))],1024))]),Object(c["h"])("section",s,[Object(c["h"])("div",l,[Object(c["h"])("div",u,[d,(Object(c["k"])(!0),Object(c["d"])(c["a"],null,Object(c["n"])(e.codeOptions,(function(t){return Object(c["k"])(),Object(c["d"])("button",{key:t.name,onClick:function(n){return e.selectedCodeOption=t.name},class:["tab",{active:t.name===e.selectedCodeOption}]},[Object(c["h"])("span",null,[Object(c["h"])(m,{icon:t.icon,class:"icon"},null,8,["icon"]),Object(c["g"])(" "+Object(c["p"])(t.name),1)])],10,["onClick"])})),128))]),Object(c["h"])("div",b,[f,(Object(c["k"])(!0),Object(c["d"])(c["a"],null,Object(c["n"])(e.displayOptions,(function(t){return Object(c["k"])(),Object(c["d"])("button",{key:t.name,class:["tab",{active:t.name===e.selectedDisplayOption}],onClick:function(n){return e.selectedDisplayOption=t.name}},[Object(c["h"])("span",null,[Object(c["h"])(m,{icon:t.icon,class:"icon"},null,8,["icon"]),Object(c["g"])(" "+Object(c["p"])(t.name),1)])],10,["onClick"])})),128))])]),e.isLoading?(Object(c["k"])(),Object(c["d"])(g,{key:0})):e.hasCompiledSuccessfully?e.showSymbolTable?(Object(c["k"])(),Object(c["d"])(w,{key:2,table:e.symbolTable},null,8,["table"])):e.showGeneratedCode?(Object(c["k"])(),Object(c["d"])(k,{key:3,fullCode:e.compilationStatus.fullCode,userCode:e.compilationStatus.userCode},null,8,["fullCode","userCode"])):Object(c["e"])("",!0):(Object(c["k"])(),Object(c["d"])(S,{key:1,message:e.compilationStatus.message},null,8,["message"]))])],32)}var O=Object(c["w"])("data-v-4238f4bc"),j=O((function(e,t,n,a,o,i){return Object(c["t"])((Object(c["k"])(),Object(c["d"])("textarea",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.content=t}),onChange:t[2]||(t[2]=function(t){return e.$emit("update:modelValue",t.target.value)}),onKeydown:t[3]||(t[3]=Object(c["u"])(Object(c["v"])((function(){return e.onTab&&e.onTab.apply(e,arguments)}),["prevent"]),["tab"])),wrap:"off",spellcheck:"false",class:"code-text",placeholder:"Write something..."},null,544)),[[c["s"],e.content]])})),v=Object(c["i"])({name:"Editor",props:{initialContent:{type:String,required:!0}},watch:{initialContent:function(){this.content=this.initialContent,this.$emit("update:modelValue",this.content)}},data:function(){return{content:this.initialContent}},methods:{onTab:function(e){var t=e.target,n=t.value,c=t.selectionStart,a=t.selectionEnd;t.value=n.substring(0,c)+"    "+n.substring(a),t.selectionStart=t.selectionEnd=c+4}}});n("af12");v.render=j,v.__scopeId="data-v-4238f4bc";var m=v,h=Object(c["w"])("data-v-29b4ae2b");Object(c["m"])("data-v-29b4ae2b");var y={class:"info"},g={class:"inspected"},S={class:"symbol-table"},w=Object(c["h"])("div",{class:"table-header"},[Object(c["h"])("div",{class:"table-cell"},"Name"),Object(c["h"])("div",{class:"table-cell"},"Inferred Type"),Object(c["h"])("div",{class:"table-cell"},"Value After Execution (JS)")],-1),k={class:"table-contents"};Object(c["l"])();var C=h((function(e,t,n,a,o,i){return Object(c["k"])(),Object(c["d"])("div",y,[Object(c["h"])("div",g,[Object(c["h"])("span",null,Object(c["p"])(e.inspected),1)]),Object(c["h"])("div",S,[w,Object(c["h"])("div",k,[(Object(c["k"])(!0),Object(c["d"])(c["a"],null,Object(c["n"])(e.tableEntries,(function(n){return Object(c["k"])(),Object(c["d"])("div",{key:n.name,class:"table-row"},[Object(c["h"])("div",{class:"table-cell",onMouseover:function(t){return e.showDetails(n.name)},onMouseout:t[1]||(t[1]=function(){return e.resetDetails&&e.resetDetails.apply(e,arguments)})},Object(c["p"])(n.name),41,["onMouseover"]),Object(c["h"])("div",{class:"table-cell",onMouseover:function(t){return e.showDetails(n.type)},onMouseout:t[2]||(t[2]=function(){return e.resetDetails&&e.resetDetails.apply(e,arguments)})},Object(c["p"])(n.type),41,["onMouseover"]),Object(c["h"])("div",{class:"table-cell",onMouseover:function(t){return e.showDetails(n.value)},onMouseout:t[3]||(t[3]=function(){return e.resetDetails&&e.resetDetails.apply(e,arguments)})},Object(c["p"])(n.value),41,["onMouseover"])])})),128))])])])})),T=(n("d81d"),n("4fad"),n("3835")),E=(n("a15b"),n("53ca")),D=n("109d");function x(e,t){return{name:e,type:Object(D["showScheme"])(t.scheme),value:_(t.value)}}function _(e){switch(Object(E["a"])(e)){case"object":return String(Array.isArray(e)?"[".concat(e.map(_).join(", "),"]"):e);case"boolean":case"number":case"undefined":case"symbol":case"bigint":return String(e);case"string":return'"'.concat(e,'"');case"function":return"λ";default:return"Default"}}var M,L="Hover over a truncated field in the table to get full info",I=100,V=Object(c["i"])({name:"SymbolTable",data:function(){return{inspected:L}},props:{table:{type:Object,required:!0}},computed:{tableEntries:function(){return Object.entries(this.table).map((function(e){var t=Object(T["a"])(e,2),n=t[0],c=t[1];return x(n,c)}))}},methods:{showDetails:function(e){clearTimeout(M),this.inspected=e},resetDetails:function(){var e=this;M=setTimeout((function(){e.inspected=L}),I)}}});n("b22c");V.render=C,V.__scopeId="data-v-29b4ae2b";var P,q=V,B=(n("99af"),n("4de4"),n("caad"),n("13d5"),n("07ac"),n("2532"),n("ade3")),R=n("5530"),A=n("c27e"),G=n("5c43"),F=n("f313"),N=n("62ca"),H=n("6c84");(function(e){e[e["Loading"]=0]="Loading",e[e["Success"]=1]="Success",e[e["Error"]=2]="Error"})(P||(P={}));var J={state:P.Loading};function U(e){var t=Object(A["compileVerbose"])(e);if(Object(G["isSuccess"])(t)){var n=t.value,c=n.types,a=n.code,o=K(c,a);return{state:P.Success,userSymbolTable:o,userCode:Object(N["separateBuiltins"])(a)[1],fullCode:a}}return{state:P.Error,message:t.error}}function K(e,t){return Object.entries(e).filter((function(e){var t=Object(T["a"])(e,1),n=t[0];return!Object.values(F["BuiltinName"]).includes(n)})).reduce((function(e,n){var c=Object(T["a"])(n,2),a=c[0],o=c[1];return Object(R["a"])(Object(R["a"])({},e),{},Object(B["a"])({},a,{value:W(t,a),scheme:o}))}),{})}function W(e,t){var n="".concat(e,"\nreturn ").concat(Object(H["validJsName"])(t));return new Function(n)()}var $=Object(c["w"])("data-v-5a0df97c");Object(c["m"])("data-v-5a0df97c");var z={class:"error-container"},Q={class:"error-info"},X={class:"error"};Object(c["l"])();var Y=$((function(e,t,n,a,o,i){var r=Object(c["o"])("FontAwesomeIcon");return Object(c["k"])(),Object(c["d"])("div",z,[Object(c["h"])("div",Q,[Object(c["h"])(r,{icon:"exclamation-triangle",class:"icon"}),Object(c["h"])("div",X,Object(c["p"])(e.message),1)])])})),Z=Object(c["i"])({name:"ErrorDisplay",props:{message:{type:String,required:!0}}});n("5318");Z.render=Y,Z.__scopeId="data-v-5a0df97c";var ee=Z,te=Object(c["w"])("data-v-efdc7918");Object(c["m"])("data-v-efdc7918");var ne={class:"code-display"},ce={class:"options-container"},ae={for:"builtin-toggle"};Object(c["l"])();var oe=te((function(e,t,n,a,o,i){return Object(c["k"])(),Object(c["d"])("div",ne,[Object(c["h"])("pre",{class:"code-text code-container",innerHTML:e.highlightedCode},null,8,["innerHTML"]),Object(c["h"])("div",ce,[Object(c["h"])("label",ae,Object(c["p"])(e.builtinToggleText),1),Object(c["t"])(Object(c["h"])("input",{id:"builtin-toggle",type:"checkbox","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.showBuiltins=t}),name:"Show builtins"},null,512),[[c["q"],e.showBuiltins]])])])})),ie=n("c197"),re=n.n(ie),se=Object(c["i"])({name:"CodeDisplay",props:{fullCode:{type:String,required:!0},userCode:{type:String,required:!0}},data:function(){return{showBuiltins:!1}},computed:{highlightedCode:function(){return re.a.highlight(this.code,re.a.languages.javascript,"javascript")},code:function(){return this.showBuiltins?this.fullCode:this.userCode},builtinToggleText:function(){return this.showBuiltins?"Hide builtins":"Show builtins"}}});n("34ab");se.render=oe,se.__scopeId="data-v-efdc7918";var le=se,ue=Object(c["w"])("data-v-3164f798");Object(c["m"])("data-v-3164f798");var de={class:"reading-container"};Object(c["l"])();var be=ue((function(e,t,n,a,o,i){return Object(c["k"])(),Object(c["d"])("div",de,[(Object(c["k"])(!0),Object(c["d"])(c["a"],null,Object(c["n"])(e.sections,(function(e,t){var n=Object(T["a"])(e,2),a=n[0],o=n[1];return Object(c["k"])(),Object(c["d"])("pre",{key:t,class:["code-text",{"non-comment":!a}]},Object(c["p"])(o),3)})),128))])}));n("ac1f"),n("1276"),n("2ca0"),n("498a"),n("eee7");function fe(e,t){if(!e.length)return[];var n=t(e[0]),c=[],a=[];return e.forEach((function(e){var o=t(e);o===n?c.push(e):(a.push([n,c]),n=o,c=[e])})),c.length&&a.push([n,c]),a}var pe="//";function Oe(e){var t=e.substring(pe.length).trimStart();return t}var je=Object(c["i"])({name:"CodePreview",props:{content:{type:String,required:!0}},computed:{lines:function(){return this.content.split("\n")},sections:function(){return fe(this.lines,(function(e){return e.startsWith(pe)})).map((function(e){var t=Object(T["a"])(e,2),n=t[0],c=t[1];return[n,n?c.map((function(e){return Oe(e)})):c]})).map((function(e){var t=Object(T["a"])(e,2),n=t[0],c=t[1];return[n,c.join("\n")]})).map((function(e){var t=Object(T["a"])(e,2),n=t[0],c=t[1];return[n,c.trim()]})).filter((function(e){var t=Object(T["a"])(e,2),n=(t[0],t[1]);return 0!==n.length}))}}});n("00f6");je.render=be,je.__scopeId="data-v-3164f798";var ve=je,me=Object(c["w"])("data-v-1e4abc47");Object(c["m"])("data-v-1e4abc47");var he=Object(c["h"])("label",{for:"select-sample",class:"option-label"}," Select sample to edit: ",-1);Object(c["l"])();var ye=me((function(e,t,n,a,o,i){return Object(c["k"])(),Object(c["d"])(c["a"],null,[he,Object(c["t"])(Object(c["h"])("select",{id:"select-sample","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.selected=t}),onChange:t[2]||(t[2]=function(){return e.selectSample&&e.selectSample.apply(e,arguments)})},[(Object(c["k"])(!0),Object(c["d"])(c["a"],null,Object(c["n"])(e.sampleNames,(function(e){return Object(c["k"])(),Object(c["d"])("option",{key:e,value:e},Object(c["p"])(e),9,["value"])})),128))],544),[[c["r"],e.selected]])],64)})),ge=(n("b64b"),n("d3b7"),n("96cf"),n("1da1"));function Se(){return we.apply(this,arguments)}function we(){return we=Object(ge["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("./samples.json");case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)}))),we.apply(this,arguments)}var ke="intro",Ce=Object(c["i"])({name:"SelectSample",props:{setSource:{type:Function,required:!0}},data:function(){return{selected:ke,samples:{}}},created:function(){var e=this;return Object(ge["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Se();case 2:n=t.sent,e.samples=n.reduce((function(e,t){return Object(R["a"])(Object(R["a"])({},e),{},Object(B["a"])({},t.name,t.code))}),{}),e.setSelectedSample(ke);case 5:case"end":return t.stop()}}),t)})))()},computed:{sampleNames:function(){return Object.keys(this.samples)}},methods:{setSelectedSample:function(e){this.setSource(this.samples[e])},selectSample:function(e){var t=e.target.value;this.setSelectedSample(t)}}});n("06fd");Ce.render=ye,Ce.__scopeId="data-v-1e4abc47";var Te=Ce,Ee=Object(c["w"])("data-v-79557f4a");Object(c["m"])("data-v-79557f4a");var De={class:"loader-container"},xe=Object(c["f"])('<div class="loader-info" data-v-79557f4a><div class="gears" data-v-79557f4a><div class="fulcrum" data-v-79557f4a></div><div class="shaft shaft-1" data-v-79557f4a></div><div class="shaft shaft-2" data-v-79557f4a></div><div class="shaft shaft-3" data-v-79557f4a></div><div class="shaft shaft-4" data-v-79557f4a></div></div><div class="text" data-v-79557f4a> Compiling </div></div>',1);Object(c["l"])();var _e=Ee((function(e,t,n,a,o,i){return Object(c["k"])(),Object(c["d"])("div",De,[xe])})),Me=Object(c["i"])({name:"Loader"});n("da39");Me.render=_e,Me.__scopeId="data-v-79557f4a";var Le,Ie,Ve=Me;(function(e){e["Edit"]="Edit",e["Read"]="Read"})(Le||(Le={})),function(e){e["SymbolTable"]="Symbol Table",e["GeneratedCode"]="Generated Code"}(Ie||(Ie={}));var Pe="",qe={initialSource:Pe,source:Pe,showBuiltins:!1,compilationStatus:U(Pe),displayOptions:[{name:Ie.SymbolTable,icon:"list"},{name:Ie.GeneratedCode,icon:"code"}],selectedDisplayOption:Ie.SymbolTable,codeOptions:[{name:Le.Edit,icon:"edit"},{name:Le.Read,icon:"book"}],selectedCodeOption:Le.Read},Be=Object(c["i"])({name:"App",created:function(){var e=this;document.addEventListener("keydown",(function(t){t.ctrlKey&&"Enter"===t.key&&e.compile()}))},data:function(){return qe},computed:{hasCompiledSuccessfully:function(){return this.compilationStatus.state===P.Success},isLoading:function(){return this.compilationStatus.state===P.Loading},symbolTable:function(){var e=this.compilationStatus.userSymbolTable;return e},showGeneratedCode:function(){return this.selectedDisplayOption===Ie.GeneratedCode},showSymbolTable:function(){return this.selectedDisplayOption===Ie.SymbolTable},isEditable:function(){return this.selectedCodeOption===Le.Edit}},methods:{attemptCompile:function(){this.isLoading||this.compile()},compile:function(){var e=this;this.compilationStatus=J,setTimeout((function(){e.compilationStatus=U(e.source)}),0)},setSource:function(e){this.source=e,this.initialSource=e}},watch:{initialSource:function(){this.compile()}},components:{Editor:m,SymbolTable:q,Error:ee,CodeDisplay:le,Loader:Ve,SelectSample:Te,CodePreview:ve}});n("7fb6");Be.render=p;var Re=Be,Ae=n("ecee"),Ge=n("c074"),Fe=n("ad3d");[Ge["e"],Ge["b"],Ge["f"],Ge["c"],Ge["d"],Ge["a"]].forEach((function(e){return Ae["c"].add(e)})),Object(c["c"])(Re).component("FontAwesomeIcon",Fe["a"]).mount("#app")},cf54:function(e,t,n){},da39:function(e,t,n){"use strict";n("27a8")},f6bf:function(e,t,n){}});
//# sourceMappingURL=app.1bc1b16a.js.map