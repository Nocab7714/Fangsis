<template>
  <div
    id="productEditModal"
    ref="productEditModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productEditModal"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-primary text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span v-if="isNew === true">新增產品</span>
            <span v-else>編輯產品</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body" v-if="tempProductEdit">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-2">
                <div class="mb-3">
                  <label for="imageUrl" class="form-label">輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="請輸入圖片連結"
                    v-model="tempProductEdit.imageUrl"
                  />
                </div>
                <img class="img-fluid" :src="tempProduct.imageUrl" alt="" />
              </div>
              <div>
                <!-- 判斷 tempProduct.imagesUrl 是一個陣列 -->
                <template v-if="Array.isArray(tempProduct.imagesUrl)">
                  <template v-for="(img, key) in tempProduct.imagesUrl" :key="key + 7788">
                    <input type="text" class="form-control" v-model="tempProductEdit.imagesUrl[key]" />
                    <img :src="tempProduct.imagesUrl[key]" alt="" class="img-fluid" />
                  </template>

                  <!-- 判斷新增、刪除出現的時機 -->
                  <!-- input 有寫資料才能新增 -->
                  <!-- 如果 input 是空的時候可以新增，但是不能刪除 -->
                  <button
                    class="btn btn-outline-primary btn-sm d-block w-100"
                    v-if="
                      !tempProductEdit.imagesUrl.length ||
                      tempProductEdit.imagesUrl[tempProductEdit.imagesUrl.length - 1]
                    "
                    @click="tempProductEdit.imagesUrl.push('')"
                  >
                    新增圖片
                  </button>
                  <button
                    class="btn btn-outline-danger btn-sm d-block w-100"
                    v-else
                    @click="tempProductEdit.imagesUrl.pop('')"
                  >
                    刪除圖片
                  </button>
                </template>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">產品名稱</label>
                <input
                  id="title"
                  type="text"
                  class="form-control"
                  placeholder="請輸入產品名稱"
                  v-model="tempProductEdit.title"
                />
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">產品分類</label>
                  <input
                    id="category"
                    type="text"
                    class="form-control"
                    placeholder="請輸入分類"
                    v-model="tempProductEdit.category"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">單位</label>
                  <input
                    id="unit"
                    type="text"
                    class="form-control"
                    placeholder="請輸入單位"
                    v-model="tempProductEdit.unit"
                  />
                </div>
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">原價</label>
                  <input
                    id="origin_price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入原價"
                    v-model.number="tempProductEdit.origin_price"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">售價</label>
                  <input
                    id="price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入售價"
                    v-model.number="tempProductEdit.price"
                  />
                </div>
              </div>
              <div class="mb-3 col-md-6">
                <label for="quantity" class="form-label">產品數量</label>
                <input
                  type="number"
                  class="form-control"
                  id="quantity"
                  v-model="tempProductEdit.quantity"
                />
              </div>
              <hr />
              <div class="mb-3">
                <label for="description" class="form-label">產品描述</label>
                <textarea
                  id="description"
                  class="form-control"
                  type="text"
                  rows="3"
                  placeholder="請輸入產品描述"
                  v-model="tempProductEdit.description"
                >
                </textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容</label>
                <textarea
                  id="description"
                  class="form-control"
                  type="text"
                  rows="3"
                  placeholder="請輸入說明內容"
                  v-model="tempProductEdit.content"
                >
                </textarea>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    id="productIsEnabled"
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                    v-model="tempProductEdit.is_enabled"
                  />
                  <label class="form-check-label" for="productIsEnabled">是否啟用</label>
                </div>
                <div class="mb-3">
                  <div class="form-check">
                    <input
                      id="is_hotSale"
                      class="form-check-input"
                      type="checkbox"
                      :true-value="1"
                      :false-value="0"
                      v-model="tempProductEdit.is_hotSale"
                    />
                    <label class="form-check-label" for="is_hotSale">是否為熱銷產品</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
              取消
            </button>
            <button type="button" class="btn btn-primary" @click="updateProduct">確認</button>
          </div>
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
      productEditModal: {},
      tempProductEdit: null,
    };
  },
  props: ['tempProduct', 'editModalIsShow', 'isNew', 'getProducts', 'closeModal'],
  watch: {
    editModalIsShow() {
      // 如果 editModalIsShow 變更狀態值，打開 modal
      if (this.editModalIsShow) {
        this.productEditModal.show();
        this.tempProductEdit = JSON.parse(JSON.stringify(this.tempProduct));
      }
    },
  },
  methods: {
    // 更新與新增產品
    updateProduct() {
      let url = `${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/product`;
      let method = 'post';
      if (!this.isNew) {
        url = `${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/product/${this.tempProductEdit.id}`;
        method = 'put';
      }
      this.$http[method](url, { data: this.tempProductEdit })
        .then(() => {
          this.getProducts();
          this.productEditModal.hide();
          if (method === 'post') {
            Toast.fire({
              icon: 'success',
              title: '已成功新增產品',
            });
          } else if (method === 'put') {
            Toast.fire({
              icon: 'success',
              title: '已成功更新產品',
            });
          }
        })
        .catch(() => {
          this.productEditModal.hide();
          Swal.fire({
            title: '更新產品失敗',
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
    this.productEditModal = new bootstrap.Modal(this.$refs.productEditModal);
    this.$refs.productEditModal.addEventListener('hidden.bs.modal', () => {
      this.closeModal('edit');
    });
  },
};
</script>
