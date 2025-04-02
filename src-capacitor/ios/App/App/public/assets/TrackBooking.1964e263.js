import{_ as Q,l as R,m as C,n as w,p as l,q as g,s as o,f as e,X as f,a5 as n,Y as r,U as p,az as m,F as q,a6 as u,S as c,ab as d,ac as s,ad as D,t as T}from"./index.9793c43f.js";import{Q as I}from"./QToolbarTitle.1f40af49.js";import{Q as V}from"./QToolbar.76ca8ca1.js";import{Q as E}from"./QHeader.3cfb9d75.js";import{a as A,Q as S}from"./QStepper.98b29836.js";import{Q as _}from"./QSpace.04e5e530.js";import{Q as L}from"./QImg.51839b12.js";import{Q as i}from"./QItemLabel.eca1584d.js";import{Q as y}from"./QList.f278e53f.js";import{Q as N}from"./QFooter.b1186792.js";import{Q as P}from"./QInnerLoading.9a29075c.js";import{Q as z}from"./QPage.dcf44012.js";import{Q as F}from"./QPullToRefresh.3943d5c2.js";import{u as U}from"./BookingStore.abc5cd5b.js";import"./QResizeObserver.d4331a6a.js";import"./QSlideTransition.8b1c80aa.js";import"./use-panel.86a01025.js";import"./touch.9135741d.js";import"./selection.f40087f4.js";import"./use-render-cache.3aae9b27.js";import"./format.8ac60962.js";const Y={name:"TrackBooking",components:{ComponentsRealtime:R(()=>T(()=>import("./ComponentsRealtime.8bb7297a.js"),["assets/ComponentsRealtime.8bb7297a.js","assets/index.4f152a18.js","assets/index.9793c43f.js","assets/index.661bbb30.css"]))},data(){return{reservation_uuid:"",steps:1,slug:""}},setup(){return{BookingStore:U()}},created(){this.reservation_uuid=this.$route.query.id,this.slug=this.$route.query.slug,this.BookingDetails()},computed:{hasSlug(){return!C.empty(this.slug)}},methods:{refresh(a){this.BookingStore.getBookingDetails(this.reservation_uuid,a)},BookingDetails(){this.BookingStore.getBookingDetails(this.reservation_uuid,null)},afterReceive(a){a.notification_type=="booking"&&this.BookingDetails()}}},G={key:0},H={key:0,class:"text-center"},M={class:"q-pa-sm radius10"};function O(a,k,X,t,v,B){const b=w("ComponentsRealtime");return l(),g(F,{onRefresh:B.refresh},{default:o(()=>[e(E,{reveal:"","reveal-offset":"10",class:u({"bg-mydark text-white":a.$q.dark.mode,"bg-white text-black":!a.$q.dark.mode})},{default:o(()=>[e(V,null,{default:o(()=>[B.hasSlug?(l(),g(f,{key:0,to:{name:"menu",params:{slug:this.slug}},flat:"",round:"",dense:"",icon:"las la-angle-left",class:"q-mr-sm",color:a.$q.dark.mode?"white":"dark"},null,8,["to","color"])):(l(),g(f,{key:1,onClick:k[0]||(k[0]=h=>a.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",class:"q-mr-sm",color:a.$q.dark.mode?"white":"dark"},null,8,["color"])),e(I,{class:"text-weight-bold"},{default:o(()=>[n(r(a.$t("Track Booking")),1)]),_:1}),t.BookingStore.hasBookingData?(l(),p(q,{key:2},[t.BookingStore.CanCancelReservation?(l(),g(f,{key:0,dense:"",flat:"",unelevated:"",color:"red-5",round:"",icon:"las la-trash",class:"q-ml-md",to:{path:"/booking/cancel",query:{id:this.reservation_uuid}}},null,8,["to"])):m("",!0)],64)):m("",!0)]),_:1})]),_:1},8,["class"]),e(z,{class:u(["q-pl-md q-pr-md",{"flex flex-center":t.BookingStore.getErrors}])},{default:o(()=>[t.BookingStore.getErrors?(l(),p("div",G,r(t.BookingStore.getErrors),1)):m("",!0),t.BookingStore.hasBookingData?(l(),p(q,{key:1},[c("div",{class:u(["q-pa-sm bg-mygreyx radius10",{"bg-grey600 ":a.$q.dark.mode,"bg-mygrey ":!a.$q.dark.mode}])},[e(A,{modelValue:v.steps,"onUpdate:modelValue":k[1]||(k[1]=h=>v.steps=h),ref:"stepper",contracted:"",animated:"",flat:"",class:"bg-transparent","done-color":"primary","active-color":"primary","inactive-color":a.$q.dark.mode?"grey300":"white"},{default:o(()=>[e(S,{name:1,icon:"pending_actions","active-icon":"pending_actions","done-icon":"pending_actions","done-color":"green",color:"grey300",done:t.BookingStore.getBookingStatusSteps>=1||t.BookingStore.getBookingStatusSteps<=0},null,8,["done"]),e(S,{name:2,icon:"restaurant","active-icon":"restaurant","done-icon":"restaurant","done-color":t.BookingStore.getBookingStatusSteps>=2?"primary":"red",color:"grey300",done:t.BookingStore.getBookingStatusSteps>=2||t.BookingStore.getBookingStatusSteps<=0},null,8,["done-color","done"]),e(S,{name:3,icon:"flag","active-icon":"flag","done-icon":"flag","done-color":t.BookingStore.getBookingStatusSteps>=3?"primary":"red",color:"grey300",done:t.BookingStore.getBookingStatusSteps>=3||t.BookingStore.getBookingStatusSteps<=0},null,8,["done-color","done"])]),_:1},8,["modelValue","inactive-color"])],2),t.BookingStore.getBookingStatusSteps<=0?(l(),p("div",H,[c("div",{class:u(["q-pa-sm",t.BookingStore.bookingStatusColor])},r(t.BookingStore.booking_data.data.status_pretty),3)])):(l(),g(_,{key:1,class:"q-pa-sm"})),e(y,null,{default:o(()=>[e(d,null,{default:o(()=>[e(s,{avatar:""},{default:o(()=>[e(D,{rounded:""},{default:o(()=>[e(L,{src:t.BookingStore.getBooking.merchant.logo,"spinner-size":"xs","spinner-color":"primary",style:{width:"80px",height:"80px"},fit:"cover"},null,8,["src"])]),_:1})]),_:1}),e(s,{top:""},{default:o(()=>[e(i,null,{default:o(()=>[n(r(t.BookingStore.getBooking.merchant.restaurant_name),1)]),_:1}),e(i,{caption:""},{default:o(()=>[n(r(t.BookingStore.getBooking.merchant.address),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(_,{class:"q-pa-sm"}),c("div",M,[c("div",{class:u(["text-weight-medium font15 q-pa-sm bg-mygreyx radius10",{"bg-grey600 ":a.$q.dark.mode,"bg-mygrey ":!a.$q.dark.mode}])},r(a.$t("Reservation details")),3),e(y,{separator:""},{default:o(()=>[e(d,{class:"q-pa-none"},{default:o(()=>[e(s,null,{default:o(()=>[e(i,null,{default:o(()=>[n(r(a.$t("Reservation ID")),1)]),_:1}),e(i,{caption:""},{default:o(()=>[n(r(t.BookingStore.getBooking.data.reservation_id),1)]),_:1})]),_:1})]),_:1}),e(d,{class:"q-pa-none"},{default:o(()=>[e(s,null,{default:o(()=>[e(i,null,{default:o(()=>[n(r(a.$t("Guest")),1)]),_:1}),e(i,{caption:""},{default:o(()=>[n(r(t.BookingStore.getBooking.data.guest_number),1)]),_:1})]),_:1})]),_:1}),e(d,{class:"q-pa-none"},{default:o(()=>[e(s,null,{default:o(()=>[e(i,null,{default:o(()=>[n(r(a.$t("Date"))+" :",1)]),_:1}),e(i,{caption:""},{default:o(()=>[n(r(t.BookingStore.getBooking.data.reservation_date),1)]),_:1})]),_:1})]),_:1}),e(d,{class:"q-pa-none"},{default:o(()=>[e(s,null,{default:o(()=>[e(i,null,{default:o(()=>[n(r(a.$t("Time")),1)]),_:1}),e(i,{caption:""},{default:o(()=>[n(r(t.BookingStore.getBooking.data.reservation_time),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(_,{class:"q-pa-sm"}),c("div",{class:u(["text-weight-medium font15 q-pa-sm bg-mygreyx radius10",{"bg-grey600 ":a.$q.dark.mode,"bg-mygrey ":!a.$q.dark.mode}])},r(a.$t("Your Details")),3),e(y,{separator:""},{default:o(()=>[e(d,{class:"q-pa-none"},{default:o(()=>[e(s,null,{default:o(()=>[e(i,null,{default:o(()=>[n(r(a.$t("Name")),1)]),_:1}),e(i,{caption:""},{default:o(()=>[n(r(t.BookingStore.getBooking.data.full_name),1)]),_:1})]),_:1})]),_:1}),e(d,{class:"q-pa-none"},{default:o(()=>[e(s,null,{default:o(()=>[e(i,null,{default:o(()=>[n(r(a.$t("Email address")),1)]),_:1}),e(i,{caption:""},{default:o(()=>[n(r(t.BookingStore.getBooking.data.email_address),1)]),_:1})]),_:1})]),_:1}),e(d,{class:"q-pa-none"},{default:o(()=>[e(s,null,{default:o(()=>[e(i,null,{default:o(()=>[n(r(a.$t("Contact number")),1)]),_:1}),e(i,{caption:""},{default:o(()=>[n(r(t.BookingStore.getBooking.data.contact_phone),1)]),_:1})]),_:1})]),_:1}),e(d,{class:"q-pa-none"},{default:o(()=>[e(s,null,{default:o(()=>[e(i,null,{default:o(()=>[n(r(a.$t("Special request")),1)]),_:1}),e(i,{caption:""},{default:o(()=>[n(r(t.BookingStore.getBooking.data.special_request),1)]),_:1})]),_:1})]),_:1})]),_:1})]),t.BookingStore.CanCancelReservation?(l(),g(N,{key:2,reveal:"",class:u(["bg-primary text-dark",{"bg-mydark ":a.$q.dark.mode,"bg-white ":!a.$q.dark.mode}])},{default:o(()=>[e(f,{unelevated:"",color:"primary",label:a.$t("Modify Reservation"),class:"radius20 fit","no-caps":"",size:"lg",to:{path:"/booking/update",query:{id:this.reservation_uuid}}},null,8,["label","to"])]),_:1},8,["class"])):m("",!0)],64)):m("",!0),t.BookingStore.isLoading?(l(),g(P,{key:2,showing:!0,color:a.$q.dark.mode?"grey300":"primary"},null,8,["color"])):m("",!0),e(b,{ref:"realtime",getevent:"notification_event",onAfterReceive:B.afterReceive},null,8,["onAfterReceive"])]),_:1},8,["class"])]),_:1},8,["onRefresh"])}var ke=Q(Y,[["render",O]]);export{ke as default};
