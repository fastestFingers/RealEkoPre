import{_ as b,l as V,t as $,m,n as w,p as a,q as f,s as i,f as r,U as o,V as y,ab as Q,ac as g,F as n,S as c,X as v,a5 as C,Y as d,az as x,a6 as D}from"./index.9a53e84d.js";import{Q as k}from"./QSkeleton.df19fe70.js";import{Q as q}from"./QList.2553e488.js";import{Q as F}from"./QImg.28e972cd.js";import{Q as L}from"./QItemLabel.fa433f11.js";import{Q as R}from"./QSlideItem.57a7e0ef.js";import{u as T}from"./CartStore.50c3f128.js";import"./QPullToRefresh.5b5bf9cd.js";import"./touch.9135741d.js";import"./selection.1260671d.js";import"./format.8ac60962.js";import"./use-render-cache.3aae9b27.js";const A={name:"CartDetails",props:["payload","is_checkout","page"],components:{FavsItem:V(()=>$(()=>import("./FavsItem.975ae835.js"),["assets/FavsItem.975ae835.js","assets/index.9a53e84d.js","assets/index.661bbb30.css"]))},data(){return{loading:!1,items_count:0,cart_loading:!0,cart_reloading:!1,cart_uuid:"",cart_items:[],cart_summary:[],cart_merchant:[],cart_total:[],cart_subtotal:[],error:[],qty_options:[1,2,3,4,5,6,7,8,9],transaction_data:[],delivery_option:[],services_list:[],out_of_range:!1,is_close_slide:!1,data_slide:{}}},setup(){return{CartStore:T()}},methods:{updateCartQty(t,s,_){let h=s+t;_.qty=h,this.updateCartItems(h,_)},updateCartItems(t,s){this.loading=!0,m.updateCartItems(this.CartStore.cart_uuid,s.cart_row,t).then(_=>{this.CartStore.getCart(!1,this.payload)}).catch(_=>{m.notify("dark",_,"error",this.$q)}).then(_=>{this.loading=!1})},closeSlide(t){console.log(t),this.data_slide[t]&&(console.log(this.data_slide[t]),this.data_slide[t].reset())},onRight(t,s){this.data_slide[s]=t},removeItem(t){this.loading=!0,m.removeCartItem(this.CartStore.cart_uuid,t.cart_row).then(s=>{this.CartStore.getCart(!1,this.payload),this.$emit("afterRemoveitem")}).catch(s=>{m.notify("dark",s,"error",this.$q)}).then(s=>{this.loading=!1})},clearCart(){this.loading=!1,m.clearCart(m.getStorage("cart_uuid")).then(t=>{this.CartStore.getCart(!1,this.payload)}).catch(t=>{m.notify("dark",t,"error",this.$q)}).then(t=>{this.loading=!1})},afterSavefav(t){this.removeItem(t)},lineItemTotal(t,s){return console.log(t+"x"+s),parseFloat(s)*parseInt(t)}}},B={class:"row items-center inline q-gutter-md"},N={class:"text-subtitle2 text-weight-medium no-margin line-normal"},E=["innerHTML"],P={class:"text-grey ellipsis-2-linesx font13 line-normal"},j={key:0,class:"text-dark"},H={class:"row justify-between items-center"},M={class:"text-grey-7 font12 text-weight-medium"},O={class:"col-5"},U={class:"row items-center justify-center"},X={class:"col no-padding text-center"},Y={class:"col no-padding text-center text-weight-medium"},G={class:"col no-padding text-center"};function J(t,s,_,h,K,u){const S=w("DIV"),z=w("FavsItem");return h.CartStore.cart_loading?(a(),f(S,{key:0},{default:i(()=>[r(q,null,{default:i(()=>[(a(),o(n,null,y(10,e=>r(Q,{key:e},{default:i(()=>[r(g,{avatar:""},{default:i(()=>[r(k,{type:"circle"})]),_:1}),r(g,null,{default:i(()=>[r(k,{type:"text",style:{width:"80%"}}),r(k,{type:"text"}),r(k,{type:"text",style:{width:"20%"}})]),_:1})]),_:2},1024)),64))]),_:1})]),_:1})):(a(),f(S,{key:1},{default:i(()=>[h.CartStore.items_count>0?(a(),f(q,{key:0,separator:"",dense:""},{default:i(()=>[(a(!0),o(n,null,y(h.CartStore.cart_items,(e,I)=>(a(),f(R,{key:e.item_id,onRight:l=>u.onRight(l,I),"left-color":"white","right-color":t.$q.dark.mode?"grey600":"white"},{right:i(()=>[c("div",B,[r(v,{round:"",unelevated:"",color:"lightprimary","text-color":"primary",size:"sm",icon:"las la-times",onClick:l=>u.closeSlide(I)},null,8,["onClick"]),r(z,{ref_for:!0,ref:"favs",layout:2,item_token:e.item_token,cat_id:e.cat_id,active:!1,size:"md",onAfterSavefav:l=>u.afterSavefav(e)},null,8,["item_token","cat_id","onAfterSavefav"]),r(v,{round:"",unelevated:"",color:"lightprimary","text-color":"primary",size:"sm",icon:"las la-trash-alt",onClick:l=>u.removeItem(e)},null,8,["onClick"])])]),default:i(()=>[r(Q,{class:D({"bg-mydark text-white":t.$q.dark.mode,"bg-white text-black":!t.$q.dark.mode})},{default:i(()=>[r(g,{avatar:""},{default:i(()=>[r(F,{src:e.url_image,lazy:"",fit:"cover",style:{height:"70px",width:"70px"},class:"radius8","spinner-color":"secondary","spinner-size":"sm","placeholder-src":"placeholder.png"},null,8,["src"])]),_:2},1024),r(g,null,{default:i(()=>[r(L,null,{default:i(()=>[c("div",N,[c("span",{innerHTML:e.item_name},null,8,E),e.price.size_name!=""?(a(),o(n,{key:0},[C(" ("+d(e.price.size_name)+") ",1)],64)):x("",!0)]),c("div",P,[(a(!0),o(n,null,y(e.attributes,l=>(a(),o(n,{key:l},[(a(!0),o(n,null,y(l,p=>(a(),o("span",{key:p,class:"q-mr-xs"},d(p)+",",1))),128))],64))),128)),(a(!0),o(n,null,y(e.addons,l=>(a(),o(n,{key:l},[(a(!0),o(n,null,y(l.addon_items,p=>(a(),o("div",{key:p},d(p.sub_item_name)+" (+"+d(p.pretty_addons_total)+") ",1))),128))],64))),128)),e.special_instructions!=""?(a(),o("div",j,' "'+d(e.special_instructions)+'" ',1)):x("",!0)]),c("div",H,[c("div",M,[e.price.discount<=0?(a(),o(n,{key:0},[C(d(e.price.pretty_total),1)],64)):(a(),o(n,{key:1},[C(d(e.price.pretty_total_after_discount),1)],64))]),c("div",O,[c("div",U,[c("div",X,[e.qty==1?(a(),f(v,{key:0,unelevated:"",dense:"",size:"11px",icon:"delete",color:"primary",class:"radius8",onClick:l=>u.removeItem(e)},null,8,["onClick"])):(a(),f(v,{key:1,unelevated:"",dense:"",size:"11px",icon:"remove",color:"primary",class:"radius8",onClick:l=>u.updateCartQty(-1,e.qty,e)},null,8,["onClick"]))]),c("div",Y,d(e.qty),1),c("div",G,[r(v,{unelevated:"",dense:"",size:"11px",color:"primary",icon:"add",class:"radius8",onClick:l=>u.updateCartQty(1,e.qty,e)},null,8,["onClick"])])])])])]),_:2},1024)]),_:2},1024)]),_:2},1032,["class"])]),_:2},1032,["onRight","right-color"]))),128))]),_:1})):x("",!0)]),_:1}))}var dt=b(A,[["render",J]]);export{dt as default};
