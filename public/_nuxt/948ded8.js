(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{573:function(e,o,t){"use strict";t.r(o);t(14),t(11),t(12),t(4),t(20),t(13),t(21);var n=t(2),r=t(78);function c(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?c(Object(t),!0).forEach((function(o){Object(n.a)(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}var l={middleware:"basic",head:{title:"Política de cookies - Mad Fénix",meta:[{hid:"description",name:"description",content:"Política de cookies de Mad Fénix."}]},computed:{token:function(){return this.$store.state.user.token}},mounted:function(){this.setUserCookies(),this.$axios.setToken(this.token,"Bearer")},methods:d(d({setUserCookies:function(){var e=this.$cookies.get("token");if(e){this.setToken(e);var o=this.$cookies.get("user");if(o)this.updateUser(o);else{console.log("test");try{this.fetchUser()}catch(e){}}}}},Object(r.b)({setServerMessage:"serverMessage/setServerMessage",setToken:"user/setToken",setUserToNull:"user/setUserToNull",updateUser:"user/updateUser",fetchUser:"user/fetchUser"})),Object(r.c)({updateUser:"user/updateUser",removeUser:"user/removeUser"}))},v=t(38),component=Object(v.a)(l,(function(){this._self._c;return this._m(0)}),[function(){var e=this,o=e._self._c;return o("div",{staticClass:"tw-text-white tw-container tw-mx-auto"},[o("header",{staticClass:"entry-header ast-no-thumbnail"},[o("h1",{staticClass:"entry-title",attrs:{itemprop:"headline"}},[e._v("Política de cookies (UE)")])]),e._v(" "),o("div",{staticClass:"entry-content clear",attrs:{itemprop:"text"}},[o("div",{staticClass:"cmplz-document cookie-statement cmplz-document-eu",attrs:{id:"cmplz-document"}},[o("p",[o("i",[e._v("Esta política de cookies fue actualizada por última vez el 23/01/2024 y se aplica a los ciudadanos y residentes legales permanentes del Espacio Económico Europeo y Suiza.")]),o("br")]),o("h2",[e._v("1. Introducción")]),o("p",[e._v("Nuestra web, "),o("a",{attrs:{href:"https://madfenix.com"}},[e._v("https://madfenix.com")]),e._v(" (en adelante: «la web») utiliza cookies y otras tecnologías relacionadas (para mayor comodidad, todas las tecnologías se denominan «cookies»). Las cookies también son colocadas por terceros a los que hemos contratado. En el siguiente documento te informamos sobre el uso de cookies en nuestra web.")]),o("h2",[e._v("2. ¿Qué son las cookies?")]),o("p",[e._v("Una cookie es un pequeño archivo que se envía junto con las páginas de esta web y que tu navegador almacena en el disco duro de su ordenador u otro dispositivo. La información almacenada puede ser devuelta a nuestros servidores o a los servidores de terceros apropiados durante una visita posterior.")]),o("h2",[e._v("3. ¿Qué son los scripts?")]),o("p",[e._v("Un script es un fragmento de código de programa que se utiliza para hacer que nuestra web funcione correctamente y de forma interactiva. Este código se ejecuta en nuestro servidor o en tu dispositivo.")]),o("h2",[e._v("4. ¿Qué es una baliza web?")]),o("p",[e._v("Una baliza web (o una etiqueta de píxel) es una pequeña e invisible pieza de texto o imagen en una web que se utiliza para monitorear el tráfico en una web. Para ello, se almacenan varios datos sobre usted mediante estas balizas web.")]),o("h2",[e._v("5. Cookies")]),o("p",{staticClass:"cmplz-subtitle"},[e._v("5.1 Cookies técnicas o funcionales")]),o("p",[e._v("Algunas cookies aseguran que ciertas partes de la web funcionen correctamente y que tus preferencias de usuario sigan recordándose. Al colocar cookies funcionales, te facilitamos la visita a nuestra web. De esta manera, no necesitas introducir repetidamente la misma información cuando visitas nuestra web y, por ejemplo, los artículos permanecen en tu cesta de la compra hasta que hayas pagado. Podemos colocar estas cookies sin tu consentimiento.")]),o("p",{staticClass:"cmplz-subtitle"},[e._v("5.2 Cookies de estadísticas")]),o("p",[e._v("Utilizamos cookies estadísticas para optimizar la experiencia de la web para nuestros usuarios. Con estas cookies estadísticas obtenemos información sobre el uso de nuestra web. Te pedimos tu permiso para colocar cookies de estadísticas.")]),o("p",{staticClass:"cmplz-subtitle"},[e._v("5.3 Cookies de marketing/seguimiento")]),o("p",[e._v("Las cookies de marketing/seguimiento son cookies, o cualquier otra forma de almacenamiento local, usadas para crear perfiles de usuario para mostrar publicidad o para hacer el seguimiento del usuario en esta web o en varias webs con fines de marketing similares.")]),o("p",{staticClass:"cmplz-subtitle"},[e._v("5.4 Redes sociales")]),o("p",[e._v("En nuestra web hemos incluido contenido de Facebook, Twitter, LinkedIn y Instagram para promover páginas web (p.ej.: «Me gusta», «Pinear») o compartir (p.ej.: «tuitear») en redes sociales como Facebook, Twitter, LinkedIn y Instagram. Este contenido está incrustado con código derivado de Facebook, Twitter, LinkedIn y Instagram y guarda cookies. Este contenido podría procesar cierta información para anuncios personalizados.")]),o("p",[e._v("Por favor lea la política de privacidad de estas redes sociales (que puede cambiar frecuentemente) para saber que hacen con sus datos (personales) que procesan usando estas cookies. Los datos que reciben son anonimizados lo máximo posible. Facebook, Twitter, LinkedIn y Instagram están ubicados en los Estados Unidos.")]),e._v(" "),o("h2",[e._v("6. Cookies usadas")]),e._v(" "),o("div",{staticClass:"tw-flex tw-space-x-3"},[o("div",{staticClass:"name-header"},[o("h5",[e._v("Nombre:")])]),e._v(" "),o("div",{staticClass:"name"},[e._v("token")]),e._v(" "),o("div",{staticClass:"retention-header"},[o("h5",[e._v("Caducidad:")])]),e._v(" "),o("div",{staticClass:"retention"},[e._v("Sesión")]),e._v(" "),o("div",{staticClass:"function-header"},[o("h5",[e._v("Función:")])]),e._v(" "),o("div",{staticClass:"function"},[e._v("Guardar el token de autenticación del usuario.")])]),e._v(" "),o("div",{staticClass:"tw-flex tw-space-x-3"},[o("div",{staticClass:"name-header"},[o("h5",[e._v("Nombre:")])]),e._v(" "),o("div",{staticClass:"name"},[e._v("user")]),e._v(" "),o("div",{staticClass:"retention-header"},[o("h5",[e._v("Caducidad:")])]),e._v(" "),o("div",{staticClass:"retention"},[e._v("Sesión")]),e._v(" "),o("div",{staticClass:"function-header"},[o("h5",[e._v("Función:")])]),e._v(" "),o("div",{staticClass:"function"},[e._v("Guardar los datos de perfil generales del usuario.")])]),e._v(" "),o("h2",[e._v("7. Consentimiento")]),o("p",[e._v("Cuando visites nuestra web por primera vez, te mostraremos una ventana emergente con una explicación sobre las cookies. Tan pronto como hagas clic en «Guardar preferencias», aceptas que usemos las categorías de cookies y plugins que has seleccionado en la ventana emergente, tal y como se describe en esta política de cookies. Puedes desactivar el uso de cookies a través de tu navegador, pero, por favor, ten en cuenta que nuestra web puede dejar de funcionar correctamente.")]),o("p",{staticClass:"cmplz-subtitle"},[e._v("7.1 Gestiona tus ajustes de consentimiento")]),o("div",{staticStyle:{display:"none"},attrs:{id:"cmplz-manage-consent-container-nojavascript"}},[e._v("Has cargado la política de cookies sin compatibilidad con JavaScript. En AMP, puedes utilizar el botón de gestionar el consentimiento en la parte inferior de la página.")]),e._v(" "),o("h2",[e._v("8. Activación/desactivación y borrado de cookies")]),o("p",[e._v("Puedes utilizar tu navegador de Internet para eliminar las cookies de forma automática o manual. También puedes especificar que ciertas cookies no pueden ser colocadas. Otra opción es cambiar los ajustes de tu navegador de Internet para que recibas un mensaje cada vez que se coloca una cookie. Para obtener más información sobre estas opciones, consulta las instrucciones de la sección «Ayuda» de tu navegador.")]),o("p",[e._v("Ten en cuenta que nuestra web puede no funcionar correctamente si todas las cookies están desactivadas. Si borras las cookies de tu navegador, se volverán a colocar después de tu consentimiento cuando vuelvas a visitar nuestras webs.")]),o("h2",[e._v("9. Tus derechos con respecto a los datos personales")]),o("p",[e._v("Tienes los siguientes derechos con respecto a tus datos personales:")]),e._v(" "),o("ul",[o("li",[e._v("Tiene derecho a saber por qué se necesitan tus datos personales, qué sucederá con ellos y durante cuánto tiempo se conservarán.")]),e._v(" "),o("li",[e._v("Derecho de acceso: tienes derecho a acceder a tus datos personales que conocemos.")]),e._v(" "),o("li",[e._v("Derecho de rectificación: tienes derecho a completar, rectificar, borrar o bloquear tus datos personales cuando lo desees.")]),e._v(" "),o("li",[e._v("Si nos das tu consentimiento para procesar tus datos, tienes derecho a revocar dicho consentimiento y a que se eliminen tus datos personales.")]),e._v(" "),o("li",[e._v("Derecho de cesión de tus datos: tienes derecho a solicitar todos tus datos personales al responsable del tratamiento y a transferirlos íntegramente a otro responsable del tratamiento.")]),e._v(" "),o("li",[e._v("Derecho de oposición: puedes oponerte al tratamiento de tus datos. Nosotros cumplimos con esto, a menos que existan motivos justificados para el procesamiento.")])]),o("p",[e._v("Para ejercer estos derechos, por favor, contacta con nosotros. Por favor, consulta los detalles de contacto en la parte inferior de esta política de cookies. Si tienes alguna queja sobre cómo gestionamos tus datos, nos gustaría que nos la hicieras saber, pero también tienes derecho a enviar una queja a la autoridad supervisora (la autoridad de protección de datos).")]),o("h2",[e._v("10. Datos de contacto")]),o("p",[e._v("Para preguntas y/o comentarios sobre nuestra política de cookies y esta declaración, por favor, contacta con nosotros usando los siguientes datos de contacto:")]),e._v(" "),o("p",[o("span",{staticClass:"cmplz-contact-organisation"},[e._v("cicloTIC S.C.P.")]),o("br"),e._v(" "),o("span",{staticClass:"cmplz-contact-address"},[e._v("Calle Sant Valentí nº14 1r")]),o("br"),e._v(" "),o("span",{staticClass:"cmplz-contact-country"},[e._v("España")]),o("br"),e._v("\n        Web: "),o("span",{staticClass:"cmplz-contact-domain"},[o("a",{attrs:{href:"https://madfenix.com"}},[e._v("https://madfenix.com")])]),o("br"),e._v("\n        Correo electrónico: "),o("span",{staticClass:"cmplz-contact-email"},[o("span",{staticClass:"cmplz-obfuscate"},[e._v("iam@valentigamez.com")])])])])])])}],!1,null,null,null);o.default=component.exports}}]);