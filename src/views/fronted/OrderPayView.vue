<template>
  <div class="py-md-13 py-9 products-header-bkg02">
    <div class="container d-flex flex-column align-items-center">
      <h2 class="fw-bold fs-lg-10 fs-1 mb-3 text-white" style="font-family: var(--bs-NotoSerif-TC)">
        訂單明細
      </h2>
      <div class="fs-6">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-0 text-white text-center">
            <li class="breadcrumb-item">
              <routerLink class="text-decoration-none text-white" to="/">首頁</routerLink>
            </li>
            <li class="breadcrumb-item active" aria-current="page">訂單明細</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  <div class="container mt-5 mt-md-7 mb-10">
    <div class="container purchase-steps">
      <ul class="row list-unstyled fs-6 fs-md-5 text-secondary text-center">
        <li class="col-4 pb-3">購物車</li>
        <li class="col-4 pb-3 purchase-active">訂單明細</li>
        <li class="col-4 pb-3">完成訂單</li>
      </ul>
    </div>
    <div class="row mt-4 gy-3">
      <div class="col-lg-8">
        <div class="border border-2 border-secondary px-5 py-5">
          <div
            class="border border-1 border-secondary border-top-0 border-end-0 border-start-0 w-100 mb-5 d-flex"
          >
            <h2 class="fs-4 fw-bold">您的訂單資訊</h2>
          </div>
          <p>
            訂單編號 : <span class="ms-2">{{ order.id }}</span>
          </p>
          <p>
            付款狀態 :
            <span class="ms-2" :class="{ 'text-danger': order.is_paid === false }">{{
              order.is_paid ? '已付款' : '尚未付款'
            }}</span>
          </p>
          <p>
            訂單建立時間 : <span class="ms-2">{{ orderCreateTime }}</span>
          </p>

          <div
            class="border border-1 border-secondary border-top-0 border-end-0 border-start-0 w-100 mb-5 d-flex"
          ></div>
          <p>
            手機號碼 : <span class="ms-2">{{ tel }}</span>
          </p>
          <p>
            電子郵件 : <span class="ms-2">{{ email }}</span>
          </p>
          <p>
            收件地址 : <span class="ms-2">{{ address }}</span>
          </p>
          <p><span class="mb-5">訂單備註</span> :{{ order.message }}</p>
          <p></p>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="border border-2 border-secondary px-5 py-5 d-flex flex-column">
          <div class="mb-10">
            <div
              class="border border-1 border-secondary border-top-0 border-end-0 border-start-0 w-100 mb-3 d-flex"
            >
              <h3 class="fs-6 fw-bold">訂單狀態</h3>
            </div>
            <p>訂單已成功建立，請確認您的訂單資訊是否正確，並且於下方選擇訂單付款方式進行付款。</p>
          </div>
          <div class="mb-8">
            <div
              class="border border-1 border-secondary border-top-0 border-end-0 border-start-0 w-100 mb-3 d-flex"
            >
              <h3 class="fs-6 fw-bold">請選擇付款方式</h3>
            </div>

            <select
              class="form-select"
              @change="paymentMethod($event.target.value)"
              :disabled="order.is_paid === true"
            >
              <option :selected="payment === ''" disabled>請選擇您的付款方式</option>
              <option :selected="payment === '信用卡付款'" value="信用卡付款">信用卡付款</option>
              <option :selected="payment === 'ATM 轉帳或匯款'" value="ATM 轉帳或匯款">
                ATM 轉帳或匯款
              </option>
            </select>
          </div>
          <div
            class="border border-1 border-secondary border-top-0 border-end-0 border-start-0 w-100 mb-3 d-flex justify-content-between align-items-end"
          >
            <h3 class="fs-6 text-nowrap">付款金額</h3>
            <div class="d-flex flex-column">
              <span class="fw-bold fs-4 fst-italic"
                >NT$ <span>{{ order.total }}</span></span
              >
            </div>
          </div>

          <div class="mt-2 mb-8 d-flex justify-content-end">
            <button
              class="btn btn-primary w-md-50 w-100"
              type="button"
              @click="orderPay()"
              :disabled="payment === '' || order.is_paid === true"
            >
              <span
                v-if="isLoading === true"
                class="spinner-border-sm spinner-border"
                role="status"
                aria-hidden="true"
              ></span>
              進行付款
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
// pinia
import { mapActions, mapState } from 'pinia'
import cartAndWishListStore from '../../stores/cartAndWishList'
// sweetalert2
import Swal from 'sweetalert2'
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 1300,
  timerProgressBar: true,
  iconColor: '#5D7067',
  background: '#ffffff',
  color: '#5D7067'
})

