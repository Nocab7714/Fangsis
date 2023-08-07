<template>
  <header
    class="position-relative"
    style="height: 841px"
    :style="{ backgroundImage: `url(${imgUrl.bannerImg01})` }"
  >
    <div class="container">
      <div class="banner-card bg-opacity-75 position-absolute bg-light top-50 p-4">
        <h1
          class="text-primary text-center text-lg-start fs-4 fs-lg-2 mb-4"
          style="font-family: var(--bs-NotoSerif-TC)"
        >
          用花蓮在地植物萃取，<br />
          呈現最具質感的香氛禮品。
        </h1>
        <p
          class="text-primary text-center text-lg-start fs-5 fs-lg-4 mb-7"
          style="font-family: var(--bs-NotoSerif-TC)"
        >
          送給她，送給自己。
        </p>
        <router-link class="btn btn-outline-primary w-100 w-lg-35" to="/products"
          >來去送禮</router-link
        >
      </div>
    </div>
  </header>
  <!-- about section -->
  <section class="about section-bkg py-7" :style="{ backgroundImage: `url(${imgUrl.aboutBkg})` }">
    <div class="container">
      <h2 class="fs-2 text-primary text-center mb-6" style="font-family: var(--bs-NotoSerif-TC)">
        關於芳心。
      </h2>
      <div class="row flex-lg-row flex-column-reverse align-items-center gx-lg-8 gy-3">
        <div class="col-lg-6 p-55">
          <h3 class="text-secondary fs-3 fw-bold mb-3" style="font-family: var(--bs-NotoSerif-TC)">
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
          <a class="btn btn-outline-primary w-100 w-lg-35" href="">View More</a>
        </div>

        <div class="col-lg-6">
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
  </section>
  <!-- pain-points section -->
  <section class="pain-points">
    <!-- 網頁版 pain-points -->
    <div class="container d-md-block d-none">
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
    <!-- 手機板 pain-points -->
    <div class="d-block d-md-none">
      <div class="row gy-4 gy-xl-0 gx-0">
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
  </section>
  <!-- hot-sale section -->
  <section
    class="hot-sale py-7 section-bkg"
    :style="{ backgroundImage: `url(${imgUrl.hotSellBkg})` }"
  >
    <div class="container">
      <h2 class="fs-2 text-primary text-center mb-6" style="font-family: var(--bs-NotoSerif-TC)">
        熱銷禮盒。
      </h2>
      <div class="hot-sale-desktop d-none d-md-block">
        <routerLink class="hot-sale-link text-decoration-none" to="/product">
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
                <div class="card-body text-center px-6 py-10 d-flex flex-column align-items-center">
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
        <routerLink class="hot-sale-link text-decoration-none" to="/product">
          <div class="card border-0 position-relative">
            <div class="row g-0">
              <div class="col-6 hot-sale-hover-style">
                <div class="card-body text-center px-6 py-10 d-flex flex-column align-items-center">
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
        <routerLink class="hot-sale-link text-decoration-none" to="/product">
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
                <div class="card-body text-center px-6 py-10 d-flex flex-column align-items-center">
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
      <div class="hot-sale-mobile d-block d-md-none">
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
            <a class="btn btn-outline-secondary w-100 fs-6" href="">View More</a>
          </div>
        </div>
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
            <a class="btn btn-outline-secondary w-100 fs-6" href="">View More</a>
          </div>
        </div>
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
            <a class="btn btn-outline-secondary w-100 fs-6" href="">View More</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- more-products section -->
  <section class="more-products">
    <!-- 套用輪播插件預留空間 -->
    <h2 class="fs-2 text-primary text-center mb-6" style="font-family: var(--bs-NotoSerif-TC)">
      更多香氛。
    </h2>
    <div class="bg-light">
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  </section>
  <!-- subscript section -->
  <section class="subscript">
    <div class="container text-primary">
      <div class="form">
        <label class="form-label fs-3 text-center text-md-start mb-55" for="subscript"
          >想隨時知道我們有什麼新產品嗎?</label
        >
        <div class="row input-group gx-0 gx-md-3 gy-2 align-items-center">
          <div class="col-md-10">
            <input
              class="form-control border-primary fs-6 w-100"
              id="subscript"
              type="text"
              placeholder="輸入您的信箱，訂閱我們的最新活動消息"
            />
          </div>
          <div class="col-md-2">
            <button class="fs-6 btn btn-outline-primary w-100" type="submit">訂閱</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
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
      }
    }
  },
  methods: {}
}
</script>
<style lang="scss">
// header 設定
@include media-breakpoint-up(lg) {
  .banner-card {
    min-width: 636px;
  }
}

.bg-opacity-75 {
  background: rgba(255, 255, 255, 0.9);
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
