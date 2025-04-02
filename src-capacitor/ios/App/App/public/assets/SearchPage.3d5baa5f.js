import{_ as N,R as O,l as v,m as u,n as p,p as l,U as h,f as e,s as r,q as m,a6 as q,az as w,F as f,X as y,a5 as D,Y as _,S as i,aX as H,as as P,V as b,t as C,ab as k,ac as F}from"./index.9793c43f.js";import{Q as L}from"./QToolbarTitle.1f40af49.js";import{Q as B}from"./QToolbar.76ca8ca1.js";import{Q as E}from"./QHeader.3cfb9d75.js";import{Q as j}from"./QSpace.04e5e530.js";import{Q}from"./QTab.0b5f09bb.js";import{Q as J}from"./QTabs.fd85fc25.js";import{Q as S}from"./QList.f278e53f.js";import{Q as U,a as x}from"./QTabPanels.adfa00d5.js";import{Q as g}from"./QSkeleton.6e239cc5.js";import{Q as z}from"./QBtnToggle.3250107e.js";import{Q as M}from"./QImg.51839b12.js";import{Q as X}from"./QPage.dcf44012.js";import{Q as Y}from"./QFooter.b1186792.js";import{u as G}from"./CartStore.e08e1718.js";import"./QResizeObserver.d4331a6a.js";import"./rtl.276c3f1b.js";import"./use-panel.86a01025.js";import"./touch.9135741d.js";import"./selection.f40087f4.js";import"./use-render-cache.3aae9b27.js";import"./QBtnGroup.0b2a69a0.js";const K={name:"QuickSearchResultsPage",data(){return{tab:"all",q:"",merchant_data:[],cuisine:[],food_list:[],merchant_list:[],money_config:[],loading:!1,awaitingSearch:!1,data_recent:[],search_history:[],all_data:[],slug:"",item_added:!1}},setup(){const t=G(),s=O();return{CartStore:t,DataStorePersisted:s}},components:{SearchListMerchant:v(()=>C(()=>import("./SearchListMerchant.8e50248b.js"),["assets/SearchListMerchant.8e50248b.js","assets/QImg.51839b12.js","assets/index.9793c43f.js","assets/index.661bbb30.css","assets/QChip.82264df0.js","assets/QItemLabel.eca1584d.js"])),SearchListFood:v(()=>C(()=>import("./SearchListFood.1ad5a3f9.js"),["assets/SearchListFood.1ad5a3f9.js","assets/QImg.51839b12.js","assets/index.9793c43f.js","assets/index.661bbb30.css","assets/QChip.82264df0.js","assets/QItemLabel.eca1584d.js"])),ItemDetails:v(()=>C(()=>import("./ItemDetails.b898674e.js"),["assets/ItemDetails.b898674e.js","assets/index.9793c43f.js","assets/index.661bbb30.css","assets/QCircularProgress.c3fbe13d.js","assets/format.8ac60962.js","assets/QImg.51839b12.js","assets/QChip.82264df0.js","assets/QBtnToggle.3250107e.js","assets/QBtnGroup.0b2a69a0.js","assets/QSelect.06fcbf11.js","assets/QItemLabel.eca1584d.js","assets/QMenu.e8b690c9.js","assets/selection.f40087f4.js","assets/rtl.276c3f1b.js","assets/QSpace.04e5e530.js","assets/CartStore.e08e1718.js","assets/FavoriteStore.241a6de6.js","assets/DeliverySched.51e51dc1.js"]))},created(){this.getSearchHistory()},computed:{hasHistory(){return Object.keys(this.data_recent).length>0},hasFilter(){return!u.empty(this.q)},hasResults(){return Object.keys(this.all_data).length>0}},watch:{q(t,s){if(!this.awaitingSearch){if(typeof this.q=="undefined"||this.q===null||this.q===""||this.q==="null"||this.q==="undefined")return!1;setTimeout(()=>{this.saveHistory(),this.tab="all",u.Search(this.q,u.getStorage("place_id"),this.DataStorePersisted.use_currency_code).then(n=>{console.debug(n),this.merchant_data=n.details.merchant_data,this.cuisine=n.details.cuisine,this.food_list=n.details.food_list,this.merchant_list=n.details.merchant_list,this.all_data=this.merchant_data.concat(this.food_list)}).catch(n=>{this.merchant_data=[],this.cuisine=[],this.food_list=[],this.merchant_list=[]}).then(n=>{this.awaitingSearch=!1})},1e3)}this.awaitingSearch=!0}},methods:{clearField(){this.q="",this.Focus()},getSearchHistory(){const t=u.getStorage("search_history");if(!u.empty(t)){let s=JSON.parse(t);Object.keys(s).length>0&&(this.data_recent=[],Object.entries(s).forEach(([n,c])=>{this.data_recent.push({label:c,value:c})}))}},saveHistory(){console.log("saveHistory");const t=u.getStorage("search_history");let s=[],n=0;u.empty(t)?(s.push(this.q),u.setStorage("search_history",JSON.stringify(s))):(s=JSON.parse(t),n=s.length,console.log(s),n>4&&s.splice(0,1),s.includes(this.q)||(s.push(this.q),u.setStorage("search_history",JSON.stringify(s))),this.getSearchHistory())},removeHistory(){this.data_recent=[],u.setStorage("search_history",JSON.stringify(this.data_recent))},onClickResult(t){if(t.restaurant_name)this.$router.push({name:"menu",params:{slug:t.restaurant_slug}});else{this.item_added=!1,this.slug=t.slug;const s={cat_id:t.cat_id,item_uuid:t.item_uuid};this.money_config=t.money_config,this.$refs.refItem.showItem2(s,this.slug)}},afterAdditems(){console.log("afterAdditems"),this.item_added=!0,this.CartStore.getCart(!1,this.CartStore.cart_payload)}}},W={class:"q-pl-md q-pr-md"},Z={key:0,class:"min-height-inherit flex flex-center"},$={class:"full-width text-center q-pb-xl"},ee={class:"text-h5 text-weight-bold"},te={class:"text-grey font12"},se={key:1,class:"q-pl-md q-pr-md"},ae={class:"row item-center justify-between"},re={class:"font13 text-weight-bold text-h5"},oe={key:0},le={class:"flex flex-center",style:{"min-height":"300px"}},ie={class:"full-width text-center"},ne={class:"text-h5 text-weight-bold"},ce={class:"text-grey font12"},de={class:"row items-center justify-between fit"},ue={class:"text-weight-bold"},he={class:"text-weight-bold"};function me(t,s,n,c,a,d){const A=p("NotiButton"),V=p("SearchListMerchant"),R=p("SearchListFood"),T=p("ItemDetails");return l(),h(f,null,[e(E,{reveal:"","reveal-offset":"50",class:"bg-transparent text-dark"},{default:r(()=>[e(B,null,{default:r(()=>[e(y,{to:"/home",flat:"",round:"",dense:"",icon:"las la-angle-left",class:"q-mr-sm",color:t.$q.dark.mode?"white":"dark"},null,8,["color"]),e(L,{class:q(["text-weight-bold",{"text-white":t.$q.dark.mode,"text-dark":!t.$q.dark.mode}])},{default:r(()=>[D(_(t.$t("Search")),1)]),_:1},8,["class"]),e(A)]),_:1})]),_:1}),e(X,null,{default:r(()=>[i("div",W,[e(H,{modelValue:a.q,"onUpdate:modelValue":s[1]||(s[1]=o=>a.q=o),label:t.$t("Search food and restaurants"),outlined:"","lazy-rules":"","bg-color":t.$q.dark.mode?"grey600":"input","label-color":t.$q.dark.mode?"grey300":"grey",borderless:"",class:"input-borderless"},{prepend:r(()=>[e(P,{name:"eva-search-outline",size:"sm"})]),append:r(()=>[d.hasFilter?(l(),m(P,{key:0,class:"cursor-pointer",name:"close",color:"grey",onClick:s[0]||(s[0]=o=>this.q="")})):w("",!0)]),_:1},8,["modelValue","label","bg-color","label-color"])]),e(j,{class:"q-pa-xs"}),d.hasResults&&d.hasFilter&&!a.awaitingSearch?(l(),h(f,{key:0},[e(J,{modelValue:a.tab,"onUpdate:modelValue":s[2]||(s[2]=o=>a.tab=o),dense:"","active-color":"red","indicator-color":"white",align:"justify","narrow-indicator":"",shrink:"","switch-indicator":"false",class:"text-grey"},{default:r(()=>[e(Q,{name:"all","no-caps":"",class:"no-wrap q-pa-none"},{default:r(()=>[e(y,{label:t.$t("All"),unelevated:"","no-caps":"",color:a.tab=="all"?"primary":"mygrey","text-color":a.tab=="all"?"white":"dark",class:"radius28"},null,8,["label","color","text-color"])]),_:1}),e(Q,{name:"restaurant","no-caps":"",class:"q-pa-none"},{default:r(()=>[e(y,{label:t.$t("Restaurants"),unelevated:"","no-caps":"",color:a.tab=="restaurant"?"primary":"mygrey","text-color":a.tab=="restaurant"?"white":"dark",class:"radius28"},null,8,["label","color","text-color"])]),_:1}),e(Q,{name:"food","no-caps":"",class:"q-pa-none"},{default:r(()=>[e(y,{label:t.$t("Food"),unelevated:"","no-caps":"",color:a.tab=="food"?"primary":"mygrey","text-color":a.tab=="food"?"white":"dark",class:"radius28"},null,8,["label","color","text-color"])]),_:1})]),_:1},8,["modelValue"]),e(U,{modelValue:a.tab,"onUpdate:modelValue":s[3]||(s[3]=o=>a.tab=o),animated:"","transition-next":"fade","transition-prev":"fade",class:q({"bg-mydark ":t.$q.dark.mode,"bg-white ":!t.$q.dark.mode})},{default:r(()=>[e(x,{name:"all",class:"q-pa-none"},{default:r(()=>[e(S,{separator:""},{default:r(()=>[(l(!0),h(f,null,b(a.all_data,o=>(l(),m(k,{key:o,onClick:I=>d.onClickResult(o),clickable:""},{default:r(()=>[o.restaurant_name?(l(),m(V,{key:0,items:o,cuisine:a.cuisine},null,8,["items","cuisine"])):(l(),m(R,{key:1,items:o,merchant_list:a.merchant_list,money_config:a.money_config},null,8,["items","merchant_list","money_config"]))]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1}),e(x,{name:"restaurant",class:"q-pa-none"},{default:r(()=>[e(S,{separator:""},{default:r(()=>[(l(!0),h(f,null,b(a.merchant_data,o=>(l(),m(k,{key:o,onClick:I=>d.onClickResult(o),clickable:""},{default:r(()=>[e(V,{items:o,cuisine:a.cuisine},null,8,["items","cuisine"])]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1}),e(x,{name:"food",class:"q-pa-none"},{default:r(()=>[e(S,{separator:""},{default:r(()=>[(l(!0),h(f,null,b(a.food_list,o=>(l(),m(k,{key:o,onClick:I=>d.onClickResult(o),clickable:""},{default:r(()=>[e(R,{items:o,merchant_list:a.merchant_list,money_config:a.money_config},null,8,["items","merchant_list","money_config"])]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})]),_:1},8,["modelValue","class"])],64)):d.hasFilter&&a.awaitingSearch?(l(),m(S,{key:1},{default:r(()=>[(l(),h(f,null,b(8,o=>e(k,{key:o},{default:r(()=>[e(F,{avatar:""},{default:r(()=>[e(g,{width:"80px",height:"80px"})]),_:1}),e(F,null,{default:r(()=>[e(g,{type:"text"}),e(g,{type:"text",class:"w-50"}),e(g,{type:"text",class:"w-70"}),e(g,{type:"text",class:"w-25"})]),_:1})]),_:2},1024)),64))]),_:1})):(l(),h(f,{key:2},[d.hasFilter&&!a.awaitingSearch?(l(),h("div",Z,[i("div",$,[i("div",ee,_(t.$t("No Restaurants found"))+". ",1),i("p",te,_(t.$t("Sorry, we couldn't find any results")),1)])])):(l(),h("div",se,[i("div",ae,[i("div",re,_(t.$t("Recently Search")),1),d.hasHistory?(l(),h("div",oe,[e(y,{onClick:d.removeHistory,round:"",color:"grey",icon:"las la-times",size:"xs",flat:""},null,8,["onClick"])])):w("",!0)]),e(z,{modelValue:a.search_history,"onUpdate:modelValue":s[4]||(s[4]=o=>a.search_history=o),"toggle-color":"secondary",color:t.$q.dark.mode?"grey600":"mygrey","text-color":t.$q.dark.mode?"grey300":"dark","no-caps":"","no-wrap":"",unelevated:"",class:"rounded-group2 text-weight-bold line-1",options:a.data_recent,onClick:s[5]||(s[5]=o=>this.q=this.search_history)},null,8,["modelValue","color","text-color","options"]),i("div",le,[i("div",ie,[e(M,{src:"cuttery.png",fit:"fill","spinner-color":"primary",style:{height:"150px","max-width":"130px"}}),i("div",ne,_(t.$t("Search Restaurants")),1),i("p",ce,_(t.$t("Search your favourite cuisine and restaurants")),1)])])]))],64)),e(T,{ref:"refItem",slug:a.slug,money_config:a.money_config,onAfterAdditems:d.afterAdditems,currency_code:c.DataStorePersisted.getUseCurrency()},null,8,["slug","money_config","onAfterAdditems","currency_code"])]),_:1}),c.CartStore.items_count>0&&a.item_added==!0?(l(),m(Y,{key:0,reveal:"",class:q(["q-pl-md q-pr-md q-pb-sm q-pt-sm text-dark",{"bg-primary":!c.CartStore.cart_reloading,"bg-grey-5":c.CartStore.cart_reloading}])},{default:r(()=>[e(y,{to:"/checkout",loading:c.CartStore.cart_loading,disable:!c.CartStore.canProceed,unelevated:"","text-color":"white","no-caps":"",class:"radius10 fit",color:{primary:!c.CartStore.cart_reloading,"grey-5":c.CartStore.cart_reloading}},{default:r(()=>[i("div",de,[i("div",ue,_(t.$t("Checkout")),1),i("div",he,_(c.CartStore.cart_subtotal.value),1)])]),_:1},8,["loading","disable","color"])]),_:1},8,["class"])):w("",!0)],64)}var Oe=N(K,[["render",me]]);export{Oe as default};
