<template>
  <div
    id="productDeleteModal"
    ref="productDeleteModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productDeleteModal"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delProductModalLabel" class="modal-title">
            <span>刪除產品</span>
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
          <strong class="text-danger">{{ tempProduct.title }}</strong>
          商品(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="deleteProduct">確認刪除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as bootstrap from 'bootstrap'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
// sweetalert2
import Swal from 'sweetalert2'
import Toast from '@/utils/Toast'

export default {
  data() {
    return {
      productDeleteModal: {} // 存放 deleteProductModal 實體
    }
  },
  props: ['tempProduct', 'deleteModalIsShow', 'closeModal', 'getProducts'],
  watch: {
    // 如果 deleteModalIsShow 變更狀態值，打開 modal
    deleteModalIsShow() {
      if (this.deleteModalIsShow) {
        this.productDeleteModal.show()
      }
    }
  },
  methods: {
    //刪除單項產品
    deleteProduct() {
      this.$http
        .delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/product/${this.tempProduct.id}`)
        .then((res) => {
          this.getProducts()
          this.productDeleteModal.hide()
          Toast.fire({
            icon: 'success',
            title: '已成功刪除產品'
          })
        })
        .catch((err) => {
          this.productDeleteModal.hide()
          Swal.fire({
            title: '刪除產品失敗',
            text: '請確認網路連線環境並再次嘗試!',
            icon: 'error',
            confirmButtonText: '確定',
            confirmButtonColor: '#5D7067',
            customClass: {
              popup: 'radius0',
              confirmButton: 'radius0'
            }
          })
        })
    }
  },
  mounted() {
    // bootstrap5 modal 實體化
    this.productDeleteModal = new bootstrap.Modal(this.$refs.productDeleteModal)
    //關閉 modal 後執行 closeModal() 並傳入參數 'delete' 將 deleteModalIsShow 改為 false
    this.$refs.productDeleteModal.addEventListener('hidden.bs.modal', (event) => {
      this.closeModal('delete')
    })
  }
}
</script>
