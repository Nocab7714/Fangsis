import{_ as g,o as n,c,a as t,q as l,l as m,F as P,j as V,t as v,p as k,n as $,m as I,h as S,r as u,b as _,w as x,i as b,d as f}from"./index-0385e6b2.js";import{C as B}from"./ContainerLoading-aaee135f.js";import{c as L}from"./cartAndWishList-3127d29d.js";import"./index-5773256a.js";import"./sweetalert2.all-c5347910.js";const D={data(){return{}},props:["getProducts","categoryValue"]},E={class:"list-group"},M=t("li",{class:"list-unstyled"},"全部商品",-1),N=[M],F=t("li",{class:"list-unstyled"},"禮盒系列",-1),R=[F],z=t("li",{class:"list-unstyled"},"沐浴用品",-1),U=[z],j=t("li",{class:"list-unstyled"},"室內香氛",-1),O=[j];function X(s,o,e,h,r,d){return n(),c("ul",E,[t("button",{type:"button",class:l(["list-group-item list-group-item-action",{active:e.categoryValue===""}]),onClick:o[0]||(o[0]=a=>e.getProducts(1))},N,2),t("button",{type:"button",class:l(["list-group-item list-group-item-action",{active:e.categoryValue==="giftBox"}]),onClick:o[1]||(o[1]=a=>e.getProducts(1,"giftBox"))},R,2),t("button",{type:"button",class:l(["list-group-item list-group-item-action",{active:e.categoryValue==="bathAndBodyProducts"}]),onClick:o[2]||(o[2]=a=>e.getProducts(1,"bathAndBodyProducts"))},U,2),t("button",{type:"button",class:l(["list-group-item list-group-item-action",{active:e.categoryValue==="fragrance"}]),onClick:o[3]||(o[3]=a=>e.getProducts(1,"fragrance"))},O,2)])}const q=g(D,[["render",X]]),J={data(){return{}},props:["getProducts","categoryValue"],methods:{classifyProductsMobile(s){const o=s.target.value;this.getProducts(1,o)}}},Q=t("option",{value:"",selected:""},"全部商品",-1),Y=t("option",{value:"giftBox"},"禮盒系列",-1),H=t("option",{value:"bathAndBodyProducts"},"沐浴用品",-1),W=t("option",{value:"fragrance"},"室內香氛",-1),Z=[Q,Y,H,W];function K(s,o,e,h,r,d){return n(),c("select",{class:"form-select mb-5 fs-6",name:"product-categories",onChange:o[0]||(o[0]=a=>d.classifyProductsMobile(a))},Z,32)}const G=g(J,[["render",K]]);const tt={data(){return{}},props:["getProducts","categoryValue","page"]},C=s=>(k("data-v-649feb95"),s=s(),$(),s),et={class:"d-flex justify-content-center"},st={"aria-label":"Page navigation "},ot={class:"pagination pagination-sm"},at=C(()=>t("span",{"aria-hidden":"true"},[t("i",{class:"bi bi-chevron-left"})],-1)),it=[at],nt=["onClick"],ct=C(()=>t("span",{"aria-hidden":"true"},[t("i",{class:"bi bi-chevron-right"})],-1)),rt=[ct];function dt(s,o,e,h,r,d){return n(),c("div",et,[t("nav",st,[t("ul",ot,[t("li",{class:l(["page-item",{disabled:!e.page.has_pre}])},[t("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:o[0]||(o[0]=m(a=>e.getProducts(e.page.current_page-1,e.categoryValue),["prevent"]))},it)],2),(n(!0),c(P,null,V(e.page.total_pages,a=>(n(),c("li",{class:l(["page-item",{active:a===e.page.current_page}]),key:a+"page"},[t("a",{class:"page-link",href:"#",onClick:m(p=>e.getProducts(a,e.categoryValue),["prevent"])},v(a),9,nt)],2))),128)),t("li",{class:l(["page-item",{disabled:!e.page.has_next}])},[t("a",{class:"page-link",href:"#","aria-label":"Next",onClick:o[1]||(o[1]=m(a=>e.getProducts(e.page.current_page+1,e.categoryValue),["prevent"]))},rt)],2)])])])}const lt=g(tt,[["render",dt],["__scopeId","data-v-649feb95"]]);const ut={data(){return{container:this.$refs.loadingContainer}},props:["categoryProducts","categoryValue","getProducts","page","isLoading"],components:{PaginationComponent:lt,ContainerLoading:B},methods:{...I(L,["addToCart","addWishList","wishListActive"])},computed:{...S(L,["carts","wishList","wishListAddStatus","spinnerLoading"])}},w=s=>(k("data-v-34080b08"),s=s(),$(),s),_t={class:"vl-parent",ref:"loading-container"},gt={key:0},ht=w(()=>t("h2",{class:"fs-3 text-secondary text-center mt-10 mb-20"},"很抱歉! 找不到符合的商品",-1)),pt=[ht],mt={key:1,class:"row g-md-4 g-3"},yt={class:"card border-0 h-100 position-relative"},bt=["onClick"],vt=w(()=>t("i",{class:"bi bi-heart position-absolute"},null,-1)),ft={class:"position-relative"},Pt={key:0,class:"position-absolute p-2 bg-pink z-index-4 fs-md-5 fs-7 text-white top-0"},kt={key:1,class:"product-sell-out text-center text-white fs-3"},$t={class:"img-hidden"},Lt=["src","alt"],Vt={class:"card-title text-black fs-6 mb-0 mt-2"},xt={class:"card-text text-black fs-6 mb-2"},Ct={class:"ms-2"},wt=["onClick","disabled"],Tt={key:0,class:"spinner-border-sm spinner-border",role:"status","aria-hidden":"true"},At={class:"mt-7"};function It(s,o,e,h,r,d){const a=u("ContainerLoading"),p=u("router-link"),y=u("PaginationComponent");return n(),c("div",_t,[_(a,{isLoading:e.isLoading,container:r.container},null,8,["isLoading","container"]),e.categoryProducts.length===0?(n(),c("div",gt,pt)):(n(),c("div",mt,[(n(!0),c(P,null,V(e.categoryProducts,i=>(n(),c("div",{key:i.id,class:"col-lg-4 col-6"},[t("div",yt,[t("a",{class:"wishLists-btn fs-4 link-light",href:"",onClick:m(A=>s.addWishList(i),["prevent"])},[t("i",{class:l(["bi bi-heart-fill position-relative",{"heart-fill-active":s.wishListActive(i)}])},null,2),vt],8,bt),_(p,{class:"product-link text-decoration-none",to:`/product/${i.id}`},{default:x(()=>[t("div",ft,[i.is_hotSale?(n(),c("span",Pt,"HOT")):b("",!0),i.quantity===0?(n(),c("div",kt," 已售完 ")):b("",!0),t("div",$t,[t("img",{class:"rounded-0 img-fluid cover-fit",src:i.imageUrl,alt:i.title,width:"351",height:"320",style:{"background-color":"var(--bs-secondary)"}},null,8,Lt)])]),t("h3",Vt,v(i.title),1),t("p",xt,[f(" NT$"),t("span",Ct,v(i.price),1)])]),_:2},1032,["to"]),t("button",{class:"btn btn-sm btn-outline-primary w-100 rounded-0 mt-auto",type:"button",onClick:A=>s.addToCart(i.id),disabled:i.quantity===0||s.spinnerLoading===i.id},[s.spinnerLoading===i.id?(n(),c("span",Tt)):b("",!0),f(" 加入購物車 ")],8,wt)])]))),128))])),t("div",At,[_(y,{getProducts:e.getProducts,categoryValue:e.categoryValue,page:e.page},null,8,["getProducts","categoryValue","page"])])],512)}const St=g(ut,[["render",It],["__scopeId","data-v-34080b08"]]);const{VITE_APP_URL:Bt,VITE_APP_PATH:Dt}={VITE_APP_URL:"https://vue3-course-api.hexschool.io",VITE_APP_PATH:"peihanwang-hexschool",BASE_URL:"/Fangsis/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},Et={data(){return{products:[],categoryProducts:[],categoryValue:"",page:{},isLoading:!1}},components:{ProductCategoryDesktop:q,ProductCategoryMobile:G,ProductList:St},methods:{getProducts(s=1,o=""){this.isLoading=!0,this.$http.get(`${Bt}/v2/api/${Dt}/products?page=${s}&category=${o}`).then(e=>{this.products=e.data.products,this.categoryProducts=this.products,this.categoryValue=o,this.page=e.data.pagination,this.scrollToTop(),this.isLoading=!1}).catch(e=>{console.log(e),this.isLoading=!1})},scrollToTop(){window.scrollTo(0,0)}},mounted(){this.getProducts()}},T=s=>(k("data-v-1f9c8951"),s=s(),$(),s),Mt={class:"py-md-13 py-9 background-position-center background-size-corver",style:{"background-image":"url('https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1689994083390.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=fbh9MvNqSmL%2Bs8EQ1sukc8Yxip6M03Xj1r81k1C6L5IOsrr3RQLp%2FyNctt%2FSnGmgsE0V8RIKSwrKtspQN0JmEynIvezjrXu2sWKg8kMy7TUAU8VlafwLiUQWBRpYITL6JbUm%2BOc3smTAnJlxNewDMi8DYwdiqJ9DAaZfm2BS9JO9vgXAia%2Bwxd3YxrX%2F4RzJ3zQtdiQvZI4bwaptLgyX0Lir6dwimbzaq8wlRLlnSjU2g%2B286D2yMkjCNKl39Cg%2BZi9wTyHCIlPpf%2FnD3jpZkksFI%2FYunG8EaFvVUREZX4iXTgtaTMoO1fbFXl2wNy1sMAlLyxV8vbvuh535OknYHw%3D%3D')","background-color":"var(--bs-primary)"}},Nt={class:"container d-flex flex-column align-items-center"},Ft=T(()=>t("h2",{class:"fw-bold fs-lg-10 fs-1 mb-3 text-white",style:{"font-family":"var(--bs-NotoSerif-TC)"}}," 全站商品 ",-1)),Rt={class:"fs-6"},zt={"aria-label":"breadcrumb"},Ut={class:"breadcrumb mb-0 text-white text-center"},jt={class:"breadcrumb-item"},Ot=T(()=>t("li",{class:"breadcrumb-item active","aria-current":"page"},"全站商品",-1)),Xt={class:"container my-6"},qt={class:"row"},Jt={class:"col-lg-3 d-none d-lg-block sticky-top-customize"},Qt={class:"d-block d-lg-none"},Yt={class:"col-lg-9"};function Ht(s,o,e,h,r,d){const a=u("routerLink"),p=u("ProductCategoryDesktop"),y=u("ProductCategoryMobile"),i=u("ProductList");return n(),c(P,null,[t("div",Mt,[t("div",Nt,[Ft,t("div",Rt,[t("nav",zt,[t("ol",Ut,[t("li",jt,[_(a,{class:"text-decoration-none text-white",to:"/"},{default:x(()=>[f("首頁")]),_:1})]),Ot])])])])]),t("div",Xt,[t("div",qt,[t("div",Jt,[_(p,{getProducts:d.getProducts,categoryValue:r.categoryValue},null,8,["getProducts","categoryValue"])]),t("div",Qt,[_(y,{getProducts:d.getProducts,categoryValue:r.categoryValue},null,8,["getProducts","categoryValue"])]),t("div",Yt,[_(i,{categoryProducts:r.categoryProducts,categoryValue:r.categoryValue,getProducts:d.getProducts,page:r.page,isLoading:r.isLoading},null,8,["categoryProducts","categoryValue","getProducts","page","isLoading"])])])])],64)}const ee=g(Et,[["render",Ht],["__scopeId","data-v-1f9c8951"]]);export{ee as default};
