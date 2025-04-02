import{_ as B,Q as q,m as v,p as r,U as n,f as e,s as t,aA as w,F as d,a6 as x,X as b,a5 as f,Y as c,S as m,q as h,as as V,V as k,az as _,a7 as L,a8 as P,aX as C,ab as D,ad as I,ac as y,b3 as T,b1 as z}from"./index.9793c43f.js";import{Q as N}from"./QToolbarTitle.1f40af49.js";import{Q as A}from"./QToolbar.76ca8ca1.js";import{Q as U}from"./QHeader.3cfb9d75.js";import{Q}from"./QSkeleton.6e239cc5.js";import{Q as j}from"./QTab.0b5f09bb.js";import{Q as F}from"./QTabs.fd85fc25.js";import{Q as R}from"./QSpace.04e5e530.js";import{Q as X}from"./QImg.51839b12.js";import{Q as S}from"./QItemLabel.eca1584d.js";import{Q as E}from"./QBadge.eeb30d54.js";import{Q as H}from"./QList.f278e53f.js";import{Q as O}from"./QInnerLoading.9a29075c.js";import{Q as Y}from"./QSpinnerDots.8746a9b0.js";import{Q as G}from"./QInfiniteScroll.9b6066b1.js";import{Q as J}from"./QPageScroller.cd4aef7d.js";import{Q as K}from"./QPage.dcf44012.js";import{Q as M}from"./QPullToRefresh.3943d5c2.js";import{Q as W}from"./QForm.8fa69288.js";/* empty css                   */import{u as Z}from"./BookingStore.abc5cd5b.js";import"./QResizeObserver.d4331a6a.js";import"./rtl.276c3f1b.js";import"./use-page-sticky.5f656191.js";import"./touch.9135741d.js";import"./selection.f40087f4.js";import"./format.8ac60962.js";const $={name:"BookingList",setup(){const o=q(),s=Z();return{DataStore:o,BookingStore:s}},data(){return{dialog:!1,loading:!1,status:[],tabs:"all",data:[],merchant:[],table_list:[],page:0,is_refresh:void 0,q:""}},created(){this.BookingStore.getBookingSummary()},watch:{tabs(o,s){console.log(o),this.resetPage()}},computed:{hasData(){return Object.keys(this.data).length>0}},methods:{refresh(o){this.resetPage(),this.is_refresh=o},resetPage(){this.resetPagination()},resetPagination(){this.page=0,this.data=[],this.merchant=[],this.table_list=[],this.$refs.nscroll.reset(),this.$refs.nscroll.resume(),this.$refs.nscroll.trigger()},BookingList(o,s){this.loading=!0,this.page=o,v.fetchDataPostTable2("BookingList","page="+o+"&status="+this.tabs).then(u=>{u.code==1?(this.data.push(u.details.data),this.merchant=u.details.merchant,this.table_list=u.details.table_list):this.$refs.nscroll.stop()}).catch(u=>{this.$refs.nscroll&&this.$refs.nscroll.stop()}).then(u=>{this.loading=!1,s(),v.empty(this.is_refresh)||this.is_refresh()})},onSubmit(){this.$router.push({path:"/booking/search",query:{q:this.q}})}}},ee={class:"q-pa-md bg-grey-1 q-mb-sm radius8"},te={class:"row items-center q-gutter-md"},oe={class:"col"},re={class:"no-margin"},ae=f("0"),se={class:"font12 no-margin"},le={class:"border-dark-grey radius28"},ie={key:0,class:"flex flex-center",style:{"min-height":"300px"}},ne={class:"text-grey"},de={key:0,class:"q-pa-xl"},me={key:1,class:"row justify-center absolute-bottom"};function ue(o,s,u,g,a,p){return r(),n(d,null,[e(M,{onRefresh:p.refresh},{default:t(()=>[e(U,{reveal:"","reveal-offset":"50",class:x({"bg-mydark text-white":o.$q.dark.mode,"bg-white text-dark":!o.$q.dark.mode})},{default:t(()=>[e(A,null,{default:t(()=>[e(b,{onClick:s[0]||(s[0]=l=>o.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",class:"q-mr-sm",color:o.$q.dark.mode?"white":"dark"},null,8,["color"]),e(N,{class:"text-weight-bold"},{default:t(()=>[f(c(o.$t("Bookings")),1)]),_:1}),e(b,{flat:"",round:"",dense:"",icon:"search",color:"grey",onClick:s[1]||(s[1]=l=>a.dialog=!a.dialog)})]),_:1})]),_:1},8,["class"]),e(K,{class:"q-pl-md q-pr-md"},{default:t(()=>[m("div",ee,[m("div",te,[m("div",null,[g.BookingStore.summary_loading?(r(),h(Q,{key:0,type:"QAvatar"})):(r(),h(V,{key:1,color:"grey-4",name:"table_restaurant",style:{"font-size":"60px"}}))]),m("div",oe,[g.BookingStore.summary_loading?(r(),n(d,{key:0},[e(Q,{type:"text",class:"text-subtitle1"}),e(Q,{type:"text",width:"50%",class:"text-subtitle1"})],64)):(r(),n(d,{key:1},[m("h4",re,[g.BookingStore.getSummary.total_reservation?(r(),n(d,{key:0},[f(c(g.BookingStore.getSummary.total_reservation),1)],64)):(r(),n(d,{key:1},[ae],64))]),m("p",se,c(o.$t("Total Bookings")),1)],64))])])]),m("div",le,[e(F,{modelValue:a.tabs,"onUpdate:modelValue":s[2]||(s[2]=l=>a.tabs=l),class:"text-grey bigtabs","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":"","no-caps":""},{default:t(()=>[(r(!0),n(d,null,k(g.DataStore.getBookingStatusList,(l,i)=>(r(),h(j,{key:l,name:i,label:l},null,8,["name","label"]))),128))]),_:1},8,["modelValue"])]),e(R,{class:"q-pa-sm"}),!p.hasData&&!a.loading?(r(),n("div",ie,[m("p",ne,c(o.$t("No data available")),1)])):_("",!0),e(G,{ref:"nscroll",onLoad:p.BookingList,offset:250},{loading:t(()=>[a.page<=1?(r(),n("div",de,[e(O,{showing:!0,color:"primary",size:"md","label-class":"dark",class:"transparent"})])):a.page>2?(r(),n("div",me,[e(Y,{color:"secondary",size:"40px"})])):_("",!0)]),default:t(()=>[e(H,null,{default:t(()=>[(r(!0),n(d,null,k(a.data,l=>(r(),n(d,{key:l},[(r(!0),n(d,null,k(l,i=>(r(),n(d,{key:i.reservation_id},[e(D,{clickable:"",to:{path:"/booking/track",query:{id:i.reservation_uuid}}},{default:t(()=>[a.merchant[i.merchant_id]?(r(),h(y,{key:0,avatar:""},{default:t(()=>[e(I,{square:"",class:"rounded-borders"},{default:t(()=>[e(X,{src:a.merchant[i.merchant_id].url_logo,"spinner-size":"xs","spinner-color":"primary",style:{width:"80px",height:"80px"},fit:"cover"},null,8,["src"])]),_:2},1024)]),_:2},1024)):_("",!0),e(y,null,{default:t(()=>[a.merchant[i.merchant_id]?(r(),h(S,{key:0},{default:t(()=>[f(c(a.merchant[i.merchant_id].restaurant_name),1)]),_:2},1024)):_("",!0),e(S,{caption:""},{default:t(()=>[f(c(i.booking_id),1)]),_:2},1024),e(S,{caption:"",class:"font11"},{default:t(()=>[f(c(i.reservation_date_raw),1)]),_:2},1024)]),_:2},1024),e(y,{side:""},{default:t(()=>[e(E,{rounded:"",label:i.status,style:T({"background-color":`${i.status_color.background}`,color:`${i.status_color.color}`})},null,8,["label","style"])]),_:2},1024)]),_:2},1032,["to"]),e(z,{spaced:"",inset:""})],64))),128))],64))),128))]),_:1})]),_:1},8,["onLoad"]),e(J,{position:"bottom-right","scroll-offset":150,offset:[18,18]},{default:t(()=>[e(b,{fab:"",icon:"keyboard_arrow_up",color:"mygrey","text-color":"dark",dense:"",padding:"3px"})]),_:1})]),_:1})]),_:1},8,["onRefresh"]),e(w,{modelValue:a.dialog,"onUpdate:modelValue":s[4]||(s[4]=l=>a.dialog=l),position:"top","full-width":"","transition-show":"fade","transition-hide":"fade"},{default:t(()=>[e(L,null,{default:t(()=>[e(P,null,{default:t(()=>[e(W,{onSubmit:p.onSubmit},{default:t(()=>[e(C,{modelValue:a.q,"onUpdate:modelValue":s[3]||(s[3]=l=>a.q=l),label:o.$t("Search Booking"),outlined:"","lazy-rules":"","bg-color":o.$q.dark.mode?"grey600":"input","label-color":o.$q.dark.mode?"grey300":"grey",borderless:"",class:"input-borderless cursor-pointer"},{append:t(()=>[e(b,{onClick:p.onSubmit,round:"",color:"primary",flat:"",icon:"eva-search-outline"},null,8,["onClick"])]),_:1},8,["modelValue","label","bg-color","label-color"])]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}var je=B($,[["render",ue]]);export{je as default};
