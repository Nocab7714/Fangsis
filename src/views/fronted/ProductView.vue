<template>
  <div
    class="py-md-13 py-9 background-position-center background-size-corver"
    style="
      background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1689994083390.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=fbh9MvNqSmL%2Bs8EQ1sukc8Yxip6M03Xj1r81k1C6L5IOsrr3RQLp%2FyNctt%2FSnGmgsE0V8RIKSwrKtspQN0JmEynIvezjrXu2sWKg8kMy7TUAU8VlafwLiUQWBRpYITL6JbUm%2BOc3smTAnJlxNewDMi8DYwdiqJ9DAaZfm2BS9JO9vgXAia%2Bwxd3YxrX%2F4RzJ3zQtdiQvZI4bwaptLgyX0Lir6dwimbzaq8wlRLlnSjU2g%2B286D2yMkjCNKl39Cg%2BZi9wTyHCIlPpf%2FnD3jpZkksFI%2FYunG8EaFvVUREZX4iXTgtaTMoO1fbFXl2wNy1sMAlLyxV8vbvuh535OknYHw%3D%3D');
      background-color: var(--bs-primary);
    "
  >
    <div class="container d-flex flex-column align-items-center">
      <h2 class="fw-bold fs-lg-10 fs-1 mb-3 text-white" style="font-family: var(--bs-NotoSerif-TC)">
        商品資訊
      </h2>
      <div class="fs-6">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-0 text-white text-center">
            <li class="breadcrumb-item">
              <routerLink class="text-decoration-none text-white" to="/">首頁</routerLink>
            </li>
            <li class="breadcrumb-item">
              <routerLink class="text-decoration-none text-white" to="/products"
                >全站商品</routerLink
              >
            </li>
            <li class="breadcrumb-item active" aria-current="page">商品資訊</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>

  <div class="container my-6">
    <div class="row gx-lg-6 mb-8">
      <div class="col-lg-4">
        <img
          class="img-fluid product-img w-100"
          :src="product.imageUrl"
          :alt="product.title"
          width="440"
          height="440"
          style="background-color: var(--bs-secondary)"
        />
      </div>
      <div class="col-lg-8">
        <div class="product-content pe-lg-18">
          <h2
            class="fs-lg-1 fs-2 fw-bold mb-6 mt-5 mt-lg-0"
            style="font-family: var(--bs-NotoSerif-TC)"
          >
            {{ product.title }}

            <span v-if="product.quantity === 0" class="fs-lg-4 fs-5 badge bg-secondary rounded-0"
              >已售完</span
            >
          </h2>
          <p class="fs-6 mb-0">
            {{ product.description }}
          </p>
          <br />
          <p class="fs-6">
            {{ product.content }}
          </p>
          <div
            class="d-flex flex-column flex-lg-row justify-content-lg-between align-items-end mt-6"
          >
            <p class="fw-bold fs-5 fst-italic mb-lg-0 mb-2">
              NT $<span>{{ product.price }}</span
              >/ {{ product.unit }}
            </p>
            <form>
              <div class="d-flex fs-6">
                <select
                  class="form-select select-hight me-2 w-auto"
                  name="productQty"
                  id="productQty"
                  :disabled="product.quantity === 0"
                  ref="productQty"
                >
                  <option disabled selected>數量選擇</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
                <button
                  class="btn btn-primary fs-6 me-2"
                  type="button"
                  @click="addToCart(product.id, this.$refs.productQty.value)"
                  :disabled="product.quantity === 0 || spinnerLoading === product.id"
                >
                  <span
                    v-if="spinnerLoading === product.id"
                    class="spinner-border-sm spinner-border mx-5"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  <span v-else>加入購物車</span>
                </button>
                <button
                  class="btn btn-pink fs-6 position-relative btn-addToWishList"
                  type="button"
                  @click="addWishList(product)"
                >
                  <i
                    class="bi bi-heart-fill position-absolute"
                    :class="{ 'heart-fill-active': wishListActive(product) }"
                  ></i>
                  <i class="bi bi-heart text-white"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="more-products my-5">
      <h2 class="fs-4 mb-3" style="font-family: var(--bs-NotoSerif-TC)">你可能也會喜歡</h2>
      <div class="py-4">
        <swiper
          :slidesPerView="1"
          :spaceBetween="10"
          :breakpoints="{
            '376': {
              slidesPerView: 2,
              spaceBetween: 10
            },
            '576': {
              slidesPerView: 3,
              spaceBetween: 10
            },
            '768': {
              slidesPerView: 4,
              spaceBetween: 10
            },
            '1200': {
              slidesPerView: 5,
              spaceBetween: 20
            }
          }"
          :modules="modules"
          :autoplay="{
            delay: 1000,
            disableOnInteraction: false
          }"
          :navigation="true"
          :loop="true"
          :speed="2000"
          :freeMode="true"
          class="more-product-swiper"
        >
          <swiper-slide>
            <router-link
              to="/product/-NaUfrmB_22pg-iMk29q"
              @click="getProductId('-NaUfrmB_22pg-iMk29q')"
            >
              <img
                src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690633769143.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ejuKNHXdsLAbIKMvCP4nBukOQCAQT24uUfdkmrhCoWTPysqvfDgwbIAeQu8pzHbmVFVjo%2FBlukUV8MpVL5GwQJvIae4cPbtOvCR2C1YnF2igHjUiZv%2FblMvbjGYHsSBwdDugoNDq41jbXAtfD%2Fr7wKCPbC85EnG90050%2BbIjZ0MCpf3bw4%2BWbYme6ALqfHmWA5yr6jgaC55WiYhXRRpLXAcUEj7%2FxdWkS1BTniECwLm757CfyijBT9TaTfCEJiMc0%2FTPzDsFOTRDh4hDZkk790%2FSf7Srlw1lHaOnLt%2B5SinjNtK9xCrpKbCnLF6nz%2BuiT9lCxcuv3gRKImQdzXr4IA%3D%3D"
                alt="放在木盤中的柚子香氛擴香 "
              />
              <div class="swiper-slide-mask"></div>
              <p
                class="swiper-slide-mask-btn position-absolute top-50 start-50 text-white border border-1 rounded px-3 py-2 mb-0 translate-middle text-center"
              >
                view more
              </p>
            </router-link></swiper-slide
          >
          <swiper-slide>
            <router-link
              to="/product/-NaUd-NzuK3kTJRK_-wz"
              @click="getProductId('-NaUd-NzuK3kTJRK_-wz')"
            >
              <img
                src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690633203526.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=eW4jtER1hXR3%2F1wOv0XbYHC0zdtfoZ5wiMvgkIm7hxW%2BUVoiRCveYBgXAkE9vBSSqmcZmyta31z0Y4JxGIJx16q1gs1wrZKieBx8xJkhOJ3XUV%2Fd4KZppxWcR83bHtE9Pm8w1LbQFc0cEwVxowksh3tzPEDmFpRnUbiqwrapQKdEwQJJOIZ%2F0sIzVBkVHtwkF5OTty0SCJ61eC0mXeLY7uRaxwtOCVkDcrxQspGWr5BvBaojm4Eq95DuBEvC0CxNsvv4RX8Dr1g8MM%2BRXN%2F1JeVNpe%2F93B2GI2QK8pH00ZSRrHsVA8U0Rmozd6QCRlf%2BHCzRM7O6ZyH2AQUH%2FLM09w%3D%3D"
                alt="放在木桌上白色花梨大豆蠟燭"
              />
              <div class="swiper-slide-mask"></div>
              <p
                class="swiper-slide-mask-btn position-absolute top-50 start-50 text-white border border-1 rounded px-3 py-2 mb-0 translate-middle text-center"
              >
                view more
              </p></router-link
            ></swiper-slide
          >
          <swiper-slide>
            <router-link
              to="/product/-NaUfmD6hldVIBMNW303"
              @click="getProductId('-NaUfmD6hldVIBMNW303')"
            >
              <img
                src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690633745811.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=GAADz5FaDFXMsKYX%2FFMOdLO6YKb%2Bf0OrLtFlyeNuuOPCwW5PpvN6OSZBGp6SiQNlalIvnZMpRuDe3lNDX%2Fy1nrsI4LHv%2BjuToFGAeYgb6v%2FbZQf4IjGfRSU39iFHNEdwIDZPtoOsYoRvfl%2B1oLMiBOd6Tk9BUfH0ewuYtpFkjj%2F0KTSvytaaQL6As0TF1cV9XAZgaL9xDNf29LMnLCYWuuCZvMdNaJ1RMrYoGD24wk63yXvztVDM6%2FKg6f8rbkuX9QMHMSJ%2BBlCbQdW26zM7gifn%2FxpvTbWPr4ADVhjp%2BTgxgw6yHVTzT8XTnTL0a4baPwKNTjnsEBMBoYRLU75emg%3D%3D"
                alt="放在木盤子上面的白色香氛蠟燭"
              />
              <div class="swiper-slide-mask"></div>
              <p
                class="swiper-slide-mask-btn position-absolute top-50 start-50 text-white border border-1 rounded px-3 py-2 mb-0 translate-middle text-center"
              >
                view more
              </p></router-link
            ></swiper-slide
          >
          <swiper-slide>
            <router-link
              to="/product/-NaUeamgqGkzq4BTFRJ0"
              @click="getProductId('-NaUeamgqGkzq4BTFRJ0')"
            >
              <img
                src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690633534220.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=OXbSt9vUg1T%2BEMkjC9V1W88H42phrKXTcBf1%2FsSxOqudHJ3BFa1OTabzyvnnTnrAk3wOUArOkl2H4%2F9FevWUJGul8bJCv8jJJCRYjTqCoyam3TH%2FmIGam%2Fe4CMnmqeWjjtS38ZbteZGzq7HMAioMqAXoYASwu6QyGsbJIjKABmeWjGjg4toV4nBWHrfCtNVurwU9sByyN65NU1uiLM6xlHtZsmOn7WF%2FF5S%2F4fWD6rYKjvOC8YM%2Ff0q5gRH0gwmjlbcHjMiL%2BWrWHI3RnLMN%2Bwtgnb8ZZznhDsNVtCEzO0cG0bKWXNLWP0kRy2NiBp4rudnothozKi56r3My71wWGg%3D%3D"
                alt="四種不同材料的白色海鹽皂"
              />
              <div class="swiper-slide-mask"></div>
              <p
                class="swiper-slide-mask-btn position-absolute top-50 start-50 text-white border border-1 rounded px-3 py-2 mb-0 translate-middle text-center"
              >
                view more
              </p></router-link
            ></swiper-slide
          >
          <swiper-slide>
            <router-link
              to="/product/-NaUgD1YW3GgBdaJMpZ2"
              @click="getProductId('-NaUgD1YW3GgBdaJMpZ2')"
            >
              <img
                src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690633823857.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=mvAQtg4LjGeJVV6QM5Mm8NDhdmcMbW%2F1PkBp%2F8XimzY%2FC%2FhoidyAObTlDyZArBpfN9mcRqpveZixW6SN%2FlD4VaiCHAyxbl52Zppn0U2G7WiuRvXvoI6J95iUkfId30%2FXO5C9eoeoNNDTUzFCzdAQCWJkIO4eRGtstE2gyOxDhr31SgpTEZJVCStALXp%2Bq%2F6%2FLHtWEpvNpweZAgm2jxT5A0E11ej4KPyRaTi6cJ%2F3KYP9RfNSCWHIurKvDGTb8P5AiJjNfhwNn6AN5LUcF4cN3rL8cxw9%2F2ZpgOpVW4O41AzM7ZCf15FRuprDVjAyspzAj2k7BvoCDP4rqFXcvFuxgg%3D%3D"
                alt="放在木桌上的兩塊鳶尾花花香香氛沐浴皂"
              />
              <div class="swiper-slide-mask"></div>
              <p
                class="swiper-slide-mask-btn position-absolute top-50 start-50 text-white border border-1 rounded px-3 py-2 mb-0 translate-middle text-center"
              >
                view more
              </p></router-link
            ></swiper-slide
          >
          <swiper-slide>
            <router-link
              to="/product/-NaUd3lZGkS1IJDjaSCV"
              @click="getProductId('-NaUd3lZGkS1IJDjaSCV')"
            >
              <img
                src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690633231830.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=YOqiBfmUlHKemT74wXg3tHMeWXcKZt9qPkQdOhuQK%2Bossb4YEyBPWVs3T37L4IPiKOQUiQiWtW3fMC5nQbATdALGyRbO40fo69W4S%2BUS8sJYKKvidMLDsIMNdQvkWy8lWhefXRuEOjr3U4YtQWosixRqE4JW49zZ9ZXpKU7O3vF0dL2n24tGjhXgeVDkSLf7ZUG3rELUxqBRYxKO4hDZnK7%2Fq6HPielBTq7PSa83y8mIce3PK3YAtMc74asjKFEUSCqzwkWyTXQnP7W%2FU5FW1tJn68szL97BLNJirpCXf4Gt8EQlWhXmgW6RVbJ86OhkiDI7d7xFXhT967GROTNgwA%3D%3D"
                alt="深棕色的木桌上擺著一排咖啡色的擴香 "
              />
              <div class="swiper-slide-mask"></div>
              <p
                class="swiper-slide-mask-btn position-absolute top-50 start-50 text-white border border-1 rounded px-3 py-2 mb-0 translate-middle text-center"
              >
                view more
              </p></router-link
            ></swiper-slide
          >
          <swiper-slide>
            <router-link
              to="/product/-NaUfgD8vUylevh0StTh"
              @click="getProductId('-NaUfgD8vUylevh0StTh')"
            >
              <img
                src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690633728303.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=RWZ3hiUcR9Jx%2BeCgMKPz0tG%2B2pMQtFOdRE%2BKbscw8pyNWyDX7PcIDfjsl18srrAy%2Blhqj1FysKTBRr5l0jLXfBupKqAX7xJOyTUSeaIpDh09x389iK%2BkbYSa7PByPk6dFj%2FBoQFykwvmUU7%2Bt13msK6aKgWQdo4LUMMqS5AQybdOcSwa4Jfn2gYLGQauOu9cdKEv6E0SaCZjfSRatXUhOkfG283ahnCD93ODyzjhoyOOD08nHRIG3Eb1xDNJ%2F8Uh5lrxwI1LY6cVhXYT2OJdpG0QHvMl6iivmgu5vUpbjdj02iwMVxzIQcNMB5APonqwgThO83eSULnrZk52yS4mWw%3D%3D"
                alt="放在綠色植物葉片上的淡香水"
              />
              <div class="swiper-slide-mask"></div>
              <p
                class="swiper-slide-mask-btn position-absolute top-50 start-50 text-white border border-1 rounded px-3 py-2 mb-0 translate-middle text-center"
              >
                view more
              </p></router-link
            ></swiper-slide
          >
          <swiper-slide>
            <router-link
              to="/product/-NaUegMYLEbG-GRD7_IO"
              @click="getProductId('-NaUegMYLEbG-GRD7_IO')"
            >
              <img
                src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690633563910.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=lBgmsdwE2Q5e8dBmVShbLWIWLU7TtqKFppIdLHRuCVUEPYskcrq0bWR%2B8ElUrzMkZU3eVChWNUwl5KZcX6S41F1xLvhAr%2B6PhMKKKDVraA%2FX7oTEqrLvhYrzOiIF%2BCg6JlUbPetaYGtLj2ua7yrltRXB73g5BinjMkA1NjPMj2GL3BbTHmXSrvnsOK8cFDJ6XRBG6qDkuuu9a3couUCFFy4to1Yr983qY%2FdkljuEWFjn9Vm7Ext7Vjml9vu2VUNfZMEbTo03wumK2yQa%2BO48AAgVaN7bL7T6xsw%2FG0B1ce5lZ2pXRDSiE%2F89J3cCfyQY%2BCnFs9vMthGmP%2F8BZ6ojxQ%3D%3D"
                alt="黃色粉紅色紫色的絲瓜片香皂"
              />
              <div class="swiper-slide-mask"></div>
              <p
                class="swiper-slide-mask-btn position-absolute top-50 start-50 text-white border border-1 rounded px-3 py-2 mb-0 translate-middle text-center"
              >
                view more
              </p>
            </router-link></swiper-slide
          >
          <swiper-slide>
            <router-link
              to="/product/-NaUfL_f4_W-jKhWWj6G"
              @click="getProductId('-NaUfL_f4_W-jKhWWj6G')"
            >
              <img
                src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690633642899.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=HzvYOeMiginhMlRWziy08hnnSIi%2FfIZQZnFPi03Qysbz6U%2B00Vcz6jVmwHL6wIEUXOYESvNfPMVI%2F0uGNFOqUKZYj17ungGIxFXLu7zmn21n6kVornXDGvWAedd1wlray4D5vO0aioJaPddmwk8brOzpzWQS1cMq%2FZLrOzjIYUWCOnNafnQhmPMYoYcaLzJ0Y%2B9hreudeQrKiqLf%2FBJ1mmq%2FlHWLXpNS9TtWDNFDsBeOfSedUbf0U1nd%2FW8uI%2B343Ds84DUgZwszNR342%2BNkgVWeRtye7eEl2vw597astXlLN%2BdQeNOV%2FMeMyZ8iWBx7ILsPi7Ga0xJMsOOhUa%2B44w%3D%3D"
                alt="左下角有用藍底白字寫著海洋的英文旁邊還有一瓶擴香瓶"
              />
              <div class="swiper-slide-mask"></div>
              <p
                class="swiper-slide-mask-btn position-absolute top-50 start-50 text-white border border-1 rounded px-3 py-2 mb-0 translate-middle text-center"
              >
                view more
              </p>
            </router-link></swiper-slide
          >
          <swiper-slide>
            <router-link
              to="/product/-NaUfL_f4_W-jKhWWj6G"
              @click="getProductId('-NaUfL_f4_W-jKhWWj6G')"
            >
              <img
                src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690633060112.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=KE0ynhzzqn31yyD4xyxts7Etdrn6kfEOKMacSZAYiTpvAge5id05bpd0xpIovKoDoCDu%2BfjRwW7PRw9uSWnbV8HZS4gqvOKo1dNNF6IepMEModnni37cxrjv3R6CocFA7rUqnSnfojUqb9ukZxMq%2FEEG9PHq6b0icgNb430TQV62sMl3ab3QSYKAY3IezwFLnkYfp0wP4HO3T2MM5wKQo5BW7vQIMo0dmPd%2BXLNnZjodaxX7BmiB2DJ1Ux3yZJnssAXxUr3mwDcXRRbF94sohzhPCdVLnO4XnohFgiXORL1QNn4VoRfpUfj5yZvYd1tDaAe7b9nS20mfvxUXY9ePZQ%3D%3D"
                alt="紅色的洋甘菊香氛蠟燭"
              />
              <div class="swiper-slide-mask"></div>
              <p
                class="swiper-slide-mask-btn position-absolute top-50 start-50 text-white border border-1 rounded px-3 py-2 mb-0 translate-middle text-center"
              >
                view more
              </p>
            </router-link></swiper-slide
          >
        </swiper>
      </div>
    </div>
  </div>
  <!-- vue-loading -->
  <loading
    v-model:active="isLoading"
    :can-cancel="false"
    :lock-scroll="lockScroll"
    :background-color="backgroundColor"
    :opacity="opacity"
    :is-full-page="fullPage"
    class="vl-overlay-full-page"
  >
    <div class="d-flex flex-column align-items-center mx-3">
      <img
        class="img-fluid animate__animated animate__pulse animate__infinite"
        src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1682598276311.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=qL%2F7begbYX2RvKeejMCXEVhmPIyuNGNfCCMcDFt7bJOkRpxv46JeWb2TcnzDlPj0WB%2BEdEY5kqcd%2FuGxVX0MUcXT6mdARX8Fq51Oyho%2FKl3YIiVxIVVeF7sxsMIAK0oBlZNxrvy7yzcGJLq7uUKcPuDNXzasO4M4qt9bBKXOrDkbf8%2BCMlUoWim4Q9jtjfbIO7IgAgPn5PA1DJzmhv4bfRPco8SgGxGVvG8k9Q2ZSDxnODfwqxYHJE%2Bb6woza2dFQcEzDiBR%2FVhf1%2B8%2BB2%2BWaXD5AJCkLDjLIcTtZZBO5zCfbzg2HQAknzt%2FbXAHPI3xhOJ%2F5WXn5SnRr%2F2Xk7WDhQ%3D%3D"
        width="192"
        height="64"
        alt="芳心白色logo"
      />
      <span class="text-white fs-7 mt-2">Loading ...</span>
    </div>
  </loading>