export default {
  data() {
    return {
      order: {}, // 存放接收的訂單資料
      orderCreateTime: '', //存放轉換格式時間格式後的訂單建立時間
      // order user data
      address: '',
      email: '',
      name: '',
      tel: ''
    }
  },
  methods: {
    // 訂單付款
    orderPay() {
      this.isLoading = true
      const { id } = this.$route.params
      this.$http
        .post(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/pay/${id}`)
        .then((res) => {
          console.log(res)
          Toast.fire({
            icon: 'success',
            title: '付款成功!'
          })
          this.$router.push(`/CartCompleteOrder/${id}`)
          this.isLoading = false
        })
        .catch((err) => {
          Swal.fire({
            title: '付款失敗',
            text: '請確認您目前的網路連線狀況並再次嘗試',
            icon: 'error',
            confirmButtonText: '確定',
            confirmButtonColor: '#5D7067'
          })
          console.log(err)
          this.isLoading = false
        })
    },
    ...mapActions(cartAndWishListStore, ['paymentMethod'])
  },
  mounted() {
    // 進入付款的動態路由頁面
    const { id } = this.$route.params
    this.$http
      .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/order/${id}`)
      .then((res) => {
        this.order = res.data.order
        // 訂單建立時間格式格式轉換
        const orderTime = res.data.order.create_at
        const date = new Date(orderTime)
        this.orderCreateTime = date
        // vue3 讀取第三層物件資料有問題，改為儲存於元件 data 中，再渲染於畫面上
        this.address = this.order.user.address
        this.email = this.order.user.email
        this.name = this.order.user.name
        this.tel = this.order.user.tel
        //若付款成功後又再次回到該頁面，引導客戶到訂單查詢頁面
        if (this.order.is_paid === true) {
          Swal.fire({
            title: '訂單付款已成功',
            text: '若要查詢訂單資訊請透過「訂單查詢系統」，謝謝! ',
            icon: 'warning',
            confirmButtonText: '確定',
            confirmButtonColor: '#5D7067'
          }).then((result) => {
            if (result.isConfirmed) {
              this.$router.push(`/OrderSearch`)
            }
          })
        }
      })
      .catch((err) => {
        alert(err)
      })
    this.payment = '' // 回復付款的預設狀態為 "請選擇您的付款方式"
  },
  computed: {
    ...mapState(cartAndWishListStore, ['total', 'payment', 'isLoading'])
  }
}
</script>
<style lang="scss" scoped>
.purchase-active {
  color: black;
  font-weight: bold;
  border-bottom: 4px solid $primary;
}
.products-header-bkg {
  background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1689947167279.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=HPMkP4A3VpRpZxeB2opnsMfTm7zoerIe27Pn6O6qhbyh8EkFs4nBrAkNn0jO11OeYDllGqlk2eC5SxekoC%2B9FHZ%2BFkwnOcz6A0UeiRTSPSfBv6V8pIv0n0YQ2ojXb7pPb1mKlGFRznE%2Fj5dr3f%2B4hlXp8ItFUKJ%2BgBS8%2FyodUAfTkG3gt6jhQhK98vBotZ7mCEWBW4fhxhjCF8RAZoDrBKxvKjyzB5cfzhY8ADvCJrIDS6BtCbTk68tuHpxoZGPt6davwZaQu5pECrO%2FZNLo21SRv352y4ro0Vpqfmb3odzFS6fYiNGegZ1TWIYCn5vSMUUSdlVlZqyZZbUh1x%2BIjA%3D%3D');
  background-position: center center;
  background-size: cover;
}
</style>
