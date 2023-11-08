<template>
  <div :class="{ 'sidebar-toggled': sidebarToggledStatus }">
    <div class="d-flex">
      <aside class="sidebar bg-primary" style="min-height: 110vh">
        <h2 class="fs-5 text-white py-3 px-3">Fangsis 後台管理系統</h2>
        <div class="list-group rounded-0">
          <router-link
            to="/admin/AdminProducts"
            class="list-group-item bg-primary link-light border-0 list-group-item-active"
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
            class="list-group-item bg-primary link-light border-0"
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
            <h3>產品管理</h3>
            <button class="btn btn-outline-primary" @click="openModal('create')" type="button">
              新增產品
            </button>
          </div>
          <div class="border py-5 px-4 mb-5 d-flex flex-column">
            <div class="vl-parent" ref="ProductLoadingContainer">
              <!-- loading 效果元件 -->
              <AdminContainerLoading :isLoading="isLoading" :container="container" />
              <div class="table-responsive-xl mb-3">
                <table class="table">
                  <thead>
                    <tr class="text-nowrap">
                      <th scope="col">產品類別</th>
                      <th scope="col">產品名稱</th>
                      <th scope="col">原價</th>
                      <th scope="col">售價</th>
                      <th scope="col">產品數量</th>
                      <th scope="col">啟用狀態</th>
                      <th scope="col">熱銷狀態</th>
                      <th scope="col">編輯資料</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="product in products" :key="product.id">
                      <td>{{ product.category }}</td>
                      <td>{{ product.title }}</td>
                      <td>{{ product.origin_price }}</td>
                      <td>{{ product.price }}</td>
                      <td class="text-center">{{ product.quantity }}</td>
                      <td>
                        <span class="text-success" v-if="product.is_enabled">啟用</span>
                        <span v-else class="text-danger">未啟用</span>
                      </td>
                      <td>
                        <span class="text-success" v-if="product.is_hotSale">啟用</span>
                        <span v-else class="text-danger">未啟用</span>
                      </td>
                      <td>
                        <div class="btn-group text-nowrap">
                          <button
                            type="button"
                            class="btn btn-outline-primary btn-sm"
                            @click="openModal('edit', product)"
                          >
                            編輯
                          </button>
                          <button
                            type="button"
                            class="btn btn-outline-danger btn-sm"
                            @click="openModal('delete', product)"
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
                <ProductPagination :pages="pages" :get-products="getProducts" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  <!-- modal -->
  <ProductDeleteModal
    :tempProduct="tempProduct"
    :deleteModalIsShow="deleteModalIsShow"
    :closeModal="closeModal"
    :getProducts="getProducts"
  />
  <ProductEditModal
    :tempProduct="tempProduct"
    :editModalIsShow="editModalIsShow"
    :isNew="isNew"
    :getProducts="getProducts"
    :closeModal="closeModal"
  />
</template>

<script>
import ProductEditModal from '@/components/admin/ProductEditModal.vue'
import ProductDeleteModal from '@/components/admin/ProductDeleteModal.vue'
import ProductPagination from '@/components/admin/ProductPagination.vue'
import AdminContainerLoading from '@/components/admin/AdminContainerLoading.vue'
import AdminMixin from '@/mixins/AdminMixin.vue'
// sweetalert2
import Swal from 'sweetalert2'

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data() {
    return {
      products: [], // 存放所有產品資料
      tempProduct: {
        //存放用於修改的產品資料
        imageUrl: []
      },
      isNew: false, // 判斷是否為新資料
      container: this.$refs.ProductLoadingContainer // loading 渲染範圍
    }
  },
  components: { ProductEditModal, ProductDeleteModal, ProductPagination, AdminContainerLoading },
  mixins: [AdminMixin],
  methods: {
    // 取得所有產品資料
    getProducts(page = 1) {
      this.isLoading = true
      this.$http
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/products?page=${page}`)
        .then((res) => {
          this.products = res.data.products
          this.pages = res.data.pagination
          this.isLoading = false
        })
        .catch((err) => {
          this.isLoading = false
          Swal.fire({
            title: '資料錯誤',
            text: '無法取得後台資料，請重新確認網路連線並重新登入!',
            icon: 'error',
            confirmButtonText: '確定',
            confirmButtonColor: '#5D7067',
            customClass: {
              popup: 'radius0',
              confirmButton: 'radius0'
            }
          })
        })
    },
    // 開啟 modal
    openModal(status, product) {
      if (status === 'create') {
        //新增產品
        this.isNew = true
        this.editModalIsShow = true
        // 會帶入初始化資料
        this.tempProduct = {
          imagesUrl: []
        }
      } else if (status === 'edit') {
        //編輯產品
        this.isNew = false
        this.editModalIsShow = true
        // 會帶入當前要編輯的資料
        this.tempProduct = { ...product }
      } else if (status === 'delete') {
        //刪除產品
        this.deleteModalIsShow = true
        this.tempProduct = { ...product }
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
    this.getProducts()
  }
}
</script>

<style lang="scss" scoped></style>
