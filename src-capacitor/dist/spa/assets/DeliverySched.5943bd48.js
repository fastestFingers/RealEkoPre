import{H as d,m as s}from"./index.f7d559c9.js";let l=[],_=[];const o=d("deliverysched",{state:()=>({loading:!1,loading_sched:!1,transaction_type:"",transaction_list:[],delivery_options:[],trans_data:[],delivery_date_list:[],delivery_time_list:[],delivery_date:"",delivery_time:"",whento_deliver:"now",new_transaction_type:"",new_whento_deliver:"",filters:{},main_layout_header:!0,data:[]}),persist:!0,actions:{getDeliverySched(a,t,i){this.loading_sched=!0,this.transaction_list=[],this.delivery_options=[],s.fetchDataPost("getDeliveryDetails","cart_uuid="+a+"&slug="+t+"&transaction_type="+this.transaction_type+"&query_type="+i).then(e=>{this.transaction_type=e.details.transaction_type,this.data=e.details.data,Object.keys(e.details.data).length>0&&Object.entries(e.details.data).forEach(([n,r])=>{this.transaction_list.push({label:r.service_name,value:r.service_code})}),Object.keys(e.details.delivery_option).length>0&&Object.entries(e.details.delivery_option).forEach(([n,r])=>{this.delivery_options.push({label:r.name,value:r.value})}),this.whento_deliver=e.details.whento_deliver,this.trans_data={delivery_date:e.details.delivery_date,delivery_date_pretty:e.details.delivery_date_pretty,delivery_time:e.details.delivery_time,whento_deliver:e.details.whento_deliver}}).catch(e=>{this.transaction_list=[]}).then(e=>{this.loading_sched=!1})},hadTransactionList(){return s.empty(this.transaction_list)?!1:Object.keys(this.transaction_list).length>0},clearData(){this.delivery_date_list=[],this.delivery_time_list=[]},getDeliveryTimes(a){this.clearData(),this.loading=!0,s.fetchDataPost("getDeliveryTimes","cart_uuid="+s.getStorage("cart_uuid")+"&slug="+a).then(t=>{Object.keys(t.details.opening_hours).length>0&&Object.entries(t.details.opening_hours.dates).forEach(([e,n])=>{this.delivery_date_list.push({label:n.name,value:n.value})}),_=t.details.opening_hours.dates,l=t.details.opening_hours.time_ranges;const i=Object.keys(_);if(this.delivery_date=i[0],this.getTimeList(this.delivery_date),!s.empty(l[this.delivery_date])){const e=l[this.delivery_date][0];this.delivery_time={label:e.pretty_time,value:e.end_time,start_time:e.start_time,end_time:e.end_time,pretty_time:e.pretty_time}}s.empty(this.trans_data.delivery_date)||(this.delivery_date=this.trans_data.delivery_date,this.delivery_time=this.trans_data.delivery_time)}).catch(t=>{console.debug(t)}).then(t=>{this.loading=!1})},getTimeList(a){s.empty(l[a])||Object.entries(l[a]).forEach(([t,i])=>{this.delivery_time_list.push({label:i.pretty_time,value:i.end_time,start_time:i.start_time,end_time:i.end_time,pretty_time:i.pretty_time})})}}});export{o as u};
