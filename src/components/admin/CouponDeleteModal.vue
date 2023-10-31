<template>
  <div
    id="couponDeleteModal"
    ref="couponDeleteModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="couponDeleteModal"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delProductModalLabel" class="modal-title">
            <span>刪除優惠劵</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger">{{ tempCoupon.title }}</strong>
          優惠劵 ( 刪除後將無法恢復 )。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="deleteCoupon">確認刪除</button>
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
      couponDeleteModal: {} // 存放 deleteOrderModal 實體
    }
  },
  props: ['tempCoupon', 'deleteModalIsShow', 'closeModal', 'getCoupons'],
  watch: {
    // 如果 deleteModalIsShow 變更狀態值，打開 modal
    deleteModalIsShow() {
      if (this.deleteModalIsShow) {
        this.couponDeleteModal.show()
      }
    }
  },
  methods: {
    //  刪除優惠劵
    deleteCoupon() {
      this.$http
        .delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`)
        .then((res) => {
          this.getCoupons()
          this.couponDeleteModal.hide()
          alert(res.data.message)
        })
        .catch((err) => {
          alert(err.message)
        })
    }
  },
  mounted() {
    // bootstrap5 modal 實體化
    this.couponDeleteModal = new bootstrap.Modal(this.$refs.couponDeleteModal)
    //關閉 modal 後執行 closeModal() 並傳入參數 'delete' 將 deleteModalIsShow 改為 false
    this.$refs.couponDeleteModal.addEventListener('hidden.bs.modal', (event) => {
      this.closeModal('delete')
    })
  }
}
</script>
