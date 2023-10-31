<template>
  <div class="vl-parent" ref="loading-container">
    <!-- loading 效果元件 -->
    <ContainerLoading :isLoading="isLoading" :container="container"></ContainerLoading>
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <div class="input-group">
          <input
            class="form-control"
            type="text"
            placeholder="請輸入您的訂單編號"
            v-model="inputOrderId"
            @keyup.enter="getProductOrder(inputOrderId)"
          />
          <button class="btn btn-primary" type="button" @click="getProductOrder(inputOrderId)">
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
                <span class="fw-bold">建立日期 : </span>
                <span v-if="order.create_at !== null">
                  {{ new Date(order.create_at * 1000).toLocaleString() }}</span
                >
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
                <span class="col-8">{{ order.user.name }}</span>
              </li>
              <li class="row g-0 mb-sm-1 mb-3">
                <span class="fw-bold col-xl-2 col-sm-4 col-12">聯絡電話 : </span
                ><span class="col-8">{{ order.user.tel }}</span>
              </li>
              <li class="row g-0 mb-sm-1 mb-3">
                <span class="fw-bold col-xl-2 col-sm-4 col-12">電子郵件 : </span
                ><span class="col-8">{{ order.user.email }}</span>
              </li>
              <li class="row g-0 mb-sm-1 mb-3">
                <span class="fw-bold col-xl-2 col-sm-4 col-12">收件地址 : </span
                ><span class="col-8">
                  {{ order.user.address }}
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
              <li v-for="product in order.products" :key="product.id">
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
import ContainerLoading from '@/components/fronted/ContainerLoading.vue'

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
// sweetalert2
import Swal from 'sweetalert2'

export default {
  data() {
    return {
      // 定義回傳的訂單資料
      order: {
        create_at: null,
        id: '',
        is_paid: null,
        message: '',
        num: null,
        paid_date: null,
        products: {},
        total: null,
        user: {
          address: '',
          email: '',
          name: '',
          tel: null
        }
      }, // 接收的訂單資料
      orderStatus: true, // 訂單搜尋狀態切換
      inputOrderId: '', // 訂單搜尋輸入 input
      isLoading: false, // ContainerLoading 開啟/關閉狀態
      container: this.$refs.loadingContainer // ContainerLoading 渲染容器範圍
    }
  },
  components: {
    ContainerLoading
  },
  methods: {
    getProductOrder(order_id) {
      this.isLoading = true // 取得產品資料前顯示 loading 效果
      const productIdTrim = order_id.trim()
      this.$http
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/order/${productIdTrim}`)
        .then((res) => {
          this.order = res.data.order
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
  }
}
</script>
