(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{582:function(t,e,w){"use strict";w.r(e);w(14),w(11),w(12),w(4),w(20),w(13),w(21);var l=w(2),r=w(78);function o(t,e){var w=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),w.push.apply(w,l)}return w}function n(t){for(var e=1;e<arguments.length;e++){var w=null!=arguments[e]?arguments[e]:{};e%2?o(Object(w),!0).forEach((function(e){Object(l.a)(t,e,w[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(w)):o(Object(w)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(w,e))}))}return t}var x={middleware:"basic",head:{title:"Torneo inaugural - Mad Fénix",meta:[{hid:"description",name:"description",content:"Torneo inaugural de Mad Fénix."},{hid:"og:url",name:"og:url",content:"https://madfenix.com/torneo-inaugural"},{hid:"og:site_name",name:"og:site_name",content:"Torneo inaugural - Mad Fénix"},{hid:"og:image",name:"og:image",content:"https://madfenix.com/img/home/chicaJugandoA2Elevado.jpg"},{hid:"og:image:width",name:"og:image:width",content:"1067"},{hid:"og:image:height",name:"og:image:height",content:"684"},{hid:"og:image:type",name:"og:image:type",content:"image/jpg"},{hid:"twitter:site",name:"twitter:site",content:"@MadFenixGames"}]},computed:{token:function(){return this.$store.state.user.token}},mounted:function(){this.setUserCookies(),this.$axios.setToken(this.token,"Bearer")},methods:n(n({setUserCookies:function(){var t=this.$cookies.get("token");if(t){this.setToken(t);var e=this.$cookies.get("user");if(e)this.updateUser(e);else{console.log("test");try{this.fetchUser()}catch(t){}}}}},Object(r.b)({setServerMessage:"serverMessage/setServerMessage",setToken:"user/setToken",updateUser:"user/updateUser",fetchUser:"user/fetchUser"})),Object(r.c)({updateUser:"user/updateUser",removeUser:"user/removeUser"}))},c=w(38),component=Object(c.a)(x,(function(){var t=this,e=t._self._c;return e("div",[e("section",{staticClass:"tw-px-4 tw-py-12 md:tw-py-16 sm:tw-px-6 lg:tw-px-8"},[e("div",{staticClass:"tw-max-w-screen-xl tw-mx-auto"},[t._m(0),t._v(" "),e("div",{staticClass:"tw-grid tw-w-full tw-max-w-lg tw-gap-10 tw-mx-auto tw-mt-12 lg:tw-grid-cols-3 lg:tw-gap-x-12 lg:tw-mt-16 lg:tw-max-w-none"},[e("div",{staticClass:"w-full"},[e("span",{staticClass:"tw-flex tw-items-center tw-justify-center tw-w-16 tw-h-16 tw-mx-auto tw-rounded-full tw-shadow-xl tw-bg-gradient-to-r tw-from-dark-600 tw-to-dark-700"},[e("svg",{staticClass:"w-9 h-9 text-dark-300",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[e("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),e("path",{attrs:{d:"M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"}})])]),t._v(" "),e("h3",{staticClass:"tw-mt-5 tw-text-2xl tw-font-semibold tw-text-center tw-text-white"},[t._v("\n            Intercomunitario\n          ")]),t._v(" "),e("p",{staticClass:"tw-mt-2 tw-text-lg tw-leading-relaxed tw-text-center tw-text-dark-300"},[t._v("\n            Buscamos aliados con comunidades afines que quieran crecer junto a nosotros.\n          ")])]),t._v(" "),e("div",{staticClass:"tw-w-full"},[e("span",{staticClass:"tw-flex tw-items-center tw-justify-center tw-w-16 tw-h-16 tw-mx-auto tw-rounded-full tw-shadow-xl tw-bg-gradient-to-r tw-from-dark-600 tw-to-dark-700"},[e("svg",{staticClass:"w-9 h-9 text-dark-300",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[e("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),e("polyline",{attrs:{points:"12 4 4 8 12 12 20 8 12 4"}}),t._v(" "),e("polyline",{attrs:{points:"4 12 12 16 20 12"}}),t._v(" "),e("polyline",{attrs:{points:"4 16 12 20 20 16"}})])]),t._v(" "),e("h3",{staticClass:"tw-mt-5 tw-text-2xl tw-font-semibold tw-text-center tw-text-white"},[t._v("\n            Personalizado\n          ")]),t._v(" "),e("p",{staticClass:"tw-mt-2 tw-text-lg tw-leading-relaxed tw-text-center tw-text-dark-300"},[t._v("\n            La primera fase es un torneo personalizado para tu comunidad.\n          ")])]),t._v(" "),e("div",{staticClass:"tw-w-full"},[e("span",{staticClass:"tw-flex tw-items-center tw-justify-center tw-w-16 tw-h-16 tw-mx-auto tw-rounded-full tw-shadow-xl tw-bg-gradient-to-r tw-from-dark-600 tw-to-dark-700"},[e("svg",{staticClass:"w-9 h-9 text-dark-300",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[e("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),e("path",{attrs:{d:"M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"}}),t._v(" "),e("path",{attrs:{d:"M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"}}),t._v(" "),e("line",{attrs:{x1:"9.7",y1:"17",x2:"14.3",y2:"17"}})])]),t._v(" "),e("h3",{staticClass:"tw-mt-5 tw-text-2xl tw-font-semibold tw-text-center tw-text-white"},[t._v("\n            +500€ en premios\n          ")]),t._v(" "),e("p",{staticClass:"tw-mt-2 tw-text-lg tw-leading-relaxed tw-text-center tw-text-dark-300"},[t._v("\n            Los 3 primeros clasificados de la segunda fase recibirán un premio.\n          ")])])]),t._v(" "),t._m(1)])]),t._v(" "),t._m(2),t._v(" "),e("section",{staticClass:"tw-px-4 tw-py-12 md:tw-py-16 sm:tw-px-6 lg:tw-px-8"},[e("div",{staticClass:"tw-max-w-screen-xl tw-mx-auto"},[e("div",{staticClass:"tw-relative tw-py-16 tw-shadow-xl tw-rounded-3xl tw-bg-dark-700 lg:tw-py-20"},[e("svg",{staticClass:"tw-absolute tw-inset-y-0 tw-top-0 tw-z-20 tw-w-1/4 tw-h-full tw-right-1/4 tw-text-dark-700",attrs:{preserveaspectratio:"none",viewbox:"0 0 100 100",fill:"currentcolor"}},[e("polygon",{attrs:{points:"0,0 100,0 0,100"}})]),t._v(" "),e("div",{staticClass:"tw-absolute tw-inset-y-0 tw-z-10 tw-w-1/2 tw-h-full tw-left-1/2 tw-bg-dark-800 tw-rounded-r-3xl"}),t._v(" "),t._m(3)])])]),t._v(" "),e("section",{staticClass:"tw-px-4 tw-py-12 md:tw-pt-16 sm:tw-pb-24 sm:tw-px-6 lg:tw-px-8"},[e("div",{staticClass:"tw-max-w-screen-xl tw-mx-auto"},[t._m(4),t._v(" "),e("div",{staticClass:"tw-relative tw-mt-16 sm:tw-mt-24 lg:tw-mt-32 lg:tw-grid lg:tw-grid-cols-2 lg:tw-auto-rows-max lg:tw-gap-x-12"},[t._m(5),t._v(" "),e("a",{staticClass:"tw-relative tw-flex tw-items-center tw-justify-center tw-max-w-lg tw-mx-auto tw-mt-10 lg:tw-mt-0 lg:tw-max-w-none",attrs:{href:"https://twitter.com/CriptoATH",target:"_blank"}},[e("div",{staticClass:"tw-absolute tw-w-full tw-h-full tw-rounded-3xl tw-bg-dark-700 2xl:tw-left-10 2xl:tw-top-10 lg:tw-top-4 lg:tw-left-4 sm:tw-top-8 sm:tw-left-8"},[e("svg",{staticClass:"tw-absolute tw-inset-y-0 tw-top-0 tw-z-20 tw-w-1/4 tw-h-full tw-right-1/4 tw-text-dark-700",attrs:{preserveaspectratio:"none",viewbox:"0 0 100 100",fill:"currentcolor"}},[e("polygon",{attrs:{points:"0,0 100,0 0,100"}})]),t._v(" "),e("div",{staticClass:"tw-absolute tw-inset-y-0 tw-z-10 tw-w-1/2 tw-h-full tw-left-1/2 tw-bg-dark-800 tw-rounded-r-3xl"})]),t._v(" "),e("img",{staticClass:"tw-z-30 tw-object-cover tw-w-auto tw-h-full tw-shadow-xl tw-rounded-3xl",attrs:{src:"/img/aliados/criptoath.jpg"}})])]),t._v(" "),e("div",{staticClass:"tw-relative tw-mt-16 sm:tw-mt-24 lg:tw-mt-32 lg:tw-grid lg:tw-grid-cols-2 lg:tw-auto-rows-max lg:tw-gap-x-12"},[t._m(6),t._v(" "),e("a",{staticClass:"tw-relative tw-flex tw-items-center tw-justify-center tw-max-w-lg tw-mx-auto tw-mt-10 lg:tw-order-1 lg:tw-mt-0 lg:tw-max-w-none",attrs:{href:"https://twitter.com/cocobayworld",target:"_blank"}},[e("div",{staticClass:"tw-absolute tw-w-full tw-h-full tw-rounded-3xl tw-bg-dark-700 2xl:tw-right-10 2xl:tw-top-10 lg:tw-top-4 lg:tw-right-4 sm:tw-top-8 sm:tw-right-8"},[e("svg",{staticClass:"tw-absolute tw-inset-y-0 tw-top-0 tw-z-20 tw-w-1/4 tw-h-full tw-right-1/4 tw-text-dark-700",attrs:{preserveaspectratio:"none",viewbox:"0 0 100 100",fill:"currentcolor"}},[e("polygon",{attrs:{points:"0,0 100,0 0,100"}})]),t._v(" "),e("div",{staticClass:"tw-absolute tw-inset-y-0 tw-z-10 tw-w-1/2 tw-h-full tw-left-1/2 tw-bg-dark-800 tw-rounded-r-3xl"})]),t._v(" "),e("img",{staticClass:"tw-z-30 tw-object-cover tw-w-auto tw-h-full tw-shadow-xl tw-rounded-3xl",attrs:{src:"/img/aliados/cocobay.jpg"}})])]),t._v(" "),e("div",{staticClass:"tw-relative tw-mt-16 sm:tw-mt-24 lg:tw-mt-32 lg:tw-grid lg:tw-grid-cols-2 lg:tw-auto-rows-max lg:tw-gap-x-12"},[t._m(7),t._v(" "),e("a",{staticClass:"tw-relative tw-flex tw-items-center tw-justify-center tw-max-w-lg tw-mx-auto tw-mt-10 lg:tw-mt-0 lg:tw-max-w-none",attrs:{href:"https://twitter.com/TonyEmotions",target:"_blank"}},[e("div",{staticClass:"tw-absolute tw-w-full tw-h-full tw-rounded-3xl tw-bg-dark-700 2xl:tw-left-10 2xl:tw-top-10 lg:tw-top-4 lg:tw-left-4 sm:tw-top-8 sm:tw-left-8"},[e("svg",{staticClass:"tw-absolute tw-inset-y-0 tw-top-0 tw-z-20 tw-w-1/4 tw-h-full tw-right-1/4 tw-text-dark-700",attrs:{preserveaspectratio:"none",viewbox:"0 0 100 100",fill:"currentcolor"}},[e("polygon",{attrs:{points:"0,0 100,0 0,100"}})]),t._v(" "),e("div",{staticClass:"tw-absolute tw-inset-y-0 tw-z-10 tw-w-1/2 tw-h-full tw-left-1/2 tw-bg-dark-800 tw-rounded-r-3xl"})]),t._v(" "),e("img",{staticClass:"tw-z-30 tw-object-cover tw-w-auto tw-h-full tw-shadow-xl tw-rounded-3xl",attrs:{src:"/img/aliados/tonyemotions.jpg"}})])]),t._v(" "),e("div",{staticClass:"tw-relative tw-mt-16 sm:tw-mt-24 lg:tw-mt-32 lg:tw-grid lg:tw-grid-cols-2 lg:tw-auto-rows-max lg:tw-gap-x-12"},[t._m(8),t._v(" "),e("a",{staticClass:"tw-relative tw-flex tw-items-center tw-justify-center tw-max-w-lg tw-mx-auto tw-mt-10 lg:tw-order-1 lg:tw-mt-0 lg:tw-max-w-none",attrs:{href:"https://twitter.com/bookers_nft",target:"_blank"}},[e("div",{staticClass:"tw-absolute tw-w-full tw-h-full tw-rounded-3xl tw-bg-dark-700 2xl:tw-right-10 2xl:tw-top-10 lg:tw-top-4 lg:tw-right-4 sm:tw-top-8 sm:tw-right-8"},[e("svg",{staticClass:"tw-absolute tw-inset-y-0 tw-top-0 tw-z-20 tw-w-1/4 tw-h-full tw-right-1/4 tw-text-dark-700",attrs:{preserveaspectratio:"none",viewbox:"0 0 100 100",fill:"currentcolor"}},[e("polygon",{attrs:{points:"0,0 100,0 0,100"}})]),t._v(" "),e("div",{staticClass:"tw-absolute tw-inset-y-0 tw-z-10 tw-w-1/2 tw-h-full tw-left-1/2 tw-bg-dark-800 tw-rounded-r-3xl"})]),t._v(" "),e("img",{staticClass:"tw-z-30 tw-object-cover tw-w-auto tw-h-full tw-shadow-xl tw-rounded-3xl",attrs:{src:"/img/aliados/bookers.jpg"}})])]),t._v(" "),e("div",{staticClass:"tw-relative tw-mt-16 sm:tw-mt-24 lg:tw-mt-32 lg:tw-grid lg:tw-grid-cols-2 lg:tw-auto-rows-max lg:tw-gap-x-12"},[t._m(9),t._v(" "),e("a",{staticClass:"tw-relative tw-flex tw-items-center tw-justify-center tw-max-w-lg tw-mx-auto tw-mt-10 lg:tw-mt-0 lg:tw-max-w-none",attrs:{href:"https://twitter.com/CicloTIC",target:"_blank"}},[e("div",{staticClass:"tw-absolute tw-w-full tw-h-full tw-rounded-3xl tw-bg-dark-700 2xl:tw-left-10 2xl:tw-top-10 lg:tw-top-4 lg:tw-left-4 sm:tw-top-8 sm:tw-left-8"},[e("svg",{staticClass:"tw-absolute tw-inset-y-0 tw-top-0 tw-z-20 tw-w-1/4 tw-h-full tw-right-1/4 tw-text-dark-700",attrs:{preserveaspectratio:"none",viewbox:"0 0 100 100",fill:"currentcolor"}},[e("polygon",{attrs:{points:"0,0 100,0 0,100"}})]),t._v(" "),e("div",{staticClass:"tw-absolute tw-inset-y-0 tw-z-10 tw-w-1/2 tw-h-full tw-left-1/2 tw-bg-dark-800 tw-rounded-r-3xl"})]),t._v(" "),e("img",{staticClass:"tw-z-30 tw-object-cover tw-w-auto tw-h-full tw-shadow-xl tw-rounded-3xl",attrs:{src:"/img/aliados/ciclotic.jpg"}})])]),t._v(" "),e("div",{staticClass:"tw-relative tw-mt-16 sm:tw-mt-24 lg:tw-mt-32 lg:tw-grid lg:tw-grid-cols-2 lg:tw-auto-rows-max lg:tw-gap-x-12"},[t._m(10),t._v(" "),e("a",{staticClass:"tw-relative tw-flex tw-items-center tw-justify-center tw-max-w-lg tw-mx-auto tw-mt-10 lg:tw-order-1 lg:tw-mt-0 lg:tw-max-w-none",attrs:{href:"https://twitter.com/fizok_web3",target:"_blank"}},[e("div",{staticClass:"tw-absolute tw-w-full tw-h-full tw-rounded-3xl tw-bg-dark-700 2xl:tw-right-10 2xl:tw-top-10 lg:tw-top-4 lg:tw-right-4 sm:tw-top-8 sm:tw-right-8"},[e("svg",{staticClass:"tw-absolute tw-inset-y-0 tw-top-0 tw-z-20 tw-w-1/4 tw-h-full tw-right-1/4 tw-text-dark-700",attrs:{preserveaspectratio:"none",viewbox:"0 0 100 100",fill:"currentcolor"}},[e("polygon",{attrs:{points:"0,0 100,0 0,100"}})]),t._v(" "),e("div",{staticClass:"tw-absolute tw-inset-y-0 tw-z-10 tw-w-1/2 tw-h-full tw-left-1/2 tw-bg-dark-800 tw-rounded-r-3xl"})]),t._v(" "),e("img",{staticClass:"tw-z-30 tw-object-cover tw-w-auto tw-h-full tw-shadow-xl tw-rounded-3xl",attrs:{src:"/img/aliados/fizok.jpg"}})])]),t._v(" "),e("div",{staticClass:"tw-relative tw-mt-16 sm:tw-mt-24 lg:tw-mt-32 lg:tw-grid lg:tw-grid-cols-2 lg:tw-auto-rows-max lg:tw-gap-x-12"},[t._m(11),t._v(" "),e("a",{staticClass:"tw-relative tw-flex tw-items-center tw-justify-center tw-max-w-lg tw-mx-auto tw-mt-10 lg:tw-mt-0 lg:tw-max-w-none",attrs:{href:"https://twitter.com/aguille_",target:"_blank"}},[e("div",{staticClass:"tw-absolute tw-w-full tw-h-full tw-rounded-3xl tw-bg-dark-700 2xl:tw-left-10 2xl:tw-top-10 lg:tw-top-4 lg:tw-left-4 sm:tw-top-8 sm:tw-left-8"},[e("svg",{staticClass:"tw-absolute tw-inset-y-0 tw-top-0 tw-z-20 tw-w-1/4 tw-h-full tw-right-1/4 tw-text-dark-700",attrs:{preserveaspectratio:"none",viewbox:"0 0 100 100",fill:"currentcolor"}},[e("polygon",{attrs:{points:"0,0 100,0 0,100"}})]),t._v(" "),e("div",{staticClass:"tw-absolute tw-inset-y-0 tw-z-10 tw-w-1/2 tw-h-full tw-left-1/2 tw-bg-dark-800 tw-rounded-r-3xl"})]),t._v(" "),e("img",{staticClass:"tw-z-30 tw-object-cover tw-w-auto tw-h-full tw-shadow-xl tw-rounded-3xl",attrs:{src:"/img/aliados/guille.jpg"}})])]),t._v(" "),e("div",{staticClass:"tw-relative tw-mt-16 sm:tw-mt-24 lg:tw-mt-32 lg:tw-grid lg:tw-grid-cols-2 lg:tw-auto-rows-max lg:tw-gap-x-12"},[t._m(12),t._v(" "),e("a",{staticClass:"tw-relative tw-flex tw-items-center tw-justify-center tw-max-w-lg tw-mx-auto tw-mt-10 lg:tw-order-1 lg:tw-mt-0 lg:tw-max-w-none",attrs:{href:"https://twitter.com/EstudioKz",target:"_blank"}},[e("div",{staticClass:"tw-absolute tw-w-full tw-h-full tw-rounded-3xl tw-bg-dark-700 2xl:tw-right-10 2xl:tw-top-10 lg:tw-top-4 lg:tw-right-4 sm:tw-top-8 sm:tw-right-8"},[e("svg",{staticClass:"tw-absolute tw-inset-y-0 tw-top-0 tw-z-20 tw-w-1/4 tw-h-full tw-right-1/4 tw-text-dark-700",attrs:{preserveaspectratio:"none",viewbox:"0 0 100 100",fill:"currentcolor"}},[e("polygon",{attrs:{points:"0,0 100,0 0,100"}})]),t._v(" "),e("div",{staticClass:"tw-absolute tw-inset-y-0 tw-z-10 tw-w-1/2 tw-h-full tw-left-1/2 tw-bg-dark-800 tw-rounded-r-3xl"})]),t._v(" "),e("img",{staticClass:"tw-z-30 tw-object-cover tw-w-auto tw-h-full tw-shadow-xl tw-rounded-3xl",attrs:{src:"/img/aliados/kzestudios.jpg"}})])]),t._v(" "),e("div",{staticClass:"tw-relative tw-mt-16 sm:tw-mt-24 lg:tw-mt-32 lg:tw-grid lg:tw-grid-cols-2 lg:tw-auto-rows-max lg:tw-gap-x-12"},[t._m(13),t._v(" "),e("a",{staticClass:"tw-relative tw-flex tw-items-center tw-justify-center tw-max-w-lg tw-mx-auto tw-mt-10 lg:tw-mt-0 lg:tw-max-w-none",attrs:{href:"https://twitter.com/Yisbelpd",target:"_blank"}},[e("div",{staticClass:"tw-absolute tw-w-full tw-h-full tw-rounded-3xl tw-bg-dark-700 2xl:tw-left-10 2xl:tw-top-10 lg:tw-top-4 lg:tw-left-4 sm:tw-top-8 sm:tw-left-8"},[e("svg",{staticClass:"tw-absolute tw-inset-y-0 tw-top-0 tw-z-20 tw-w-1/4 tw-h-full tw-right-1/4 tw-text-dark-700",attrs:{preserveaspectratio:"none",viewbox:"0 0 100 100",fill:"currentcolor"}},[e("polygon",{attrs:{points:"0,0 100,0 0,100"}})]),t._v(" "),e("div",{staticClass:"tw-absolute tw-inset-y-0 tw-z-10 tw-w-1/2 tw-h-full tw-left-1/2 tw-bg-dark-800 tw-rounded-r-3xl"})]),t._v(" "),e("img",{staticClass:"tw-z-30 tw-object-cover tw-w-auto tw-h-full tw-shadow-xl tw-rounded-3xl",attrs:{src:"/img/aliados/yis.jpg"}})])])])]),t._v(" "),e("section",{staticClass:"tw-max-w-screen-xl tw-px-4 tw-py-12 tw-mx-auto md:tw-py-16 sm:tw-px-6 lg:tw-px-8"},[e("div",{staticClass:"tw-relative tw-py-16 tw-rounded-3xl tw-bg-dark-700 lg:tw-py-20"},[e("svg",{staticClass:"tw-absolute tw-inset-y-0 tw-top-0 tw-z-20 tw-w-1/4 tw-h-full tw-right-1/4 tw-text-dark-700",attrs:{preserveaspectratio:"none",viewbox:"0 0 100 100",fill:"currentcolor"}},[e("polygon",{attrs:{points:"0,0 100,0 0,100"}})]),t._v(" "),e("div",{staticClass:"tw-absolute tw-inset-y-0 tw-z-10 tw-w-1/2 tw-h-full tw-left-1/2 tw-bg-dark-800 tw-rounded-r-3xl"}),t._v(" "),t._m(14)])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"tw-w-full tw-max-w-3xl tw-mx-auto tw-text-center lg:tw-max-w-5xl"},[e("p",{staticClass:"tw-inline-flex tw-items-center tw-justify-center tw-px-6 tw-py-2 tw-text-sm tw-font-medium tw-tracking-wide tw-text-white tw-rounded-r-full tw-rounded-tl-full tw-bg-gradient-to-r tw-from-dark-600 tw-to-dark-700"},[t._v("\n          Una alianza para crecer juntos\n        ")]),t._v(" "),e("h1",{staticClass:"tw-mt-4 tw-text-4xl tw-font-extrabold tw-text-white md:tw-mt-5 sm:tw-text-5xl md:tw-text-6xl"},[t._v("\n          Torneo de inauguración de Mad Fénix\n        ")])])},function(){var t=this._self._c;return t("div",{staticClass:"tw-relative tw-mx-auto tw-mt-12 tw-shadow-xl tw-rounded-3xl lg:tw-mt-16 tw-aspect-w-2 tw-aspect-h-1"},[t("img",{staticClass:"tw-absolute tw-inset-0 tw-object-cover tw-object-center tw-w-full tw-h-full tw-align-middle tw-rounded-3xl",attrs:{src:"/img/home/chicaJugandoA2Elevado.jpg"}})])},function(){var t=this,e=t._self._c;return e("section",{staticClass:"tw-px-4 tw-py-12 md:tw-py-16 sm:tw-px-6 lg:tw-px-8"},[e("div",{staticClass:"tw-max-w-screen-md tw-mx-auto tw-text-center lg:tw-max-w-screen-xl"},[e("p",{staticClass:"tw-inline-flex tw-items-center tw-justify-center tw-px-6 tw-py-2 tw-text-sm tw-font-medium tw-tracking-wide tw-text-white tw-rounded-r-full tw-rounded-tl-full tw-bg-gradient-to-r tw-from-dark-600 tw-to-dark-700"},[t._v("\n        Sobre el videojueo\n      ")]),t._v(" "),e("div",{staticClass:"tw-flex tw-flex-wrap tw-w-full tw-mx-auto tw-mt-6 tw-text-center"},[e("div",{staticClass:"tw-w-full tw-mx-auto lg:tw-w-4/5"},[e("p",{staticClass:"tw-text-2xl tw-font-medium tw-tracking-tight tw-text-white sm:tw-text-3xl lg:tw-text-4xl lg:tw-leading-tight tw-mt-4"},[t._v("\n            2Elevado es un "),e("b",[t._v("juego casual")]),t._v(" inspirado en 2048, con una jugabilidad que lo hace distinto del original.\n          ")]),t._v(" "),e("p",{staticClass:"tw-text-2xl tw-font-medium tw-tracking-tight tw-text-white sm:tw-text-3xl lg:tw-text-4xl lg:tw-leading-tight tw-mt-4"},[t._v("\n            Entre otras acciones hay una moneda que solo se puede conseguir interacturando con nosotros o nuestros aliados, las "),e("b",[t._v("plumas fénix")]),t._v(". Estas dan una pequeña ventaja en el juego.\n          ")]),t._v(" "),e("p",{staticClass:"tw-text-2xl tw-font-medium tw-tracking-tight tw-text-white sm:tw-text-3xl lg:tw-text-4xl lg:tw-leading-tight tw-mt-4"},[t._v("\n            Mad Fénix ha creado una plataforma que permite organizar torneos y "),e("b",[t._v("aumentar la interacción")]),t._v(" de los usuarios en redes sociales.\n          ")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"tw-relative tw-z-30 tw-flex tw-flex-col tw-items-center tw-justify-center tw-px-4 tw-mx-auto tw-text-center lg:tw-px-16 lg:tw-text-left"},[e("div",{staticClass:"relative tw-max-w-screen-md tw-mx-auto tw-text-center"},[e("p",{staticClass:"tw-z-30 tw-inline-flex tw-items-center tw-justify-center tw-px-6 tw-py-2 tw-text-sm tw-font-medium tw-tracking-wide tw-text-white tw-rounded-r-full tw-rounded-tl-full tw-bg-gradient-to-r tw-from-dark-800 tw-to-dark-900"},[t._v("\n              Estadísticas del torneo\n            ")]),t._v(" "),e("h3",{staticClass:"tw-mt-6 tw-text-3xl tw-font-extrabold tw-text-white sm:tw-text-4xl"},[t._v("\n              Queremos cumplir con las expectativas de nuestros usuarios y aliados\n            ")]),t._v(" "),e("p",{staticClass:"tw-mt-6 tw-text-xl tw-text-dark-300"},[t._v("\n              Con un torneo divertido que permita una mayor interación en redes, discord y los canales de cada proyecto. Haciendo que nos conozcamos entre todos.\n            ")])]),t._v(" "),e("div",{staticClass:"tw-flex tw-flex-wrap tw-justify-center tw-w-full tw-mt-10 tw-text-center md:tw-mt-12 lg:tw--mx-4"},[e("div",{staticClass:"tw-relative tw-w-full tw-px-4 md:tw-w-1/3 lg:tw-px-8"},[e("p",{staticClass:"tw-text-5xl tw-font-extrabold tw-text-center tw-text-white"},[t._v("\n                +500€\n              ")]),t._v(" "),e("p",{staticClass:"tw-mt-2 tw-text-lg tw-font-medium tw-text-dark-300"},[t._v("\n                Premios\n              ")])]),t._v(" "),e("div",{staticClass:"relative w-full px-4 mt-8 md:mt-0 md:w-1/3 lg:px-8"},[e("p",{staticClass:"tw-text-5xl tw-font-extrabold tw-text-center tw-text-white"},[t._v("\n                9\n              ")]),t._v(" "),e("p",{staticClass:"tw-mt-2 tw-text-lg tw-font-medium tw-leading-relaxed tw-text-dark-300"},[t._v("\n                Proyectos aliados\n              ")])]),t._v(" "),e("div",{staticClass:"tw-relative tw-w-full tw-px-4 tw-mt-8 md:tw-mt-0 md:tw-w-1/3 lg:tw-px-8"},[e("p",{staticClass:"tw-text-5xl tw-font-extrabold tw-text-center tw-text-white"},[t._v("\n                5\n              ")]),t._v(" "),e("p",{staticClass:"tw-mt-2 tw-text-lg tw-font-medium tw-leading-relaxed tw-text-dark-300"},[t._v("\n                Usuarios registrados\n              ")])])]),t._v(" "),e("div",{staticClass:"tw-flex tw-justify-center tw-w-full tw-mt-12 lg:tw-mt-16"},[e("a",{staticClass:"tw-relative tw-flex tw-items-center tw-justify-center tw-w-auto tw-px-8 tw-text-base tw-font-medium tw-leading-snug tw-text-white tw-h-14 tw-group",attrs:{href:"https://docs.google.com/forms/d/e/1FAIpQLSc8BXQSMNmvtsCFhlgnXl96ifjTHYl3qm0M660883Kd9w-y-g/viewform",target:"_blank"}},[e("span",{staticClass:"tw-absolute tw-top-0 tw-left-0 tw-z-10 tw-block tw-w-full tw-h-full tw-transition-all tw-ease-in-out tw-rounded-full tw-bg-gradient-to-r tw-duration-250 tw-from-dark-800 tw-to-dark-900 md:tw-w-14 md:group-hover:tw-w-full"}),t._v(" "),e("span",{staticClass:"tw-relative tw-z-20"},[t._v("Únete con tu proyecto")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"tw-w-full tw-max-w-xl tw-mx-auto tw-text-center lg:tw-max-w-3xl md:tw-max-w-2xl"},[e("p",{staticClass:"tw-inline-flex tw-items-center tw-justify-center tw-px-6 tw-py-2 tw-text-sm tw-font-medium tw-tracking-wide tw-text-white tw-rounded-r-full tw-rounded-tl-full tw-bg-gradient-to-r tw-from-dark-600 tw-to-dark-700"},[t._v("\n          Nuestros aliados\n        ")]),t._v(" "),e("h2",{staticClass:"tw-mt-6 tw-text-3xl tw-font-extrabold tw-text-white sm:tw-text-4xl md:tw-text-5xl"},[t._v("\n          Proyectos que colaboran con el torneo\n        ")]),t._v(" "),e("p",{staticClass:"tw-mt-6 tw-text-xl tw-text-dark-300"},[t._v("\n          Cada comunidad tendrá su propio torneo en la primera fase. Cuando termine la primera semana los 5 primeros clasificados de cada una pasarán a la segunda fase. Cuando termine la segunda semana los tres primeros clasificados se llevarán el premio.\n        ")])])},function(){var t=this._self._c;return t("div",{staticClass:"tw-flex tw-flex-col tw-items-center tw-justify-center lg:tw-items-start"},[t("div",{staticClass:"tw-w-full tw-max-w-lg tw-text-left md:tw-text-center lg:tw-text-left md:tw-max-w-2xl"},[t("h2",{staticClass:"tw-mt-4 tw-text-2xl tw-font-extrabold tw-text-white lg:tw-mt-6 sm:tw-text-3xl md:tw-text-4xl"},[this._v("\n              Ivan.hbar de CriptoATH\n            ")])])])},function(){var t=this._self._c;return t("div",{staticClass:"tw-flex tw-flex-col tw-items-center tw-justify-center lg:tw-order-2 lg:tw-items-start"},[t("div",{staticClass:"tw-w-full tw-max-w-lg tw-text-left md:tw-text-center lg:tw-text-left md:tw-max-w-2xl"},[t("h2",{staticClass:"tw-mt-4 tw-text-2xl tw-font-extrabold tw-text-white lg:tw-mt-6 sm:tw-text-3xl md:tw-text-4xl"},[this._v("\n              Cocobay\n            ")])])])},function(){var t=this._self._c;return t("div",{staticClass:"tw-flex tw-flex-col tw-items-center tw-justify-center lg:tw-items-start"},[t("div",{staticClass:"tw-w-full tw-max-w-lg tw-text-left md:tw-text-center lg:tw-text-left md:tw-max-w-2xl"},[t("h2",{staticClass:"tw-mt-4 tw-text-2xl tw-font-extrabold tw-text-white lg:tw-mt-6 sm:tw-text-3xl md:tw-text-4xl"},[this._v("\n              Tony Emotions\n            ")])])])},function(){var t=this._self._c;return t("div",{staticClass:"tw-flex tw-flex-col tw-items-center tw-justify-center lg:tw-order-2 lg:tw-items-start"},[t("div",{staticClass:"tw-w-full tw-max-w-lg tw-text-left md:tw-text-center lg:tw-text-left md:tw-max-w-2xl"},[t("h2",{staticClass:"tw-mt-4 tw-text-2xl tw-font-extrabold tw-text-white lg:tw-mt-6 sm:tw-text-3xl md:tw-text-4xl"},[this._v("\n              Bookers\n            ")])])])},function(){var t=this._self._c;return t("div",{staticClass:"tw-flex tw-flex-col tw-items-center tw-justify-center lg:tw-items-start"},[t("div",{staticClass:"tw-w-full tw-max-w-lg tw-text-left md:tw-text-center lg:tw-text-left md:tw-max-w-2xl"},[t("h2",{staticClass:"tw-mt-4 tw-text-2xl tw-font-extrabold tw-text-white lg:tw-mt-6 sm:tw-text-3xl md:tw-text-4xl"},[this._v("\n              cicloTIC\n            ")])])])},function(){var t=this._self._c;return t("div",{staticClass:"tw-flex tw-flex-col tw-items-center tw-justify-center lg:tw-order-2 lg:tw-items-start"},[t("div",{staticClass:"tw-w-full tw-max-w-lg tw-text-left md:tw-text-center lg:tw-text-left md:tw-max-w-2xl"},[t("h2",{staticClass:"tw-mt-4 tw-text-2xl tw-font-extrabold tw-text-white lg:tw-mt-6 sm:tw-text-3xl md:tw-text-4xl"},[this._v("\n              Fizok\n            ")])])])},function(){var t=this._self._c;return t("div",{staticClass:"tw-flex tw-flex-col tw-items-center tw-justify-center lg:tw-items-start"},[t("div",{staticClass:"tw-w-full tw-max-w-lg tw-text-left md:tw-text-center lg:tw-text-left md:tw-max-w-2xl"},[t("h2",{staticClass:"tw-mt-4 tw-text-2xl tw-font-extrabold tw-text-white lg:tw-mt-6 sm:tw-text-3xl md:tw-text-4xl"},[this._v("\n              guille.hbar\n            ")])])])},function(){var t=this._self._c;return t("div",{staticClass:"tw-flex tw-flex-col tw-items-center tw-justify-center lg:tw-order-2 lg:tw-items-start"},[t("div",{staticClass:"tw-w-full tw-max-w-lg tw-text-left md:tw-text-center lg:tw-text-left md:tw-max-w-2xl"},[t("h2",{staticClass:"tw-mt-4 tw-text-2xl tw-font-extrabold tw-text-white lg:tw-mt-6 sm:tw-text-3xl md:tw-text-4xl"},[this._v("\n              KZEstudio\n            ")])])])},function(){var t=this._self._c;return t("div",{staticClass:"tw-flex tw-flex-col tw-items-center tw-justify-center lg:tw-items-start"},[t("div",{staticClass:"tw-w-full tw-max-w-lg tw-text-left md:tw-text-center lg:tw-text-left md:tw-max-w-2xl"},[t("h2",{staticClass:"tw-mt-4 tw-text-2xl tw-font-extrabold tw-text-white lg:tw-mt-6 sm:tw-text-3xl md:tw-text-4xl"},[this._v("\n              Yis\n            ")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"tw-relative tw-z-30 tw-flex tw-flex-col tw-items-center tw-justify-center tw-px-4 tw-mx-auto tw-text-center sm:tw-px-16 lg:tw-flex-row lg:tw-text-left"},[e("div",{staticClass:"tw-max-w-lg tw-text-2xl tw-font-bold sm:tw-text-4xl lg:tw-w-1/2"},[e("h5",{staticClass:"tw-text-4xl tw-font-extrabold tw-tracking-tight tw-text-white sm:tw-text-5xl"},[t._v("\n            Únete con tu proyecto\n          ")])]),t._v(" "),e("div",{staticClass:"tw-flex tw-justify-center tw-max-w-lg tw-mt-10 lg:tw-w-1/2 lg:tw-mt-0 lg:tw-justify-end"},[e("a",{staticClass:"tw-flex tw-items-center tw-justify-center tw-w-auto tw-px-8 tw-py-4 tw-text-base tw-font-semibold tw-leading-snug tw-transition tw-ease-in-out tw-bg-white tw-rounded-full tw-h-14 tw-duration-250 tw-text-dark-900 hover:tw-text-white focus:tw-outline-none hover:tw-bg-dark-900",attrs:{href:"https://docs.google.com/forms/d/e/1FAIpQLSc8BXQSMNmvtsCFhlgnXl96ifjTHYl3qm0M660883Kd9w-y-g/viewform",target:"_blank"}},[t._v("\n            Rellena el formulario\n          ")])])])}],!1,null,null,null);e.default=component.exports}}]);