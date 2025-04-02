import{Q as k}from"./QToolbarTitle.56a40b2c.js";import{Q as b}from"./QToolbar.55bf8f13.js";import{Q as S}from"./QHeader.6345628e.js";import{Q as _}from"./QImg.28e972cd.js";import{_ as q,Q as D,R as y,a4 as f,p as i,q as c,s as a,f as e,a5 as l,Y as o,a6 as d,a7 as $,a8 as v,U as w,V as L,F as P,X as p,a9 as R,aa as T,ab as C,ac as n,ad as V,ae as z}from"./index.9a53e84d.js";import{Q as h}from"./QItemLabel.fa433f11.js";import{Q as B}from"./QList.2553e488.js";import{Q as I}from"./QFooter.e91c4010.js";import{Q as A}from"./QPage.127087d1.js";import{Q as F}from"./QPullToRefresh.5b5bf9cd.js";import"./QResizeObserver.1613ad63.js";import"./touch.9135741d.js";import"./selection.1260671d.js";import"./format.8ac60962.js";const j={name:"LanguagePage",setup(){const t=D(),r=y();return{DataStore:t,DataStorePersisted:r}},data(){return{language:""}},created(){this.language=this.DataStorePersisted.app_language},methods:{setLanguage(){this.DataStorePersisted.choose_language=!0,this.DataStorePersisted.app_language=this.language,this.$i18n.locale=this.language,f.defaults.params={},f.defaults.params.language=this.$i18n.locale,this.DataStore.getAttributes(),this.$router.replace("/home"),this.setRTL()},refresh(t){this.DataStore.getAttributes(t)},setRTL(){Object.keys(this.DataStore.language_data).length>0&&Object.entries(this.DataStore.language_data.data).forEach(([t,r])=>{this.language==r.code&&(r.rtl==1?(this.$q.lang.set({rtl:!0}),this.DataStorePersisted.rtl=!0):(this.$q.lang.set({rtl:!1}),this.DataStorePersisted.rtl=!1))})}}};function x(t,r,E,u,g,m){return i(),c(F,{onRefresh:m.refresh},{default:a(()=>[e(S,{reveal:"","reveal-offset":"50",class:d({"bg-mydark text-white":t.$q.dark.mode,"bg-grey-1 text-dark":!t.$q.dark.mode})},{default:a(()=>[e(b,null,{default:a(()=>[e(k,{class:"text-weight-bold"},{default:a(()=>[l(o(t.$t("Select Language")),1)]),_:1})]),_:1})]),_:1},8,["class"]),e(A,{padding:"",class:d(["q-pl-md q-pr-md row items-stretch",{"bg-mydark":t.$q.dark.mode,"bg-grey-1":!t.$q.dark.mode}])},{default:a(()=>[e($,{flat:"",class:d(["radius8 col-12",{"bg-mydark ":t.$q.dark.mode,"bg-white ":!t.$q.dark.mode}])},{default:a(()=>[e(v,null,{default:a(()=>[e(B,null,{default:a(()=>[(i(!0),w(P,null,L(u.DataStore.language_data.data,s=>R((i(),c(C,{key:s,tag:"label",clickable:"",class:d(["border-grey radius10 q-mb-sm",{"bg-dark text-white":t.$q.dark.mode,"bg-white text-black":!t.$q.dark.mode}])},{default:a(()=>[e(n,{avatar:""},{default:a(()=>[e(V,{square:""},{default:a(()=>[e(_,{src:s.flag,"spinner-color":"secondary",style:{height:"25px","max-width":"40px"},"spinner-size":"sm"},null,8,["src"])]),_:2},1024)]),_:2},1024),e(n,null,{default:a(()=>[e(h,{lines:"1"},{default:a(()=>[l(o(s.title),1)]),_:2},1024),e(h,{lines:"1",caption:""},{default:a(()=>[l(o(s.description),1)]),_:2},1024)]),_:2},1024),e(n,{side:""},{default:a(()=>[e(z,{modelValue:g.language,"onUpdate:modelValue":r[0]||(r[0]=Q=>g.language=Q),val:s.code},null,8,["modelValue","val"])]),_:2},1024)]),_:2},1032,["class"])),[[T]])),128))]),_:1})]),_:1})]),_:1},8,["class"]),e(I,{reveal:"",class:"bg-grey-1 row q-gutter-sm q-pa-md"},{default:a(()=>[e(p,{color:"dark",size:"lg",rounded:"",unelevated:"","no-caps":"",flat:"",class:"col",to:"/home"},{default:a(()=>[l(o(t.$t("Skip")),1)]),_:1}),e(p,{color:"primary",size:"lg",rounded:"",unelevated:"","no-caps":"",class:"col",onClick:m.setLanguage,loading:u.DataStore.loading},{default:a(()=>[l(o(t.$t("Save")),1)]),_:1},8,["onClick","loading"])]),_:1})]),_:1},8,["class"])]),_:1},8,["onRefresh"])}var ta=q(j,[["render",x]]);export{ta as default};
