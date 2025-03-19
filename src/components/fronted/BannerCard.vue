<template>
  <div class="container">
    <div
      class="banner-card z-index-2 bg-opacity-75 position-absolute bg-light p-4 pe-md-20 me-3 ms-1"
    >
      <h1
        class="text-primary text-center text-sm-start fs-4 fs-lg-2 fw-bold mb-4"
        style="font-family: var(--bs-NotoSerif-TC)"
      >
        用花蓮在地植物萃取，<br />
        呈現最具質感的香氛禮品。
      </h1>
      <p
        class="text-primary text-center text-sm-start fs-5 fs-lg-4 mb-7"
        style="font-family: var(--bs-NotoSerif-TC)"
      >
        送給她，送給自己。
      </p>
      <RouterLink class="btn btn-outline-primary w-100 w-sm-35 py-2" to="/products"
        >來去送禮</RouterLink
      >
    </div>
  </div>
  <Swiper
    :modules="modules"
    class="banner-swiper swiper-no-swiping"
    :autoplay="{
      delay: 2000,
      disableOnInteraction: false
    }"
    :loop="true"
    :effect="'fade'"
    :speed="2500"
    :noSwiping="true"
  >
    <SwiperSlide
      ><img
        class="d-sm-block d-none"
        src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1682567453158.png"
        alt="在模糊的綠色背景一隻手握著一瓶裝有黃色的香氛精油特寫"
        style="background-color: var(--bs-primary)" />

      <img
        class="d-sm-none d-block"
        src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1693314791115.png"
        alt="在模糊的綠色背景一隻手握著一瓶裝有黃色的香氛精油特寫"
        style="background-color: var(--bs-primary)"
    /></SwiperSlide>
    <SwiperSlide
      ><img
        class="d-sm-block d-none"
        src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1693310027239.png"
        alt="兩瓶小罐的精油瓶特寫近照"
        style="background-color: var(--bs-primary)"
      /><img
        class="d-sm-none d-block"
        src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1693314804290.png"
        alt="兩瓶小罐的精油瓶特寫近照"
        style="background-color: var(--bs-primary)"
      />
    </SwiperSlide>
    <SwiperSlide
      ><img
        class="d-sm-block d-none"
        src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1693310045265.png"
        alt="迷迭香的大特寫近照"
        style="background-color: var(--bs-primary)" />

      <img
        class="d-sm-none d-block"
        src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1693314818015.png"
        alt="迷迭香的大特寫近照"
        style="background-color: var(--bs-primary)"
    /></SwiperSlide>
    <SwiperSlide
      ><img
        class="d-sm-block d-none"
        src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1693310063025.png"
        alt="一瓶大瓶的精油放在光線下的特寫照"
        style="background-color: var(--bs-primary)" />
      <img
        class="d-sm-none d-block"
        src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1693314773856.png"
        alt="一瓶大瓶的精油放在光線下的特寫照"
        style="background-color: var(--bs-primary)"
    /></SwiperSlide>
  </Swiper>
</template>

<script>
// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

export default {
  data() {
    return {
      modules: [Autoplay, EffectFade], // Swiper modules
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style lang="scss" scoped>
.banner-swiper {
  width: auto;
  height: 100vh;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.banner-card {
  top: 45%;
}
</style>
