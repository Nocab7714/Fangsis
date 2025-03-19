<template>
  <div
    class="py-md-13 py-9 background-position-center background-size-corver"
    style="
      background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1689994083390.jpg');
      background-color: var(--bs-primary);
    "
  >
    <div class="container d-flex flex-column align-items-center">
      <h2 class="fw-bold fs-lg-10 fs-1 mb-3 text-white" style="font-family: var(--bs-NotoSerif-TC)">
        全站商品
      </h2>
      <div class="fs-6">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-0 text-white text-center">
            <li class="breadcrumb-item">
              <RouterLink class="text-decoration-none text-white" to="/">首頁</RouterLink>
            </li>
            <li class="breadcrumb-item active" aria-current="page">全站商品</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>

  <div class="container my-6">
    <div class="row">
      <div class="col-lg-3 d-none d-lg-block sticky-top-customize">
        <ProductCategoryDesktop :getProducts="getProducts" :categoryValue="categoryValue" />
      </div>
      <div class="d-block d-lg-none">
        <ProductCategoryMobile :getProducts="getProducts" :categoryValue="categoryValue" />
      </div>
      <div class="col-lg-9">
        <ProductList
          :categoryProducts="categoryProducts"
          :categoryValue="categoryValue"
          :getProducts="getProducts"
          :page="page"
          :isLoading="isLoading"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCategoryDesktop from '@/components/fronted/ProductCategoryDesktop.vue';
import ProductCategoryMobile from '@/components/fronted/ProductCategoryMobile.vue';
import ProductList from '@/components/fronted/ProductList.vue';

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      products: [], // 初始產品列表
      categoryProducts: [], // 分類後的產品列表。用於操作產品分類
      categoryValue: '', // 用於 pagination 換頁時將類別類型加入至 getProducts
      page: {},
      // vue-loading
      isLoading: false, // ProductList 子元件中的 loading 開啟/關閉狀態透過 productsView 父層元件管理
    };
  },
  components: {
    ProductCategoryDesktop,
    ProductCategoryMobile,
    ProductList,
  },
  methods: {
    // 取得所有產品資料
    getProducts(page = 1, category = '') {
      // 頁數預設參數 : 預設 1
      // 分類預設參數 : 預設空字串 (顯示全部產品)
      this.isLoading = true;
      this.$http
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/products?page=${page}&category=${category}`)
        .then((res) => {
          this.products = res.data.products;
          this.categoryProducts = this.products;
          this.categoryValue = category;
          this.page = res.data.pagination;
          this.scrollToTop();
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
    },
    // 滾動到視窗最頂
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style lang="scss" scoped>
.sticky-top-customize {
  position: sticky;
  top: 130px;
  height: 100%;
}
</style>
