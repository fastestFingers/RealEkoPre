import{_ as i,p as r,U as s}from"./index.f7d559c9.js";const n={name:"componentsRecaptcha",props:["sitekey","size","theme","is_enabled","language_code"],data(){return{recaptcha:null}},mounted(){this.is_enabled==="1"&&this.initCapcha()},methods:{initCapcha(){window.grecaptcha==null?new Promise(e=>{window.recaptchaReady=function(){e()};const a=window.document,c="recaptcha-script",t=a.createElement("script");t.id=c,t.setAttribute("src","https://www.google.com/recaptcha/api.js?onload=recaptchaReady&render=explicit&hl="+this.language_code),a.head.appendChild(t)}).then(()=>{this.renderRecaptcha()}):this.renderRecaptcha()},renderRecaptcha(){this.recaptcha=grecaptcha.render(this.$refs.recaptcha_target,{sitekey:this.sitekey,theme:this.theme,size:this.size,tabindex:this.tabindex,callback:e=>this.$emit("verify",e),"expired-callback":()=>this.$emit("expire"),"error-callback":()=>this.$emit("fail")})},reset(){grecaptcha.reset(this.recaptcha)}}},h={ref:"recaptcha_target"};function p(e,a,c,t,o,d){return r(),s("div",h,null,512)}var m=i(n,[["render",p]]);export{m as default};
