import{_ as u,m as d,p,U as g,f as r,s,a6 as t,F as w,X as n,a5 as b,Y as f,a7 as h,a8 as y,aX as i}from"./index.9a53e84d.js";import{Q as q}from"./QToolbarTitle.56a40b2c.js";import{Q as c}from"./QToolbar.55bf8f13.js";import{Q as k}from"./QHeader.6345628e.js";import{Q as $}from"./QFooter.e91c4010.js";import{Q}from"./QForm.ce9cdb94.js";import{Q as V}from"./QPage.127087d1.js";import"./QResizeObserver.1613ad63.js";const _={name:"ChangePassword",data(){return{loading:!1,old_password:"",new_password:"",confirm_password:""}},methods:{onSubmit(){const e={old_password:this.old_password,new_password:this.new_password,confirm_password:this.confirm_password};this.loading=!0,d.showLoadingBox("",this.$q),d.updatePassword(e).then(l=>{d.notify("light-green",l.msg,"check_circle",this.$q),this.onReset()}).catch(l=>{d.notify("grey-8",l,"error_outline",this.$q)}).then(l=>{this.loading=!1,d.hideLoadingBox(this.$q)})},onReset(){this.old_password.value="",this.new_password.value="",this.confirm_password.value=""}}};function C(e,l,P,S,a,m){return p(),g(w,null,[r(k,{class:t({"bg-mydark text-white":e.$q.dark.mode,"bg-grey-1 text-dark":!e.$q.dark.mode})},{default:s(()=>[r(c,null,{default:s(()=>[r(n,{onClick:l[0]||(l[0]=o=>e.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",class:"q-mr-sm",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),r(q,{class:"text-weight-bold"},{default:s(()=>[b(f(e.$t("Change Password")),1)]),_:1})]),_:1})]),_:1},8,["class"]),r(V,{padding:"",class:t(["q-pl-md q-pr-md row items-stretch",{"bg-mydark ":e.$q.dark.mode,"bg-grey-1":!e.$q.dark.mode}])},{default:s(()=>[r(h,{flat:"",class:t(["col-12",{"bg-mydark text-white":e.$q.dark.mode,"bg-white text-black":!e.$q.dark.mode}])},{default:s(()=>[r(y,null,{default:s(()=>[r(Q,{onSubmit:m.onSubmit},{default:s(()=>[r(i,{modelValue:a.old_password,"onUpdate:modelValue":l[1]||(l[1]=o=>a.old_password=o),type:"password",label:e.$t("Current Password"),outlined:"","lazy-rules":"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",rules:[o=>o&&o.length>0||"This field is required"]},null,8,["modelValue","label","bg-color","label-color","rules"]),r(i,{modelValue:a.new_password,"onUpdate:modelValue":l[2]||(l[2]=o=>a.new_password=o),type:"password",label:e.$t("New Password"),outlined:"","lazy-rules":"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",rules:[o=>o&&o.length>0||"This field is required"]},null,8,["modelValue","label","bg-color","label-color","rules"]),r(i,{modelValue:a.confirm_password,"onUpdate:modelValue":l[3]||(l[3]=o=>a.confirm_password=o),type:"password",label:e.$t("Retype New Password"),outlined:"","lazy-rules":"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",rules:[o=>o&&o.length>0||"This field is required"]},null,8,["modelValue","label","bg-color","label-color","rules"]),r($,{reveal:"",class:"bg-grey-1 q-pl-md q-pr-md q-pb-sm q-pt-sm text-dark"},{default:s(()=>[r(n,{type:"submit",label:e.$t("Save"),unelevated:"","no-caps":"",color:"primary text-white",class:"full-width text-weight-bold",size:"lg",loading:a.loading},null,8,["label","loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["class"])]),_:1},8,["class"])],64)}var I=u(_,[["render",C]]);export{I as default};
