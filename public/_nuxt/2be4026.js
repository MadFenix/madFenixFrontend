(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{591:function(e,t,r){"use strict";r.r(t);var n=r(577),o=r(470),c=r(302),l=r(508),f=r(484),d=r(526),h=r(578),m=r(580),v=(r(14),r(11),r(12),r(4),r(20),r(13),r(21),r(2)),_=r(77);function w(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var y={middleware:"authenticated",data:function(){return{wallet:null,users:[],transfer:{user_id_to_transfer:null,amount:0},transferId:null,formTitle:"",form:!1}},computed:{serverMessage:function(){return this.$store.state.serverMessage.serverMessage}},mounted:function(){this.fetch(),this.fetchUsers()},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(t){Object(v.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({resetTransferData:function(){this.form=!1,this.formTitle="",this.transferId=null,this.transfer.user_id_to_transfer=null,this.transfer.amount=0},closeTransfer:function(){this.resetTransferData()},addTransfer:function(){this.resetTransferData(),this.formTitle="Hacer una transferencia",this.form=!0,this.transferId=0},postSave:function(){this.fetch(),this.closeTransfer()},save:function(){var e=this;this.$axios.post("/api/wallet/transferZen",this.transfer).then((function(){return e.postSave()})).catch((function(t){return t.response&&t.response.data&&t.response.data.message?e.setServerMessage(t.response.data.message):e.setServerMessage("Error create transfer.")}))},fetch:function(){var e=this;this.$axios.get("/api/wallet/show").then((function(t){return t.data?e.wallet=t.data:""})).catch((function(t){return t.response&&t.response.data&&t.response.data.message?e.setServerMessage(t.response.data.message):e.setServerMessage("Error list transfers.")}))},fetchUsers:function(){var e=this;this.$axios.get("/api/listUsers").then((function(t){return t.data?e.users=t.data:""})).catch((function(t){return t.response&&t.response.data&&t.response.data.message?e.setServerMessage(t.response.data.message):e.setServerMessage("Error list nodes.")}))}},Object(_.b)({setServerMessage:"serverMessage/setServerMessage"}))},x=y,O=r(38),component=Object(O.a)(x,(function(){var e=this,t=e._self._c;return t(n.a,[t("CtCard",{staticClass:"mx-auto",attrs:{title:"Cartera",width:"500"},scopedSlots:e._u([{key:"rightTitleContent",fn:function(){return[t("CtBtn",{attrs:{type:"icon",color:"white",icon:["fas","plus"]},on:{click:e.addTransfer}})]},proxy:!0}])},[e._v(" "),t(h.a,{attrs:{dense:""}},[e.serverMessage?t(l.a,{staticClass:"error--text",attrs:{cols:"12"},domProps:{innerHTML:e._s(e.serverMessage)}}):e._e(),e._v(" "),t(l.a,{staticClass:"mt-5",attrs:{cols:"12"}},[t(o.a,{attrs:{color:"primary",dark:""}},[e.wallet?t(f.a,{staticClass:"text-center"},[t("span",{staticStyle:{"font-size":"36px"},domProps:{innerHTML:e._s(e.wallet.balance+" Zen")}})]):e._e()],1)],1)],1),e._v(" "),t("CtDialog",{staticClass:"mx-auto",attrs:{title:e.formTitle,width:"500"},scopedSlots:e._u([{key:"rightTitleContent",fn:function(){return[t("CtBtn",{attrs:{type:"icon",color:"white",icon:["fas","times"]},on:{click:e.closeTransfer}})]},proxy:!0}]),model:{value:e.form,callback:function(t){e.form=t},expression:"form"}},[e._v(" "),t(c.c,[t(f.a,{staticClass:"overflow-y-auto",staticStyle:{"max-height":"400px"},attrs:{fluid:"",id:"scroll-target"}},[t(h.a,{staticStyle:{height:"450px"},attrs:{dense:""}},[t(l.a,{attrs:{cols:"12"}},[t(m.a,{attrs:{items:e.users,"item-text":"name","item-value":"id","append-icon":"mdi-chevron-right",label:"Usuario al que transferir"},model:{value:e.transfer.user_id_to_transfer,callback:function(t){e.$set(e.transfer,"user_id_to_transfer",t)},expression:"transfer.user_id_to_transfer"}})],1),e._v(" "),t(l.a,{attrs:{cols:"12"}},[t("CtTextField",{attrs:{"append-icon":"mdi-fingerprint",label:"Cantidad"},model:{value:e.transfer.amount,callback:function(t){e.$set(e.transfer,"amount",t)},expression:"transfer.amount"}})],1),e._v(" "),e.serverMessage?t(l.a,{staticClass:"error--text",attrs:{cols:"12"},domProps:{innerHTML:e._s(e.serverMessage)}}):e._e()],1)],1)],1),e._v(" "),t(d.a),e._v(" "),t(c.a,[t("CtBtn",{attrs:{type:"primary",block:""},on:{click:function(t){return e.save()}}},[e._v("\n          Guardar\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);