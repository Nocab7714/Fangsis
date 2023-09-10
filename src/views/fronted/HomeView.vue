<template>
  <header>
    <div class="container">
      <div
        class="banner-card z-index-2 bg-opacity-75 position-absolute bg-light p-4 pe-md-20 me-3 ms-1"
      >
        <h1
          class="text-primary text-center text-sm-start fs-4 fs-lg-2 mb-4"
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
        <router-link class="btn btn-outline-primary w-100 w-sm-35" to="/products"
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
      :speed="2000"
      :noSwiping="true"
    >
      <swiper-slide
        ><img
          class="d-sm-block d-none"
          src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1682567453158.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=JQxvd8sFvKwS4kfpHIftV7Icb0lrQ33pmN%2B1t02GK7EfebhImHfuIxsj8pRYIvRLRVcybh1Vt0QwRpcrxQkCMyozw3OGvQDkFRZnZDweBey%2FW0k0YNRKrch9jlOA%2B7MLoBTcXtBN4LgWTn0gxoQredEtBRYeILp7wx03K4uv7u9BeB20Aui8d6TjlXY3ujra5nXsmLM7sIse12FcAncTV7SZCwUfHjwUUNZkExbkR9zT7FJvLv8btLLG%2FQxB2DGN6Ckb59ZOZzn9Il8oyOFbuIaeeE84xxTE0nP02MDndSzbgZ28cvgZY0oCYwPF7lU4hKKiJl4sV%2Ff7RkgPOA94RA%3D%3D"
          alt="在模糊的綠色背景一隻手握著一瓶裝有黃色的香氛精油特寫" />
        <img
          class="d-sm-none d-block"
          src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1693314791115.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=DwUZr3R3g1RoVyic%2FtCirzyvBqSkYfxmcF2JnN76uggdD5L2vgbCpYAE4uYt%2Bp9PBvkJMY8IbjZ95GQrZsHCAVXpoiJZNPh2JPDFc3JwFYoEnHjBdA14E3BOtl3M2ZQDJHMwT7l7G6HEI8A7g4wjBdtFx20JKT2WlB7rbCMkeUA56YPo0J2qwMdDTlEgDlIgiUiwuNVr9REQnkJN4U6st%2FIyEuUlD641SQYmWuDLn4erMKZB86IbFxqS87BfNwh1uxiU%2FdRCeXxIYw7rfTLIEaLt1iD%2FPj2EkCZykoivhA4%2Ff1GNeEtiJmVD7rq5xgK3y5MUMrfoLcR%2FANtgMRSnow%3D%3D"
          alt="在模糊的綠色背景一隻手握著一瓶裝有黃色的香氛精油特寫"
      /></swiper-slide>
      <swiper-slide
        ><img
          class="d-sm-block d-none"
          src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1693310027239.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=iFbZeMaJPxF53H1H4pNVc15bzaZHYXywmpQmYJ4t2y8O8JEsdaJCYaunbghO%2BPdBJXtsbvczzddczVT1jfwT3GPYnLGIQJKmMz73dD6gcQy3%2FnmMxZUxpjA4w%2BBa5lZYshU6n5foKS0N%2F7pcolTHh%2BopQTE5iGFaWNdH8WAfybu%2F5hetJj4zLKmLmWrTd1kJs8BGWNcsg5lDeIlV5ucl%2BANE%2BIQ8SZydZfOIQO69OeDL4pVu0VJ3RHOlG%2BY6cE%2BN%2FcnPkOCMgcyLOePIEmHJN2YlkPPgtpubuI3bhFeWc9gVuvRSQNJs7uOCms7P2tMQDhafUmM5DAjIjDixMoCFlQ%3D%3D"
          alt="兩瓶小罐的精油瓶特寫近照"
        /><img
          class="d-sm-none d-block"
          src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1693314804290.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=JhjTF42ee9zykEpgG3Hfb9npB9hcQBF2%2By3XOqxeVBn6pZmD%2FRFzj%2FgP3Qj%2Bq67p9nkrK0NGJpzy5jIyCk%2BnusADnh27qLD2M5PidBZN5mq9NQOtl%2FmUD2YmIGIP%2F0CVotsAI3Xhjd00JmpupUR%2Bw16IkV1BoC5hJEj5dH8l5PSeJYzVWXjXHOlQwyhS0bzxm90kFRggDgYRwRrJC33BJKN7zTZ%2B5Bi9zj4zHX3Tjk1tINwLefuxoijm%2Fy3Sn1t09SvaJMevk%2BmT2%2F9TlYKradjRFMB4NsU7ou4RHPKAv83ub49RzYX%2BQJ77rqu51YoDy0IOe4bG0wNJS1kTd%2FwhVw%3D%3D"
          alt="兩瓶小罐的精油瓶特寫近照"
        />
      </swiper-slide>
      <swiper-slide
        ><img
          class="d-sm-block d-none"
          src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1693310045265.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=m0DWPedrl%2F7quEh7SHq%2F5hWnjsSu3iwfuc9EpIP%2FaNTG%2B47mi44oVZT5KsP0BIU%2BasarjEKfW751VNH8bD0w6hU6WKRMxkU5EdkUHZOdcxW0cNIWSJccg4ACMGE8CpMTXmlxTe9iQar1m%2FqW6i9e%2B0xUh7mC0Pk1zWsFCQseY0In6e5X5BN%2BeS8Uakd%2BgBtmhJLV5%2BZI80zemsCD2zEh%2BitzAhjR0MpAKyeqCFi5PpdufR%2FkuSw2SWdLjAq3K2234%2BoEGIqLH%2Bm3NZ7lpnopV1n5EYd%2BpoegVdZPNY7cGbkHhT3LuhyoOfMxigzbGECS3Zrtdoy95VEk1ng3HiB3Ow%3D%3D"
          alt="迷迭香的大特寫近照" />
        <img
          class="d-sm-none d-block"
          src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1693314818015.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=eLYK9PwnCmpYdCNWbQPa0pQ9jb8Csvw6Et9pA3J6VafnnB5XOcKMbAUdTNloALU2b8YuzKmkXVloR8naBmCKvRUpWNToFKUYcPYpkAGGzsKfBTrZ860xcByRV5MMx27gRG39RfJW5c%2FK7AHweIHWktig2Hvvdl9OSvyMeEwOarisacttXtSWDOc49vHTOEbU2x2f174qXM%2FlMyvjkzSBMlOncO0C7Gq%2BIYtSwVzyRfmG4ySWIr%2FtyYY0MO0CEzfNwlI2wYTJpWEHsFaIccTO5mFekLWaK5nzGjYCKT1vGaJAjE%2FoPYJSZXlLoHGl0E3TrglhqxIbQ2%2FqD7qjX8sU2g%3D%3D"
          alt="迷迭香的大特寫近照"
      /></swiper-slide>
      <swiper-slide
        ><img
          class="d-sm-block d-none"
          src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1693310063025.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=SMyBmDyV80fgI1tlE0ZeRPHdKXEZHPYx1M7LyRdv9QtzEap7z7pf84FG2O32pqr8yJK%2FaxhLMaHJCyo1ck9Ofh0Rhxunxvpl7g5fpFQw0gGVnfKvXpbH29hUtg1BwWkKUkNClni4%2FQPHbnpWI6S34TFvKkpN2omzQMJ%2FpudRKGTEhqgKGmGFPJip0a7E9lSxv3hdRYm1VWqAHzlfZKP7TLmW48ZpGrGljnIuyHJ%2FqBkDhh78dlmF%2FS8oCKnHWzF22SpMGrzjFseTLaeyxbcg5WZyFCoSl1uoea%2BwuCqM9rRAQZCx0XwuseVGNBU%2BpRIzeDsFKNIIL3ppVtLJJDbFfQ%3D%3D"
          alt="一瓶大瓶的精油放在光線下的特寫照" />
        <img
          class="d-sm-none d-block"
          src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1693314773856.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=jegYrUdaIK06E%2BeG3WGISKKiXSxNdNc32tHdMMECP0F7%2FnbfrYa9Oao6hctPX%2FjmHXhMjIG94IFooeobbVgx7jOWqb0UMtBsUajLJmLw%2F6IUbsVRnL3RyrvVv2QznAdsyVVgZpQ7g93%2Bbi6BQclCRN9gGWBfLiWjpXyg7vWzHO0qawakTizd9UG7Yy%2BvgxTAiNah6XKFMzHY0clSkvJYHyywAbHDNqJtl4gTlTsie8sUW6YyeiCg4AFMkz%2FAU6AgDFA9C0KNzCxESHwt0vDSsJTb%2Fq4czKp8Y8EATRI9cS0n6pXUvEGYDTeidriB%2B%2BEtnFnmrgf6dmGYSYq9zIwaaQ%3D%3D"
          alt="一瓶大瓶的精油放在光線下的特寫照"
      /></swiper-slide>
    </swiper>
  </header>
  <!-- about section -->
  <section class="about section-bkg py-7" :style="{ backgroundImage: `url(${imgUrl.aboutBkg})` }">
    <div class="container">
      <div data-aos="fade-up">
        <h2 class="fs-2 text-primary text-center mb-6" style="font-family: var(--bs-NotoSerif-TC)">
          關於芳心。
        </h2>
      </div>

      <div class="row flex-lg-row flex-column-reverse align-items-center gx-lg-8 gy-3">
        <div class="col-lg-6 p-55">
          <div data-aos="fade-up">
            <h3
              class="text-secondary fs-3 fw-bold mb-3"
              style="font-family: var(--bs-NotoSerif-TC)"
            >
              Fangsis
            </h3>
            <p class="text-secondary fs-4 fw-bold mb-4">
              是阿美族語「馨香之氣」的意思， 那是造物主給予最獨特的記號。
            </p>
            <p class="text-secondary mb-4">
              在花蓮，能看到大自然的美，就好像呼吸一樣理所當然。<br />
              但這份禮物卻一點一滴的從我們眼前流失。<br />
              我們希望連結花蓮在地的小農，用在地的農作物，<br />
              重心出發，恢復大地原本的芳香。
            </p>
            <routerLink to="/about" class="btn btn-outline-primary w-100 w-lg-35" href=""
              >View More</routerLink
            >
          </div>
        </div>

        <div class="col-lg-6">
          <div data-aos="fade-up">
            <img
              class="img-fluid d-none d-lg-block"
              src="https://shorturl.at/ckqGN"
              alt="用滴管將黃色精油滴在手上的特寫"
              width="636"
              height="368"
            />
            <div
              class="aboutImg d-block d-lg-none"
              :style="{ backgroundImage: `url(${imgUrl.aboutImg})` }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- pain-points section -->
  <section class="pain-points">
    <!-- 網頁版 pain-points -->
    <div class="container d-md-block d-none">
      <div data-aos="fade-up">
        <div class="row gy-4 gy-xl-0">
          <div class="col-xl-4">
            <div class="card border-0">
              <div
                class="card-body position-relative point-bkg"
                :style="{ backgroundImage: `url(${imgUrl.pointBkg01})` }"
              >
                <div
                  class="point-mask position-absolute d-flex justify-content-center align-items-center"
                >
                  <div
                    class="circle border border-1 rounded-circle circle-size text-center d-flex flex-column align-items-center justify-content-center"
                  >
                    <h3
                      class="text-white fs-5 card-title point-card-title mb-5"
                      style="font-family: var(--bs-NotoSerif-TC)"
                    >
                      想要送禮卻不知道送什麼嗎
                    </h3>
                    <div class="link-border border border-1 rounded-1 py-2">
                      <routerLink
                        class="link-light text-decoration-none fs-6 px-6 stretched-link"
                        to="/products"
                        >Read More</routerLink
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4">
            <div class="card border-0">
              <div
                class="card-body position-relative point-bkg"
                :style="{ backgroundImage: `url(${imgUrl.pointBkg02})` }"
              >
                <div
                  class="point-mask position-absolute d-flex justify-content-center align-items-center"
                >
                  <div
                    class="circle border border-1 rounded-circle circle-size text-center d-flex flex-column align-items-center justify-content-center"
                  >
                    <h3
                      class="text-white fs-5 card-title point-card-title mb-5"
                      style="font-family: var(--bs-NotoSerif-TC)"
                    >
                      總覺得送的禮物不夠實用嗎
                    </h3>
                    <div class="link-border border border-1 rounded-1 py-2">
                      <routerLink
                        class="link-light text-decoration-none fs-6 px-6 stretched-link"
                        to="/products"
                        >Read More</routerLink
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4">
            <div class="card border-0">
              <div
                class="card-body position-relative point-bkg"
                :style="{ backgroundImage: `url(${imgUrl.pointBkg03})` }"
              >
                <div
                  class="point-mask position-absolute d-flex justify-content-center align-items-center"
                >
                  <div
                    class="circle border border-1 rounded-circle circle-size text-center d-flex flex-column align-items-center justify-content-center"
                  >
                    <h3
                      class="text-white fs-5 card-title point-card-title mb-5"
                      style="font-family: var(--bs-NotoSerif-TC)"
                    >
                      擔心過度包裝會破壞環境嗎
                    </h3>
                    <div class="link-border border border-1 rounded-1 py-2">
                      <routerLink
                        class="link-light text-decoration-none fs-6 px-6 stretched-link"
                        to="/products"
                        >Read More</routerLink
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 手機板 pain-points -->
    <div class="d-block d-md-none">
      <div class="row gy-4 gy-xl-0 gx-0">
        <div class="col-xl-4">
          <div data-aos="fade-up">
            <div class="card border-0">
              <div
                class="card-body position-relative point-bkg"
                :style="{ backgroundImage: `url(${imgUrl.pointBkg01})` }"
              >
                <div
                  class="point-mask position-absolute d-flex justify-content-center align-items-center"
                >
                  <div
                    class="circle border border-1 rounded-circle circle-size text-center d-flex flex-column align-items-center justify-content-center"
                  >
                    <h3
                      class="text-white fs-5 card-title point-card-title mb-5"
                      style="font-family: var(--bs-NotoSerif-TC)"
                    >
                      想要送禮卻不知道送什麼嗎
                    </h3>
                    <div class="link-border border border-1 rounded-1 py-2">
                      <routerLink
                        class="link-light text-decoration-none fs-6 px-6 stretched-link"
                        to="/products"
                        >Read More</routerLink
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4">
          <div data-aos="fade-up">
            <div class="card border-0">
              <div
                class="card-body position-relative point-bkg"
                :style="{ backgroundImage: `url(${imgUrl.pointBkg02})` }"
              >
                <div
                  class="point-mask position-absolute d-flex justify-content-center align-items-center"
                >
                  <div
                    class="circle border border-1 rounded-circle circle-size text-center d-flex flex-column align-items-center justify-content-center"
                  >
                    <h3
                      class="text-white fs-5 card-title point-card-title mb-5"
                      style="font-family: var(--bs-NotoSerif-TC)"
                    >
                      總覺得送的禮物不夠實用嗎
                    </h3>
                    <div class="link-border border border-1 rounded-1 py-2">
                      <routerLink
                        class="link-light text-decoration-none fs-6 px-6 stretched-link"
                        to="/products"
                        >Read More</routerLink
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4">
          <div data-aos="fade-up">
            <div class="card border-0">
              <div
                class="card-body position-relative point-bkg"
                :style="{ backgroundImage: `url(${imgUrl.pointBkg03})` }"
              >
                <div
                  class="point-mask position-absolute d-flex justify-content-center align-items-center"
                >
                  <div
                    class="circle border border-1 rounded-circle circle-size text-center d-flex flex-column align-items-center justify-content-center"
                  >
                    <h3
                      class="text-white fs-5 card-title point-card-title mb-5"
                      style="font-family: var(--bs-NotoSerif-TC)"
                    >
                      擔心過度包裝會破壞環境嗎
                    </h3>
                    <div class="link-border border border-1 rounded-1 py-2">
                      <routerLink
                        class="link-light text-decoration-none fs-6 px-6 stretched-link"
                        to="/products"
                        >Read More</routerLink
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- hot-sale section -->
  <section
    class="hot-sale py-7 section-bkg"
    :style="{ backgroundImage: `url(${imgUrl.hotSellBkg})` }"
  >
    <div class="container">
      <div data-aos="fade-up">
        <h2 class="fs-2 text-primary text-center mb-6" style="font-family: var(--bs-NotoSerif-TC)">
          熱銷禮盒。
        </h2>
      </div>
      <!-- 網頁版 hot-sale -->
      <div class="hot-sale-desktop d-none d-md-block">
        <div data-aos="fade-up">
          <routerLink class="hot-sale-link text-decoration-none" to="/product/-NbqyfLN2KMNTi0BDw2a">
            <div class="card border-0 position-relative">
              <div class="row g-0">
                <div class="col-6">
                  <div
                    class="position-relative h-100 hot-sale-bkg-img"
                    :style="{ backgroundImage: `url(${imgUrl.hotSaleDesktopImg01})` }"
                  >
                    <div class="hot-sale-img-mask position-absolute"></div>
                    <div
                      class="position-absolute fs-5 text-white border border-1 border-light rounded-1 top-50 start-50 translate-middle hot-sale-btn py-2 px-3"
                    >
                      View More
                    </div>
                  </div>
                </div>
                <div class="col-6 hot-sale-hover-style">
                  <div
                    class="card-body text-center px-6 py-10 d-flex flex-column align-items-center"
                  >
                    <h3
                      class="card-title fs-3 fw-bold text-secondary mb-3"
                      style="font-family: var(--bs-NotoSerif-TC)"
                    >
                      柚子雪松蠟燭禮盒
                    </h3>
                    <p class="card-text fs-6 text-secondary">
                      雄偉巨大的大西洋雪松，是力量、智慧與富裕的象徵。雪松精油具有非常好的鎮靜效果，木質調的香氣也能讓人感到平靜。柚子與雪松兩者的結合高貴又甜美，並以香氛蠟燭為主打，不論是明火點燃或融蠟燈的光源，都能讓人感到安心、溫暖，並從嗅覺和視覺中獲得療癒和釋放。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </routerLink>
          <routerLink class="hot-sale-link text-decoration-none" to="/product/-NbqyIBPAuloX43ptLPf">
            <div class="card border-0 position-relative">
              <div class="row g-0">
                <div class="col-6 hot-sale-hover-style">
                  <div
                    class="card-body text-center px-6 py-10 d-flex flex-column align-items-center"
                  >
                    <h3
                      class="card-title fs-3 fw-bold text-secondary mb-3"
                      style="font-family: var(--bs-NotoSerif-TC)"
                    >
                      柚子花梨沐浴禮盒
                    </h3>
                    <p class="card-text fs-6 text-secondary">
                      花梨木，也叫玫瑰木Rosewood，散發著淡淡的玫瑰香氣的木質調，平易近人卻又如此的貼近心房，就像它的花語「讓一切回歸平凡」一樣。花梨木的香氣輕柔、淡雅、溫潤，在身心俱疲時，花梨木精油帶來穩定及收斂心情的作用。以泡澡球為主打，送給疲倦忙碌的她/他，來一個輕鬆享受的泡泡浴。
                    </p>
                  </div>
                </div>
                <div class="col-6">
                  <div
                    class="position-relative h-100 hot-sale-bkg-img"
                    :style="{ backgroundImage: `url(${imgUrl.hotSaleDesktopImg02})` }"
                  >
                    <div class="hot-sale-img-mask position-absolute"></div>
                    <div
                      class="position-absolute fs-5 text-white border border-1 border-light rounded-1 top-50 start-50 translate-middle hot-sale-btn py-2 px-3"
                    >
                      View More
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </routerLink>
          <routerLink class="hot-sale-link text-decoration-none" to="/product/-NbqyVvyXTcrspg7NMK9">
            <div class="card border-0 position-relative">
              <div class="row g-0">
                <div class="col-6">
                  <div
                    class="position-relative h-100 hot-sale-bkg-img"
                    :style="{ backgroundImage: `url(${imgUrl.hotSaleDesktopImg03})` }"
                  >
                    <div class="hot-sale-img-mask position-absolute"></div>
                    <div
                      class="position-absolute fs-5 text-white border border-1 border-light rounded-1 top-50 start-50 translate-middle hot-sale-btn py-2 px-3"
                    >
                      View More
                    </div>
                  </div>
                </div>
                <div class="col-6 hot-sale-hover-style">
                  <div
                    class="card-body text-center px-6 py-10 d-flex flex-column align-items-center"
                  >
                    <h3
                      class="card-title fs-3 fw-bold text-secondary mb-3"
                      style="font-family: var(--bs-NotoSerif-TC)"
                    >
                      柚子鳶尾花擴香禮盒
                    </h3>
                    <p class="card-text fs-6 text-secondary">
                      鳶尾花「Iris」，在希臘文中是彩虹的意思，會給人帶來好消息，也是鳶尾花花語「愛的使者」的由來。細膩濃厚，無與倫比的芳香，令人神魂顛倒。柚子與鳶尾花，是優雅與愉悅的結合，以擴香為主打，讓香氣滿溢在空間中，就好像好消息一直伴隨。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </routerLink>
        </div>
      </div>
      <!-- 行動版 hot-sale -->
      <div class="hot-sale-mobile d-block d-md-none">
        <div data-aos="fade-up">
          <div class="card mb-3 border-0 rounded-0">
            <img
              :src="imgUrl.hotSaleMobileImg01"
              class="card-img-top img-fluid rounded-0"
              alt="禮盒中有一塊薑餅人造型香皂的禮盒"
              width="351"
              height="320"
            />
            <div class="card-body text-center text-secondary px-55 py-4">
              <h3 class="card-title fs-3 fw-bold mb-4" style="font-family: var(--bs-NotoSerif-TC)">
                柚子雪松蠟燭禮盒
              </h3>
              <p class="card-text fs-6 mb-4">
                雄偉巨大的大西洋雪松，是力量、智慧與富裕的象徵。雪松精油具有非常好的鎮靜效果，木質調的香氣也能讓人感到平靜。柚子與雪松兩者的結合高貴又甜美，並以香氛蠟燭為主打，不論是明火點燃或融蠟燈的光源，都能讓人感到安心、溫暖，並從嗅覺和視覺中獲得療癒和釋放。
              </p>
              <routerLink
                to="/product/-NbqyfLN2KMNTi0BDw2a"
                class="btn btn-outline-secondary w-100 fs-6"
                >View More</routerLink
              >
            </div>
          </div>
        </div>
        <div data-aos="fade-up">
          <div class="card mb-3 border-0 rounded-0">
            <img
              :src="imgUrl.hotSaleMobileImg02"
              class="card-img-top img-fluid rounded-0"
              alt="禮盒中有一個聖誕樹造型的香皂與兩個帶有花圖案的沐浴球"
              width="351"
              height="320"
            />
            <div class="card-body text-center text-secondary px-55 py-4">
              <h3 class="card-title fs-3 fw-bold mb-4" style="font-family: var(--bs-NotoSerif-TC)">
                柚子花梨沐浴禮盒
              </h3>
              <p class="card-text fs-6 mb-4">
                花梨木，也叫玫瑰木Rosewood，散發著淡淡的玫瑰香氣的木質調，平易近人卻又如此的貼近心房，就像它的花語「讓一切回歸平凡」一樣。花梨木的香氣輕柔、淡雅、溫潤，在身心俱疲時，花梨木精油帶來穩定及收斂心情的作用。以泡澡球為主打，送給疲倦忙碌的她/他，來一個輕鬆享受的泡泡浴。
              </p>
              <routerLink
                to="/product/-NbqyIBPAuloX43ptLPf"
                class="btn btn-outline-secondary w-100 fs-6"
                >View More</routerLink
              >
            </div>
          </div>
        </div>

        <div data-aos="fade-up">
          <div class="card mb-3 border-0 rounded-0">
            <img
              :src="imgUrl.hotSaleMobileImg03"
              class="card-img-top img-fluid rounded-0"
              alt="禮盒中有一塊薑餅人造型香皂並且禮盒周圍有很多聖誕裝飾物品"
              width="351"
              height="320"
            />
            <div class="card-body text-center text-secondary px-55 py-4">
              <h3 class="card-title fs-3 fw-bold mb-4" style="font-family: var(--bs-NotoSerif-TC)">
                柚子鳶尾花擴香禮盒
              </h3>
              <p class="card-text fs-6 mb-4">
                鳶尾花「Iris」，在希臘文中是彩虹的意思，會給人帶來好消息，也是鳶尾花花語「愛的使者」的由來。細膩濃厚，無與倫比的芳香，令人神魂顛倒。柚子與鳶尾花，是優雅與愉悅的結合，以擴香為主打，讓香氣滿溢在空間中，就好像好消息一直伴隨。
              </p>
              <routerLink
                to="/product/-NbqyVvyXTcrspg7NMK9"
                class="btn btn-outline-secondary w-100 fs-6"
                >View More</routerLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- more-products section -->
  <section class="more-products">
    <h2 class="fs-2 text-primary text-center mb-6" style="font-family: var(--bs-NotoSerif-TC)">
      更多香氛。
    </h2>

    <!-- swiper -->
    <div class="bg-light py-4">
      <swiper
        :slidesPerView="1"
        :spaceBetween="10"
        :breakpoints="{
          '376': {
            slidesPerView: 1.25,
            spaceBetween: 20
          },
          '576': {
            slidesPerView: 2.5,
            spaceBetween: 20
          },
          '768': {
            slidesPerView: 3.5,
            spaceBetween: 20
          },
          '1200': {
            slidesPerView: 4.5,
            spaceBetween: 20
          }
        }"
        :modules="modules"
        :navigation="true"
        :loop="true"
        :freeMode="true"
        class="more-product-swiper"
      >
        <swiper-slide>
          <router-link to="/product/-NaUfrmB_22pg-iMk29q">
            <img
              src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690633769143.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ejuKNHXdsLAbIKMvCP4nBukOQCAQT24uUfdkmrhCoWTPysqvfDgwbIAeQu8pzHbmVFVjo%2FBlukUV8MpVL5GwQJvIae4cPbtOvCR2C1YnF2igHjUiZv%2FblMvbjGYHsSBwdDugoNDq41jbXAtfD%2Fr7wKCPbC85EnG90050%2BbIjZ0MCpf3bw4%2BWbYme6ALqfHmWA5yr6jgaC55WiYhXRRpLXAcUEj7%2FxdWkS1BTniECwLm757CfyijBT9TaTfCEJiMc0%2FTPzDsFOTRDh4hDZkk790%2FSf7Srlw1lHaOnLt%2B5SinjNtK9xCrpKbCnLF6nz%2BuiT9lCxcuv3gRKImQdzXr4IA%3D%3D"
              alt="放在木盤中的柚子香氛擴香 "
            />
            <div class="swiper-slide-mask"></div>
            <p
              class="swiper-slide-mask-btn position-absolute top-50 start-50 text-white border border-1 rounded px-3 py-2 mb-0 translate-middle"
            >
              view more
            </p>
          </router-link></swiper-slide
        >
        <swiper-slide>
          <router-link to="/product/-NaUfmD6hldVIBMNW303">
            <img
              src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690633745811.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=GAADz5FaDFXMsKYX%2FFMOdLO6YKb%2Bf0OrLtFlyeNuuOPCwW5PpvN6OSZBGp6SiQNlalIvnZMpRuDe3lNDX%2Fy1nrsI4LHv%2BjuToFGAeYgb6v%2FbZQf4IjGfRSU39iFHNEdwIDZPtoOsYoRvfl%2B1oLMiBOd6Tk9BUfH0ewuYtpFkjj%2F0KTSvytaaQL6As0TF1cV9XAZgaL9xDNf29LMnLCYWuuCZvMdNaJ1RMrYoGD24wk63yXvztVDM6%2FKg6f8rbkuX9QMHMSJ%2BBlCbQdW26zM7gifn%2FxpvTbWPr4ADVhjp%2BTgxgw6yHVTzT8XTnTL0a4baPwKNTjnsEBMBoYRLU75emg%3D%3D"
              alt="放在木盤子上面的白色香氛蠟燭"
            />
            <div class="swiper-slide-mask"></div>
            <p
              class="swiper-slide-mask-btn position-absolute top-50 start-50 text-white border border-1 rounded px-3 py-2 mb-0 translate-middle"
            >
              view more
            </p></router-link
          ></swiper-slide
        >
        <swiper-slide>
          <router-link to="/product/-NaUgD1YW3GgBdaJMpZ2">
            <img
              src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690633823857.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=mvAQtg4LjGeJVV6QM5Mm8NDhdmcMbW%2F1PkBp%2F8XimzY%2FC%2FhoidyAObTlDyZArBpfN9mcRqpveZixW6SN%2FlD4VaiCHAyxbl52Zppn0U2G7WiuRvXvoI6J95iUkfId30%2FXO5C9eoeoNNDTUzFCzdAQCWJkIO4eRGtstE2gyOxDhr31SgpTEZJVCStALXp%2Bq%2F6%2FLHtWEpvNpweZAgm2jxT5A0E11ej4KPyRaTi6cJ%2F3KYP9RfNSCWHIurKvDGTb8P5AiJjNfhwNn6AN5LUcF4cN3rL8cxw9%2F2ZpgOpVW4O41AzM7ZCf15FRuprDVjAyspzAj2k7BvoCDP4rqFXcvFuxgg%3D%3D"
              alt="放在木桌上的兩塊鳶尾花花香香氛沐浴皂"
            />
            <div class="swiper-slide-mask"></div>
            <p
              class="swiper-slide-mask-btn position-absolute top-50 start-50 text-white border border-1 rounded px-3 py-2 mb-0 translate-middle"
            >
              view more
            </p></router-link
          ></swiper-slide
        >
        <swiper-slide>
          <router-link to="/product/-NaUd-NzuK3kTJRK_-wz">
            <img
              src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690633203526.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=eW4jtER1hXR3%2F1wOv0XbYHC0zdtfoZ5wiMvgkIm7hxW%2BUVoiRCveYBgXAkE9vBSSqmcZmyta31z0Y4JxGIJx16q1gs1wrZKieBx8xJkhOJ3XUV%2Fd4KZppxWcR83bHtE9Pm8w1LbQFc0cEwVxowksh3tzPEDmFpRnUbiqwrapQKdEwQJJOIZ%2F0sIzVBkVHtwkF5OTty0SCJ61eC0mXeLY7uRaxwtOCVkDcrxQspGWr5BvBaojm4Eq95DuBEvC0CxNsvv4RX8Dr1g8MM%2BRXN%2F1JeVNpe%2F93B2GI2QK8pH00ZSRrHsVA8U0Rmozd6QCRlf%2BHCzRM7O6ZyH2AQUH%2FLM09w%3D%3D"
              alt="放在木桌上白色花梨大豆蠟燭"
            />
            <div class="swiper-slide-mask"></div>
            <p
              class="swiper-slide-mask-btn position-absolute top-50 start-50 text-white border border-1 rounded px-3 py-2 mb-0 translate-middle"
            >
              view more
            </p></router-link
          ></swiper-slide
        >
        <swiper-slide>
          <router-link to="/product/-NaUfgD8vUylevh0StTh">
            <img
              src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690633728303.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=RWZ3hiUcR9Jx%2BeCgMKPz0tG%2B2pMQtFOdRE%2BKbscw8pyNWyDX7PcIDfjsl18srrAy%2Blhqj1FysKTBRr5l0jLXfBupKqAX7xJOyTUSeaIpDh09x389iK%2BkbYSa7PByPk6dFj%2FBoQFykwvmUU7%2Bt13msK6aKgWQdo4LUMMqS5AQybdOcSwa4Jfn2gYLGQauOu9cdKEv6E0SaCZjfSRatXUhOkfG283ahnCD93ODyzjhoyOOD08nHRIG3Eb1xDNJ%2F8Uh5lrxwI1LY6cVhXYT2OJdpG0QHvMl6iivmgu5vUpbjdj02iwMVxzIQcNMB5APonqwgThO83eSULnrZk52yS4mWw%3D%3D"
              alt="放在綠色植物葉片上的淡香水"
            />
            <div class="swiper-slide-mask"></div>
            <p
              class="swiper-slide-mask-btn position-absolute top-50 start-50 text-white border border-1 rounded px-3 py-2 mb-0 translate-middle"
            >
              view more
            </p></router-link
          ></swiper-slide
        >
        <swiper-slide>
          <router-link to="/product/-NaUd3lZGkS1IJDjaSCV">
            <img
              src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690633231830.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=YOqiBfmUlHKemT74wXg3tHMeWXcKZt9qPkQdOhuQK%2Bossb4YEyBPWVs3T37L4IPiKOQUiQiWtW3fMC5nQbATdALGyRbO40fo69W4S%2BUS8sJYKKvidMLDsIMNdQvkWy8lWhefXRuEOjr3U4YtQWosixRqE4JW49zZ9ZXpKU7O3vF0dL2n24tGjhXgeVDkSLf7ZUG3rELUxqBRYxKO4hDZnK7%2Fq6HPielBTq7PSa83y8mIce3PK3YAtMc74asjKFEUSCqzwkWyTXQnP7W%2FU5FW1tJn68szL97BLNJirpCXf4Gt8EQlWhXmgW6RVbJ86OhkiDI7d7xFXhT967GROTNgwA%3D%3D"
              alt="深棕色的木桌上擺著一排咖啡色的擴香 "
            />
            <div class="swiper-slide-mask"></div>
            <p
              class="swiper-slide-mask-btn position-absolute top-50 start-50 text-white border border-1 rounded px-3 py-2 mb-0 translate-middle"
            >
              view more
            </p></router-link
          ></swiper-slide
        >
        <swiper-slide>
          <router-link to="/product/-NaUeamgqGkzq4BTFRJ0">
            <img
              src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690633534220.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=OXbSt9vUg1T%2BEMkjC9V1W88H42phrKXTcBf1%2FsSxOqudHJ3BFa1OTabzyvnnTnrAk3wOUArOkl2H4%2F9FevWUJGul8bJCv8jJJCRYjTqCoyam3TH%2FmIGam%2Fe4CMnmqeWjjtS38ZbteZGzq7HMAioMqAXoYASwu6QyGsbJIjKABmeWjGjg4toV4nBWHrfCtNVurwU9sByyN65NU1uiLM6xlHtZsmOn7WF%2FF5S%2F4fWD6rYKjvOC8YM%2Ff0q5gRH0gwmjlbcHjMiL%2BWrWHI3RnLMN%2Bwtgnb8ZZznhDsNVtCEzO0cG0bKWXNLWP0kRy2NiBp4rudnothozKi56r3My71wWGg%3D%3D"
              alt="四種不同材料的白色海鹽皂"
            />
            <div class="swiper-slide-mask"></div>
            <p
              class="swiper-slide-mask-btn position-absolute top-50 start-50 text-white border border-1 rounded px-3 py-2 mb-0 translate-middle"
            >
              view more
            </p></router-link
          ></swiper-slide
        >
        <swiper-slide>
          <router-link to="/product/-NaUegMYLEbG-GRD7_IO">
            <img
              src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690633563910.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=lBgmsdwE2Q5e8dBmVShbLWIWLU7TtqKFppIdLHRuCVUEPYskcrq0bWR%2B8ElUrzMkZU3eVChWNUwl5KZcX6S41F1xLvhAr%2B6PhMKKKDVraA%2FX7oTEqrLvhYrzOiIF%2BCg6JlUbPetaYGtLj2ua7yrltRXB73g5BinjMkA1NjPMj2GL3BbTHmXSrvnsOK8cFDJ6XRBG6qDkuuu9a3couUCFFy4to1Yr983qY%2FdkljuEWFjn9Vm7Ext7Vjml9vu2VUNfZMEbTo03wumK2yQa%2BO48AAgVaN7bL7T6xsw%2FG0B1ce5lZ2pXRDSiE%2F89J3cCfyQY%2BCnFs9vMthGmP%2F8BZ6ojxQ%3D%3D"
              alt="黃色粉紅色紫色的絲瓜片香皂"
            />
            <div class="swiper-slide-mask"></div>
            <p
              class="swiper-slide-mask-btn position-absolute top-50 start-50 text-white border border-1 rounded px-3 py-2 mb-0 translate-middle"
            >
              view more
            </p>
          </router-link></swiper-slide
        >
      </swiper>
    </div>
  </section>
  <!-- subscript section -->
  <section class="subscript">
    <div class="container text-primary">
      <VForm v-slot="{ errors }" @submit="subscription">
        <label class="form-label fs-3 text-center text-md-start mb-55" for="subscript"
          >訂閱我們，獲取優惠卷與最新活動消息</label
        >
        <div class="row input-group gx-0 gx-md-3 gy-2 align-items-center">
          <div class="col-md-10">
            <VField
              class="form-control border-primary fs-6 w-100"
              :class="{ 'is-invalid': errors.email }"
              id="subscript"
              type="email"
              name="email"
              rules="required|email"
              placeholder="輸入您的信箱，獲得我們的最新活動消息獲得優惠卷"
              v-model="subscriptEmail"
            />
          </div>
          <div class="col-md-2">
            <button class="fs-6 btn btn-outline-primary w-100" type="submit">訂閱</button>
          </div>
        </div>
      </VForm>
    </div>
  </section>
