import{C as g}from"./ContainerLoading-e41a15ae.js";import{S as x}from"./sweetalert2.all-bbb8dc46.js";import{_ as h,r as m,o as n,c,b as p,a as s,D as v,E as w,G as y,d as i,t as o,h as u,n as S,F as b,i as L,w as C}from"./index-b9b30565.js";import"./index-f5973906.js";const{VITE_APP_URL:k,VITE_APP_PATH:O}={VITE_APP_URL:"https://vue3-course-api.hexschool.io",VITE_APP_PATH:"peihanwang-hexschool",BASE_URL:"/Fangsis/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},P={data(){return{order:{create_at:null,id:"",is_paid:null,message:"",num:null,paid_date:null,products:{},total:null,user:{address:"",email:"",name:"",tel:null}},orderStatus:!0,inputOrderId:"",isLoading:!1,container:this.$refs.loadingContainer}},components:{ContainerLoading:g},methods:{getProductOrder(l){this.isLoading=!0;const t=l.trim();this.$http.get(`${k}/v2/api/${O}/order/${t}`).then(a=>{this.order=a.data.order,this.orderStatus=!0,this.isLoading=!1}).catch(()=>{this.orderStatus=!1,x.fire({title:"查詢失敗",text:"未找到您所查詢的訂單資訊，請確認輸入的訂單編號是否正確!",icon:"error",confirmButtonText:"確定",confirmButtonColor:"#5D7067",customClass:{popup:"radius0",confirmButton:"radius0"}}),this.isLoading=!1})}}},B={class:"vl-parent",ref:"loading-container"},D={class:"row justify-content-center"},T={class:"col-lg-6"},V={class:"input-group"},A=s("i",{class:"bi bi-search"},null,-1),I=[A],E={key:0,class:"cart-status border border-2 border-secondary px-5 py-10 mt-6 mb-10 d-flex justify-content-center align-items-center flex-column"},N=s("div",null,[s("h3",{class:"fs-1 fw-bold"},[i("Sorry ... "),s("br"),i("查無此訂單資料")]),s("p",{class:"fs-5"},"請再次確認輸入的訂單編號正確無誤!")],-1),R=[N],z={key:1,class:"cart-status border border-2 border-secondary px-5 py-5 mt-4 mb-10 d-flex justify-content-center flex-column"},F={class:"mb-5"},U=s("h3",{class:"fs-3 fw-bold mb-3"},"訂單資料",-1),Z={class:"list-unstyled fs-6"},H={class:"mb-1"},M=s("span",{class:"fw-bold"},"訂單編號 : ",-1),j={class:"mb-1"},G=s("span",{class:"fw-bold"},"建立日期 : ",-1),K={key:0},X={class:"mb-1"},q=s("span",{class:"fw-bold"},"是否付款 : ",-1),Q={class:"mb-5"},Y=s("h3",{class:"fs-3 fw-bold mb-3"},"訂購人個人資料",-1),W={class:"list-unstyled fs-6"},J={class:"row g-0 mb-sm-1 mb-3"},$=s("span",{class:"fw-bold col-xl-2 col-sm-4 col-12"},"客戶姓名 :",-1),ss={class:"col-8"},es={class:"row g-0 mb-sm-1 mb-3"},os=s("span",{class:"fw-bold col-xl-2 col-sm-4 col-12"},"聯絡電話 : ",-1),ts={class:"col-8"},rs={class:"row g-0 mb-sm-1 mb-3"},ns=s("span",{class:"fw-bold col-xl-2 col-sm-4 col-12"},"電子郵件 : ",-1),cs={class:"col-8"},is={class:"row g-0 mb-sm-1 mb-3"},ls=s("span",{class:"fw-bold col-xl-2 col-sm-4 col-12"},"收件地址 : ",-1),as={class:"col-8"},ds={class:"row"},_s=s("span",{class:"fw-bold col-xl-2 col-12"},"訂單備註 : ",-1),us={class:"col-xxl-8 col-12"},ms=s("h3",{class:"fs-3 fw-bold mb-3"},"訂購商品",-1),ps={class:"list-unstyled fs-6"};function hs(l,t,a,f,e,d){const _=m("ContainerLoading");return n(),c("div",B,[p(_,{isLoading:e.isLoading,container:e.container},null,8,["isLoading","container"]),s("div",D,[s("div",T,[s("div",V,[v(s("input",{class:"form-control",type:"text",placeholder:"請輸入您的訂單編號","onUpdate:modelValue":t[0]||(t[0]=r=>e.inputOrderId=r),onKeyup:t[1]||(t[1]=y(r=>d.getProductOrder(e.inputOrderId),["enter"]))},null,544),[[w,e.inputOrderId]]),s("button",{class:"btn btn-primary",type:"button",onClick:t[2]||(t[2]=r=>d.getProductOrder(e.inputOrderId))},I)]),e.orderStatus===!1?(n(),c("div",E,R)):e.orderStatus===!0?(n(),c("div",z,[s("div",F,[U,s("ul",Z,[s("li",H,[M,i(),s("span",null,o(e.order.id),1)]),s("li",j,[G,e.order.create_at!==null?(n(),c("span",K,o(new Date(e.order.create_at*1e3).toLocaleString()),1)):u("",!0)]),s("li",X,[q,e.order.id?(n(),c("span",{key:0,class:S({"text-success":e.order.is_paid,"text-danger":!e.order.is_paid})},o(e.order.is_paid?"已付款":"尚未付款"),3)):u("",!0)])])]),s("div",Q,[Y,s("ul",W,[s("li",J,[$,s("span",ss,o(e.order.user.name),1)]),s("li",es,[os,s("span",ts,o(e.order.user.tel),1)]),s("li",rs,[ns,s("span",cs,o(e.order.user.email),1)]),s("li",is,[ls,s("span",as,o(e.order.user.address),1)]),s("li",ds,[_s,s("span",us,o(e.order.message),1)])])]),s("div",null,[ms,s("ul",ps,[(n(!0),c(b,null,L(e.order.products,r=>(n(),c("li",{key:r.id},[i(o(r.product.title)+" ",1),s("span",null,"x"+o(r.qty),1)]))),128))])])])):u("",!0)])])],512)}const bs=h(P,[["render",hs]]),fs={data(){return{}},components:{OrderSearchCard:bs}},gs={class:"py-md-13 py-9 background-position-center background-size-corver",style:{"background-image":"url('https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1689994205093.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=RLJFHdzxV1ZFvcHobhOCdJFG71iTXspxuTuLv3LAuadLgMdzvO3ebfDIxgaswSy6G8SbPxVDbqyApt2wU2it78WeORuUUxdwMwTXV4qzswD20QiHhMvd3AZgGH6OcmLl%2BSP1YQilwzCQZlKgSckbe6LYnCKT2E7vj3iO9qTAsfoXM3FYNRfGl4p3Z11%2BRPSu5PDI5Wjg%2BSnmgeYzn3LLZfqyWN%2BHKVesfnxsDx4s6CkU%2ByX97aX4%2FIZiE89I6SwCw4DvMsNctfvaurRt6YyJKQ3NAB%2BBkmC1pBr0ARDd8C%2BWkxQXNVbaVkvu9PdgirS2CneyZtgonvceaSs5mSNnZA%3D%3D')","background-color":"var(--bs-primary)"}},xs={class:"container d-flex flex-column align-items-center"},vs=s("h2",{class:"fw-bold fs-lg-10 fs-1 mb-3 text-white",style:{"font-family":"var(--bs-NotoSerif-TC)"}}," 訂單查詢 ",-1),ws={class:"fs-6"},ys={"aria-label":"breadcrumb"},Ss={class:"breadcrumb mb-0 text-white text-center"},Ls={class:"breadcrumb-item"},Cs=s("li",{class:"breadcrumb-item active","aria-current":"page"},"訂單查詢",-1),ks={class:"container my-10"};function Os(l,t,a,f,e,d){const _=m("routerLink"),r=m("OrderSearchCard");return n(),c(b,null,[s("div",gs,[s("div",xs,[vs,s("div",ws,[s("nav",ys,[s("ol",Ss,[s("li",Ls,[p(_,{class:"text-decoration-none text-white",to:"/"},{default:C(()=>[i("首頁")]),_:1})]),Cs])])])])]),s("div",ks,[p(r)])],64)}const Vs=h(fs,[["render",Os]]);export{Vs as default};
