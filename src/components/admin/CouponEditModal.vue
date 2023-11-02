<template>
  <div
    id="couponEditModal"
    ref="couponEditModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="couponEditModal"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-sm">
      <div class="modal-content border-0">
        <div class="modal-header bg-primary text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span v-if="isNew === true">新增優惠劵</span>
            <span v-else>編輯優惠劵</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body" v-if="modifyCoupon">
          <div class="mb-4">
            <label for="couponTitle" class="form-label">優惠券名稱</label>
            <input id="couponTitle" type="text" class="form-control" v-model="modifyCoupon.title" />
          </div>
          <div class="mb-4">
            <label for="couponCode" class="form-label">優惠券代碼</label>
            <input id="couponCode" type="text" class="form-control" v-model="modifyCoupon.code" />
          </div>
          <div class="mb-4">
            <label for="couponPercent" class="form-label">訂單折扣(%)</label>
            <input
              id="couponPercent"
              type="number"
              class="form-control"
              v-model="modifyCoupon.percent"
              max="100"
              min="0"
              oninput="value=value.replace(/^(0+)|[^\d]+/g, '').slice(0, 3)"
            />
          </div>
          <div class="mb-4">
            <h5 class="fs-6">使用期限</h5>
            <VueDatePicker v-model="date" :flow="flow" />
          </div>
          <div class="mb-4">
            <div class="form-check">
              <input
                id="couponIsEnabled"
                class="form-check-input"
                type="checkbox"
                :true-value="1"
                :false-value="0"
                v-model="modifyCoupon.is_enabled"
              />
              <label class="form-check-label" for="couponIsEnabled">是否啟用</label>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
              取消
            </button>
            <button type="button" class="btn btn-primary" @click="updateCoupon">確認</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as bootstrap from 'bootstrap'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data() {
    return {
      couponEditModal: {}, // 存放 couponEditModal 的實體
      // modifyCoupon 用於儲存要修改後送出的優惠卷資料
      modifyCoupon: {},
      // vue-datepicker
      date: null,
      flow: ['year', 'month', 'calendar', 'time']
    }
  },
  props: ['tempCoupon', 'editModalIsShow', 'isNew', 'closeModal', 'getCoupons'],
  components: { VueDatePicker },
  watch: {
    editModalIsShow() {
      // 如果 editModalIsShow 變更狀態值，打開 modal
      if (this.editModalIsShow) {
        this.couponEditModal.show()
        this.modifyCoupon = { ...this.tempCoupon }
        if (this.isNew) {
          // 如果是新增優惠劵狀態，清空 vue-datepicker 所選擇的時間資料
          this.date = null
        } else if (!this.isNew) {
          // 如果是編輯優惠劵狀態，使用 new Date() 建立一個時間物件給 vue-datepicker 的 this.date
          this.date = new Date()
          this.date.setTime(this.modifyCoupon.due_date * 1000)
        }
      }
    }
  },
  methods: {
    // 編輯優惠卷
    updateCoupon() {
      let url = `${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/coupon`
      // 用 isNew 判斷 API 如何運行
      let method = 'post'
      // 將使用 vue-datepicker 選擇的時間轉換成 unix 時間戳記並轉換成數字型別
      this.modifyCoupon.due_date = Number(this.date.getTime() * 0.001)

      if (!this.isNew) {
        url = `${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/coupon/${this.modifyCoupon.id}`
        method = 'put'
      }
      this.$http[method](url, { data: this.modifyCoupon })
        .then((res) => {
          this.getCoupons() // 新增完產品以後會重新取得
          this.couponEditModal.hide()
          alert(res.data.message)
        })
        .catch((err) => {
          // 新增產品失敗跳出錯誤訊息提示框
          alert(err.message)
        })
    }
  },
  mounted() {
    // bootstrap5 modal 實體化
    this.couponEditModal = new bootstrap.Modal(this.$refs.couponEditModal)
    //關閉 modal 執行 closeModal() 並傳入參數 'edit' 將 editModalIsShow 改為 false
    this.$refs.couponEditModal.addEventListener('hidden.bs.modal', (event) => {
      this.closeModal('edit')
    })
  }
}
</script>
