<template>
  <div
    class="py-md-13 py-9 background-position-center background-size-corver"
    style="
      background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1689994205093.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=RLJFHdzxV1ZFvcHobhOCdJFG71iTXspxuTuLv3LAuadLgMdzvO3ebfDIxgaswSy6G8SbPxVDbqyApt2wU2it78WeORuUUxdwMwTXV4qzswD20QiHhMvd3AZgGH6OcmLl%2BSP1YQilwzCQZlKgSckbe6LYnCKT2E7vj3iO9qTAsfoXM3FYNRfGl4p3Z11%2BRPSu5PDI5Wjg%2BSnmgeYzn3LLZfqyWN%2BHKVesfnxsDx4s6CkU%2ByX97aX4%2FIZiE89I6SwCw4DvMsNctfvaurRt6YyJKQ3NAB%2BBkmC1pBr0ARDd8C%2BWkxQXNVbaVkvu9PdgirS2CneyZtgonvceaSs5mSNnZA%3D%3D');
      background-color: var(--bs-primary);
    "
  >
    <div class="container d-flex flex-column align-items-center">
      <h2 class="fw-bold fs-lg-10 fs-1 mb-3 text-white" style="font-family: var(--bs-NotoSerif-TC)">
        訂單查詢
      </h2>
      <div class="fs-6">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-0 text-white text-center">
            <li class="breadcrumb-item">
              <routerLink class="text-decoration-none text-white" to="/">首頁</routerLink>
            </li>
            <li class="breadcrumb-item active" aria-current="page">訂單查詢</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  <div class="container my-10 vl-parent" ref="loading-container">
    <!-- vue-loading -->
    <loading
      v-model:active="isLoading"
      :can-cancel="false"
      :lock-scroll="lockScroll"
      :background-color="backgroundColor"
      :container="container"
      :opacity="opacity"
      :is-full-page="fullPage"
    >
      <div class="loadingio-spinner-spin-gir4y11u5ph">
        <div class="ldio-2f3eow2i9zx">
          <div><div></div></div>
          <div><div></div></div>
          <div><div></div></div>
          <div><div></div></div>
          <div><div></div></div>
          <div><div></div></div>
          <div><div></div></div>
          <div><div></div></div>
        </div>
      </div>
    </loading>
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <div class="input-group">
          <input
            class="form-control"
            type="text"
            placeholder="請輸入您的訂單編號"
            v-model="inputProductId"
            @keyup.enter="getProductOrder(inputProductId)"
          />
          <button class="btn btn-primary" type="button" @click="getProductOrder(inputProductId)">
            <i class="bi bi-search"></i>
          </button>
        </div>

        <!-- 查無此訂單顯示 -->
        <div
          v-if="orderStatus === false"
          class="cart-status border border-2 border-secondary px-5 py-10 mt-6 mb-10 d-flex justify-content-center align-items-center flex-column"
        >
          <div>
            <h3 class="fs-1 fw-bold">Sorry ... <br />查無此訂單資料</h3>
            <p class="fs-5">請再次確認輸入的訂單編號正確無誤!</p>
          </div>
        </div>
        <!-- 查詢訂單顯示 -->
        <div
          v-else-if="orderStatus === true"
          class="cart-status border border-2 border-secondary px-5 py-5 mt-4 mb-10 d-flex justify-content-center flex-column"
        >
          <div class="mb-5">
            <h3 class="fs-3 fw-bold mb-3">訂單資料</h3>
            <ul class="list-unstyled fs-6">
              <li class="mb-1">
                <span class="fw-bold">訂單編號 : </span> <span> {{ order.id }}</span>
              </li>
              <li class="mb-1">
                <span class="fw-bold">建立日期 : </span> <span> {{ orderCreateTime }}</span>
              </li>
              <li class="mb-1">
                <span class="fw-bold">是否付款 : </span>
                <span
                  v-if="order.id"
                  :class="{ 'text-success': order.is_paid, 'text-danger': !order.is_paid }"
                >
                  {{ order.is_paid ? '已付款' : '尚未付款' }}</span
                >
              </li>
            </ul>
          </div>
          <div class="mb-5">
            <h3 class="fs-3 fw-bold mb-3">訂購人個人資料</h3>
            <ul class="list-unstyled fs-6">
              <li class="row g-0 mb-sm-1 mb-3">
                <span class="fw-bold col-xl-2 col-sm-4 col-12">客戶姓名 :</span>
                <span class="col-8">{{ name }}</span>
              </li>
              <li class="row g-0 mb-sm-1 mb-3">
                <span class="fw-bold col-xl-2 col-sm-4 col-12">聯絡電話 : </span
                ><span class="col-8">{{ tel }}</span>
              </li>
              <li class="row g-0 mb-sm-1 mb-3">
                <span class="fw-bold col-xl-2 col-sm-4 col-12">電子郵件 : </span
                ><span class="col-8">{{ email }}</span>
              </li>
              <li class="row g-0 mb-sm-1 mb-3">
                <span class="fw-bold col-xl-2 col-sm-4 col-12">收件地址 : </span
                ><span class="col-8">
                  {{ address }}
                </span>
              </li>
              <li class="row">
                <span class="fw-bold col-xl-2 col-12">訂單備註 : </span
                ><span class="col-xxl-8 col-12">{{ order.message }} </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="fs-3 fw-bold mb-3">訂購商品</h3>
            <ul class="list-unstyled fs-6">
              <li v-for="product in order.products">
                {{ product.product.title }} <span>x{{ product.qty }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
// sweetalert2
import Swal from 'sweetalert2'

// vue-loading
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

export default {
  data() {
    return {
      order: {}, // 接收的訂單資料
      orderStatus: true, // 訂單搜尋狀態切換
      inputProductId: '',
      orderCreateTime: '', // 存放轉換格式時間格式後的訂單建立時間
      // order user data
      address: '',
      email: '',
      name: '',
      tel: '',
      // vue-loading
      isLoading: false,
      lockScroll: true,
      fullPage: false,
      container: this.$refs.loadingContainer,
      backgroundColor: '#ffffff',
      opacity: 0.85
    }
  },
  components: {
    Loading
  },
  methods: {
    getProductOrder(product_id) {
      this.isLoading = true // 取得產品資料前顯示 loading 效果
      const productIdTrim = product_id.trim()
      this.$http
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/order/${productIdTrim}`)
        .then((res) => {
          this.order = res.data.order
          // 訂單建立時間格式格式轉換
          const orderTime = res.data.order.create_at
          const date = new Date(orderTime)
          this.orderCreateTime = date
          // vue3 讀取第三層物件資料有問題，改為儲存於元件 data 中，再渲染於畫面上
          //隱藏收件地址部分字元
          this.address = this.order.user.address
          this.address = this.address.replace(/^.{5}/, '*****')
          //隱藏信箱部分字元
          this.email = this.order.user.email
          this.email = this.email.replace(/^(.{3})/, (match, firstThreeChars) => {
            const stars = '*'.repeat(firstThreeChars.length)
            return stars
          })
          // 隱藏姓名部分字元
          this.name = this.order.user.name
          this.name = this.name.replace(/^(.)./, '$1*')
          // 隱藏手機號碼部分字元
          this.tel = this.order.user.tel
          this.tel = this.tel.replace(/(\d{3})\d{2}(\d)\d{2}(\d{2})/, '$1**$2**$3')
          this.orderStatus = true
          this.isLoading = false // 取得資料後關閉 loading 效果
        })
        .catch((err) => {
          this.orderStatus = false
          console.log(err.message)
          Swal.fire({
            title: '查詢失敗',
            text: '未找到您所查詢的訂單資訊，請確認輸入的訂單編號是否正確!',
            icon: 'error',
            confirmButtonText: '確定',
            confirmButtonColor: '#5D7067'
          })
          this.isLoading = false // 取得資料後關閉 loading 效果
        })
    }
  },
  mounted() {
    this.order = {}
  }
}
</script>
<style lang="scss" scoped>
.purchase-active {
  color: black;
  font-weight: bold;
  border-bottom: 4px solid $primary;
}
</style>
