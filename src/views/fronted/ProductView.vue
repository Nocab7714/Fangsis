<template>
  <div
    class="py-md-13 py-9 background-position-center background-size-corver"
    style="
      background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1689994083390.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=fbh9MvNqSmL%2Bs8EQ1sukc8Yxip6M03Xj1r81k1C6L5IOsrr3RQLp%2FyNctt%2FSnGmgsE0V8RIKSwrKtspQN0JmEynIvezjrXu2sWKg8kMy7TUAU8VlafwLiUQWBRpYITL6JbUm%2BOc3smTAnJlxNewDMi8DYwdiqJ9DAaZfm2BS9JO9vgXAia%2Bwxd3YxrX%2F4RzJ3zQtdiQvZI4bwaptLgyX0Lir6dwimbzaq8wlRLlnSjU2g%2B286D2yMkjCNKl39Cg%2BZi9wTyHCIlPpf%2FnD3jpZkksFI%2FYunG8EaFvVUREZX4iXTgtaTMoO1fbFXl2wNy1sMAlLyxV8vbvuh535OknYHw%3D%3D');
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
      this.isLoading = true; // 取得產品資料前顯示 loading 效果
      this.$http
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/product/${id}`)
        .then((res) => {
          this.product = res.data.product;
          this.isLoading = false; // 取得產品資料後關閉 loading 效果
        })
        .catch(() => {
          Swal.fire({
            title: '您所尋找的產品並不存在',
            text: '無法取得該項產品資料!',
            icon: 'error',
            confirmButtonText: '確定',
            confirmButtonColor: '#5D7067',
            customClass: {
              popup: 'radius0',
              confirmButton: 'radius0',
            },
          }).then((result) => {
            if (result.isConfirmed) {
              this.$router.push('/products');
            }
          });
          this.isLoading = false; // 取得產品資料後關閉 loading 效果
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
    this.isLoading = true; // 取得產品資料前顯示 loading 效果
    const { id } = this.$route.params; // 取得產品 id 並串接 api 將資料儲存到 product 物件中
    this.$http
      .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/product/${id}`)
      .then((res) => {
        this.product = res.data.product;
        this.isLoading = false; // 取得產品資料後關閉 loading 效果
      })
      .catch(() => {
        Swal.fire({
          title: '您所尋找的產品並不存在',
          text: '無法取得該項產品資料!',
          icon: 'error',
          confirmButtonText: '確定',
          confirmButtonColor: '#5D7067',
          customClass: {
            popup: 'radius0',
            confirmButton: 'radius0',
          },
        }).then((result) => {
          if (result.isConfirmed) {
            this.$router.push('/products');
          }
        });

        this.isLoading = false; // 取得產品資料後關閉 loading 效果
      });
  },
};
</script>