</template>
<script>
// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay, EffectFade, FreeMode } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'

// sweetalert2
import Swal from 'sweetalert2'

// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  data() {
    return {
      imgUrl: {
        bannerImg01: 'https://shorturl.at/fKU29',
        aboutImg: 'https://shorturl.at/ckqGN',
        aboutBkg: 'https://shorturl.at/lBDOR',
        hotSellBkg: 'https://shorturl.at/asUYZ',
        pointBkg01: 'https://shorturl.at/almxH',
        pointBkg02: 'https://shorturl.at/krA04',
        pointBkg03: 'https://shorturl.at/qDQY2',
        hotSaleDesktopImg01: 'https://shorturl.at/fANZ8',
        hotSaleDesktopImg02: 'https://shorturl.at/kAKN3',
        hotSaleDesktopImg03: 'https://shorturl.at/eisO7',
        hotSaleMobileImg01: 'https://shorturl.at/eLQZ4',
        hotSaleMobileImg02: 'https://shorturl.at/hDE23',
        hotSaleMobileImg03: 'https://shorturl.at/abhpM'
      },
      subscriptEmail: '',
      products: [],
      modules: [Navigation, Autoplay, EffectFade, FreeMode] //Swiper modules
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {
    // 訂閱最新活動消息
    subscription(subscriptEmail) {
      Swal.fire({
        icon: 'success',
        title: '成功訂閱',
        text: '獲得購物 8 折優惠代碼 fangsis888',
        confirmButtonText: '確定',
        confirmButtonColor: '#5D7067'
      })
      this.subscriptEmail = ''
    }
  },

  mounted() {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 140, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 700, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation
    })
  }
}
</script>
<style lang="scss">
.banner-swiper {
  width: auto;
  height: 841px;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.banner-card {
  top: 45%;
}

// more-products swiper
.more-product-swiper {
  height: 400px;
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

// 關於芳心 about 設定
.aboutImg {
  background-position: center, center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 320px;
}

// 痛點 pain-points 設定
.point-bkg {
  height: 600px;
  background-position: center, center;
  background-size: cover;
  background-repeat: no-repeat;
}

.section-bkg {
  background-position: center;
  background-repeat: no-repeat;
}

.point-mask {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
}

.circle-size {
  height: 310px;
  width: 310px;
}
@include media-breakpoint-up(md) {
  .circle-size {
    height: 363px;
    width: 363px;
  }
}

.point-mask,
.circle,
.point-card-title,
.link-border,
.link-border a {
  transition: ease-in-out 0.35s;
}

.card:hover {
  .point-mask {
    background: rgba(255, 255, 255, 0.65);
  }
  .circle {
    border-color: black !important;
  }
  .point-card-title {
    color: black !important;
  }
  .link-border {
    border-color: black !important;
    a {
      color: black !important;
    }
  }
}

//熱銷禮盒 hot-sale 設定
.hot-sale-btn {
  opacity: 0;
}

.hot-sale-img-mask {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.hot-sale-img-mask,
.hot-sale-link,
.hot-sale-hover-style,
.hot-sale-btn {
  transition: ease-in-out 0.35s;
}
.hot-sale-hover-style {
  .card-text,
  .card-title {
    transition: ease-in-out 0.35s;
  }
}

.hot-sale-bkg-img {
  background-position: center, center;
  background-repeat: no-repeat;
  background-size: cover;
}

.hot-sale-link {
  &:hover {
    .hot-sale-img-mask {
      background: rgba(0, 0, 0, 0.3);
    }
    .hot-sale-hover-style {
      background-color: $primary;
    }
    .card-text,
    .card-title {
      color: white !important;
    }
    .hot-sale-btn {
      opacity: 100%;
    }
  }
}

// 訂閱最新活動消息 subscript 設定
.subscript {
  padding: 140px 0;
}
input::-webkit-input-placeholder {
  font-size: 12px;
  line-height: 20px;
  color: $secondary;
  padding-left: 5px;
}
</style>
