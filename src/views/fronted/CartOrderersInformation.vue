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
    <VForm v-slot="{ meta, errors }" @submit="createOrder">
      <div class="row mt-4 gy-3">
        <div class="col-lg-8">
          <div class="border border-2 border-secondary px-5 py-5">
            <div
              class="border border-1 border-secondary border-top-0 border-end-0 border-start-0 w-100 mb-5 d-flex"
            >
              <h2 class="fs-4 fw-bold">填寫訂購人資訊</h2>
            </div>

            <div class="mb-4 w-100 w-md-50">
              <label for="PurchaserName" class="form-label">姓名 / Name</label>
              <VField
                class="form-control"
                :class="{ 'is-invalid': errors.訂購人姓名 }"
                id="PurchaserName"
                type="text"
                name="訂購人姓名"
                rules="required"
                placeholder="請輸入您的姓名"
                v-model="name"
              />
              <ErrorMessage class="invalid-feedback ms-1" name="訂購人姓名" />
            </div>
            <div class="mb-4">
              <label for="PurchaserPhoneNumber" class="form-label">手機號碼 / Phone Number</label>
              <VField
                class="form-control"
                :class="{ 'is-invalid': errors.手機電話號碼 }"
                id="PurchaserPhoneNumber"
                type="tel"
                name="手機電話號碼"
                :rules="isPhone"
                placeholder="請輸入您的手機電話號碼"
                oninput="value=value.replace(/[^\d]/g,'')"
                v-model="tel"
              />
              <ErrorMessage class="invalid-feedback ms-1" name="手機電話號碼" />
            </div>
            <div class="mb-4">
              <label for="PurchaserEmail" class="form-label">電子郵件 / Email Address</label>
              <VField
                class="form-control"
                :class="{ 'is-invalid': errors.email }"
                id="PurchaserEmail"
                type="email"
                name="email"
                rules="required|email"
                placeholder="請輸入您的電子郵件地址"
                v-model="email"
              />
              <ErrorMessage class="invalid-feedback ms-1" name="email" />
            </div>
            <div class="mb-4">
              <label for="PurchaserAddress" class="form-label"
                >收件地址 / Recipient's Address</label
              >
              <VField
                class="form-control"
                :class="{ 'is-invalid': errors.收件地址 }"
                id="PurchaserAddress"
                type="text"
                name="收件地址"
                rules="required"
                placeholder="請填寫配送位址，在此輸入您方便接受商品配送的地址"
                v-model="address"
              />
              <ErrorMessage class="invalid-feedback ms-1" name="收件地址" />
            </div>
            <div class="mb-4">
              <label for="PurchaserOrderRemark" class="form-label">訂單備註 / Order Remark</label>
              <textarea
                class="form-control"
                id="PurchaserOrderRemark"
                name="PurchaserOrderRemark"
                cols="40"
                rows="10"
                maxlength="300"
                placeholder="若您有任何的需要，可以在備註欄位中留下您對訂單的需求"
                style="resize: none"
                v-model="message"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="border border-2 border-secondary px-5 py-5 d-flex flex-column">
            <div class="mb-6">
              <div
                class="border border-1 border-secondary border-top-0 border-end-0 border-start-0 w-100 mb-3"
              >
                <h2 class="fs-5 fw-bold">您的訂單</h2>
              </div>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">商品名稱</th>
                    <th class="text-end text-nowrap" scope="col">數量</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="cart in carts">
                    <th class="fw-lighter" scope="row">{{ cart.product.title }}</th>
                    <td class="fw-lighter text-end">{{ cart.qty }}</td>
                  </tr>
                </tbody>
              </table>
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
                  :checked="delivery === '7-11 取貨'"
                  disabled
                />
                <label class="form-check-label" for="DeliveryMethod01"> 7-11 取貨</label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  id="DeliveryMethod02"
                  type="radio"
                  name="DeliveryMethod"
                  :checked="delivery === '順豐速遞 - 常溫配送'"
                  disabled
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
            <span v-if="total !== final_total" class="fs-7 text-end"
              >( 已套用 fangsis888 優惠代碼 - 結帳8折大優惠 )</span
            >
            <div class="row mt-5 mb-8 gx-2">
              <div class="col-6">
                <router-link class="btn btn-outline-secondary w-100" to="CartView"
                  >回上一頁</router-link
                >
              </div>
              <div class="col-6">
                <button
                  class="btn btn-primary w-100"
                  type="submit"
                  :disabled="carts.length === 0 || !meta.valid"
                >
                  建立訂單
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </VForm>
  </div>
  <!-- vue-loading -->
  <loading
    v-model:active="isLoading"
    :can-cancel="false"
    :lock-scroll="lockScroll"
    :background-color="backgroundColor"
    :opacity="opacity"
    :is-full-page="fullPage"
    class="vl-overlay-full-page"
  >
    <div class="d-flex flex-column align-items-center mx-3">
      <img
        class="img-fluid animate__animated animate__pulse animate__infinite"
        src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1682598276311.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=qL%2F7begbYX2RvKeejMCXEVhmPIyuNGNfCCMcDFt7bJOkRpxv46JeWb2TcnzDlPj0WB%2BEdEY5kqcd%2FuGxVX0MUcXT6mdARX8Fq51Oyho%2FKl3YIiVxIVVeF7sxsMIAK0oBlZNxrvy7yzcGJLq7uUKcPuDNXzasO4M4qt9bBKXOrDkbf8%2BCMlUoWim4Q9jtjfbIO7IgAgPn5PA1DJzmhv4bfRPco8SgGxGVvG8k9Q2ZSDxnODfwqxYHJE%2Bb6woza2dFQcEzDiBR%2FVhf1%2B8%2BB2%2BWaXD5AJCkLDjLIcTtZZBO5zCfbzg2HQAknzt%2FbXAHPI3xhOJ%2F5WXn5SnRr%2F2Xk7WDhQ%3D%3D"
        width="192"
        height="64"
        alt="芳心白色logo"
      />
      <span class="text-white fs-7 mt-2">Loading ...</span>
    </div>
  </loading>
