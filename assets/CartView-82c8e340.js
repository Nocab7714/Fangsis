import{P as $}from"./PurchaseStepper-162859b1.js";import{C as x}from"./ContainerLoading-f882800b.js";import{m as P,g as D,_ as g,r as p,o as n,c as r,a as e,b as c,F as _,i as f,t as a,j as v,d,w as m,D as L,E as M,G as A,h as b}from"./index-bd691426.js";import{c as y}from"./cartAndWishList-791b78d5.js";import"./index-38ad52a9.js";import"./sweetalert2.all-fc258a9c.js";const N={data(){return{CouponCode:"",container:this.$refs.loadingContainer}},components:{ContainerLoading:x},methods:{...P(y,["getCart","removeCartProduct","removeCartAllProduct","upDataCartProduct","UseCoupon","deliveryMethod"])},computed:{...D(y,["carts","total","final_total","delivery","isLoading","couponCodeMessage"])}},S={key:0,class:"row mt-2 gy-3"},V={class:"col-lg-8"},j={class:"border border-2 border-secondary px-5 py-5"},q={class:"vl-parent",ref:"loading-container"},T={class:"d-none d-md-block"},U={class:"table table-striped align-middle mb-6"},z=e("thead",null,[e("tr",null,[e("th",{scope:"col"}),e("th",{scope:"col"},"商品名稱"),e("th",{scope:"col"},"價格"),e("th",{class:"text-center",scope:"col"},"數量"),e("th",{class:"text-center",scope:"col"})])],-1),H={scope:"row"},B=["src","alt"],R={class:"text-wrap"},I={class:"px-1"},E={class:"w-25"},F={class:"input-group px-2"},K=["onClick","disabled"],G=["value","onChange"],O=["onClick"],W={class:"text-center"},J=["onClick"],Q=e("i",{class:"bi bi-trash3-fill fs-5"},null,-1),X=[Q],Y={class:"d-block d-md-none"},Z={class:"table table-striped align-middle mb-6"},ee=e("thead",null,[e("tr",null,[e("th",{scope:"col"},"您所選擇的商品")])],-1),te={scope:"row"},oe={class:"d-flex flex-column align-items-center py-3 px-2"},se=["src","alt"],ne={class:"fw-normal"},re={class:"fw-normal mb-3"},le={class:"input-group w-auto mb-4"},de=["onClick","disabled"],ie=["value","onChange"],ae=["onClick"],ce=["onClick"],ue=e("i",{class:"bi bi-trash3-fill fs-4"},null,-1),pe=[ue],he=e("div",{class:"border border-1 border-secondary border-top-0 border-end-0 border-start-0 mb-3"},null,-1),be={class:"d-flex justify-content-between"},_e=e("i",{class:"bi bi-arrow-left me-2"},null,-1),me=e("i",{class:"bi bi-trash3-fill me-2"},null,-1),fe={class:"col-lg-4"},ve={class:"border border-2 border-secondary px-5 py-5 d-flex flex-column"},ye={class:"vl-parent",ref:"loading-container"},ge=e("div",{class:"border border-1 border-secondary border-top-0 border-end-0 border-start-0 w-100 mb-6"},[e("h2",{class:"fs-5 fw-bold"},"購物車總計")],-1),Ce={class:"border border-1 border-secondary border-top-0 border-end-0 border-start-0 w-100 mb-11 d-flex justify-content-between align-items-end"},we=e("h3",{class:"fs-6 text-nowrap"},"小計",-1),ke={class:"fw-bold fs-4 me-1"},$e={class:"mb-8"},xe=e("div",{class:"border border-1 border-secondary border-top-0 border-end-0 border-start-0 w-100 mb-3 d-flex"},[e("h3",{class:"fs-6 fw-bold"},"配送方式")],-1),Pe={class:"form-check"},De=["checked"],Le=e("label",{class:"form-check-label",for:"DeliveryMethod02"}," 順豐速遞 - 常溫配送 ",-1),Me={class:"form-check"},Ae=["checked"],Ne=e("label",{class:"form-check-label",for:"DeliveryMethod01"}," 7-11 取貨",-1),Se={class:"mb-8"},Ve=e("div",{class:"border border-1 border-secondary border-top-0 border-end-0 border-start-0 w-100 mb-3 d-flex"},[e("h3",{class:"fs-6 fw-bold"},"優惠卷")],-1),je={key:0,class:"fs-6"},qe={class:"border border-1 border-secondary border-top-0 border-end-0 border-start-0 w-100 mb-3 d-flex justify-content-between align-items-end"},Te=e("h3",{class:"fs-6 text-nowrap fw-bold"},"總計",-1),Ue={class:"d-flex flex-column"},ze={key:0,class:"fw-bold fs-4 opacity-25 text-decoration-line-through me-1"},He={class:"fw-bold fs-4 me-1"},Be={class:"d-flex justify-content-end"},Re={key:1,class:"cart-status border border-2 border-secondary px-5 py-5 mt-6 mb-5"},Ie={class:"d-flex justify-content-center align-items-center py-7"},Ee={class:"d-flex flex-column justify-content-center align-items-center"},Fe=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",fill:"currentColor",class:"bi bi-cart-plus-fill text-secondary mb-3",viewBox:"0 0 16 16"},[e("path",{d:"M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"})],-1),Ke=e("h2",{class:"fw-bold fs-3 text-secondary mb-5",style:{"font-family":"var(--bs-NotoSerif-TC)"}},"哎呀! 您的購物車裡還沒有任何商品!",-1);function Ge(o,s,C,w,i,k){const h=p("ContainerLoading"),u=p("RouterLink");return n(),r(_,null,[o.carts.length?(n(),r("div",S,[e("div",V,[e("div",j,[e("div",q,[c(h,{isLoading:o.isLoading,container:i.container},null,8,["isLoading","container"]),e("div",T,[e("table",U,[z,e("tbody",null,[(n(!0),r(_,null,f(o.carts,t=>(n(),r("tr",{key:t.product.id},[e("td",H,[e("img",{class:"img-fluid",src:t.product.imageUrl,alt:t.product.title,width:"100",height:"100"},null,8,B)]),e("td",R,a(t.product.title),1),e("td",null,[e("span",I,a(t.product.origin_price),1)]),e("td",E,[e("div",F,[e("button",{class:"btn btn-outline-secondary",type:"button",onClick:l=>o.upDataCartProduct(t.id,t.qty-1),disabled:t.qty==1}," - ",8,K),e("input",{class:"form-control text-center border-secondary",type:"text",autocomplete:"off",maxlength:"99",minlength:"1",oninput:"value=value.replace(/[^\\d]/g,'')",value:t.qty,onChange:l=>o.upDataCartProduct(t.id,l.target.value)},null,40,G),e("button",{class:"btn btn-outline-secondary",type:"button",onClick:l=>o.upDataCartProduct(t.id,t.qty+1)}," + ",8,O)])]),e("th",W,[e("a",{class:"me-2",href:"",onClick:v(l=>o.removeCartProduct(t.id),["prevent"])},X,8,J)])]))),128))])])]),e("div",Y,[e("table",Z,[ee,e("tbody",null,[(n(!0),r(_,null,f(o.carts,t=>(n(),r("tr",{key:t.product.title},[e("th",te,[e("div",oe,[e("img",{class:"img-fluid mb-3",src:t.product.imageUrl,alt:t.product.title,width:"300",height:"300"},null,8,se),e("span",ne,a(t.product.title),1),e("span",re,[d("NT$"),e("span",null,a(t.product.origin_price),1)]),e("div",le,[e("button",{class:"btn btn-outline-secondary py-2",type:"button",onClick:l=>o.upDataCartProduct(t.id,t.qty-1),disabled:t.qty==1}," - ",8,de),e("input",{class:"form-control text-center border-secondary",type:"text",autocomplete:"off",maxlength:"99",minlength:"1",oninput:"value=value.replace(/[^\\d]/g,'')",value:t.qty,onChange:l=>o.upDataCartProduct(t.id,l.target.value)},null,40,ie),e("button",{class:"btn btn-outline-secondary py-2",type:"button",onClick:l=>o.upDataCartProduct(t.id,t.qty+1)}," + ",8,ae)]),e("a",{href:"",onClick:v(l=>o.removeCartProduct(t.id),["prevent"])},pe,8,ce)])])]))),128))])])])],512),e("div",null,[he,e("div",be,[c(u,{class:"btn btn-outline-secondary me-2 py-2",to:"/products"},{default:m(()=>[_e,d("繼續選購")]),_:1}),e("button",{onClick:s[0]||(s[0]=(...t)=>o.removeCartAllProduct&&o.removeCartAllProduct(...t)),class:"btn btn-outline-secondary ms-2 py-2",type:"button"},[me,d("清空購物車 ")])])])])]),e("div",fe,[e("div",ve,[e("div",ye,[c(h,{isLoading:o.isLoading,container:i.container},null,8,["isLoading","container"]),ge,e("div",Ce,[we,e("span",ke,[d("NT$ "),e("span",null,a(o.total),1)])]),e("div",$e,[xe,e("div",Pe,[e("input",{class:"form-check-input",id:"DeliveryMethod02",type:"radio",name:"DeliveryMethod",onClick:s[1]||(s[1]=t=>o.deliveryMethod("順豐速遞 - 常溫配送")),checked:o.delivery==="順豐速遞 - 常溫配送"},null,8,De),Le]),e("div",Me,[e("input",{class:"form-check-input",id:"DeliveryMethod01",type:"radio",name:"DeliveryMethod",onClick:s[2]||(s[2]=t=>o.deliveryMethod("7-11 取貨")),checked:o.delivery==="7-11 取貨"},null,8,Ae),Ne])]),e("div",Se,[Ve,L(e("input",{class:"form-control mb-2",type:"text",placeholder:"請輸入優惠卷代碼","onUpdate:modelValue":s[3]||(s[3]=t=>i.CouponCode=t),onKeyup:s[4]||(s[4]=A(t=>o.UseCoupon(i.CouponCode),["enter"]))},null,544),[[M,i.CouponCode]]),e("button",{class:"btn btn-primary w-100 py-2 mb-2",onClick:s[5]||(s[5]=t=>o.UseCoupon(i.CouponCode))}," 使用優惠卷 "),o.total!==o.final_total?(n(),r("span",je,a(o.couponCodeMessage),1)):b("",!0)]),e("div",qe,[Te,e("div",Ue,[o.total!==o.final_total?(n(),r("span",ze,[d("NT$ "),e("span",null,a(o.total),1)])):b("",!0),e("span",He,[d("NT$ "),e("span",null,a(o.final_total),1)])])]),e("div",Be,[c(u,{class:"btn btn-primary w-100 w-lg-50 mb-8 py-2",to:"/CartOrderersInformation"},{default:m(()=>[d("前往結帳")]),_:1})])],512)])])])):b("",!0),o.carts.length?b("",!0):(n(),r("div",Re,[e("div",Ie,[e("div",Ee,[Fe,Ke,c(u,{class:"btn btn-primary py-2",to:"/products"},{default:m(()=>[d("來去逛逛")]),_:1})])])]))],64)}const Oe=g(N,[["render",Ge]]),We={data(){return{PurchaseStepperIsActive:"cart"}},components:{PurchaseStepper:$,CartCard:Oe},mounted(){}},Je={class:"py-md-13 py-9 background-position-center background-size-corver",style:{"background-image":"url('https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1689994205093.jpg')","background-color":"var(--bs-primary)"}},Qe={class:"container d-flex flex-column align-items-center"},Xe=e("h2",{class:"fw-bold fs-lg-10 fs-1 mb-3 text-white",style:{"font-family":"var(--bs-NotoSerif-TC)"}}," 購物車 ",-1),Ye={class:"fs-6"},Ze={"aria-label":"breadcrumb"},et={class:"breadcrumb mb-0 text-white text-center"},tt={class:"breadcrumb-item"},ot=e("li",{class:"breadcrumb-item active","aria-current":"page"},"購物車",-1),st={class:"container mt-5 mt-md-7 mb-10"};function nt(o,s,C,w,i,k){const h=p("RouterLink"),u=p("PurchaseStepper"),t=p("CartCard");return n(),r(_,null,[e("div",Je,[e("div",Qe,[Xe,e("div",Ye,[e("nav",Ze,[e("ol",et,[e("li",tt,[c(h,{class:"text-decoration-none text-white",to:"/"},{default:m(()=>[d("首頁")]),_:1})]),ot])])])])]),e("div",st,[c(u,{isActive:i.PurchaseStepperIsActive},null,8,["isActive"]),c(t)])],64)}const ut=g(We,[["render",nt]]);export{ut as default};
