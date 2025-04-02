import{_ as V,l as S,bB as w,Q as C,av as h,m as i,n as P,p as d,U as z,f as o,s as r,a6 as f,F as U,X as u,a5 as b,Y as c,S as g,ad as x,q as m,az as T,a7 as A,a8 as D,aX as p,ab as v,bf as F,bg as E,ac as _,t as B}from"./index.f7d559c9.js";import{Q as I}from"./QToolbarTitle.bdcd688d.js";import{Q as j}from"./QToolbar.e8bab0fc.js";import{Q as N}from"./QHeader.26b1a527.js";import{Q as y}from"./QImg.04a8fde6.js";import{Q as R}from"./QUploader.f0407f2b.js";import{Q as L}from"./QItemLabel.4e494c2c.js";import{Q as O}from"./QSelect.f548dfe7.js";import{Q as X}from"./QSpace.cb165838.js";import{Q as H}from"./QForm.31a2e1e6.js";import{Q as J}from"./QPage.026453a2.js";import{A as k}from"./AppCamera.09ebec06.js";import"./QResizeObserver.fad9f3e9.js";import"./QCircularProgress.ea9c9417.js";import"./format.68d15b11.js";import"./QChip.75be2f9e.js";import"./QMenu.3887798d.js";import"./selection.4a59aca4.js";import"./rtl.0d66ec23.js";import"./vue-i18n.runtime.esm-bundler.1be1b0c0.js";const Y={name:"EditProfile",components:{StepsVerification:S(()=>B(()=>import("./StepsVerification.4b383dbd.js"),["assets/StepsVerification.4b383dbd.js","assets/QSpace.cb165838.js","assets/index.f7d559c9.js","assets/index.661bbb30.css","assets/QToolbar.e8bab0fc.js","assets/QForm.31a2e1e6.js","assets/QInnerLoading.a0b48d07.js"]))},data(){return{loading:!1,first_name:"",last_name:"",email_address:"",mobile_number:"",mobile_prefix:"",avatar:"",original_email_address:"",original_mobile_number:"",sent_message:"",upload_api:w.api_base_url+"/interface/updateAvatar",upload_enabled:!1,filename:"",upload_path:"",photo_data:""}},setup(){return{DataStore:C()}},created(){this.getCurrentProfile()},computed:{hasData(){return Object.keys(this.photo_data).length>0}},methods:{getCurrentProfile(){const e=h.getUser();e&&(this.original_email_address=e.email_address,this.original_mobile_number=e.contact_number,this.first_name=e.first_name,this.last_name=e.last_name,this.mobile_number=e.contact_number_noprefix,this.mobile_prefix=e.phone_prefix,this.email_address=e.email_address,this.avatar=e.avatar)},checkForm(){let e=!1;this.email_address!==this.original_email_address&&(e=!0),this.mobile_prefix+this.mobile_number!==this.original_mobile_number&&(e=!0),console.log(e),e?(this.loading=!0,i.RequestEmailCode().then(s=>{this.sent_message=s.msg,this.show_modal=!1,this.$refs.steps_verification.show_modal=!0}).catch(s=>{i.notify("dark",s,"error",this.$q)}).then(s=>{this.loading=!1})):this.onSubmit("")},onSubmit(e){this.loading=!0,i.showLoadingBox("",this.$q);const a={code:e,first_name:this.first_name,last_name:this.last_name,email_address:this.email_address,mobile_number:this.mobile_number,mobile_prefix:this.mobile_prefix,filename:this.filename,upload_path:this.upload_path,file_data:this.hadData()?this.photo_data.data:"",image_type:this.hadData()?this.photo_data.format:""};i.saveProfile(a).then(s=>{this.$refs.steps_verification.show_modal=!1,h.setUser(s.details),i.notify("green",s.msg,"check",this.$q),this.getCurrentProfile()}).catch(s=>{i.notify("dark",s,"error",this.$q)}).then(s=>{this.loading=!1,i.hideLoadingBox(this.$q)})},afterVerifycode(e){this.onSubmit(e)},getToken(){return h.getToken()},afterUploaded(e){const a=JSON.parse(e.xhr.responseText);a.code===1?(this.avatar=a.details.url_image,this.filename=a.details.filename,this.upload_path=a.details.upload_path):(this.avatar="",this.filename="",this.upload_path="",i.notify("dark",a.msg,"error",this.$q))},takePhoto(){k.isCameraEnabled().then(e=>{k.isFileAccessEnabled().then(a=>{k.getPhoto(1).then(s=>{this.photo_data=s}).catch(s=>{this.photo_data=[]})}).catch(a=>{this.$q.platform.is.ios&&(this.upload_enabled=!this.upload_enabled)})}).catch(e=>{this.$q.platform.is.ios&&(this.upload_enabled=!this.upload_enabled)})},hadData(){return Object.keys(this.photo_data).length>0}}},G={class:"flex flex-center q-mb-md"},K={class:"relative-position"},M={class:"absolute-right",style:{top:"20px",right:"-10px"}};function W(e,a,s,Q,t,n){const $=P("StepsVerification");return d(),z(U,null,[o(N,{reveal:"","reveal-offset":"50",class:f({"bg-mydark text-white":e.$q.dark.mode,"bg-grey-1 text-dark":!e.$q.dark.mode})},{default:r(()=>[o(j,null,{default:r(()=>[o(u,{onClick:a[0]||(a[0]=l=>e.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",class:"q-mr-sm",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),o(I,{class:"text-weight-bold"},{default:r(()=>[b(c(e.$t("Edit Profile")),1)]),_:1})]),_:1})]),_:1},8,["class"]),o(J,{padding:"",class:f(["q-pl-md q-pr-md row items-stretch",{"bg-mydark ":e.$q.dark.mode,"bg-grey-1 ":!e.$q.dark.mode}])},{default:r(()=>[o(H,{onSubmit:n.checkForm,class:"col-12"},{default:r(()=>[g("div",G,[g("div",K,[o(x,{size:"60px"},{default:r(()=>[n.hasData?(d(),m(y,{key:0,src:t.photo_data.path,"spinner-color":"primary","spinner-size":"sm",fit:"cover"},null,8,["src"])):(d(),m(y,{key:1,src:t.avatar,class:"fit",fit:"cover","spinner-size":"sm","spinner-color":"primary"},null,8,["src"]))]),_:1}),g("div",M,[e.$q.capacitor?(d(),m(u,{key:0,round:"",color:e.$q.dark.mode?"grey600":"primary","text-color":e.$q.dark.mode?"grey300":"white",icon:"las la-pen",size:"8px",unelevated:"",onClick:n.takePhoto},null,8,["color","text-color","onClick"])):(d(),m(u,{key:1,round:"",color:e.$q.dark.mode?"grey600":"primary","text-color":e.$q.dark.mode?"grey300":"white",icon:"las la-pen",size:"8px",unelevated:"",onClick:a[1]||(a[1]=l=>t.upload_enabled=!t.upload_enabled)},null,8,["color","text-color"]))])])]),t.upload_enabled?(d(),m(R,{key:0,url:t.upload_api,label:e.$t("Upload files"),color:e.$q.dark.mode?"grey600":"primary","text-color":e.$q.dark.mode?"grey300":"white","no-thumbnails":"",class:"full-width q-mb-md",flat:"",accept:".jpg, image/*",bordered:"","max-files":1,"auto-upload":"","max-total-size":"1048576",onRejected:e.onRejectedFiles,headers:[{name:"Authorization",value:`token ${this.getToken()}`}],"field-name":"file",onUploaded:n.afterUploaded},null,8,["url","label","color","text-color","onRejected","headers","onUploaded"])):T("",!0),o(A,{flat:"",class:f({"bg-mydark text-white":e.$q.dark.mode,"bg-white text-black":!e.$q.dark.mode})},{default:r(()=>[o(D,null,{default:r(()=>[o(p,{modelValue:t.first_name,"onUpdate:modelValue":a[2]||(a[2]=l=>t.first_name=l),label:e.$t("First name"),outlined:"","lazy-rules":"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",rules:[l=>l&&l.length>0||this.$t("This field is required")]},null,8,["modelValue","label","bg-color","label-color","rules"]),o(p,{modelValue:t.last_name,"onUpdate:modelValue":a[3]||(a[3]=l=>t.last_name=l),label:e.$t("Last name"),outlined:"","lazy-rules":"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",rules:[l=>l&&l.length>0||this.$t("This field is required")]},null,8,["modelValue","label","bg-color","label-color","rules"]),o(p,{modelValue:t.email_address,"onUpdate:modelValue":a[4]||(a[4]=l=>t.email_address=l),label:e.$t("Email address"),outlined:"","lazy-rules":"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",rules:[l=>l&&l.length>0||this.$t("This field is required")]},null,8,["modelValue","label","bg-color","label-color","rules"]),o(p,{modelValue:t.mobile_number,"onUpdate:modelValue":a[6]||(a[6]=l=>t.mobile_number=l),mask:"##############",outlined:"","lazy-rules":"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",borderless:"",class:"input-borderless",rules:[l=>l&&l.length>0||this.$t("This field is required")]},{prepend:r(()=>[o(O,{dense:"",modelValue:t.mobile_prefix,"onUpdate:modelValue":a[5]||(a[5]=l=>t.mobile_prefix=l),options:Q.DataStore.phone_prefix_data,onFilter:e.filterFn,behavior:"dialog","input-debounce":"700",style:{border:"none"},"emit-value":"",borderless:"",class:"myq-field"},{option:r(({itemProps:l,opt:q})=>[o(v,F(E(l)),{default:r(()=>[o(_,{avatar:""},{default:r(()=>[o(y,{src:q.flag,style:{height:"15px","max-width":"20px"}},null,8,["src"])]),_:2},1024),o(_,null,{default:r(()=>[o(L,null,{default:r(()=>[b(c(q.label),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),"no-option":r(()=>[o(v,null,{default:r(()=>[o(_,{class:"text-grey"},{default:r(()=>[b(c(e.$t("No results")),1)]),_:1})]),_:1})]),_:1},8,["modelValue","options","onFilter"])]),_:1},8,["modelValue","bg-color","label-color","rules"])]),_:1})]),_:1},8,["class"]),o(X,{class:"q-pa-sm"}),o(u,{type:"submit",label:e.$t("Save"),unelevated:"","no-caps":"",color:"primary text-white",class:"full-width text-weight-bold",size:"lg",loading:t.loading},null,8,["label","loading"])]),_:1},8,["onSubmit"]),o($,{ref:"steps_verification",sent_message:t.sent_message,onAfterVerifycode:n.afterVerifycode},null,8,["sent_message","onAfterVerifycode"])]),_:1},8,["class"])],64)}var ye=V(Y,[["render",W]]);export{ye as default};
