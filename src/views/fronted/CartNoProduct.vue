<template>
  <div class="container mt-7 mb-10">
    <div class="purchase-steps">
      <ul class="row list-unstyled fs-5 text-secondary text-center">
        <li class="col-4 purchase-active pb-3">購物車</li>
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
          class="bi bi-cart-plus-fill me-md-4 me-2 mb-3 mb-md-0"
          viewBox="0 0 16 16"
        >
          <path
            d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"
          />
        </svg>
        <div
          class="d-flex flex-column justify-content-center align-items-center align-items-md-start"
        >
          <h2 class="fw-bold fs-10 fs-md-11 mb-1">OOPS!!</h2>
          <p class="fw-bold fs-5 fs-md-3 mb-3">您的購物車裡還沒有任何商品</p>
          <router-link
            class="btn btn-primary btn-lg align-self-center align-self-md-end"
            to="/products"
            >來去逛逛</router-link
          >
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
