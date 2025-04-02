import{Q as y}from"./QSpace.04e5e530.js";import{_ as h,R as f,m as i,p as u,q as g,s as r,f as t,a8 as c,S as a,Y as s,a9 as _,X as m,U as p,aX as b,F as P,a7 as v,aA as k}from"./index.9793c43f.js";import{Q as D}from"./QImg.51839b12.js";import{Q as S}from"./QForm.8fa69288.js";import{C as q}from"./ClosePopup.eb5e6d7f.js";const Q={name:"WalletTopupform",setup(){return{DataStorePersisted:f()}},data(){return{dialog:!1,amount:1,loading:!1,default_payment:[]}},mounted(){this.getCustomerDefaultPayment()},computed:{hasPayment(){return Object.keys(this.default_payment).length>0},getPayment(){return this.default_payment}},methods:{getCustomerDefaultPayment(){this.loading=!0,i.fetchDataByTokenPost("getCustomerDefaultPayment").then(e=>{this.default_payment=e.details.data}).catch(e=>{i.notify("dark",e,"error",this.$q)}).then(e=>{this.loading=!1})},onSubmit(){this.loading=!0,i.fetchDataByTokenPost("prepareAddFunds","amount="+this.amount+"&payment_code="+this.default_payment.payment_code+"&payment_uuid="+this.default_payment.payment_uuid+"&currency_code="+this.DataStorePersisted.getUseCurrency()).then(e=>{this.$emit("afterPreparepayment",e.details)}).catch(e=>{i.notify("dark",e,"error",this.$q)}).then(e=>{this.loading=!1})}}},C={class:"text-h6"},$={class:"text-body2 q-mb-md"},w={class:"text-h5 text-weight-bold"},V={class:"row q-mb-md items-center"},x={class:"col-2"},B={class:"col-3"},A={class:"text-body2 text-weight-medium"},F={class:"text-caption"},z={class:"col text-right"},T={key:1,class:"q-gutter-y-sm"},U={class:"text-body q-pa-sm bg-red-2 radius10 text-dark"},W={class:"text-body2"};function I(e,d,E,N,o,l){return u(),g(k,{modelValue:o.dialog,"onUpdate:modelValue":d[1]||(d[1]=n=>o.dialog=n),position:"bottom"},{default:r(()=>[t(v,null,{default:r(()=>[t(c,{class:"row items-center q-pb-none"},{default:r(()=>[a("div",C,s(e.$t("Add Funds to Your Wallet")),1),t(y),_(t(m,{icon:"close",flat:"",round:"",dense:""},null,512),[[q]])]),_:1}),t(S,{onSubmit:l.onSubmit},{default:r(()=>[t(c,null,{default:r(()=>[a("div",$,s(e.$t("topup_message")),1),a("div",w,s(e.$t("Payment Method")),1),l.hasPayment?(u(),p(P,{key:0},[a("div",V,[a("div",x,[t(D,{src:l.getPayment.logo_image,"spinner-color":"primary","spinner-size":"sm",style:{height:"30px","max-width":"50px"},fit:"contain"},null,8,["src"])]),a("div",B,[a("div",A,s(l.getPayment.attr1),1),a("div",F,s(l.getPayment.attr2),1)]),a("div",z,[t(m,{flat:"",label:e.$t("Change"),color:"primary","no-caps":"",to:"/account/payments"},null,8,["label"])])]),t(b,{modelValue:o.amount,"onUpdate:modelValue":d[0]||(d[0]=n=>o.amount=n),label:e.$t("Enter amount"),outlined:"","lazy-rules":"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",borderless:"",class:"input-borderless",type:"number",rules:[n=>n>0||this.$t("Please enter valid amount")]},null,8,["modelValue","label","bg-color","label-color","rules"]),t(m,{type:"submit",label:e.$t("Add Funds"),loading:o.loading,unelevated:"",color:e.$q.dark.mode?"grey300":"primary","text-color":"white","no-caps":"",class:"full-width",size:"lg"},null,8,["label","loading","color"])],64)):(u(),p("div",T,[a("div",U,s(e.$t("We noticed you haven't added a default payment method yet"))+". ",1),a("div",W,s(e.$t("topup_message1")),1),t(m,{color:"primary",label:e.$t("Add online payment"),class:"fit",size:"lg","no-caps":"",unelevated:"",to:"/account/payments"},null,8,["label"])]))]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"])}var R=h(Q,[["render",I]]);export{R as default};
