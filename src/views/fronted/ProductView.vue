<template>
  <div class="py-md-13 py-9 products-header-bkg01">
    <div class="container d-flex flex-column align-items-center">
      <h2 class="fw-bold fs-lg-10 fs-1 mb-3 text-white" style="font-family: var(--bs-NotoSerif-TC)">
        商品資訊
      </h2>
      <div class="fs-6">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-0 text-white text-center">
            <li class="breadcrumb-item">
              <routerLink class="text-decoration-none text-white" to="/">首頁</routerLink>
            </li>
            <li class="breadcrumb-item">
              <routerLink class="text-decoration-none text-white" to="/products"
                >全站商品</routerLink
              >
            </li>
            <li class="breadcrumb-item active" aria-current="page">商品資訊</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>

  <div class="container my-6">
    <div class="row gx-lg-6 mb-8">
      <div class="col-lg-4">
        <img
          class="img-fluid product-img w-100"
          :src="product.imageUrl"
          :alt="product.title"
          width="440"
          height="440"
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
          <div
            class="d-flex flex-column flex-lg-row justify-content-lg-between align-items-end mt-6"
          >
            <p class="fw-bold fs-5 fst-italic mb-lg-0 mb-2">
              NT $<span>{{ product.price }}</span
              >/ {{ product.unit }}
            </p>
            <form>
              <div class="d-flex fs-6">
                <select
                  class="form-select select-hight me-2 w-auto"
                  name=""
                  id=""
                  :disabled="product.quantity === 0"
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
                  type="submit"
                  :disabled="product.quantity === 0"
                >
                  加入購物車
                </button>
                <button class="btn btn-pink fs-6" type="button">
                  <i class="bi bi-heart-fill text-white"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div>
      <h2 class="fs-4 mb-4">你可能也喜歡</h2>
      <div class="bg-light">
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <!-- 留製作輪播使用 -->
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
      product: {} // 存放取出的單向產品資料
    }
  },
  components: {
    RouterLink
  },
  mounted() {
    // 取得產品 id 並串接 api 將資料儲存到 product 物件中
    const { id } = this.$route.params
    this.$http
      .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/product/${id}`)
      .then((res) => {
        this.product = res.data.product
      })
      .catch((err) => {
        alert(err)
      })
  }
}
</script>
<style lang="scss">
.products-header-bkg {
  background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1689947167279.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=HPMkP4A3VpRpZxeB2opnsMfTm7zoerIe27Pn6O6qhbyh8EkFs4nBrAkNn0jO11OeYDllGqlk2eC5SxekoC%2B9FHZ%2BFkwnOcz6A0UeiRTSPSfBv6V8pIv0n0YQ2ojXb7pPb1mKlGFRznE%2Fj5dr3f%2B4hlXp8ItFUKJ%2BgBS8%2FyodUAfTkG3gt6jhQhK98vBotZ7mCEWBW4fhxhjCF8RAZoDrBKxvKjyzB5cfzhY8ADvCJrIDS6BtCbTk68tuHpxoZGPt6davwZaQu5pECrO%2FZNLo21SRv352y4ro0Vpqfmb3odzFS6fYiNGegZ1TWIYCn5vSMUUSdlVlZqyZZbUh1x%2BIjA%3D%3D');
  background-position: center center;
  background-size: cover;
}
</style>
