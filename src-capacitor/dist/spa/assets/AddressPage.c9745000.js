import{u as A,r as y,c as M,bF as U,P as D,aT as T,h as f,g as H,X as c,_ as I,p as K,U as F,f as l,s as r,F as N,a7 as R,a8 as z,ab as L,ac as S,S as m,a5 as h,Y as w,as as W,aX as Q,bK as X,bD as G}from"./index.9a53e84d.js";import{Q as Y}from"./QToolbarTitle.56a40b2c.js";import{Q as J}from"./QBadge.b5518a23.js";import{Q as Z}from"./QToolbar.55bf8f13.js";import{Q as $}from"./QHeader.6345628e.js";import{Q as V}from"./QSpace.166e5628.js";import{Q as q}from"./QItemLabel.fa433f11.js";import{Q as ee}from"./QMenu.c0f6ed77.js";import{Q as le}from"./QList.2553e488.js";import{Q as oe}from"./QSelect.98fbbbb3.js";import{Q as te}from"./QBtnToggle.97e5ae48.js";import{Q as ae}from"./QPage.127087d1.js";import"./QResizeObserver.1613ad63.js";import"./selection.1260671d.js";import"./QChip.d19f94df.js";import"./rtl.276c3f1b.js";import"./format.8ac60962.js";import"./QBtnGroup.44d9aee9.js";function p(e,o=new WeakMap){if(Object(e)!==e)return e;if(o.has(e))return o.get(e);const n=e instanceof Date?new Date(e):e instanceof RegExp?new RegExp(e.source,e.flags):e instanceof Set?new Set:e instanceof Map?new Map:typeof e.constructor!="function"?Object.create(null):e.prototype!==void 0&&typeof e.prototype.constructor=="function"?e:new e.constructor;if(typeof e.constructor=="function"&&typeof e.valueOf=="function"){const u=e.valueOf();if(Object(u)!==u){const t=new e.constructor(u);return o.set(e,t),t}}return o.set(e,n),e instanceof Set?e.forEach(u=>{n.add(p(u,o))}):e instanceof Map&&e.forEach((u,t)=>{n.set(t,p(u,o))}),Object.assign(n,...Object.keys(e).map(u=>({[u]:p(e[u],o)})))}var ne=A({name:"QPopupEdit",props:{modelValue:{required:!0},title:String,buttons:Boolean,labelSet:String,labelCancel:String,color:{type:String,default:"primary"},validate:{type:Function,default:()=>!0},autoSave:Boolean,cover:{type:Boolean,default:!0},disable:Boolean},emits:["update:modelValue","save","cancel","beforeShow","show","beforeHide","hide"],setup(e,{slots:o,emit:n}){const{proxy:u}=H(),{$q:t}=u,d=y(null),a=y(""),s=y("");let b=!1;const C=M(()=>U({initialValue:a.value,validate:e.validate,set:g,cancel:v,updatePosition:k},"value",()=>s.value,i=>{s.value=i}));function g(){e.validate(s.value)!==!1&&(_()===!0&&(n("save",s.value,a.value),n("update:modelValue",s.value)),x())}function v(){_()===!0&&n("cancel",s.value,a.value),x()}function k(){D(()=>{d.value.updatePosition()})}function _(){return T(s.value,a.value)===!1}function x(){b=!0,d.value.hide()}function B(){b=!1,a.value=p(e.modelValue),s.value=p(e.modelValue),n("beforeShow")}function P(){n("show")}function j(){b===!1&&_()===!0&&(e.autoSave===!0&&e.validate(s.value)===!0?(n("save",s.value,a.value),n("update:modelValue",s.value)):n("cancel",s.value,a.value)),n("beforeHide")}function E(){n("hide")}function O(){const i=o.default!==void 0?[].concat(o.default(C.value)):[];return e.title&&i.unshift(f("div",{class:"q-dialog__title q-mt-sm q-mb-sm"},e.title)),e.buttons===!0&&i.push(f("div",{class:"q-popup-edit__buttons row justify-center no-wrap"},[f(c,{flat:!0,color:e.color,label:e.labelCancel||t.lang.label.cancel,onClick:v}),f(c,{flat:!0,color:e.color,label:e.labelSet||t.lang.label.set,onClick:g})])),i}return Object.assign(u,{set:g,cancel:v,show(i){d.value!==null&&d.value.show(i)},hide(i){d.value!==null&&d.value.hide(i)},updatePosition:k}),()=>{if(e.disable!==!0)return f(ee,{ref:d,class:"q-popup-edit",cover:e.cover,onBeforeShow:B,onShow:P,onBeforeHide:j,onHide:E,onEscapeKey:v},O)}}});const re={name:"PageName",data(){return{back_url:"",address_uuid:"",location_name:"",delivery_options:"",delivery_instructions:"",address_label:1,edit_address:"Guadalupe nuevo makati city",options:["leave at my door","hand it to me","meet outside"]}},mounted(){this.back_url=this.$route.query.url,this.address_uuid=this.$route.query.uuid}},ue=h(" Address "),se=m("div",{class:"map bg-grey-2 rounded-10 q-mb-md"},null,-1),ie=h("Quezon City"),de={class:"cursor-pointer"},ce=m("div",{class:"text-h6"},"Address label",-1);function fe(e,o,n,u,t,d){return K(),F(N,null,[l($,{reveal:"","reveal-offset":"50",class:"bg-white"},{default:r(()=>[l(Z,null,{default:r(()=>[l(c,{onClick:o[0]||(o[0]=a=>e.$router.back()),flat:"",round:"",dense:"",icon:"arrow_back",color:"dark"}),l(Y,{class:"text-dark text-center text-weight-bold"},{default:r(()=>[ue]),_:1}),l(c,{to:"/cart",color:"white",rounded:"",unelevated:"","text-color":"dark",icon:"eva-shopping-bag-outline",dense:"","no-caps":""},{default:r(()=>[l(J,{floating:"",color:"primary2",rounded:""})]),_:1})]),_:1})]),_:1}),l(ae,{padding:"",class:"bg-grey-2"},{default:r(()=>[l(V,{class:"q-pa-xs"}),l(R,{flat:"",class:"radius8"},{default:r(()=>[l(z,null,{default:r(()=>[se,l(le,{class:"qlist-no-padding q-mb-md"},{default:r(()=>[l(L,null,{default:r(()=>[l(S,null,{default:r(()=>[l(q,{lines:"2",class:"font12 text-weight-bold"},{default:r(()=>[ie]),_:1}),l(q,{caption:"",class:"font12 text-weight-medium"},{default:r(()=>[m("div",de,[h(w(t.edit_address)+" ",1),l(W,{name:"eva-edit-outline"}),l(ne,{modelValue:t.edit_address,"onUpdate:modelValue":o[1]||(o[1]=a=>t.edit_address=a),"auto-save":""},{default:r(a=>[l(Q,{modelValue:a.value,"onUpdate:modelValue":s=>a.value=s,dense:"",autofocus:"",counter:"",onKeyup:X(a.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:1},8,["modelValue"])])]),_:1})]),_:1}),l(S,{side:""},{default:r(()=>[l(c,{unelevated:"",color:"primary","text-color":"dark",dense:"",label:"Adjust Pin","no-caps":"",class:"q-pl-sm q-pr-sm"})]),_:1})]),_:1})]),_:1}),l(Q,{modelValue:t.location_name,"onUpdate:modelValue":o[2]||(o[2]=a=>t.location_name=a),autogrow:"",dense:"",outlined:"",color:"dark","bg-color":"white",borderless:"",label:"Aparment, suite or floor"},null,8,["modelValue"]),l(V,{class:"q-pa-sm"}),l(oe,{outlined:"",modelValue:t.delivery_options,"onUpdate:modelValue":o[3]||(o[3]=a=>t.delivery_options=a),options:t.options,label:"Delivery Options",dense:""},null,8,["modelValue","options"]),l(V,{class:"q-pa-sm"}),l(Q,{modelValue:t.delivery_instructions,"onUpdate:modelValue":o[4]||(o[4]=a=>t.delivery_instructions=a),autogrow:"",dense:"",outlined:"",color:"dark","bg-color":"white",borderless:"",label:"Add delivery instructions"},null,8,["modelValue"]),ce,l(te,{modelValue:t.address_label,"onUpdate:modelValue":o[5]||(o[5]=a=>t.address_label=a),"no-caps":"",rounded:"",unelevated:"","toggle-color":"dark","toggle-text-color":"white",color:"grey-2","text-color":"dark",size:"12px",class:"font11 bg-grey-2 q-mb-md text-weight-600",spread:"",options:[{label:"Home",value:1},{label:"Work",value:2},{label:"School",value:3},{label:"other",value:"other"}]},null,8,["modelValue"]),m("pre",null,w(t.back_url),1),m("pre",null,w(t.address_uuid),1)]),_:1}),l(G,{vertical:"",align:"center"},{default:r(()=>[l(c,{label:"Save Address",unelevated:"",color:"primary","text-color":"dark","no-caps":"",class:"full-width"}),l(c,{label:"Cancel",flat:"","text-color":"amber-14","no-caps":"",class:"full-width"})]),_:1})]),_:1})]),_:1})],64)}var je=I(re,[["render",fe]]);export{je as default};
