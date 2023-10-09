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
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-2">
                <div class="mb-3">
                  <label for="imageUrl" class="form-label">輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="請輸入圖片連結"
                    v-model="tempProduct.imageUrl"
                  />
                </div>
                <img class="img-fluid" :src="tempProduct.imageUrl" alt="" />
              </div>
              <div>
                <!-- 判斷 tempProduct.imagesUrl 是一個陣列 -->
                <template v-if="Array.isArray(tempProduct.imagesUrl)">
                  <template v-for="(img, key) in tempProduct.imagesUrl" :key="key + 7788">
                    <input type="text" class="form-control" v-model="tempProduct.imagesUrl[key]" />
                    <img :src="tempProduct.imagesUrl[key]" alt="" class="img-fluid" />
                  </template>

                  <!-- 判斷新增、刪除出現的時機 -->
                  <!-- input 有寫資料才能新增 -->
                  <!-- 如果 input 是空的時候可以新增，但是不能刪除 -->
                  <button
                    class="btn btn-outline-primary btn-sm d-block w-100"
                    v-if="
                      !tempProduct.imagesUrl.length ||
                      tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1]
                    "
                    @click="tempProduct.imagesUrl.push('')"
                  >
                    新增圖片
                  </button>
                  <button
                    class="btn btn-outline-danger btn-sm d-block w-100"
                    v-else
                    @click="tempProduct.imagesUrl.pop('')"
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
                  v-model="tempProduct.title"
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
                    v-model="tempProduct.category"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">單位</label>
                  <input
                    id="unit"
                    type="text"
                    class="form-control"
                    placeholder="請輸入單位"
                    v-model="tempProduct.unit"
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
                    v-model.number="tempProduct.origin_price"
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
                    v-model.number="tempProduct.price"
                  />
                </div>
              </div>
              <div class="mb-3 col-md-6">
                <label for="quantity" class="form-label">產品數量</label>
                <input
                  type="number"
                  class="form-control"
                  id="quantity"
                  v-model="tempProduct.quantity"
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
                  v-model="tempProduct.description"
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
                  v-model="tempProduct.content"
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
                    v-model="tempProduct.is_enabled"
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
                      v-model="tempProduct.is_hotSale"
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
            <button type="button" class="btn btn-primary" @click="updateProduct()">確認</button>
          </div>
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
      productEditModal: {}
    }
  },
  props: ['tempProduct', 'editModalIsShow', 'isNew', 'getProducts', 'closeModal'],
  watch: {
    editModalIsShow() {
      // 如果 editModalIsShow 變更狀態值，打開 modal
      if (this.editModalIsShow) {
        this.productEditModal.show()
      }
    }
  },
  methods: {
    //更新與新增產品
    updateProduct() {
      let url = `${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/product`
      // 用 isNew 判斷 API 如何運行
      let method = 'post'
      if (!this.isNew) {
        url = `${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/product/${this.tempProduct.id}`
        method = 'put'
      }
      this.$http[method](url, { data: this.tempProduct })
        .then((res) => {
          this.getProducts() // 新增完產品以後會重新取得
          this.productEditModal.hide() // 關閉 modal
          alert(res.data.message)
        })
        .catch((err) => {
          // 新增產品失敗跳出錯誤訊息提示框
          alert(err.data.message)
        })
    }
  },
  mounted() {
    // bootstrap5 modal 實體化
    this.productEditModal = new bootstrap.Modal(this.$refs.productEditModal)
    //關閉 modal 執行 closeModal() 並傳入參數 'edit' 將 editModalIsShow 改為 false
    this.$refs.productEditModal.addEventListener('hidden.bs.modal', (event) => {
      this.closeModal('edit')
    })
  }
}
</script>
