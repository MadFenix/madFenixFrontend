(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{622:function(e,t,r){"use strict";r.r(t);var n=r(234),o=r(130),c=r(553),l=r(562),f=r(537),d=r(552),h=r(609),m=(r(11),r(10),r(9),r(3),r(13),r(8),r(14),r(2)),v=r(88);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var w={middleware:"authenticated",data:function(){return{wallet:null,users:[],transfer:{user_id_to_transfer:null,amount:0},transferId:null,formTitle:"",form:!1}},computed:{serverMessage:function(){return this.$store.state.serverMessage.serverMessage}},mounted:function(){this.fetch(),this.fetchUsers()},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(m.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({resetTransferData:function(){this.form=!1,this.formTitle="",this.transferId=null,this.transfer.user_id_to_transfer=null,this.transfer.amount=0},closeTransfer:function(){this.resetTransferData()},addTransfer:function(){this.resetTransferData(),this.formTitle="Hacer una transferencia",this.form=!0,this.transferId=0},postSave:function(){this.fetch(),this.closeTransfer()},save:function(){var e=this;this.$axios.post("/api/wallet/transferZen",this.transfer).then((function(){return e.postSave()})).catch((function(t){return t.response&&t.response.data&&t.response.data.message?e.setServerMessage(t.response.data.message):e.setServerMessage("Error create transfer.")}))},fetch:function(){var e=this;this.$axios.get("/api/wallet/show").then((function(t){return t.data?e.wallet=t.data:""})).catch((function(t){return t.response&&t.response.data&&t.response.data.message?e.setServerMessage(t.response.data.message):e.setServerMessage("Error list transfers.")}))},fetchUsers:function(){var e=this;this.$axios.get("/api/listUsers").then((function(t){return t.data?e.users=t.data:""})).catch((function(t){return t.response&&t.response.data&&t.response.data.message?e.setServerMessage(t.response.data.message):e.setServerMessage("Error list nodes.")}))}},Object(v.b)({setServerMessage:"serverMessage/setServerMessage"}))},y=w,x=r(39),component=Object(x.a)(y,(function(){var e=this,t=e._self._c;return t("CtCard",{staticClass:"mx-auto",attrs:{title:"Cartera",width:"500"},scopedSlots:e._u([{key:"rightTitleContent",fn:function(){return[t("CtBtn",{attrs:{type:"icon",color:"white",icon:["fas","plus"]},on:{click:e.addTransfer}})]},proxy:!0}])},[e._v(" "),t(d.a,{attrs:{dense:""}},[e.serverMessage?t(c.a,{staticClass:"error--text",attrs:{cols:"12"},domProps:{innerHTML:e._s(e.serverMessage)}}):e._e(),e._v(" "),t(c.a,{staticClass:"mt-5",attrs:{cols:"12"}},[t(n.a,{attrs:{color:"primary",dark:""}},[e.wallet?t(l.a,{staticClass:"text-center"},[t("span",{staticStyle:{"font-size":"36px"},domProps:{innerHTML:e._s(e.wallet.balance+" Zen")}})]):e._e()],1)],1)],1),e._v(" "),t("CtDialog",{staticClass:"mx-auto",attrs:{title:e.formTitle,width:"500"},scopedSlots:e._u([{key:"rightTitleContent",fn:function(){return[t("CtBtn",{attrs:{type:"icon",color:"white",icon:["fas","times"]},on:{click:e.closeTransfer}})]},proxy:!0}]),model:{value:e.form,callback:function(t){e.form=t},expression:"form"}},[e._v(" "),t(o.c,[t(l.a,{staticClass:"overflow-y-auto",staticStyle:{"max-height":"400px"},attrs:{fluid:"",id:"scroll-target"}},[t(d.a,{staticStyle:{height:"450px"},attrs:{dense:""}},[t(c.a,{attrs:{cols:"12"}},[t(h.a,{attrs:{items:e.users,"item-text":"name","item-value":"id","append-icon":"mdi-chevron-right",label:"Usuario al que transferir"},model:{value:e.transfer.user_id_to_transfer,callback:function(t){e.$set(e.transfer,"user_id_to_transfer",t)},expression:"transfer.user_id_to_transfer"}})],1),e._v(" "),t(c.a,{attrs:{cols:"12"}},[t("CtTextField",{attrs:{"append-icon":"mdi-fingerprint",label:"Cantidad"},model:{value:e.transfer.amount,callback:function(t){e.$set(e.transfer,"amount",t)},expression:"transfer.amount"}})],1),e._v(" "),e.serverMessage?t(c.a,{staticClass:"error--text",attrs:{cols:"12"},domProps:{innerHTML:e._s(e.serverMessage)}}):e._e()],1)],1)],1),e._v(" "),t(f.a),e._v(" "),t(o.a,[t("CtBtn",{attrs:{type:"primary",block:""},on:{click:function(t){return e.save()}}},[e._v("\n        Guardar\n      ")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);