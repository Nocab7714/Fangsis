import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      component: () => import('../views/fronted/LayoutView.vue'),

      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/fronted/HomeView.vue'),
          meta: { title: 'Fangsis | 首頁' }
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/fronted/AboutView.vue'),
          meta: { title: 'Fangsis | 關於芳心' }
        },
        {
          path: 'products',
          name: 'products',
          component: () => import('../views/fronted/ProductsView.vue'),
          meta: { title: 'Fangsis | 全站商品' }
        },
        {
          path: 'product/:id',
          name: 'product', 
          component: () => import('../views/fronted/ProductView.vue'),
          meta: { title: 'Fangsis | 商品資訊' }
        },
        {
          path: 'CartView',
          name: 'CartView',
          component: () => import('../views/fronted/CartView.vue'),
          meta: { title: 'Fangsis | 購物車' }
        },
        {
          path: 'CartOrderersInformation',
          name: 'CartOrderersInformation',
          component: () => import('../views/fronted/CartOrderersInformation.vue'),
          meta: { title: 'Fangsis | 請填寫訂購人資料' }
        },
        {
          path: 'CartNoProduct',
          name: 'CartNoProduct',
          component: () => import('../views/fronted/CartNoProduct.vue'),
          meta: { title: 'Fangsis | 購物車尚未有商品' }
        },
        {
          path: 'CartCompleteOrder',
          name: 'CartCompleteOrder',
          component: () => import('../views/fronted/CartCompleteOrder.vue'),
          meta: { title: 'Fangsis | 訂單建立成功' }
        },
        {
          name: 'CartFailedOrder',
          path: 'CartFailedOrder',
          component: () => import('../views/fronted/CartFailedOrder.vue'),
          meta: { title: 'Fangsis | 訂單建立失敗' }
        },
        {
          name: 'OrderSearch',
          path: 'OrderSearch',
          component: () => import('../views/fronted/OrderSearch.vue'),
          meta: { title: 'Fangsis | 訂單查尋' }
        },
        {
          name: 'PrivacyPolicy',
          path: 'PrivacyPolicy',
          component: () => import('../views/fronted/PrivacyPolicy.vue'),
          meta: { title: 'Fangsis | 隱私權服務條款' }
        },
        {
          name: 'ShoppingGuidelines',
          path: 'ShoppingGuidelines',
          component: () => import('../views/fronted/ShoppingGuidelines.vue'),
          meta: { title: 'Fangsis | 購物須知' }
        },
        {
          name: 'MemberLogin',
          path: 'MemberLogin',
          component: () => import('../views/fronted/MemberLogin.vue'),
          meta: { title: 'Fangsis | 會員登入' }
        },
        {
          name: 'MemberSignUp',
          path: 'MemberSignUp',
          component: () => import('../views/fronted/MemberSignUp.vue'),
          meta: { title: 'Fangsis | 會員註冊' }
        },
        // 切版佔放位置
        {
          name: 'AdminLogin',
          path: 'AdminLogin',
          component: () => import('../views/fronted/AdminLogin.vue'),
          meta: { title: 'Fangsis | 後台管理登入' }
        },
        {
          name: 'OrderSearch',
          path: 'OrderSearch',
          component: () => import('../views/fronted/OrderSearch.vue'),
          meta: { title: 'Fangsis | 訂單查詢' }
        },
        {
          name: 'WishLists',
          path: 'WishLists',
          component: () => import('../views/fronted/WishLists.vue'),
          meta: { title: 'Fangsis | 願望清單' }
        }
      ]
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // 將頁面滾動到頂部
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else {
      return {
        // 將頁面滾動到頂部
        top: 0,
        behavior: 'smooth'
      }
    }
  }
})
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  next()
})
export default router
