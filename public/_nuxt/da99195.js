(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{507:function(e,t,r){"use strict";r(11),r(12),r(20),r(21);var n=r(2),o=(r(4),r(24),r(14),r(28),r(44),r(491),r(53),r(492),r(493),r(494),r(495),r(496),r(497),r(498),r(499),r(500),r(501),r(502),r(503),r(504),r(54),r(42),r(13),r(71),r(301),r(0)),c=r(60),l=r(1);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=["sm","md","lg","xl"],O=v.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{}),m=v.reduce((function(e,t){return e["offset"+Object(l.w)(t)]={type:[String,Number],default:null},e}),{}),h=v.reduce((function(e,t){return e["order"+Object(l.w)(t)]={type:[String,Number],default:null},e}),{}),y={col:Object.keys(O),offset:Object.keys(m),order:Object.keys(h)};function j(e,t,r){var n=e;if(null!=r&&!1!==r){if(t){var o=t.replace(e,"");n+="-".concat(o)}return"col"!==e||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var w=new Map;t.a=o.a.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},O),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},h),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var r=t.props,data=t.data,o=t.children,l=(t.parent,"");for(var d in r)l+=String(r[d]);var f=w.get(l);if(!f){var v;for(v in f=[],y)y[v].forEach((function(e){var t=r[e],n=j(v,e,t);n&&f.push(n)}));var O=f.some((function(e){return e.startsWith("col-")}));f.push(Object(n.a)(Object(n.a)(Object(n.a)(Object(n.a)({col:!O||!r.cols},"col-".concat(r.cols),r.cols),"offset-".concat(r.offset),r.offset),"order-".concat(r.order),r.order),"align-self-".concat(r.alignSelf),r.alignSelf)),w.set(l,f)}return e(r.tag,Object(c.a)(data,{class:f}),o)}})},563:function(e,t,r){"use strict";r.r(t);var n=r(554),o=r(507),c=r(555),l=(r(14),r(11),r(12),r(4),r(20),r(13),r(21),r(2)),d=r(77);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){Object(l.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O={head:{title:"Eliminar cuenta - Mad Fénix",meta:[{hid:"description",name:"description",content:"Eliminar cuenta en Mad Fénix."}]},data:function(){return{deleteAccount:{email:"",password:""}}},computed:{serverMessage:function(){return this.$store.state.serverMessage.serverMessage},token:function(){return this.$store.state.user.token}},mounted:function(){this.setUserCookies(),this.$axios.setToken(this.token,"Bearer")},methods:v(v({deleteAccountAction:function(){var e=this;this.$axios.post("/api/deleteAccount",this.deleteAccount).then((function(t){return"Cuenta en proceso de eliminación"===t.data?e.$router.push("/"):e.setServerMessage(t.data)})).catch((function(t){return t.response.data.message?"The given data was invalid."===t.response.data.message?e.setServerMessage("Datos inválidos."):e.setServerMessage(t.response.data.message):e.setServerMessage("Error.")}))},setUserCookies:function(){var e=this.$cookies.get("token");if(e){this.setToken(e);var t=this.$cookies.get("user");if(t)this.updateUser(t);else{console.log("test");try{this.fetchUser()}catch(e){}}}}},Object(d.b)({setServerMessage:"serverMessage/setServerMessage",setToken:"user/setToken",updateUser:"user/updateUser",fetchUser:"user/fetchUser"})),Object(d.c)({updateUser:"user/updateUser"}))},m=r(37),component=Object(m.a)(O,(function(){var e=this,t=e._self._c;return t(n.a,[t("CtCard",{staticClass:"mx-auto",attrs:{title:"Eliminar cuenta",width:"300"}},[t(c.a,{attrs:{dense:""}},[t(o.a,{staticClass:"mt-5",attrs:{cols:"12"}},[e._v("\n        Con esta acción eliminarás la cuenta de Mad Fénix junto a todos los datos introducidos en la aplicación 2 Elevado de la Play Store, App Store y Itch.io. El proceso puede tardar hasta 48 horas laborables.\n      ")]),e._v(" "),t(o.a,{staticClass:"mt-5",attrs:{cols:"12"}},[t("CtTextField",{attrs:{"append-icon":"mdi-email",label:"Email"},model:{value:e.deleteAccount.email,callback:function(t){e.$set(e.deleteAccount,"email",t)},expression:"deleteAccount.email"}})],1),e._v(" "),t(o.a,{attrs:{cols:"12"}},[t("CtTextField",{attrs:{type:"password","append-icon":"mdi-lock",label:"Password"},model:{value:e.deleteAccount.password,callback:function(t){e.$set(e.deleteAccount,"password",t)},expression:"deleteAccount.password"}})],1),e._v(" "),e.serverMessage?t(o.a,{staticClass:"error--text",attrs:{cols:"12"},domProps:{innerHTML:e._s(e.serverMessage)}}):e._e(),e._v(" "),t(o.a,{attrs:{cols:"12"}},[t("CtBtn",{attrs:{type:"primary",block:""},on:{click:function(t){return e.deleteAccountAction()}}},[e._v("\n          Eliminar cuenta\n        ")])],1),e._v(" "),t(o.a,{staticClass:"my-5",attrs:{cols:"12"}},[t("CtBtn",{attrs:{to:"/perfil",type:"accent",block:""}},[e._v("\n          Perfil\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);