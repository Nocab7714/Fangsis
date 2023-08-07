<template>
  <div class="container mt-7 mb-10">
    <div class="purchase-steps">
      <ul class="row list-unstyled fs-5 text-secondary text-center">
        <li class="col-4 pb-3 purchase-active">購物車</li>
        <li class="col-4 pb-3">訂單明細</li>
        <li class="col-4 pb-3">完成訂單</li>
      </ul>
    </div>
    <div
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
            建立訂單失敗!
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
  </div>
</template>
<style lang="scss">
.purchase-active {
  color: black;
  font-weight: bold;
  border-bottom: 4px solid $primary;
}
</style>
