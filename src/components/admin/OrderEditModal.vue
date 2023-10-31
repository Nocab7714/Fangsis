<template>
  <div
    id="orderEditModal"
    ref="orderEditModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="orderEditModal"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-primary text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span>編輯訂單</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body" v-if="modifyOrder">
          <h4 class="fw-bold">訂單狀態</h4>
          <hr />
          <div class="row mb-6">
            <div class="col-lg-4">
              <div class="mb-4">
                <label for="orderId" class="form-label">訂單編號</label>
                <input
                  id="orderId"
                  type="text"
                  class="form-control"
                  v-model="modifyOrder.id"
                  disabled
                />
              </div>
            </div>
            <div class="col-lg-4">
              <div class="mb-4">
                <label for="orderCreateAt" class="form-label">訂單成立時間</label>
                <input
                  id="orderCreateAt"
                  type="text"
                  class="form-control"
                  v-model="orderCreateAt"
                  disabled
                />
              </div>
            </div>
            <div class="col-lg-4">
              <div class="mb-4">
                <label for="orderIsPaid" class="form-label">付款狀態</label>
                <select id="orderIsPaid" class="form-select" v-model="modifyOrder.is_paid">
                  <option :value="true">已付款</option>
                  <option :value="false">未付款</option>
                </select>
              </div>
            </div>
          </div>
          <h4 class="fw-bold">訂購人個人資料</h4>
          <hr />
          <div class="row mb-6">
            <div class="col-lg-4">
              <div class="mb-3">
                <label for="orderName" class="form-label">訂購人姓名</label>
                <input
                  id="orderName"
                  type="text"
                  class="form-control"
                  v-model="modifyOrder.user.name"
                />
              </div>
            </div>
            <div class="col-lg-4">
              <div class="mb-3">
                <label for="orderTel" class="form-label">連絡電話</label>
                <input
                  id="orderTel"
                  type="tel"
                  class="form-control"
                  onkeyup="value=value.replace(/[^\d]/g,'') "
                  v-model="modifyOrder.user.tel"
                />
              </div>
            </div>
            <div class="col-lg-4">
              <div class="mb-3">
                <label for="orderEmail" class="form-label">電子郵件</label>
                <input
                  id="Email"
                  type="email"
                  class="form-control"
                  v-model="modifyOrder.user.email"
                />
              </div>
            </div>
            <div class="col-12">
              <div class="mb-3">
                <label for="orderAddress" class="form-label">收件地址</label>
                <input
                  id="orderAddress"
                  type="text"
                  class="form-control"
                  v-model="modifyOrder.user.address"
                />
              </div>
            </div>
            <div class="col-12">
              <div class="mb-3">
                <label for="orderMessage" class="form-label">訂購人備註</label>
                <textarea
                  id="orderMessage"
                  type="text"
                  class="form-control"
                  rows="4"
                  v-model="modifyOrder.message"
                >
                </textarea>
              </div>
            </div>
          </div>
          <h4 class="fw-bold">訂單商品</h4>
          <hr />
          <div class="mb-10">
            <div class="table-responsive mb-3">
              <table class="table">
                <thead>
                  <tr class="text-nowrap">
                    <th>商品類別</th>
                    <th>商品名稱</th>
                    <th class="text-center">使用優惠碼</th>
                    <th class="text-center">數量</th>
                    <th class="text-center">小計</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="product in modifyOrder.products" :key="product.id">
                    <td>{{ product.product.category }}</td>
                    <td class="text-nowrap">{{ product.product.title }}</td>
                    <td class="text-center">
                      <span v-if="product.coupon">{{ product.coupon.title }}</span>
                      <span v-else>無使用</span>
                    </td>
                    <td class="text-center">
                      {{ product.qty }}
                    </td>
                    <td class="text-center">{{ product.final_total }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="text-end me-2">訂單總金額 : {{ modifyOrder.total }}</p>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
              取消
            </button>
            <button type="button" class="btn btn-primary" @click="updateOrder">確認修改</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as bootstrap from 'bootstrap'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data() {
    return {
      orderEditModal: {}, // 存放 orderModal 的實體
      // modifyOrder 用於儲存要修改後送出的訂單資料
      modifyOrder: {
        create_at: '',
        id: '',
        is_paid: false,
        num: '',
        paid_date: '',
        products: {},
        total: '',
        user: {
          address: '',
          email: '',
          name: '',
          tel: ''
        }
      },
      orderCreateAt: '' // 用於存放並顯示轉換格式後的時間 (用於畫面顯示)
    }
  },
  props: ['tempOrder', 'editModalIsShow', 'closeModal', 'getOrders'],
  watch: {
    editModalIsShow() {
      // 如果 editModalIsShow 變更狀態值，打開 modal
      if (this.editModalIsShow) {
        this.orderEditModal.show()
        this.modifyOrder = JSON.parse(JSON.stringify(this.tempOrder))
        this.orderCreateAt = new Date(this.modifyOrder.create_at * 1000).toLocaleString() // 將訂單建立 unix 的時間戳記進行格式轉換轉換
      }
    }
  },
  methods: {
    // 編輯訂單
    updateOrder() {
      this.$http
        .put(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/order/${this.modifyOrder.id}`, {
          data: this.modifyOrder
        })
        .then((res) => {
          this.getOrders()
          this.orderEditModal.hide() // 關閉 modal
          alert(res.data.message)
        })
        .catch((err) => {
          alert(err)
        })
    }
  },
  mounted() {
    // bootstrap5 modal 實體化
    this.orderEditModal = new bootstrap.Modal(this.$refs.orderEditModal)
    //關閉 modal 執行 closeModal() 並傳入參數 'edit' 將 editModalIsShow 改為 false
    this.$refs.orderEditModal.addEventListener('hidden.bs.modal', (event) => {
      this.closeModal('edit')
    })
  }
}
</script>
