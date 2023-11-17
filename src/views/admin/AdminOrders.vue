<template>
  <div :class="{ 'sidebar-toggled': sidebarToggledStatus }">
    <div class="d-flex">
      <aside class="sidebar bg-primary" style="min-height: 110vh">
        <h2 class="fs-5 text-white py-3 px-3">Fangsis 後台管理系統</h2>
        <div class="list-group rounded-0">
          <RouterLink
            to="/admin/AdminProducts"
            class="list-group-item bg-primary link-light border-0"
          >
            <i class="bi bi-box-seam-fill me-2"></i>產品管理
          </RouterLink>
          <RouterLink
            to="/admin/AdminOrders"
            class="list-group-item list-group-item-active bg-primary link-light border-0"
          >
            <i class="bi bi-box-seam-fill me-2"></i>訂單管理
          </RouterLink>
          <RouterLink
            to="/admin/AdminCoupons"
            class="list-group-item bg-primary link-light border-0"
          >
            <i class="bi bi-box-seam-fill me-2"></i>優惠卷管理
          </RouterLink>
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
            <h3>訂單管理</h3>
            <button class="btn btn-outline-primary" @click="openModal('deleteAll')" type="button">
              刪除全部訂單
            </button>
          </div>
          <div class="border py-5 px-4 mb-5 d-flex flex-column">
            <div class="vl-parent" ref="orderLoadingContainer">
              <!-- loading 效果元件 -->
              <AdminContainerLoading :isLoading="isLoading" :container="container" />
              <div class="table-responsive mb-3">
                <table class="table">
                  <thead>
                    <tr class="text-nowrap">
                      <th scope="col" class="text-break">訂單編號</th>
                      <th scope="col">付款狀態</th>
                      <th scope="col">訂購人姓名</th>
                      <th scope="col">連絡電話</th>
                      <th scope="col">聯絡信箱</th>
                      <th scope="col">收件地址</th>
                      <th scope="col">訂單成立時間</th>
                      <th scope="col">編輯資料</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="order in orders" :key="order.id">
                      <td>{{ order.id }}</td>
                      <td>
                        <span class="text-success" v-if="order.is_paid">已付款</span>
                        <span v-else class="text-danger">未付款</span>
                      </td>
                      <td>{{ order.user.name }}</td>
                      <td>{{ order.user.tel }}</td>
                      <td>{{ order.user.email }}</td>
                      <td>{{ order.user.address }}</td>
                      <td>{{ new Date(order.create_at * 1000).toLocaleString() }}</td>
                      <td>
                        <div class="btn-group text-nowrap">
                          <button
                            type="button"
                            class="btn btn-outline-primary btn-sm"
                            @click="openModal('edit', order)"
                          >
                            編輯
                          </button>
                          <button
                            type="button"
                            class="btn btn-outline-danger btn-sm"
                            @click="openModal('delete', order)"
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
                <OrderPagination :pages="pages" :getOrders="getOrders" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  <!-- modal -->
  <OrderEditModal
    :tempOrder="tempOrder"
    :editModalIsShow="editModalIsShow"
    :closeModal="closeModal"
    :getOrders="getOrders"
  />
  <OrderDeleteModal
    :tempOrder="tempOrder"
    :deleteModalIsShow="deleteModalIsShow"
    :closeModal="closeModal"
    :getOrders="getOrders"
  />
</template>

<script>
import OrderEditModal from '@/components/admin/OrderEditModal.vue';
import OrderDeleteModal from '@/components/admin/OrderDeleteModal.vue';
import OrderPagination from '@/components/admin/OrderPagination.vue';
import AdminContainerLoading from '@/components/admin/AdminContainerLoading.vue';
import AdminMixin from '@/mixins/AdminMixin.vue';
// sweetalert2
import Swal from 'sweetalert2';

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  data() {
    return {
      orders: [], // 存放所有訂單資料
      tempOrder: {}, // 存放用於修改的訂單資料
      pages: {}, // 存放 Pagination 的分頁狀態
      editModalIsShow: false, // 打開與關閉 editModal 的狀態
      deleteModalIsShow: false, // 打開與關閉 editModal 的狀態
      container: this.$refs.orderLoadingContainer, // loading 渲染範圍
    };
  },
  components: {
    OrderEditModal, OrderDeleteModal, OrderPagination, AdminContainerLoading,
  },
  mixins: [AdminMixin],
  methods: {
    // 取得所有訂單資料
    getOrders(page = 1) {
      this.isLoading = true;
      this.$http
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/orders?page=${page}`)
        .then((res) => {
          this.orders = res.data.orders;
          this.pages = res.data.pagination;
          this.isLoading = false;
        })
        .catch(() => {
          Swal.fire({
            title: '資料錯誤',
            text: '無法取得後台資料，請重新確認網路連線並重新登入!',
            icon: 'error',
            confirmButtonText: '確定',
            confirmButtonColor: '#5D7067',
            customClass: {
              popup: 'radius0',
              confirmButton: 'radius0',
            },
          });
          this.isLoading = false;
        });
    },
    // 開啟 modal
    openModal(status, order) {
      if (status === 'edit') {
        this.editModalIsShow = true;
        this.tempOrder = { ...order };
      } else if (status === 'delete') {
        this.deleteModalIsShow = true;
        this.tempOrder = { ...order };
      } else if (status === 'deleteAll') {
        this.deleteModalIsShow = true;
        this.tempOrder = {
          id: '全部',
        };
      }
    },
    // 關閉 modal
    closeModal(modalName) {
      if (modalName === 'edit') {
        this.editModalIsShow = false;
      } else if (modalName === 'delete') {
        this.deleteModalIsShow = false;
      }
    },
  },
  mounted() {
    this.getOrders();
  },
};
</script>

<style lang="scss" scoped></style>
