(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{578:function(t,e,n){"use strict";n.r(e);n(37),n(14),n(11),n(12),n(4),n(20),n(13),n(21);var r=n(2),o=(n(40),n(78));function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var c={middleware:"authenticated",head:{title:"Temporada - Mad Fénix",meta:[{hid:"description",name:"description",content:"Temporada en Mad Fénix."}]},data:function(){return{seasonDetails:null}},mounted:function(){this.setUserCookies(),this.$axios.setToken(this.token,"Bearer"),this.getSeasonDetails()},computed:{user:function(){return this.$store.state.user.user},token:function(){return this.$store.state.user.token}},methods:l(l({afterLogout:function(){var t=this;this.setToken(""),this.removeUser(),setTimeout((function(){return t.$router.push({path:"/"})}),2e3)},logout:function(){var t=this;this.$axios.post("/api/logout").then((function(){return t.afterLogout()})).catch((function(){return t.afterLogout()}))},afterSeasonDetails:function(t){this.seasonDetails=t.data},getSeasonDetails:function(){var t=this;this.$axios.get("/api/season/seasonDetails").then((function(e){return t.afterSeasonDetails(e)})).catch((function(){return t.logout()}))},canjearPremio:function(t){var e=this;this.$axios.post("/api/season/redeemSeasonLvl",{level:t}).then((function(){return e.getSeasonDetails()})).catch((function(t){return t.response.data.message?"The given data was invalid."===t.response.data.message?e.setServerMessage("Datos inválidos."):e.setServerMessage(t.response.data.message):e.setServerMessage("Error.")}))},setUserCookies:function(){var t=this.$cookies.get("token");if(t){this.setToken(t);var e=this.$cookies.get("user");if(e)this.updateUser(e);else{console.log("test");try{this.fetchUser()}catch(t){}}}}},Object(o.b)({setServerMessage:"serverMessage/setServerMessage",setToken:"user/setToken",updateUser:"user/updateUser",fetchUser:"user/fetchUser"})),Object(o.c)({updateUser:"user/updateUser"}))},d=n(38),component=Object(d.a)(c,(function(){var t,e,n=this,r=n._self._c;return n.seasonDetails?r("div",[r("section",{staticClass:"tw-px-4 tw-py-12 md:tw-py-16 sm:tw-px-6 lg:tw-px-8"},[r("div",{staticClass:"tw-max-w-screen-xl tw-mx-auto"},[r("div",{staticClass:"tw-w-full tw-max-w-3xl tw-mx-auto tw-text-center lg:tw-max-w-5xl"},[r("p",{staticClass:"tw-inline-flex tw-items-center tw-justify-center tw-px-6 tw-py-2 tw-text-sm tw-font-medium tw-tracking-wide tw-text-white tw-rounded-r-full tw-rounded-tl-full tw-bg-gradient-to-r tw-from-dark-600 tw-to-dark-700"},[n._v("\n          Temporada\n        ")]),n._v(" "),r("h1",{staticClass:"tw-mt-4 tw-text-4xl tw-font-extrabold tw-text-white md:tw-mt-5 sm:tw-text-5xl md:tw-text-6xl",domProps:{innerHTML:n._s(n.seasonDetails.name)}}),n._v(" "),r("div",{staticClass:"tw-w-full tw-mx-auto lg:tw-w-4/5"},[r("p",{staticClass:"tw-text-2xl tw-font-medium tw-tracking-tight tw-text-white sm:tw-text-3xl lg:tw-text-4xl lg:tw-leading-tight tw-mt-4",domProps:{innerHTML:n._s("Nivel: "+(null!==(t=n.seasonDetails.user_season_level)&&void 0!==t?t:0))}}),n._v(" "),r("p",{staticClass:"tw-text-2xl tw-font-medium tw-tracking-tight tw-text-white sm:tw-text-3xl lg:tw-text-4xl lg:tw-leading-tight tw-mt-4",domProps:{innerHTML:n._s("Puntos: "+(null!==(e=n.seasonDetails.user_season_points)&&void 0!==e?e:0))}})])])])]),n._v(" "),n._l(n.seasonDetails.seasonRewards,(function(t){return n.seasonDetails.seasonRewards?r("section",{key:t.id,staticClass:"tw-max-w-screen-xl tw-px-4 tw-py-12 tw-mx-auto md:tw-py-16 sm:tw-px-6 lg:tw-px-8"},[r("div",{staticClass:"tw-relative tw-py-16 tw-rounded-3xl tw-bg-dark-700 lg:tw-py-20"},[r("svg",{staticClass:"tw-absolute tw-inset-y-0 tw-top-0 tw-z-20 tw-w-1/4 tw-h-full tw-right-1/4 tw-text-dark-700",attrs:{preserveAspectRatio:"none",viewBox:"0 0 100 100",fill:"currentcolor"}},[r("polygon",{attrs:{points:"0,0 100,0 0,100"}})]),n._v(" "),r("div",{staticClass:"tw-absolute tw-inset-y-0 tw-z-10 tw-w-1/2 tw-h-full tw-left-1/2 tw-bg-dark-800 tw-rounded-r-3xl"}),n._v(" "),r("div",{staticClass:"tw-relative tw-z-30 tw-flex tw-flex-col tw-items-center tw-justify-center tw-px-4 tw-mx-auto tw-text-center sm:tw-px-16 lg:tw-flex-row lg:tw-text-left"},[r("div",{staticClass:"tw-max-w-lg tw-text-2xl tw-font-bold sm:tw-text-4xl lg:tw-w-1/2"},[r("h5",{staticClass:"tw-text-4xl tw-font-extrabold tw-tracking-tight tw-text-white sm:tw-text-5xl"},[n._v("\n            Nivel: "),r("span",{domProps:{innerHTML:n._s(t.level)}})]),n._v(" "),r("h5",{staticClass:"tw-text-2xl tw-font-extrabold tw-tracking-tight tw-text-white sm:tw-text-2xl"},[n._v("\n            Premio: "),t.oro?r("span",{domProps:{innerHTML:n._s(t.oro+" oro")}}):n._e(),t.plumas?r("span",{domProps:{innerHTML:n._s(t.plumas+" pluma")}}):n._e(),t.nft?r("span",{domProps:{innerHTML:n._s("1 Ítem "+t.nft.name+". Límite: ")}}):n._e(),t.max_nft_rewards?r("span",{domProps:{innerHTML:n._s(t.max_nft_rewards)}}):n._e(),t.custom_reward?r("span",{domProps:{innerHTML:n._s(t.custom_reward)}}):n._e()])]),n._v(" "),r("div",{staticClass:"tw-flex tw-justify-center tw-max-w-lg tw-mt-10 lg:tw-w-1/2 lg:tw-mt-0 lg:tw-justify-end"},[r("div",[t.redeemed?r("a",{staticClass:"tw-flex tw-items-center tw-justify-center tw-w-auto tw-px-8 tw-py-4 tw-text-base tw-font-semibold tw-leading-snug tw-transition tw-ease-in-out tw-bg-white tw-rounded-full tw-h-14 tw-duration-250 tw-text-dark-900"},[n._v("\n              Canjeado\n            ")]):t.required_points<n.seasonDetails.user_season_points&&!(n.seasonDetails.user_season_premium>0)&&1!=t.level&&5!=t.level&&10!=t.level&&15!=t.level&&20!=t.level?r("a",{staticClass:"tw-flex tw-items-center tw-justify-center tw-w-auto tw-px-8 tw-py-4 tw-text-base tw-font-semibold tw-leading-snug tw-transition tw-ease-in-out tw-bg-white tw-rounded-full tw-h-14 tw-duration-250 tw-text-dark-900"},[n._v("\n              Necesitas el pase premium\n            ")]):t.required_points<n.seasonDetails.user_season_points?r("a",{staticClass:"tw-flex tw-cursor-pointer tw-items-center tw-justify-center tw-w-auto tw-px-8 tw-py-4 tw-text-base tw-font-semibold tw-leading-snug tw-transition tw-ease-in-out tw-bg-white tw-rounded-full tw-h-14 tw-duration-250 tw-text-dark-900 hover:tw-text-white focus:tw-outline-none hover:tw-bg-dark-900",on:{click:function(e){return n.canjearPremio(t.level)}}},[n._v("\n              Canjea el premio\n            ")]):r("a",{staticClass:"tw-flex tw-items-center tw-justify-center tw-w-auto tw-px-8 tw-py-4 tw-text-base tw-font-semibold tw-leading-snug tw-transition tw-ease-in-out tw-bg-white tw-rounded-full tw-h-14 tw-duration-250 tw-text-dark-900"},[n._v("\n              Por desbloquear\n            ")])])])])])]):n._e()}))],2):n._e()}),[],!1,null,null,null);e.default=component.exports}}]);