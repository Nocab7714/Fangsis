<template>
  <div :class="{ 'sidebar-toggled': sidebarToggledStatus }">
    <div class="d-flex">
      <aside class="sidebar bg-primary" style="min-height: 110vh">
        <h2 class="fs-5 text-white py-3 px-3">Fangsis 後台管理系統</h2>
        <div class="list-group rounded-0">
          <router-link
            to="/admin/AdminProducts"
            class="list-group-item bg-primary link-light border-0"
          >
            <i class="bi bi-box-seam-fill me-2"></i>產品管理
          </router-link>
          <router-link
            to="/admin/AdminOrders"
            class="list-group-item bg-primary link-light border-0"
          >
            <i class="bi bi-box-seam-fill me-2"></i>訂單管理
          </router-link>
          <router-link
            to="/admin/AdminCoupons"
            class="list-group-item list-group-item-active bg-primary link-light border-0"
          >
            <i class="bi bi-box-seam-fill me-2"></i>優惠卷管理
          </router-link>
        </div>
      </aside>
      <main class="main">
        <div class="bg-white border-bottom w-100 d-flex justify-content-between">
          <a @click.prevent="sidebarToggled" href="" class="py-3 px-4 d-inline-block border-end">
            <i class="bi bi-arrows-angle-expand"></i>
          </a>
          <button @click="adminLogout" class="btn btn-primary text-end my-2 me-3">
            <i class="bi bi-door-open me-2"></i>登出
          </button>
        </div>
        <div class="container py-4 px-4">
          <div class="border d-flex justify-content-between py-5 px-4 mb-3">
            <h3>優惠劵管理</h3>
            <button class="btn btn-outline-primary" @click="openModal('create')" type="button">
              新增優惠劵
            </button>
          </div>
          <div class="border py-5 px-4 mb-5 d-flex flex-column">
            <div class="vl-parent" ref="CouponLoadingContainer">
              <!-- loading 效果元件 -->
              <AdminContainerLoading :isLoading="isLoading" :container="container" />
              <div class="table-responsive mb-3">
                <table class="table">
                  <thead>
                    <tr class="text-nowrap">
                      <th scope="col">優惠卷名稱</th>
                      <th scope="col">優惠卷代碼</th>
                      <th scope="col">訂單折扣</th>
                      <th scope="col">使用期限</th>
                      <th scope="col">是否啟用</th>
                      <th scope="col">編輯</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="coupon in coupons" :key="coupon.code">
                      <td>{{ coupon.title }}</td>
                      <td>{{ coupon.code }}</td>
                      <td>{{ coupon.percent }}%</td>
                      <td>{{ new Date(coupon.due_date * 1000).toLocaleString() }}</td>
                      <td>
                        <span class="text-success" v-if="coupon.is_enabled">啟用</span>
                        <span v-else class="text-danger">未啟用</span>
                      </td>
                      <td>
                        <div class="btn-group text-nowrap">
                          <button
                            type="button"
                            class="btn btn-outline-primary btn-sm"
                            @click="openModal('edit', coupon)"
                          >
                            編輯
                          </button>
                          <button
                            type="button"
                            class="btn btn-outline-danger btn-sm"
                            @click="openModal('delete', coupon)"
                          >
                            刪除
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="d-flex justify-content-center">
                <CouponPagination :pages="pages" :getCoupons="getCoupons" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>

  <!-- modal -->
  <CouponEditModal
    :tempCoupon="tempCoupon"
    :editModalIsShow="editModalIsShow"
    :closeModal="closeModal"
    :getCoupons="getCoupons"
    :isNew="isNew"
  />
  <CouponDeleteModal
    :tempCoupon="tempCoupon"
    :deleteModalIsShow="deleteModalIsShow"
    :closeModal="closeModal"
    :getCoupons="getCoupons"
  />
</template>

<script>
import CouponEditModal from '@/components/admin/CouponEditModal.vue'
import CouponDeleteModal from '@/components/admin/CouponDeleteModal.vue'
import CouponPagination from '@/components/admin/CouponPagination.vue'
import AdminContainerLoading from '@/components/admin/AdminContainerLoading.vue'
import AdminMixin from '@/mixins/AdminMixin.vue'

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data() {
    return {
      coupons: [], // 存放所有優惠卷資料
      tempCoupon: {
        // 初始化資料
        code: '',
        due_date: null,
        id: '',
        is_enabled: 0,
        num: null,
        percent: null,
        title: ''
      }, //存放用於修改的優惠卷資料
      isNew: false, // 判斷是否為新資料
      container: this.$refs.CouponLoadingContainer // loading 渲染範圍
    }
  },
  components: { CouponEditModal, CouponDeleteModal, CouponPagination, AdminContainerLoading },
  mixins: [AdminMixin],
  methods: {
    // 取得所有優惠卷資料
    getCoupons(page = 1) {
      this.isLoading = true
      this.$http
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/coupons?page=${page}`)
        .then((res) => {
          this.coupons = res.data.coupons
          this.pages = res.data.pagination
          this.isLoading = false
        })
        .catch((err) => {
          alert(err.data.message)
          this.isLoading = false
        })
    },
    // 開啟 modal
    openModal(status, coupon) {
      if (status === 'create') {
        //新增產品
        this.isNew = true
        this.editModalIsShow = true
        // 會帶入初始化資料
        this.tempCoupon = {
          code: '',
          due_date: null,
          id: '',
          is_enabled: 0,
          num: null,
          percent: null,
          title: ''
        }
      } else if (status === 'edit') {
        //編輯產品
        this.isNew = false
        this.editModalIsShow = true
        // 會帶入當前要編輯的資料
        this.tempCoupon = { ...coupon }
      } else if (status === 'delete') {
        //刪除產品
        this.deleteModalIsShow = true
        this.tempCoupon = { ...coupon }
      }
    },
    // 關閉 modal
    closeModal(modalName) {
      if (modalName === 'edit') {
        this.editModalIsShow = false
      } else if (modalName === 'delete') {
        this.deleteModalIsShow = false
      }
    }
  },
  mounted() {
    this.getCoupons()
  }
}
</script>

<style lang="scss" scoped></style>
