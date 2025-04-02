import{u as ct,bh as $e,bi as dt,bj as ft,bk as vt,K as Et,r as E,c as g,w as me,P as G,aM as _t,bl as Ht,aI as Tt,aH as Bt,J as mt,h as w,g as St,a_ as Rt,bm as Lt,bn as ot,aT as pe,a3 as Dt,a2 as Pt,an as Pe,as as Nt,bo as Kt,ao as fe,aD as $t,aS as Qt,ar as ve,aA as jt,ac as Ut,ab as Wt,G as Xt}from"./index.f7d559c9.js";import{Q as Yt}from"./QChip.75be2f9e.js";import{Q as Gt}from"./QItemLabel.4e494c2c.js";import{Q as Jt}from"./QMenu.3887798d.js";import{r as Ke}from"./rtl.0d66ec23.js";import{n as at}from"./format.68d15b11.js";var Zt=ct({name:"QField",inheritAttrs:!1,props:{...$e,tag:{type:String,default:"label"}},emits:dt,setup(){return ft(vt({tagProp:!0}))}});const K=1e3,el=["start","center","end","start-force","center-force","end-force"],gt=Array.prototype.filter,tl=window.getComputedStyle(document.body).overflowAnchor===void 0?Et:function(e,c){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const i=e.children||[];gt.call(i,q=>q.dataset&&q.dataset.qVsAnchor!==void 0).forEach(q=>{delete q.dataset.qVsAnchor});const b=i[c];b&&b.dataset&&(b.dataset.qVsAnchor="")}))};function Se(e,c){return e+c}function Ne(e,c,i,b,q,a,_,h){const m=e===window?document.scrollingElement||document.documentElement:e,H=q===!0?"offsetWidth":"offsetHeight",r={scrollStart:0,scrollViewSize:-_-h,scrollMaxSize:0,offsetStart:-_,offsetEnd:-h};if(q===!0?(e===window?(r.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,r.scrollViewSize+=document.documentElement.clientWidth):(r.scrollStart=m.scrollLeft,r.scrollViewSize+=m.clientWidth),r.scrollMaxSize=m.scrollWidth,a===!0&&(r.scrollStart=(Ke===!0?r.scrollMaxSize-r.scrollViewSize:0)-r.scrollStart)):(e===window?(r.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,r.scrollViewSize+=document.documentElement.clientHeight):(r.scrollStart=m.scrollTop,r.scrollViewSize+=m.clientHeight),r.scrollMaxSize=m.scrollHeight),i!==null)for(let y=i.previousElementSibling;y!==null;y=y.previousElementSibling)y.classList.contains("q-virtual-scroll--skip")===!1&&(r.offsetStart+=y[H]);if(b!==null)for(let y=b.nextElementSibling;y!==null;y=y.nextElementSibling)y.classList.contains("q-virtual-scroll--skip")===!1&&(r.offsetEnd+=y[H]);if(c!==e){const y=m.getBoundingClientRect(),V=c.getBoundingClientRect();q===!0?(r.offsetStart+=V.left-y.left,r.offsetEnd-=V.width):(r.offsetStart+=V.top-y.top,r.offsetEnd-=V.height),e!==window&&(r.offsetStart+=r.scrollStart),r.offsetEnd+=r.scrollMaxSize-r.offsetStart}return r}function it(e,c,i,b){c==="end"&&(c=(e===window?document.body:e)[i===!0?"scrollWidth":"scrollHeight"]),e===window?i===!0?(b===!0&&(c=(Ke===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-c),window.scrollTo(c,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,c):i===!0?(b===!0&&(c=(Ke===!0?e.scrollWidth-e.offsetWidth:0)-c),e.scrollLeft=c):e.scrollTop=c}function xe(e,c,i,b){if(i>=b)return 0;const q=c.length,a=Math.floor(i/K),_=Math.floor((b-1)/K)+1;let h=e.slice(a,_).reduce(Se,0);return i%K!==0&&(h-=c.slice(a*K,i).reduce(Se,0)),b%K!==0&&b!==q&&(h-=c.slice(b,_*K).reduce(Se,0)),h}const ll={virtualScrollSliceSize:{type:[Number,String],default:10},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},rt={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...ll};function ul({virtualScrollLength:e,getVirtualScrollTarget:c,getVirtualScrollEl:i,virtualScrollItemSizeComputed:b}){const q=St(),{props:a,emit:_,proxy:h}=q,{$q:m}=h;let H,r,y,V=[],A;const M=E(0),N=E(0),B=E({}),U=E(null),W=E(null),R=E(null),z=E({from:0,to:0}),Ae=g(()=>a.tableColspan!==void 0?a.tableColspan:100);b===void 0&&(b=g(()=>a.virtualScrollItemSize));const I=g(()=>b.value+";"+a.virtualScrollHorizontal),X=g(()=>I.value+";"+a.virtualScrollSliceRatioBefore+";"+a.virtualScrollSliceRatioAfter);me(X,()=>{$()}),me(I,J);function J(){ne(r,!0)}function ge(l){ne(l===void 0?r:l)}function Z(l,o){const d=c();if(d==null||d.nodeType===8)return;const x=Ne(d,i(),U.value,W.value,a.virtualScrollHorizontal,m.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd);y!==x.scrollViewSize&&$(x.scrollViewSize),L(d,x,Math.min(e.value-1,Math.max(0,parseInt(l,10)||0)),0,el.indexOf(o)!==-1?o:r!==-1&&l>r?"end":"start")}function ke(){const l=c();if(l==null||l.nodeType===8)return;const o=Ne(l,i(),U.value,W.value,a.virtualScrollHorizontal,m.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd),d=e.value-1,x=o.scrollMaxSize-o.offsetStart-o.offsetEnd-N.value;if(H===o.scrollStart)return;if(o.scrollMaxSize<=0){L(l,o,0,0);return}y!==o.scrollViewSize&&$(o.scrollViewSize),he(z.value.from);const F=Math.floor(o.scrollMaxSize-Math.max(o.scrollViewSize,o.offsetEnd)-Math.min(A[d],o.scrollViewSize/2));if(F>0&&Math.ceil(o.scrollStart)>=F){L(l,o,d,o.scrollMaxSize-o.offsetEnd-V.reduce(Se,0));return}let S=0,v=o.scrollStart-o.offsetStart,O=v;if(v<=x&&v+o.scrollViewSize>=M.value)v-=M.value,S=z.value.from,O=v;else for(let f=0;v>=V[f]&&S<d;f++)v-=V[f],S+=K;for(;v>0&&S<d;)v-=A[S],v>-o.scrollViewSize?(S++,O=v):O=A[S]+v;L(l,o,S,O)}function L(l,o,d,x,F){const S=typeof F=="string"&&F.indexOf("-force")!==-1,v=S===!0?F.replace("-force",""):F,O=v!==void 0?v:"start";let f=Math.max(0,d-B.value[O]),D=f+B.value.total;D>e.value&&(D=e.value,f=Math.max(0,D-B.value.total)),H=o.scrollStart;const Y=f!==z.value.from||D!==z.value.to;if(Y===!1&&v===void 0){ye(d);return}const{activeElement:Ie}=document,Q=R.value;Y===!0&&Q!==null&&Q!==Ie&&Q.contains(Ie)===!0&&(Q.addEventListener("focusout",ze),setTimeout(()=>{Q!==null&&Q.removeEventListener("focusout",ze)})),tl(Q,d-f);const Me=v!==void 0?A.slice(f,d).reduce(Se,0):0;if(Y===!0){const ee=D>=z.value.from&&f<=z.value.to?z.value.to:D;z.value={from:f,to:ee},M.value=xe(V,A,0,f),N.value=xe(V,A,D,e.value),requestAnimationFrame(()=>{z.value.to!==D&&H===o.scrollStart&&(z.value={from:z.value.from,to:D},N.value=xe(V,A,D,e.value))})}requestAnimationFrame(()=>{if(H!==o.scrollStart)return;Y===!0&&he(f);const ee=A.slice(f,d).reduce(Se,0),te=ee+o.offsetStart+M.value,Fe=te+A[d];let be=te+x;if(v!==void 0){const He=ee-Me,Ve=o.scrollStart+He;be=S!==!0&&Ve<te&&Fe<Ve+o.scrollViewSize?Ve:v==="end"?Fe-o.scrollViewSize:te-(v==="start"?0:Math.round((o.scrollViewSize-A[d])/2))}H=be,it(l,be,a.virtualScrollHorizontal,m.lang.rtl),ye(d)})}function he(l){const o=R.value;if(o){const d=gt.call(o.children,f=>f.classList&&f.classList.contains("q-virtual-scroll--skip")===!1),x=d.length,F=a.virtualScrollHorizontal===!0?f=>f.getBoundingClientRect().width:f=>f.offsetHeight;let S=l,v,O;for(let f=0;f<x;){for(v=F(d[f]),f++;f<x&&d[f].classList.contains("q-virtual-scroll--with-prev")===!0;)v+=F(d[f]),f++;O=v-A[S],O!==0&&(A[S]+=O,V[Math.floor(S/K)]+=O),S++}}}function ze(){R.value!==null&&R.value!==void 0&&R.value.focus()}function ne(l,o){const d=1*b.value;(o===!0||Array.isArray(A)===!1)&&(A=[]);const x=A.length;A.length=e.value;for(let S=e.value-1;S>=x;S--)A[S]=d;const F=Math.floor((e.value-1)/K);V=[];for(let S=0;S<=F;S++){let v=0;const O=Math.min((S+1)*K,e.value);for(let f=S*K;f<O;f++)v+=A[f];V.push(v)}r=-1,H=void 0,M.value=xe(V,A,0,z.value.from),N.value=xe(V,A,z.value.to,e.value),l>=0?(he(z.value.from),G(()=>{Z(l)})):oe()}function $(l){if(l===void 0&&typeof window!="undefined"){const v=c();v!=null&&v.nodeType!==8&&(l=Ne(v,i(),U.value,W.value,a.virtualScrollHorizontal,m.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd).scrollViewSize)}y=l;const o=parseFloat(a.virtualScrollSliceRatioBefore)||0,d=parseFloat(a.virtualScrollSliceRatioAfter)||0,x=1+o+d,F=l===void 0||l<=0?1:Math.ceil(l/b.value),S=Math.max(1,F,Math.ceil((a.virtualScrollSliceSize>0?a.virtualScrollSliceSize:10)/x));B.value={total:Math.ceil(S*x),start:Math.ceil(S*o),center:Math.ceil(S*(.5+o)),end:Math.ceil(S*(1+o)),view:F}}function _e(l,o){const d=a.virtualScrollHorizontal===!0?"width":"height",x={["--q-virtual-scroll-item-"+d]:b.value+"px"};return[l==="tbody"?w(l,{class:"q-virtual-scroll__padding",key:"before",ref:U},[w("tr",[w("td",{style:{[d]:`${M.value}px`,...x},colspan:Ae.value})])]):w(l,{class:"q-virtual-scroll__padding",key:"before",ref:U,style:{[d]:`${M.value}px`,...x}}),w(l,{class:"q-virtual-scroll__content",key:"content",ref:R,tabindex:-1},o.flat()),l==="tbody"?w(l,{class:"q-virtual-scroll__padding",key:"after",ref:W},[w("tr",[w("td",{style:{[d]:`${N.value}px`,...x},colspan:Ae.value})])]):w(l,{class:"q-virtual-scroll__padding",key:"after",ref:W,style:{[d]:`${N.value}px`,...x}})]}function ye(l){r!==l&&(a.onVirtualScroll!==void 0&&_("virtualScroll",{index:l,from:z.value.from,to:z.value.to-1,direction:l<r?"decrease":"increase",ref:h}),r=l)}$();const oe=_t(ke,m.platform.is.ios===!0?120:35);Ht(()=>{$()});let we=!1;return Tt(()=>{we=!0}),Bt(()=>{if(we!==!0)return;const l=c();H!==void 0&&l!==void 0&&l!==null&&l.nodeType!==8?it(l,H,a.virtualScrollHorizontal,m.lang.rtl):Z(r)}),mt(()=>{oe.cancel()}),Object.assign(h,{scrollTo:Z,reset:J,refresh:ge}),{virtualScrollSliceRange:z,virtualScrollSliceSizeComputed:B,setVirtualScrollSize:$,onVirtualScrollEvt:oe,localResetVirtualScroll:ne,padVirtualScroll:_e,scrollTo:Z,reset:J,refresh:ge}}const st=e=>["add","add-unique","toggle"].includes(e),nl=".*+?^${}()|[]\\",ol=Object.keys($e);var fl=ct({name:"QSelect",inheritAttrs:!1,props:{...rt,...Rt,...$e,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],popupNoRouteDismiss:Boolean,useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:st},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:{},transitionHide:{},transitionDuration:{},behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:rt.virtualScrollItemSize.type,onNewValue:Function,onFilter:Function},emits:[...dt,"add","remove","inputValue","keyup","keypress","keydown","popupShow","popupHide","filterAbort"],setup(e,{slots:c,emit:i}){const{proxy:b}=St(),{$q:q}=b,a=E(!1),_=E(!1),h=E(-1),m=E(""),H=E(!1),r=E(!1);let y=null,V=null,A,M,N,B=null,U,W,R,z;const Ae=E(null),I=E(null),X=E(null),J=E(null),ge=E(null),Z=Lt(e),ke=Kt(et),L=g(()=>Array.isArray(e.options)?e.options.length:0),he=g(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:ze,virtualScrollSliceSizeComputed:ne,localResetVirtualScroll:$,padVirtualScroll:_e,onVirtualScrollEvt:ye,scrollTo:oe,setVirtualScrollSize:we}=ul({virtualScrollLength:L,getVirtualScrollTarget:bt,getVirtualScrollEl:Je,virtualScrollItemSizeComputed:he}),l=vt(),o=g(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,n=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const u=e.mapOptions===!0&&A!==void 0?A:[],s=n.map(p=>wt(p,u));return e.modelValue===null&&t===!0?s.filter(p=>p!==null):s}return n}),d=g(()=>{const t={};return ol.forEach(n=>{const u=e[n];u!==void 0&&(t[n]=u)}),t}),x=g(()=>e.optionsDark===null?l.isDark.value:e.optionsDark),F=g(()=>ot(o.value)),S=g(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||o.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),v=g(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),O=g(()=>L.value===0),f=g(()=>o.value.map(t=>P.value(t)).join(", ")),D=g(()=>e.displayValue!==void 0?e.displayValue:f.value),Y=g(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),Ie=g(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||o.value.some(Y.value))),Q=g(()=>l.focused.value===!0?e.tabindex:-1),Me=g(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":a.value===!0?"true":"false","aria-controls":`${l.targetUid.value}_lb`};return h.value>=0&&(t["aria-activedescendant"]=`${l.targetUid.value}_${h.value}`),t}),ee=g(()=>({id:`${l.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),te=g(()=>o.value.map((t,n)=>({index:n,opt:t,html:Y.value(t),selected:!0,removeAtIndex:yt,toggleOption:le,tabindex:Q.value}))),Fe=g(()=>{if(L.value===0)return[];const{from:t,to:n}=ze.value;return e.options.slice(t,n).map((u,s)=>{const p=ae.value(u)===!0,C=Re(u)===!0,T=t+s,k={clickable:!0,active:C,activeClass:Ve.value,manualFocus:!0,focused:!1,disable:p,tabindex:-1,dense:e.optionsDense,dark:x.value,role:"option","aria-selected":C===!0?"true":"false",id:`${l.targetUid.value}_${T}`,onClick:()=>{le(u)}};return p!==!0&&(h.value===T&&(k.focused=!0),q.platform.is.desktop===!0&&(k.onMousemove=()=>{a.value===!0&&ie(T)})),{index:T,opt:u,html:Y.value(u),label:P.value(u),selected:k.active,focused:k.focused,toggleOption:le,setOptionIndex:ie,itemProps:k}})}),be=g(()=>e.dropdownIcon!==void 0?e.dropdownIcon:q.iconSet.arrow.dropdown),He=g(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),Ve=g(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),j=g(()=>Be(e.optionValue,"value")),P=g(()=>Be(e.optionLabel,"label")),ae=g(()=>Be(e.optionDisable,"disable")),Oe=g(()=>o.value.map(t=>j.value(t))),ht=g(()=>{const t={onInput:et,onChange:ke,onKeydown:Ge,onKeyup:Xe,onKeypress:Ye,onFocus:Ue,onClick(n){M===!0&&fe(n)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=ke,t});me(o,t=>{A=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&l.innerLoading.value!==!0&&(_.value!==!0&&a.value!==!0||F.value!==!0)&&(N!==!0&&de(),(_.value===!0||a.value===!0)&&re(""))},{immediate:!0}),me(()=>e.fillInput,de),me(a,Le),me(L,qt);function Qe(t){return e.emitValue===!0?j.value(t):t}function Te(t){if(t!==-1&&t<o.value.length)if(e.multiple===!0){const n=e.modelValue.slice();i("remove",{index:t,value:n.splice(t,1)[0]}),i("update:modelValue",n)}else i("update:modelValue",null)}function yt(t){Te(t),l.focus()}function je(t,n){const u=Qe(t);if(e.multiple!==!0){e.fillInput===!0&&Ce(P.value(t),!0,!0),i("update:modelValue",u);return}if(o.value.length===0){i("add",{index:0,value:u}),i("update:modelValue",e.multiple===!0?[u]:u);return}if(n===!0&&Re(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const s=e.modelValue.slice();i("add",{index:s.length,value:u}),s.push(u),i("update:modelValue",s)}function le(t,n){if(l.editable.value!==!0||t===void 0||ae.value(t)===!0)return;const u=j.value(t);if(e.multiple!==!0){n!==!0&&(Ce(e.fillInput===!0?P.value(t):"",!0,!0),ue()),I.value!==null&&I.value.focus(),(o.value.length===0||pe(j.value(o.value[0]),u)!==!0)&&i("update:modelValue",e.emitValue===!0?u:t);return}if((M!==!0||H.value===!0)&&l.focus(),Ue(),o.value.length===0){const C=e.emitValue===!0?u:t;i("add",{index:0,value:C}),i("update:modelValue",e.multiple===!0?[C]:C);return}const s=e.modelValue.slice(),p=Oe.value.findIndex(C=>pe(C,u));if(p!==-1)i("remove",{index:p,value:s.splice(p,1)[0]});else{if(e.maxValues!==void 0&&s.length>=e.maxValues)return;const C=e.emitValue===!0?u:t;i("add",{index:s.length,value:C}),s.push(C)}i("update:modelValue",s)}function ie(t){if(q.platform.is.desktop!==!0)return;const n=t!==-1&&t<L.value?t:-1;h.value!==n&&(h.value=n)}function qe(t=1,n){if(a.value===!0){let u=h.value;do u=at(u+t,-1,L.value-1);while(u!==-1&&u!==h.value&&ae.value(e.options[u])===!0);h.value!==u&&(ie(u),oe(u),n!==!0&&e.useInput===!0&&e.fillInput===!0&&Ee(u>=0?P.value(e.options[u]):U,!0))}}function wt(t,n){const u=s=>pe(j.value(s),t);return e.options.find(u)||n.find(u)||t}function Be(t,n){const u=t!==void 0?t:n;return typeof u=="function"?u:s=>s!==null&&typeof s=="object"&&u in s?s[u]:s}function Re(t){const n=j.value(t);return Oe.value.find(u=>pe(u,n))!==void 0}function Ue(t){e.useInput===!0&&I.value!==null&&(t===void 0||I.value===t.target&&t.target.value===f.value)&&I.value.select()}function We(t){$t(t,27)===!0&&a.value===!0&&(fe(t),ue(),de()),i("keyup",t)}function Xe(t){const{value:n}=t.target;if(t.keyCode!==void 0){We(t);return}if(t.target.value="",y!==null&&(clearTimeout(y),y=null),V!==null&&(clearTimeout(V),V=null),de(),typeof n=="string"&&n.length!==0){const u=n.toLocaleLowerCase(),s=C=>{const T=e.options.find(k=>C.value(k).toLocaleLowerCase()===u);return T===void 0?!1:(o.value.indexOf(T)===-1?le(T):ue(),!0)},p=C=>{s(j)!==!0&&(s(P)===!0||C===!0||re(n,!0,()=>p(!0)))};p()}else l.clearValue(t)}function Ye(t){i("keypress",t)}function Ge(t){if(i("keydown",t),Qt(t)===!0)return;const n=m.value.length!==0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),u=t.shiftKey!==!0&&e.multiple!==!0&&(h.value!==-1||n===!0);if(t.keyCode===27){Pe(t);return}if(t.keyCode===9&&u===!1){se();return}if(t.target===void 0||t.target.id!==l.targetUid.value||l.editable.value!==!0)return;if(t.keyCode===40&&l.innerLoading.value!==!0&&a.value===!1){ve(t),ce();return}if(t.keyCode===8&&(e.useChips===!0||e.clearable===!0)&&e.hideSelected!==!0&&m.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?Te(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&i("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof m.value!="string"||m.value.length===0)&&(ve(t),h.value=-1,qe(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&ne.value!==void 0&&(ve(t),h.value=Math.max(-1,Math.min(L.value,h.value+(t.keyCode===33?-1:1)*ne.value.view)),qe(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(ve(t),qe(t.keyCode===38?-1:1,e.multiple));const s=L.value;if((R===void 0||z<Date.now())&&(R=""),s>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||R.length!==0)){a.value!==!0&&ce(t);const p=t.key.toLocaleLowerCase(),C=R.length===1&&R[0]===p;z=Date.now()+1500,C===!1&&(ve(t),R+=p);const T=new RegExp("^"+R.split("").map(De=>nl.indexOf(De)!==-1?"\\"+De:De).join(".*"),"i");let k=h.value;if(C===!0||k<0||T.test(P.value(e.options[k]))!==!0)do k=at(k+1,-1,s-1);while(k!==h.value&&(ae.value(e.options[k])===!0||T.test(P.value(e.options[k]))!==!0));h.value!==k&&G(()=>{ie(k),oe(k),k>=0&&e.useInput===!0&&e.fillInput===!0&&Ee(P.value(e.options[k]),!0)});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||R!=="")&&(t.keyCode!==9||u===!1))){if(t.keyCode!==9&&ve(t),h.value!==-1&&h.value<s){le(e.options[h.value]);return}if(n===!0){const p=(C,T)=>{if(T){if(st(T)!==!0)return}else T=e.newValueMode;if(Ce("",e.multiple!==!0,!0),C==null)return;(T==="toggle"?le:je)(C,T==="add-unique"),e.multiple!==!0&&(I.value!==null&&I.value.focus(),ue())};if(e.onNewValue!==void 0?i("newValue",m.value,p):p(m.value),e.multiple!==!0)return}a.value===!0?se():l.innerLoading.value!==!0&&ce()}}function Je(){return M===!0?ge.value:X.value!==null&&X.value.contentEl!==null?X.value.contentEl:void 0}function bt(){return Je()}function Vt(){return e.hideSelected===!0?[]:c["selected-item"]!==void 0?te.value.map(t=>c["selected-item"](t)).slice():c.selected!==void 0?[].concat(c.selected()):e.useChips===!0?te.value.map((t,n)=>w(Yt,{key:"option-"+n,removable:l.editable.value===!0&&ae.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:Q.value,onRemove(){t.removeAtIndex(n)}},()=>w("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:P.value(t.opt)}))):[w("span",{[Ie.value===!0?"innerHTML":"textContent"]:D.value})]}function Ze(){if(O.value===!0)return c["no-option"]!==void 0?c["no-option"]({inputValue:m.value}):void 0;const t=c.option!==void 0?c.option:u=>w(Wt,{key:u.index,...u.itemProps},()=>w(Ut,()=>w(Gt,()=>w("span",{[u.html===!0?"innerHTML":"textContent"]:u.label}))));let n=_e("div",Fe.value.map(t));return c["before-options"]!==void 0&&(n=c["before-options"]().concat(n)),Xt(c["after-options"],n)}function Ct(t,n){const u=n===!0?{...Me.value,...l.splitAttrs.attributes.value}:void 0,s={ref:n===!0?I:void 0,key:"i_t",class:S.value,style:e.inputStyle,value:m.value!==void 0?m.value:"",type:"search",...u,id:n===!0?l.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...ht.value};return t!==!0&&M===!0&&(Array.isArray(s.class)===!0?s.class=[...s.class,"no-pointer-events"]:s.class+=" no-pointer-events"),w("input",s)}function et(t){y!==null&&(clearTimeout(y),y=null),V!==null&&(clearTimeout(V),V=null),!(t&&t.target&&t.target.qComposing===!0)&&(Ee(t.target.value||""),N=!0,U=m.value,l.focused.value!==!0&&(M!==!0||H.value===!0)&&l.focus(),e.onFilter!==void 0&&(y=setTimeout(()=>{y=null,re(m.value)},e.inputDebounce)))}function Ee(t,n){m.value!==t&&(m.value=t,n===!0||e.inputDebounce===0||e.inputDebounce==="0"?i("inputValue",t):V=setTimeout(()=>{V=null,i("inputValue",t)},e.inputDebounce))}function Ce(t,n,u){N=u!==!0,e.useInput===!0&&(Ee(t,!0),(n===!0||u!==!0)&&(U=t),n!==!0&&re(t))}function re(t,n,u){if(e.onFilter===void 0||n!==!0&&l.focused.value!==!0)return;l.innerLoading.value===!0?i("filterAbort"):(l.innerLoading.value=!0,r.value=!0),t!==""&&e.multiple!==!0&&o.value.length!==0&&N!==!0&&t===P.value(o.value[0])&&(t="");const s=setTimeout(()=>{a.value===!0&&(a.value=!1)},10);B!==null&&clearTimeout(B),B=s,i("filter",t,(p,C)=>{(n===!0||l.focused.value===!0)&&B===s&&(clearTimeout(B),typeof p=="function"&&p(),r.value=!1,G(()=>{l.innerLoading.value=!1,l.editable.value===!0&&(n===!0?a.value===!0&&ue():a.value===!0?Le(!0):a.value=!0),typeof C=="function"&&G(()=>{C(b)}),typeof u=="function"&&G(()=>{u(b)})}))},()=>{l.focused.value===!0&&B===s&&(clearTimeout(B),l.innerLoading.value=!1,r.value=!1),a.value===!0&&(a.value=!1)})}function pt(){return w(Jt,{ref:X,class:v.value,style:e.popupContentStyle,modelValue:a.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&O.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:x.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,noRouteDismiss:e.popupNoRouteDismiss,square:He.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...ee.value,onScrollPassive:ye,onBeforeShow:lt,onBeforeHide:xt,onShow:At},Ze)}function xt(t){ut(t),se()}function At(){we()}function kt(t){fe(t),I.value!==null&&I.value.focus(),H.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function zt(t){fe(t),G(()=>{H.value=!1})}function It(){const t=[w(Zt,{class:`col-auto ${l.fieldClass.value}`,...d.value,for:l.targetUid.value,dark:x.value,square:!0,loading:r.value,itemAligned:!1,filled:!0,stackLabel:m.value.length!==0,...l.splitAttrs.listeners.value,onFocus:kt,onBlur:zt},{...c,rawControl:()=>l.getControl(!0),before:void 0,after:void 0})];return a.value===!0&&t.push(w("div",{ref:ge,class:v.value+" scroll",style:e.popupContentStyle,...ee.value,onClick:Pe,onScrollPassive:ye},Ze())),w(jt,{ref:J,modelValue:_.value,position:e.useInput===!0?"top":void 0,transitionShow:W,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,noRouteDismiss:e.popupNoRouteDismiss,onBeforeShow:lt,onBeforeHide:Mt,onHide:Ft,onShow:Ot},()=>w("div",{class:"q-select__dialog"+(x.value===!0?" q-select__dialog--dark q-dark":"")+(H.value===!0?" q-select__dialog--focused":"")},t))}function Mt(t){ut(t),J.value!==null&&J.value.__updateRefocusTarget(l.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),l.focused.value=!1}function Ft(t){ue(),l.focused.value===!1&&i("blur",t),de()}function Ot(){const t=document.activeElement;(t===null||t.id!==l.targetUid.value)&&I.value!==null&&I.value!==t&&I.value.focus(),we()}function se(){_.value!==!0&&(h.value=-1,a.value===!0&&(a.value=!1),l.focused.value===!1&&(B!==null&&(clearTimeout(B),B=null),l.innerLoading.value===!0&&(i("filterAbort"),l.innerLoading.value=!1,r.value=!1)))}function ce(t){l.editable.value===!0&&(M===!0?(l.onControlFocusin(t),_.value=!0,G(()=>{l.focus()})):l.focus(),e.onFilter!==void 0?re(m.value):(O.value!==!0||c["no-option"]!==void 0)&&(a.value=!0))}function ue(){_.value=!1,se()}function de(){e.useInput===!0&&Ce(e.multiple!==!0&&e.fillInput===!0&&o.value.length!==0&&P.value(o.value[0])||"",!0,!0)}function Le(t){let n=-1;if(t===!0){if(o.value.length!==0){const u=j.value(o.value[0]);n=e.options.findIndex(s=>pe(j.value(s),u))}$(n)}ie(n)}function qt(t,n){a.value===!0&&l.innerLoading.value===!1&&($(-1,!0),G(()=>{a.value===!0&&l.innerLoading.value===!1&&(t>n?$():Le(!0))}))}function tt(){_.value===!1&&X.value!==null&&X.value.updatePosition()}function lt(t){t!==void 0&&fe(t),i("popupShow",t),l.hasPopupOpen=!0,l.onControlFocusin(t)}function ut(t){t!==void 0&&fe(t),i("popupHide",t),l.hasPopupOpen=!1,l.onControlFocusout(t)}function nt(){M=q.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?c["no-option"]!==void 0||e.onFilter!==void 0||O.value===!1:!0),W=q.platform.is.ios===!0&&M===!0&&e.useInput===!0?"fade":e.transitionShow}return Dt(nt),Pt(tt),nt(),mt(()=>{y!==null&&clearTimeout(y),V!==null&&clearTimeout(V)}),Object.assign(b,{showPopup:ce,hidePopup:ue,removeAtIndex:Te,add:je,toggleOption:le,getOptionIndex:()=>h.value,setOptionIndex:ie,moveOptionSelection:qe,filter:re,updateMenuPosition:tt,updateInputValue:Ce,isOptionSelected:Re,getEmittingOptionValue:Qe,isOptionDisabled:(...t)=>ae.value.apply(null,t)===!0,getOptionValue:(...t)=>j.value.apply(null,t),getOptionLabel:(...t)=>P.value.apply(null,t)}),Object.assign(l,{innerValue:o,fieldClass:g(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:Ae,targetRef:I,hasValue:F,showPopup:ce,floatingLabel:g(()=>e.hideSelected!==!0&&F.value===!0||typeof m.value=="number"||m.value.length!==0||ot(e.displayValue)),getControlChild:()=>{if(l.editable.value!==!1&&(_.value===!0||O.value!==!0||c["no-option"]!==void 0))return M===!0?It():pt();l.hasPopupOpen===!0&&(l.hasPopupOpen=!1)},controlEvents:{onFocusin(t){l.onControlFocusin(t)},onFocusout(t){l.onControlFocusout(t,()=>{de(),se()})},onClick(t){if(Pe(t),M!==!0&&a.value===!0){se(),I.value!==null&&I.value.focus();return}ce(t)}},getControl:t=>{const n=Vt(),u=t===!0||_.value!==!0||M!==!0;if(e.useInput===!0)n.push(Ct(t,u));else if(l.editable.value===!0){const p=u===!0?Me.value:void 0;n.push(w("input",{ref:u===!0?I:void 0,key:"d_t",class:"q-select__focus-target",id:u===!0?l.targetUid.value:void 0,value:D.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...p,onKeydown:Ge,onKeyup:We,onKeypress:Ye})),u===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length!==0&&n.push(w("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:Xe}))}if(Z.value!==void 0&&e.disable!==!0&&Oe.value.length!==0){const p=Oe.value.map(C=>w("option",{value:C,selected:!0}));n.push(w("select",{class:"hidden",name:Z.value,multiple:e.multiple},p))}const s=e.useInput===!0||u!==!0?void 0:l.splitAttrs.attributes.value;return w("div",{class:"q-field__native row items-center",...s,...l.splitAttrs.listeners.value},n)},getInnerAppend:()=>e.loading!==!0&&r.value!==!0&&e.hideDropdownIcon!==!0?[w(Nt,{class:"q-select__dropdown-icon"+(a.value===!0?" rotate-180":""),name:be.value})]:null}),ft(l)}});export{fl as Q};
