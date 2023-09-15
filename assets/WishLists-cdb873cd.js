import{C as k}from"./ContainerLoading-aaee135f.js";import{m as C,h as L,_ as f,r,o as e,c as n,b as a,a as t,w as l,d as i,F as m,j as p,t as d,l as u}from"./index-0385e6b2.js";import{c as g}from"./cartAndWishList-3127d29d.js";import"./index-5773256a.js";import"./sweetalert2.all-c5347910.js";const $={data(){return{container:this.$refs.loadingContainer}},components:{ContainerLoading:k},methods:{...C(g,["addToCart","removeWishListProduct"])},computed:{...L(g,["carts","wishList","wishListAddStatus","isLoading"])}},S={class:"vl-parent",ref:"loading-container"},B={key:0,class:"border border-2 border-secondary px-5 py-5"},A={class:"d-flex justify-content-center align-items-center"},V={class:"d-flex flex-column flex-md-row align-items-center align-items-md-start py-7"},W=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"130",height:"130",fill:"currentColor",class:"bi bi-bag-heart-fill text-secondary me-md-4 me-2 mb-3 mb-md-0",viewBox:"0 0 16 16"},[t("path",{d:"M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5ZM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1Zm0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"})],-1),N={class:"d-flex flex-column justify-content-center align-items-center align-items-md-start"},T=t("h2",{class:"fw-bold fs-10 fs-md-11 text-secondary mb-1"},"OOPS!!",-1),Z=t("p",{class:"fw-bold fs-5 fs-md-3 text-secondary mb-3"},"您的願望清單尚未擁有任何商品",-1),D={key:1},P={class:"d-none d-lg-block"},q={class:"border border-2 border-secondary px-5 py-5"},z={class:"table table-striped align-middle mb-3"},M=t("thead",null,[t("tr",null,[t("th",{scope:"col"}),t("th",{scope:"col"},"商品名稱"),t("th",{scope:"col"},"價格"),t("th",{class:"text-center",scope:"col"},"庫存狀態"),t("th",{class:"text-center",scope:"col"},"加入購物車"),t("th",{class:"text-center",scope:"col"},"刪除")])],-1),F={scope:"row"},O=["src","alt"],j={class:"text-center"},H={key:0,class:"bg-pink px-2 py-1 text-white"},R={key:1,class:"bg-success px-2 py-1 text-white"},U={class:"text-center"},X=["onClick","disabled"],G=t("i",{class:"bi bi-cart3 me-2"},null,-1),I={class:"text-center"},Q=["onClick"],Y=t("i",{class:"bi bi-trash3-fill fs-5"},null,-1),E=[Y],K={class:"d-block d-lg-none"},J={class:"border border-2 border-secondary px-5 py-5"},tt={class:"table table-striped align-middle mb-3"},st=t("thead",null,[t("thead",null,[t("tr",null,[t("th",{scope:"col"})])])],-1),et={scope:"row"},nt={class:"d-flex flex-column align-items-center py-4 px-2"},ot=["src","alt"],it={class:"fw-normal fs-5"},at={class:"fw-normal mb-3"},ct={key:0,class:"text-white bg-pink px-2 py-1 mb-3"},lt={key:1,class:"text-white bg-success px-2 py-1 mb-3"},dt=["onClick","disabled"],rt=t("i",{class:"bi bi-cart3 me-2"},null,-1),_t=["onClick"],ht=t("i",{class:"bi bi-trash3-fill"},null,-1);function mt(o,v,y,x,b,w){const _=r("ContainerLoading"),c=r("router-link");return e(),n("div",S,[a(_,{isLoading:o.isLoading,container:b.container},null,8,["isLoading","container"]),o.wishList.length===0?(e(),n("div",B,[t("div",A,[t("div",V,[W,t("div",N,[T,Z,a(c,{class:"btn btn-primary btn-lg align-self-center align-self-md-end",to:"/products"},{default:l(()=>[i("來去逛逛")]),_:1})])])])])):(e(),n("div",D,[t("div",P,[t("div",q,[t("table",z,[M,t("tbody",null,[(e(!0),n(m,null,p(o.wishList,s=>(e(),n("tr",{key:s.id},[t("td",F,[t("img",{class:"img-fluid",src:s.imageUrl,alt:s.title,width:"100",height:"100"},null,8,O)]),t("td",null,[a(c,{to:`/product/${s.id}`,class:"text-decoration-none link-dark"},{default:l(()=>[i(d(s.title),1)]),_:2},1032,["to"])]),t("td",null,d(s.price),1),t("td",j,[!s.is_enabled||s.quantity===0?(e(),n("span",H,"缺貨")):(e(),n("span",R,"有貨"))]),t("td",U,[t("button",{onClick:h=>o.addToCart(s.id,1,s),class:"btn btn-primary",disabled:!s.is_enabled||s.quantity===0},[G,i("加入購物車 ")],8,X)]),t("td",I,[t("a",{onClick:u(h=>o.removeWishListProduct(s),["prevent"]),href:""},E,8,Q)])]))),128))])])])]),t("div",K,[t("div",J,[t("table",tt,[st,t("tbody",null,[(e(!0),n(m,null,p(o.wishList,s=>(e(),n("tr",{key:s.id},[t("th",et,[t("div",nt,[a(c,{to:`/product/${s.id}`},{default:l(()=>[t("img",{class:"img-fluid mb-3",src:s.imageUrl,alt:s.title,width:"200",height:"200"},null,8,ot)]),_:2},1032,["to"]),a(c,{to:`/product/${s.id}`,class:"text-decoration-none link-dark"},{default:l(()=>[t("span",it,d(s.title),1)]),_:2},1032,["to"]),t("span",at,[i("NT$"),t("span",null,d(s.price),1)]),!s.is_enabled||s.quantity===0?(e(),n("span",ct,"缺貨")):(e(),n("span",lt,"有貨")),t("button",{onClick:h=>o.addToCart(s.id,1,s),class:"btn btn-primary w-100 mb-2",disabled:!s.is_enabled||s.quantity===0},[rt,i("加入購物車 ")],8,dt),t("button",{onClick:u(h=>o.removeWishListProduct(s),["prevent"]),class:"btn btn-outline-secondary w-100 mb-3"},[ht,i("刪除 ")],8,_t)])])]))),128))])])])])]))],512)}const bt=f($,[["render",mt]]),pt={data(){return{}},components:{WishListsCard:bt}},ut={class:"py-md-13 py-9 background-position-center background-size-corver",style:{"background-image":"url('https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1689994205093.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=RLJFHdzxV1ZFvcHobhOCdJFG71iTXspxuTuLv3LAuadLgMdzvO3ebfDIxgaswSy6G8SbPxVDbqyApt2wU2it78WeORuUUxdwMwTXV4qzswD20QiHhMvd3AZgGH6OcmLl%2BSP1YQilwzCQZlKgSckbe6LYnCKT2E7vj3iO9qTAsfoXM3FYNRfGl4p3Z11%2BRPSu5PDI5Wjg%2BSnmgeYzn3LLZfqyWN%2BHKVesfnxsDx4s6CkU%2ByX97aX4%2FIZiE89I6SwCw4DvMsNctfvaurRt6YyJKQ3NAB%2BBkmC1pBr0ARDd8C%2BWkxQXNVbaVkvu9PdgirS2CneyZtgonvceaSs5mSNnZA%3D%3D')","background-color":"var(--bs-primary)"}},gt={class:"container d-flex flex-column align-items-center"},ft=t("h2",{class:"fw-bold fs-lg-10 fs-1 mb-3 text-white",style:{"font-family":"var(--bs-NotoSerif-TC)"}}," 願望清單 ",-1),vt={class:"fs-6"},yt={"aria-label":"breadcrumb"},xt={class:"breadcrumb mb-0 text-white text-center"},wt={class:"breadcrumb-item"},kt=t("li",{class:"breadcrumb-item active","aria-current":"page"},"願望清單",-1),Ct={class:"container mt-8 mb-14"};function Lt(o,v,y,x,b,w){const _=r("routerLink"),c=r("WishListsCard");return e(),n(m,null,[t("div",ut,[t("div",gt,[ft,t("div",vt,[t("nav",yt,[t("ol",xt,[t("li",wt,[a(_,{class:"text-decoration-none text-white",to:"/"},{default:l(()=>[i("首頁")]),_:1})]),kt])])])])]),t("div",Ct,[a(c)])],64)}const Wt=f(pt,[["render",Lt]]);export{Wt as default};
