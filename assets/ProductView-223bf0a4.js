import{F as B}from"./FullPageLoading-b94866a5.js";import{m as k,g as L,_,o as r,c as d,a as t,d as m,t as p,h as f,n as D,e as S,r as l,b as e,w as s,F as y}from"./index-af722535.js";import{c as v}from"./cartAndWishList-0d90c2ff.js";import{N as A,A as N,E as M,f as U,S as P,a as j}from"./free-mode-32fc7d05.js";import"./index-8f7796d2.js";import"./sweetalert2.all-38980bff.js";const O={data(){return{}},props:["product"],methods:{...k(v,["addToCart","addWishList","wishListActive"])},computed:{...L(v,["spinnerLoading"])}},W={class:"row gx-lg-6 mb-8"},z={class:"col-lg-4"},C=["src","alt"],I={class:"col-lg-8"},T={class:"product-content pe-lg-18"},E={class:"fs-lg-1 fs-2 fw-bold mb-6 mt-5 mt-lg-0",style:{"font-family":"var(--bs-NotoSerif-TC)"}},R={key:0,class:"fs-lg-4 fs-5 badge bg-secondary rounded-0"},V={class:"fs-6 mb-0"},X=t("br",null,null,-1),K={class:"fs-6"},Q={class:"d-flex flex-column flex-lg-row justify-content-lg-between align-items-end mt-6"},G={class:"fw-bold fs-5 fst-italic mb-lg-0 mb-2"},Z={key:0,class:"ms-1 me-2 text-decoration-line-through text-secondary"},Y={class:"me-1"},J={class:"d-flex fs-6"},q=["disabled"],H=S('<option disabled selected>數量選擇</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option>',11),$=[H],tt=["disabled"],et={key:0,class:"spinner-border-sm spinner-border mx-5",role:"status","aria-hidden":"true"},st={key:1},ot=t("i",{class:"bi bi-heart text-white"},null,-1);function it(c,a,o,b,u,h){return r(),d("div",W,[t("div",z,[t("img",{class:"img-fluid product-img w-100",src:o.product.imageUrl,alt:o.product.title,width:"440",height:"440",style:{"background-color":"var(--bs-secondary)"}},null,8,C)]),t("div",I,[t("div",T,[t("h2",E,[m(p(o.product.title)+" ",1),o.product.quantity===0?(r(),d("span",R,"已售完")):f("",!0)]),t("p",V,p(o.product.description),1),X,t("p",K,p(o.product.content),1),t("div",Q,[t("p",G,[m(" NT $"),o.product.origin_price!==o.product.price?(r(),d("span",Z,p(o.product.origin_price),1)):f("",!0),t("span",Y,p(o.product.price),1),m("/ "+p(o.product.unit),1)]),t("form",null,[t("div",J,[t("select",{class:"form-select select-hight me-2 w-auto",name:"productQty",id:"productQty",disabled:o.product.quantity===0,ref:"productQty"},$,8,q),t("button",{class:"btn btn-primary fs-6 me-2",type:"button",onClick:a[0]||(a[0]=i=>c.addToCart(o.product.id,this.$refs.productQty.value)),disabled:o.product.quantity===0||c.spinnerLoading===o.product.id},[c.spinnerLoading===o.product.id?(r(),d("span",et)):(r(),d("span",st,"加入購物車"))],8,tt),t("button",{class:"btn btn-pink fs-6 position-relative btn-addToWishList",type:"button",onClick:a[1]||(a[1]=i=>c.addWishList(o.product))},[t("i",{class:D(["bi bi-heart-fill position-absolute",{"heart-fill-active":c.wishListActive(o.product)}])},null,2),ot])])])])])])])}const at=_(O,[["render",it]]);const nt={data(){return{modules:[A,N,M,U]}},components:{Swiper:P,SwiperSlide:j}},ct=t("h2",{class:"fs-4 mb-3",style:{"font-family":"var(--bs-NotoSerif-TC)"}},"你可能也會喜歡",-1),rt={class:"py-4"},dt=t("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690633769143.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ejuKNHXdsLAbIKMvCP4nBukOQCAQT24uUfdkmrhCoWTPysqvfDgwbIAeQu8pzHbmVFVjo%2FBlukUV8MpVL5GwQJvIae4cPbtOvCR2C1YnF2igHjUiZv%2FblMvbjGYHsSBwdDugoNDq41jbXAtfD%2Fr7wKCPbC85EnG90050%2BbIjZ0MCpf3bw4%2BWbYme6ALqfHmWA5yr6jgaC55WiYhXRRpLXAcUEj7%2FxdWkS1BTniECwLm757CfyijBT9TaTfCEJiMc0%2FTPzDsFOTRDh4hDZkk790%2FSf7Srlw1lHaOnLt%2B5SinjNtK9xCrpKbCnLF6nz%2BuiT9lCxcuv3gRKImQdzXr4IA%3D%3D",alt:"放在木盤中的柚子香氛擴香 "},null,-1),lt=t("div",{class:"swiper-slide-mask"},null,-1),pt=t("p",{class:"swiper-slide-mask-btn position-absolute top-50 start-50 text-white border border-1 px-3 py-2 mb-0 translate-middle text-center"}," 香氛擴香 ",-1),ut=t("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690633203526.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=eW4jtER1hXR3%2F1wOv0XbYHC0zdtfoZ5wiMvgkIm7hxW%2BUVoiRCveYBgXAkE9vBSSqmcZmyta31z0Y4JxGIJx16q1gs1wrZKieBx8xJkhOJ3XUV%2Fd4KZppxWcR83bHtE9Pm8w1LbQFc0cEwVxowksh3tzPEDmFpRnUbiqwrapQKdEwQJJOIZ%2F0sIzVBkVHtwkF5OTty0SCJ61eC0mXeLY7uRaxwtOCVkDcrxQspGWr5BvBaojm4Eq95DuBEvC0CxNsvv4RX8Dr1g8MM%2BRXN%2F1JeVNpe%2F93B2GI2QK8pH00ZSRrHsVA8U0Rmozd6QCRlf%2BHCzRM7O6ZyH2AQUH%2FLM09w%3D%3D",alt:"放在木桌上白色花梨大豆蠟燭"},null,-1),mt=t("div",{class:"swiper-slide-mask"},null,-1),ht=t("p",{class:"swiper-slide-mask-btn position-absolute top-50 start-50 text-white border border-1 px-3 py-2 mb-0 translate-middle text-center"}," 香氛蠟燭 ",-1),gt=t("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690633745811.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=GAADz5FaDFXMsKYX%2FFMOdLO6YKb%2Bf0OrLtFlyeNuuOPCwW5PpvN6OSZBGp6SiQNlalIvnZMpRuDe3lNDX%2Fy1nrsI4LHv%2BjuToFGAeYgb6v%2FbZQf4IjGfRSU39iFHNEdwIDZPtoOsYoRvfl%2B1oLMiBOd6Tk9BUfH0ewuYtpFkjj%2F0KTSvytaaQL6As0TF1cV9XAZgaL9xDNf29LMnLCYWuuCZvMdNaJ1RMrYoGD24wk63yXvztVDM6%2FKg6f8rbkuX9QMHMSJ%2BBlCbQdW26zM7gifn%2FxpvTbWPr4ADVhjp%2BTgxgw6yHVTzT8XTnTL0a4baPwKNTjnsEBMBoYRLU75emg%3D%3D",alt:"放在木盤子上面的白色香氛蠟燭"},null,-1),_t=t("div",{class:"swiper-slide-mask"},null,-1),bt=t("p",{class:"swiper-slide-mask-btn position-absolute top-50 start-50 text-white border border-1 px-3 py-2 mb-0 translate-middle text-center"}," 香氛蠟燭 ",-1),ft=t("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690633534220.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=OXbSt9vUg1T%2BEMkjC9V1W88H42phrKXTcBf1%2FsSxOqudHJ3BFa1OTabzyvnnTnrAk3wOUArOkl2H4%2F9FevWUJGul8bJCv8jJJCRYjTqCoyam3TH%2FmIGam%2Fe4CMnmqeWjjtS38ZbteZGzq7HMAioMqAXoYASwu6QyGsbJIjKABmeWjGjg4toV4nBWHrfCtNVurwU9sByyN65NU1uiLM6xlHtZsmOn7WF%2FF5S%2F4fWD6rYKjvOC8YM%2Ff0q5gRH0gwmjlbcHjMiL%2BWrWHI3RnLMN%2Bwtgnb8ZZznhDsNVtCEzO0cG0bKWXNLWP0kRy2NiBp4rudnothozKi56r3My71wWGg%3D%3D",alt:"四種不同材料的白色海鹽皂"},null,-1),vt=t("div",{class:"swiper-slide-mask"},null,-1),wt=t("p",{class:"swiper-slide-mask-btn position-absolute top-50 start-50 text-white border border-1 px-3 py-2 mb-0 translate-middle text-center"}," 山形海鹽皂 ",-1),xt=t("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690633823857.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=mvAQtg4LjGeJVV6QM5Mm8NDhdmcMbW%2F1PkBp%2F8XimzY%2FC%2FhoidyAObTlDyZArBpfN9mcRqpveZixW6SN%2FlD4VaiCHAyxbl52Zppn0U2G7WiuRvXvoI6J95iUkfId30%2FXO5C9eoeoNNDTUzFCzdAQCWJkIO4eRGtstE2gyOxDhr31SgpTEZJVCStALXp%2Bq%2F6%2FLHtWEpvNpweZAgm2jxT5A0E11ej4KPyRaTi6cJ%2F3KYP9RfNSCWHIurKvDGTb8P5AiJjNfhwNn6AN5LUcF4cN3rL8cxw9%2F2ZpgOpVW4O41AzM7ZCf15FRuprDVjAyspzAj2k7BvoCDP4rqFXcvFuxgg%3D%3D",alt:"放在木桌上的兩塊鳶尾花花香香氛沐浴皂"},null,-1),yt=t("div",{class:"swiper-slide-mask"},null,-1),Ft=t("p",{class:"swiper-slide-mask-btn position-absolute top-50 start-50 text-white border border-1 px-3 py-2 mb-0 translate-middle text-center"}," 香氛沐浴皂 ",-1),Bt=t("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690633231830.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=YOqiBfmUlHKemT74wXg3tHMeWXcKZt9qPkQdOhuQK%2Bossb4YEyBPWVs3T37L4IPiKOQUiQiWtW3fMC5nQbATdALGyRbO40fo69W4S%2BUS8sJYKKvidMLDsIMNdQvkWy8lWhefXRuEOjr3U4YtQWosixRqE4JW49zZ9ZXpKU7O3vF0dL2n24tGjhXgeVDkSLf7ZUG3rELUxqBRYxKO4hDZnK7%2Fq6HPielBTq7PSa83y8mIce3PK3YAtMc74asjKFEUSCqzwkWyTXQnP7W%2FU5FW1tJn68szL97BLNJirpCXf4Gt8EQlWhXmgW6RVbJ86OhkiDI7d7xFXhT967GROTNgwA%3D%3D",alt:"深棕色的木桌上擺著一排咖啡色的擴香 "},null,-1),kt=t("div",{class:"swiper-slide-mask"},null,-1),Lt=t("p",{class:"swiper-slide-mask-btn position-absolute top-50 start-50 text-white border border-1 px-3 py-2 mb-0 translate-middle text-center"}," 居家擴香 ",-1),Dt=t("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690633728303.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=RWZ3hiUcR9Jx%2BeCgMKPz0tG%2B2pMQtFOdRE%2BKbscw8pyNWyDX7PcIDfjsl18srrAy%2Blhqj1FysKTBRr5l0jLXfBupKqAX7xJOyTUSeaIpDh09x389iK%2BkbYSa7PByPk6dFj%2FBoQFykwvmUU7%2Bt13msK6aKgWQdo4LUMMqS5AQybdOcSwa4Jfn2gYLGQauOu9cdKEv6E0SaCZjfSRatXUhOkfG283ahnCD93ODyzjhoyOOD08nHRIG3Eb1xDNJ%2F8Uh5lrxwI1LY6cVhXYT2OJdpG0QHvMl6iivmgu5vUpbjdj02iwMVxzIQcNMB5APonqwgThO83eSULnrZk52yS4mWw%3D%3D",alt:"放在綠色植物葉片上的淡香水"},null,-1),St=t("div",{class:"swiper-slide-mask"},null,-1),At=t("p",{class:"swiper-slide-mask-btn position-absolute top-50 start-50 text-white border border-1 px-3 py-2 mb-0 translate-middle text-center"}," 香氛噴霧 ",-1),Nt=t("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690633563910.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=lBgmsdwE2Q5e8dBmVShbLWIWLU7TtqKFppIdLHRuCVUEPYskcrq0bWR%2B8ElUrzMkZU3eVChWNUwl5KZcX6S41F1xLvhAr%2B6PhMKKKDVraA%2FX7oTEqrLvhYrzOiIF%2BCg6JlUbPetaYGtLj2ua7yrltRXB73g5BinjMkA1NjPMj2GL3BbTHmXSrvnsOK8cFDJ6XRBG6qDkuuu9a3couUCFFy4to1Yr983qY%2FdkljuEWFjn9Vm7Ext7Vjml9vu2VUNfZMEbTo03wumK2yQa%2BO48AAgVaN7bL7T6xsw%2FG0B1ce5lZ2pXRDSiE%2F89J3cCfyQY%2BCnFs9vMthGmP%2F8BZ6ojxQ%3D%3D",alt:"黃色粉紅色紫色的絲瓜片香皂"},null,-1),Mt=t("div",{class:"swiper-slide-mask"},null,-1),Ut=t("p",{class:"swiper-slide-mask-btn position-absolute top-50 start-50 text-white border border-1 px-3 py-2 mb-0 translate-middle text-center"}," 絲瓜片香皂 ",-1),Pt=t("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690633642899.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=HzvYOeMiginhMlRWziy08hnnSIi%2FfIZQZnFPi03Qysbz6U%2B00Vcz6jVmwHL6wIEUXOYESvNfPMVI%2F0uGNFOqUKZYj17ungGIxFXLu7zmn21n6kVornXDGvWAedd1wlray4D5vO0aioJaPddmwk8brOzpzWQS1cMq%2FZLrOzjIYUWCOnNafnQhmPMYoYcaLzJ0Y%2B9hreudeQrKiqLf%2FBJ1mmq%2FlHWLXpNS9TtWDNFDsBeOfSedUbf0U1nd%2FW8uI%2B343Ds84DUgZwszNR342%2BNkgVWeRtye7eEl2vw597astXlLN%2BdQeNOV%2FMeMyZ8iWBx7ILsPi7Ga0xJMsOOhUa%2B44w%3D%3D",alt:"左下角有用藍底白字寫著海洋的英文旁邊還有一瓶擴香瓶"},null,-1),jt=t("div",{class:"swiper-slide-mask"},null,-1),Ot=t("p",{class:"swiper-slide-mask-btn position-absolute top-50 start-50 text-white border border-1 px-3 py-2 mb-0 translate-middle text-center"}," 居家擴香 ",-1),Wt=t("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690633060112.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=KE0ynhzzqn31yyD4xyxts7Etdrn6kfEOKMacSZAYiTpvAge5id05bpd0xpIovKoDoCDu%2BfjRwW7PRw9uSWnbV8HZS4gqvOKo1dNNF6IepMEModnni37cxrjv3R6CocFA7rUqnSnfojUqb9ukZxMq%2FEEG9PHq6b0icgNb430TQV62sMl3ab3QSYKAY3IezwFLnkYfp0wP4HO3T2MM5wKQo5BW7vQIMo0dmPd%2BXLNnZjodaxX7BmiB2DJ1Ux3yZJnssAXxUr3mwDcXRRbF94sohzhPCdVLnO4XnohFgiXORL1QNn4VoRfpUfj5yZvYd1tDaAe7b9nS20mfvxUXY9ePZQ%3D%3D",alt:"紅色的洋甘菊香氛蠟燭"},null,-1),zt=t("div",{class:"swiper-slide-mask"},null,-1),Ct=t("p",{class:"swiper-slide-mask-btn position-absolute top-50 start-50 text-white border border-1 px-3 py-2 mb-0 translate-middle text-center"}," 香氛蠟燭 ",-1);function It(c,a,o,b,u,h){const i=l("router-link"),n=l("swiper-slide"),g=l("swiper");return r(),d(y,null,[ct,t("div",rt,[e(g,{slidesPerView:1,spaceBetween:10,breakpoints:{376:{slidesPerView:2,spaceBetween:10},576:{slidesPerView:3,spaceBetween:10},768:{slidesPerView:4,spaceBetween:10},1200:{slidesPerView:5,spaceBetween:20}},modules:u.modules,autoplay:{delay:1e3,disableOnInteraction:!1},navigation:!0,loop:!0,speed:2e3,freeMode:!0,class:"more-product-swiper"},{default:s(()=>[e(n,null,{default:s(()=>[e(i,{to:"/product/-NaUfrmB_22pg-iMk29q"},{default:s(()=>[dt,lt,pt]),_:1})]),_:1}),e(n,null,{default:s(()=>[e(i,{to:"/product/-NaUd-NzuK3kTJRK_-wz"},{default:s(()=>[ut,mt,ht]),_:1})]),_:1}),e(n,null,{default:s(()=>[e(i,{to:"/product/-NaUfmD6hldVIBMNW303"},{default:s(()=>[gt,_t,bt]),_:1})]),_:1}),e(n,null,{default:s(()=>[e(i,{to:"/product/-NaUeamgqGkzq4BTFRJ0"},{default:s(()=>[ft,vt,wt]),_:1})]),_:1}),e(n,null,{default:s(()=>[e(i,{to:"/product/-NaUgD1YW3GgBdaJMpZ2"},{default:s(()=>[xt,yt,Ft]),_:1})]),_:1}),e(n,null,{default:s(()=>[e(i,{to:"/product/-NaUd3lZGkS1IJDjaSCV"},{default:s(()=>[Bt,kt,Lt]),_:1})]),_:1}),e(n,null,{default:s(()=>[e(i,{to:"/product/-NaUfgD8vUylevh0StTh"},{default:s(()=>[Dt,St,At]),_:1})]),_:1}),e(n,null,{default:s(()=>[e(i,{to:"/product/-NaUegMYLEbG-GRD7_IO"},{default:s(()=>[Nt,Mt,Ut]),_:1})]),_:1}),e(n,null,{default:s(()=>[e(i,{to:"/product/-NaUfL_f4_W-jKhWWj6G"},{default:s(()=>[Pt,jt,Ot]),_:1})]),_:1}),e(n,null,{default:s(()=>[e(i,{to:"/product/-NaUb40DTd-PkPSJgMUm"},{default:s(()=>[Wt,zt,Ct]),_:1})]),_:1})]),_:1},8,["modules"])])],64)}const Tt=_(nt,[["render",It]]),{VITE_APP_URL:w,VITE_APP_PATH:x}={VITE_APP_URL:"https://vue3-course-api.hexschool.io",VITE_APP_PATH:"peihanwang-hexschool",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},Et={data(){return{product:{},isLoading:!1}},components:{FullPageLoading:B,ProductDetail:at,ProductSwiper:Tt},methods:{getProductId(c){this.isLoading=!0,this.$http.get(`${w}/v2/api/${x}/product/${c}`).then(a=>{this.product=a.data.product,this.isLoading=!1}).catch(a=>{alert(a),this.isLoading=!1})}},watch:{$route(){this.$route.params.id&&this.getProductId(this.$route.params.id)}},mounted(){this.isLoading=!0;const{id:c}=this.$route.params;this.$http.get(`${w}/v2/api/${x}/product/${c}`).then(a=>{this.product=a.data.product,this.isLoading=!1}).catch(a=>{alert(a),this.isLoading=!1})}},Rt={class:"py-md-13 py-9 background-position-center background-size-corver",style:{"background-image":"url('https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1689994083390.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=fbh9MvNqSmL%2Bs8EQ1sukc8Yxip6M03Xj1r81k1C6L5IOsrr3RQLp%2FyNctt%2FSnGmgsE0V8RIKSwrKtspQN0JmEynIvezjrXu2sWKg8kMy7TUAU8VlafwLiUQWBRpYITL6JbUm%2BOc3smTAnJlxNewDMi8DYwdiqJ9DAaZfm2BS9JO9vgXAia%2Bwxd3YxrX%2F4RzJ3zQtdiQvZI4bwaptLgyX0Lir6dwimbzaq8wlRLlnSjU2g%2B286D2yMkjCNKl39Cg%2BZi9wTyHCIlPpf%2FnD3jpZkksFI%2FYunG8EaFvVUREZX4iXTgtaTMoO1fbFXl2wNy1sMAlLyxV8vbvuh535OknYHw%3D%3D')","background-color":"var(--bs-primary)"}},Vt={class:"container d-flex flex-column align-items-center"},Xt=t("h2",{class:"fw-bold fs-lg-10 fs-1 mb-3 text-white",style:{"font-family":"var(--bs-NotoSerif-TC)"}}," 商品資訊 ",-1),Kt={class:"fs-6"},Qt={"aria-label":"breadcrumb"},Gt={class:"breadcrumb mb-0 text-white text-center"},Zt={class:"breadcrumb-item"},Yt={class:"breadcrumb-item"},Jt=t("li",{class:"breadcrumb-item active","aria-current":"page"},"商品資訊",-1),qt={class:"container my-6"},Ht=t("hr",null,null,-1),$t={class:"my-5"};function te(c,a,o,b,u,h){const i=l("routerLink"),n=l("ProductDetail"),g=l("ProductSwiper"),F=l("FullPageLoading");return r(),d(y,null,[t("div",Rt,[t("div",Vt,[Xt,t("div",Kt,[t("nav",Qt,[t("ol",Gt,[t("li",Zt,[e(i,{class:"text-decoration-none text-white",to:"/"},{default:s(()=>[m("首頁")]),_:1})]),t("li",Yt,[e(i,{class:"text-decoration-none text-white",to:"/products"},{default:s(()=>[m("全站商品")]),_:1})]),Jt])])])])]),t("div",qt,[e(n,{product:u.product},null,8,["product"]),Ht,t("div",$t,[e(g,{getProductId:h.getProductId},null,8,["getProductId"])])]),e(F,{isLoading:u.isLoading},null,8,["isLoading"])],64)}const ce=_(Et,[["render",te]]);export{ce as default};
