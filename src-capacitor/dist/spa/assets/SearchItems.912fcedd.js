import{_ as V,l as g,Q as L,m as b,n as p,p as a,U as u,f as e,s,a6 as w,q as f,az as S,F as h,X as C,a5 as y,Y as c,S as n,aX as P,as as q,V as I,t as k,ab as v,ac as Q}from"./index.f7d559c9.js";import{Q as T}from"./QToolbarTitle.bdcd688d.js";import{Q as E}from"./QToolbar.e8bab0fc.js";import{Q as B}from"./QHeader.26b1a527.js";import{Q as x}from"./QList.559a09ed.js";import{Q as _}from"./QSkeleton.d808f021.js";import{Q as N}from"./QImg.04a8fde6.js";import{Q as R}from"./QPage.026453a2.js";import{Q as z}from"./QFooter.2200c75f.js";import{u as M}from"./MenuStore.aea32adc.js";import{u as O}from"./CartStore.42bb2db8.js";import"./QResizeObserver.fad9f3e9.js";const j={name:"SearchItems",components:{SearchListFood:g(()=>k(()=>import("./SearchListFood.364ba873.js"),["assets/SearchListFood.364ba873.js","assets/QImg.04a8fde6.js","assets/index.f7d559c9.js","assets/index.661bbb30.css","assets/QChip.75be2f9e.js","assets/QItemLabel.4e494c2c.js"])),ItemDetails:g(()=>k(()=>import("./ItemDetails.2e80d345.js"),["assets/ItemDetails.2e80d345.js","assets/index.f7d559c9.js","assets/index.661bbb30.css","assets/QCircularProgress.ea9c9417.js","assets/format.68d15b11.js","assets/QImg.04a8fde6.js","assets/QChip.75be2f9e.js","assets/QBtnToggle.b8808e61.js","assets/QBtnGroup.73e707aa.js","assets/QSelect.f548dfe7.js","assets/QItemLabel.4e494c2c.js","assets/QMenu.3887798d.js","assets/selection.4a59aca4.js","assets/rtl.0d66ec23.js","assets/QSpace.cb165838.js","assets/CartStore.42bb2db8.js","assets/FavoriteStore.4f11bec7.js","assets/DeliverySched.5943bd48.js"])),ItemDetailsCheckbox:g(()=>k(()=>import("./ItemDetailsCheckbox.986b61c2.js"),["assets/ItemDetailsCheckbox.986b61c2.js","assets/index.f7d559c9.js","assets/index.661bbb30.css","assets/QCircularProgress.ea9c9417.js","assets/format.68d15b11.js","assets/QImg.04a8fde6.js","assets/QItemLabel.4e494c2c.js","assets/QList.559a09ed.js","assets/QSelect.f548dfe7.js","assets/QChip.75be2f9e.js","assets/QMenu.3887798d.js","assets/selection.4a59aca4.js","assets/rtl.0d66ec23.js","assets/QSpace.cb165838.js","assets/QBtnGroup.73e707aa.js","assets/ClosePopup.db1c9371.js","assets/CartStore.42bb2db8.js","assets/FavoriteStore.4f11bec7.js","assets/DeliverySched.5943bd48.js"]))},data(){return{slug:"",q:"",food_list:[],awaitingSearch:!1,item_added:!1}},setup(){const t=M(),r=O(),m=L();return{MenuStore:t,CartStore:r,DataStore:m}},created(){this.slug=this.$route.query.slug},watch:{q(t,r){if(!this.awaitingSearch){if(typeof this.q=="undefined"||this.q===null||this.q===""||this.q==="null"||this.q==="undefined")return!1;setTimeout(()=>{b.fetchDataPost("searchItems","q="+this.q+"&slug="+this.slug).then(m=>{console.debug(m),this.food_list=m.details.data}).catch(m=>{this.food_list=[]}).then(m=>{this.awaitingSearch=!1})},1e3)}this.awaitingSearch=!0}},computed:{hasFilter(){return!b.empty(this.q)},hasResults(){return Object.keys(this.food_list).length>0}},methods:{onClickitem(t){this.item_added=!1;const r={cat_id:t.cat_id,item_uuid:t.item_uuid};this.DataStore.addons_use_checkbox?this.$refs.refItem2.showItem2(r,this.slug):this.$refs.refItem.showItem2(r,this.slug)},afterAdditems(){this.item_added=!0,this.CartStore.getCart(!1,this.CartStore.cart_payload)}}},U={class:"col-12"},X={key:2,class:"flex flex-center",style:{"min-height":"89%"}},H={class:"text-center full-width"},Y={class:"text-h5 text-weight-bold"},G={class:"text-grey font12"},J={class:"text-h5 text-weight-bold"},K={class:"text-grey font12"},W={class:"row items-center justify-between fit"},Z={class:"text-weight-bold font17"},$={class:"text-weight-bold font16"};function ee(t,r,m,l,o,d){const A=p("SearchListFood"),D=p("ItemDetails"),F=p("ItemDetailsCheckbox");return a(),u(h,null,[e(B,{reveal:"","reveal-offset":"10",class:w({"bg-mydark text-white":t.$q.dark.mode,"bg-white text-black":!t.$q.dark.mode})},{default:s(()=>[e(E,null,{default:s(()=>[e(C,{onClick:r[0]||(r[0]=i=>t.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",class:"q-mr-sm",color:t.$q.dark.mode?"white":"dark"},null,8,["color"]),e(T,{class:"text-weight-bold"},{default:s(()=>[y(c(t.$t("Search menu items")),1)]),_:1})]),_:1})]),_:1},8,["class"]),e(R,{class:"q-pl-md q-pr-md row items-stretch"},{default:s(()=>[n("div",U,[e(P,{modelValue:o.q,"onUpdate:modelValue":r[2]||(r[2]=i=>o.q=i),label:t.$t("Search"),outlined:"","lazy-rules":"","bg-color":t.$q.dark.mode?"grey600":"input","label-color":"grey",borderless:"",class:"input-borderless"},{prepend:s(()=>[e(q,{name:"eva-search-outline",size:"sm"})]),append:s(()=>[d.hasFilter?(a(),f(q,{key:0,class:"cursor-pointer",name:"close",color:"grey",onClick:r[1]||(r[1]=i=>this.q="")})):S("",!0)]),_:1},8,["modelValue","label","bg-color"]),d.hasResults&&d.hasFilter&&!o.awaitingSearch?(a(),f(x,{key:0,separator:""},{default:s(()=>[(a(!0),u(h,null,I(o.food_list,i=>(a(),f(v,{key:i,onClick:te=>d.onClickitem(i),clickable:""},{default:s(()=>[e(A,{items:i,merchant_list:t.merchant_list},null,8,["items","merchant_list"])]),_:2},1032,["onClick"]))),128))]),_:1})):d.hasFilter&&o.awaitingSearch?(a(),f(x,{key:1},{default:s(()=>[(a(),u(h,null,I(8,i=>e(v,{key:i},{default:s(()=>[e(Q,{avatar:""},{default:s(()=>[e(_,{width:"80px",height:"80px"})]),_:1}),e(Q,null,{default:s(()=>[e(_,{type:"text"}),e(_,{type:"text",class:"w-50"}),e(_,{type:"text",class:"w-70"}),e(_,{type:"text",class:"w-25"})]),_:1})]),_:2},1024)),64))]),_:1})):(a(),u("div",X,[n("div",H,[d.hasFilter&&!o.awaitingSearch?(a(),u(h,{key:0},[n("div",Y,c(t.$t("No items found")),1),n("p",G,c(t.$t("Sorry, we couldn't find any results")),1)],64)):(a(),u(h,{key:1},[e(N,{src:"search.png",fit:"fill","spinner-color":"primary",style:{height:"80px","max-width":"80px"}}),n("div",J,c(t.$t("Search Items")),1),n("p",K,[y(c(t.$t("Search items from"))+" ",1),l.MenuStore.data_info[o.slug]?(a(),u(h,{key:0},[y(c(l.MenuStore.data_info[o.slug].restaurant_name),1)],64)):S("",!0)])],64))])]))]),e(D,{ref:"refItem",slug:o.slug,onAfterAdditems:d.afterAdditems},null,8,["slug","onAfterAdditems"]),e(F,{ref:"refItem2",slug:o.slug,onAfterAdditems:d.afterAdditems},null,8,["slug","onAfterAdditems"])]),_:1}),l.CartStore.items_count>0&&o.item_added==!0?(a(),f(z,{key:0,reveal:"",class:w(["q-pl-md q-pr-md q-pb-sm q-pt-sm text-dark",{"bg-primary":!l.CartStore.cart_reloading,"bg-grey-5":l.CartStore.cart_reloading}])},{default:s(()=>[e(C,{to:"/checkout",loading:l.CartStore.cart_loading,disable:!l.CartStore.canProceed,unelevated:"","text-color":"white","no-caps":"",class:"radius10 fit",color:{primary:!l.CartStore.cart_reloading,"grey-5":l.CartStore.cart_reloading}},{default:s(()=>[n("div",W,[n("div",Z,c(t.$t("Checkout")),1),n("div",$,c(l.CartStore.cart_subtotal.value),1)])]),_:1},8,["loading","disable","color"])]),_:1},8,["class"])):S("",!0)],64)}var fe=V(j,[["render",ee]]);export{fe as default};
