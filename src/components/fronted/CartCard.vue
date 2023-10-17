<template>
  <!-- 購物車內有商品顯示該區塊 -->
  <div v-if="carts.length" class="row mt-4 gy-3">
    <!-- vue-loading -->
    <div class="col-lg-8">
      <div class="border border-2 border-secondary px-5 py-5">
        <div class="vl-parent" ref="loading-container">
          <!-- loading 效果元件 -->
          <ContainerLoading :isLoading="isLoading" :container="container"></ContainerLoading>
          <!-- 電腦版購物車列表 -->
          <div class="d-none d-md-block">
            <table class="table table-striped align-middle mb-6">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">商品名稱</th>
                  <th scope="col">價格</th>
                  <th class="text-center" scope="col">數量</th>
                  <th class="text-center" scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="cart in carts" :key="cart.product.id">
                  <td scope="row">
                    <img
                      class="img-fluid"
                      :src="cart.product.imageUrl"
                      :alt="cart.product.title"
                      width="100"
                      height="100"
                    />
                  </td>
                  <td class="text-wrap">{{ cart.product.title }}</td>
                  <td>
                    <span class="px-1">{{ cart.product.origin_price }}</span>
                  </td>
                  <td class="w-25">
                    <div class="input-group px-2">
                      <button
                        class="btn btn-outline-secondary"
                        type="button"
                        @click="upDataCartProduct(cart.id, cart.qty - 1)"
                        :disabled="cart.qty == 1"
                      >
                        -
                      </button>
                      <input
                        class="form-control text-center border-secondary"
                        type="text"
                        autocomplete="off"
                        maxlength="99"
                        minlength="1"
                        oninput="value=value.replace(/[^\d]/g,'')"
                        :value="cart.qty"
                        @change="upDataCartProduct(cart.id, $event.target.value)"
                      />
                      <button
                        class="btn btn-outline-secondary"
                        type="button"
                        @click="upDataCartProduct(cart.id, cart.qty + 1)"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <th class="text-center">
                    <a class="me-2" href="" @click.prevent="removeCartProduct(cart.id)"
                      ><i class="bi bi-trash3-fill fs-5"></i
                    ></a>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- 行動版購物車列表 -->
          <div class="d-block d-md-none">
            <table class="table table-striped align-middle mb-6">
              <thead>
                <tr>
                  <th scope="col">您所選擇的商品</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="cart in carts">
                  <th scope="row">
                    <div class="d-flex flex-column align-items-center py-3 px-2">
                      <img
                        class="img-fluid mb-3"
                        :src="cart.product.imageUrl"
                        :alt="cart.product.title"
                        width="300"
                        height="300"
                      />
                      <span class="fw-normal">{{ cart.product.title }}</span>
                      <span class="fw-normal mb-3"
                        >NT$<span>{{ cart.product.origin_price }}</span></span
                      >
                      <div class="input-group w-auto mb-4">
                        <button
                          class="btn btn-outline-secondary"
                          type="button"
                          @click="upDataCartProduct(cart.id, cart.qty - 1)"
                          :disabled="cart.qty == 1"
                        >
                          -
                        </button>
                        <input
                          class="form-control text-center border-secondary"
                          type="text"
                          autocomplete="off"
                          maxlength="99"
                          minlength="1"
                          oninput="value=value.replace(/[^\d]/g,'')"
                          :value="cart.qty"
                          @change="upDataCartProduct(cart.id, $event.target.value)"
                        />
                        <button
                          class="btn btn-outline-secondary"
                          type="button"
                          @click="upDataCartProduct(cart.id, cart.qty + 1)"
                        >
                          +
                        </button>
                      </div>
                      <a href="" @click.prevent="removeCartProduct(cart.id)"
                        ><i class="bi bi-trash3-fill fs-4"></i
                      ></a>
                    </div>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div
            class="border border-1 border-secondary border-top-0 border-end-0 border-start-0 mb-3"
          ></div>
          <div class="d-flex justify-content-between">
            <router-link class="btn btn-outline-secondary" to="/products"
              ><i class="bi bi-arrow-left me-2"></i>繼續選購</router-link
            ><button
              @click="removeCartAllProduct()"
              class="btn btn-outline-secondary"
              type="button"
            >
              <i class="bi bi-trash3-fill me-2"></i>清空購物車
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="border border-2 border-secondary px-5 py-5 d-flex flex-column">
        <div class="vl-parent" ref="loading-container">
          <!-- loading 效果元件 -->
          <ContainerLoading :isLoading="isLoading" :container="container"></ContainerLoading>
          <div
            class="border border-1 border-secondary border-top-0 border-end-0 border-start-0 w-100 mb-6"
          >
            <h2 class="fs-5 fw-bold">購物車總計</h2>
          </div>
          <div
            class="border border-1 border-secondary border-top-0 border-end-0 border-start-0 w-100 mb-11 d-flex justify-content-between align-items-end"
          >
            <h3 class="fs-6 text-nowrap">小計</h3>
            <span class="fw-bold fs-4 fst-italic me-1"
              >NT$ <span>{{ total }}</span></span
            >
          </div>
          <div class="mb-8">
            <div
              class="border border-1 border-secondary border-top-0 border-end-0 border-start-0 w-100 mb-3 d-flex"
            >
              <h3 class="fs-6 fw-bold">配送方式</h3>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                id="DeliveryMethod01"
                type="radio"
                name="DeliveryMethod"
                @click="deliveryMethod('7-11 取貨')"
                :checked="delivery === '7-11 取貨'"
              />
              <label class="form-check-label" for="DeliveryMethod01"> 7-11 取貨</label>
            </div>

            <div class="form-check">
              <input
                class="form-check-input"
                id="DeliveryMethod02"
                type="radio"
                name="DeliveryMethod"
                @click="deliveryMethod('順豐速遞 - 常溫配送')"
                :checked="delivery === '順豐速遞 - 常溫配送'"
              />
              <label class="form-check-label" for="DeliveryMethod02"> 順豐速遞 - 常溫配送 </label>
            </div>
          </div>
          <div
            class="border border-1 border-secondary border-top-0 border-end-0 border-start-0 w-100 mb-3 d-flex justify-content-between align-items-end"
          >
            <h3 class="fs-6 text-nowrap">總計</h3>
            <div class="d-flex flex-column">
              <span
                v-if="total !== final_total"
                class="fw-bold fs-4 fst-italic opacity-25 text-decoration-line-through me-1"
                >NT$ <span>{{ total }}</span></span
              >

              <span class="fw-bold fs-4 fst-italic me-1"
                >NT$ <span>{{ final_total }}</span></span
              >
            </div>
          </div>
          <div class="d-flex justify-content-end">
            <router-link class="btn btn-primary w-100 w-lg-50 mb-8" to="/CartOrderersInformation"
              >前往結帳</router-link
            >
          </div>

          <div class="mb-8">
            <div
              class="border border-1 border-secondary border-top-0 border-end-0 border-start-0 w-100 mb-3 d-flex"
            >
              <h3 class="fs-6">優惠卷</h3>
            </div>
            <input
              class="form-control mb-2"
              type="text"
              placeholder="請輸入優惠卷代碼"
              v-model="CouponCode"
              @keyup.enter="UseCoupon(CouponCode)"
            />
            <button class="btn btn-primary w-100" @click="UseCoupon(CouponCode)">使用優惠卷</button>
            <span v-if="total !== final_total" class="fs-6">{{ couponCodeMessage }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 購物車內若無商品顯示該區塊 -->
  <div
    v-if="!carts.length"
    class="cart-status border border-2 border-secondary px-5 py-10 mt-6 mb-10 d-flex justify-content-center align-items-center flex-column"
  >
    <div
      class="text-secondary d-flex flex-column flex-md-row align-items-center align-items-md-start"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="130"
        height="130"
        fill="currentColor"
        class="bi bi-cart-plus-fill me-md-4 me-2 mb-3 mb-md-0"
        viewBox="0 0 16 16"
      >
        <path
          d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"
        />
      </svg>
      <div
        class="d-flex flex-column justify-content-center align-items-center align-items-md-start"
      >
        <h2 class="fw-bold text-secondary fs-10 fs-md-11 mb-1">OOPS!!</h2>
        <p class="fw-bold text-secondary fs-5 fs-md-3 mb-3">您的購物車裡還沒有任何商品</p>
        <router-link
          class="btn btn-primary btn-lg align-self-center align-self-md-end"
          to="/products"
          >來去逛逛</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
import ContainerLoading from '@/components/fronted/ContainerLoading.vue'

import { mapActions, mapState } from 'pinia'
import cartAndWishListStore from '../../stores/cartAndWishList'

export default {
  data() {
    return {
      CouponCode: '', // 輸入的優惠碼儲存
      container: this.$refs.loadingContainer // ContainerLoading 渲染容器範圍
    }
  },
  components: { ContainerLoading },
  methods: {
    ...mapActions(cartAndWishListStore, [
      'getCart',
      'removeCartProduct',
      'removeCartAllProduct',
      'upDataCartProduct',
      'UseCoupon',
      'deliveryMethod'
    ])
  },
  computed: {
    ...mapState(cartAndWishListStore, [
      'carts',
      'total',
      'final_total',
      'delivery',
      'isLoading',
      'couponCodeMessage'
    ])
  }
}
</script>
