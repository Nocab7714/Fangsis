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
import * as bootstrap from 'bootstrap';
// sweetalert2
import Swal from 'sweetalert2';
import Toast from '@/utils/Toast';

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      couponDeleteModal: {},
    };
  },
  props: ['tempCoupon', 'deleteModalIsShow', 'closeModal', 'getCoupons'],
  watch: {
    deleteModalIsShow() {
      if (this.deleteModalIsShow) {
        this.couponDeleteModal.show();
      }
    },
  },
  methods: {
    //  刪除優惠劵
    deleteCoupon() {
      this.$http
        .delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`)
        .then(() => {
          this.getCoupons();
          this.couponDeleteModal.hide();
          Toast.fire({
            icon: 'success',
            title: '已成功刪除優惠劵',
          });
        })
        .catch(() => {
          this.couponDeleteModal.hide();
          Swal.fire({
            title: '刪除優惠劵失敗',
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
    this.couponDeleteModal = new bootstrap.Modal(this.$refs.couponDeleteModal);
    this.$refs.couponDeleteModal.addEventListener('hidden.bs.modal', () => {
      this.closeModal('delete');
    });
  },
};
</script>
