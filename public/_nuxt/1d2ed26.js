(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{510:function(e,t,r){"use strict";r(11),r(12),r(20),r(21);var n=r(2),o=(r(4),r(24),r(14),r(25),r(47),r(495),r(43),r(496),r(497),r(498),r(499),r(500),r(501),r(502),r(503),r(504),r(505),r(506),r(507),r(508),r(45),r(44),r(13),r(71),r(303),r(0)),c=r(62),f=r(1);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=["sm","md","lg","xl"],O=v.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{}),h=v.reduce((function(e,t){return e["offset"+Object(f.w)(t)]={type:[String,Number],default:null},e}),{}),m=v.reduce((function(e,t){return e["order"+Object(f.w)(t)]={type:[String,Number],default:null},e}),{}),y={col:Object.keys(O),offset:Object.keys(h),order:Object.keys(m)};function j(e,t,r){var n=e;if(null!=r&&!1!==r){if(t){var o=t.replace(e,"");n+="-".concat(o)}return"col"!==e||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var k=new Map;t.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},O),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},m),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var r=t.props,data=t.data,o=t.children,f=(t.parent,"");for(var l in r)f+=String(r[l]);var d=k.get(f);if(!d){var v;for(v in d=[],y)y[v].forEach((function(e){var t=r[e],n=j(v,e,t);n&&d.push(n)}));var O=d.some((function(e){return e.startsWith("col-")}));d.push(Object(n.a)(Object(n.a)(Object(n.a)(Object(n.a)({col:!O||!r.cols},"col-".concat(r.cols),r.cols),"offset-".concat(r.offset),r.offset),"order-".concat(r.order),r.order),"align-self-".concat(r.alignSelf),r.alignSelf)),k.set(f,d)}return e(r.tag,Object(c.a)(data,{class:d}),o)}})},585:function(e,t,r){"use strict";r.r(t);var n=r(558),o=r(510),c=r(559),f=r(489),l=(r(14),r(11),r(12),r(4),r(20),r(13),r(21),r(2)),d=r(78);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){Object(l.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h={middleware:"authenticated",head:{title:"Crear tu código de referidos - Mad Fénix",meta:[{hid:"description",name:"description",content:"Login en Mad Fénix."}]},data:function(){return{referred:{referred_code_from:""}}},computed:{serverMessage:function(){return this.$store.state.serverMessage.serverMessage},user:function(){return this.$store.state.user.user},token:function(){return this.$store.state.user.token}},mounted:function(){this.setUserCookies(),this.$axios.setToken(this.token,"Bearer")},methods:O(O({afterCreateReferred:function(e){this.$router.push("/perfil")},linkReferred:function(){var e=this;this.$axios.post("/api/profile/setUserProfileReferredCodeFrom",this.referred).then((function(t){return e.afterCreateReferred(t)})).catch((function(t){return t.response.data.message?"The given data was invalid."===t.response.data.message?e.setServerMessage("Datos inválidos."):e.setServerMessage(t.response.data.message):e.setServerMessage(t.response.data)}))},setUserCookies:function(){var e=this.$cookies.get("token");if(e){this.setToken(e);var t=this.$cookies.get("user");if(t)this.updateUser(t);else{console.log("test");try{this.fetchUser()}catch(e){}}}}},Object(d.b)({setServerMessage:"serverMessage/setServerMessage",setToken:"user/setToken",updateUser:"user/updateUser",fetchUser:"user/fetchUser"})),Object(d.c)({updateUser:"user/updateUser"}))},m=r(38),component=Object(m.a)(h,(function(){var e=this,t=e._self._c;return t(n.a,[t("CtCard",{staticClass:"mx-auto",attrs:{title:"Vincular código de referido",width:"300"}},[t(c.a,{attrs:{dense:""}},[t(o.a,{staticClass:"mt-5",attrs:{cols:"12"}},[t("CtTextField",{attrs:{"append-icon":"mdi-ticket",label:"Código de referido"},model:{value:e.referred.referred_code_from,callback:function(t){e.$set(e.referred,"referred_code_from",t)},expression:"referred.referred_code_from"}})],1),e._v(" "),e.serverMessage?t(o.a,{staticClass:"error--text",attrs:{cols:"12"},domProps:{innerHTML:e._s(e.serverMessage)}}):e._e(),e._v(" "),t(o.a,{attrs:{cols:"12"}},[t("CtBtn",{attrs:{type:"primary",block:""},on:{click:function(t){return e.linkReferred()}}},[e._v("\n          Vincular\n        ")])],1),e._v(" "),t(o.a,{staticClass:"my-5",attrs:{cols:"12"}},[t("CtBtn",{attrs:{to:"/perfil",type:"accent",block:""}},[e._v("\n          Perfil\n        ")])],1)],1)],1),e._v(" "),t(c.a,{attrs:{dense:""}},[t(f.a),e._v(" "),t(o.a,{staticClass:"mb-5 text-center mt-5",attrs:{cols:"6"}},[e._v("\n      Cuando vinculas tu código de refereido obtienes 5 oros. También apoyas al referido que vinculas.\n    ")]),e._v(" "),t(f.a)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);