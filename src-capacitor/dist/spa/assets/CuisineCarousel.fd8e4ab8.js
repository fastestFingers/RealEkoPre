import{Q as u}from"./QSkeleton.df19fe70.js";import{_,Q as d,p as t,U as s,F as r,V as o,S as a,f as i,s as c,ad as p,Y as m,X as f}from"./index.9a53e84d.js";const x={name:"CuisineGrid",setup(){return{DataStore:d()}},mounted(){this.DataStore.hasDataCuisine()||this.DataStore.CuisineList()}},h={key:0,class:"row q-gutter-sm items-center justify-center"},y={key:1,class:"row items-center justify-center",style:{"flex-wrap":"wrap",gap:"8px"}},v={class:"column items-center text-center full-width"},S=["src"],g={class:"ellipsis font12 q-mt-xs text-black",style:{"max-width":"70px"}};function k(l,w,D,n,C,Q){return n.DataStore.loading_cuisine?(t(),s("div",h,[(t(),s(r,null,o(3,e=>a("div",{key:e,class:"col-4"},[i(u,{type:"QBtn",class:"full-width",height:"50px"})])),64))])):(t(),s("div",y,[(t(!0),s(r,null,o(n.DataStore.cuisine,e=>(t(),s("div",{key:e.cuisine_id,class:"col-3",style:{width:"22%","margin-bottom":"8px"}},[i(f,{color:"transparent","text-color":"black",unelevated:"","no-caps":"",class:"radius8 fit q-pa-xs",size:"sm",to:{name:"feed",query:{query:"all",cuisine_id:e.cuisine_id,cuisine_name:e.cuisine_name}}},{default:c(()=>[a("div",v,[i(p,{size:"30px"},{default:c(()=>[a("img",{src:e.url_icon},null,8,S)]),_:2},1024),a("div",g,m(e.cuisine_name),1)])]),_:2},1032,["to"])]))),128))]))}var b=_(x,[["render",k],["__scopeId","data-v-4ac366a0"]]);export{b as default};
