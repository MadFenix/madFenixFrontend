(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{582:function(t,e,r){"use strict";r.r(e);r(37),r(14),r(11),r(12),r(4),r(20),r(13),r(21);var o=r(2),n=(r(39),r(78));function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function w(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){Object(o.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l={middleware:"authenticated",head:{title:"Tienda - Mad Fénix",meta:[{hid:"description",name:"description",content:"Tienda en Mad Fénix."}],script:[{async:!0,src:"https://js.stripe.com/v3/buy-button.js"}]},data:function(){return{storeDetails:null}},mounted:function(){this.setUserCookies(),this.$axios.setToken(this.token,"Bearer"),this.getStoreDetails()},computed:{user:function(){return this.$store.state.user.user},token:function(){return this.$store.state.user.token}},methods:w(w({afterLogout:function(){var t=this;this.$cookies.remove("token"),this.$cookies.remove("user"),this.setToken(""),this.setUserToNull(),this.removeUser(),setTimeout((function(){return t.$router.push({path:"/login"})}),2e3)},logout:function(){var t=this;this.$axios.post("/api/logout").then((function(){return t.afterLogout()})).catch((function(){return t.afterLogout()}))},afterStoreDetails:function(t){this.storeDetails=t.data},getStoreDetails:function(){var t=this;this.$axios.get("/api/store/details").then((function(e){return t.afterStoreDetails(e)})).catch((function(){return t.logout()}))},validateProduct:function(t){var e=this;this.$axios.post("/api/store/validateProductOrder",{product_order_id:t.id}).then((function(){return e.$router.push({path:"/perfil"})})).catch((function(t){return t.response.data.message?"The given data was invalid."===t.response.data.message?e.setServerMessage("Datos inválidos."):e.setServerMessage(t.response.data.message):e.setServerMessage("Error.")}))},getPrice:function(t){return t.price_oro>0?t.price_oro+" oros":t.price_plumas+" oros"},buyProduct:function(t,e){var r=this;this.$axios.post("/api/store/addProductToOrder",{product_id:t}).then((function(t){e>0&&r.validateProduct(t.data)})).catch((function(t){return t.response.data.message?"The given data was invalid."===t.response.data.message?r.setServerMessage("Datos inválidos."):r.setServerMessage(t.response.data.message):r.setServerMessage("Error.")}))},setUserCookies:function(){var t=this.$cookies.get("token");if(t){this.setToken(t);var e=this.$cookies.get("user");if(e)this.updateUser(e);else{console.log("test");try{this.fetchUser()}catch(t){}}}}},Object(n.b)({setServerMessage:"serverMessage/setServerMessage",setToken:"user/setToken",setUserToNull:"user/setUserToNull",updateUser:"user/updateUser",fetchUser:"user/fetchUser"})),Object(n.c)({updateUser:"user/updateUser",removeUser:"user/removeUser"}))},d=r(38),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return t.storeDetails?e("div",[e("section",{staticClass:"tw-px-4 tw-py-12 md:tw-py-16 sm:tw-px-6 lg:tw-px-8"},[e("div",{staticClass:"tw-max-w-screen-xl tw-mx-auto"},[e("div",{staticClass:"tw-w-full tw-max-w-3xl tw-mx-auto tw-text-center lg:tw-max-w-5xl"},[e("p",{staticClass:"tw-inline-flex tw-items-center tw-justify-center tw-px-6 tw-py-2 tw-text-sm tw-font-medium tw-tracking-wide tw-text-white tw-rounded-r-full tw-rounded-tl-full tw-bg-gradient-to-r tw-from-dark-600 tw-to-dark-700"},[t._v("\n          Tienda\n        ")]),t._v(" "),e("h1",{staticClass:"tw-mt-4 tw-text-4xl tw-font-extrabold tw-text-white md:tw-mt-5 sm:tw-text-5xl md:tw-text-6xl",domProps:{innerHTML:t._s("Pasa al siguiente nivel")}})])])]),t._v(" "),t._l(t.storeDetails.products,(function(r){return t.storeDetails.products?e("section",{key:r.id,staticClass:"tw-max-w-screen-xl tw-px-4 tw-py-12 tw-mx-auto md:tw-py-16 sm:tw-px-6 lg:tw-px-8"},[e("div",{staticClass:"tw-relative tw-py-16 tw-rounded-3xl tw-bg-dark-700 lg:tw-py-20"},[e("svg",{staticClass:"tw-absolute tw-inset-y-0 tw-top-0 tw-z-20 tw-w-1/4 tw-h-full tw-right-1/4 tw-text-dark-700",attrs:{preserveAspectRatio:"none",viewBox:"0 0 100 100",fill:"currentcolor"}},[e("polygon",{attrs:{points:"0,0 100,0 0,100"}})]),t._v(" "),e("div",{staticClass:"tw-absolute tw-inset-y-0 tw-z-10 tw-w-1/2 tw-h-full tw-left-1/2 tw-bg-dark-800 tw-rounded-r-3xl"}),t._v(" "),e("div",{staticClass:"tw-relative tw-z-30 tw-flex tw-flex-col tw-items-center tw-justify-center tw-px-4 tw-mx-auto tw-text-center sm:tw-px-16 lg:tw-flex-row lg:tw-text-left"},[e("div",{staticClass:"tw-max-w-lg tw-text-2xl tw-font-bold sm:tw-text-4xl lg:tw-w-1/2"},[e("h5",{staticClass:"tw-text-4xl tw-font-extrabold tw-tracking-tight tw-text-white sm:tw-text-5xl"},[e("span",{domProps:{innerHTML:t._s(r.name)}})]),t._v(" "),r.short_description?e("p",{staticClass:"tw-text-white tw-text-md",domProps:{innerHTML:t._s(r.short_description)}}):t._e()]),t._v(" "),e("div",{staticClass:"tw-flex tw-justify-center tw-max-w-lg tw-mt-10 lg:tw-w-1/2 lg:tw-mt-0 lg:tw-justify-end"},[e("div",[r.price_fiat>0&&5==r.price_fiat?e("stripe-buy-button",{attrs:{"buy-button-id":"buy_btn_1PAYYpHruUfPE2wuw5Mhazx8","publishable-key":"pk_live_51PAXsOHruUfPE2wuT1MTCc3LMcanaF77ZykWh93fUu8whnI6GLIFVfPcBSJVNTzGSiQtchKVsRu2kiziQlOD44XH006ERR5INg","customer-email":t.user.email}}):r.price_fiat>0&&10==r.price_fiat?e("stripe-buy-button",{attrs:{"buy-button-id":"buy_btn_1PAaDhHruUfPE2wuOkz0bx5C","publishable-key":"pk_live_51PAXsOHruUfPE2wuT1MTCc3LMcanaF77ZykWh93fUu8whnI6GLIFVfPcBSJVNTzGSiQtchKVsRu2kiziQlOD44XH006ERR5INg","customer-email":t.user.email}}):r.price_fiat>0&&20==r.price_fiat?e("stripe-buy-button",{attrs:{"buy-button-id":"buy_btn_1PAaEuHruUfPE2wu6DXK5KYT","publishable-key":"pk_live_51PAXsOHruUfPE2wuT1MTCc3LMcanaF77ZykWh93fUu8whnI6GLIFVfPcBSJVNTzGSiQtchKVsRu2kiziQlOD44XH006ERR5INg","customer-email":t.user.email}}):r.price_fiat>0&&40==r.price_fiat?e("stripe-buy-button",{attrs:{"buy-button-id":"buy_btn_1PAaI3HruUfPE2wu9m6H5vGp","publishable-key":"pk_live_51PAXsOHruUfPE2wuT1MTCc3LMcanaF77ZykWh93fUu8whnI6GLIFVfPcBSJVNTzGSiQtchKVsRu2kiziQlOD44XH006ERR5INg","customer-email":t.user.email}}):r.price_fiat>0&&80==r.price_fiat?e("stripe-buy-button",{attrs:{"buy-button-id":"buy_btn_1PAaHCHruUfPE2wua82AVGzY","publishable-key":"pk_live_51PAXsOHruUfPE2wuT1MTCc3LMcanaF77ZykWh93fUu8whnI6GLIFVfPcBSJVNTzGSiQtchKVsRu2kiziQlOD44XH006ERR5INg","customer-email":t.user.email}}):r.price_fiat>0&&160==r.price_fiat?e("stripe-buy-button",{attrs:{"buy-button-id":"buy_btn_1PAaJKHruUfPE2wuU9Jq0Nu9","publishable-key":"pk_live_51PAXsOHruUfPE2wuT1MTCc3LMcanaF77ZykWh93fUu8whnI6GLIFVfPcBSJVNTzGSiQtchKVsRu2kiziQlOD44XH006ERR5INg","customer-email":t.user.email}}):r.price_fiat>0?e("a",{staticClass:"tw-flex tw-cursor-pointer tw-items-center tw-justify-center tw-w-auto tw-px-8 tw-py-4 tw-text-base tw-font-semibold tw-leading-snug tw-transition tw-ease-in-out tw-bg-white tw-rounded-full tw-h-14 tw-duration-250 tw-text-dark-900"},[t._v("\n              Próximamente\n            ")]):e("a",{staticClass:"tw-flex tw-cursor-pointer tw-items-center tw-justify-center tw-w-auto tw-px-8 tw-py-4 tw-text-base tw-font-semibold tw-leading-snug tw-transition tw-ease-in-out tw-bg-white tw-rounded-full tw-h-14 tw-duration-250 tw-text-dark-900",on:{click:function(e){return t.buyProduct(r.id,r.price_oro)}}},[t._v("\n              Comprar por "),e("span",{staticClass:"tw-ml-2"}),e("span",{staticClass:"tw-ml-2",domProps:{innerHTML:t._s(t.getPrice(r))}})])],1)])])])]):t._e()}))],2):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);