<template>
  <div class="py-md-13 py-9 products-header-bkg01">
    <div class="container d-flex flex-column align-items-center">
      <h2 class="fw-bold fs-lg-10 fs-1 mb-3 text-white" style="font-family: var(--bs-NotoSerif-TC)">
        全站商品
      </h2>
      <div class="fs-6">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-0 text-white text-center">
            <li class="breadcrumb-item">
              <routerLink class="text-decoration-none text-white" to="/">首頁</routerLink>
            </li>
            <li class="breadcrumb-item active" aria-current="page">全站商品</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>

  <div class="container my-6">
    <div class="row position-relative">
      <!-- 產品分類 (桌面版) -->
      <div class="products-categories-desktop col-lg-3 d-none d-lg-block sticky-top-customize">
        <ul class="list-group">
          <button
            type="button"
            class="list-group-item list-group-item-action"
            :class="{ active: categoryValue === '' }"
            @click="getProducts(1)"
          >
            <li class="list-unstyled">全部商品</li>
          </button>
          <button
            type="button"
            class="list-group-item list-group-item-action"
            :class="{ active: categoryValue === 'giftBox' }"
            @click="getProducts(1, 'giftBox')"
          >
            <li class="list-unstyled">禮盒系列</li>
          </button>
          <button
            type="button"
            class="list-group-item list-group-item-action"
            :class="{ active: categoryValue === 'bathAndBodyProducts' }"
            @click="getProducts(1, 'bathAndBodyProducts')"
          >
            <li class="list-unstyled">沐浴用品</li>
          </button>
          <button
            type="button"
            class="list-group-item list-group-item-action"
            :class="{ active: categoryValue === 'fragrance' }"
            @click="getProducts(1, 'fragrance')"
          >
            <li class="list-unstyled">室內香氛</li>
          </button>
        </ul>
      </div>
      <!-- 產品分類 (手機版) -->
      <div class="products-categories-mobile col-lg-3 d-block d-lg-none">
        <select
          class="form-select mb-5 fs-6"
          name="product-categories"
          @change="classifyProductsMobile($event)"
        >
          <option value="" selected>全部商品</option>
          <option value="giftBox">禮盒系列</option>
          <option value="bathAndBodyProducts">沐浴用品</option>
          <option value="fragrance">室內香氛</option>
        </select>
      </div>

      <!-- 產品顯示列表 -->

      <div class="products col-lg-9">
        <div v-if="categoryProducts.length === 0">
          <h2 class="fs-3 text-secondary text-center mt-10 mb-20">很抱歉! 找不到符合的商品</h2>
        </div>
        <div v-else class="row g-md-4 g-3">
          <div v-for="product in categoryProducts" :key="product.id" class="col-lg-4 col-6">
            <div class="card border-0 h-100 position-relative">
              <!-- 加入許願清單按鈕 -->
              <a class="wishLists-btn fs-4 link-light" href="" @click.prevent="addWishList(product)"
                ><i class="bi bi-heart"></i
              ></a>
              <router-link class="product-link text-decoration-none" :to="`/product/${product.id}`">
                <div class="position-relative">
                  <!-- 判定並顯示是否為熱銷產品 -->
                  <span
                    v-if="product.is_hotSale"
                    class="position-absolute p-2 bg-pink z-index-4 fs-md-5 fs-7 text-white top-0"
                    >HOT</span
                  >
                  <!-- 判定並顯示是產品是否售完 -->
                  <div
                    v-if="product.quantity === 0"
                    class="product-sell-out text-center text-white fs-3"
                  >
                    已售完
                  </div>
                  <div class="img-hidden">
                    <img
                      class="rounded-0 img-fluid cover-fit"
                      :src="product.imageUrl"
                      :alt="product.title"
                      width="351"
                      height="320"
                      style="background-color: var(--bs-secondary)"
                    />
                  </div>
                </div>
                <h3 class="card-title text-black fs-6 mb-0 mt-2">{{ product.title }}</h3>
                <p class="card-text text-black fs-6 mb-2">
                  NT$<span class="ms-2">{{ product.price }}</span>
                </p>
              </router-link>
              <button
                class="btn btn-sm btn-outline-primary w-100 rounded-0 mt-auto"
                type="button"
                @click="addToCart(product.id)"
                :disabled="product.quantity === 0"
              >
                加入購物車
              </button>
            </div>
          </div>
        </div>
        <!-- 分頁元件 -->
        <div class="d-flex justify-content-center mt-7">
          <nav aria-label="Page navigation ">
            <ul class="pagination pagination-sm">
              <li class="page-item" :class="{ disabled: !page.has_pre }">
                <a
                  class="page-link"
                  href="#"
                  aria-label="Previous"
                  @click.prevent="getProducts(page.current_page - 1, categoryValue)"
                >
                  <span aria-hidden="true"><i class="bi bi-chevron-left"></i></span>
                </a>
              </li>
              <li
                class="page-item"
                :class="{ active: pages === page.current_page }"
                v-for="pages in page.total_pages"
                :key="pages + 'page'"
              >
                <a class="page-link" href="#" @click.prevent="getProducts(pages, categoryValue)">{{
                  pages
                }}</a>
              </li>

              <li class="page-item" :class="{ disabled: !page.has_next }">
                <a
                  class="page-link"
                  href="#"
                  aria-label="Next"
                  @click.prevent="getProducts(page.current_page + 1, categoryValue)"
                >
                  <span aria-hidden="true"><i class="bi bi-chevron-right"></i></span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data() {
    return {
      products: [], // 初始產品列表
      categoryProducts: [], //分類後的產品列表。用於操作產品分類
      categoryValue: '', //用於 pagination 換頁時將類別類型加入至 getProducts
      productId: '',
      page: {},
      cart: {},
      wishList: [],
      wishListAddStatus: true
    }
  },
  methods: {
    //加入願望清單
    addWishList(product) {
      const wishListObj = {
        title: product.title,
        id: product.id,
        price: product.price,
        imageUrl: product.imageUrl,
        quantity: product.quantity,
        is_enabled: product.is_enabled
      }

      this.wishList.forEach((item, index) => {
        if (item.id === wishListObj.id) {
          // 加入 WishList 的資料若重複，便從願望清單中移除
          this.wishList.splice(index, 1)
          this.wishListAddStatus = false
        }
      })
      //如果 wishListAddStatus 狀態，將產品資料加入願望清單
      if (this.wishListAddStatus === true) {
        this.wishList.push(wishListObj)
      }
      // 回復 wishListAddStatus 初始狀態
      this.wishListAddStatus = true

      //將願望清單資料存在 local Storage
      let localStorageWishLis = JSON.stringify(this.wishList)
      localStorage.setItem('localStorageWishLis', localStorageWishLis)
    },
    // 取得所有產品資料
    getProducts(page = 1, category = '') {
      //頁數預設參數 : 預設 1
      //分類預設參數 : 預設空字串 (顯示全部產品)
      this.$http
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/products?page=${page}&category=${category}`)
        .then((res) => {
          this.products = res.data.products
          this.categoryProducts = this.products
          this.categoryValue = category
          this.page = res.data.pagination
          this.scrollToTop()
        })
        .catch((err) => {
          alert(err)
        })
    },
    // 取得購物車資料
    getCart() {
      this.$http
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`)
        .then((res) => {
          this.cart = res.data.data
        })
        .catch((err) => {
          alert(err.message)
        })
    },
    // 將產品加入入購物車
    addToCart(product_id, qty = 1) {
      //當沒有傳入參數時，會使用預設值
      const data = {
        product_id,
        qty
      }
      this.$http
        .post(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`, { data })
        .then((res) => {
          // 加入購物車後，重新整理購物車資料
          this.getCart()
          alert(res.data.message)
        })
        .catch((err) => alert(err.message))
    },
    // 更新修改購物車資料
    upDataCartItem(item) {
      const data = {
        product_id: item.product.id,
        qty: item.qty
      }
      this.$http
        .put(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart/${item.id}`, { data })
        .then((res) => {
          this.getCart()
        })
        .catch((err) => {
          alert(err.message)
        })
    },
    // 取得單項產品 id
    getProductId(id) {
      this.$http
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/product/${id}`)
        .then((res) => {
          console.log(res.data.product.id)
        })
        .catch((err) => {
          alert(err)
        })
    },
    // 產品分類 (手機版)
    classifyProductsMobile(event) {
      const category = event.target.value
      this.getProducts(1, category)
    },
    addWishLists(product) {},
    // 滾動到視窗最頂
    scrollToTop() {
      window.scrollTo(0, 0)
    }
  },
  mounted() {
    this.getProducts()
    this.getCart()
    this.wishList = JSON.parse(localStorage.getItem('localStorageWishLis')) // 之後要將願望清單儲存在 pinia
  }
}
</script>

<style lang="scss">
// 產品售完 mask
.product-sell-out {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(33, 33, 33, 0.75);
  &:hover {
    background-color: rgba(102, 101, 101, 0.75);
    transition: 0.3s;
  }
}

// 產品圖片 hover zoom in / out
.img-hidden {
  overflow: hidden;
}
.img-hidden img {
  transition: 0.5s;

  &:hover {
    transform: scale(1.2);
  }
}
.cover-fit {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.sticky-top-customize {
  position: sticky;
  top: 130px;
  height: 100%;
}

//pagination 手機板本大小設定
@include media-breakpoint-up(sm) {
  .pagination-sm {
    --bs-pagination-padding-x: 0.75rem;
    --bs-pagination-padding-y: 0.375rem;
    --bs-pagination-border-radius: 0.375rem;
  }
}

.wishLists-btn {
  position: absolute;
  z-index: 4;
  right: 10px;
  top: 5px;
}
</style>
