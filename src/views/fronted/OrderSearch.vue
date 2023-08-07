<template>
  <div class="py-md-13 py-9 products-header-bkg02">
    <div class="container d-flex flex-column align-items-center">
      <h2 class="fw-bold fs-lg-10 fs-1 mb-3 text-white" style="font-family: var(--bs-NotoSerif-TC)">
        訂單查詢
      </h2>
      <div class="fs-6">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-0 text-white text-center">
            <li class="breadcrumb-item">
              <routerLink class="text-decoration-none text-white" to="/">首頁</routerLink>
            </li>
            <li class="breadcrumb-item active" aria-current="page">訂單查詢</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  <div class="container my-10">
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <div class="input-group">
          <input class="form-control" type="text" placeholder="請輸入您的訂單編號" />
          <button class="btn btn-primary" type="button">
            <i class="bi bi-search"></i>
          </button>
        </div>
        <!-- 查無此訂單 -->
        <!-- <div
          class="cart-status border border-2 border-secondary px-5 py-10 mt-6 mb-10 d-flex justify-content-center align-items-center flex-column"
        >
          <div>
            <h3 class="fs-1 fw-bold">Sorry ... <br />查無此訂單資料</h3>
            <p class="fs-5">請再次確認輸入的訂單編號正確無誤!</p>
          </div>
        </div> -->
        <!-- 查詢訂單顯示 -->
        <div
          class="cart-status border border-2 border-secondary px-5 py-5 mt-4 mb-10 d-flex justify-content-center flex-column"
        >
          <div class="mb-5">
            <h3 class="fs-3 fw-bold">訂購資料</h3>
            <ul class="list-unstyled fs-6">
              <li>訂單編號 : <span>952795279527</span></li>
              <li>建立日期 : <span>2037/09/29 23:33</span></li>
              <li>訂單狀態 : <span>等待賣家確認</span></li>
              <li>是否付款 : <span class="text-danger">尚未付款</span></li>
              <li>付款方式 : <span>ATM 轉帳</span></li>
            </ul>
          </div>
          <div class="mb-5">
            <h3 class="fs-3 fw-bold">訂購人個人資料</h3>
            <ul class="list-unstyled fs-6">
              <li>客戶姓名 : <span>周*星</span></li>
              <li>聯絡電話 : <span>090*-***527</span></li>
              <li>電子郵件 : <span>c***527@gmail.com </span></li>
              <li>
                收件地址 : <br /><span
                  >9527 台北市華府區誠實豆沙包二路 紅燒翅膀大樓 95 樓 27-1 號</span
                >
              </li>
              <li>
                訂單備註 : <br /><span>可以幫我順便寄一盒紅燒翅膀嗎? 因為紅燒翅膀我喜歡吃!! </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="fs-3 fw-bold">訂購資料</h3>
            <ul class="list-unstyled fs-6">
              <li>柚子雪松蠟燭禮盒 <span>x2</span></li>
              <li>柚子鳶尾花擴香禮盒 <span>x1</span></li>
              <li>檀木擴香 <span>x1</span></li>
            </ul>
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
