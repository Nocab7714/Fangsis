<template>
  <!-- 當網頁視窗位置於最頂端，使用透明背景 navbar-->
  <transition name="fade">
    <nav v-if="isTop" class="navbar navbar-expand-lg navbar-light fixed-top">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <img
            class="logo-desktop img-fluid"
            src="https://shorturl.at/vzHZ1"
            alt="電腦版的Fangsis的店商網站logo"
            width="240"
            height="80"
          />
          <img
            class="logo-mobile img-fluid"
            src="https://shorturl.at/pGRX8"
            alt="行動裝置版的Fangsis店商網站logo"
            width="120"
            height="40"
          />
        </router-link>
        <div class="ms-auto d-flex">
          <router-link class="nav-link fs-5 link-light d-block d-lg-none me-4" to="/WishLists">
            <i class="bi bi-heart-fill position-relative">
              <span class="navbar-badge fs-7 fst-normal">10</span>
            </i>
          </router-link>
          <router-link class="nav-link fs-5 link-light d-block d-lg-none me-4" to="/CartView">
            <i class="bi bi-bag-fill position-relative">
              <span class="navbar-badge fs-7 fst-normal">10</span>
            </i>
          </router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <i class="bi bi-list fs-3 text-white"></i>
          </button>
        </div>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mb-2 mb-lg-0 ms-auto align-items-center">
            <li class="nav-item my-2">
              <router-link
                class="nav-link mx-3 link-light navbar-link-white-hover"
                active-class="active-link-white"
                aria-current="page"
                to="/about"
                >關於芳心</router-link
              >
            </li>
            <li class="nav-item my-2">
              <router-link
                class="nav-link mx-3 link-light navbar-link-white-hover"
                active-class="active-link-white"
                to="/products"
                >全部商品</router-link
              >
            </li>
            <li class="nav-item my-2">
              <router-link
                class="nav-link mx-3 link-light navbar-link-white-hover"
                active-class="active-link-white"
                to="/OrderSearch"
                >訂單查詢</router-link
              >
            </li>
            <li class="nav-item d-none d-lg-block">
              <router-link class="nav-link mx-2 link-light" to="/WishLists">
                <i class="bi bi-heart-fill position-relative fs-4">
                  <span class="navbar-badge fs-7 fst-normal">13</span>
                </i>
              </router-link>
            </li>
            <li class="nav-item d-none d-lg-block">
              <a
                class="nav-link mx-2 fs-4 link-light"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBackdrop"
                aria-controls="offcanvasWithBackdrop"
                href=""
              >
                <i class="bi bi-bag-fill position-relative">
                  <span class="navbar-badge fs-7 fst-normal">10</span>
                </i>
              </a>
            </li>
            <li class="nav-item d-none d-lg-block">
              <router-link class="nav-link mx-2 fs-3 link-light" to="/MemberLogin">
                <i class="bi bi-person-fill"></i>
              </router-link>
            </li>
            <li class="nav-item d-block d-lg-none my-2">
              <router-link class="nav-link mx-3 link-light" to="/MemberLogin">
                會員中心
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </transition>
  <!-- 當網頁視窗位置離開最頂端，使用白色背景 navbar -->
  <transition name="fade">
    <nav v-if="!isTop" class="navbar navbar-expand-lg bg-white navbar-dark shadow fixed-top">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <img
            class="logo-desktop img-fluid"
            src="https://shorturl.at/befrW"
            alt="電腦版的Fangsis的店商網站logo"
            width="240"
            height="80"
          />
          <img
            class="logo-mobile img-fluid"
            src="https://shorturl.at/ahkw8"
            alt="行動裝置版的Fangsis店商網站logo"
            width="120"
            height="40"
          />
        </router-link>
        <div class="ms-auto d-flex">
          <router-link class="nav-link fs-5 link-primary d-block d-lg-none me-4" to="/WishLists">
            <i class="bi bi-heart-fill position-relative">
              <span class="navbar-badge fs-7 fst-normal">10</span>
            </i>
          </router-link>
          <router-link class="nav-link fs-5 link-primary d-block d-lg-none me-4" to="/CartView">
            <i class="bi bi-bag-fill position-relative">
              <span class="navbar-badge fs-7 fst-normal">10</span>
            </i>
          </router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <i class="bi bi-list fs-3 text-primary"></i>
          </button>
        </div>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mb-2 mb-lg-0 ms-auto align-items-center">
            <li class="nav-item my-2">
              <router-link
                class="nav-link mx-3 link-dark navbar-link-black-hover"
                active-class="active-link-black"
                aria-current="page"
                to="/about"
                >關於芳心</router-link
              >
            </li>
            <li class="nav-item my-2">
              <router-link
                class="nav-link mx-3 link-dark navbar-link-black-hover"
                active-class="active-link-black"
                to="/products"
                >全部商品</router-link
              >
            </li>
            <li class="nav-item my-2">
              <router-link
                class="nav-link mx-3 link-dark navbar-link-black-hover"
                active-class="active-link-black"
                to="/OrderSearch"
                >訂單查詢</router-link
              >
            </li>
            <li class="nav-item d-none d-lg-block">
              <router-link class="nav-link mx-2 link-primary" to="/WishLists">
                <i class="bi bi-heart-fill position-relative fs-4">
                  <span class="navbar-badge fs-7 fst-normal">13</span>
                </i>
              </router-link>
            </li>
            <li class="nav-item d-none d-lg-block">
              <a
                class="nav-link mx-2 fs-4 link-primary"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBackdrop"
                aria-controls="offcanvasWithBackdrop"
                href=""
              >
                <i class="bi bi-bag-fill position-relative">
                  <span class="navbar-badge fs-7 fst-normal">10</span>
                </i>
              </a>
            </li>
            <li class="nav-item d-none d-lg-block">
              <router-link class="nav-link mx-2 fs-3 link-primary" to="/MemberLogin">
                <i class="bi bi-person-fill"></i>
              </router-link>
            </li>
            <li class="nav-item d-block d-lg-none my-2">
              <router-link class="nav-link mx-3 link-primary" to="/MemberLogin">
                會員中心
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </transition>

  <!-- 頁面顯示區塊 -->
  <router-view> </router-view>

  <footer class="bg-primary">
    <div class="container">
      <div class="py-lg-55 pt-4 pb-5">
        <div
          class="d-flex mb-lg-9 mb-55 flex-column flex-lg-row align-items-lg-start align-items-center"
        >
          <img
            class="me-lg-7 me-0 mb-7 mb-lg-0 img-fluid"
            src="https://shorturl.at/vzHZ1"
            alt="白色文字Fangsis的店商網站logo"
            width="240"
            height="80"
          />
          <ul class="list-unstyled text-center d-flex mb-0 flex-column flex-lg-row">
            <li class="mx-lg-7 mx-0 mb-lg-0 mb-4">
              <router-link class="link-light text-decoration-none fs-5" to="/PrivacyPolicy"
                >隱私權服務條款</router-link
              >
            </li>
            <li class="mx-lg-7 mx-0 mb-lg-0 mb-4">
              <router-link class="link-light text-decoration-none fs-5" to="/ShoppingGuidelines"
                >購物流程與常見Q&A
              </router-link>
            </li>
            <li class="mx-lg-7 mx-0">
              <span class="text-white fs-5">合作夥伴</span>
              <ul class="list-unstyled mt-lg-5 mt-4 d-lg-block d-flex">
                <li class="py-lg-25 py-0 me-2 me-lg-0">
                  <a
                    class="text-decoration-none link-light fs-6"
                    href="https://smallstepsgreen.com/"
                  >
                    <span class="d-lg-block d-none">綠印生活</span>
                    <img
                      class="d-lg-none d-block img-fluid"
                      src="https://shorturl.at/uxzIL"
                      alt="綠印生活的白色logo"
                      width="70"
                      height="70"
                    />
                  </a>
                </li>
                <li class="py-lg-25 py-0 ms-2 ms-lg-0">
                  <a
                    class="text-decoration-none link-light fs-6"
                    href="https://www.facebook.com/banai.savon/?locale=zh_TW"
                    ><span class="d-lg-block d-none">白娜Banai</span
                    ><img
                      class="d-lg-none d-block img-fluid"
                      src="https://shorturl.at/czBI3"
                      alt="白娜手作的白色logo"
                      width="70"
                      height="70"
                  /></a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <ul
          class="d-flex justify-content-between align-items-center flex-column flex-lg-row list-unstyled mb-0"
          style="color: var(--bs-gray-500)"
        >
          <li class="mb-lg-0 mb-3 order-2 order-lg-1 text-center">
            僅個人作品練習，無任何商業用途
          </li>
          <li class="order-3 order-lg-2 text-center">
            Copyright © 2023 HikinigTogether.All rights reserved.
          </li>
          <li class="mb-lg-0 mb-3 order-1 order-lg-3">
            <a class="me-4" href="https://www.instagram.com/fangsis_fragrance/"
              ><i class="bi bi-instagram fs-4" style="color: var(--bs-gray-500)"></i
            ></a>
            <a class="me-4" href="https://www.facebook.com/fangsisfragrance/"
              ><i class="bi bi-facebook fs-4" style="color: var(--bs-gray-500)"></i
            ></a>
            <a href="mailto:fangsisfragrance@gmail.com"
              ><i class="bi bi-envelope-fill fs-4" style="color: var(--bs-gray-500)"></i
            ></a>
          </li>
        </ul>
      </div>
    </div>
  </footer>

  <!-- 透明度100的向上按鈕 -->
  <transition name="fade">
    <div
      v-if="isGoToTopVisible"
      class="position-fixed bottom-2 end-2 goToTop bg-light"
      id="goToTop"
    >
      <a class="cursor-pointer" @click.prevent="scrollToTop">
        <img
          class="goToTopOpacity100"
          :src="imgUrl.goToTopOpacity100"
          alt="透明度100的向上按鈕"
          width="40"
          height="40"
        />
      </a>
    </div>
  </transition>

  <!-- 購物車 offcanvas -->
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasWithBackdrop"
    aria-labelledby="offcanvasWithBackdropLabel"
  >
    <div class="offcanvas-header">
      <h2 class="offcanvas-title fs-3" id="offcanvasWithBackdropLabel">購物車</h2>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div
        class="border border-3 border-secondary border-top-0 border-end-0 border-start-0 mb-4"
      ></div>

      <ul class="list-unstyled">
        <li class="d-flex align-items-center mb-3">
          <img
            class="img-fluid"
            src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1685409103327.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=OvdXEuQtyceGUcLaad2HkURIB0b6EKyajfTcSbyWEjfdO5RRh4gB7kS%2FaSdpaUzNBaJvX%2Bdz6j1SgoScr%2F9goY9Za6DfLBkfeCyYLEG2sXZwS4C9qbwcmNjWXH1HPXUFXV8sG9Dh9M5kHdF2wyIiiHdzXtKC%2BaIc%2FD9Zo1CvnSj9f96cvSBsVO3HW73lKFZHxM09ZsACxHqLrAythPC1LUIeJ298ygaCw6lGJiRZP824q%2BIAjMeCcxCNO6l5ktoM5YIBGu6WxlIAztZfgD1bhQIpVMT2n3xHQM9W%2Fs7zTEhB8gy6HATI1xj3y0VvWESk8Qcf4UZKq%2F6Kmzy2IND7xw%3D%3D"
            alt="商品圖片"
            width="100"
            height="100"
          />
          <div class="ms-3">
            <h3 class="fs-5">柚子雪松蠟燭禮盒</h3>
            <p><span>10</span>x $<span>1999</span></p>
          </div>
          <a href=""><i class="bi bi-trash3-fill fs-5 ms-7"></i></a>
        </li>
        <div
          class="border border-1 border-secondary border-top-0 border-end-0 border-start-0 mb-4"
        ></div>
        <li class="d-flex align-items-center mb-3">
          <img
            class="img-fluid"
            src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1685409103327.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=OvdXEuQtyceGUcLaad2HkURIB0b6EKyajfTcSbyWEjfdO5RRh4gB7kS%2FaSdpaUzNBaJvX%2Bdz6j1SgoScr%2F9goY9Za6DfLBkfeCyYLEG2sXZwS4C9qbwcmNjWXH1HPXUFXV8sG9Dh9M5kHdF2wyIiiHdzXtKC%2BaIc%2FD9Zo1CvnSj9f96cvSBsVO3HW73lKFZHxM09ZsACxHqLrAythPC1LUIeJ298ygaCw6lGJiRZP824q%2BIAjMeCcxCNO6l5ktoM5YIBGu6WxlIAztZfgD1bhQIpVMT2n3xHQM9W%2Fs7zTEhB8gy6HATI1xj3y0VvWESk8Qcf4UZKq%2F6Kmzy2IND7xw%3D%3D"
            alt="購物車商品圖片"
            width="100"
            height="100"
          />
          <div class="ms-3">
            <h3 class="fs-5">柚子雪松蠟燭禮盒</h3>
            <p><span>10</span>x $<span>1999</span></p>
          </div>
          <a href=""><i class="bi bi-trash3-fill fs-5 ms-7"></i></a>
        </li>
        <div
          class="border border-1 border-secondary border-top-0 border-end-0 border-start-0 mb-4"
        ></div>
        <li class="d-flex align-items-center mb-3">
          <img
            class="img-fluid"
            src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1685409103327.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=OvdXEuQtyceGUcLaad2HkURIB0b6EKyajfTcSbyWEjfdO5RRh4gB7kS%2FaSdpaUzNBaJvX%2Bdz6j1SgoScr%2F9goY9Za6DfLBkfeCyYLEG2sXZwS4C9qbwcmNjWXH1HPXUFXV8sG9Dh9M5kHdF2wyIiiHdzXtKC%2BaIc%2FD9Zo1CvnSj9f96cvSBsVO3HW73lKFZHxM09ZsACxHqLrAythPC1LUIeJ298ygaCw6lGJiRZP824q%2BIAjMeCcxCNO6l5ktoM5YIBGu6WxlIAztZfgD1bhQIpVMT2n3xHQM9W%2Fs7zTEhB8gy6HATI1xj3y0VvWESk8Qcf4UZKq%2F6Kmzy2IND7xw%3D%3D"
            alt="購物車商品圖片"
            width="100"
            height="100"
          />
          <div class="ms-3">
            <h3 class="fs-5">柚子雪松蠟燭禮盒</h3>
            <p><span>10</span>x $<span>1999</span></p>
          </div>
          <a href=""><i class="bi bi-trash3-fill fs-5 ms-7"></i></a>
        </li>
      </ul>

      <div
        class="border border-3 border-secondary border-top-0 border-end-0 border-start-0 mt-4 mb-4"
      ></div>

      <div class="d-flex justify-content-between mb-7">
        <span class="fs-5">總金額</span>
        <span class="fs-5">$ <span>19990</span></span>
      </div>

      <router-link class="btn btn-primary w-100" to="/CartView">查看購物車</router-link>
    </div>
  </div>
  <!-- navbar 打開漢堡選單的 offcanvas -->
  <div
    class="offcanvas offcanvas-end w-100"
    tabindex="-1"
    id="offcanvasNavbar"
    aria-labelledby="offcanvasNavbar"
  >
    <div class="offcanvas-header justify-content-end">
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <ul class="navbar-nav mb-2 mb-lg-0 ms-auto align-items-center">
        <li class="nav-item my-2">
          <router-link class="nav-link mx-3 link-dark" aria-current="page" to="/about"
            >關於芳心</router-link
          >
        </li>
        <li class="nav-item my-2">
          <router-link class="nav-link mx-3 link-dark" to="/products">全部商品</router-link>
        </li>
        <li class="nav-item my-2">
          <router-link class="nav-link mx-3 link-dark" to="/OrderSearch">訂單查詢</router-link>
        </li>

        <li class="nav-item my-2">
          <router-link class="nav-link mx-3 link-dark" to="/MemberLogin"> 會員中心 </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  data() {
    return {
      imgUrl: {
        goToTopOpacity100: 'https://shorturl.at/DJT34'
      },
      isTop: true,
      isGoToTopVisible: true
    }
  },
  mounted() {
    // 監聽視窗滾動事件
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('scroll', this.goToTopHandleScroll)
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },
    handleScroll() {
      // 判斷視窗是否在最頂端
      this.isTop = window.scrollY === 0
    },
    goToTopHandleScroll() {
      const distanceFromTop = window.scrollY
      // 設定一個閾值，表示視窗離開頂部多少距離時，顯示 div 元素
      const threshold = 300
      this.isGoToTopVisible = distanceFromTop > threshold
    }
  },
  beforeDestroy() {
    // 移除事件監聽器，避免記憶體洩漏
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('scroll', goToTopHandleScroll)
  }
}
</script>
<style lang="scss">
.logo-desktop {
  display: none;
}
@include media-breakpoint-up(lg) {
  .logo-desktop {
    display: block;
  }
  .logo-mobile {
    display: none;
  }
}

.goToTopOpacity100 {
  opacity: 60%;
}

.goToTop {
  border-radius: 50%;
  z-index: 3;

  &:hover {
    .goToTopOpacity100 {
      opacity: 100%;
    }
  }
}

.navbar-badge {
  position: absolute;
  height: 20px;
  width: 20px;
  left: 60%;
  top: 5%;
  background-color: $pink;
  color: white;
  border-radius: 50%;
  text-align: center;
}

/* 淡入淡出的效果 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

.active-link-white {
  border-bottom: 2.5px solid rgb(255, 255, 255) !important;
}

.active-link-black {
  border-bottom: 2.5px solid rgb(0, 0, 0);
}

.navbar-link-white-hover {
  border-bottom: 2.5px solid transparent;
  transition: all 0.25s;
}

.navbar-link-white-hover:hover {
  border-bottom: 2.5px solid rgb(255, 255, 255);
}

.navbar-link-black-hover {
  border-bottom: 2.5px solid transparent;
  transition: all 0.4s;
}

.navbar-link-black-hover:hover {
  border-bottom: 2.5px solid rgb(0, 0, 0);
}
</style>
