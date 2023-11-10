import{_ as p,r as h,o as n,c as i,a as s,b as t,w as o,d as c,e as F,f as M,m as b,g as y,h as d,F as S,i as N,t as g,j as $,k as x,T as L,p as C,l as I}from"./index-2a0adc1b.js";import{c as O}from"./cartAndWishList-aabfe786.js";import{C as V}from"./ContainerLoading-130c7d4d.js";import{O as W}from"./bootstrap.esm-bd5fc0e8.js";import"./sweetalert2.all-c9020805.js";import"./Toast-ce5dd591.js";import"./index-702813a4.js";const j="/Fangsis/assets/banai-logo-111989b5.svg",G="/Fangsis/assets/smallstepsgreen-logo-fd856d34.svg",B="/Fangsis/assets/logo-fangsis-white-295cfb9a.svg",U={data(){return{logoSvgUrl:{fangsisWhiteLogo3x:B,banaiLogo:j,smallstepsgreenLogo:G}}}},Y={class:"bg-primary"},E={class:"container"},D={class:"py-lg-55 pt-4 pb-5"},z={class:"d-flex mb-lg-9 mb-55 flex-column flex-lg-row align-items-lg-start align-items-center"},P=["data"],Q={class:"list-unstyled text-center d-flex mb-0 flex-column flex-lg-row"},A={class:"mx-lg-7 mx-0 mb-lg-0 mb-4"},H={class:"mx-lg-7 mx-0 mb-lg-0 mb-4"},X={class:"mx-lg-7 mx-0"},Z=s("span",{class:"text-white"},"合作夥伴",-1),K={class:"list-unstyled mt-lg-5 mt-4 d-lg-block d-flex"},R={class:"py-lg-25 py-0 me-2 me-lg-0"},J={class:"text-decoration-none link-light",href:"https://smallstepsgreen.com/",target:"_blank"},q=s("span",{class:"d-lg-block d-none"},"綠印生活",-1),ss=["data"],as={class:"py-lg-25 py-0 ms-2 ms-lg-0"},ts={class:"text-decoration-none link-light",href:"https://www.facebook.com/banai.savon/?locale=zh_TW",target:"_blank"},es=s("span",{class:"d-lg-block d-none"},"白娜Banai",-1),os=["data"],ns=F('<ul class="d-flex justify-content-between align-items-center flex-column flex-lg-row list-unstyled mb-0" style="color:var(--bs-gray-500);"><li class="mb-lg-0 mb-3 order-2 order-lg-1 text-center"> 僅個人作品練習，無任何商業用途 </li><li class="order-3 order-lg-2 text-center"> Copyright © 2023 HikinigTogether.All rights reserved. </li><li class="mb-lg-0 mb-3 order-1 order-lg-3"><a class="me-4" href="https://www.instagram.com/fangsis_fragrance/"><i class="bi bi-instagram fs-4" style="color:var(--bs-gray-500);"></i></a><a class="me-4" href="https://www.facebook.com/fangsisfragrance/"><i class="bi bi-facebook fs-4" style="color:var(--bs-gray-500);"></i></a><a href="mailto:fangsisfragrance@gmail.com"><i class="bi bi-envelope-fill fs-4" style="color:var(--bs-gray-500);"></i></a></li></ul>',1);function ls(a,l,k,w,r,_){const e=h("router-link");return n(),i("footer",Y,[s("div",E,[s("div",D,[s("div",z,[s("object",{class:"me-lg-7 me-0 mb-7 mb-lg-0 img-fluid",type:"image/svg+xml",data:r.logoSvgUrl.fangsisWhiteLogo3x,width:"240",height:"80"},null,8,P),s("ul",Q,[s("li",A,[t(e,{class:"link-light text-decoration-none",to:"/PrivacyPolicy"},{default:o(()=>[c("隱私權服務條款")]),_:1})]),s("li",H,[t(e,{class:"link-light text-decoration-none",to:"/ShoppingGuidelines"},{default:o(()=>[c("購物流程與常見Q&A ")]),_:1})]),s("li",X,[Z,s("ul",K,[s("li",R,[s("a",J,[q,s("object",{class:"d-lg-none d-block img-fluid",type:"image/svg+xml",data:r.logoSvgUrl.smallstepsgreenLogo,width:"70",height:"70",style:{"pointer-events":"none"}},null,8,ss)])]),s("li",as,[s("a",ts,[es,s("object",{class:"d-lg-none d-block img-fluid",type:"image/svg+xml",data:r.logoSvgUrl.banaiLogo,width:"70",height:"70",style:{"pointer-events":"none"}},null,8,os)])])])])])]),ns])])])}const is=p(U,[["render",ls]]),u=M("offcanvasStore",{state:()=>({cartOffcanvasIsShow:!1,menuOffcanvasIsShow:!1}),actions:{cartOffcanvasToggle(){this.cartOffcanvasIsShow=!this.cartOffcanvasIsShow},resetCartOffcanvasIsShowStatus(){this.cartOffcanvasIsShow=!1},menuOffcanvasToggle(){this.menuOffcanvasIsShow=!this.menuOffcanvasIsShow},resetMenuOffcanvasIsShowStatus(){this.menuOffcanvasIsShow=!1}},getters:{}}),cs={data(){return{cartOffcanvas:{},container:this.$refs.LoadingContainer}},components:{ContainerLoading:V},watch:{cartOffcanvasIsShow(){return this.cartOffcanvasIsShow?this.cartOffcanvas.show():this.cartOffcanvas.hide()}},methods:{...b(O,["getCart","pullLocalStorageToWishList","removeCartProduct"]),...b(u,["cartOffcanvasToggle","resetCartOffcanvasIsShowStatus"])},mounted(){this.getCart(),this.cartOffcanvas=new W(this.$refs.cartOffcanvas),this.$refs.cartOffcanvas.addEventListener("hide.bs.offcanvas",a=>{this.resetCartOffcanvasIsShowStatus()})},computed:{...y(O,["carts","total","cartOffcanvasIsLoading"]),...y(u,["cartOffcanvasIsShow"])}},rs={class:"offcanvas offcanvas-end",tabindex:"-1",id:"cartOffcanvas","aria-labelledby":"offcanvasWithBackdropLabel",ref:"cartOffcanvas"},ds={class:"offcanvas-header"},fs=s("h2",{class:"offcanvas-title fs-3",id:"cartOffcanvas"},"購物車",-1),gs={class:"offcanvas-body"},hs={class:"vl-parent",ref:"loading-container"},vs=s("div",{class:"border border-1 border-secondary border-top-0 border-end-0 border-start-0 mb-4"},null,-1),ms={class:"list-unstyled"},_s={key:0,class:"d-flex flex-column align-items-center mb-5"},bs=s("h3",{class:"fs-5 mb-3"},"您的購物車目前沒有任何商品!",-1),us={class:"d-flex align-items-center"},ps=["src","alt"],ks={class:"ms-3"},ws={class:"fs-6"},ys={class:"mb-0"},Os=["onClick"],$s=s("i",{class:"bi bi-trash3-fill fs-5"},null,-1),Ts=[$s],Ls=s("div",{class:"border border-1 border-secondary border-top-0 border-end-0 border-start-0 mb-4"},null,-1),Ss={key:0,class:"d-flex justify-content-between mb-7"},xs=s("span",{class:"fs-5"},"總金額",-1),Cs={class:"fs-5"};function Is(a,l,k,w,r,_){const e=h("ContainerLoading"),m=h("router-link");return n(),i("div",rs,[s("div",ds,[fs,s("button",{type:"button",class:"btn-close text-reset","aria-label":"Close",onClick:l[0]||(l[0]=(...f)=>a.cartOffcanvasToggle&&a.cartOffcanvasToggle(...f))})]),s("div",gs,[s("div",hs,[vs,t(e,{isLoading:a.cartOffcanvasIsLoading,container:r.container},null,8,["isLoading","container"]),s("ul",ms,[a.carts.length?d("",!0):(n(),i("div",_s,[bs,t(m,{to:"/products",class:"btn btn-primary px-4",onClick:a.cartOffcanvasToggle},{default:o(()=>[c("來去購物")]),_:1},8,["onClick"])])),(n(!0),i(S,null,N(a.carts,f=>(n(),i("li",{key:f.product.id+1,class:"d-flex align-items-center justify-content-between mb-3"},[s("div",us,[s("img",{class:"img-fluid",src:f.product.imageUrl,alt:f.product.id,width:"100",height:"100"},null,8,ps),s("div",ks,[s("h3",ws,g(f.product.title),1),s("p",ys,[s("span",null,g(f.qty),1),c("x $"),s("span",null,g(f.product.price),1)])])]),s("a",{class:"ms-6 me-3",href:"",onClick:$(v=>a.removeCartProduct(f.id),["prevent"])},Ts,8,Os)]))),128))]),Ls],512),a.carts.length?(n(),i("div",Ss,[xs,s("span",Cs,[c("$ "),s("span",null,g(a.total),1)])])):d("",!0),a.carts.length?(n(),x(m,{key:1,class:"btn btn-primary w-100",to:"/CartView",onClick:a.cartOffcanvasToggle},{default:o(()=>[c("查看購物車")]),_:1},8,["onClick"])):d("",!0)])],512)}const Ws=p(cs,[["render",Is]]),Bs={data(){return{menuOffcanvas:{}}},watch:{menuOffcanvasIsShow(){return this.menuOffcanvasIsShow?this.menuOffcanvas.show():this.menuOffcanvas.hide()}},methods:{...b(u,["menuOffcanvasToggle","resetMenuOffcanvasIsShowStatus"])},mounted(){this.menuOffcanvas=new W(this.$refs.menuOffcanvas),this.$refs.menuOffcanvas.addEventListener("hide.bs.offcanvas",a=>{this.resetMenuOffcanvasIsShowStatus()})},computed:{...y(u,["menuOffcanvasIsShow"])}},Fs={class:"offcanvas offcanvas-end w-100",tabindex:"-1",id:"menuOffcanvas","aria-labelledby":"offcanvasNavbar",ref:"menuOffcanvas"},Ms={class:"offcanvas-header justify-content-end"},Ns={class:"offcanvas-body"},Vs={class:"navbar-nav mb-2 mb-lg-0 ms-auto align-items-center"},js={class:"nav-item my-2"},Gs={class:"nav-item my-2"},Us={class:"nav-item my-2"},Ys={class:"nav-item my-2"};function Es(a,l,k,w,r,_){const e=h("router-link");return n(),i("div",Fs,[s("div",Ms,[s("button",{type:"button",class:"btn-close text-reset",onClick:l[0]||(l[0]=(...m)=>a.menuOffcanvasToggle&&a.menuOffcanvasToggle(...m))})]),s("div",Ns,[s("ul",Vs,[s("li",js,[t(e,{class:"nav-link mx-3 link-dark","aria-current":"page",to:"/about",onClick:a.menuOffcanvasToggle},{default:o(()=>[c("關於芳心")]),_:1},8,["onClick"])]),s("li",Gs,[t(e,{class:"nav-link mx-3 link-dark",to:"/products",onClick:a.menuOffcanvasToggle},{default:o(()=>[c("全部商品")]),_:1},8,["onClick"])]),s("li",Us,[t(e,{class:"nav-link mx-3 link-dark",to:"/OrderSearch",onClick:a.menuOffcanvasToggle},{default:o(()=>[c("訂單查詢")]),_:1},8,["onClick"])]),s("li",Ys,[t(e,{class:"nav-link mx-3 link-dark",to:"/MemberLogin",onClick:a.menuOffcanvasToggle},{default:o(()=>[c(" 會員中心 ")]),_:1},8,["onClick"])])])])],512)}const Ds=p(Bs,[["render",Es]]),zs="/Fangsis/assets/logo-fangsis-white-120x40-cbb0e501.svg",Ps="/Fangsis/assets/logo-fangsis-black-6d53822e.svg",Qs="/Fangsis/assets/logo-fangsis-black-120x40-8c3a7d30.svg";const As={data(){return{isTop:!0,logoSvgUrl:{fangsisWhiteLogo3x:B,fangsisWhiteLogo2x:zs,fangsisBlackLogo3x:Ps,fangsisBlackLogo2x:Qs}}},components:{CartOffcanvas:Ws,MenuOffcanvas:Ds},methods:{handleScroll(){this.isTop=window.scrollY===0},...b(O,["getCart","pullLocalStorageToWishList"]),...b(u,["cartOffcanvasToggle","menuOffcanvasToggle"])},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll)},mounted(){window.addEventListener("scroll",this.handleScroll),this.getCart(),this.pullLocalStorageToWishList()},computed:{...y(O,["carts","wishList"]),...y(u,["cartOffcanvasIsShow","menuOffcanvasIsShow"])}},T=a=>(C("data-v-44a4b0af"),a=a(),I(),a),Hs={key:0,class:"navbar navbar-expand-lg navbar-light fixed-top"},Xs={class:"container"},Zs=["data"],Ks=["data"],Rs={class:"ms-auto d-flex"},Js={class:"bi bi-heart-fill position-relative"},qs={key:0,class:"navbar-badge fs-7 fst-normal"},sa={class:"bi bi-bag-fill position-relative"},aa={key:0,class:"navbar-badge fs-7 fst-normal"},ta=T(()=>s("i",{class:"bi bi-list fs-3 text-white"},null,-1)),ea=[ta],oa={class:"collapse navbar-collapse",id:"navbarNav"},na={class:"navbar-nav mb-2 mb-lg-0 ms-auto align-items-center"},la={class:"nav-item my-2"},ia={class:"nav-item my-2"},ca={class:"nav-item my-2"},ra={class:"nav-item d-none d-lg-block"},da={class:"bi bi-heart-fill position-relative fs-4"},fa={key:0,class:"navbar-badge fs-7 fst-normal"},ga={class:"nav-item d-none d-lg-block"},ha={class:"bi bi-bag-fill position-relative"},va={key:0,class:"navbar-badge fs-7 fst-normal"},ma={class:"nav-item d-none d-lg-block"},_a=T(()=>s("i",{class:"bi bi-person-fill"},null,-1)),ba={class:"nav-item d-block d-lg-none my-2"},ua={key:0,class:"navbar navbar-expand-lg bg-white navbar-dark shadow fixed-top"},pa={class:"container"},ka=["data"],wa=["data"],ya={class:"ms-auto d-flex"},Oa={class:"bi bi-heart-fill position-relative"},$a={key:0,class:"navbar-badge fs-7 fst-normal"},Ta={class:"bi bi-bag-fill position-relative"},La={key:0,class:"navbar-badge fs-7 fst-normal"},Sa=T(()=>s("i",{class:"bi bi-list fs-3 text-primary"},null,-1)),xa=[Sa],Ca={class:"collapse navbar-collapse",id:"navbarNav"},Ia={class:"navbar-nav mb-2 mb-lg-0 ms-auto align-items-center"},Wa={class:"nav-item my-2"},Ba={class:"nav-item my-2"},Fa={class:"nav-item my-2"},Ma={class:"nav-item d-none d-lg-block"},Na={class:"bi bi-heart-fill position-relative fs-4"},Va={key:0,class:"navbar-badge fs-7 fst-normal"},ja={class:"nav-item d-none d-lg-block"},Ga={class:"bi bi-bag-fill position-relative"},Ua={key:0,class:"navbar-badge fs-7 fst-normal"},Ya={class:"nav-item d-none d-lg-block"},Ea=T(()=>s("i",{class:"bi bi-person-fill"},null,-1)),Da={class:"nav-item d-block d-lg-none my-2"};function za(a,l,k,w,r,_){const e=h("router-link"),m=h("CartOffcanvas"),f=h("MenuOffcanvas");return n(),i(S,null,[t(L,{name:"fade"},{default:o(()=>[r.isTop?(n(),i("nav",Hs,[s("div",Xs,[t(e,{class:"navbar-brand",to:"/"},{default:o(()=>[s("object",{class:"logo-desktop img-fluid",type:"image/svg+xml",data:r.logoSvgUrl.fangsisWhiteLogo3x,width:"192",height:"64",style:{"pointer-events":"none"}},null,8,Zs),s("object",{class:"logo-mobile img-fluid",type:"image/svg+xml",data:r.logoSvgUrl.fangsisWhiteLogo2x,width:"120",height:"40",style:{"pointer-events":"none"}},null,8,Ks)]),_:1}),s("div",Rs,[t(e,{class:"nav-link fs-5 link-light d-block d-lg-none me-3",to:"/WishLists"},{default:o(()=>[s("i",Js,[a.wishList.length>0?(n(),i("span",qs,g(a.wishList.length),1)):d("",!0)])]),_:1}),t(e,{class:"nav-link fs-5 link-light d-block d-lg-none me-3",to:"/CartView"},{default:o(()=>[s("i",sa,[a.carts.length>0?(n(),i("span",aa,g(a.carts.length),1)):d("",!0)])]),_:1}),s("button",{class:"navbar-toggler",type:"button","aria-controls":"offcanvasNavbar",onClick:l[0]||(l[0]=(...v)=>a.menuOffcanvasToggle&&a.menuOffcanvasToggle(...v))},ea)]),s("div",oa,[s("ul",na,[s("li",la,[t(e,{class:"nav-link mx-3 link-light navbar-link-white-hover","active-class":"active-link-white","aria-current":"page",to:"/about"},{default:o(()=>[c("關於芳心")]),_:1})]),s("li",ia,[t(e,{class:"nav-link mx-3 link-light navbar-link-white-hover","active-class":"active-link-white",to:"/products"},{default:o(()=>[c("全部商品")]),_:1})]),s("li",ca,[t(e,{class:"nav-link mx-3 link-light navbar-link-white-hover","active-class":"active-link-white",to:"/OrderSearch"},{default:o(()=>[c("訂單查詢")]),_:1})]),s("li",ra,[t(e,{class:"nav-link ms-4 me-1 link-light",to:"/WishLists"},{default:o(()=>[s("i",da,[a.wishList.length>0?(n(),i("span",fa,g(a.wishList.length),1)):d("",!0)])]),_:1})]),s("li",ga,[s("a",{class:"nav-link fs-4 me-1 link-light","aria-controls":"offcanvasWithBackdrop",href:"",onClick:l[1]||(l[1]=$((...v)=>a.cartOffcanvasToggle&&a.cartOffcanvasToggle(...v),["prevent"]))},[s("i",ha,[a.carts.length>0?(n(),i("span",va,g(a.carts.length),1)):d("",!0)])])]),s("li",ma,[t(e,{class:"nav-link fs-3 link-light",to:"/MemberLogin"},{default:o(()=>[_a]),_:1})]),s("li",ba,[t(e,{class:"nav-link mx-3 link-light",to:"/MemberLogin"},{default:o(()=>[c(" 會員中心 ")]),_:1})])])])])])):d("",!0)]),_:1}),t(L,{name:"fade"},{default:o(()=>[r.isTop?d("",!0):(n(),i("nav",ua,[s("div",pa,[t(e,{class:"navbar-brand",to:"/"},{default:o(()=>[s("object",{class:"logo-desktop img-fluid",type:"image/svg+xml",data:r.logoSvgUrl.fangsisBlackLogo3x,width:"192",height:"64",style:{"pointer-events":"none"}},null,8,ka),s("object",{class:"logo-mobile img-fluid",type:"image/svg+xml",data:r.logoSvgUrl.fangsisBlackLogo2x,width:"120",height:"40",style:{"pointer-events":"none"}},null,8,wa)]),_:1}),s("div",ya,[t(e,{class:"nav-link fs-5 link-primary d-block d-lg-none me-3",to:"/WishLists"},{default:o(()=>[s("i",Oa,[a.wishList.length>0?(n(),i("span",$a,g(a.wishList.length),1)):d("",!0)])]),_:1}),t(e,{class:"nav-link fs-5 link-primary d-block d-lg-none me-3",to:"/CartView"},{default:o(()=>[s("i",Ta,[a.carts.length>0?(n(),i("span",La,g(a.carts.length),1)):d("",!0)])]),_:1}),s("button",{class:"navbar-toggler",type:"button","aria-controls":"offcanvasNavbar",onClick:l[2]||(l[2]=(...v)=>a.menuOffcanvasToggle&&a.menuOffcanvasToggle(...v))},xa)]),s("div",Ca,[s("ul",Ia,[s("li",Wa,[t(e,{class:"nav-link mx-3 link-dark navbar-link-black-hover","active-class":"active-link-black","aria-current":"page",to:"/about"},{default:o(()=>[c("關於芳心")]),_:1})]),s("li",Ba,[t(e,{class:"nav-link mx-3 link-dark navbar-link-black-hover","active-class":"active-link-black",to:"/products"},{default:o(()=>[c("全部商品")]),_:1})]),s("li",Fa,[t(e,{class:"nav-link mx-3 link-dark navbar-link-black-hover","active-class":"active-link-black",to:"/OrderSearch"},{default:o(()=>[c("訂單查詢")]),_:1})]),s("li",Ma,[t(e,{class:"nav-link ms-4 me-1 link-primary",to:"/WishLists"},{default:o(()=>[s("i",Na,[a.wishList.length>0?(n(),i("span",Va,g(a.wishList.length),1)):d("",!0)])]),_:1})]),s("li",ja,[s("a",{class:"nav-link me-1 fs-4 link-primary","aria-controls":"offcanvasWithBackdrop",href:"",onClick:l[3]||(l[3]=$((...v)=>a.cartOffcanvasToggle&&a.cartOffcanvasToggle(...v),["prevent"]))},[s("i",Ga,[a.carts.length>0?(n(),i("span",Ua,g(a.carts.length),1)):d("",!0)])])]),s("li",Ya,[t(e,{class:"nav-link fs-3 link-primary",to:"/MemberLogin"},{default:o(()=>[Ea]),_:1})]),s("li",Da,[t(e,{class:"nav-link mx-3 link-primary",to:"/MemberLogin"},{default:o(()=>[c(" 會員中心 ")]),_:1})])])])])]))]),_:1}),t(m),t(f)],64)}const Pa=p(As,[["render",za],["__scopeId","data-v-44a4b0af"]]);const Qa={data(){return{isGoToTopVisible:!1}},methods:{scrollToTop(){window.scrollTo(0,0)},goToTopHandleScroll(){const a=window.scrollY,l=400;this.isGoToTopVisible=a>l}},beforeDestroy(){window.removeEventListener("scroll",goToTopHandleScroll)},mounted(){window.addEventListener("scroll",this.goToTopHandleScroll)}},Aa=a=>(C("data-v-db7b2577"),a=a(),I(),a),Ha={key:0,class:"goToTop rounded-circle position-fixed bottom-2 end-2 z-index-7 bg-light",id:"goToTop"},Xa=Aa(()=>s("img",{class:"goToTop-img-opacity",src:"https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1682598597601.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=SlZgeC3bcoMaZXLRCt3LOyY0saRfRr3IcpguZvimYO5uF77zrFDKaBtfeMHtOZ7ivKxPoqp6zvmyvTn4vlppa110pZl3RvUmgPQEeoDYO3%2BZnXeTXBEG7Y3j5wfj21JAlMnWi3M1QknwDKchbR45NjnyIwK%2B00G7g3wd0%2F1y98UQsrnJtrPsxWbggxXrVmUmHvHVYvPPvScmTdgLvSpkhzYkYDa04O864bbXb31WT7bg32v5QD%2FzXq78QWxoNLJW0YsNju%2BGkGvWe3%2FnxMQZX7tVbnnKKA3blVo3QDv0GWUJtVpJIfAOHmf3eBzw8EEnR4%2FkLr%2Fm7dhYWfGYYC%2FrtQ%3D%3D",alt:"透明度100的向上按鈕",width:"40",height:"40"},null,-1)),Za=[Xa];function Ka(a,l,k,w,r,_){return n(),x(L,{name:"fade"},{default:o(()=>[r.isGoToTopVisible?(n(),i("div",Ha,[s("a",{class:"cursor-pointer",href:"#",onClick:l[0]||(l[0]=$((...e)=>_.scrollToTop&&_.scrollToTop(...e),["prevent"]))},Za)])):d("",!0)]),_:1})}const Ra=p(Qa,[["render",Ka],["__scopeId","data-v-db7b2577"]]),Ja={data(){return{}},components:{FooterCard:is,NavBar:Pa,GoTop:Ra},methods:{...b(O,["getCart","pullLocalStorageToWishList"])},mounted(){this.getCart(),this.pullLocalStorageToWishList()}};function qa(a,l,k,w,r,_){const e=h("NavBar"),m=h("router-view"),f=h("FooterCard"),v=h("GoTop");return n(),i(S,null,[t(e),t(m),t(f),t(v,{class:"me-3 mb-2"})],64)}const it=p(Ja,[["render",qa]]);export{it as default};