import{_ as T,l as k,t as I,Q as C,R as L,m as f,n as h,p as m,U as b,q as S,F as D,s as A,V as P,f as v,az as B}from"./index.9793c43f.js";import{Q as M}from"./QSkeleton.6e239cc5.js";import{Q as q}from"./QImg.51839b12.js";import{g as E,n as F,S as V,a as $}from"./swiper-slide.48402cb7.js";/* empty css                   */import{u as Q}from"./CartStore.e08e1718.js";function R({swiper:e,extendParams:l,on:s,emit:t}){let n;e.autoplay={running:!1,paused:!1},l({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});function a(){if(!e.size){e.autoplay.running=!1,e.autoplay.paused=!1;return}const o=e.slides.eq(e.activeIndex);let i=e.params.autoplay.delay;o.attr("data-swiper-autoplay")&&(i=o.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(n),n=F(()=>{let u;e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),u=e.slidePrev(e.params.speed,!0,!0),t("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?r():(u=e.slideTo(e.slides.length-1,e.params.speed,!0,!0),t("autoplay")):(u=e.slidePrev(e.params.speed,!0,!0),t("autoplay")):e.params.loop?(e.loopFix(),u=e.slideNext(e.params.speed,!0,!0),t("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?r():(u=e.slideTo(0,e.params.speed,!0,!0),t("autoplay")):(u=e.slideNext(e.params.speed,!0,!0),t("autoplay")),(e.params.cssMode&&e.autoplay.running||u===!1)&&a()},i)}function y(){return typeof n!="undefined"||e.autoplay.running?!1:(e.autoplay.running=!0,t("autoplayStart"),a(),!0)}function r(){return!e.autoplay.running||typeof n=="undefined"?!1:(n&&(clearTimeout(n),n=void 0),e.autoplay.running=!1,t("autoplayStop"),!0)}function c(o){!e.autoplay.running||e.autoplay.paused||(n&&clearTimeout(n),e.autoplay.paused=!0,o===0||!e.params.autoplay.waitForTransition?(e.autoplay.paused=!1,a()):["transitionend","webkitTransitionEnd"].forEach(i=>{e.$wrapperEl[0].addEventListener(i,d)}))}function _(){const o=E();o.visibilityState==="hidden"&&e.autoplay.running&&c(),o.visibilityState==="visible"&&e.autoplay.paused&&(a(),e.autoplay.paused=!1)}function d(o){!e||e.destroyed||!e.$wrapperEl||o.target===e.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach(i=>{e.$wrapperEl[0].removeEventListener(i,d)}),e.autoplay.paused=!1,e.autoplay.running?a():r())}function p(){e.params.autoplay.disableOnInteraction?r():(t("autoplayPause"),c()),["transitionend","webkitTransitionEnd"].forEach(o=>{e.$wrapperEl[0].removeEventListener(o,d)})}function g(){e.params.autoplay.disableOnInteraction||(e.autoplay.paused=!1,t("autoplayResume"),a())}function O(){e.params.autoplay.pauseOnMouseEnter&&(e.$el.on("mouseenter",p),e.$el.on("mouseleave",g))}function x(){e.$el.off("mouseenter",p),e.$el.off("mouseleave",g)}s("init",()=>{e.params.autoplay.enabled&&(y(),E().addEventListener("visibilitychange",_),O())}),s("beforeTransitionStart",(o,i,u)=>{e.autoplay.running&&(u||!e.params.autoplay.disableOnInteraction?e.autoplay.pause(i):r())}),s("sliderFirstMove",()=>{e.autoplay.running&&(e.params.autoplay.disableOnInteraction?r():c())}),s("touchEnd",()=>{e.params.cssMode&&e.autoplay.paused&&!e.params.autoplay.disableOnInteraction&&a()}),s("destroy",()=>{x(),e.autoplay.running&&r(),E().removeEventListener("visibilitychange",_)}),Object.assign(e.autoplay,{pause:c,run:a,start:y,stop:r})}const z={name:"HomeBanner",components:{Swiper:V,SwiperSlide:$,ItemDetails:k(()=>I(()=>import("./ItemDetails.b898674e.js"),["assets/ItemDetails.b898674e.js","assets/index.9793c43f.js","assets/index.661bbb30.css","assets/QCircularProgress.c3fbe13d.js","assets/format.8ac60962.js","assets/QImg.51839b12.js","assets/QChip.82264df0.js","assets/QBtnToggle.3250107e.js","assets/QBtnGroup.0b2a69a0.js","assets/QSelect.06fcbf11.js","assets/QItemLabel.eca1584d.js","assets/QMenu.e8b690c9.js","assets/selection.f40087f4.js","assets/rtl.276c3f1b.js","assets/QSpace.04e5e530.js","assets/CartStore.e08e1718.js","assets/FavoriteStore.241a6de6.js","assets/DeliverySched.51e51dc1.js"])),ItemDetailsCheckbox:k(()=>I(()=>import("./ItemDetailsCheckbox.ab48015f.js"),["assets/ItemDetailsCheckbox.ab48015f.js","assets/index.9793c43f.js","assets/index.661bbb30.css","assets/QCircularProgress.c3fbe13d.js","assets/format.8ac60962.js","assets/QImg.51839b12.js","assets/QItemLabel.eca1584d.js","assets/QList.f278e53f.js","assets/QSelect.06fcbf11.js","assets/QChip.82264df0.js","assets/QMenu.e8b690c9.js","assets/selection.f40087f4.js","assets/rtl.276c3f1b.js","assets/QSpace.04e5e530.js","assets/QBtnGroup.0b2a69a0.js","assets/ClosePopup.eb5e6d7f.js","assets/CartStore.e08e1718.js","assets/FavoriteStore.241a6de6.js","assets/DeliverySched.51e51dc1.js"]))},data(){return{loading:!1,slide:1,data:[],test:[],restaurant_slug:"",payload:["items","subtotal","distance_local","items_count","merchant_info","check_opening","transaction_info"]}},setup(){const e=C(),l=L(),s=Q();return{modules:[R],DataStore:e,DataStorePersisted:l,CartStore:s}},mounted(){Object.keys(this.DataStore.banner).length<=0&&this.DataStore.getBanner()},computed:{hasData(){return this.DataStore.banner.length>0}},methods:{afterAdditems(){console.log("afterAdditems"),f.setStorage("merchant_slug",this.restaurant_slug),this.CartStore.getCart(!0,this.payload)},showBanner(e){switch(e.banner_type){case"restaurant":let l=f.empty(this.DataStore.merchant_list[e.merchant_id])?"":this.DataStore.merchant_list[e.merchant_id].restaurant_slug;f.empty(l)||this.$router.push({name:"menu",params:{slug:l}});break;case"food":console.log(e.item_id);let s=f.empty(this.DataStore.food_list[e.item_id])?"":this.DataStore.food_list[e.item_id];if(Object.keys(s).length>0){this.restaurant_slug=s.restaurant_slug;const a={cat_id:parseInt(s.cat_id),item_uuid:s.item_uuid};this.DataStore.addons_use_checkbox?this.$refs.item_details2.showItem2(a,this.restaurant_slug):this.$refs.item_details.showItem2(a,this.restaurant_slug)}break;case"restaurant_featured":let t=e.featured;f.empty(t)||this.$router.push({name:"feed",query:{query:"featured",featured_id:t}});break;case"cuisine":let n=f.empty(this.DataStore.cuisine_list[e.cuisine_id])?"":this.DataStore.cuisine_list[e.cuisine_id];this.$router.push({name:"feed",query:{query:"all",cuisine_id:e.cuisine_id,cuisine_name:n}});break}}}};function N(e,l,s,t,n,a){const y=h("swiper-slide"),r=h("swiper"),c=h("ItemDetails"),_=h("ItemDetailsCheckbox");return m(),b(D,null,[t.DataStore.banner_loading?(m(),S(M,{key:0,height:"200px"})):(m(),b(D,{key:1},[a.hasData?(m(),S(r,{key:0,slidesPerView:1,spaceBetween:0,loop:!0,class:"q-mb-md",autoplay:{delay:3e3,disableOnInteraction:!1},modules:t.modules},{default:A(()=>[(m(!0),b(D,null,P(t.DataStore.banner,(d,p)=>(m(),S(y,{key:d.banner_id,name:p,style:{height:"300px"}},{default:A(()=>[v(q,{src:d.image,class:"fit radius10 cursor-pointer",fit:"cover",loading:"lazy","spinner-color":"primary","spinner-size":"md",onClick:g=>a.showBanner(d)},null,8,["src","onClick"])]),_:2},1032,["name"]))),128))]),_:1},8,["modules"])):B("",!0)],64)),v(c,{ref:"item_details",slug:n.restaurant_slug,money_config:t.DataStore.money_config,currency_code:t.DataStorePersisted.use_currency_code,onAfterAdditems:a.afterAdditems},null,8,["slug","money_config","currency_code","onAfterAdditems"]),v(_,{ref:"item_details2",slug:n.restaurant_slug,money_config:t.DataStore.money_config,currency_code:t.DataStorePersisted.use_currency_code,onAfterAdditems:a.afterAdditems},null,8,["slug","money_config","currency_code","onAfterAdditems"])],64)}var W=T(z,[["render",N]]);export{W as default};
