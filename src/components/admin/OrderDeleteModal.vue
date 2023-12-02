<template>
  <div
    id="deleteOrderModal"
    ref="deleteOrderModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="deleteOrderModal"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delProductModalLabel" class="modal-title">
            <span>刪除訂單</span>
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
          <strong class="text-danger">{{ tempOrder.id }}</strong>
          訂單 ( 刪除後將無法恢復 )。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <!-- 如果開啟的 modal 傳入的 tempOrder.id 為 '全部'，呼叫 deleteAllOrder 刪除全部訂單-->
          <button
            v-if="tempOrder.id === '全部'"
            type="button"
            class="btn btn-danger"
            @click="deleteAllOrder"
          >
            確認刪除
          </button>
          <button v-else type="button" class="btn btn-danger" @click="deleteOrder">確認刪除</button>
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
      deleteOrderModal: {},
    };
  },
  props: ['tempOrder', 'deleteModalIsShow', 'closeModal', 'getOrders'],
  watch: {
    deleteModalIsShow() {
      if (this.deleteModalIsShow) {
        this.deleteOrderModal.show();
      }
    },
  },
  methods: {
    //  刪除訂單
    deleteOrder() {
      this.$http
        .delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/order/${this.tempOrder.id}`)
        .then(() => {
          this.getOrders();
          this.deleteOrderModal.hide();
          Toast.fire({
            icon: 'success',
            title: '已成功刪除訂單',
          });
        })
        .catch(() => {
          this.deleteOrderModal.hide();
          Swal.fire({
            title: '刪除訂單失敗',
            text: '請確認網路連線環境並再次嘗試!',
            icon: 'error',
            confirmButtonText: '確定',
            confirmButtonColor: '#5D7067',
            customClass: {
              popup: 'radius0',
              confirmButton: 'radius0',
            },
          });
        });
    },
    // 刪除全部訂單
    deleteAllOrder() {
      this.$http
        .delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/orders/all`)
        .then(() => {
          this.getOrders();
          this.deleteOrderModal.hide();
          Toast.fire({
            icon: 'success',
            title: '已成功刪除全部訂單',
          });
        })
        .catch(() => {
          this.deleteOrderModal.hide();
          Swal.fire({
            title: '刪除訂單失敗',
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
    this.deleteOrderModal = new bootstrap.Modal(this.$refs.deleteOrderModal);
    this.$refs.deleteOrderModal.addEventListener('hidden.bs.modal', () => {
      this.closeModal('delete');
    });
  },
};
</script>
