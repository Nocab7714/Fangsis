import { defineStore } from 'pinia'
import axios from 'axios'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
// sweetalert2
import Swal from 'sweetalert2'
import Toast from '@/utils/Toast'

const cartAndWishListStore = defineStore('cartAndWishList', {
  state: () => {
    return {
      // wishList state
      wishList: [],
      wishListAddStatus: true,
      // cart state
      carts: [], //購物車資料
      total: 0, // 購物車總金額
      final_total: 0, //購物車總金額 (套用優惠卷金額)
      // 付款方式與配送方式
      delivery: '順豐速遞 - 常溫配送', //運送方法儲存 (預設狀態"順豐速遞 - 常溫配送")
      payment: '',
      couponCodeMessage: '',
      // loading 狀態管理
      isLoading: false,
      cartOffcanvasIsLoading: false,
      spinnerLoading: ''
    }
  },
  actions: {
    // wishList
    //加入願望清單
    addWishList(product) {
      const wishListObj = {
        title: product.title,
        id: product.id,
        price: product.price,
        imageUrl: product.imageUrl,
        quantity: product.quantity,
        is_enabled: product.is_enabled
      }

      this.wishList.forEach((item, index) => {
        if (item.id === wishListObj.id) {
          // 加入 WishList 的資料若重複，便從願望清單中移除
          this.wishList.splice(index, 1)
          this.wishListAddStatus = false
          Toast.fire({
            icon: 'success',
            title: '成功將產品從願望清單移除'
          })
        }
      })
      //如果 wishListAddStatus 狀態為 true (並沒有將重複資料移除)，將產品資料加入願望清單
      if (this.wishListAddStatus === true) {
        this.wishList.push(wishListObj)
        Toast.fire({
          icon: 'success',
          title: '成功將產品加入願望清單'
        })
      }
      // 回復 wishListAddStatus 初始狀態
      this.wishListAddStatus = true

      //將願望清單資料存在 local Storage
      const localStorageWishList = JSON.stringify(this.wishList)
      localStorage.setItem('localStorageWishList', localStorageWishList)
    },
    //防呆，判斷如果 localStorage 有儲存 localStorageWishList 的值才將資料給 this.wishList
    pullLocalStorageToWishList() {
      if (localStorage.key('localStorageWishList') !== null) {
        this.wishList = JSON.parse(localStorage.getItem('localStorageWishList'))
      }
    },
    //移除願望清單品項
    removeWishListProduct(product) {
      this.isLoading = true // 取得產品資料前顯示 loading 效果
      Swal.fire({
        text: '你確定要將商品從願望清單刪除嗎?',
        icon: 'question',
        iconColor: '#5D7067',
        showCancelButton: true,
        confirmButtonText: '確定',
        confirmButtonColor: '#5D7067',
        cancelButtonText: '取消',
        cancelButtonColor: '#DC3545',
        customClass: {
          popup: 'radius0',
          confirmButton: 'radius0',
          cancelButton: 'radius0'
        }
      }).then((result) => {
        if (result.isConfirmed) {
          this.wishList.forEach((item, index) => {
            if (item.id === product.id) {
              this.wishList.splice(index, 1)
            }
            const localStorageWishList = JSON.stringify(this.wishList)
            localStorage.setItem('localStorageWishList', localStorageWishList)
          })
          Toast.fire({
            icon: 'success',
            title: '成功將產品從願望清單移除'
          })
          this.isLoading = false // 取得產品資料後關閉 loading 效果
        }
      })
      this.isLoading = false // 取得產品資料後關閉 loading 效果
    },
    //願望清單按鈕 active 狀態切換
    wishListActive(product) {
      let isActive = false // 狀態初始值
      this.wishList.forEach((item) => {
        //判斷願望清單中的品項 id 與傳入的產品 id 相同，則改變 isActive 狀態數值
        if (product.id === item.id) {
          isActive = true
        }
      })
      return isActive // 回傳是否套用 active 的 class 樣式
    },
    // cart
    // 取得購物車資料
    getCart() {
      this.isLoading = true // 取得資料前顯示 loading 效果
      axios
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`)
        .then((res) => {
          this.carts = res.data.data.carts
          this.total = res.data.data.total
          this.final_total = res.data.data.final_total // 包含套用優惠卷的總金額
          this.isLoading = false // 取得資料後關閉 loading 效果
        })
        .catch((err) => {
          Swal.fire({
            title: '連線失敗',
            text: '無法取得購物車資料，請重新確認網路連線並再次嘗試!',
            icon: 'error',
            confirmButtonText: '關閉',
            confirmButtonColor: '#5D7067',
            customClass: {
              popup: 'radius0',
              confirmButton: 'radius0'
            }
          })
          this.isLoading = false // 取得資料後關閉 loading 效果
        })
    },
    // 將產品加入入購物車
    addToCart(product_id, qty = 1, product = '') {
      // 單項產品頁面判斷，未選擇產品數量會中斷加入購物車
      this.isLoading = true // 取得產品資料前顯示 loading 效果
      this.spinnerLoading = product_id // 開啟相對應的按鈕 loading 效果
      if (qty === '數量選擇') {
        Swal.fire({
          icon: 'error',
          title: '產品數量未選擇',
          text: '請先選擇產品數量!',
          confirmButtonColor: '#5D7067',
          confirmButtonText: '關閉',
          customClass: {
            popup: 'radius0',
            confirmButton: 'radius0'
          }
        })
        this.spinnerLoading = '' // 關閉相對應的按鈕 loading 效果
        return
      }
      // 避免傳入的商品數量值為 String
      const newQty = Number(qty)
      // 當沒有傳入參數時，會使用預設值
      const data = {
        product_id,
        qty: newQty
      }
      axios
        .post(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`, { data })
        .then((res) => {
          this.getCart() // 加入購物車後，重新整理購物車資料
          Toast.fire({
            icon: 'success',
            title: '成功將產品加入購物車'
          })
          this.isLoading = false // 取得產品資料後關閉 loading 效果
          this.spinnerLoading = '' // 關閉相對應的按鈕 loading 效果
        })
        .catch((err) => {
          Swal.fire({
            title: '連線失敗',
            text: '無法將產品加入購物車清單，請重新確認網路連線並再次嘗試!',
            icon: 'error',
            confirmButtonText: '關閉',
            confirmButtonColor: '#5D7067',
            customClass: {
              popup: 'radius0',
              confirmButton: 'radius0'
            }
          })
          this.isLoading = false // 取得產品資料後關閉 loading 效果
          this.spinnerLoading = '' // 關閉相對應的按鈕 loading 效果
        })
    },
    //刪除購物車"單項"產品資料資料
    removeCartProduct(product_id) {
      this.cartOffcanvasIsLoading = true // 取得資料前顯示 loading 效果
      Swal.fire({
        text: '你確定要將該項產品從購物車刪除嗎?',
        icon: 'question',
        iconColor: '#5D7067',
        showCancelButton: true,
        confirmButtonText: '確定',
        confirmButtonColor: '#5D7067',
        cancelButtonText: '取消',
        cancelButtonColor: '#DC3545',
        customClass: {
          popup: 'radius0',
          confirmButton: 'radius0',
          cancelButton: 'radius0'
        }
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart/${product_id}`)
            .then((res) => {
              this.getCart()
              Toast.fire({
                icon: 'success',
                title: '成功將產品從購物車移除'
              })
              this.cartOffcanvasIsLoading = false // 取得產品資料後關閉 loading 效果
            })
            .catch((err) => {
              Swal.fire({
                title: '連線失敗',
                text: '無法正確刪除產品資料，請重新確認網路連線並再次嘗試!',
                icon: 'error',
                confirmButtonText: '關閉',
                confirmButtonColor: '#5D7067',
                customClass: {
                  popup: 'radius0',
                  confirmButton: 'radius0'
                }
              })
              this.cartOffcanvasIsLoading = false // 取得產品資料後關閉 loading 效果
            })
        }
        this.cartOffcanvasIsLoading = false
      })
    },
    //刪除購物車"全部"產品資料資料
    removeCartAllProduct() {
      Swal.fire({
        title: '清空購物車',
        text: '您確定要空購物車內的所有產品嗎?',
        icon: 'question',
        iconColor: '#5D7067',
        showCancelButton: true,
        confirmButtonText: '確定',
        confirmButtonColor: '#5D7067',
        cancelButtonText: '取消',
        cancelButtonColor: '#DC3545',
        customClass: {
          popup: 'radius0',
          confirmButton: 'radius0',
          cancelButton: 'radius0'
        }
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/carts`)
            .then((res) => {
              this.getCart()
              Toast.fire({
                icon: 'success',
                title: '已清空您的購物車'
              })
            })
            .catch((err) => {
              Swal.fire({
                title: '連線失敗',
                text: '無法清空購物車資料，請重新確認網路連線並再次嘗試!',
                icon: 'error',
                confirmButtonText: '關閉',
                confirmButtonColor: '#5D7067',
                customClass: {
                  popup: 'radius0',
                  confirmButton: 'radius0'
                }
              })
            })
        }
      })
    },
    // 更新單項產品數量
    upDataCartProduct(product_id, qty) {
      const newQty = Number(qty)
      // 商品數量若調整為小於0，將該項產品刪除
      if (newQty < 1) {
        Swal.fire({
          title: '更新失敗',
          text: '產品數量不得少於 1 ',
          icon: 'error',
          confirmButtonText: '確定',
          confirmButtonColor: '#5D7067',
          customClass: {
            popup: 'radius0',
            confirmButton: 'radius0'
          }
        }).then((result) => {
          if (result.isConfirmed) {
            location.reload() // 整理頁面刷新 input 的 value
          }
        })
        return
      }
      const data = {
        product_id,
        qty: newQty
      }
      axios
        .put(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart/${product_id}`, { data })
        .then((res) => {
          this.getCart()
          Toast.fire({
            icon: 'success',
            title: '已成功更新產品數量'
          })
        })
        .catch((err) => {
          Swal.fire({
            title: '連線失敗',
            text: '無法更新購物車資料，請重新確認網路連線並再次嘗試!',
            icon: 'error',
            confirmButtonText: '關閉',
            confirmButtonColor: '#5D7067',
            customClass: {
              popup: 'radius0',
              confirmButton: 'radius0'
            }
          })
        })
    },
    // coupon and order
    //客戶使用優惠劵
    UseCoupon(code) {
      // 輸入資料為空值不進行任何動作
      if (code === '') {
        return
      }
      const codeTrim = code.trim()
      const data = {
        code: codeTrim
      }
      axios
        .post(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/coupon`, { data })
        .then((res) => {
          Swal.fire({
            title: '成功使用優惠劵',
            text: res.data.message,
            icon: 'success',
            confirmButtonText: '確定',
            confirmButtonColor: '#5D7067',
            customClass: {
              popup: 'radius0',
              confirmButton: 'radius0'
            }
          })
          this.couponCodeMessage = `( ${res.data.message} )`
          // 將信息成功使用優惠卷的信息儲存於 localStorage，避免再畫面重新整理後，位於 CartCard.vue 使用優惠卷的按紐下方
          const localStorageCouponCodeMessage = JSON.stringify(this.couponCodeMessage)
          localStorage.setItem('localStorageCouponCodeMessage', localStorageCouponCodeMessage)
          this.getCart()
        })
        .catch((err) => {
          Swal.fire({
            title: '資料錯誤',
            text: '你所輸入的優惠券並不存在或是已經過期!',
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
    //order
    //選擇訂單配送方式
    deliveryMethod(method) {
      this.delivery = method
    },
    //選擇訂單付款方式
    paymentMethod(method) {
      this.payment = method
    },
    // 回復付款的預設狀態為 "請選擇您的付款方式"
    paymentReset() {
      this.payment = ''
    }
  },
  getters: {
    // wishList
    //防呆，判斷如果 localStorage 有儲存 localStorageWishList 的值才將資料給 this.wishList
    pullLocalStorage() {
      if (localStorage.key('localStorageWishList') !== null) {
        this.wishList = JSON.parse(localStorage.getItem('localStorageWishList'))
      }
    },
    // Cart
    //防呆，判斷如果 localStorage 有儲存 localStorageCouponCodeMessage 的值才將資料給 this.couponCodeMessage
    pullLocalStorageGetCouponCodeMessage() {
      if (localStorage.key('localStorageCouponCodeMessage') !== null) {
        this.couponCodeMessage = JSON.parse(localStorage.getItem('localStorageCouponCodeMessage'))
      }
    }
  }
})

export default cartAndWishListStore
