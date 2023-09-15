<template>
  <!-- 訂單付款成功 -->
  <div
    v-if="order.length !== 0"
    class="cart-status border border-2 border-secondary px-5 py-10 mt-6 mb-10 d-flex justify-content-center align-items-center flex-column"
  >
    <div class="d-flex flex-column flex-md-row align-items-center align-items-md-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="130"
        height="130"
        fill="currentColor"
        class="bi bi-clipboard-check-fill me-md-4 me-2 mb-5 mb-md-0"
        viewBox="0 0 16 16"
      >
        <path
          d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3Zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3Z"
        />
        <path
          d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1Zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708Z"
        />
      </svg>
      <div
        class="d-flex flex-column justify-content-center align-items-center align-items-md-start"
      >
        <h2
          class="fw-bold fs-3 fs-md-1 mb-4 d-flex flex-column flex-md-row align-self-center align-self-md-start"
        >
          您的訂單已成功付款!
        </h2>
        <div class="d-flex flex-column flex-lg-row">
          <div>
            <p class="fs-6 mb-2">
              訂單編號 : <span> {{ order.id }}</span>
            </p>

            <p class="fs-6 mb-0">
              若要確認訂單資訊，請透過<router-link to="/OrderSearch">「訂單查詢系統」</router-link
              >進行查詢，有任何訂單上的問題歡迎與<a href="mailto:fangsisfragrance@gmail.com"
                >我們聯繫!!</a
              >
            </p>
            <p class="fs-6 mb-0"></p>
          </div>
        </div>
        <div class="ms-0 ms-md-8 mt-5 align-self-center align-self-md-end">
          <router-link class="btn btn-outline-primary me-2" to="/OrderSearch">查詢訂單</router-link>
          <router-link class="btn btn-primary" to="/products">再去逛逛</router-link>
        </div>
      </div>
    </div>
  </div>
  <!-- 訂單付款失敗 -->
  <div
    v-else-if="order === 'error'"
    class="cart-status border border-2 border-secondary px-5 py-10 mt-6 mb-10 d-flex justify-content-center align-items-center flex-column"
  >
    <div class="d-flex flex-column flex-md-row align-items-center align-items-md-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="130"
        height="130"
        fill="currentColor"
        class="bi bi-x-circle-fill me-md-4 me-2 mb-4 mb-md-0"
        viewBox="0 0 16 16"
      >
        <path
          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
        />
      </svg>

      <div
        class="d-flex flex-column justify-content-center align-items-center align-items-md-start"
      >
        <h2 class="fw-bold fs-3 fs-md-1 mb-6 mb-md-4 d-flex flex-column flex-md-row">
          訂單付款失敗!
        </h2>

        <div class="d-flex flex-column">
          <p class="fs-6 mb-0">交易失敗的原因可能如下:</p>
          <ol class="fs-6 mb-3">
            <li>網路連線問題 : 請確認網路環境連線狀態是否穩定。</li>
            <li>付款方式問題 : 目前選擇的付款方式系統發生問題。</li>
          </ol>

          <p class="fs-6 mb-0">
            若非以上原因，請透過 "Fangsis
            芳心"的電子信箱與我們聯繫，我們將盡快協助處理您的問題，謝謝!
          </p>
          <p class="fs-6 mb-4">
            電子信箱: <a href="mailto:fangsisfragrance@gmail.com">fangsisfragrance@gmail.com</a>
          </p>
          <router-link class="btn btn-primary align-self-center align-self-md-end" to="/products"
            >返回商店</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data() {
    return {
      order: {}
    }
  },
  mounted() {
    // 進入付款的動態路由頁面
    const { id } = this.$route.params
    this.$http
      .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/order/${id}`)
      .then((res) => {
        this.order = res.data.order
      })
      .catch((err) => {
        console.log(err)
        this.order = 'error'
      })
  }
}
</script>
