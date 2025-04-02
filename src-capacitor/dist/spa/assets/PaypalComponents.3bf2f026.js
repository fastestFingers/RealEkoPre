import{Q as u}from"./QSpace.166e5628.js";import{_ as P,m as o,p as v,U as q,f as s,s as r,a7 as _,X as h,a8 as p,S as l,Y as c,b1 as y,bD as f,aA as w,a9 as x,F as C}from"./index.9a53e84d.js";import{Q as $}from"./QToolbar.55bf8f13.js";import{C as B}from"./ClosePopup.df94d028.js";import{l as b}from"./index.4f152a18.js";let m;const k={name:"PaypalComponents",props:["title","label","payment_code","payment_credentials"],data(){return{show_modal:!1,data:[],loading:!1,payment_modal:!1,client_id:"",force_currency:"",force_amount:0,jwt_data:[],enabled_force:!1}},methods:{showPaymentForm(){this.show_modal=!0},close(){this.show_modal=!1},onSubmit(){let t=0;typeof this.payment_credentials[this.payment_code]!="undefined"&&this.payment_credentials[this.payment_code]!==null&&(t=this.payment_credentials[this.payment_code].merchant_id);const e={merchant_id:t,payment_code:this.payment_code};this.loading=!0,o.SavedPaymentProvider(e).then(a=>{this.close(),this.$emit("afterAddpayment")}).catch(a=>{o.notify("dark",a,"error",this.$q)}).then(a=>{this.loading=!1})},PaymentRender(t){this.data=t,this.payment_modal=!0,typeof this.payment_credentials[t.payment_code]!="undefined"&&this.payment_credentials[t.payment_code]!==null&&(this.client_id=this.payment_credentials[t.payment_code].attr2),t.force_payment_data&&t.force_payment_data.enabled_force&&(this.enabled_force=!0,this.force_currency=t.force_payment_data.use_currency_code,this.force_amount=t.force_payment_data.total_exchange),this.initPaypal()},initPaypal(){let t=this.data.currency;this.enabled_force&&(t=this.force_currency),b("https://www.paypal.com/sdk/js?client-id="+this.client_id+"&currency="+t+"&disable-funding=credit,card").then(()=>{this.renderPaypal()}).catch(()=>{o.notify("negative","failed loading script","error_outline",this.$q)})},renderPaypal(){let t=this.data.total;this.enabled_force&&(t=this.force_amount),m=paypal.Buttons({createOrder:(e,a)=>a.order.create({purchase_units:[{amount:{value:t}}]}),onCancel:e=>{},onError:e=>{o.notify("dark",e,"error",this.$q)},onApprove:(e,a)=>a.order.capture().then(i=>{const n=i.purchase_units[0].payments.captures[0];this.CompletePaymentRequest(n.status,n.id,i.id)})}),m.render(this.$refs.paypal_button)},CompletePaymentRequest(t,e,a){let i={transaction_id:e,order_id:a,order_uuid:this.data.order_uuid,cart_uuid:this.data.cart_uuid};o.showLoadingBox("Processing payment..<br/>don't close this window",this.$q),o.PaypalVerifyPayment(i).then(n=>{this.$emit("afterPayment",n.details)}).catch(n=>{o.notify("dark",n,"error",this.$q)}).then(n=>{o.hideLoadingBox(this.$q)})},Dopayment(t,e){this.jwt_data=t,this.force_amount=e.amount,this.force_currency=e.currency_code,typeof this.payment_credentials[e.payment_code]!="undefined"&&this.payment_credentials[e.payment_code]!==null&&(this.client_id=this.payment_credentials[e.payment_code].attr2),this.PaypalInit()},PaypalInit(){b("https://www.paypal.com/sdk/js?client-id="+this.client_id+"&currency="+this.force_currency+"&disable-funding=credit,card").then(()=>{this.renderPayment()}).catch(()=>{o.notify("negative","failed loading script","error_outline",this.$q)})},renderPayment(){this.$emit("closePayment");let t=this.force_amount;this.payment_modal=!0,m=paypal.Buttons({createOrder:(e,a)=>a.order.create({purchase_units:[{amount:{value:parseFloat(t)}}]}),onCancel:e=>{},onError:e=>{this.error[0]=this.on_error.error},onApprove:(e,a)=>a.order.capture().then(i=>{var n=i.purchase_units[0].payments.captures[0];this.processPayment(n.status,n.id,i.id)})}),setTimeout(()=>{m.render(this.$refs.paypal_button)},500)},processPayment(t,e,a){this.payment_modal=!1,o.showLoadingBox(this.$t("Processing payment")+"<br/>"+this.$t("don't close this window"),this.$q),o.fetchDataByTokenPostPayment("Paypalprocesspayment",{data:this.jwt_data,transaction_id:e,order_id:a}).then(i=>{this.$emit("afterSuccessfulpayment",i.details)}).catch(i=>{this.$emit("afterCancelPayment",i)}).then(i=>{o.hideLoadingBox(this.$q)})}}},Q={class:"text-weight-bold no-margin"},S={class:"q-ma-sm"},V={class:"font12"},A={class:"text-weight-bold no-margin"},j={class:"q-ma-sm"},D={class:"font12"},F={ref:"paypal_button",class:"margin-auto full-width"};function I(t,e,a,i,n,g){return v(),q(C,null,[s(w,{modelValue:n.show_modal,"onUpdate:modelValue":e[2]||(e[2]=d=>n.show_modal=d),persistent:"","transition-show":"fade","transition-hide":"fade"},{default:r(()=>[s(_,{style:{width:"500px","max-width":"80vw"}},{default:r(()=>[s($,{class:"text-primary top-toolbar q-pl-md",dense:""},{default:r(()=>[s(u),s(h,{onClick:e[0]||(e[0]=d=>n.show_modal=!1),color:"white",square:"",unelevated:"","text-color":"grey",icon:"las la-times",dense:"","no-caps":"",size:"sm",class:"border-grey radius8"})]),_:1}),s(p,{class:"q-pa-md"},{default:r(()=>[l("h5",Q,c(a.title),1),l("div",S,[l("p",V,c(a.label.notes),1)])]),_:1}),s(y,{spaced:""}),s(f,null,{default:r(()=>[s(h,{label:a.label.submit,loading:n.loading,onClick:e[1]||(e[1]=d=>g.onSubmit()),unelevated:"","no-caps":"",color:"primary text-white",class:"full-width text-weight-bold",size:"lg"},null,8,["label","loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),s(w,{modelValue:n.payment_modal,"onUpdate:modelValue":e[3]||(e[3]=d=>n.payment_modal=d),persistent:"","transition-show":"scale","transition-hide":"scale"},{default:r(()=>[s(_,{style:{width:"500px","max-width":"80vw"}},{default:r(()=>[s(p,{class:"row items-center q-pb-none q-pa-none"},{default:r(()=>[s(u),x(s(h,{icon:"eva-close-outline",flat:"",round:"",dense:""},null,512),[[B]])]),_:1}),s(p,{class:"q-pa-md"},{default:r(()=>[l("h5",A,c(a.label.payment_title),1),l("div",j,[l("p",D,c(a.label.payment_subtitle),1)])]),_:1}),s(y,{spaced:""}),s(f,null,{default:r(()=>[l("div",F,null,512)]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}var z=P(k,[["render",I]]);export{z as default};
