<template>
  <!-- 當網頁視窗位置於最頂端，使用透明背景 navbar-->
  <transition name="fade">
    <nav v-if="isTop" class="navbar navbar-expand-lg navbar-light fixed-top">
      <div class="container">
        <RouterLink class="navbar-brand" to="/">
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1699881744888.png"
            class="logo-desktop img-fluid"
            alt="透明底白色字大小為 192*64 的 Fangsis 芳心 Logo"
            width="192"
            height="64"
          />
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1699881758680.png"
            class="logo-mobile img-fluid"
            alt="透明底白色字大小為 120*64 的 Fangsis 芳心 Logo"
            width="120"
            height="64"
          />
        </RouterLink>
        <div class="ms-auto d-flex">
          <RouterLink class="nav-link fs-5 link-light d-block d-lg-none me-3" to="/WishLists">
            <i class="bi bi-heart-fill position-relative">
              <span v-if="wishList.length > 0" class="navbar-badge fs-7 fst-normal">
                {{ wishList.length }}
              </span>
            </i>
          </RouterLink>
          <RouterLink class="nav-link fs-5 link-light d-block d-lg-none me-3" to="/CartView">
            <i class="bi bi-bag-fill position-relative">
              <span v-if="carts.length > 0" class="navbar-badge fs-7 fst-normal">{{
                carts.length
              }}</span>
            </i>
          </RouterLink>
          <button
            class="navbar-toggler"
            type="button"
            aria-controls="offcanvasNavbar"
            @click="menuOffcanvasToggle"
          >
            <i class="bi bi-list fs-3 text-white"></i>
          </button>
        </div>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mb-2 mb-lg-0 ms-auto align-items-center">
            <li class="nav-item my-2">
              <RouterLink
                class="nav-link mx-3 link-light navbar-link-white-hover"
                active-class="active-link-white"
                aria-current="page"
                to="/about"
                >關於芳心</RouterLink
              >
            </li>
            <li class="nav-item my-2">
              <RouterLink
                class="nav-link mx-3 link-light navbar-link-white-hover"
                active-class="active-link-white"
                to="/products"
                >全部商品</RouterLink
              >
            </li>
            <li class="nav-item d-none d-lg-block">
              <RouterLink class="nav-link ms-4 me-1 link-light" to="/WishLists">
                <i class="bi bi-heart-fill position-relative fs-4">
                  <span v-if="wishList.length > 0" class="navbar-badge fs-7 fst-normal">{{
                    wishList.length
                  }}</span>
                </i>
              </RouterLink>
            </li>
            <li class="nav-item d-none d-lg-block">
              <a
                class="nav-link fs-4 link-light"
                aria-controls="offcanvasWithBackdrop"
                href=""
                @click.prevent="cartOffcanvasToggle"
              >
                <i class="bi bi-bag-fill position-relative">
                  <span v-if="carts.length > 0" class="navbar-badge fs-7 fst-normal">{{
                    carts.length
                  }}</span>
                </i>
              </a>
            </li>
            <li class="nav-item d-none d-lg-block">
              <RouterLink class="nav-link fs-2 link-light" to="/MemberLogin">
                <i class="bi bi-person-fill p-1"></i>
              </RouterLink>
            </li>
            <li class="nav-item d-block d-lg-none my-2">
              <RouterLink class="nav-link mx-3 link-light" to="/MemberLogin">
                會員中心
              </RouterLink>
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
        <RouterLink class="navbar-brand" to="/">
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1699881703031.png"
            class="logo-desktop img-fluid"
            alt="透明底黑字大小為 192*64 的 Fangsis 芳心 Logo"
            width="192"
            height="64"
          />
          <img
            src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1699881715229.png"
            class="logo-mobile img-fluid"
            alt="透明底黑字大小為 120*40 的 Fangsis 芳心 Logo"
            width="120"
            height="40"
          />
        </RouterLink>
        <div class="ms-auto d-flex">
          <RouterLink class="nav-link fs-5 link-primary d-block d-lg-none me-3" to="/WishLists">
            <i class="bi bi-heart-fill position-relative">
              <span v-if="wishList.length > 0" class="navbar-badge fs-7 fst-normal">
                {{ wishList.length }}</span
              >
            </i>
          </RouterLink>
          <RouterLink class="nav-link fs-5 link-primary d-block d-lg-none me-3" to="/CartView">
            <i class="bi bi-bag-fill position-relative">
              <span v-if="carts.length > 0" class="navbar-badge fs-7 fst-normal">{{
                carts.length
              }}</span>
            </i>
          </RouterLink>
          <button
            class="navbar-toggler"
            type="button"
            aria-controls="offcanvasNavbar"
            @click="menuOffcanvasToggle"
          >
            <i class="bi bi-list fs-3 text-primary"></i>
          </button>
        </div>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mb-2 mb-lg-0 ms-auto align-items-center">
            <li class="nav-item my-2">
              <RouterLink
                class="nav-link mx-3 link-dark navbar-link-black-hover"
                active-class="active-link-black"
                aria-current="page"
                to="/about"
                >關於芳心</RouterLink
              >
            </li>
            <li class="nav-item my-2">
              <RouterLink
                class="nav-link mx-3 link-dark navbar-link-black-hover"
                active-class="active-link-black"
                to="/products"
                >全部商品</RouterLink
              >
            </li>
            <li class="nav-item d-none d-lg-block">
              <RouterLink class="nav-link ms-4 me-1 link-primary" to="/WishLists">
                <i class="bi bi-heart-fill position-relative fs-4">
                  <span v-if="wishList.length > 0" class="navbar-badge fs-7 fst-normal">{{
                    wishList.length
                  }}</span>
                </i>
              </RouterLink>
            </li>
            <li class="nav-item d-none d-lg-block">
              <a
                class="nav-link fs-4 link-primary"
                aria-controls="offcanvasWithBackdrop"
                href=""
                @click.prevent="cartOffcanvasToggle"
              >
                <i class="bi bi-bag-fill position-relative">
                  <span v-if="carts.length > 0" class="navbar-badge fs-7 fst-normal">{{
                    carts.length
                  }}</span>
                </i>
              </a>
            </li>
            <li class="nav-item d-none d-lg-block">
              <RouterLink class="nav-link fs-2 link-primary" to="/MemberLogin">
                <i class="bi bi-person-fill p-1"></i>
              </RouterLink>
            </li>
            <li class="nav-item d-block d-lg-none my-2">
              <RouterLink class="nav-link mx-3 link-primary" to="/MemberLogin">
                會員中心
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </transition>
  <!-- 購物車畫布元件 -->
  <CartOffcanvas />
  <!-- 選單列表畫布元件 -->
  <MenuOffcanvas />
