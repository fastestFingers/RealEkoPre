import{Q as m}from"./QSkeleton.d808f021.js";import{_ as f,n as p,p as e,q as o,s as r,U as n,V as d,f as s,F as l,X as g,az as w}from"./index.f7d559c9.js";import{S as y,a as S}from"./swiper-slide.4e44b66c.js";import{u as k}from"./MenuStore.aea32adc.js";const C={name:"CategorySlide",props:["slug"],components:{Swiper:y,SwiperSlide:S},setup(){return{MenuStore:k()}}};function v(_,M,i,a,h,x){const c=p("swiper-slide"),u=p("swiper");return a.MenuStore.loading_menu?(e(),o(u,{key:0,"slides-per-view":2.2,"space-between":10},{default:r(()=>[(e(),n(l,null,d(5,t=>s(c,{key:t},{default:r(()=>[s(m,{height:"40px"})]),_:1})),64))]),_:1},8,["slides-per-view"])):(e(),n(l,{key:1},[a.MenuStore.data_category[i.slug]?(e(),o(u,{key:0,"slides-per-view":2.5,"space-between":10},{default:r(()=>[(e(!0),n(l,null,d(a.MenuStore.data_category[i.slug],t=>(e(),o(c,{key:t},{default:r(()=>[s(g,{flat:"",label:t.category_name,"no-caps":"",class:"line-1",color:"grey",onClick:b=>this.$emit("afterCategoryselect",t.category_uiid)},null,8,["label","onClick"])]),_:2},1024))),128))]),_:1},8,["slides-per-view"])):w("",!0)],64))}var N=f(C,[["render",v]]);export{N as default};
