(function(e){function t(t){for(var o,a,s=t[0],c=t[1],l=t[2],d=0,p=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},3623:function(e,t,n){},4032:function(e,t,n){"use strict";var o=n("3623"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],a={name:"app"},s=a,c=(n("034f"),n("2877")),l=Object(c["a"])(s,r,i,!1,null,null,null),u=l.exports,d=n("5f5b"),p=n("b1e0"),g=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nearly"},[n("b-row",[n("b-col",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],staticClass:"search",attrs:{type:"text",placeholder:"Search..."},domProps:{value:e.searchQuery},on:{input:function(t){t.target.composing||(e.searchQuery=t.target.value)}}})]),n("router-link",{attrs:{to:"/logout.html"}},[e._v("Logout")])],1),e.isMobile()?n("b-row",[e.selected?n("b-col",{staticClass:"scroll"},[e.edit?n("div",[n("div",{staticClass:"d-flex justify-content-around"},[n("b-button",{on:{click:function(t){e.selected=""}}},[e._v(" < Back")]),n("b-button",{on:{click:e.save}},[e._v("Save")]),n("b-button",{on:{click:e.newr}},[e._v("New")])],1),n("h3",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.title,expression:"recipe.title"}],domProps:{value:e.recipe.title},on:{input:function(t){t.target.composing||e.$set(e.recipe,"title",t.target.value)}}})]),n("v-select",{attrs:{options:e.cats,taggable:"","create-option":function(e){return e}},model:{value:e.recipe.category,callback:function(t){e.$set(e.recipe,"category",t)},expression:"recipe.category"}}),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.recipe.body,expression:"recipe.body"}],domProps:{value:e.recipe.body},on:{input:function(t){t.target.composing||e.$set(e.recipe,"body",t.target.value)}}})],1):n("div",[n("div",{staticClass:"d-flex justify-content-around"},[n("b-button",{on:{click:function(t){e.selected=""}}},[e._v(" < Back")]),n("b-button",{on:{click:e.newr}},[e._v("New")]),n("b-button",{on:{click:function(t){e.edit=!0}}},[e._v("Edit")])],1),n("h1",[e._v(e._s(e.recipe.title))]),n("pre",[e._v(e._s(e.recipe.body))])])]):n("b-col",{staticClass:"scroll"},[n("List",{attrs:{items:e.list}})],1)],1):n("b-row",[n("b-col",{staticClass:"scroll",attrs:{sm:"5"}},[n("List",{attrs:{items:e.list},on:{"select-recipe":e.selectrecipe}})],1),n("b-col",{staticClass:"scroll",attrs:{sm:"7"},on:{drop:e.dropHandler}},[n("div",{staticClass:"d-flex justify-content-around"},[n("b-button",{on:{click:e.save}},[e._v("Save")]),n("b-button",{on:{click:e.newr}},[e._v("New")])],1),n("h1",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.title,expression:"recipe.title"}],domProps:{value:e.recipe.title},on:{input:function(t){t.target.composing||e.$set(e.recipe,"title",t.target.value)}}})]),n("v-select",{attrs:{options:e.cats,taggable:"","create-option":function(e){return e}},model:{value:e.recipe.category,callback:function(t){e.$set(e.recipe,"category",t)},expression:"recipe.category"}}),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.recipe.body,expression:"recipe.body"}],attrs:{rows:"30"},domProps:{value:e.recipe.body},on:{input:function(t){t.target.composing||e.$set(e.recipe,"body",t.target.value)}}})],1)],1)],1)},h=[],v=(n("a623"),n("4de4"),n("caad"),n("4fad"),n("c1f9"),n("b64b"),n("d3b7"),n("ac1f"),n("25f0"),n("2532"),n("5319"),n("1276"),n("3835")),m={cognitoInfo:{},token:"",loggedIn:!1,loadingState:!0,errorLoadingState:!1};function b(e){m.loggedIn=e}function y(){m.loggedIn=!1,m.token="",m.cognitoInfo={},console.log("saved lo",m),localStorage.setItem("recipelogin",JSON.stringify(m))}function w(e){m.cognitoInfo=e}function k(e){m.token=e,console.log("saved token",m),localStorage.setItem("recipelogin",JSON.stringify(m))}function S(){m=JSON.parse(localStorage.getItem("recipelogin")),console.log("loaded",m)}function I(){return m.token}var _={state:m,setLoggedIn:b,setLoggedOut:y,setCognitoInfo:w,setToken:k,getToken:I,load:S},O=n("bc3a"),A=n.n(O),C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.categorised,(function(t,o){return n("div",{key:o},[n("h5","undefined"!=o?[e._v(e._s(o))]:[e._v("Uncategorised")]),e._l(t,(function(t){return n("div",{key:t.key,staticClass:"listitem",on:{click:function(n){return e.select(t.key)}}},[t.image?n("img",{attrs:{src:t.image}}):n("img",{attrs:{width:"44",height:"44",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII="}}),e._v(" "+e._s(t.title)+" ")])}))],2)})),0)},x=[],T=(n("d81d"),n("2ef0")),j=n.n(T),L={name:"List",props:{items:{default:{}}},computed:{categorised:function(){var e=j.a.map(this.items,(function(e,t){return e.key=t,e}));return j.a.groupBy(e,"category")}},methods:{select:function(e){this.$root.$emit("select-recipe",e)}}},E=L,P=(n("4032"),Object(c["a"])(E,C,x,!1,null,"28b52086",null)),U=P.exports,N=n("4a7a"),$=n.n(N),Q=(n("6dfc"),{name:"Home",components:{List:U,vSelect:$.a},watch:{searchQuery:function(e){this.recalc(e)},recipe:{handler:function(e){var t=this.selected;""==t&&(t=this.random()),""!=e.title?(this.recipes[t]=JSON.parse(JSON.stringify(e)),this.searchQuery=e.title,this.selected=t,setTimeout(this.reset,1)):this.recipes},deep:!0}},computed:{cats:function(){var e=j.a.keyBy(this.recipes,"category");return Object.keys(e)}},data:function(){return{edit:!1,searchQuery:"",selected:"",list:{},recipe:{title:"",body:"",image:""},recipes:{loading:{category:"",title:"Loading..."}}}},mounted:function(){this.$root.$on("select-recipe",this.selectrecipe),_.load(),this.load(),this.recalc(this.searchQuery)},methods:{random:function(){return(new Date).getTime().toString(16)+"#"+Math.random().toString(36).replace(/[^a-z0-9]+/g,"").substr(0,5)},newr:function(){this.recipe={title:"",body:"",image:""},this.edit=!0},reset:function(){this.searchQuery="",this.recalc("")},recalc:function(e){this.list=e?Object.fromEntries(Object.entries(this.recipes).filter((function(t){var n=Object(v["a"])(t,2),o=n[0],r=n[1];return void 0!=o&&(void 0!=e&&e.toLowerCase().split(" ").every((function(e){return void 0==r.body?r.title.toLowerCase().includes(e):r.title.toLowerCase().includes(e)||r.body.toLowerCase().includes(e)})))}))):this.recipes},selectrecipe:function(e){this.edit=!1,this.selected=e,this.recipe=this.recipes[e],this.recalc(this.searchQuery)},nl2br:function(e){return"<"==e[0]?e:e.replace(/\n+/g,"<br/>\n")},isMobile:function(){return!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},load:function(){var e=this;A.a.get("https://p4z8g78mya.execute-api.eu-west-2.amazonaws.com/prod/recipes",{headers:{Authorization:_.getToken(),"Content-Type":"application/json"}}).then((function(t){e.recipes=t.data,e.recalc(e.searchQuery)})).catch((function(e){console.log("error",e)}))},save:function(){this.edit=!1,A.a.put("https://p4z8g78mya.execute-api.eu-west-2.amazonaws.com/prod/recipes",this.recipes,{headers:{Authorization:_.getToken(),"Content-Type":"application/json"}}).then((function(e){console.log("return",e)})).catch((function(e){console.log("error",e)}))},dropHandler:function(e){var t=this.recipe;void 0!=e.preventDefault&&e.preventDefault();var n=e.dataTransfer.getData("text/html");if(void 0!=n){var o=document.createElement("div");o.innerHTML=n,console.log(o.lastChild.src);var r=new Image;r.crossOrigin="anonymous",r.onload=function(){var e=document.createElement("canvas");e.width=44,e.height=44;var n=e.getContext("2d");n.drawImage(r,0,0,44,44),t.image=e.toDataURL(),console.log(t)},r.src=o.lastChild.src}0!=e.dataTransfer.files.length&&console.log("Dropped:",e.dataTransfer.files[0])}}}),z=Q,M=(n("a3cc"),Object(c["a"])(z,f,h,!1,null,"e4ac8872",null)),B=M.exports,D=n("0a89"),J={getUserInfo:function(){var e=Z.auth.getSignInUserSession().getAccessToken().jwtToken,t="https://"+Z.auth.getAppWebDomain()+"/oauth2/userInfo",n={headers:{Authorization:"Bearer "+e}};return A.a.get(t,n).then((function(e){return e.data}))}},R="60bf861o2iqcauorgqq7t5dkl1",q="recipebook.auth.eu-west-2.amazoncognito.com",H="https://recipe.wizguild.com/oauth.html",K="eu-west-2_KmsrwWT9b",W="https://recipe.wizguild.com/logout.html",V={ClientId:R,AppWebDomain:q,TokenScopesArray:["openid","email"],RedirectUriSignIn:H,RedirectUriSignOut:W,UserPoolId:K},G=new D["a"](V);function F(){var e="CognitoIdentityServiceProvider."+G.getClientId(),t=G.signInUserSession.getAccessToken().getUsername();console.log("TOKEN:",G.signInUserSession.getIdToken().getJwtToken());var n=e+"."+t+".userInfo";return n}G.userhandler={onSuccess:function(e){console.log("On Success result",e),_.setLoggedIn(!0),_.setToken(e.getIdToken().getJwtToken()),J.getUserInfo().then((function(e){ge.push("/")}))},onFailure:function(e){_.setLoggedOut(),ge.go({path:"/error",query:{message:"Login failed due to "+e}})}};var X=new D["b"],Y=X.getStorage(),Z={auth:G,login:function(){G.getSession()},logout:function(){if(G.isUserSignedIn()){var e=this.getUserInfoStorageKey();G.signOut(),Y.removeItem(e)}},getUserInfoStorageKey:F},ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("h2",[e._v("Logged Out successfully")]),n("router-link",{attrs:{to:"/login"}},[e._v("Login")])],1)])},te=[],ne={mounted:function(){}},oe=ne,re=Object(c["a"])(oe,ee,te,!1,null,null,null),ie=re.exports,ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"alert alert-danger"},[e._v(" "+e._s(e.message)+" ")])},se=[],ce={data:function(){return{message:""}},mounted:function(){this.message=this.$route.query.message}},le=ce,ue=Object(c["a"])(le,ae,se,!1,null,null,null),de=ue.exports;function pe(e,t,n){Z.auth.isUserSignedIn()?J.getUserInfo().then((function(e){console.log("LOGIN RESPONSE",e),_.setLoggedIn(!0),_.setCognitoInfo(e),n()})):(_.setLoggedIn(!1),n({path:"/login",query:{redirect:e.fullPath}}))}o["default"].use(g["a"]);var ge=new g["a"]({mode:"history",base:"/",routes:[{path:"/",name:"Home",component:B,beforeEnter:pe},{path:"/login",beforeEnter:function(e,t,n){Z.auth.getSession()}},{path:"/oauth.html",beforeEnter:function(e,t,n){var o=window.location.href;Z.auth.parseCognitoWebResponse(o)}},{path:"/logout.html",component:ie,beforeEnter:function(e,t,n){Z.logout(),n()}},{path:"/error",component:de}]});n("f9e3"),n("2dd8");o["default"].use(d["a"]),o["default"].use(p["a"]),o["default"].config.productionTip=!1,new o["default"]({render:function(e){return e(u)},router:ge}).$mount("#app")},"5f80":function(e,t,n){},"85ec":function(e,t,n){},a3cc:function(e,t,n){"use strict";var o=n("5f80"),r=n.n(o);r.a}});
//# sourceMappingURL=app.449b7aa3.js.map