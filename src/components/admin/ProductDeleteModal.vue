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
import * as bootstrap from 'bootstrap';
// sweetalert2
import Swal from 'sweetalert2';
import Toast from '@/utils/Toast';

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      productDeleteModal: {},
    };
  },
  props: ['tempProduct', 'deleteModalIsShow', 'closeModal', 'getProducts'],
  watch: {
    deleteModalIsShow() {
      if (this.deleteModalIsShow) {
        this.productDeleteModal.show();
      }
    },
  },
  methods: {
    // 刪除單項產品
    deleteProduct() {
      this.$http
        .delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/product/${this.tempProduct.id}`)
        .then(() => {
          this.getProducts();
          this.productDeleteModal.hide();
          Toast.fire({
            icon: 'success',
            title: '已成功刪除產品',
          });
        })
        .catch(() => {
          this.productDeleteModal.hide();
          Swal.fire({
            title: '刪除產品失敗',
            text: '請確認網路連線環境並再次嘗試!',
            icon: 'error',
            confirmButtonText: '確定',
            confirmButtonColor: '#5D7067',
            customClass: {
              title: 'titleFontStyle',
              popup: 'radius0',
              confirmButton: 'radius0',
            },
          });
        });
    },
  },
  mounted() {
    this.productDeleteModal = new bootstrap.Modal(this.$refs.productDeleteModal);
    this.$refs.productDeleteModal.addEventListener('hidden.bs.modal', () => {
      this.closeModal('delete');
    });
  },
};
</script>
