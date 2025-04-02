import{_ as k,l as w,t as q,Q as S,m as i,n as V,p as n,q as p,s as d,f as a,S as l,a9 as z,X as u,a6 as g,a5 as C,Y as _,az as b,aX as h,U as A,F as Q,a7 as j,aA as D}from"./index.9793c43f.js";import{Q as F}from"./QToolbarTitle.1f40af49.js";import{Q as M}from"./QToolbar.76ca8ca1.js";import{Q as y}from"./QSpace.04e5e530.js";import{Q as B}from"./QSelect.06fcbf11.js";import{Q as U}from"./QBtnToggle.3250107e.js";import{Q as v}from"./QFooter.b1186792.js";import{Q as T}from"./QForm.8fa69288.js";import{C as E}from"./ClosePopup.eb5e6d7f.js";import{u as I}from"./MapStore.1c05069d.js";import"./QChip.82264df0.js";import"./QItemLabel.eca1584d.js";import"./QMenu.e8b690c9.js";import"./selection.f40087f4.js";import"./rtl.276c3f1b.js";import"./format.8ac60962.js";import"./QBtnGroup.0b2a69a0.js";import"./QResizeObserver.d4331a6a.js";const O={name:"AddressDetails",props:["maps_config"],components:{MapsComponents:w(()=>q(()=>import("./MapsComponents.ea5bb363.js"),["assets/MapsComponents.ea5bb363.js","assets/index.9793c43f.js","assets/index.661bbb30.css","assets/index.4f152a18.js"]))},setup(){const e=I(),o=S();return{MapStore:e,DataStore:o}},data(){return{show_modal:!1,loading:!1,location_data:[],location_name:"",delivery_options:"",delivery_instructions:"",address_label:"Home",attributes:[],delivery_options_data:[],address_label_data:[],address1:"",formatted_address:"",adjust_pin:!1,class_map:"map bg-grey-2 rounded-10 q-mb-md",marker:[],validat_coord:!1,new_lat:"",new_lng:"",center:[],marker_position:[],icon:{text:"\uEA44",fontFamily:"Material Icons",color:"#ffffff",fontSize:"18px"},circles:{}}},mounted(){this.addressAtttibues()},watch:{adjust_pin(e,o){e?(this.class_map="window-height full-width",this.marker_position[0].draggable=!0):(this.class_map="map bg-grey-2 rounded-10 q-mb-md",this.marker_position[0].draggable=!1)}},methods:{beforeShow(){this.adjust_pin=!1},showModal(){this.show_modal=!0,this.marker_position=[{id:0,lat:parseFloat(this.location_data.latitude),lng:parseFloat(this.location_data.longitude),label:i.getIcon("customer"),icon:null,draggable:!1}],this.center={lat:parseFloat(this.location_data.latitude),lng:parseFloat(this.location_data.longitude)},this.new_lat=parseFloat(this.location_data.latitude),this.new_lng=parseFloat(this.location_data.longitude),this.location_data.attributes&&(this.address1=this.location_data.address.address1,this.formatted_address=this.location_data.address.formatted_address,this.location_name=this.location_data.attributes.location_name,this.delivery_options=this.location_data.attributes.delivery_options,this.delivery_instructions=this.location_data.attributes.delivery_instructions,this.address_label=this.location_data.attributes.address_label)},closeModal(){this.show_modal=!1,this.adjust_pin=!1},addressAtttibues(){i.addressAtttibues().then(e=>{this.attributes=e.details,Object.keys(e.details.delivery_option).length>0&&Object.entries(e.details.delivery_option).forEach(([o,c])=>{this.delivery_options_data.push({label:c,value:o})}),Object.keys(e.details.address_label).length>0&&Object.entries(e.details.address_label).forEach(([o,c])=>{this.address_label_data.push({label:c,value:o})})}).catch(e=>{i.notify("dark",e,"error",this.$q)}).then(e=>{})},afterSelectmap(e,o){this.new_lat=e,this.new_lng=o},validateCoordinates(){const e={lat:parseFloat(this.location_data.latitude),lng:parseFloat(this.location_data.longitude),new_lat:this.new_lat,new_lng:this.new_lng};this.loading=!0,i.validateCoordinates(e).then(o=>{this.adjust_pin=!1,this.location_data.latitude=this.new_lat,this.location_data.longitude=this.new_lng,this.marker_position[0].lat=this.new_lat,this.marker_position[0].lng=this.new_lng}).catch(o=>{i.notify("dark",o,"error",this.$q)}).then(o=>{this.loading=!1})},onSubmit(){console.debug("onSubmit"),this.loading=!0;const e={address1:this.address1,formatted_address:this.formatted_address,delivery_options:this.delivery_options,location_name:this.location_name,address_label:this.address_label,delivery_instructions:this.delivery_instructions,data:this.location_data};i.saveClientAddress(e).then(o=>{this.closeModal(),i.setStorage("place_id",o.details.place_id),this.$emit("afterSaveaddress")}).catch(o=>{i.notify("dark",o,"error",this.$q)}).then(o=>{this.loading=!1})}}},N={class:"col-12"},P={class:"row items-center items-stretch"},R={class:"col-9"},X={class:"text-weight-bold"},H={class:"cursor-pointer font12 text-grey"},L={class:"col-3"},Y={class:"q-gutter-sm"},G={class:"text-h6"},J={class:"fit relative-position"},K={class:"absolute-top-left full-width text-rightx q-pa-sm",style:{"z-index":"999"}};function W(e,o,c,r,t,m){const f=V("MapsComponents");return n(),p(D,{modelValue:t.show_modal,"onUpdate:modelValue":o[8]||(o[8]=s=>t.show_modal=s),persistent:"",onBeforeShow:m.beforeShow,maximized:!0,"transition-show":"fade","transition-hide":"fade"},{default:d(()=>[a(j,{class:"row items-stretch"},{default:d(()=>[l("div",N,[t.adjust_pin?b("",!0):(n(),p(M,{key:0},{default:d(()=>[z(a(u,{icon:"close",flat:"",round:"",dense:"",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),[[E]]),a(F,{class:g(["text-weight-bold",{"text-white":e.$q.dark.mode,"text-dark":!e.$q.dark.mode}])},{default:d(()=>[C(_(e.$t("Delivery Address")),1)]),_:1},8,["class"])]),_:1})),l("div",{class:g({"q-pl-md q-pr-md":!t.adjust_pin,"fit ":t.adjust_pin})},[t.adjust_pin?(n(),A(Q,{key:1},[l("div",J,[l("div",{class:g(["absolute-top-left full-width z-top",{"bg-dark":e.$q.dark.mode,"bg-white":!e.$q.dark.mode}])},[l("div",K,[a(u,{round:"",dense:"",icon:"close",class:"q-mr-sm",color:e.$q.dark.mode?"white":"dark",unelevated:"",size:"sm",onClick:o[7]||(o[7]=s=>t.adjust_pin=!t.adjust_pin)},null,8,["color"])])],2),r.DataStore.hasMapConfig?(n(),p(f,{key:0,ref:"mapRef",class:"maps",size:"fit",keys:r.DataStore.maps_config.key,provider:r.DataStore.maps_config.provider,zoom:r.DataStore.maps_config.zoom,center:t.center,markers:t.marker_position,onAfterSelectmap:m.afterSelectmap},null,8,["keys","provider","zoom","center","markers","onAfterSelectmap"])):b("",!0)]),a(v,{class:"q-pl-md q-pr-md q-pt-sm q-pb-sm bg-white"},{default:d(()=>[a(u,{label:e.$t("Save"),loading:t.loading,onClick:m.validateCoordinates,unelevated:"","no-caps":"",color:"primary text-white",class:"full-width text-weight-bold",size:"lg"},null,8,["label","loading","onClick"])]),_:1})],64)):(n(),p(T,{key:0,onSubmit:m.onSubmit},{default:d(()=>[r.DataStore.hasMapConfig?(n(),p(f,{key:0,ref:"mapRef",class:"maps",size:"small q-mb-sm radius8",keys:r.DataStore.maps_config.key,provider:r.DataStore.maps_config.provider,zoom:r.DataStore.maps_config.zoom,center:t.center,markers:t.marker_position,onAfterSelectmap:m.afterSelectmap},null,8,["keys","provider","zoom","center","markers","onAfterSelectmap"])):b("",!0),l("div",P,[l("div",R,[l("div",X,_(t.address1),1),l("div",H,_(t.formatted_address),1)]),l("div",L,[a(u,{onClick:o[0]||(o[0]=s=>t.adjust_pin=!t.adjust_pin),unelevated:"",color:e.$q.dark.mode?"grey600":"mygrey","text-color":e.$q.dark.mode?"grey300":"dark",icon:"las la-map-marker","no-caps":"",class:"line-normal fit"},null,8,["color","text-color"])])]),a(y,{class:"q-pa-sm"}),l("div",Y,[a(h,{modelValue:t.address1,"onUpdate:modelValue":o[1]||(o[1]=s=>t.address1=s),label:e.$t("Street name"),outlined:"","lazy-rules":"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",borderless:"",class:"input-borderless"},null,8,["modelValue","label","bg-color","label-color"]),a(h,{modelValue:t.formatted_address,"onUpdate:modelValue":o[2]||(o[2]=s=>t.formatted_address=s),label:e.$t("Street number"),outlined:"","lazy-rules":"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",borderless:"",class:"input-borderless"},null,8,["modelValue","label","bg-color","label-color"]),a(h,{modelValue:t.location_name,"onUpdate:modelValue":o[3]||(o[3]=s=>t.location_name=s),label:e.$t("Aparment, suite or floor"),outlined:"","lazy-rules":"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",borderless:"",class:"input-borderless"},null,8,["modelValue","label","bg-color","label-color"]),a(B,{modelValue:t.delivery_options,"onUpdate:modelValue":o[4]||(o[4]=s=>t.delivery_options=s),options:t.delivery_options_data,"transition-show":"fade","transition-hide":"fade","emit-value":"",outlined:"","lazy-rules":"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",borderless:"",class:"input-borderless"},null,8,["modelValue","options","bg-color","label-color"]),a(h,{modelValue:t.delivery_instructions,"onUpdate:modelValue":o[5]||(o[5]=s=>t.delivery_instructions=s),autogrow:"",label:e.$t("Add delivery instructions"),outlined:"","lazy-rules":"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",borderless:"",class:"input-borderless"},null,8,["modelValue","label","bg-color","label-color"]),l("div",G,_(e.$t("Address label")),1),a(U,{modelValue:t.address_label,"onUpdate:modelValue":o[6]||(o[6]=s=>t.address_label=s),"toggle-color":"secondary",color:e.$q.dark.mode?"grey600":"mygrey","text-color":e.$q.dark.mode?"grey300":"dark","no-caps":"","no-wrap":"",unelevated:"",options:t.address_label_data,class:"rounded-group2 text-weight-bold line-1"},null,8,["modelValue","color","text-color","options"]),a(y,{class:"q-pa-xl"}),a(v,{class:"q-pl-md q-pr-md q-pt-sm q-pb-sm bg-white"},{default:d(()=>[a(u,{type:"submit",loading:t.loading,label:e.$t("Save Address"),unelevated:"","no-caps":"",color:"primary text-white",class:"full-width text-weight-bold",size:"lg"},null,8,["loading","label"])]),_:1})])]),_:1},8,["onSubmit"]))],2)])]),_:1})]),_:1},8,["modelValue","onBeforeShow"])}var he=k(O,[["render",W]]);export{he as default};
