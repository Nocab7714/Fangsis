<template>
  <div
    class="offcanvas offcanvas-end w-100"
    tabindex="-1"
    id="menuOffcanvas"
    aria-labelledby="offcanvasNavbar"
    ref="menuOffcanvas"
  >
    <div class="offcanvas-header justify-content-end">
      <button type="button" class="btn-close text-reset" @click="menuOffcanvasToggle"></button>
    </div>
    <div class="offcanvas-body">
      <ul class="navbar-nav mb-2 mb-lg-0 ms-auto align-items-center">
        <li class="nav-item my-2">
          <router-link
            class="nav-link mx-3 link-dark"
            aria-current="page"
            to="/about"
            @click="menuOffcanvasToggle"
            >關於芳心</router-link
          >
        </li>
        <li class="nav-item my-2">
          <router-link class="nav-link mx-3 link-dark" to="/products" @click="menuOffcanvasToggle"
            >全部商品</router-link
          >
        </li>
        <li class="nav-item my-2">
          <router-link
            class="nav-link mx-3 link-dark"
            to="/OrderSearch"
            @click="menuOffcanvasToggle"
            >訂單查詢</router-link
          >
        </li>

        <li class="nav-item my-2">
          <router-link
            class="nav-link mx-3 link-dark"
            to="/MemberLogin"
            @click="menuOffcanvasToggle"
          >
            會員中心
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import offcanvasStore from '@/stores/offcanvasStore';
import * as bootstrap from 'bootstrap';

export default {
  data() {
    return {
      menuOffcanvas: {}, // 存放選單列表 Offcanvas 實體
    };
  },
  watch: {
    // 開啟與關閉選單列表畫布
    menuOffcanvasIsShow() {
      return this.menuOffcanvasIsShow ? this.menuOffcanvas.show() : this.menuOffcanvas.hide();
    },
  },
  methods: {
    ...mapActions(offcanvasStore, ['menuOffcanvasToggle', 'resetMenuOffcanvasIsShowStatus']),
  },
  mounted() {
    // navbar 選單列表 Offcanvas 實體化
    this.menuOffcanvas = new bootstrap.Offcanvas(this.$refs.menuOffcanvas);
    this.$refs.menuOffcanvas.addEventListener('hide.bs.offcanvas', () => {
      this.resetMenuOffcanvasIsShowStatus();
    });
  },
  computed: {
    ...mapState(offcanvasStore, ['menuOffcanvasIsShow']),
  },
};
</script>
