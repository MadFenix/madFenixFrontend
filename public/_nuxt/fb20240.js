(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{304:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return f})),r.d(t,"c",(function(){return l})),r.d(t,"d",(function(){return d}));var n=r(478),o=r(1),c=Object(o.h)("v-card__actions"),f=Object(o.h)("v-card__subtitle"),l=Object(o.h)("v-card__text"),d=Object(o.h)("v-card__title");n.a},510:function(e,t,r){"use strict";r(11),r(12),r(20),r(21);var n=r(2),o=(r(4),r(24),r(14),r(25),r(47),r(495),r(43),r(496),r(497),r(498),r(499),r(500),r(501),r(502),r(503),r(504),r(505),r(506),r(507),r(508),r(45),r(44),r(13),r(71),r(303),r(0)),c=r(62),f=r(1);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O=["sm","md","lg","xl"],v=O.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{}),h=O.reduce((function(e,t){return e["offset"+Object(f.w)(t)]={type:[String,Number],default:null},e}),{}),j=O.reduce((function(e,t){return e["order"+Object(f.w)(t)]={type:[String,Number],default:null},e}),{}),y={col:Object.keys(v),offset:Object.keys(h),order:Object.keys(j)};function m(e,t,r){var n=e;if(null!=r&&!1!==r){if(t){var o=t.replace(e,"");n+="-".concat(o)}return"col"!==e||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var w=new Map;t.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},j),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var r=t.props,data=t.data,o=t.children,f=(t.parent,"");for(var l in r)f+=String(r[l]);var d=w.get(f);if(!d){var O;for(O in d=[],y)y[O].forEach((function(e){var t=r[e],n=m(O,e,t);n&&d.push(n)}));var v=d.some((function(e){return e.startsWith("col-")}));d.push(Object(n.a)(Object(n.a)(Object(n.a)(Object(n.a)({col:!v||!r.cols},"col-".concat(r.cols),r.cols),"offset-".concat(r.offset),r.offset),"order-".concat(r.order),r.order),"align-self-".concat(r.alignSelf),r.alignSelf)),w.set(f,d)}return e(r.tag,Object(c.a)(data,{class:d}),o)}})},571:function(e,t,r){"use strict";r.r(t);var n=r(558),o=r(478),c=r(304),f=r(510),l=r(494),d=r(559),O=(r(11),r(59),r(4),r(40),r(14),r(12),r(20),r(13),r(21),r(2)),v=r(78);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){Object(O.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y={middleware:"authenticated",head:{title:"Notificaciones - Mad Fénix",meta:[{hid:"description",name:"description",content:"Notificaciones en Mad Fénix."}]},data:function(){return{events:[]}},computed:{serverMessage:function(){return this.$store.state.serverMessage.serverMessage},token:function(){return this.$store.state.user.token}},mounted:function(){this.setUserCookies(),this.$axios.setToken(this.token,"Bearer"),this.fetch()},methods:j(j({fetch:function(){var e=this;this.$axios.get("/api/event").then((function(t){return t.data?e.events=t.data:""})).catch((function(t){return t.response.data.message?e.setServerMessage(t.response.data.message):e.setServerMessage("Error.")}))},setUserCookies:function(){var e=this.$cookies.get("token");if(e){this.setToken(e);var t=this.$cookies.get("user");if(t)this.updateUser(t);else{console.log("test");try{this.fetchUser()}catch(e){}}}}},Object(v.b)({setServerMessage:"serverMessage/setServerMessage",setToken:"user/setToken",updateUser:"user/updateUser",fetchUser:"user/fetchUser"})),Object(v.c)({updateUser:"user/updateUser"}))},m=r(38),component=Object(m.a)(y,(function(){var e=this,t=e._self._c;return t(n.a,[t("CtCard",{staticClass:"mx-auto",attrs:{title:"Notificaciones",width:"500"}},[t(d.a,{attrs:{dense:""}},e._l(e.events,(function(r){return t(f.a,{key:r.id,staticClass:"mt-5",attrs:{cols:"12"}},[t(o.a,{attrs:{color:"primary",dark:""}},[t(c.d,{staticClass:"headline",domProps:{innerHTML:e._s(r.description)}}),e._v(" "),t(c.b,{domProps:{innerHTML:e._s(new Date(r.reservated_at).toString())}}),e._v(" "),t(l.a,[t("span",{domProps:{innerHTML:e._s(r.details)}})])],1)],1)})),1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);