</template>

<script>
import { mapActions, mapState } from 'pinia';
import cartAndWishListStore from '@/stores/cartAndWishList';
import offcanvasStore from '@/stores/offcanvasStore';
import CartOffcanvas from '@/components/fronted/CartOffcanvas.vue';
import MenuOffcanvas from '@/components/fronted/MenuOffcanvas.vue';

export default {
  data() {
    return {
      isTop: true, // 視窗是否在最頂端的狀態
    };
  },
  components: {
    CartOffcanvas,
    MenuOffcanvas,
  },
  methods: {
    handleScroll() {
      // 判斷視窗是否在最頂端
      this.isTop = window.scrollY === 0;
    },
    ...mapActions(cartAndWishListStore, ['getCart', 'pullLocalStorageToWishList']),
    ...mapActions(offcanvasStore, ['cartOffcanvasToggle', 'menuOffcanvasToggle']),
  },
  beforeUnmount() {
    // 移除事件監聽器，避免記憶體洩漏
    window.removeEventListener('scroll', this.handleScroll);
  },
  mounted() {
    // 監聽視窗滾動事件
    window.addEventListener('scroll', this.handleScroll);
    this.getCart();
    this.pullLocalStorageToWishList();
  },
  computed: {
    ...mapState(cartAndWishListStore, ['carts', 'wishList']),
    ...mapState(offcanvasStore, ['cartOffcanvasIsShow', 'menuOffcanvasIsShow']),
  },
};
</script>

<style lang="scss" scoped>
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

.active-link-white {
  border-bottom: 2.5px solid rgb(255, 255, 255) !important;
}

.active-link-black {
  border-bottom: 2.5px solid rgb(0, 0, 0);
}

.navbar-link-white-hover {
  border-bottom: 2.5px solid transparent;
  transition: all 0.25s;
  &:hover {
    border-bottom: 2.5px solid rgb(255, 255, 255);
  }
}

.navbar-link-black-hover {
  border-bottom: 2.5px solid transparent;
  transition: all 0.4s;
  &:hover {
    border-bottom: 2.5px solid rgb(0, 0, 0);
  }
}
</style>
