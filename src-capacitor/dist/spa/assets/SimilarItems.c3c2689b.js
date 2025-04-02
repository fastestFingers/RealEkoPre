import{_ as M,l as C,t as w,r as i,Q as q,o as V,n as h,p as a,U as n,F as c,f as r,S as o,Y as f,s as A,V as Q,q as B,X as E,a5 as b,az as D,m as v}from"./index.f7d559c9.js";import{Q as y}from"./QSkeleton.d808f021.js";import{Q as N}from"./QImg.04a8fde6.js";import{u as P}from"./CartStore.42bb2db8.js";import{u as z}from"./MenuStore.aea32adc.js";import{S as L,a as O}from"./swiper-slide.4e44b66c.js";/* empty css                   */const T={name:"SimilarItems",props:["title","bg","merchant_id"],components:{Swiper:L,SwiperSlide:O,ItemDetails:C(()=>w(()=>import("./ItemDetails.2e80d345.js"),["assets/ItemDetails.2e80d345.js","assets/index.f7d559c9.js","assets/index.661bbb30.css","assets/QCircularProgress.ea9c9417.js","assets/format.68d15b11.js","assets/QImg.04a8fde6.js","assets/QChip.75be2f9e.js","assets/QBtnToggle.b8808e61.js","assets/QBtnGroup.73e707aa.js","assets/QSelect.f548dfe7.js","assets/QItemLabel.4e494c2c.js","assets/QMenu.3887798d.js","assets/selection.4a59aca4.js","assets/rtl.0d66ec23.js","assets/QSpace.cb165838.js","assets/CartStore.42bb2db8.js","assets/FavoriteStore.4f11bec7.js","assets/DeliverySched.5943bd48.js"])),ItemDetailsCheckbox:C(()=>w(()=>import("./ItemDetailsCheckbox.986b61c2.js"),["assets/ItemDetailsCheckbox.986b61c2.js","assets/index.f7d559c9.js","assets/index.661bbb30.css","assets/QCircularProgress.ea9c9417.js","assets/format.68d15b11.js","assets/QImg.04a8fde6.js","assets/QItemLabel.4e494c2c.js","assets/QList.559a09ed.js","assets/QSelect.f548dfe7.js","assets/QChip.75be2f9e.js","assets/QMenu.3887798d.js","assets/selection.4a59aca4.js","assets/rtl.0d66ec23.js","assets/QSpace.cb165838.js","assets/QBtnGroup.73e707aa.js","assets/ClosePopup.db1c9371.js","assets/CartStore.42bb2db8.js","assets/FavoriteStore.4f11bec7.js","assets/DeliverySched.5943bd48.js"]))},setup(d){const S=i(0),l=i(!1),t=i([]),k=i(2),p=i([]),_=i(null),u=i(null),g=i(["items","subtotal","distance_local","items_count","merchant_info","check_opening","transaction_info"]),m=P(),e=z(),I=q();return V(()=>{Object.keys(e.data_similar_items).length<=0?e.getSimilarItems(d.merchant_id):e.data_similar_items[d.merchant_id]||e.getSimilarItems(d.merchant_id)}),{slide:S,loading:l,data:t,getSimilarItems:()=>{l.value=!0,v.SimilarItems(v.getStorage("cart_uuid"),k.value).then(s=>{t.value=s.details}).catch(s=>{console.debug(s)}).then(s=>{l.value=!1})},onClickitem:s=>{const x={cat_id:s.cat_id,item_uuid:s.item_uuid};I.addons_use_checkbox?u.value.showItem2(x,m.cart_merchant.slug):_.value.showItem2(x,m.cart_merchant.slug)},getMoneyConfig:()=>{v.getMoneyConfig().then(s=>{p.value=s.details}).catch(s=>{}).then(s=>{})},moneyConfig:p,CartStore:m,afterAdditems:s=>{m.getCart(!1,g.value)},refItem:_,refItem2:u,MenuStore:e}}},F={class:"row q-gutter-sm"},R={class:"col-9"},j={class:"col-2"},U={class:"text-h6 text-weight-boldx q-mb-xs"},X=["onClick"],Y={class:"relative-position"},G={class:"absolute-bottom-right q-pa-sm"},H={class:"q-pt-sm"},J={key:0,class:"text-weight-bold text-h5"},K={class:"line-normal text-body2"},W=o("div",{class:"q-pa-sm"},null,-1);function Z(d,S,l,t,k,p){const _=h("swiper-slide"),u=h("swiper"),g=h("ItemDetails"),m=h("ItemDetailsCheckbox");return a(),n(c,null,[t.MenuStore.loading_similar_items?(a(),n(c,{key:0},[r(y,{type:"text",style:{width:"80px"}}),o("div",F,[o("div",R,[r(y,{height:"60px",square:"",class:"radius8"})]),o("div",j,[r(y,{height:"60px",square:"",class:"radius8"})])])],64)):(a(),n(c,{key:1},[o("div",U,f(l.title),1),r(u,{"slides-per-view":2.5,"space-between":10},{default:A(()=>[(a(!0),n(c,null,Q(t.MenuStore.data_similar_items[l.merchant_id],e=>(a(),B(_,{key:e},{default:A(()=>[o("div",{class:"font12 cursor-pointer",onClick:I=>t.onClickitem(e)},[o("div",Y,[r(N,{src:e.url_image,style:{"max-width":"100%",height:"100px"},"spinner-color":"primary","spinner-size":"sm","placeholder-src":"placeholder.png",class:"radius10"},null,8,["src"]),o("div",G,[r(E,{round:"",color:"dark",icon:"add",unelevated:"",size:"sm"})])]),o("div",H,[e.price?(a(),n("div",J,[e.price[0]?(a(),n(c,{key:0},[e.price[0].discount>0?(a(),n(c,{key:0},[b(f(e.price[0].pretty_price_after_discount),1)],64)):(a(),n(c,{key:1},[b(f(e.price[0].pretty_price),1)],64))],64)):D("",!0)])):D("",!0),o("div",K,f(e.item_name),1)])],8,X)]),_:2},1024))),128))]),_:1},8,["slides-per-view"])],64)),r(g,{ref:"refItem",slug:t.CartStore.cart_merchant.slug,money_config:t.MenuStore.money_config,onAfterAdditems:t.afterAdditems},null,8,["slug","money_config","onAfterAdditems"]),r(m,{ref:"refItem2",slug:t.CartStore.cart_merchant.slug,money_config:t.MenuStore.money_config,onAfterAdditems:t.afterAdditems},null,8,["slug","money_config","onAfterAdditems"]),W],64)}var me=M(T,[["render",Z]]);export{me as default};
