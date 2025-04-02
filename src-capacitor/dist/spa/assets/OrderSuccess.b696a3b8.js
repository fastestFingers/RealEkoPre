import{_ as T,m as b,p as r,q as y,s as l,f as i,X as w,a5 as c,Y as e,a6 as g,U as a,S as s,F as n,az as m,ac as u,V as k,ab as S}from"./index.9793c43f.js";import{Q as z}from"./QToolbarTitle.1f40af49.js";import{Q as B}from"./QToolbar.76ca8ca1.js";import{Q as I}from"./QHeader.3cfb9d75.js";import{Q as O}from"./QInnerLoading.9a29075c.js";import{Q as v}from"./QSpace.04e5e530.js";import{Q as x}from"./QImg.51839b12.js";import{Q as p}from"./QItemLabel.eca1584d.js";import{Q as L}from"./QBadge.eeb30d54.js";import{Q}from"./QList.f278e53f.js";import{Q as V}from"./QExpansionItem.ea62a9a0.js";import{Q as j}from"./QFooter.b1186792.js";import{Q as E}from"./QPage.dcf44012.js";import{Q as N}from"./QPullToRefresh.3943d5c2.js";import"./QResizeObserver.d4331a6a.js";import"./QSlideTransition.8b1c80aa.js";import"./touch.9135741d.js";import"./selection.f40087f4.js";import"./format.8ac60962.js";const R={name:"OrderSuccess",data(){return{order_uuid:"",loading:!0,data:[],order_items:[],order_info:[],merchant:[],estimation:[],charge_type:"",payload:["merchant_info","items","order_info","estimation","charge_type"]}},created(){this.order_uuid=this.$route.query.order_uuid,this.orderDetails()},computed:{hasData(){return Object.keys(this.data).length>0}},methods:{refresh(t){this.orderDetails(t)},orderDetails(t){this.loading=!0,b.fetchDataByToken("orderDetails",{order_uuid:this.order_uuid,payload:this.payload}).then(_=>{this.data=_.details.data,this.order_items=_.details.data.items,this.order_info=_.details.data.order.order_info,this.merchant=_.details.data.merchant,this.estimation=_.details.data.estimation,this.charge_type=_.details.data.charge_type}).catch(_=>{this.order_items=[],this.order_info=[],this.merchant=[],this.estimation=[]}).then(_=>{this.loading=!1,b.empty(t)||t()})},estimatedLabel(t){return t=="pickup"?this.$t("Estimated Pickup Time"):t=="dinein"?this.$t("Estimated Dinein Time"):this.$t("Estimated Delivery Time")}}},P={key:1,class:"text-center full-width"},C={class:"text-h5 text-weight-bold"},F={class:"text-grey font12"},Y={class:"text-center q-mb-md"},A={class:"text-grey text-weight-600"},H=s("div",{class:"border-grey-top"},null,-1),U={class:"text-h5 text-weight-bold"},X={class:"row items-start justify-between"},G={class:"text-grey"},J={class:"text-weight-bold"},K={class:"row items-start justify-between"},M={class:"text-grey"},W={class:"text-weight-bold"},Z={class:"row items-start justify-between"},$={class:"text-grey col-2"},ee={class:"col-8 text-right"},te={class:"row items-start justify-between"},re={class:"text-grey col text-weight-bold"},se={class:"col text-right text-weight-bold"},oe={class:"text-weight-bold"},ie={class:"text-grey font13 q-ml-sm"},ae=c(" )"),de={class:"no-margin"},le={class:"m-0 text-grey"},ne={key:0,class:"no-margin"},ce={key:1,class:"no-margin"},_e={key:2,class:"no-margin"},me=c(", "),he={key:0,class:"no-margin"},ue={key:1,class:"no-margin"};function pe(t,_,fe,ye,o,h){return r(),y(N,{onRefresh:h.refresh},{default:l(()=>[i(I,{reveal:"","reveal-offset":"50",class:g({"bg-mydark text-white":t.$q.dark.mode,"bg-white text-dark":!t.$q.dark.mode})},{default:l(()=>[i(B,null,{default:l(()=>[i(w,{flat:"",round:"",dense:"",icon:"las la-angle-left",class:"q-mr-sm",color:t.$q.dark.mode?"white":"dark",to:"/home",replace:"true"},null,8,["color"]),i(z,{class:"text-weight-bold"},{default:l(()=>[c(e(t.$t("Your Order Successfully"))+"!",1)]),_:1})]),_:1})]),_:1},8,["class"]),i(E,{padding:"",class:g(["q-pl-md q-pr-md",{"flex flex-center":!h.hasData&&!o.loading}])},{default:l(()=>[o.loading?(r(),y(O,{key:0,showing:!0,color:"primary",size:"md","label-class":"dark",class:"transparent"})):!o.loading&&!h.hasData?(r(),a("div",P,[s("div",C,e(t.$t("No results data")),1),s("p",F,e(t.$t("Sorry we cannot find what your looking for.")),1)])):(r(),a(n,{key:2},[s("div",Y,[s("div",A,e(h.estimatedLabel(o.order_info.service_code)),1),s("div",{class:g(["text-weight-bold text-h5",{"text-white":t.$q.dark.mode,"text-dark":!t.$q.dark.mode}])},[o.order_info.whento_deliver=="now"?(r(),a(n,{key:0},[o.estimation[o.order_info.service_code]?(r(),a(n,{key:0},[o.estimation[o.order_info.service_code][o.charge_type]?(r(),a(n,{key:0},[c(e(o.estimation[o.order_info.service_code][o.charge_type].estimation)+" "+e(t.$t("mins")),1)],64)):m("",!0)],64)):m("",!0)],64)):(r(),a(n,{key:1},[c(e(o.order_info.delivery_date)+" "+e(o.order_info.delivery_time),1)],64))],2),i(v,{class:"q-pa-sm"}),i(x,{src:"onboarding-3.png","spinner-color":"primary",style:{"max-width":"100%",height:"150px"},fit:"contain"})]),H,s("div",U,e(t.$t("Order Details")),1),s("div",X,[s("div",G,e(t.$t("Order #")),1),s("div",J,e(o.order_info.order_id),1)]),s("div",K,[s("div",M,e(t.$t("Order from")),1),s("div",W,e(o.merchant.restaurant_name),1)]),s("div",Z,[s("div",$,e(t.$t("Delivery")),1),s("div",ee,e(o.order_info.delivery_address),1)]),s("div",te,[s("div",re,e(t.$t("Total")),1),s("div",se,e(o.order_info.total_from_used_currency_to_based_currency_pretty),1)]),i(v,{class:"q-pa-sm"}),i(Q,{class:"qlist-no-padding border-grey-top border-bottom q-mb-md"},{default:l(()=>[i(V,{"expand-separator":""},{header:l(()=>[i(u,null,{default:l(()=>[i(p,null,{default:l(()=>[s("span",oe,e(t.$t("View Details")),1),s("span",ie,[c("("+e(o.order_items.length)+" ",1),o.order_items.length>2?(r(),a(n,{key:0},[c(e(t.$t("items")),1)],64)):(r(),a(n,{key:1},[c(e(t.$t("item")),1)],64)),ae])]),_:1})]),_:1})]),default:l(()=>[i(Q,null,{default:l(()=>[(r(!0),a(n,null,k(o.order_items,d=>(r(),y(S,{key:d},{default:l(()=>[i(u,{avatar:"",top:""},{default:l(()=>[i(x,{src:d.url_image,lazy:"",fit:"cover",style:{height:"50px",width:"50px"},class:"rounded-borders"},null,8,["src"])]),_:2},1024),i(u,null,{default:l(()=>[i(p,{class:"text-weight-bold q-mb-xs font12"},{default:l(()=>[s("p",de,[c(e(d.qty)+" x "+e(d.item_name)+" ",1),d.price.size_name!=""?(r(),a(n,{key:0},[c(" ("+e(d.price.size_name)+") ",1)],64)):m("",!0),d.item_changes=="replacement"?(r(),a(n,{key:1},[s("div",le,e(t.$t("Replace"))+' "'+e(d.item_name_replace)+'" ',1),i(L,{color:"primary","text-color":"white",label:"Replacement"})],64)):m("",!0)])]),_:2},1024),i(p,{caption:"",class:"text-weight-medium font12"},{default:l(()=>[d.price.discount>0?(r(),a("p",ne,[s("del",null,e(d.price.pretty_price),1),c(" "+e(d.price.pretty_price_after_discount),1)])):(r(),a("p",ce,e(d.price.pretty_price),1)),d.special_instructions!=""?(r(),a("p",_e,e(d.special_instructions),1)):m("",!0),d.attributes!=""?(r(!0),a(n,{key:3},k(d.attributes,f=>(r(),a("p",{key:f,class:"no-margin"},[(r(!0),a(n,null,k(f,(q,D)=>(r(),a(n,null,[c(e(q),1),D<f.length-1?(r(),a(n,{key:0},[me],64)):m("",!0)],64))),256))]))),128)):m("",!0)]),_:2},1024)]),_:2},1024),i(u,{side:"",top:""},{default:l(()=>[i(p,{caption:"",class:"text-weight-bold font12"},{default:l(()=>[d.price.discount<=0?(r(),a("p",he,e(d.price.pretty_total),1)):(r(),a("p",ue,e(d.price.pretty_total_after_discount),1))]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),i(j,{reveal:"",class:"q-pl-md q-pr-md q-pb-sm q-pt-sm text-dark bg-white"},{default:l(()=>[i(w,{unelevated:"","no-caps":"",size:"lg",label:t.$t("Track your order"),color:"primary","text-color":"white",class:"full-width",to:{path:"/account/trackorder",query:{order_uuid:o.order_info.order_uuid}}},null,8,["label","to"])]),_:1})],64))]),_:1},8,["class"])]),_:1},8,["onRefresh"])}var Ne=T(R,[["render",pe]]);export{Ne as default};
