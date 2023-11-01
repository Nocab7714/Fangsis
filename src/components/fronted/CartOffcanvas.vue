<template>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="cartOffcanvas"
    aria-labelledby="offcanvasWithBackdropLabel"
    ref="cartOffcanvas"
  >
    <div class="offcanvas-header">
      <h2 class="offcanvas-title fs-3" id="cartOffcanvas">購物車</h2>
      <button
        type="button"
        class="btn-close text-reset"
        aria-label="Close"
        @click="cartOffcanvasToggle"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div class="vl-parent" ref="loading-container">
        <div
          class="border border-1 border-secondary border-top-0 border-end-0 border-start-0 mb-4"
        ></div>
        <!-- loading 效果元件 -->
        <ContainerLoading :isLoading="cartOffcanvasIsLoading" :container="container" />
        <ul class="list-unstyled">
          <div v-if="!carts.length" class="d-flex flex-column align-items-center mb-5">
            <h3 class="fs-5 mb-3">您的購物車目前沒有任何商品!</h3>
            <router-link to="/products" class="btn btn-primary px-4" @click="cartOffcanvasToggle"
              >來去購物</router-link
            >
          </div>
          <li
            v-for="cart in carts"
            :key="cart.product.id + 1"
            class="d-flex align-items-center justify-content-between mb-3"
          >
            <div class="d-flex align-items-center">
              <img
                class="img-fluid"
                :src="cart.product.imageUrl"
                :alt="cart.product.id"
                width="100"
                height="100"
              />
              <div class="ms-3">
                <h3 class="fs-6">{{ cart.product.title }}</h3>
                <p class="mb-0">
                  <span>{{ cart.qty }}</span
                  >x $<span>{{ cart.product.price }}</span>
                </p>
              </div>
            </div>

            <a class="ms-6 me-3" href="" @click.prevent="removeCartProduct(cart.id)"
              ><i class="bi bi-trash3-fill fs-5"></i
            ></a>
          </li>
        </ul>
        <div
          class="border border-1 border-secondary border-top-0 border-end-0 border-start-0 mb-4"
        ></div>
      </div>

      <div v-if="carts.length" class="d-flex justify-content-between mb-7">
        <span class="fs-5">總金額</span>
        <span class="fs-5"
          >$ <span>{{ total }}</span></span
        >
      </div>
      <router-link
        v-if="carts.length"
        class="btn btn-primary w-100"
        to="/CartView"
        @click="cartOffcanvasToggle"
        >查看購物車</router-link
      >
    </div>
  </div>
</template>

<script>
import ContainerLoading from '@/components/fronted/ContainerLoading.vue'

import { mapActions, mapState } from 'pinia'
import cartAndWishListStore from '../../stores/cartAndWishList'
import offcanvasStore from '../../stores/offcanvasStore'
import * as bootstrap from 'bootstrap'

export default {
  data() {
    return {
      cartOffcanvas: {}, //存放 cart Offcanvas 實體
      container: this.$refs.LoadingContainer // ContainerLoading 渲染容器範圍
    }
  },
  components: {
    ContainerLoading
  },
  watch: {
    //開啟予關閉購物車畫布
    cartOffcanvasIsShow() {
      return this.cartOffcanvasIsShow ? this.cartOffcanvas.show() : this.cartOffcanvas.hide()
    }
  },
  methods: {
    ...mapActions(cartAndWishListStore, [
      'getCart',
      'pullLocalStorageToWishList',
      'removeCartProduct'
    ]),
    ...mapActions(offcanvasStore, ['cartOffcanvasToggle', 'resetCartOffcanvasIsShowStatus'])
  },
  mounted() {
    this.getCart()
    // 購物車 Offcanvas 實體化
    this.cartOffcanvas = new bootstrap.Offcanvas(this.$refs.cartOffcanvas)
    this.$refs.cartOffcanvas.addEventListener('hide.bs.offcanvas', (event) => {
      this.resetCartOffcanvasIsShowStatus()
    })
  },
  computed: {
    ...mapState(cartAndWishListStore, [
      'carts',
      'total',
      'cartOffcanvasIsLoading' // loading 開啟狀態透過 pinia 管理
    ]),
    ...mapState(offcanvasStore, ['cartOffcanvasIsShow'])
  }
}
</script>
