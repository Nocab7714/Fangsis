<template>
  <div class="row gx-lg-6 mb-8">
    <div class="col-lg-4">
      <img
        class="img-fluid product-img w-100"
        :src="product.imageUrl"
        :alt="product.title"
        width="440"
        height="440"
        style="background-color: var(--bs-secondary)"
      />
    </div>
    <div class="col-lg-8">
      <div class="product-content pe-lg-18">
        <h2
          class="fs-lg-1 fs-2 fw-bold mb-6 mt-5 mt-lg-0"
          style="font-family: var(--bs-NotoSerif-TC)"
        >
          {{ product.title }}

          <span v-if="product.quantity === 0" class="fs-lg-4 fs-5 badge bg-secondary rounded-0"
            >已售完</span
          >
        </h2>
        <p class="fs-6 mb-0">
          {{ product.description }}
        </p>
        <br />
        <p class="fs-6">
          {{ product.content }}
        </p>
        <div class="d-flex flex-column flex-lg-row justify-content-lg-between align-items-end mt-6">
          <p class="fw-bold fs-5 fst-italic mb-lg-0 mb-2">
            NT $<span>{{ product.price }}</span
            >/ {{ product.unit }}
          </p>
          <form>
            <div class="d-flex fs-6">
              <select
                class="form-select select-hight me-2 w-auto"
                name="productQty"
                id="productQty"
                :disabled="product.quantity === 0"
                ref="productQty"
              >
                <option disabled selected>數量選擇</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <button
                class="btn btn-primary fs-6 me-2"
                type="button"
                @click="addToCart(product.id, this.$refs.productQty.value)"
                :disabled="product.quantity === 0 || spinnerLoading === product.id"
              >
                <span
                  v-if="spinnerLoading === product.id"
                  class="spinner-border-sm spinner-border mx-5"
                  role="status"
                  aria-hidden="true"
                ></span>
                <span v-else>加入購物車</span>
              </button>
              <button
                class="btn btn-pink fs-6 position-relative btn-addToWishList"
                type="button"
                @click="addWishList(product)"
              >
                <i
                  class="bi bi-heart-fill position-absolute"
                  :class="{ 'heart-fill-active': wishListActive(product) }"
                ></i>
                <i class="bi bi-heart text-white"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'pinia'
import cartAndWishListStore from '../../stores/cartAndWishList'

export default {
  data() {
    return {}
  },
  props: ['product'],
  methods: {
    ...mapActions(cartAndWishListStore, ['addToCart', 'addWishList', 'wishListActive'])
  },
  computed: {
    ...mapState(cartAndWishListStore, ['spinnerLoading'])
  }
}
</script>
<style lang="scss">
.btn-addToWishList {
  .bi-heart-fill {
    color: transparent;
  }
  &:hover {
    .bi-heart-fill {
      color: white;
    }
  }
}

.heart-fill-active {
  // active 樣式改為修改顏色
  color: white !important;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
