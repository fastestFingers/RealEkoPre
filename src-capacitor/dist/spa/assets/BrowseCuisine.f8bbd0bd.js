import{Q as p}from"./QToolbarTitle.1f40af49.js";import{Q as f}from"./QSpace.04e5e530.js";import{_,Q as q,p as i,q as g,s,f as o,a6 as y,a5 as w,Y as d,X as c,a8 as k,S as t,U as u,V as Q,ad as h,F as v,a7 as C,aA as S}from"./index.9793c43f.js";import{Q as x}from"./QToolbar.76ca8ca1.js";const D={name:"BrowseCuisine",data(){return{modal:!1}},setup(){return{DataStore:q()}},mounted(){this.DataStore.hasDataCuisine()}},$={class:"row q-gutter-md justify-center q-pa-none"},B={class:"row items-center no-wrap full-width"},V={class:"col-12"},b=["src"],z={class:"ellipsis text-center font11 q-pl-sm line-normal"};function T(e,r,A,m,l,N){return i(),g(S,{modelValue:l.modal,"onUpdate:modelValue":r[1]||(r[1]=a=>l.modal=a),position:"bottom"},{default:s(()=>[o(C,null,{default:s(()=>[o(x,{class:"text-primary top-toolbar q-pl-md",dense:""},{default:s(()=>[o(p,{class:y(["text-weight-bold",{"text-white":e.$q.dark.mode,"text-dark":!e.$q.dark.mode}])},{default:s(()=>[w(d(e.$t("All Cuisine")),1)]),_:1},8,["class"]),o(f),o(c,{onClick:r[0]||(r[0]=a=>l.modal=!1),square:"",unelevated:"",color:e.$q.dark.mode?"grey600":"white","text-color":e.$q.dark.mode?"grey300":"grey",icon:"las la-times",dense:"","no-caps":"",size:"sm",class:"border-grey radius8"},null,8,["color","text-color"])]),_:1}),o(k,{class:"q-pt-none q-pl-md"},{default:s(()=>[t("div",$,[(i(!0),u(v,null,Q(m.DataStore.cuisine,(a,n)=>(i(),u("div",{key:a,class:"col-5"},[o(c,{color:n<=0?"primary":e.$q.dark.mode?"grey600":"mygrey",unelevated:"","no-caps":"","text-color":n<=0?"white":e.$q.dark.mode?"grey300":"dark",class:"radius8 full-width row items-center",size:"lg",to:{name:"feed",query:{query:"all",cuisine_id:a.cuisine_id,cuisine_name:a.cuisine_name}}},{default:s(()=>[t("div",B,[t("div",V,[o(h,{size:"30px"},{default:s(()=>[t("img",{src:a.url_icon},null,8,b)]),_:2},1024),t("div",z,d(a.cuisine_name),1)])])]),_:2},1032,["color","text-color","to"])]))),128))])]),_:1})]),_:1})]),_:1},8,["modelValue"])}var L=_(D,[["render",T]]);export{L as default};