</template>
<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
// router
import { RouterLink } from 'vue-router'
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

// vue-loading
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

// animate.css
import 'animate.css'

export default {
  data() {
    return {
      // order information
      name: '',
      email: '',
      tel: '',
      address: '',
      message: '',
      // vue-loading
      isLoading: false,
      lockScroll: true,
      fullPage: true,
      backgroundColor: '#5d7067',
      opacity: 1
    }
  },
  components: {
    Loading
  },
  methods: {
    //建立訂單
    createOrder() {
      this.isLoading = true // 建立訂單前前顯示 loading 效果
      // 訂購人資訊
      const data = {
        user: {
          name: this.name,
          email: this.email,
          tel: this.tel,
          address: this.address
        },
        message: this.message
      }

      this.$http
        .post(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/order`, { data })
        .then((res) => {
          this.isLoading = false // 建立訂單成功後關閉 loading 效果
          Toast.fire({
            icon: 'success',
            title: '訂單建立成功!'
          })
          this.getCart()
          this.$router.push(`OrderPay/${res.data.orderId}`)
        })
        .catch((err) => {
          this.isLoading = false // 建立訂單失敗後關閉 loading 效果
          Swal.fire({
            title: '訂單建立失敗',
            text: '請確認您目前的網路連線狀況並再次嘗試',
            icon: 'error',
            confirmButtonText: '確定',
            confirmButtonColor: '#5D7067'
          })
          console.log(err)
        })
    },
    // 手機號碼驗證的規則
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '請輸入正確的手機號碼格式'
    },
    ...mapActions(cartAndWishListStore, ['getCart'])
  },
  mounted() {
    this.isLoading = true
    // 設定進首頁顯示 2s full page loading
    setTimeout(() => {
      this.isLoading = false
    }, 2000)
  },
  computed: {
    ...mapState(cartAndWishListStore, ['carts', 'total', 'final_total', 'delivery'])
  }
}
</script>
<style lang="scss">
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
