(function(e){function t(t){for(var c,r,i=t[0],s=t[1],l=t[2],d=0,b=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&b.push(a[r][0]),a[r]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);u&&u(t);while(b.length)b.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(c=!1)}c&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var c={},a={app:0},o=[];function r(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=c,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(n,c,function(t){return e[t]}.bind(null,c));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"06fd":function(e,t,n){"use strict";n("6baa")},"1cab":function(e,t,n){},"27a8":function(e,t,n){},5318:function(e,t,n){"use strict";n("1cab")},6973:function(e,t,n){},"6baa":function(e,t,n){},"76a9":function(e,t,n){"use strict";n("c29f")},"788f":function(e,t,n){},"7c33":function(e,t,n){"use strict";n("6973")},c29f:function(e,t,n){},c52b:function(e,t,n){"use strict";n("c8df")},c8df:function(e,t,n){},cacf:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("4160"),n("159b"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),a=(n("b0c0"),{class:"column"}),o={class:"column-header"},r={class:"button-container"},i=Object(c["g"])(" Compile (Ctrl + ⏎) "),s={class:"column"},l={class:"column-header"},u={class:"tab-container"},d=Object(c["h"])("label",{class:"option-label"}," Code: ",-1),b={class:"tab-container"},p=Object(c["h"])("label",{class:"option-label"}," View: ",-1),f={key:1};function O(e,t,n,O,j,v){var m=Object(c["o"])("SelectSample"),h=Object(c["o"])("FontAwesomeIcon"),y=Object(c["o"])("Editor"),g=Object(c["o"])("CodePreview"),S=Object(c["o"])("Loader"),w=Object(c["o"])("Error"),k=Object(c["o"])("SymbolTable"),C=Object(c["o"])("CodeDisplay");return e.isScreenValid?(Object(c["k"])(),Object(c["d"])("main",{key:0,id:"main",onKeydownCapture:t[3]||(t[3]=Object(c["u"])(Object(c["v"])((function(){return e.compile&&e.compile.apply(e,arguments)}),["ctrl","prevent"]),["enter"]))},[Object(c["h"])("section",a,[Object(c["h"])("div",o,[Object(c["h"])("div",r,[Object(c["h"])(m,{setSource:e.setSource},null,8,["setSource"]),Object(c["h"])("button",{onClick:t[1]||(t[1]=function(){return e.attemptCompile&&e.attemptCompile.apply(e,arguments)}),ref:"compileButton",class:"actionable"},[Object(c["h"])("span",null,[Object(c["h"])(h,{icon:"cog",class:"icon"}),i])],512)])]),(Object(c["k"])(),Object(c["d"])(c["b"],null,[e.isEditable?(Object(c["k"])(),Object(c["d"])(y,{key:0,"initial-content":e.initialSource,modelValue:e.source,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.source=t})},null,8,["initial-content","modelValue"])):(Object(c["k"])(),Object(c["d"])(g,{key:1,content:e.source},null,8,["content"]))],1024))]),Object(c["h"])("section",s,[Object(c["h"])("div",l,[Object(c["h"])("div",u,[d,(Object(c["k"])(!0),Object(c["d"])(c["a"],null,Object(c["n"])(e.codeOptions,(function(t){return Object(c["k"])(),Object(c["d"])("button",{key:t.name,onClick:function(n){return e.selectedCodeOption=t.name},class:["tab",{active:t.name===e.selectedCodeOption}]},[Object(c["h"])("span",null,[Object(c["h"])(h,{icon:t.icon,class:"icon"},null,8,["icon"]),Object(c["g"])(" "+Object(c["p"])(t.name),1)])],10,["onClick"])})),128))]),Object(c["h"])("div",b,[p,(Object(c["k"])(!0),Object(c["d"])(c["a"],null,Object(c["n"])(e.displayOptions,(function(t){return Object(c["k"])(),Object(c["d"])("button",{key:t.name,class:["tab",{active:t.name===e.selectedDisplayOption}],onClick:function(n){return e.selectedDisplayOption=t.name}},[Object(c["h"])("span",null,[Object(c["h"])(h,{icon:t.icon,class:"icon"},null,8,["icon"]),Object(c["g"])(" "+Object(c["p"])(t.name),1)])],10,["onClick"])})),128))])]),e.isLoading?(Object(c["k"])(),Object(c["d"])(S,{key:0})):e.hasCompiledSuccessfully?e.showSymbolTable?(Object(c["k"])(),Object(c["d"])(k,{key:2,table:e.symbolTable},null,8,["table"])):e.showGeneratedCode?(Object(c["k"])(),Object(c["d"])(C,{key:3,fullCode:e.compilationStatus.fullCode,userCode:e.compilationStatus.userCode},null,8,["fullCode","userCode"])):Object(c["e"])("",!0):(Object(c["k"])(),Object(c["d"])(w,{key:1,message:e.compilationStatus.message},null,8,["message"]))])],32)):(Object(c["k"])(),Object(c["d"])("h2",f," Laptop (ili barem landscape). "))}n("96cf");var j=n("1da1"),v=Object(c["w"])("data-v-465d4c5a"),m=v((function(e,t,n,a,o,r){return Object(c["t"])((Object(c["k"])(),Object(c["d"])("textarea",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.content=t}),onChange:t[2]||(t[2]=function(t){return e.$emit("update:modelValue",t.target.value)}),onKeydown:t[3]||(t[3]=Object(c["u"])(Object(c["v"])((function(){return e.onTab&&e.onTab.apply(e,arguments)}),["prevent"]),["tab"])),wrap:"off",spellcheck:"false",class:"code-text",placeholder:"Write something..."},null,544)),[[c["s"],e.content]])})),h=Object(c["i"])({name:"Editor",props:{initialContent:{type:String,required:!0}},watch:{initialContent:function(){this.content=this.initialContent,this.$emit("update:modelValue",this.content)}},data:function(){return{content:this.initialContent}},methods:{onTab:function(e){var t=e.target,n=t.value,c=t.selectionStart,a=t.selectionEnd;t.value=n.substring(0,c)+"    "+n.substring(a),t.selectionStart=t.selectionEnd=c+4}}});n("c52b");h.render=m,h.__scopeId="data-v-465d4c5a";var y=h,g=Object(c["w"])("data-v-53c8df38");Object(c["m"])("data-v-53c8df38");var S={class:"info"},w={class:"inspected"},k={class:"symbol-table"},C=Object(c["h"])("div",{class:"table-header"},[Object(c["h"])("div",{class:"table-cell"},"Name"),Object(c["h"])("div",{class:"table-cell"},"Inferred Type"),Object(c["h"])("div",{class:"table-cell"},"Value After Execution (JS)")],-1),T={class:"table-contents"};Object(c["l"])();var E=g((function(e,t,n,a,o,r){return Object(c["k"])(),Object(c["d"])("div",S,[Object(c["h"])("div",w,[Object(c["h"])("span",null,Object(c["p"])(e.inspected),1)]),Object(c["h"])("div",k,[C,Object(c["h"])("div",T,[(Object(c["k"])(!0),Object(c["d"])(c["a"],null,Object(c["n"])(e.tableEntries,(function(n){return Object(c["k"])(),Object(c["d"])("div",{key:n.name,class:"table-row"},[Object(c["h"])("div",{class:"table-cell",onMouseover:function(t){return e.showDetails(n.name)},onMouseout:t[1]||(t[1]=function(){return e.resetDetails&&e.resetDetails.apply(e,arguments)})},Object(c["p"])(n.name),41,["onMouseover"]),Object(c["h"])("div",{class:"table-cell",onMouseover:function(t){return e.showDetails(n.type)},onMouseout:t[2]||(t[2]=function(){return e.resetDetails&&e.resetDetails.apply(e,arguments)})},Object(c["p"])(n.type),41,["onMouseover"]),Object(c["h"])("div",{class:"table-cell",onMouseover:function(t){return e.showDetails(n.value)},onMouseout:t[3]||(t[3]=function(){return e.resetDetails&&e.resetDetails.apply(e,arguments)})},Object(c["p"])(n.value),41,["onMouseover"])])})),128))])])])})),x=(n("d81d"),n("4fad"),n("3835")),D=(n("a15b"),n("53ca")),_=n("109d");function L(e,t){return{name:e,type:Object(_["showScheme"])(t.scheme),value:M(t.value)}}function M(e){switch(Object(D["a"])(e)){case"object":return String(Array.isArray(e)?"[".concat(e.map(M).join(", "),"]"):e);case"boolean":case"number":case"undefined":case"symbol":case"bigint":return String(e);case"string":return'"'.concat(e,'"');case"function":return"λ";default:return"Default"}}var V,R="Hover over a truncated field in the table to get full info",I=100,B=Object(c["i"])({name:"SymbolTable",data:function(){return{inspected:R}},props:{table:{type:Object,required:!0}},computed:{tableEntries:function(){return Object.entries(this.table).map((function(e){var t=Object(x["a"])(e,2),n=t[0],c=t[1];return L(n,c)}))}},methods:{showDetails:function(e){clearTimeout(V),this.inspected=e},resetDetails:function(){var e=this;V=setTimeout((function(){e.inspected=R}),I)}}});n("ddf2");B.render=E,B.__scopeId="data-v-53c8df38";var P,q=B,A=(n("99af"),n("4de4"),n("caad"),n("13d5"),n("07ac"),n("2532"),n("ade3")),G=n("5530"),z=n("c27e"),F=n("5c43"),H=n("f313"),N=n("62ca"),U=n("6c84");(function(e){e[e["Loading"]=0]="Loading",e[e["Success"]=1]="Success",e[e["Error"]=2]="Error"})(P||(P={}));var J={state:P.Loading};function $(e){var t=Object(z["compileVerbose"])(e);if(!Object(F["isSuccess"])(t))return{state:P.Error,message:t.error};var n=t.value,c=n.types,a=n.code;try{var o=K(c,a);return{state:P.Success,userSymbolTable:o,userCode:Object(N["separateBuiltins"])(a)[1],fullCode:a}}catch(r){return{state:P.Error,message:"Execution error: ".concat(r.message,".")}}}function K(e,t){return Object.entries(e).filter((function(e){var t=Object(x["a"])(e,1),n=t[0];return!Object.values(H["BuiltinName"]).includes(n)})).reduce((function(e,n){var c=Object(x["a"])(n,2),a=c[0],o=c[1];return Object(G["a"])(Object(G["a"])({},e),{},Object(A["a"])({},a,{value:W(t,a),scheme:o}))}),{})}function W(e,t){var n="".concat(e,"\nreturn ").concat(Object(U["validJsName"])(t));return new Function(n)()}var Q=Object(c["w"])("data-v-5a0df97c");Object(c["m"])("data-v-5a0df97c");var X={class:"error-container"},Y={class:"error-info"},Z={class:"error"};Object(c["l"])();var ee=Q((function(e,t,n,a,o,r){var i=Object(c["o"])("FontAwesomeIcon");return Object(c["k"])(),Object(c["d"])("div",X,[Object(c["h"])("div",Y,[Object(c["h"])(i,{icon:"exclamation-triangle",class:"icon"}),Object(c["h"])("div",Z,Object(c["p"])(e.message),1)])])})),te=Object(c["i"])({name:"ErrorDisplay",props:{message:{type:String,required:!0}}});n("5318");te.render=ee,te.__scopeId="data-v-5a0df97c";var ne=te,ce=Object(c["w"])("data-v-5e404a6c");Object(c["m"])("data-v-5e404a6c");var ae={class:"code-display"},oe={class:"options-container"},re={for:"builtin-toggle"};Object(c["l"])();var ie=ce((function(e,t,n,a,o,r){return Object(c["k"])(),Object(c["d"])("div",ae,[Object(c["h"])("pre",{class:"code-text code-container",innerHTML:e.highlightedCode},null,8,["innerHTML"]),Object(c["h"])("div",oe,[Object(c["h"])("label",re,Object(c["p"])(e.builtinToggleText),1),Object(c["t"])(Object(c["h"])("input",{id:"builtin-toggle",type:"checkbox","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.showBuiltins=t}),name:"Show builtins"},null,512),[[c["q"],e.showBuiltins]])])])})),se=n("c197"),le=n.n(se),ue=Object(c["i"])({name:"CodeDisplay",props:{fullCode:{type:String,required:!0},userCode:{type:String,required:!0}},data:function(){return{showBuiltins:!1}},computed:{highlightedCode:function(){return le.a.highlight(this.code,le.a.languages.javascript,"javascript")},code:function(){return this.showBuiltins?this.fullCode:this.userCode},builtinToggleText:function(){return this.showBuiltins?"Hide builtins":"Show builtins"}}});n("76a9");ue.render=ie,ue.__scopeId="data-v-5e404a6c";var de=ue,be=Object(c["w"])("data-v-cd8a7cce");Object(c["m"])("data-v-cd8a7cce");var pe={class:"reading-container"};Object(c["l"])();var fe=be((function(e,t,n,a,o,r){return Object(c["k"])(),Object(c["d"])("div",pe,[(Object(c["k"])(!0),Object(c["d"])(c["a"],null,Object(c["n"])(e.sections,(function(e,t){var n=Object(x["a"])(e,2),a=n[0],o=n[1];return Object(c["k"])(),Object(c["d"])("pre",{key:t,class:["code-text",{"non-comment":!a}]},Object(c["p"])(o),3)})),128))])}));n("ac1f"),n("1276"),n("2ca0"),n("498a"),n("eee7");function Oe(e,t){if(!e.length)return[];var n=t(e[0]),c=[],a=[];return e.forEach((function(e){var o=t(e);o===n?c.push(e):(a.push([n,c]),n=o,c=[e])})),c.length&&a.push([n,c]),a}var je="//";function ve(e){var t=e.substring(je.length).trimStart();return t}var me=Object(c["i"])({name:"CodePreview",props:{content:{type:String,required:!0}},computed:{lines:function(){return this.content.split("\n")},sections:function(){return Oe(this.lines,(function(e){return e.startsWith(je)})).map((function(e){var t=Object(x["a"])(e,2),n=t[0],c=t[1];return[n,n?c.map((function(e){return ve(e)})):c]})).map((function(e){var t=Object(x["a"])(e,2),n=t[0],c=t[1];return[n,c.join("\n")]})).map((function(e){var t=Object(x["a"])(e,2),n=t[0],c=t[1];return[n,c.trim()]})).filter((function(e){var t=Object(x["a"])(e,2),n=(t[0],t[1]);return 0!==n.length}))}}});n("d36c");me.render=fe,me.__scopeId="data-v-cd8a7cce";var he=me,ye=Object(c["w"])("data-v-1e4abc47");Object(c["m"])("data-v-1e4abc47");var ge=Object(c["h"])("label",{for:"select-sample",class:"option-label"}," Select sample to edit: ",-1);Object(c["l"])();var Se=ye((function(e,t,n,a,o,r){return Object(c["k"])(),Object(c["d"])(c["a"],null,[ge,Object(c["t"])(Object(c["h"])("select",{id:"select-sample","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.selected=t}),onChange:t[2]||(t[2]=function(){return e.selectSample&&e.selectSample.apply(e,arguments)})},[(Object(c["k"])(!0),Object(c["d"])(c["a"],null,Object(c["n"])(e.sampleNames,(function(e){return Object(c["k"])(),Object(c["d"])("option",{key:e,value:e},Object(c["p"])(e),9,["value"])})),128))],544),[[c["r"],e.selected]])],64)}));n("b64b"),n("d3b7");function we(){return ke.apply(this,arguments)}function ke(){return ke=Object(j["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("./samples.json");case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)}))),ke.apply(this,arguments)}var Ce="intro",Te=Object(c["i"])({name:"SelectSample",props:{setSource:{type:Function,required:!0}},data:function(){return{selected:Ce,samples:{}}},created:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,we();case 2:n=t.sent,e.samples=n.reduce((function(e,t){return Object(G["a"])(Object(G["a"])({},e),{},Object(A["a"])({},t.name,t.code))}),{}),e.setSelectedSample(Ce);case 5:case"end":return t.stop()}}),t)})))()},computed:{sampleNames:function(){return Object.keys(this.samples)}},methods:{setSelectedSample:function(e){this.setSource(this.samples[e])},selectSample:function(e){var t=e.target.value;this.setSelectedSample(t)}}});n("06fd");Te.render=Se,Te.__scopeId="data-v-1e4abc47";var Ee=Te,xe=Object(c["w"])("data-v-79557f4a");Object(c["m"])("data-v-79557f4a");var De={class:"loader-container"},_e=Object(c["f"])('<div class="loader-info" data-v-79557f4a><div class="gears" data-v-79557f4a><div class="fulcrum" data-v-79557f4a></div><div class="shaft shaft-1" data-v-79557f4a></div><div class="shaft shaft-2" data-v-79557f4a></div><div class="shaft shaft-3" data-v-79557f4a></div><div class="shaft shaft-4" data-v-79557f4a></div></div><div class="text" data-v-79557f4a> Compiling </div></div>',1);Object(c["l"])();var Le=xe((function(e,t,n,a,o,r){return Object(c["k"])(),Object(c["d"])("div",De,[_e])})),Me=Object(c["i"])({name:"Loader"});n("da39");Me.render=Le,Me.__scopeId="data-v-79557f4a";var Ve,Re,Ie=Me;(function(e){e["Edit"]="Edit",e["Read"]="Read"})(Ve||(Ve={})),function(e){e["SymbolTable"]="Symbol Table",e["GeneratedCode"]="Generated Code"}(Re||(Re={}));var Be="",Pe={initialSource:Be,source:Be,showBuiltins:!1,compilationStatus:$(Be),displayOptions:[{name:Re.SymbolTable,icon:"list"},{name:Re.GeneratedCode,icon:"code"}],selectedDisplayOption:Re.SymbolTable,codeOptions:[{name:Ve.Edit,icon:"edit"},{name:Ve.Read,icon:"book"}],selectedCodeOption:Ve.Read,isScreenValid:qe()};function qe(){return window.innerWidth>window.innerHeight}var Ae=Object(c["i"])({name:"App",created:function(){var e=this;document.addEventListener("keydown",(function(t){t.ctrlKey&&"Enter"===t.key&&e.$refs.compileButton.click()}))},mounted:function(){var e=this;this.$nextTick((function(){window.addEventListener("resize",e.onResize)}))},beforeUnmount:function(){window.removeEventListener("resize",this.onResize)},data:function(){return Pe},computed:{hasCompiledSuccessfully:function(){return this.compilationStatus.state===P.Success},isLoading:function(){return this.compilationStatus.state===P.Loading},symbolTable:function(){var e=this.compilationStatus.userSymbolTable;return e},showGeneratedCode:function(){return this.selectedDisplayOption===Re.GeneratedCode},showSymbolTable:function(){return this.selectedDisplayOption===Re.SymbolTable},isEditable:function(){return this.selectedCodeOption===Ve.Edit}},methods:{attemptCompile:function(){this.isLoading||this.compile()},compile:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.compilationStatus=J,setTimeout((function(){e.compilationStatus=$(e.source)}),20);case 2:case"end":return t.stop()}}),t)})))()},setSource:function(e){this.source=e,this.initialSource=e,this.compile()},onResize:function(){this.isScreenValid=qe()}},components:{Editor:y,SymbolTable:q,Error:ne,CodeDisplay:de,Loader:Ie,SelectSample:Ee,CodePreview:he}});n("7c33");Ae.render=O;var Ge=Ae,ze=n("ecee"),Fe=n("c074"),He=n("ad3d");[Fe["e"],Fe["b"],Fe["f"],Fe["c"],Fe["d"],Fe["a"]].forEach((function(e){return ze["c"].add(e)})),Object(c["c"])(Ge).component("FontAwesomeIcon",He["a"]).mount("#app")},d36c:function(e,t,n){"use strict";n("cacf")},da39:function(e,t,n){"use strict";n("27a8")},ddf2:function(e,t,n){"use strict";n("788f")}});
//# sourceMappingURL=app.5986ed64.js.map