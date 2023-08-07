<template>
  <div class="py-md-13 py-9 products-header-bkg02">
    <div class="container d-flex flex-column align-items-center">
      <h2 class="fw-bold fs-lg-10 fs-1 mb-3 text-white" style="font-family: var(--bs-NotoSerif-TC)">
        完成訂單
      </h2>
      <div class="fs-6">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-0 text-white text-center">
            <li class="breadcrumb-item">
              <routerLink class="text-decoration-none text-white" to="/">首頁</routerLink>
            </li>
            <li class="breadcrumb-item active" aria-current="page">完成訂單</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  <div class="container mt-7 mb-10">
    <div class="purchase-steps">
      <ul class="row list-unstyled fs-5 text-secondary text-center">
        <li class="col-4 pb-3">購物車</li>
        <li class="col-4 pb-3">訂單明細</li>
        <li class="col-4 pb-3 purchase-active">完成訂單</li>
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
          <h2 class="fw-bold fs-3 fs-md-1 mb-4 d-flex flex-column flex-md-row align-self-start">
            謝謝您! <span class="">您的訂單已經成立!</span>
          </h2>
          <div class="d-flex flex-column flex-lg-row">
            <div>
              <p class="fs-6 mb-0">訂單號碼 : <sapn> 952795279527</sapn></p>
              <p class="fs-6 mb-0">訂單確認電郵已發送到您的電子信箱: <br />c***527@gmail.com</p>
            </div>
            <div class="ms-0 ms-md-8 mt-5 mt-lg-0 align-self-center align-self-md-end">
              <router-link class="btn btn-outline-primary me-2" to="/OrderSearch"
                >查詢訂單</router-link
              >
              <router-link class="btn btn-primary" to="/products">再去逛逛</router-link>
            </div>
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
