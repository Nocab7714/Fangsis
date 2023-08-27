import { defineStore } from 'pinia'
import axios from 'axios'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

const cartAndWishListStore = defineStore('cartAndWishList', {
  state: () => {
    return {
      // wishList state
      wishList: [],
      wishListAddStatus: true,
      // cart state
      carts: [], //購物車資料
      total: 0, // 購物車總金額
      final_total: 0, //購物車總金額 (包含套用優惠卷)
      // delivery and payment method
      delivery: '順豐速遞 - 常溫配送', //運送方法儲存 (預設狀態"順豐速遞 - 常溫配送")
      payment: ''
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
          alert('已經從願望清單移除')
        }
      })
      //如果 wishListAddStatus 狀態為真 (並沒有將重複資料移除)，將產品資料加入願望清單
      if (this.wishListAddStatus === true) {
        this.wishList.push(wishListObj)
        alert('成功加入至願望清單')
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
      this.wishList.forEach((item, index) => {
        if (item.id === product.id) {
          this.wishList.splice(index, 1)
        }
        const localStorageWishList = JSON.stringify(this.wishList)
        localStorage.setItem('localStorageWishList', localStorageWishList)
      })
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
      axios.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`).then((res) => {
        this.carts = res.data.data.carts
        this.total = res.data.data.total
        this.final_total = res.data.data.final_total // 包含套用優惠卷的總金額
      })
    },
    // 將產品加入入購物車
    addToCart(product_id, qty = 1, product = '') {
      // 單項產品頁面判斷，未選擇產品數量會中斷加入購物車
      if (qty === '數量選擇') {
        alert('請選擇商品數量')
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
          if (product !== '') {
            //用於願望清單加入購物車的判斷。如果有傳入 product 資料便會將該項產品從許願清單移除。用於許願清單品項加入購物車後，會在將品項從我的最愛移除
            this.removeWishListProduct(product)
          }
          alert(res.data.message)
        })
        .catch((err) => alert(err.message))
    },
    //刪除購物車"單項"產品資料資料
    removeCartProduct(product_id) {
      axios
        .delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart/${product_id}`)
        .then((res) => {
          this.getCart()
          alert(res.data.message)
        })
        .catch((err) => {
          alert(err.message)
        })
    },
    //刪除購物車"全部"產品資料資料
    removeCartAllProduct() {
      axios
        .delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/carts`)
        .then((res) => {
          this.getCart()
          alert(res.data.message)
        })
        .catch((err) => {
          alert(err.message)
        })
    },
    upDataCartProduct(product_id, qty) {
      const newQty = Number(qty)
      // 商品數量若調整為小於0，將該項產品刪除
      if (newQty < 1) {
        // this.removeCartProduct(product_id)
        alert('產品購買數量不得小於 1')
        location.reload() // 整理頁面刷新 input 的 value
        return
      } else if (newQty > 100) {
        alert('產品購買數量不得超過 100')
        location.reload() // 整理頁面刷新 input 的 value
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
          alert(res.data.message)
        })
        .catch((err) => {
          alert(err.message)
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
          alert('成功使用 fangsis888 優惠代碼 - 結帳8折大優惠')
          this.getCart()
        })
        .catch((err) => {
          alert('您所輸入的折價劵並不存在!')
        })
    },
    //選擇訂單配送方式
    deliveryMethod(method) {
      this.delivery = method
    },
    //選擇訂單付款方式
    paymentMethod(method) {
      this.payment = method
    }
  },
  getters: {
    // wishList
    //防呆，判斷如果 localStorage 有儲存 localStorageWishList 的值才將資料給 this.wishList
    pullLocalStorage() {
      if (localStorage.key('localStorageWishList') !== null) {
        this.wishList = JSON.parse(localStorage.getItem('localStorageWishList'))
      }
    }
  }
})
export default cartAndWishListStore
