(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{507:function(e,t,r){"use strict";r(11),r(12),r(20),r(21);var o=r(2),n=(r(4),r(24),r(14),r(28),r(44),r(491),r(53),r(492),r(493),r(494),r(495),r(496),r(497),r(498),r(499),r(500),r(501),r(502),r(503),r(504),r(54),r(42),r(13),r(71),r(301),r(0)),c=r(60),l=r(1);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=["sm","md","lg","xl"],O=v.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{}),h=v.reduce((function(e,t){return e["offset"+Object(l.w)(t)]={type:[String,Number],default:null},e}),{}),m=v.reduce((function(e,t){return e["order"+Object(l.w)(t)]={type:[String,Number],default:null},e}),{}),w={col:Object.keys(O),offset:Object.keys(h),order:Object.keys(m)};function y(e,t,r){var o=e;if(null!=r&&!1!==r){if(t){var n=t.replace(e,"");o+="-".concat(n)}return"col"!==e||""!==r&&!0!==r?(o+="-".concat(r)).toLowerCase():o.toLowerCase()}}var j=new Map;t.a=n.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},O),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},m),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var r=t.props,data=t.data,n=t.children,l=(t.parent,"");for(var f in r)l+=String(r[f]);var d=j.get(l);if(!d){var v;for(v in d=[],w)w[v].forEach((function(e){var t=r[e],o=y(v,e,t);o&&d.push(o)}));var O=d.some((function(e){return e.startsWith("col-")}));d.push(Object(o.a)(Object(o.a)(Object(o.a)(Object(o.a)({col:!O||!r.cols},"col-".concat(r.cols),r.cols),"offset-".concat(r.offset),r.offset),"order-".concat(r.order),r.order),"align-self-".concat(r.alignSelf),r.alignSelf)),j.set(l,d)}return e(r.tag,Object(c.a)(data,{class:d}),n)}})},571:function(e,t,r){"use strict";r.r(t);var o=r(554),n=r(507),c=r(555),l=(r(14),r(11),r(12),r(4),r(20),r(13),r(21),r(2)),f=r(77);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){Object(l.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O={head:{title:"Recordar password - Mad Fénix",meta:[{hid:"description",name:"description",content:"Recordar password en Mad Fénix."}]},data:function(){return{forgotData:{email:"",password:"",password_confirmation:"",token:""}}},computed:{serverMessage:function(){return this.$store.state.serverMessage.serverMessage},token:function(){return this.$store.state.user.token}},mounted:function(){this.setUserCookies(),this.$axios.setToken(this.token,"Bearer")},methods:v(v({forgot:function(){var e=this;this.$router.currentRoute.query.token?this.forgotData.token=this.$router.currentRoute.query.token:this.$router.push("/login"),this.$axios.post("/api/forgotReset",this.forgotData).then((function(t){return"Password reset"===t.data?e.$router.push("/login"):e.setServerMessage(t.data)})).catch((function(t){return t.response.data.message?"The given data was invalid."===t.response.data.message?e.setServerMessage("Datos inválidos."):e.setServerMessage(t.response.data.message):e.setServerMessage("Error.")}))},setUserCookies:function(){var e=this.$cookies.get("token");if(e){this.setToken(e);var t=this.$cookies.get("user");if(t)this.updateUser(t);else{console.log("test");try{this.fetchUser()}catch(e){}}}}},Object(f.b)({setServerMessage:"serverMessage/setServerMessage",setToken:"user/setToken",updateUser:"user/updateUser",fetchUser:"user/fetchUser"})),Object(f.c)({updateUser:"user/updateUser"}))},h=r(37),component=Object(h.a)(O,(function(){var e=this,t=e._self._c;return t(o.a,[t("CtCard",{staticClass:"mx-auto",attrs:{title:"Modificar password",width:"300"}},[t(c.a,{attrs:{dense:""}},[t(n.a,{staticClass:"mt-5",attrs:{cols:"12"}},[t("CtTextField",{attrs:{"append-icon":"mdi-email",label:"Email"},model:{value:e.forgotData.email,callback:function(t){e.$set(e.forgotData,"email",t)},expression:"forgotData.email"}})],1),e._v(" "),t(n.a,{attrs:{cols:"12"}},[t("CtTextField",{attrs:{type:"password","append-icon":"mdi-lock",label:"Password"},model:{value:e.forgotData.password,callback:function(t){e.$set(e.forgotData,"password",t)},expression:"forgotData.password"}})],1),e._v(" "),t(n.a,{attrs:{cols:"12"}},[t("CtTextField",{attrs:{type:"password","append-icon":"mdi-lock",label:"Confirmación password"},model:{value:e.forgotData.password_confirmation,callback:function(t){e.$set(e.forgotData,"password_confirmation",t)},expression:"forgotData.password_confirmation"}})],1),e._v(" "),e.serverMessage?t(n.a,{staticClass:"error--text",attrs:{cols:"12"},domProps:{innerHTML:e._s(e.serverMessage)}}):e._e(),e._v(" "),t(n.a,{attrs:{cols:"12"}},[t("CtBtn",{attrs:{type:"primary",block:""},on:{click:function(t){return e.forgot()}}},[e._v("\n          Enviar\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);