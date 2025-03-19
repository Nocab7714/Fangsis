<template>
  <h2 class="fs-4 mb-3" style="font-family: var(--bs-NotoSerif-TC)">你可能也會喜歡</h2>
  <div class="py-4">
    <Swiper
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
      <SwiperSlide>
        <RouterLink to="/product/-NaUfrmB_22pg-iMk29q">
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690633769143.jpg"
            alt="放在木盤中的柚子香氛擴香 "
          />
          <div class="swiper-slide-mask"></div>
          <p
            class="swiper-slide-mask-btn position-absolute top-50 start-50 text-white border border-1 px-3 py-2 mb-0 translate-middle text-center"
          >
            香氛擴香
          </p>
        </RouterLink></SwiperSlide
      >
      <SwiperSlide>
        <RouterLink to="/product/-NaUd-NzuK3kTJRK_-wz">
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690633203526.jpg"
            alt="放在木桌上白色花梨大豆蠟燭"
          />
          <div class="swiper-slide-mask"></div>
          <p
            class="swiper-slide-mask-btn position-absolute top-50 start-50 text-white border border-1 px-3 py-2 mb-0 translate-middle text-center"
          >
            香氛蠟燭
          </p></RouterLink
        ></SwiperSlide
      >
      <SwiperSlide>
        <RouterLink to="/product/-NaUfmD6hldVIBMNW303">
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690633745811.jpg"
            alt="放在木盤子上面的白色香氛蠟燭"
          />
          <div class="swiper-slide-mask"></div>
          <p
            class="swiper-slide-mask-btn position-absolute top-50 start-50 text-white border border-1 px-3 py-2 mb-0 translate-middle text-center"
          >
            香氛蠟燭
          </p></RouterLink
        ></SwiperSlide
      >
      <SwiperSlide>
        <RouterLink to="/product/-NaUeamgqGkzq4BTFRJ0">
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690633534220.jpg"
            alt="四種不同材料的白色海鹽皂"
          />
          <div class="swiper-slide-mask"></div>
          <p
            class="swiper-slide-mask-btn position-absolute top-50 start-50 text-white border border-1 px-3 py-2 mb-0 translate-middle text-center"
          >
            山形海鹽皂
          </p></RouterLink
        ></SwiperSlide
      >
      <SwiperSlide>
        <RouterLink to="/product/-NaUgD1YW3GgBdaJMpZ2">
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690633823857.jpg"
            alt="放在木桌上的兩塊鳶尾花花香香氛沐浴皂"
          />
          <div class="swiper-slide-mask"></div>
          <p
            class="swiper-slide-mask-btn position-absolute top-50 start-50 text-white border border-1 px-3 py-2 mb-0 translate-middle text-center"
          >
            香氛沐浴皂
          </p></RouterLink
        ></SwiperSlide
      >
      <SwiperSlide>
        <RouterLink to="/product/-NaUd3lZGkS1IJDjaSCV">
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690633231830.jpg"
            alt="深棕色的木桌上擺著一排咖啡色的擴香 "
          />
          <div class="swiper-slide-mask"></div>
          <p
            class="swiper-slide-mask-btn position-absolute top-50 start-50 text-white border border-1 px-3 py-2 mb-0 translate-middle text-center"
          >
            居家擴香
          </p></RouterLink
        ></SwiperSlide
      >
      <SwiperSlide>
        <RouterLink to="/product/-NaUfgD8vUylevh0StTh">
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690633728303.jpg"
            alt="放在綠色植物葉片上的淡香水"
          />
          <div class="swiper-slide-mask"></div>
          <p
            class="swiper-slide-mask-btn position-absolute top-50 start-50 text-white border border-1 px-3 py-2 mb-0 translate-middle text-center"
          >
            香氛噴霧
          </p></RouterLink
        ></SwiperSlide
      >
      <SwiperSlide>
        <RouterLink to="/product/-NaUegMYLEbG-GRD7_IO">
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690633563910.jpg"
            alt="黃色粉紅色紫色的絲瓜片香皂"
          />
          <div class="swiper-slide-mask"></div>
          <p
            class="swiper-slide-mask-btn position-absolute top-50 start-50 text-white border border-1 px-3 py-2 mb-0 translate-middle text-center"
          >
            絲瓜片香皂
          </p>
        </RouterLink></SwiperSlide
      >
      <SwiperSlide>
        <RouterLink to="/product/-NaUfL_f4_W-jKhWWj6G">
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690633642899.png"
            alt="左下角有用藍底白字寫著海洋的英文旁邊還有一瓶擴香瓶"
          />
          <div class="swiper-slide-mask"></div>
          <p
            class="swiper-slide-mask-btn position-absolute top-50 start-50 text-white border border-1 px-3 py-2 mb-0 translate-middle text-center"
          >
            居家擴香
          </p>
        </RouterLink></SwiperSlide
      >
      <SwiperSlide>
        <RouterLink to="/product/-NaUb40DTd-PkPSJgMUm">
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690633060112.jpg"
            alt="紅色的洋甘菊香氛蠟燭"
          />
          <div class="swiper-slide-mask"></div>
          <p
            class="swiper-slide-mask-btn position-absolute top-50 start-50 text-white border border-1 px-3 py-2 mb-0 translate-middle text-center"
          >
            香氛蠟燭
          </p>
        </RouterLink></SwiperSlide
      >
    </Swiper>
  </div>
</template>

<script>
// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
import {
  Navigation, Autoplay, EffectFade, FreeMode,
} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

export default {
  data() {
    return {
      modules: [Navigation, Autoplay, EffectFade, FreeMode],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style lang="scss">
.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

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
  background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1693399232285.png') !important;
}
.swiper-button-prev::after {
  display: none;
}

.swiper-button-next {
  background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1693399233862.png') !important;
}
.swiper-button-next::after {
  display: none;
}
</style>