</template>
<script>
import { RouterLink } from 'vue-router'
import { mapActions, mapState } from 'pinia'
import cartAndWishListStore from '../../stores/cartAndWishList'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay, EffectFade, FreeMode } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'

// vue-loading
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

export default {
  data() {
    return {
      product: {}, // 存放取出的單項產品資料
      modules: [Navigation, Autoplay, EffectFade, FreeMode], //Swiper modules
      // vue-loading
      isLoading: false,
      lockScroll: true,
      fullPage: true,
      backgroundColor: '#5d7067',
      opacity: 1
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    Loading
  },
  methods: {
    // swiper get product id
    getProductId(id) {
      this.isLoading = true // 取得產品資料前顯示 loading 效果
      this.$http
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/product/${id}`)
        .then((res) => {
          this.product = res.data.product
          this.isLoading = false // 取得產品資料後關閉 loading 效果
        })
        .catch((err) => {
          alert(err)
          this.isLoading = false // 取得產品資料後關閉 loading 效果
        })
    },
    ...mapActions(cartAndWishListStore, [
      'addToCart',
      'getCart',
      'addWishList',
      'pullLocalStorageToWishList',
      'wishListActive'
    ])
  },
  watch: {
    $route() {
      if (!this.$route.params.id) {
        return
      }
      this.getProductId(this.$route.params.id)
    }
  },

  computed: {
    ...mapState(cartAndWishListStore, ['carts', 'wishList', 'spinnerLoading'])
  },
  mounted() {
    this.isLoading = true // 取得產品資料前顯示 loading 效果
    // 取得產品 id 並串接 api 將資料儲存到 product 物件中
    const { id } = this.$route.params
    this.$http
      .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/product/${id}`)
      .then((res) => {
        this.product = res.data.product
        this.isLoading = false // 取得產品資料後關閉 loading 效果
      })
      .catch((err) => {
        alert(err)
        this.isLoading = false // 取得產品資料後關閉 loading 效果
      })
    this.pullLocalStorageToWishList()
  }
}
</script>
<style lang="scss" scoped>
.products-header-bkg {
  background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1689947167279.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=HPMkP4A3VpRpZxeB2opnsMfTm7zoerIe27Pn6O6qhbyh8EkFs4nBrAkNn0jO11OeYDllGqlk2eC5SxekoC%2B9FHZ%2BFkwnOcz6A0UeiRTSPSfBv6V8pIv0n0YQ2ojXb7pPb1mKlGFRznE%2Fj5dr3f%2B4hlXp8ItFUKJ%2BgBS8%2FyodUAfTkG3gt6jhQhK98vBotZ7mCEWBW4fhxhjCF8RAZoDrBKxvKjyzB5cfzhY8ADvCJrIDS6BtCbTk68tuHpxoZGPt6davwZaQu5pECrO%2FZNLo21SRv352y4ro0Vpqfmb3odzFS6fYiNGegZ1TWIYCn5vSMUUSdlVlZqyZZbUh1x%2BIjA%3D%3D');
  background-position: center center;
  background-size: cover;
}

.btn-addToWishList {
  .bi-heart-fill {
    color: transparent;
  }
  &:hover {
    .bi-heart-fill {
      color: white;
    }
  }
}

.heart-fill-active {
  // active 樣式改為修改顏色
  color: white !important;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

// more-products swiper
.more-product-swiper {
  height: 300px;
}

.more-product-swiper .swiper-slide {
  img {
    position: relative;
  }
  &:hover {
    .swiper-slide-mask {
      opacity: 50%;
    }
    .swiper-slide-mask-btn {
      opacity: 100%;
    }
  }
}
.swiper-slide-mask {
  position: absolute;
  background-color: black;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0%;
  transition: ease-in-out 0.35s;
}

.swiper-slide-mask-btn {
  opacity: 0%;
  transition: ease-in-out 0.35s;
}

.swiper-slide .bg-opacity-75 {
  background: rgba(255, 255, 255, 0.9);
}

.swiper-button-prev {
  background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1693399232285.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=CxIaU4qeHDArnBAlLdV0lJgaAbGsxnpYe7Q4al%2B8LckdlhkLeQDL5TSu80tiDwQOIMKBD6tOWW8bUmXFTrqEb29Va9TL7UFwKzKYyraGWwscF%2FaXZxke1z0ti%2FwJqYY7kWG8%2FvNiHBvsb%2BaVG3hyzD82eiud9RrvG4Lnf93zWtgkpNDxFIWHah1%2FVD1x4Mnc15S1QK5gPF7eQB2lgGqa67Rd37VIsWMe0JDM4sSkwQoM6F8mPjB%2FmXvvyYAGI7ZMZk5O0PxmTliZC4c9tgxT60jX3ZNwb1DMkl%2Foyw534csYcFrt0REo8x8%2FTwtPGTMdwlPRzPf2yKLY7d0WYfKQSw%3D%3D') !important;
}
.swiper-button-prev::after {
  display: none;
}

.swiper-button-next {
  background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1693399233862.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=XzxONqc%2BASNXxpjtR%2B9WH127eflpY5uU9rJdTYOhb8pa1E11s5kOoMEYiE6l1%2Bk3Mi7cns%2Fv6QuAG81I0CqziA5uPY3%2F1Reqm06lhQW1d1SCIVgWDraVoqAVFozwyzy2JPqFfoHLs7RcGp29%2FKJ5hLJSt3pH%2B3KK0kBqyRTowxTz2XKYCCkqlTvMGJGzu0TAvmd2P4axuxqo6PAH5h0t0GCRPNkuhAx4tHZcfCOGfVy%2FH9lhtZpFWkuSALF%2Fymt4zgTPX7sZAzFARf98J3p73exlvfw7jXug4i8VxPpNJ4cazm7owffxmvXRdH8AkqRvm8PfOBC%2BigpvAx6JmdApZg%3D%3D') !important;
}
.swiper-button-next::after {
  display: none;
}
</style>
