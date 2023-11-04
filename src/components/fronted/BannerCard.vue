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
      <router-link class="btn btn-outline-primary w-100 w-sm-35 py-2 rounded-0" to="/products"
        >來去送禮</router-link
      >
    </div>
  </div>
  <swiper
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
    <swiper-slide
      ><img
        class="d-sm-block d-none"
        src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1682567453158.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=JQxvd8sFvKwS4kfpHIftV7Icb0lrQ33pmN%2B1t02GK7EfebhImHfuIxsj8pRYIvRLRVcybh1Vt0QwRpcrxQkCMyozw3OGvQDkFRZnZDweBey%2FW0k0YNRKrch9jlOA%2B7MLoBTcXtBN4LgWTn0gxoQredEtBRYeILp7wx03K4uv7u9BeB20Aui8d6TjlXY3ujra5nXsmLM7sIse12FcAncTV7SZCwUfHjwUUNZkExbkR9zT7FJvLv8btLLG%2FQxB2DGN6Ckb59ZOZzn9Il8oyOFbuIaeeE84xxTE0nP02MDndSzbgZ28cvgZY0oCYwPF7lU4hKKiJl4sV%2Ff7RkgPOA94RA%3D%3D"
        alt="在模糊的綠色背景一隻手握著一瓶裝有黃色的香氛精油特寫"
        style="background-color: var(--bs-primary)" />

      <img
        class="d-sm-none d-block"
        src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1693314791115.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=DwUZr3R3g1RoVyic%2FtCirzyvBqSkYfxmcF2JnN76uggdD5L2vgbCpYAE4uYt%2Bp9PBvkJMY8IbjZ95GQrZsHCAVXpoiJZNPh2JPDFc3JwFYoEnHjBdA14E3BOtl3M2ZQDJHMwT7l7G6HEI8A7g4wjBdtFx20JKT2WlB7rbCMkeUA56YPo0J2qwMdDTlEgDlIgiUiwuNVr9REQnkJN4U6st%2FIyEuUlD641SQYmWuDLn4erMKZB86IbFxqS87BfNwh1uxiU%2FdRCeXxIYw7rfTLIEaLt1iD%2FPj2EkCZykoivhA4%2Ff1GNeEtiJmVD7rq5xgK3y5MUMrfoLcR%2FANtgMRSnow%3D%3D"
        alt="在模糊的綠色背景一隻手握著一瓶裝有黃色的香氛精油特寫"
        style="background-color: var(--bs-primary)"
    /></swiper-slide>
    <swiper-slide
      ><img
        class="d-sm-block d-none"
        src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1693310027239.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=iFbZeMaJPxF53H1H4pNVc15bzaZHYXywmpQmYJ4t2y8O8JEsdaJCYaunbghO%2BPdBJXtsbvczzddczVT1jfwT3GPYnLGIQJKmMz73dD6gcQy3%2FnmMxZUxpjA4w%2BBa5lZYshU6n5foKS0N%2F7pcolTHh%2BopQTE5iGFaWNdH8WAfybu%2F5hetJj4zLKmLmWrTd1kJs8BGWNcsg5lDeIlV5ucl%2BANE%2BIQ8SZydZfOIQO69OeDL4pVu0VJ3RHOlG%2BY6cE%2BN%2FcnPkOCMgcyLOePIEmHJN2YlkPPgtpubuI3bhFeWc9gVuvRSQNJs7uOCms7P2tMQDhafUmM5DAjIjDixMoCFlQ%3D%3D"
        alt="兩瓶小罐的精油瓶特寫近照"
        style="background-color: var(--bs-primary)"
      /><img
        class="d-sm-none d-block"
        src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1693314804290.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=JhjTF42ee9zykEpgG3Hfb9npB9hcQBF2%2By3XOqxeVBn6pZmD%2FRFzj%2FgP3Qj%2Bq67p9nkrK0NGJpzy5jIyCk%2BnusADnh27qLD2M5PidBZN5mq9NQOtl%2FmUD2YmIGIP%2F0CVotsAI3Xhjd00JmpupUR%2Bw16IkV1BoC5hJEj5dH8l5PSeJYzVWXjXHOlQwyhS0bzxm90kFRggDgYRwRrJC33BJKN7zTZ%2B5Bi9zj4zHX3Tjk1tINwLefuxoijm%2Fy3Sn1t09SvaJMevk%2BmT2%2F9TlYKradjRFMB4NsU7ou4RHPKAv83ub49RzYX%2BQJ77rqu51YoDy0IOe4bG0wNJS1kTd%2FwhVw%3D%3D"
        alt="兩瓶小罐的精油瓶特寫近照"
        style="background-color: var(--bs-primary)"
      />
    </swiper-slide>
    <swiper-slide
      ><img
        class="d-sm-block d-none"
        src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1693310045265.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=m0DWPedrl%2F7quEh7SHq%2F5hWnjsSu3iwfuc9EpIP%2FaNTG%2B47mi44oVZT5KsP0BIU%2BasarjEKfW751VNH8bD0w6hU6WKRMxkU5EdkUHZOdcxW0cNIWSJccg4ACMGE8CpMTXmlxTe9iQar1m%2FqW6i9e%2B0xUh7mC0Pk1zWsFCQseY0In6e5X5BN%2BeS8Uakd%2BgBtmhJLV5%2BZI80zemsCD2zEh%2BitzAhjR0MpAKyeqCFi5PpdufR%2FkuSw2SWdLjAq3K2234%2BoEGIqLH%2Bm3NZ7lpnopV1n5EYd%2BpoegVdZPNY7cGbkHhT3LuhyoOfMxigzbGECS3Zrtdoy95VEk1ng3HiB3Ow%3D%3D"
        alt="迷迭香的大特寫近照"
        style="background-color: var(--bs-primary)" />

      <img
        class="d-sm-none d-block"
        src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1693314818015.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=eLYK9PwnCmpYdCNWbQPa0pQ9jb8Csvw6Et9pA3J6VafnnB5XOcKMbAUdTNloALU2b8YuzKmkXVloR8naBmCKvRUpWNToFKUYcPYpkAGGzsKfBTrZ860xcByRV5MMx27gRG39RfJW5c%2FK7AHweIHWktig2Hvvdl9OSvyMeEwOarisacttXtSWDOc49vHTOEbU2x2f174qXM%2FlMyvjkzSBMlOncO0C7Gq%2BIYtSwVzyRfmG4ySWIr%2FtyYY0MO0CEzfNwlI2wYTJpWEHsFaIccTO5mFekLWaK5nzGjYCKT1vGaJAjE%2FoPYJSZXlLoHGl0E3TrglhqxIbQ2%2FqD7qjX8sU2g%3D%3D"
        alt="迷迭香的大特寫近照"
        style="background-color: var(--bs-primary)"
    /></swiper-slide>
    <swiper-slide
      ><img
        class="d-sm-block d-none"
        src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1693310063025.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=SMyBmDyV80fgI1tlE0ZeRPHdKXEZHPYx1M7LyRdv9QtzEap7z7pf84FG2O32pqr8yJK%2FaxhLMaHJCyo1ck9Ofh0Rhxunxvpl7g5fpFQw0gGVnfKvXpbH29hUtg1BwWkKUkNClni4%2FQPHbnpWI6S34TFvKkpN2omzQMJ%2FpudRKGTEhqgKGmGFPJip0a7E9lSxv3hdRYm1VWqAHzlfZKP7TLmW48ZpGrGljnIuyHJ%2FqBkDhh78dlmF%2FS8oCKnHWzF22SpMGrzjFseTLaeyxbcg5WZyFCoSl1uoea%2BwuCqM9rRAQZCx0XwuseVGNBU%2BpRIzeDsFKNIIL3ppVtLJJDbFfQ%3D%3D"
        alt="一瓶大瓶的精油放在光線下的特寫照"
        style="background-color: var(--bs-primary)" />
      <img
        class="d-sm-none d-block"
        src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1693314773856.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=jegYrUdaIK06E%2BeG3WGISKKiXSxNdNc32tHdMMECP0F7%2FnbfrYa9Oao6hctPX%2FjmHXhMjIG94IFooeobbVgx7jOWqb0UMtBsUajLJmLw%2F6IUbsVRnL3RyrvVv2QznAdsyVVgZpQ7g93%2Bbi6BQclCRN9gGWBfLiWjpXyg7vWzHO0qawakTizd9UG7Yy%2BvgxTAiNah6XKFMzHY0clSkvJYHyywAbHDNqJtl4gTlTsie8sUW6YyeiCg4AFMkz%2FAU6AgDFA9C0KNzCxESHwt0vDSsJTb%2Fq4czKp8Y8EATRI9cS0n6pXUvEGYDTeidriB%2B%2BEtnFnmrgf6dmGYSYq9zIwaaQ%3D%3D"
        alt="一瓶大瓶的精油放在光線下的特寫照"
        style="background-color: var(--bs-primary)"
    /></swiper-slide>
  </swiper>
</template>

<script>
// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'

export default {
  data() {
    return {
      modules: [Autoplay, EffectFade] //Swiper modules
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
}
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
