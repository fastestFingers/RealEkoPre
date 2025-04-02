import{_ as v,m as d,p as o,q as m,s as t,f as a,X as c,a5 as _,Y as u,a6 as f,U as p,S as y,F as g,a7 as P,a8 as $,V as x,$ as D,a9 as V,aa as C,ab as I,aE as b,ac as k,ae as Q,as as B}from"./index.9a53e84d.js";import{Q as M}from"./QToolbarTitle.56a40b2c.js";import{Q as L}from"./QToolbar.55bf8f13.js";import{Q as T}from"./QHeader.6345628e.js";import{Q as A}from"./QInnerLoading.1a0e03b5.js";import{Q as R}from"./QImg.28e972cd.js";import{Q as w}from"./QItemLabel.fa433f11.js";import{Q as S}from"./QSlideItem.57a7e0ef.js";import{Q as z}from"./QList.2553e488.js";import{Q as N}from"./QFooter.e91c4010.js";import{Q as F}from"./QPage.127087d1.js";import{Q as E}from"./QPullToRefresh.5b5bf9cd.js";import"./QResizeObserver.1613ad63.js";import"./use-render-cache.3aae9b27.js";import"./touch.9135741d.js";import"./selection.1260671d.js";import"./format.8ac60962.js";const U={name:"MyPayment",data(){return{data:[],loading:!1,inner_loading:!1,payment_data:[],payment_uuid:""}},mounted(){this.MyPayments()},computed:{hasData(){return this.data.length>0}},methods:{refresh(e){this.MyPayments(e)},MyPayments(e){d.empty(e)&&(this.loading=!0),d.MyPayments().then(l=>{this.payment_uuid=l.details.default_payment_uuid,this.data=l.details.data}).catch(l=>{this.data=[]}).then(l=>{d.empty(e)?this.loading=!1:e()})},deletePayment(e,l){this.inner_loading=!0,d.deletePayment(l.payment_uuid).then(h=>{this.data.splice(e,1)}).catch(h=>{d.notify("red-5",h,"error_outline",this.$q)}).then(h=>{this.inner_loading=!1})},setDefault(e){d.showLoadingBox("",this.$q),d.setDefaultPayment(e).then(l=>{this.payment_uuid=e}).catch(l=>{d.notify("red-5",l,"error_outline",this.$q)}).then(l=>{d.hideLoadingBox(this.$q)})}}},H={key:0,class:"min-height-inherit flex flex-center"},O={class:"full-width text-center q-pb-xl"},X={class:"text-h5 text-weight-bold"},Y={class:"text-grey font12"},j={class:"text-weight-medium"};function G(e,l,h,J,s,n){return o(),m(E,{onRefresh:n.refresh},{default:t(()=>[a(T,{reveal:"","reveal-offset":"50",class:f({"bg-mydark text-white":e.$q.dark.mode,"bg-grey-1 text-dark":!e.$q.dark.mode})},{default:t(()=>[a(L,null,{default:t(()=>[a(c,{onClick:l[0]||(l[0]=r=>e.$router.back()),dense:"",icon:"las la-angle-left",class:"q-mr-sm","text-color":e.$q.dark.mode?"white":"dark",unelevated:""},null,8,["text-color"]),a(M,{class:"text-weight-bold"},{default:t(()=>[_(u(e.$t("Payment")),1)]),_:1})]),_:1})]),_:1},8,["class"]),a(F,{class:f({"flex flex-center":!n.hasData&&!s.loading,"row items-stretch ":n.hasData&&!s.loading,"bg-mydark":e.$q.dark.mode,"bg-grey-1":!e.$q.dark.mode})},{default:t(()=>[!n.hasData&&!s.loading?(o(),p("div",H,[y("div",O,[y("div",X,u(e.$t("No Payment available")),1),y("p",Y,u(e.$t("you have not added payment yet")),1),a(c,{flat:"",color:"blue","no-caps":"",label:e.$t("Add new payment"),dense:"",size:"sm",to:"/account/payments/new"},null,8,["label"])])])):(o(),p(g,{key:1},[s.loading?(o(),m(A,{key:0,showing:!0,color:"primary",size:"md","label-class":"dark",class:"transparent"})):(o(),p(g,{key:1},[a(P,{flat:"",class:f(["radius8 full-width",{"bg-mydark text-white":e.$q.dark.mode,"bg-white text-black":!e.$q.dark.mode}])},{default:t(()=>[a($,null,{default:t(()=>[a(z,null,{default:t(()=>[(o(!0),p(g,null,x(s.data,(r,q)=>(o(),m(D,{key:r.payment_uuid,appear:"","leave-active-class":"animated fadeOut",class:f({"bg-mydark ":e.$q.dark.mode,"bg-white ":!e.$q.dark.mode})},{default:t(()=>[a(S,{onAction:i=>n.deletePayment(q,r),"right-color":e.$q.dark.mode?"mydark":"white"},{right:t(()=>[a(c,{unelevated:"",round:"",color:"red-5","text-color":"white",icon:"eva-trash-outline",dense:""})]),default:t(()=>[V((o(),m(I,{onClick:b(i=>n.setDefault(r.payment_uuid),["stop"]),tag:"label",clickable:"",class:f(["border-grey radius10 q-mb-sm",{"bg-dark text-white":e.$q.dark.mode,"bg-white text-black":!e.$q.dark.mode}])},{default:t(()=>[a(k,{avatar:""},{default:t(()=>[a(Q,{modelValue:s.payment_uuid,"onUpdate:modelValue":l[1]||(l[1]=i=>s.payment_uuid=i),val:r.payment_uuid,color:"primary",class:"hidden"},null,8,["modelValue","val"]),r.logo_type==="icon"?(o(),m(B,{key:0,color:"warning",name:"credit_card"})):(o(),m(R,{key:1,src:r.logo_image,fit:"contain",style:{height:"30px","max-width":"30px"}},null,8,["src"]))]),_:2},1024),a(k,null,{default:t(()=>[a(w,{lines:"1"},{default:t(()=>[y("span",j,u(r.payment_name),1)]),_:2},1024),a(w,{caption:"",lines:"1"},{default:t(()=>[_(u(r.attr2),1)]),_:2},1024)]),_:2},1024),a(k,{side:""},{default:t(()=>[a(Q,{modelValue:s.payment_uuid,"onUpdate:modelValue":l[2]||(l[2]=i=>s.payment_uuid=i),val:r.payment_uuid,onClick:b(i=>n.setDefault(r.payment_uuid),["stop"])},null,8,["modelValue","val","onClick"])]),_:2},1024)]),_:2},1032,["onClick","class"])),[[C]])]),_:2},1032,["onAction","right-color"])]),_:2},1032,["class"]))),128))]),_:1})]),_:1})]),_:1},8,["class"]),a(N,{reveal:"",class:"bg-grey-1 q-pl-md q-pr-md q-pb-sm q-pt-sm text-dark"},{default:t(()=>[a(c,{type:"submit",label:e.$t("Add new payment"),unelevated:"","no-caps":"",color:e.$q.dark.mode?"grey300":"primary",class:"full-width text-weight-bold",size:"lg",to:"/account/payments/new",loading:s.loading},null,8,["label","color","loading"])]),_:1})],64))],64))]),_:1},8,["class"])]),_:1},8,["onRefresh"])}var ce=v(U,[["render",G]]);export{ce as default};
