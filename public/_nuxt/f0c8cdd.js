(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{583:function(t,e,w){"use strict";w.r(e);w(14),w(11),w(12),w(4),w(20),w(13),w(21);var l=w(2),r=w(77);function o(t,e){var w=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),w.push.apply(w,l)}return w}function n(t){for(var e=1;e<arguments.length;e++){var w=null!=arguments[e]?arguments[e]:{};e%2?o(Object(w),!0).forEach((function(e){Object(l.a)(t,e,w[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(w)):o(Object(w)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(w,e))}))}return t}var d={middleware:"basic",head:{title:"Creamos juegos que mueven comunidades - Mad Fénix",meta:[{hid:"description",name:"description",content:"Desarrolladora indie Open Source. Desde torneos a premios personalizados en nuestro pase de temporada."},{hid:"og:url",name:"og:url",content:"https://madfenix.com/"},{hid:"og:site_name",name:"og:site_name",content:"Creamos juegos que mueven comunidades - Mad Fénix"},{hid:"og:image",name:"og:image",content:"https://madfenix.com/img/home/chicaJugandoA2Elevado.jpg"},{hid:"og:image:width",name:"og:image:width",content:"1067"},{hid:"og:image:height",name:"og:image:height",content:"684"},{hid:"og:image:type",name:"og:image:type",content:"image/jpg"},{hid:"twitter:site",name:"twitter:site",content:"@MadFenixGames"}]},data:function(){return{}},computed:{serverMessage:function(){return this.$store.state.serverMessage.serverMessage},token:function(){return this.$store.state.user.token}},mounted:function(){this.setUserCookies(),this.$axios.setToken(this.token,"Bearer")},methods:n(n({setUserCookies:function(){var t=this.$cookies.get("token");if(t){this.setToken(t);var e=this.$cookies.get("user");if(e)this.updateUser(e);else{console.log("test");try{this.fetchUser()}catch(t){}}}}},Object(r.b)({setServerMessage:"serverMessage/setServerMessage",setToken:"user/setToken",updateUser:"user/updateUser",fetchUser:"user/fetchUser"})),Object(r.c)({updateUser:"user/updateUser"}))},c=w(37),component=Object(c.a)(d,(function(){var t=this,e=t._self._c;return e("div",[t._m(0),t._v(" "),e("section",{staticClass:"tw-max-w-screen-xl tw-px-4 tw-py-12 tw-mx-auto md:tw-py-16 sm:tw-px-6 lg:tw-px-8"},[e("div",{staticClass:"tw-relative tw-py-16 tw-rounded-3xl tw-bg-dark-700 lg:tw-py-20"},[e("svg",{staticClass:"tw-absolute tw-inset-y-0 tw-top-0 tw-z-20 tw-w-1/4 tw-h-full tw-right-1/4 tw-text-dark-700",attrs:{preserveAspectRatio:"none",viewBox:"0 0 100 100",fill:"currentcolor"}},[e("polygon",{attrs:{points:"0,0 100,0 0,100"}})]),t._v(" "),e("div",{staticClass:"tw-absolute tw-inset-y-0 tw-z-10 tw-w-1/2 tw-h-full tw-left-1/2 tw-bg-dark-800 tw-rounded-r-3xl"}),t._v(" "),t._m(1)])]),t._v(" "),e("section",{staticClass:"tw-px-4 tw-pt-6 tw-pb-12 tw-mx-auto tw-max-w-screen-2xl md:tw-pb-16 sm:tw-px-6 lg:tw-px-8"},[e("div",{staticClass:"tw-relative tw-shadow-xl tw-rounded-3xl sm:tw-overflow-hidden tw-bg-dark-700"},[e("svg",{staticClass:"tw-absolute tw-inset-y-0 tw-z-20 tw-w-1/4 tw-h-full tw-right-1/4 tw-text-dark-700",attrs:{preserveAspectRatio:"none",viewBox:"0 0 100 100",fill:"currentcolor"}},[e("polygon",{attrs:{points:"0,0 100,0 0,100"}})]),t._v(" "),e("div",{staticClass:"tw-absolute tw-inset-y-0 tw-z-10 tw-w-1/2 tw-h-full tw-left-1/2 tw-bg-dark-800 tw-rounded-r-3xl"}),t._v(" "),e("div",{staticClass:"tw-relative tw-max-w-screen-xl tw-px-4 tw-py-16 tw-mx-auto lg:tw-grid lg:tw-grid-cols-2 lg:tw-auto-rows-max lg:tw-gap-x-8 xl:tw-gap-x-12 sm:tw-px-6 sm:tw-py-24 lg:tw-py-32 lg:tw-px-8"},[e("div",{staticClass:"tw-flex tw-flex-col tw-items-center tw-justify-center lg:tw-items-start"},[e("p",{staticClass:"tw-z-30 tw-inline-flex tw-items-center tw-justify-center tw-px-6 tw-py-2 tw-text-sm tw-font-medium tw-tracking-wide tw-text-white tw-rounded-r-full tw-rounded-tl-full tw-bg-gradient-to-r tw-from-dark-800 tw-to-dark-900"},[t._v("\n            Bienvenid@\n          ")]),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"tw-z-30 tw-mt-10 sm:tw-flex sm:tw-justify-center lg:tw-justify-start"},[e("nuxt-link",{staticClass:"tw-flex tw-items-center tw-justify-center tw-w-auto tw-px-8 tw-py-4 tw-text-base tw-font-semibold tw-leading-snug tw-transition tw-ease-in-out tw-bg-white tw-rounded-full tw-h-14 tw-duration-250 tw-text-dark-900 hover:tw-text-white focus:tw-outline-none hover:tw-bg-dark-900",attrs:{to:"/registro"}},[t._v("\n              Regístrate y te avisamos\n            ")]),t._v(" "),e("nuxt-link",{staticClass:"tw-relative tw-flex tw-items-center tw-justify-center tw-w-auto tw-px-8 tw-mt-5 tw-ml-0 tw-text-base tw-font-medium tw-leading-snug tw-text-white tw-h-14 sm:tw-ml-4 sm:tw-mt-0 tw-group",attrs:{to:"/blog/2024-01-22-buscamos-creadores-de-contenido",href:"services.html"}},[e("span",{staticClass:"tw-absolute tw-top-0 tw-left-0 tw-z-10 tw-block tw-w-full tw-h-full tw-transition-all tw-ease-in-out tw-rounded-full tw-bg-gradient-to-r tw-duration-250 tw-from-dark-800 tw-to-dark-900 md:tw-w-14 md:group-hover:tw-w-full"}),t._v(" "),e("span",{staticClass:"tw-relative tw-z-20"},[t._v("Colabora con nosotros")])])],1)]),t._v(" "),t._m(3)])])]),t._v(" "),e("div",{staticClass:"tw-relative tw-w-full tw-h-16 md:tw-h-32 lg:tw-h-48"},[e("svg",{staticClass:"tw-absolute tw-w-full tw-h-full tw-text-dark-800",attrs:{preserveAspectRatio:"none",viewBox:"0 0 100 100",fill:"currentcolor"}},[e("polygon",{attrs:{points:"0,0 0,100 100,100"}})])]),t._v(" "),e("section",{staticClass:"tw-px-4 tw-py-10 md:tw-py-12 tw-bg-dark-800 sm:tw-px-6 lg:tw-px-8"},[t._m(4),t._v(" "),e("div",{staticClass:"tw-grid tw-justify-center tw-w-full tw-gap-12 tw-mx-auto tw-mt-12 lg:tw-grid-cols-2 lg:tw-gap-8 lg:tw-mt-16 lg:tw-max-w-screen-xl xl:tw-max-w-screen-xl lg:tw-justify-start"},[e("div",[e("div",{staticClass:"tw-w-full"},[e("div",{staticClass:"tw-max-w-lg tw-mx-auto lg:tw-mr-auto xl:tw-mx-auto"},[e("div",{staticClass:"tw-relative tw-flex tw-w-full tw-px-8 tw-py-6 tw-shadow-xl tw-rounded-3xl tw-bg-dark-700 sm:tw-px-10"},[e("div",{staticClass:"tw-text-center sm:tw-flex sm:tw-text-left"},[e("div",{staticClass:"tw-w-full sm:tw-w-1/5"},[e("div",{staticClass:"tw-flex tw-items-center tw-justify-center tw-w-12 tw-h-12 tw-mx-auto tw-bg-gradient-to-r tw-rounded-2xl tw-text-dark-300 sm:tw-mx-0 tw-from-dark-800 tw-to-dark-900"},[e("svg",{staticClass:"tw-w-6 tw-h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"}})])])]),t._v(" "),t._m(5)])])])]),t._v(" "),e("div",{staticClass:"tw-w-full tw-mt-8 lg:tw-mt-5 xl:tw-mt-8 2xl:tw-mt-10 xl:tw-pr-18 2xl:tw-pr-28"},[e("div",{staticClass:"tw-max-w-lg tw-mx-auto lg:tw-mr-auto xl:tw-mx-auto"},[e("div",{staticClass:"tw-flex tw-w-full tw-px-8 tw-py-6 tw-shadow-xl tw-rounded-3xl tw-bg-dark-700 sm:tw-px-10"},[e("div",{staticClass:"tw-text-center sm:tw-flex sm:tw-text-left"},[e("div",{staticClass:"tw-w-full sm:tw-w-1/5"},[e("div",{staticClass:"tw-flex tw-items-center tw-justify-center tw-w-12 tw-h-12 tw-mx-auto tw-bg-gradient-to-r tw-rounded-2xl tw-text-dark-300 sm:tw-mx-0 tw-from-dark-800 tw-to-dark-900"},[e("svg",{staticClass:"tw-w-6 tw-h-6",staticStyle:{"enable-background":"new 0 0 32 32"},attrs:{version:"1.1",viewBox:"0 0 32 32",stroke:"currentColor","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("path",{staticClass:"st1",attrs:{d:"M21.8,10C15,14.5,7.1,23.4,5,29.4"}}),e("path",{staticClass:"st0",attrs:{d:"M5.7,22.4c-0.1-2.6,0.2-6,2-7.8c8.9-8.9,21-11.3,21-11.3s-2.5,9.8-8.5,17.7l0,0H15l2.4,3.3  c-1.8,1.8-5.2,2.1-7.7,2"}})])])]),t._v(" "),t._m(6)])])])]),t._v(" "),e("div",{staticClass:"tw-w-full tw-mt-8 lg:tw-mt-5 xl:tw-mt-8 2xl:tw-mt-10"},[e("div",{staticClass:"tw-max-w-lg tw-mx-auto lg:tw-mr-auto xl:tw-mx-auto"},[e("div",{staticClass:"tw-flex tw-w-full tw-px-8 tw-py-6 tw-shadow-xl tw-rounded-3xl tw-bg-dark-700 sm:tw-px-10"},[e("div",{staticClass:"tw-text-center sm:tw-flex sm:tw-text-left"},[e("div",{staticClass:"tw-w-full sm:tw-w-1/5"},[e("div",{staticClass:"tw-flex tw-items-center tw-justify-center tw-w-12 tw-h-12 tw-mx-auto tw-bg-gradient-to-r tw-rounded-2xl tw-text-dark-300 sm:tw-mx-0 tw-from-dark-800 tw-to-dark-900"},[e("svg",{staticClass:"tw-w-6 tw-h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"}})])])]),t._v(" "),t._m(7)])])])])]),t._v(" "),t._m(8)])]),t._v(" "),e("div",{staticClass:"tw-relative tw-w-full tw-h-16 tw-bg-dark-800 md:tw-h-32 lg:tw-h-48"},[e("svg",{staticClass:"tw-absolute tw-w-full tw-h-full tw-text-dark-900",attrs:{preserveAspectRatio:"none",viewBox:"0 0 100 100",fill:"currentcolor"}},[e("polygon",{attrs:{points:"0,100 100,100 100,0"}})])]),t._v(" "),e("section",{staticClass:"tw-px-4 tw-py-12 md:tw-py-16 sm:tw-px-6 lg:tw-px-8"},[t._m(9),t._v(" "),e("div",{staticClass:"tw-max-w-screen-xl tw-mx-auto tw-mt-10 md:tw-mt-12 lg:tw-mt-16"},[e("div",{staticClass:"tw-order-2 tw-mt-12 tw-overflow-hidden md:tw-mt-0 md:tw-order-1 md:tw-col-span-9"},[e("div",{staticClass:"tw-grid tw-gap-6 lg:tw-grid-cols-2 md:tw-gap-8"},[e("div",{staticClass:"tw-max-w-lg tw-mx-auto tw-shadow-xl tw-rounded-3xl tw-bg-dark-700"},[e("nuxt-link",{attrs:{to:"/blog/2024-03-12-tokens-mad-fenix"}},[e("div",{staticClass:"tw-w-full tw-h-64 tw-bg-center tw-bg-cover tw-rounded-t-3xl",staticStyle:{"background-image":"url('/img/blog/tokensWeb3.jpg')"},attrs:{"data-background-image":"images/work-image-01.jpg"}},[e("p",{staticClass:"tw-inline-flex tw-items-center tw-justify-center tw-px-6 tw-py-2 tw-mt-4 tw-ml-6 tw-text-xs tw-font-medium tw-tracking-wide tw-text-white tw-rounded-r-full tw-rounded-tl-full tw-bg-gradient-to-r lg:tw-ml-4 xl:tw-ml-6 tw-from-dark-700 tw-to-dark-800"},[t._v("\n                  Bases\n                ")])])]),t._v(" "),e("div",{staticClass:"tw-w-full tw-p-6 lg:tw-p-4 xl:tw-p-6"},[e("div",{staticClass:"tw-flex tw-flex-wrap tw-w-full"},[e("div",{staticClass:"tw-flex tw-items-center tw-justify-start tw-w-1/2"},[e("svg",{staticClass:"tw-w-5 tw-h-5 tw-text-dark-400",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[e("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),e("rect",{attrs:{x:"4",y:"5",width:"16",height:"16",rx:"2"}}),t._v(" "),e("line",{attrs:{x1:"16",y1:"3",x2:"16",y2:"7"}}),t._v(" "),e("line",{attrs:{x1:"8",y1:"3",x2:"8",y2:"7"}}),t._v(" "),e("line",{attrs:{x1:"4",y1:"11",x2:"20",y2:"11"}}),t._v(" "),e("line",{attrs:{x1:"11",y1:"15",x2:"12",y2:"15"}}),t._v(" "),e("line",{attrs:{x1:"12",y1:"15",x2:"12",y2:"18"}})]),t._v(" "),e("div",{staticClass:"tw-ml-2 tw-text-base tw-font-medium tw-leading-6 tw-text-dark-400"},[t._v("\n                    12 de Marzo 2024\n                  ")])]),t._v(" "),e("div",{staticClass:"tw-flex tw-justify-end tw-w-1/2 tw-space-x-1"},[e("svg",{staticClass:"tw-w-6 tw-h-6 tw-text-dark-400",staticStyle:{"enable-background":"new 0 0 32 32"},attrs:{version:"1.1",viewBox:"0 0 32 32",stroke:"currentColor","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("path",{staticClass:"st1",attrs:{d:"M21.8,10C15,14.5,7.1,23.4,5,29.4"}}),e("path",{staticClass:"st0",attrs:{d:"M5.7,22.4c-0.1-2.6,0.2-6,2-7.8c8.9-8.9,21-11.3,21-11.3s-2.5,9.8-8.5,17.7l0,0H15l2.4,3.3  c-1.8,1.8-5.2,2.1-7.7,2"}})])])]),t._v(" "),e("nuxt-link",{attrs:{to:"/blog/2024-03-12-tokens-mad-fenix"}},[e("h3",{staticClass:"tw-mt-6 tw-text-xl tw-font-semibold tw-leading-6 tw-text-white md:tw-text-2xl"},[t._v("\n                  Tokens de Mad Fénix\n                ")])]),t._v(" "),e("p",{staticClass:"tw-mt-1 tw-text-base tw-leading-relaxed tw-text-dark-300"},[t._v("\n                Conceptualización de los tres tokens del ecosistema: Plumas Fénix, Piezas de Oro y Dragones Custodio.\n              ")]),t._v(" "),e("div",{staticClass:"mt-8"},[e("nuxt-link",{staticClass:"tw-relative tw-inline-flex tw-items-center tw-justify-center tw-w-auto tw-h-12 tw-px-8 tw-text-base tw-font-medium tw-leading-snug tw-text-white md:tw-h-14 tw-group",attrs:{to:"/blog/2024-03-12-tokens-mad-fenix"}},[e("span",{staticClass:"tw-absolute tw-top-0 tw-left-0 tw-z-10 tw-block tw-w-full tw-h-full tw-transition-all tw-ease-in-out tw-rounded-full tw-bg-gradient-to-r tw-duration-250 tw-from-dark-800 tw-to-dark-900 md:tw-w-14 md:group-hover:tw-w-full"}),t._v(" "),e("span",{staticClass:"tw-relative tw-z-20"},[t._v("Ver noticia")])])],1)],1)],1),t._v(" "),e("div",{staticClass:"tw-max-w-lg tw-mx-auto tw-shadow-xl tw-rounded-3xl tw-bg-dark-700"},[e("nuxt-link",{attrs:{to:"/blog/2024-01-22-plataforma-web"}},[e("div",{staticClass:"tw-w-full tw-h-64 tw-bg-center tw-bg-cover tw-rounded-t-3xl",staticStyle:{"background-image":"url('/img/blog/encuentraTuTribu.jpg')"},attrs:{"data-background-image":"images/work-image-01.jpg"}},[e("p",{staticClass:"tw-inline-flex tw-items-center tw-justify-center tw-px-6 tw-py-2 tw-mt-4 tw-ml-6 tw-text-xs tw-font-medium tw-tracking-wide tw-text-white tw-rounded-r-full tw-rounded-tl-full tw-bg-gradient-to-r lg:tw-ml-4 xl:tw-ml-6 tw-from-dark-700 tw-to-dark-800"},[t._v("\n                  Plataforma web\n                ")])])]),t._v(" "),e("div",{staticClass:"tw-w-full tw-p-6 lg:tw-p-4 xl:tw-p-6"},[e("div",{staticClass:"tw-flex tw-flex-wrap tw-w-full"},[e("div",{staticClass:"tw-flex tw-items-center tw-justify-start tw-w-1/2"},[e("svg",{staticClass:"tw-w-5 tw-h-5 tw-text-dark-400",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[e("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),e("rect",{attrs:{x:"4",y:"5",width:"16",height:"16",rx:"2"}}),t._v(" "),e("line",{attrs:{x1:"16",y1:"3",x2:"16",y2:"7"}}),t._v(" "),e("line",{attrs:{x1:"8",y1:"3",x2:"8",y2:"7"}}),t._v(" "),e("line",{attrs:{x1:"4",y1:"11",x2:"20",y2:"11"}}),t._v(" "),e("line",{attrs:{x1:"11",y1:"15",x2:"12",y2:"15"}}),t._v(" "),e("line",{attrs:{x1:"12",y1:"15",x2:"12",y2:"18"}})]),t._v(" "),e("div",{staticClass:"tw-ml-2 tw-text-base tw-font-medium tw-leading-6 tw-text-dark-400"},[t._v("\n                    22 de Enero 2024\n                  ")])]),t._v(" "),e("div",{staticClass:"tw-flex tw-justify-end tw-w-1/2 tw-space-x-1"},[e("svg",{staticClass:"tw-w-6 tw-h-6 tw-text-dark-400",staticStyle:{"enable-background":"new 0 0 32 32"},attrs:{version:"1.1",viewBox:"0 0 32 32",stroke:"currentColor","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("path",{staticClass:"st1",attrs:{d:"M21.8,10C15,14.5,7.1,23.4,5,29.4"}}),e("path",{staticClass:"st0",attrs:{d:"M5.7,22.4c-0.1-2.6,0.2-6,2-7.8c8.9-8.9,21-11.3,21-11.3s-2.5,9.8-8.5,17.7l0,0H15l2.4,3.3  c-1.8,1.8-5.2,2.1-7.7,2"}})])])]),t._v(" "),e("nuxt-link",{attrs:{to:"/blog/2024-01-22-plataforma-web"}},[e("h3",{staticClass:"tw-mt-6 tw-text-xl tw-font-semibold tw-leading-6 tw-text-white md:tw-text-2xl"},[t._v("\n                  Lanzamiento de la página web\n                ")])]),t._v(" "),e("p",{staticClass:"tw-mt-1 tw-text-base tw-leading-relaxed tw-text-dark-300"},[t._v("\n                Torneos intercomunitarios y personalizados, el lanzamiento de nuestro primer juego y las exclusivas Plumas Fénix.\n              ")]),t._v(" "),e("div",{staticClass:"mt-8"},[e("nuxt-link",{staticClass:"tw-relative tw-inline-flex tw-items-center tw-justify-center tw-w-auto tw-h-12 tw-px-8 tw-text-base tw-font-medium tw-leading-snug tw-text-white md:tw-h-14 tw-group",attrs:{to:"/blog/2024-01-22-plataforma-web"}},[e("span",{staticClass:"tw-absolute tw-top-0 tw-left-0 tw-z-10 tw-block tw-w-full tw-h-full tw-transition-all tw-ease-in-out tw-rounded-full tw-bg-gradient-to-r tw-duration-250 tw-from-dark-800 tw-to-dark-900 md:tw-w-14 md:group-hover:tw-w-full"}),t._v(" "),e("span",{staticClass:"tw-relative tw-z-20"},[t._v("Ver noticia")])])],1)],1)],1),t._v(" "),e("div",{staticClass:"tw-max-w-lg tw-mx-auto tw-shadow-xl tw-rounded-3xl tw-bg-dark-700"},[e("nuxt-link",{attrs:{to:"/blog/2024-01-22-buscamos-creadores-de-contenido"}},[e("div",{staticClass:"tw-w-full tw-h-64 tw-bg-center tw-bg-cover tw-rounded-t-3xl",staticStyle:{"background-image":"url('/img/blog/buscamosCreadores.jpg')"},attrs:{"data-background-image":"images/work-image-01.jpg"}},[e("p",{staticClass:"tw-inline-flex tw-items-center tw-justify-center tw-px-6 tw-py-2 tw-mt-4 tw-ml-6 tw-text-xs tw-font-medium tw-tracking-wide tw-text-white tw-rounded-r-full tw-rounded-tl-full tw-bg-gradient-to-r lg:tw-ml-4 xl:tw-ml-6 tw-from-dark-700 tw-to-dark-800"},[t._v("\n                  Colaboradores\n                ")])])]),t._v(" "),e("div",{staticClass:"tw-w-full tw-p-6 lg:tw-p-4 xl:tw-p-6"},[e("div",{staticClass:"tw-flex tw-flex-wrap tw-w-full"},[e("div",{staticClass:"tw-flex tw-items-center tw-justify-start tw-w-1/2"},[e("svg",{staticClass:"tw-w-5 tw-h-5 tw-text-dark-400",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[e("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),e("rect",{attrs:{x:"4",y:"5",width:"16",height:"16",rx:"2"}}),t._v(" "),e("line",{attrs:{x1:"16",y1:"3",x2:"16",y2:"7"}}),t._v(" "),e("line",{attrs:{x1:"8",y1:"3",x2:"8",y2:"7"}}),t._v(" "),e("line",{attrs:{x1:"4",y1:"11",x2:"20",y2:"11"}}),t._v(" "),e("line",{attrs:{x1:"11",y1:"15",x2:"12",y2:"15"}}),t._v(" "),e("line",{attrs:{x1:"12",y1:"15",x2:"12",y2:"18"}})]),t._v(" "),e("div",{staticClass:"tw-ml-2 tw-text-base tw-font-medium tw-leading-6 tw-text-dark-400"},[t._v("\n                    22 de Enero 2024\n                  ")])]),t._v(" "),e("div",{staticClass:"tw-flex tw-justify-end tw-w-1/2 tw-space-x-1"},[e("svg",{staticClass:"tw-w-6 tw-h-6 tw-text-dark-400",staticStyle:{"enable-background":"new 0 0 32 32"},attrs:{version:"1.1",viewBox:"0 0 32 32",stroke:"currentColor","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("path",{staticClass:"st1",attrs:{d:"M21.8,10C15,14.5,7.1,23.4,5,29.4"}}),e("path",{staticClass:"st0",attrs:{d:"M5.7,22.4c-0.1-2.6,0.2-6,2-7.8c8.9-8.9,21-11.3,21-11.3s-2.5,9.8-8.5,17.7l0,0H15l2.4,3.3  c-1.8,1.8-5.2,2.1-7.7,2"}})])])]),t._v(" "),e("nuxt-link",{attrs:{to:"/blog/2024-01-22-buscamos-creadores-de-contenido"}},[e("h3",{staticClass:"tw-mt-6 tw-text-xl tw-font-semibold tw-leading-6 tw-text-white md:tw-text-2xl"},[t._v("\n                  Buscamos Creadores de Contenido\n                ")])]),t._v(" "),e("p",{staticClass:"tw-mt-1 tw-text-base tw-leading-relaxed tw-text-dark-300"},[t._v("\n                Mad Fénix busca creadores de contenido apasionad@s y creativos para aliarse y crecer juntos.\n              ")]),t._v(" "),e("div",{staticClass:"mt-8"},[e("nuxt-link",{staticClass:"tw-relative tw-inline-flex tw-items-center tw-justify-center tw-w-auto tw-h-12 tw-px-8 tw-text-base tw-font-medium tw-leading-snug tw-text-white md:tw-h-14 tw-group",attrs:{to:"/blog/2024-01-22-buscamos-creadores-de-contenido"}},[e("span",{staticClass:"tw-absolute tw-top-0 tw-left-0 tw-z-10 tw-block tw-w-full tw-h-full tw-transition-all tw-ease-in-out tw-rounded-full tw-bg-gradient-to-r tw-duration-250 tw-from-dark-800 tw-to-dark-900 md:tw-w-14 md:group-hover:tw-w-full"}),t._v(" "),e("span",{staticClass:"tw-relative tw-z-20"},[t._v("Ver noticia")])])],1)],1)],1)])])])]),t._v(" "),e("section",{staticClass:"tw-px-4 tw-pt-12 tw-pb-10 md:tw-pb-12 md:tw-pt-16 tw-bg-dark-800 sm:tw-px-6 lg:tw-px-8"},[e("div",{staticClass:"tw-w-full tw-max-w-screen-xl tw-mx-auto"},[t._m(10),t._v(" "),e("div",{staticClass:"tw-mt-12 tw-space-y-12 lg:tw-mt-16 lg:tw-space-y-56 lg:tw-pb-24"},[e("div",{staticClass:"tw-relative tw-max-w-lg tw-mx-auto lg:tw-max-w-none lg:tw-mx-none"},[t._m(11),t._v(" "),e("div",{staticClass:"tw-relative tw-bottom-0 tw-right-0 tw-z-20 tw-block tw-w-full tw-h-auto tw-p-6 tw-shadow-xl lg:tw-rounded-3xl tw-rounded-b-3xl sm:tw-p-8 lg:tw-p-12 tw-bg-dark-700 lg:tw-absolute lg:tw--bottom-25 lg:tw-w-1/3 lg:tw-h-full"},[e("div",{staticClass:"tw-h-full lg:tw-flex lg:tw-flex-col lg:tw-justify-between"},[t._m(12),t._v(" "),t._m(13),t._v(" "),e("div",{staticClass:"tw-mt-8 xl:tw-mt-4"},[e("nuxt-link",{staticClass:"tw-relative tw-inline-flex tw-items-center tw-justify-center tw-w-auto tw-h-12 tw-px-8 tw-text-base tw-font-medium tw-leading-snug tw-text-white md:tw-h-14 tw-group",attrs:{to:"/registro"}},[e("span",{staticClass:"tw-absolute tw-top-0 tw-left-0 tw-z-10 tw-block tw-w-full tw-h-full tw-transition-all tw-ease-in-out tw-rounded-full tw-bg-gradient-to-r tw-duration-250 tw-from-dark-800 tw-to-dark-900 md:tw-w-14 md:group-hover:tw-w-full"}),t._v(" "),e("span",{staticClass:"tw-relative tw-z-20"},[t._v("Regístrate y te avisamos")])])],1)])])])])])]),t._v(" "),e("section",{staticClass:"tw-max-w-screen-xl tw-px-4 tw-py-12 tw-mx-auto md:tw-py-16 sm:tw-px-6 lg:tw-px-8"},[e("div",{staticClass:"tw-relative tw-py-16 tw-rounded-3xl tw-bg-dark-700 lg:tw-py-20"},[e("svg",{staticClass:"tw-absolute tw-inset-y-0 tw-top-0 tw-z-20 tw-w-1/4 tw-h-full tw-right-1/4 tw-text-dark-700",attrs:{preserveAspectRatio:"none",viewBox:"0 0 100 100",fill:"currentcolor"}},[e("polygon",{attrs:{points:"0,0 100,0 0,100"}})]),t._v(" "),e("div",{staticClass:"tw-absolute tw-inset-y-0 tw-z-10 tw-w-1/2 tw-h-full tw-left-1/2 tw-bg-dark-800 tw-rounded-r-3xl"}),t._v(" "),e("div",{staticClass:"tw-relative tw-z-30 tw-flex tw-flex-col tw-items-center tw-justify-center tw-px-4 tw-mx-auto tw-text-center sm:tw-px-16 lg:tw-flex-row lg:tw-text-left"},[t._m(14),t._v(" "),e("div",{staticClass:"tw-flex tw-justify-center tw-max-w-lg tw-mt-10 lg:tw-w-1/2 lg:tw-mt-0 lg:tw-justify-end"},[e("nuxt-link",{staticClass:"tw-flex tw-items-center tw-justify-center tw-w-auto tw-px-8 tw-py-4 tw-text-base tw-font-semibold tw-leading-snug tw-transition tw-ease-in-out tw-bg-white tw-rounded-full tw-h-14 tw-duration-250 tw-text-dark-900 hover:tw-text-white focus:tw-outline-none hover:tw-bg-dark-900",attrs:{to:"/blog/2024-01-22-buscamos-creadores-de-contenido"}},[t._v("\n            Consulta como entrar\n          ")])],1)])])])])}),[function(){var t=this,e=t._self._c;return e("section",{staticClass:"tw-px-4 tw-py-12 md:tw-py-16 sm:tw-px-6 lg:tw-px-8"},[e("div",{staticClass:"tw-max-w-screen-xl tw-mx-auto"},[e("div",{staticClass:"tw-w-full tw-max-w-3xl tw-mx-auto tw-text-center lg:tw-max-w-5xl"},[e("p",{staticClass:"tw-inline-flex tw-items-center tw-justify-center tw-px-6 tw-py-2 tw-text-sm tw-font-medium tw-tracking-wide tw-text-white tw-rounded-r-full tw-rounded-tl-full tw-bg-gradient-to-r tw-from-dark-600 tw-to-dark-700"},[t._v("\n          Nos aliamos contigo para crecer juntos\n        ")]),t._v(" "),e("h1",{staticClass:"tw-mt-4 tw-text-4xl tw-font-extrabold tw-text-white md:tw-mt-5 sm:tw-text-5xl md:tw-text-6xl"},[t._v("\n          Creamos juegos que mueven comunidades\n        ")])])]),t._v(" "),e("div",{staticClass:"tw-grid tw-justify-center tw-w-full tw-gap-12 tw-mx-auto tw-mt-12 lg:tw-grid-cols-2 lg:tw-gap-8 lg:tw-mt-16 lg:tw-max-w-screen-xl xl:tw-max-w-screen-xl lg:tw-justify-start"},[e("div",{staticClass:"tw-flex tw-items-center tw-justify-center tw-max-w-screen-md lg:tw-max-w-full"},[e("div",{staticClass:"tw-grid tw-h-full tw-grid-flow-col tw-grid-rows-2 tw-gap-4"},[e("div",{staticClass:"tw-shadow-xl tw-rounded-3xl"},[e("img",{staticClass:"tw-object-cover tw-object-center tw-w-full tw-h-full tw-rounded-3xl",attrs:{src:"/img/games/bookersVillage/bookersVillageMonje.jpg"}})]),t._v(" "),e("div",{staticClass:"tw-shadow-xl tw-rounded-3xl"},[e("img",{staticClass:"tw-object-cover tw-object-center tw-w-full tw-h-full tw-rounded-3xl",attrs:{src:"/img/games/bookersVillage/bookersVillageGranjero.jpg"}})]),t._v(" "),e("div",{staticClass:"tw-row-span-2 tw-shadow-xl tw-rounded-3xl"},[e("img",{staticClass:"tw-object-cover tw-object-center tw-w-full tw-h-full tw-rounded-3xl",attrs:{src:"/img/games/bookersVillage/bookersVillageFighter.jpg"}})])])]),t._v(" "),e("div",{staticClass:"tw-flex tw-items-center tw-justify-center tw-max-w-screen-md lg:tw-max-w-full"},[e("div",{staticClass:"tw-grid tw-h-full tw-grid-flow-col tw-grid-rows-2 tw-gap-4"},[e("div",{staticClass:"tw-row-span-2 tw-shadow-xl tw-rounded-3xl"},[e("img",{staticClass:"tw-object-cover tw-object-center tw-w-full tw-h-full tw-rounded-3xl",attrs:{src:"/img/games/bookersVillage/bookersVillageEstudiante.jpg"}})]),t._v(" "),e("div",{staticClass:"tw-shadow-xl tw-rounded-3xl"},[e("img",{staticClass:"tw-object-cover tw-object-center tw-w-full tw-h-full tw-rounded-3xl",attrs:{src:"/img/games/bookersVillage/bookersVillageDoctor.jpg"}})]),t._v(" "),e("div",{staticClass:"tw-shadow-xl tw-rounded-3xl"},[e("img",{staticClass:"tw-object-cover tw-object-center tw-w-full tw-h-full tw-rounded-3xl",attrs:{src:"/img/games/bookersVillage/bookersVillageAliado.jpg"}})])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"tw-relative tw-z-30 tw-flex tw-flex-col tw-items-center tw-justify-center tw-px-4 tw-mx-auto tw-text-center sm:tw-px-16 lg:tw-flex-row lg:tw-text-left"},[e("div",{staticClass:"tw-max-w-lg tw-text-2xl tw-font-bold sm:tw-text-4xl lg:tw-w-1/2"},[e("h5",{staticClass:"tw-text-4xl tw-font-extrabold tw-tracking-tight tw-text-white sm:tw-text-5xl"},[t._v("\n            #BookersVillage\n          ")])]),t._v(" "),e("div",{staticClass:"tw-flex tw-justify-center tw-max-w-lg tw-mt-10 lg:tw-w-1/2 lg:tw-mt-0 lg:tw-justify-end"},[e("a",{staticClass:"tw-flex tw-items-center tw-justify-center tw-w-auto tw-px-8 tw-py-4 tw-text-base tw-font-semibold tw-leading-snug tw-transition tw-ease-in-out tw-bg-white tw-rounded-full tw-h-14 tw-duration-250 tw-text-dark-900 hover:tw-text-white focus:tw-outline-none hover:tw-bg-dark-900",attrs:{href:"https://twitter.com/search?q=%23BookersVillage&src=typed_query&f=top",target:"_blank"}},[t._v("\n            Consulta el hashtag\n          ")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"tw-z-30 tw-w-full tw-max-w-lg tw-mx-auto tw-mt-6 tw-text-center lg:tw-text-left lg:tw-max-w-none md:tw-max-w-2xl"},[e("h1",{staticClass:"tw-text-4xl tw-font-extrabold tw-text-white sm:tw-text-5xl md:tw-text-6xl lg:tw-text-5xl xl:tw-text-6xl"},[t._v("\n              Lanzamos 2Elevado el 15 de Mayo\n            ")]),t._v(" "),e("p",{staticClass:"tw-mt-6 tw-text-xl tw-text-dark-300"},[t._v("\n              Un juego donde sumas números iguales para potenciarlos. Igual que en tus hablidades, las que más trabajas más rendimiento dan.\n            ")])])},function(){var t=this._self._c;return t("div",{staticClass:"tw-flex tw-items-center tw-justify-center tw-max-w-xl tw-mx-auto tw-mt-12 sm:tw-mt-16 lg:tw-mt-0 lg:tw-max-w-none"},[t("img",{staticClass:"tw-z-30 tw-object-cover tw-w-auto tw-h-full tw-shadow-md tw-rounded-3xl",attrs:{src:"/img/home/chicaJugandoA2Elevado.jpg"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"tw-max-w-xl tw-mx-auto tw-text-center md:tw-max-w-2xl lg:tw-text-left lg:tw-max-w-screen-xl"},[e("p",{staticClass:"tw-inline-flex tw-items-center tw-justify-center tw-px-6 tw-py-2 tw-text-sm tw-font-medium tw-tracking-wide tw-text-white tw-rounded-r-full tw-rounded-tl-full tw-bg-gradient-to-r tw-from-dark-600 tw-to-dark-700"},[t._v("\n        Qué hacemos\n      ")]),t._v(" "),e("div",{staticClass:"tw-grid tw-w-full tw-gap-6 tw-mt-6 lg:tw-grid-cols-5"},[e("div",{staticClass:"lg:tw-col-span-3"},[e("h2",{staticClass:"tw-text-3xl tw-font-extrabold tw-text-white sm:tw-text-4xl md:tw-text-5xl"},[t._v("\n            Creamos juegos que mueven comunidades\n          ")])]),t._v(" "),e("div",{staticClass:"lg:tw-col-span-2"},[e("p",{staticClass:"tw-text-xl tw-text-dark-300"},[t._v("\n            Desde torneos a premios personalizados en nuestro pase de temporada.\n          ")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"tw-w-full tw-mt-3 sm:tw-mt-0"},[e("h5",{staticClass:"tw-text-lg tw-font-semibold tw-text-white"},[t._v("\n                    Torneos\n                  ")]),t._v(" "),e("p",{staticClass:"tw-mt-1 tw-text-base tw-text-dark-300"},[t._v("\n                    Intercomunitarios o personalizados para proyectos amigos. Nuestro objetivo es que las tribus amigas se entretengan, ganen premios y hagan ruido en redes sociales.\n                  ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"tw-w-full tw-mt-3 sm:tw-mt-0"},[e("h5",{staticClass:"tw-text-lg tw-font-semibold tw-text-white"},[t._v("\n                    Plumas fénix\n                  ")]),t._v(" "),e("p",{staticClass:"tw-mt-1 tw-text-base tw-text-dark-300"},[t._v("\n                    Son un reclamo para los juegos que proponemos ya que te dan una pequeña ventaja. Solo se consiguen mediante acciones con nosotros o nuestros aliados.\n                  ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"tw-w-full tw-mt-3 sm:tw-mt-0"},[e("h5",{staticClass:"tw-text-lg tw-font-semibold tw-text-white"},[t._v("\n                    Pase de temporada\n                  ")]),t._v(" "),e("p",{staticClass:"tw-mt-1 tw-text-base tw-text-dark-300"},[t._v("\n                    Nuestros jugadores ganan premios con cada nivel superado. Podemos agregar ventajas de proyectos amigos.\n                  ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"tw-flex tw-items-center tw-justify-center tw-max-w-screen-md lg:tw-max-w-full"},[e("div",{staticClass:"tw-grid tw-h-full tw-grid-flow-col tw-grid-rows-2 tw-gap-4"},[e("div",{staticClass:"tw-row-span-2 tw-shadow-xl tw-rounded-3xl"},[e("img",{staticClass:"tw-object-cover tw-object-right tw-w-full tw-h-full tw-rounded-3xl",attrs:{src:"/img/home/personaJugandoEnMadFenixGame.jpg"}})]),t._v(" "),e("div",{staticClass:"tw-shadow-xl tw-rounded-3xl"},[e("img",{staticClass:"tw-object-cover tw-object-center tw-w-full tw-h-full tw-rounded-3xl",attrs:{src:"/img/home/persona2JugandoEnMadFenixGame.jpg"}})]),t._v(" "),e("div",{staticClass:"tw-shadow-xl tw-rounded-3xl"},[e("img",{staticClass:"tw-object-cover tw-object-center tw-w-full tw-h-full tw-rounded-3xl",attrs:{src:"/img/home/persona3JugandoEnMadFenixGame.jpg"}})])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"tw-max-w-xl tw-mx-auto tw-text-center md:tw-max-w-2xl lg:tw-text-left lg:tw-max-w-screen-xl"},[e("p",{staticClass:"tw-inline-flex tw-items-center tw-justify-center tw-px-6 tw-py-2 tw-text-sm tw-font-medium tw-tracking-wide tw-text-white tw-rounded-r-full tw-rounded-tl-full tw-bg-gradient-to-r tw-from-dark-600 tw-to-dark-700"},[t._v("\n        Noticias\n      ")]),t._v(" "),e("div",{staticClass:"tw-grid tw-w-full tw-gap-6 tw-mt-6 lg:tw-grid-cols-5"},[e("div",{staticClass:"lg:tw-col-span-3"},[e("h2",{staticClass:"tw-text-3xl tw-font-extrabold tw-text-white sm:tw-text-4xl md:tw-text-5xl"},[t._v("\n            La actualidad de\n            "),e("br"),e("span",{staticClass:"font-ancient-god"},[e("span",{staticClass:"tw-text-white tw-transition tw-duration-200 tw-ease-in-out group-hover:tw-text-dark-300"},[t._v("Mad")]),t._v(" "),e("span",{staticClass:"tw-transition tw-duration-200 tw-ease-in-out tw-text-dark-300 group-hover:tw-text-white"},[t._v("Fénix")])])])]),t._v(" "),e("div",{staticClass:"lg:tw-col-span-2"},[e("p",{staticClass:"tw-text-xl tw-text-dark-300"},[t._v("\n            Lanzamientos de nuestros videojuegos, torneos, game jams, temporadas y más\n          ")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"tw-w-full tw-max-w-xl tw-mx-auto tw-text-center lg:tw-max-w-3xl md:tw-max-w-2xl"},[e("p",{staticClass:"tw-inline-flex tw-items-center tw-justify-center tw-px-6 tw-py-2 tw-text-sm tw-font-medium tw-tracking-wide tw-text-white tw-rounded-r-full tw-rounded-tl-full tw-bg-gradient-to-r tw-from-dark-600 tw-to-dark-700"},[t._v("\n          Nuestros juegos\n        ")]),t._v(" "),e("h2",{staticClass:"tw-mt-6 tw-text-3xl tw-font-extrabold tw-text-white sm:tw-text-4xl md:tw-text-5xl"},[t._v("\n          Echa un vistazo a nuestros videojuegos\n        ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"tw-relative tw-w-full tw-h-64 tw-bg-center tw-bg-cover tw-shadow-xl lg:tw-rounded-3xl tw-rounded-t-3xl lg:tw-pt-[46%] lg:tw-w-[90%] lg:tw-h-full"},[e("img",{staticClass:"tw-absolute tw-inset-0 tw-object-cover tw-object-center tw-w-full tw-h-full lg:tw-rounded-3xl tw-rounded-t-3xl",attrs:{src:"/img/games/2elevado/fechaLanzamiento.jpg",alt:"Case study 1"}}),t._v(" "),e("p",{staticClass:"tw-inline-flex tw-items-center tw-justify-center tw-px-6 tw-py-2 tw-mt-4 tw-ml-6 tw-text-xs tw-font-medium tw-tracking-wide tw-text-white tw-rounded-r-full tw-rounded-tl-full tw-bg-gradient-to-r sm:tw-ml-8 lg:tw-hidden tw-from-dark-800 tw-to-dark-900"},[t._v("\n              Casual\n            ")])])},function(){var t=this._self._c;return t("div",{staticClass:"tw-hidden lg:tw-block"},[t("p",{staticClass:"tw-inline-flex tw-items-center tw-justify-center tw-px-6 tw-py-2 tw-text-xs tw-font-medium tw-tracking-wide tw-text-white tw-rounded-r-full tw-rounded-tl-full tw-bg-gradient-to-r tw-from-dark-800 tw-to-dark-900"},[this._v("\n                  Casual\n                ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"tw-flex tw-flex-wrap tw-w-full"},[e("h3",{staticClass:"tw-text-3xl tw-font-bold tw-text-white lg:tw-text-4xl"},[t._v("\n                  2Elevado\n                ")]),t._v(" "),e("p",{staticClass:"tw-mt-2 tw-text-base lg:tw-mt-4 tw-text-dark-300 md:tw-text-lg"},[t._v("\n                  Un juego donde sumas números iguales para potenciarlos. Igual que en tus hablidades, las que más trabajas más rendimiento dan.\n                ")])])},function(){var t=this._self._c;return t("div",{staticClass:"tw-max-w-lg tw-text-2xl tw-font-bold sm:tw-text-4xl lg:tw-w-1/2"},[t("h5",{staticClass:"tw-text-4xl tw-font-extrabold tw-tracking-tight tw-text-white sm:tw-text-5xl"},[this._v("\n            Buscamos creador@s de contenido.\n          ")])])}],!1,null,null,null);e.default=component.exports}}]);