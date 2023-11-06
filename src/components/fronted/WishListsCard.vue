<template>
  <div class="vl-parent" ref="loading-container">
    <ContainerLoading :isLoading="isLoading" :container="container" />
    <!-- 願望清單沒有商品 -->
    <div v-if="wishList.length === 0" class="border border-2 border-secondary px-5 py-5">
      <div class="d-flex justify-content-center align-items-center py-7">
        <div class="d-flex flex-column justify-content-center align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            fill="currentColor"
            class="bi bi-bag-heart-fill text-secondary mb-3"
            viewBox="0 0 16 16"
          >
            <path
              d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5ZM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1Zm0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"
            />
          </svg>
          <h2 class="fw-bold fs-2 text-secondary mb-1">OOPS!!</h2>
          <p class="fw-bold fs-5 text-secondary mb-4">您的願望清單尚未擁有任何商品!</p>
          <router-link class="btn btn-primary py-2" to="/products">來去逛逛</router-link>
        </div>
      </div>
    </div>
    <div v-else>
      <!-- 電腦版願望清單 -->
      <div class="d-none d-lg-block">
        <div class="border border-2 border-secondary px-5 py-5">
          <table class="table table-striped align-middle mb-3">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">商品名稱</th>
                <th scope="col">價格</th>
                <th class="text-center" scope="col">庫存狀態</th>
                <th class="text-center" scope="col">加入購物車</th>
                <th class="text-center" scope="col">刪除</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="product in wishList" :key="product.id">
                <tr>
                  <td scope="row">
                    <img
                      class="img-fluid"
                      :src="product.imageUrl"
                      :alt="product.title"
                      width="100"
                      height="100"
                    />
                  </td>
                  <td>
                    <router-link
                      :to="`/product/${product.id}`"
                      class="text-decoration-none link-dark"
                      >{{ product.title }}</router-link
                    >
                  </td>
                  <td>{{ product.price }}</td>
                  <td class="text-center">
                    <span
                      v-if="!product.is_enabled || product.quantity === 0"
                      class="bg-pink px-2 py-1 text-white"
                      >缺貨</span
                    >
                    <span v-else class="bg-success px-2 py-1 text-white">有貨</span>
                  </td>
                  <td class="text-center">
                    <button
                      @click="addToCart(product.id, 1, product)"
                      class="btn btn-primary"
                      :disabled="!product.is_enabled || product.quantity === 0"
                    >
                      <i class="bi bi-cart3 me-2"></i>加入購物車
                    </button>
                  </td>
                  <td class="text-center">
                    <a @click.prevent="removeWishListProduct(product)" href=""
                      ><i class="bi bi-trash3-fill fs-5"></i
                    ></a>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
      <!-- 行動版願望清單 -->
      <div class="d-block d-lg-none">
        <div class="border border-2 border-secondary px-5 py-5">
          <table class="table table-striped align-middle mb-3">
            <thead>
              <thead>
                <tr>
                  <th scope="col"></th>
                </tr>
              </thead>
            </thead>
            <tbody>
              <template v-for="product in wishList" :key="product.id">
                <tr>
                  <th scope="row">
                    <div class="d-flex flex-column align-items-center py-4 px-2">
                      <router-link :to="`/product/${product.id}`">
                        <img
                          class="img-fluid mb-3"
                          :src="product.imageUrl"
                          :alt="product.title"
                          width="200"
                          height="200"
                        />
                      </router-link>

                      <router-link
                        :to="`/product/${product.id}`"
                        class="text-decoration-none link-dark"
                        ><span class="fw-normal fs-5">{{ product.title }}</span></router-link
                      >
                      <span class="fw-normal mb-3"
                        >NT$<span>{{ product.price }}</span></span
                      >
                      <span
                        v-if="!product.is_enabled || product.quantity === 0"
                        class="text-white bg-pink px-2 py-1 mb-3"
                        >缺貨</span
                      >
                      <span v-else class="text-white bg-success px-2 py-1 mb-3">有貨</span>

                      <button
                        @click="addToCart(product.id, 1, product)"
                        class="btn btn-primary w-100 mb-2 py-2"
                        :disabled="!product.is_enabled || product.quantity === 0"
                      >
                        <i class="bi bi-cart3 me-2"></i>加入購物車
                      </button>
                      <button
                        @click.prevent="removeWishListProduct(product)"
                        class="btn btn-outline-secondary w-100 mb-3 py-2"
                      >
                        <i class="bi bi-trash3-fill"></i>刪除
                      </button>
                    </div>
                  </th>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContainerLoading from '@/components/fronted/ContainerLoading.vue'
import { mapActions, mapState } from 'pinia'
import cartAndWishListStore from '@/stores/cartAndWishList'

export default {
  data() {
    return {
      container: this.$refs.loadingContainer // ContainerLoading 渲染容器範圍
    }
  },
  components: {
    ContainerLoading
  },
  methods: {
    ...mapActions(cartAndWishListStore, ['addToCart', 'removeWishListProduct'])
  },
  computed: {
    ...mapState(cartAndWishListStore, ['carts', 'wishList', 'wishListAddStatus', 'isLoading'])
  }
}
</script>
