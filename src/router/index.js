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
          component: () => import('../views/fronted/AboutView.vue'),
          meta: { title: 'Fangsis | 關於芳心' }
        },
        {
          path: 'products',
          component: () => import('../views/fronted/ProductsView.vue'),
          meta: { title: 'Fangsis | 全站商品' }
        },
        {
          path: 'product/:id',
          component: () => import('../views/fronted/ProductView.vue'),
          meta: { title: 'Fangsis | 商品資訊' }
        },
        {
          path: 'CartView',
          component: () => import('../views/fronted/CartView.vue'),
          meta: { title: 'Fangsis | 購物車' }
        },
        {
          path: 'CartOrderersInformation',
          component: () => import('../views/fronted/CartOrderersInformation.vue'),
          meta: { title: 'Fangsis | 請填寫訂購人資料' }
        },
        {
          path: 'OrderPay/:id',
          component: () => import('../views/fronted/OrderPayView.vue'),
          meta: { title: 'Fangsis | 進行付款' }
        },
        {
          path: 'CartCompleteOrder/:id',
          component: () => import('../views/fronted/CartCompleteOrder.vue'),
          meta: { title: 'Fangsis | 完成訂單' }
        },
        {
          path: 'OrderSearch',
          component: () => import('../views/fronted/OrderSearch.vue'),
          meta: { title: 'Fangsis | 訂單查詢' }
        },
        {
          path: 'PrivacyPolicy',
          component: () => import('../views/fronted/PrivacyPolicy.vue'),
          meta: { title: 'Fangsis | 隱私權服務條款' }
        },
        {
          path: 'ShoppingGuidelines',
          component: () => import('../views/fronted/ShoppingGuidelines.vue'),
          meta: { title: 'Fangsis | 購物須知' }
        },
        {
          path: 'MemberLogin',
          component: () => import('../views/fronted/MemberLogin.vue'),
          meta: { title: 'Fangsis | 會員登入' }
        },
        {
          path: 'MemberSignUp',
          component: () => import('../views/fronted/MemberSignUp.vue'),
          meta: { title: 'Fangsis | 會員註冊' }
        },
        {
          path: 'WishLists',
          component: () => import('../views/fronted/WishLists.vue'),
          meta: { title: 'Fangsis | 願望清單' }
        },
        {
          path: '/404NotFound',
          name: '404',
          component: () => import('../views/fronted/404NotFound.vue'),
          meta: { title: 'Fangsis | 找不到頁面' }
        },
        {
          path: '/:pathMatch(.*)',
          redirect: '/404NotFound'
        }
      ]
    },
    {
      path: '/admin',
      component: () => import('../views/admin/AdminLogin.vue'),
      meta: { title: 'Fangsis | 後台管理登入' },
      children: [
        {
          path: 'adminProducts',
          component: () => import('../views/admin/AdminProducts.vue'),
          meta: { title: 'Fangsis | 後台管理 - 全部產品' }
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
