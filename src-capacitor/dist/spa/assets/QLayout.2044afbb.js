import{u as L,i as K,v as w,x as R,c as a,h as r,y as O,g as Q,z as P,B as j,r as u,C as D,D as z,E as g,w as G,a as I,G as M}from"./index.f7d559c9.js";import{Q as U}from"./QScrollObserver.17810f4b.js";import{Q as x}from"./QResizeObserver.fad9f3e9.js";var J=L({name:"QPageContainer",setup(t,{slots:m}){const{proxy:{$q:c}}=Q(),n=K(P,w);if(n===w)return console.error("QPageContainer needs to be child of QLayout"),w;R(j,!0);const d=a(()=>{const i={};return n.header.space===!0&&(i.paddingTop=`${n.header.size}px`),n.right.space===!0&&(i[`padding${c.lang.rtl===!0?"Left":"Right"}`]=`${n.right.size}px`),n.footer.space===!0&&(i.paddingBottom=`${n.footer.size}px`),n.left.space===!0&&(i[`padding${c.lang.rtl===!0?"Right":"Left"}`]=`${n.left.size}px`),i});return()=>r("div",{class:"q-page-container",style:d.value},O(m.default))}}),N=L({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:t=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(t.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(t,{slots:m,emit:c}){const{proxy:{$q:n}}=Q(),d=u(null),i=u(n.screen.height),y=u(t.container===!0?0:n.screen.width),S=u({position:0,direction:"down",inflectionPoint:0}),h=u(0),l=u(D.value===!0?0:z()),q=a(()=>"q-layout q-layout--"+(t.container===!0?"containerized":"standard")),H=a(()=>t.container===!1?{minHeight:n.screen.height+"px"}:null),T=a(()=>l.value!==0?{[n.lang.rtl===!0?"left":"right"]:`${l.value}px`}:null),W=a(()=>l.value!==0?{[n.lang.rtl===!0?"right":"left"]:0,[n.lang.rtl===!0?"left":"right"]:`-${l.value}px`,width:`calc(100% + ${l.value}px)`}:null);function F(e){if(t.container===!0||document.qScrollPrevented!==!0){const o={position:e.position.top,direction:e.direction,directionChanged:e.directionChanged,inflectionPoint:e.inflectionPoint.top,delta:e.delta.top};S.value=o,t.onScroll!==void 0&&c("scroll",o)}}function B(e){const{height:o,width:s}=e;let f=!1;i.value!==o&&(f=!0,i.value=o,t.onScrollHeight!==void 0&&c("scrollHeight",o),b()),y.value!==s&&(f=!0,y.value=s),f===!0&&t.onResize!==void 0&&c("resize",e)}function E({height:e}){h.value!==e&&(h.value=e,b())}function b(){if(t.container===!0){const e=i.value>h.value?z():0;l.value!==e&&(l.value=e)}}let v=null;const $={instances:{},view:a(()=>t.view),isContainer:a(()=>t.container),rootRef:d,height:i,containerHeight:h,scrollbarWidth:l,totalWidth:a(()=>y.value+l.value),rows:a(()=>{const e=t.view.toLowerCase().split(" ");return{top:e[0].split(""),middle:e[1].split(""),bottom:e[2].split("")}}),header:g({size:0,offset:0,space:!1}),right:g({size:300,offset:0,space:!1}),footer:g({size:0,offset:0,space:!1}),left:g({size:300,offset:0,space:!1}),scroll:S,animate(){v!==null?clearTimeout(v):document.body.classList.add("q-body--layout-animate"),v=setTimeout(()=>{v=null,document.body.classList.remove("q-body--layout-animate")},155)},update(e,o,s){$[e][o]=s}};if(R(P,$),z()>0){let s=function(){e=null,o.classList.remove("hide-scrollbar")},f=function(){if(e===null){if(o.scrollHeight>n.screen.height)return;o.classList.add("hide-scrollbar")}else clearTimeout(e);e=setTimeout(s,300)},p=function(C){e!==null&&C==="remove"&&(clearTimeout(e),s()),window[`${C}EventListener`]("resize",f)},e=null;const o=document.body;G(()=>t.container!==!0?"add":"remove",p),t.container!==!0&&p("add"),I(()=>{p("remove")})}return()=>{const e=M(m.default,[r(U,{onScroll:F}),r(x,{onResize:B})]),o=r("div",{class:q.value,style:H.value,ref:t.container===!0?void 0:d,tabindex:-1},e);return t.container===!0?r("div",{class:"q-layout-container overflow-hidden",ref:d},[r(x,{onResize:E}),r("div",{class:"absolute-full",style:T.value},[r("div",{class:"scroll",style:W.value},[o])])]):o}}});export{N as Q,J as a};
