import{Q as p}from"./QImg.51839b12.js";import{S as c,a as m}from"./swiper-slide.48402cb7.js";/* empty css                   */import{_ as d,n as a,p as s,q as o,s as i,U as _,V as w,S as f,f as u,F as h}from"./index.9793c43f.js";const g={name:"ItemGallery",props:["item_gallery"],components:{Swiper:c,SwiperSlide:m},computed:{getData(){return this.item_gallery}},methods:{setImage(e){this.$emit("afterSelectimage",e)}}},y=["onClick"];function S(e,x,k,v,B,t){const n=a("swiper-slide"),l=a("swiper");return s(),o(l,{slidesPerView:4.2,spaceBetween:5,onSwiper:e.onSwiper,class:"q-mb-sm"},{default:i(()=>[(s(!0),_(h,null,w(t.getData,r=>(s(),o(n,{key:r,class:"row"},{default:i(()=>[f("div",{class:"radius8 border-grey300 cursor-pointer",style:{height:"55px",width:"55px",overflow:"hidden"},onClick:I=>t.setImage(r)},[u(p,{src:r,"spinner-color":"primary","spinner-size":"sm",style:{height:"55px",width:"55px"},fit:"cover"},null,8,["src"])],8,y)]),_:2},1024))),128))]),_:1},8,["slidesPerView","onSwiper"])}var q=d(g,[["render",S]]);export{q as default};
