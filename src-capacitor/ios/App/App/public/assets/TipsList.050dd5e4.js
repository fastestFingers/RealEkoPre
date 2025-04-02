import{Q as n}from"./QBtnToggle.97e5ae48.js";import{Q as u}from"./QToolbarTitle.56a40b2c.js";import{Q as m}from"./QSpace.166e5628.js";import{_ as h,R as c,m as i,p as f,U as g,f as t,s as o,a7 as b,a6 as y,a5 as _,Y as k,X as d,a8 as w,aX as T,aA as v,F as Q}from"./index.9a53e84d.js";import{Q as S}from"./QToolbar.55bf8f13.js";import{Q as V}from"./QForm.ce9cdb94.js";import"./QBtnGroup.44d9aee9.js";const q={props:["tips_data","tips_value"],name:"TipsList",data(){return{tips:0,show_modal:!1,loading:!1,manual_tip:0}},setup(){return{DataStorePersisted:c()}},created(){console.log(this.tips_value),this.tips_value&&(this.tips=this.tips_value.tips,this.tips==!1&&(this.tips=0))},watch:{tips_value(e,s){this.tips=this.tips_value.tips,this.tips==!1&&(this.tips=0)}},methods:{onApplyTips(){this.tips=this.manual_tip,this.checkoutAddTips()},updateTips(){this.manual_tip=0,this.tips==="fixed"?this.show_modal=!0:(this.show_modal=!1,this.checkoutAddTips())},checkoutAddTips(){this.loading=!0,i.checkoutAddTips({cart_uuid:i.getStorage("cart_uuid"),value:this.tips,currency_code:this.DataStorePersisted.getUseCurrency(),manual_tip:this.manual_tip}).then(e=>{this.show_modal=!1,this.$emit("afterApplytips")}).catch(e=>{i.notify("grey-8",e,"error",this.$q)}).then(e=>{this.loading=!1})}}};function A(e,s,p,C,a,r){return f(),g(Q,null,[t(n,{modelValue:a.tips,"onUpdate:modelValue":s[0]||(s[0]=l=>a.tips=l),"toggle-color":"secondary",color:e.$q.dark.mode?"grey600":"mygrey","text-color":e.$q.dark.mode?"grey300":"dark","no-caps":"","no-wrap":"",unelevated:"",options:p.tips_data,class:"rounded-group2 small text-weight-bold line-1 q-pa-none",onClick:r.updateTips,disable:a.loading},null,8,["modelValue","color","text-color","options","onClick","disable"]),t(v,{modelValue:a.show_modal,"onUpdate:modelValue":s[3]||(s[3]=l=>a.show_modal=l),position:"bottom"},{default:o(()=>[t(b,null,{default:o(()=>[t(S,{class:"text-primary top-toolbar q-pl-md",dense:""},{default:o(()=>[t(u,{class:y(["text-weight-bold",{"text-white":e.$q.dark.mode,"text-dark":!e.$q.dark.mode}])},{default:o(()=>[_(k(e.$t("Add Tips")),1)]),_:1},8,["class"]),t(m),t(d,{onClick:s[1]||(s[1]=l=>a.show_modal=!1),color:"white",square:"",unelevated:"","text-color":"grey",icon:"las la-times",dense:"","no-caps":"",size:"sm",class:"border-grey radius8"})]),_:1}),t(V,{onSubmit:r.onApplyTips},{default:o(()=>[t(w,null,{default:o(()=>[t(T,{modelValue:a.manual_tip,"onUpdate:modelValue":s[2]||(s[2]=l=>a.manual_tip=l),label:e.$t("Enter amount"),outlined:"","lazy-rules":"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",borderless:"",class:"input-borderless",type:"number",rules:[l=>l&&l.length>0||this.$t("Please enter valid amount")]},null,8,["modelValue","label","bg-color","label-color","rules"]),t(d,{type:"submit",label:e.$t("Save"),loading:a.loading,unelevated:"",color:"primary","text-color":"white","no-caps":"",class:"full-width",size:"lg"},null,8,["label","loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"])],64)}var F=h(q,[["render",A]]);export{F as default};
