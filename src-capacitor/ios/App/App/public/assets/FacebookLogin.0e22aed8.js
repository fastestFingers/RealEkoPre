import{ay as l,t as r,_ as c,m as _,p as d,q as h,s as g,S as i,Y as f,f as m,as as p,X as u}from"./index.9a53e84d.js";const o=l("FacebookLogin",{web:()=>r(()=>import("./web.530bad7c.js"),["assets/web.530bad7c.js","assets/index.9a53e84d.js","assets/index.661bbb30.css"]).then(e=>new e.FacebookLoginWeb)}),b=["email","user_birthday","user_photos","user_gender"],k={name:"FacebookLogin",props:["app_id"],data(){return{loading:!1}},mounted(){this.init()},methods:{init(){o.initialize({appId:this.app_id})},Signin(){o.login({permissions:b}).then(e=>{this.getFbProfile(e.accessToken.token)}).catch(e=>{}).then(e=>{})},getFbProfile(e){this.loading=!0,o.getProfile({fields:["email","first_name","last_name"]}).then(t=>{console.debug(t);const a={id:t.id,email_address:t.email,first_name:t.first_name,last_name:t.last_name,social_strategy:"facebook",social_token:e};this.$emit("afterLogin",a)}).catch(t=>{_.notify("red-5",t,"error_outline",this.$q)}).then(t=>{this.loading=!1})}}},w={class:"row justify-between full-width"},F={class:"col text-left text-white"},x={class:"col-1 text-right text-white"};function P(e,t,a,v,s,n){return d(),h(u,{onClick:n.Signin,loading:s.loading,unelevated:"","no-caps":"",color:"myblue",class:"full-width text-weight-bold",size:"lg"},{default:g(()=>[i("div",w,[i("div",F,f(e.$t("Continue with Facebook")),1),i("div",x,[m(p,{name:"lab la-facebook"})])])]),_:1},8,["onClick","loading"])}var L=c(k,[["render",P]]);export{L as default};
