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
        商品資訊
      </h2>
      <div class="fs-6">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-0 text-white text-center">
            <li class="breadcrumb-item">
              <RouterLink class="text-decoration-none text-white" to="/">首頁</RouterLink>
            </li>
            <li class="breadcrumb-item">
              <RouterLink class="text-decoration-none text-white" to="/products"
                >全站商品</RouterLink
              >
            </li>
            <li class="breadcrumb-item active" aria-current="page">商品資訊</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  <div class="container my-6">
    <ProductDetail :product="product" />
    <hr />
    <div class="my-5">
      <ProductSwiper :getProductId="getProductId" />
    </div>
  </div>
  <FullPageLoading :isLoading="isLoading" />
</template>

<script>
import FullPageLoading from '@/components/fronted/FullPageLoading.vue';
import ProductDetail from '@/components/fronted/ProductDetail.vue';
import ProductSwiper from '@/components/fronted/ProductSwiper.vue';
// sweetalert2
import Swal from 'sweetalert2';

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      product: {}, // 存放取出的單項產品資料
      isLoading: false, // FullPageLoading 開啟/關閉狀態
    };
  },
  components: {
    FullPageLoading,
    ProductDetail,
    ProductSwiper,
  },
  methods: {
    getProductId(id) {
      this.isLoading = true;
      this.$http
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/product/${id}`)
        .then((res) => {
          this.product = res.data.product;
          this.isLoading = false;
        })
        .catch(() => {
          Swal.fire({
            title: '您所尋找的產品並不存在',
            text: '無法取得該項產品資料!',
            icon: 'error',
            confirmButtonText: '確定',
            confirmButtonColor: '#5D7067',
            customClass: {
              title: 'titleFontStyle',
              popup: 'radius0',
              confirmButton: 'radius0',
            },
          }).then((result) => {
            if (result.isConfirmed) {
              this.$router.push('/products');
            }
          });
          this.isLoading = false;
        });
    },
  },
  watch: {
    $route() {
      if (!this.$route.params.id) {
        return;
      }
      this.getProductId(this.$route.params.id);
    },
  },
  mounted() {
    this.isLoading = true;
    const { id } = this.$route.params; // 取得產品 id 並串接 api 將資料儲存到 product 物件中
    this.$http
      .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/product/${id}`)
      .then((res) => {
        this.product = res.data.product;
        this.isLoading = false;
      })
      .catch(() => {
        Swal.fire({
          title: '您所尋找的產品並不存在',
          text: '無法取得該項產品資料!',
          icon: 'error',
          confirmButtonText: '確定',
          confirmButtonColor: '#5D7067',
          customClass: {
            title: 'titleFontStyle',
            popup: 'radius0',
            confirmButton: 'radius0',
          },
        }).then((result) => {
          if (result.isConfirmed) {
            this.$router.push('/products');
          }
        });

        this.isLoading = false;
      });
  },
};
</script>
