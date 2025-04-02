import{_ as Q,R as V,Q as C,l as f,bB as _,m as i,av as g,n as b,p,U as P,f as o,s as a,a6 as y,F as T,X as n,a5 as D,Y as m,S as r,as as h,bz as I,aX as k,bC as z,b1 as F,q,az as w,t as v}from"./index.9793c43f.js";import{Q as A}from"./QToolbarTitle.1f40af49.js";import{Q as R}from"./QToolbar.76ca8ca1.js";import{Q as x}from"./QHeader.3cfb9d75.js";import{Q as E}from"./QForm.8fa69288.js";import{Q as S}from"./QSpace.04e5e530.js";import{Q as U}from"./QPage.dcf44012.js";import{u as B}from"./ClientStore.62b5921e.js";import"./QResizeObserver.d4331a6a.js";const N={name:"LoginPage",data(){return{username:"",password:"",field_type:"password",loading:!1,redirect:"",google_client_id:"",facebook_app_id:"",remember:!1,dont_have_account:this.$t("Don't have an account?"),rtl:!1}},setup(){const e=B(),t=V(),d=C();return{ClientStore:e,DataStorePersisted:t,DataStore:d}},components:{GoogleLogin:f(()=>v(()=>import("./GoogleLogin.772d7d65.js"),["assets/GoogleLogin.772d7d65.js","assets/index.9793c43f.js","assets/index.661bbb30.css"])),FacebookLogin:f(()=>v(()=>import("./FacebookLogin.e579e4e6.js"),["assets/FacebookLogin.e579e4e6.js","assets/index.9793c43f.js","assets/index.661bbb30.css"]))},created(){this.rtl=this.DataStorePersisted.rtl},mounted(){this.redirect=this.$route.query.redirect,this.google_client_id=_.google_client_id,this.facebook_app_id=_.facebook_app_id},watch:{rtl(e,t){this.DataStorePersisted.rtl=e,this.$q.lang.set({rtl:e})}},computed:{FieldIcon(){return this.field_type==="password"?"eva-eye-outline":"eva-eye-off-outline"},hasSocialLogin(){return!i.empty(this.google_client_id)||!i.empty(this.facebook_app_id)},getRTLMode(){return this.rtl?"format_textdirection_l_to_r":"format_textdirection_r_to_l"}},methods:{onSubmit(){this.loading=!0,i.userLogin({username:this.username,password:this.password,local_id:i.getStorage("place_id")}).then(e=>{i.notify("light-green",e.msg,"check_circle",this.$q),g.setUser(e.details.user_data),g.setToken(e.details.user_token),this.ClientStore.user_settings=e.details.user_settings;const t=i.getStorage("place_id");typeof t!="undefined"&&t!==null?typeof this.redirect!="undefined"&&this.redirect!==null?this.$router.push(this.redirect):this.$router.push("/home"):this.$router.push("/location")}).catch(e=>{i.notify("dark",e,"error",this.$q)}).then(e=>{this.loading=!1})},afterLogin(e){e.place_id=i.getStorage("place_id"),i.socialRegistration(e).then(t=>{let d=!1;if(i.empty(t.details.complete_registration)||(d=t.details.complete_registration),t.details.verification==="1")this.$router.push({path:"/account/verify",query:{uuid:t.details.uuid,msg:t.msg}});else if(console.debug("=>"+d),d)this.$router.push({path:"/account/complete-registration",query:{uuid:t.details.uuid}});else{i.notify("dark",t.msg,"check_circle",this.$q),g.setUser(t.details.user_data),g.setToken(t.details.user_token),this.ClientStore.user_settings=t.details.user_settings;const u=i.getStorage("place_id");typeof u!="undefined"&&u!==null?typeof this.redirect!="undefined"&&this.redirect!==null?this.$router.push(this.redirect):this.$router.push("/home"):this.$router.push("/location")}}).catch(t=>{i.notify("dark",t,"error",this.$q)}).then(t=>{})}}},G={class:"full-width q-pa-md"},M={class:"text-weight-bold"},O={class:"text-weight-medium q-ma-none"},X={class:"row"},Y={class:"col"},j={class:"col text-right"},H={class:"text-center q-pt-md q-pb-sm"},J={class:"social-login"},K={class:"relative-position q-mb-lg q-mt-md"},W={class:"row justify-between full-width"},Z={class:"col text-left text-white"},ee={class:"col-1 text-right text-white"};function te(e,t,d,u,s,c){const $=b("FacebookLogin"),L=b("GoogleLogin");return p(),P(T,null,[o(x,{reveal:"","reveal-offset":"50",class:y({"bg-mydark text-white":e.$q.dark.mode,"bg-white text-dark":!e.$q.dark.mode})},{default:a(()=>[o(R,null,{default:a(()=>[o(n,{onClick:t[0]||(t[0]=l=>e.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",class:"q-mr-sm",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),o(A,{class:"text-weight-bold"},{default:a(()=>[D(m(e.$t("Sigin In")),1)]),_:1}),r("div",null,[o(h,{name:c.getRTLMode,size:"sm"},null,8,["name"]),o(I,{modelValue:s.rtl,"onUpdate:modelValue":t[1]||(t[1]=l=>s.rtl=l),color:"primary"},null,8,["modelValue"])]),o(n,{flat:"",round:"",dense:"",class:"q-mr-sm",color:e.$q.dark.mode?"white":"dark",label:e.$t("Skip"),"no-caps":"",to:"/home"},null,8,["color","label"])]),_:1})]),_:1},8,["class"]),o(U,{padding:"",class:"flex flex-center"},{default:a(()=>[r("div",G,[r("h5",M,m(e.$t("Let's Sign You In")),1),r("p",O,m(e.$t("Enter your username and password for sigin.")),1),o(n,{flat:"",label:s.dont_have_account,"no-caps":"",class:"q-pa-none text-weight-bold min-height q-mb-md",color:"secondary",to:"/user/signup"},null,8,["label"]),o(E,{onSubmit:c.onSubmit},{default:a(()=>[o(k,{modelValue:s.username,"onUpdate:modelValue":t[2]||(t[2]=l=>s.username=l),label:e.$t("Email"),outlined:"","lazy-rules":"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",borderless:"",class:"input-borderless",rules:[l=>l&&l.length>0||this.$t("This field is required")]},null,8,["modelValue","label","bg-color","label-color","rules"]),o(k,{modelValue:s.password,"onUpdate:modelValue":t[4]||(t[4]=l=>s.password=l),type:s.field_type,outlined:"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",borderless:"",class:"input-borderless",label:e.$t("Password"),"lazy-rules":"",rules:[l=>l&&l.length>0||this.$t("This field is required")]},{append:a(()=>[o(h,{onClick:t[3]||(t[3]=l=>s.field_type=s.field_type=="password"?"text":"password"),name:c.FieldIcon,color:"grey",class:"cursor-pointer"},null,8,["name"])]),_:1},8,["modelValue","type","bg-color","label-color","label","rules"]),r("div",X,[r("div",Y,[o(z,{dense:"",modelValue:s.remember,"onUpdate:modelValue":t[5]||(t[5]=l=>s.remember=l),label:e.$t("Remember Me"),color:"primary"},null,8,["modelValue","label"])]),r("div",j,[o(n,{flat:"",label:e.$t("Forgot Password?"),"no-caps":"",class:"q-pa-none text-weight-bold min-height q-mb-md",color:"secondary",to:"/user/forgotpass"},null,8,["label"])])]),o(n,{loading:s.loading,type:"submit",label:e.$t("Sign In"),unelevated:"","no-caps":"",color:"primary text-white",class:"full-width text-weight-bold",size:"lg"},null,8,["loading","label"]),r("div",H,[o(n,{flat:"",label:e.$t("Continue as guest"),"no-caps":"",class:"q-pa-none text-weight-bold min-height",color:"secondary",to:{path:"/user/guest",query:{redirect:this.redirect}},size:"md"},null,8,["label","to"])])]),_:1},8,["onSubmit"]),r("div",J,[r("div",K,[o(F,{spaced:"",labe:""}),r("div",{class:y(["absolute-center q-pl-sm q-pr-sm",{"bg-mydark text-grey300":e.$q.dark.mode,"bg-white text-black":!e.$q.dark.mode}])},m(e.$t("Or")),3)]),o(n,{unelevated:"","no-caps":"",color:"primary",class:"full-width text-weight-bold",size:"lg",to:"/user/login-phone"},{default:a(()=>[r("div",W,[r("div",Z,m(e.$t("Continue with Phone")),1),r("div",ee,[o(h,{name:"las la-phone"})])])]),_:1}),o(S,{class:"q-pa-sm"}),u.DataStore.fb_flag?(p(),q($,{key:0,ref:"facebook_login",app_id:s.facebook_app_id,onAfterLogin:c.afterLogin},null,8,["app_id","onAfterLogin"])):w("",!0),o(S,{class:"q-pa-sm"}),u.DataStore.google_login_enabled?(p(),q(L,{key:1,client_id:s.google_client_id,ref:"google_login",onAfterLogin:c.afterLogin},null,8,["client_id","onAfterLogin"])):w("",!0)])])]),_:1})],64)}var ce=Q(N,[["render",te]]);export{ce as default};
