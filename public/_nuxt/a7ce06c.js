(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{507:function(e,t,r){"use strict";r(11),r(12),r(20),r(21);var n=r(2),o=(r(4),r(24),r(14),r(28),r(44),r(491),r(53),r(492),r(493),r(494),r(495),r(496),r(497),r(498),r(499),r(500),r(501),r(502),r(503),r(504),r(54),r(42),r(13),r(71),r(301),r(0)),c=r(60),l=r(1);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O=["sm","md","lg","xl"],v=O.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{}),h=O.reduce((function(e,t){return e["offset"+Object(l.w)(t)]={type:[String,Number],default:null},e}),{}),j=O.reduce((function(e,t){return e["order"+Object(l.w)(t)]={type:[String,Number],default:null},e}),{}),y={col:Object.keys(v),offset:Object.keys(h),order:Object.keys(j)};function m(e,t,r){var n=e;if(null!=r&&!1!==r){if(t){var o=t.replace(e,"");n+="-".concat(o)}return"col"!==e||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var w=new Map;t.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},j),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var r=t.props,data=t.data,o=t.children,l=(t.parent,"");for(var f in r)l+=String(r[f]);var d=w.get(l);if(!d){var O;for(O in d=[],y)y[O].forEach((function(e){var t=r[e],n=m(O,e,t);n&&d.push(n)}));var v=d.some((function(e){return e.startsWith("col-")}));d.push(Object(n.a)(Object(n.a)(Object(n.a)(Object(n.a)({col:!v||!r.cols},"col-".concat(r.cols),r.cols),"offset-".concat(r.offset),r.offset),"order-".concat(r.order),r.order),"align-self-".concat(r.alignSelf),r.alignSelf)),w.set(l,d)}return e(r.tag,Object(c.a)(data,{class:d}),o)}})},560:function(e,t,r){"use strict";r.r(t);var n=r(554),o=r(507),c=r(555),l=(r(14),r(11),r(12),r(4),r(20),r(13),r(21),r(2)),f=r(77);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){Object(l.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v={middleware:"authenticated",head:{title:"Canjear cupón oro - Mad Fénix",meta:[{hid:"description",name:"description",content:"Canjear cupón oro en Mad Fénix."}]},data:function(){return{couponData:{coupon:""}}},computed:{serverMessage:function(){return this.$store.state.serverMessage.serverMessage},token:function(){return this.$store.state.user.token}},mounted:function(){this.setUserCookies(),this.$axios.setToken(this.token,"Bearer")},methods:O(O({afterUseCoupon:function(e){this.$router.push("/perfil")},useCoupon:function(){var e=this;this.$axios.post("/api/coupon/useOroCoupon",this.couponData).then((function(t){return e.afterUseCoupon(t)})).catch((function(t){return t.response.data.message?"The given data was invalid."===t.response.data.message?e.setServerMessage("Datos inválidos."):e.setServerMessage(t.response.data.message):e.setServerMessage("Error.")}))},setUserCookies:function(){var e=this.$cookies.get("token");if(e){this.setToken(e);var t=this.$cookies.get("user");if(t)this.updateUser(t);else{console.log("test");try{this.fetchUser()}catch(e){}}}}},Object(f.b)({setServerMessage:"serverMessage/setServerMessage",setToken:"user/setToken",updateUser:"user/updateUser",fetchUser:"user/fetchUser"})),Object(f.c)({updateUser:"user/updateUser"}))},h=r(37),component=Object(h.a)(v,(function(){var e=this,t=e._self._c;return t(n.a,[t("CtCard",{staticClass:"mx-auto",attrs:{title:"Canjear cupón para oro",width:"300"}},[t(c.a,{attrs:{dense:""}},[t(o.a,{staticClass:"mt-5",attrs:{cols:"12"}},[t("CtTextField",{attrs:{"append-icon":"mdi-ticket",label:"Cupón"},model:{value:e.couponData.coupon,callback:function(t){e.$set(e.couponData,"coupon",t)},expression:"couponData.coupon"}})],1),e._v(" "),e.serverMessage?t(o.a,{staticClass:"error--text",attrs:{cols:"12"},domProps:{innerHTML:e._s(e.serverMessage)}}):e._e(),e._v(" "),t(o.a,{attrs:{cols:"12"}},[t("CtBtn",{attrs:{type:"primary",block:""},on:{click:function(t){return e.useCoupon()}}},[e._v("\n          Canjear\n        ")])],1),e._v(" "),t(o.a,{staticClass:"my-5",attrs:{cols:"12"}},[t("CtBtn",{attrs:{to:"/perfil",type:"accent",block:""}},[e._v("\n          Perfil\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);