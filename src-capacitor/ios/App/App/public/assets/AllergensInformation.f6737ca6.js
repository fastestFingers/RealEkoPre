import{Q as h}from"./QToolbarTitle.56a40b2c.js";import{_ as c,m as u,p as s,q as n,s as a,f as t,a6 as g,a5 as f,Y as d,a9 as _,X as p,a8 as w,S as Q,U as k,V as b,ab as B,ac as C,az as S,F as V,a7 as x,aA as I}from"./index.9a53e84d.js";import{Q as y}from"./QToolbar.55bf8f13.js";import{Q as A}from"./QList.2553e488.js";import{Q as D}from"./QInnerLoading.1a0e03b5.js";import{C as q}from"./ClosePopup.df94d028.js";const N={name:"AllergensInformation",data(){return{dialog:!1,data:[],loading:!1,merchant_id:"",item_id:"",allergen_data:[]}},computed:{getData(){return this.data}},methods:{show(e,l,m){this.dialog=e,this.merchant_id=l,this.item_id=m},beforeShow(){this.loading=!0,u.fetchDataPost("getAllergenInfo","merchant_id="+this.merchant_id+"&item_id="+this.item_id).then(e=>{this.data=e.details.allergen,this.allergen_data=e.details.allergen_data}).catch(e=>{}).then(e=>{this.loading=!1})},beforeClose(){this.data=[],this.allergen_data=[]}}},T={class:"text-weight-bold"};function v(e,l,m,z,o,i){return s(),n(I,{modelValue:o.dialog,"onUpdate:modelValue":l[0]||(l[0]=r=>o.dialog=r),persistent:"",onBeforeShow:i.beforeShow,onBeforeHide:i.beforeClose,"transition-show":"fade","transition-hide":"fade","full-width":""},{default:a(()=>[t(x,null,{default:a(()=>[t(y,null,{default:a(()=>[t(h,{class:g(["text-darkx text-center text-weight-bold",{"text-white":e.$q.dark.mode,"text-dark ":!e.$q.dark.mode}])},{default:a(()=>[f(d(e.$t("More product information")),1)]),_:1},8,["class"]),_(t(p,{icon:"eva-close-outline",flat:"",round:"",dense:"",color:e.$q.dark.mode?"primary":"grey"},null,8,["color"]),[[q]])]),_:1}),t(w,{class:"q-pt-none"},{default:a(()=>[Q("h5",T,d(e.$t("Allergens")),1),t(A,{dense:""},{default:a(()=>[(s(!0),k(V,null,b(i.getData,r=>(s(),n(B,{key:r},{default:a(()=>[o.allergen_data[r]?(s(),n(C,{key:0},{default:a(()=>[f(d(o.allergen_data[r]),1)]),_:2},1024)):S("",!0)]),_:2},1024))),128))]),_:1}),t(D,{showing:o.loading,color:"primary",size:"md"},null,8,["showing"])]),_:1})]),_:1})]),_:1},8,["modelValue","onBeforeShow","onBeforeHide"])}var M=c(N,[["render",v]]);export{M as default};
