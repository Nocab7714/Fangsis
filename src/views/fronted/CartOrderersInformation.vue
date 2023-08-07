<template>
  <div class="py-md-13 py-9 products-header-bkg02">
    <div class="container d-flex flex-column align-items-center">
      <h2 class="fw-bold fs-lg-10 fs-1 mb-3 text-white" style="font-family: var(--bs-NotoSerif-TC)">
        訂單明細
      </h2>
      <div class="fs-6">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-0 text-white text-center">
            <li class="breadcrumb-item">
              <routerLink class="text-decoration-none text-white" to="/">首頁</routerLink>
            </li>
            <li class="breadcrumb-item active" aria-current="page">訂單明細</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  <div class="container mt-5 mt-md-7 mb-10">
    <div class="container purchase-steps">
      <ul class="row list-unstyled fs-6 fs-md-5 text-secondary text-center">
        <li class="col-4 pb-3">購物車</li>
        <li class="col-4 pb-3 purchase-active">訂單明細</li>
        <li class="col-4 pb-3">完成訂單</li>
      </ul>
    </div>
    <div class="row mt-4 gy-3">
      <div class="col-lg-8">
        <div class="border border-2 border-secondary px-5 py-5">
          <div
            class="border border-1 border-secondary border-top-0 border-end-0 border-start-0 w-100 mb-5 d-flex"
          >
            <h2 class="fs-4 fw-bold">訂購人資訊</h2>
          </div>
          <form>
            <div class="mb-4 w-100 w-md-50">
              <label for="PurchaserName" class="form-label">姓名 / Name</label>
              <input
                class="form-control"
                id="PurchaserName"
                type="text"
                placeholder="請輸入您的姓名"
              />
            </div>
            <div class="mb-4">
              <label for="PurchaserPhoneNumber" class="form-label">手機號碼 / Phone Number</label>
              <input
                class="form-control"
                id="PurchaserPhoneNumber"
                type="tel"
                placeholder="請輸入您的手機電話號碼"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              />
            </div>
            <div class="mb-4">
              <label for="PurchaserEmail" class="form-label">電子郵件 / Email Address</label>
              <input
                class="form-control"
                id="PurchaserEmail"
                type="email"
                placeholder="請輸入您的電子郵件地址"
              />
            </div>
            <div class="mb-4">
              <label for="PurchaserAddress" class="form-label"
                >收件地址 / Recipient's Address</label
              >
              <input
                class="form-control"
                id="PurchaserAddress"
                type="text"
                placeholder="請填寫配送位址，在此輸入您方便接受商品配送的地址"
              />
            </div>
            <div class="mb-4">
              <label for="PurchaserOrderRemark" class="form-label">訂單備註 / Order Remark</label>
              <textarea
                class="form-control"
                id="PurchaserOrderRemark"
                name="PurchaserOrderRemark"
                cols="40"
                rows="10"
                maxlength="300"
                placeholder="若您有任何的需要，可以在備註欄位中留下您對訂單的需求"
                style="resize: none"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="border border-2 border-secondary px-5 py-5 d-flex flex-column">
          <div class="mb-6">
            <div
              class="border border-1 border-secondary border-top-0 border-end-0 border-start-0 w-100 mb-3"
            >
              <h2 class="fs-5 fw-bold">您的訂單</h2>
            </div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">商品名稱</th>
                  <th class="text-end" scope="col">數量</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th class="fw-lighter" scope="row">柚子雪松蠟燭禮盒</th>
                  <td class="fw-lighter text-end">1</td>
                </tr>
                <tr>
                  <th class="fw-lighter" scope="row">柚子雪松蠟燭禮盒</th>
                  <td class="fw-lighter text-end">1</td>
                </tr>
                <tr>
                  <th class="fw-lighter" scope="row">柚子雪松蠟燭禮盒</th>
                  <td class="fw-lighter text-end">1</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            class="border border-1 border-secondary border-top-0 border-end-0 border-start-0 w-100 mb-8 d-flex justify-content-between align-items-end"
          >
            <h3 class="fs-6 text-nowra">小計</h3>
            <span class="fw-bold fs-4 fst-italic">NT$ <span>11994</span></span>
          </div>
          <div class="mb-5">
            <div
              class="border border-1 border-secondary border-top-0 border-end-0 border-start-0 w-100 mb-3 d-flex"
            >
              <h3 class="fs-6">運送方式</h3>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                id="DeliveryMethod01"
                type="radio"
                name="DeliveryMethod"
                disabled
              />
              <label class="form-check-label" for="DeliveryMethod01"> 7-11 取貨 ( NT$60 ) </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                id="DeliveryMethod02"
                type="radio"
                name="DeliveryMethod"
                checked
                disabled
              />
              <label class="form-check-label" for="DeliveryMethod02">
                順豐速遞 - 常溫配送 ( NT$100 )
              </label>
            </div>
          </div>
          <div class="mb-8">
            <div
              class="border border-1 border-secondary border-top-0 border-end-0 border-start-0 w-100 mb-3 d-flex"
            >
              <h3 class="fs-6">請選擇付款方式</h3>
            </div>
            <select class="form-select">
              <option selected disabled>請選擇您的付款方式</option>
              <option value="PaymentMethod01">信用卡付款</option>
              <option value="PaymentMethod02">ATM 轉帳或匯款</option>
            </select>
          </div>
          <div
            class="border border-1 border-secondary border-top-0 border-end-0 border-start-0 w-100 mb-3 d-flex justify-content-between align-items-end"
          >
            <h3 class="fs-6 text-nowrap">總計</h3>
            <div class="d-flex flex-column">
              <span class="fw-bold fs-4 fst-italic opacity-25 text-decoration-line-through"
                >NT$ <span>11994</span></span
              >
              <span class="fw-bold fs-4 fst-italic">NT$ <span>9999</span></span>
            </div>
          </div>
          <span class="fs-7 text-end">( 已使用 fangsis888 優惠代碼 - 結帳8折大優惠 )</span>
          <div class="row mt-5 mb-8 gx-2">
            <div class="col-6">
              <router-link class="btn btn-outline-secondary w-100" to="CartView"
                >回上一頁</router-link
              >
            </div>
            <div class="col-6">
              <button class="btn btn-primary w-100" type="submit">送出訂單</button>
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
.products-header-bkg {
  background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1689947167279.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=HPMkP4A3VpRpZxeB2opnsMfTm7zoerIe27Pn6O6qhbyh8EkFs4nBrAkNn0jO11OeYDllGqlk2eC5SxekoC%2B9FHZ%2BFkwnOcz6A0UeiRTSPSfBv6V8pIv0n0YQ2ojXb7pPb1mKlGFRznE%2Fj5dr3f%2B4hlXp8ItFUKJ%2BgBS8%2FyodUAfTkG3gt6jhQhK98vBotZ7mCEWBW4fhxhjCF8RAZoDrBKxvKjyzB5cfzhY8ADvCJrIDS6BtCbTk68tuHpxoZGPt6davwZaQu5pECrO%2FZNLo21SRv352y4ro0Vpqfmb3odzFS6fYiNGegZ1TWIYCn5vSMUUSdlVlZqyZZbUh1x%2BIjA%3D%3D');
  background-position: center center;
  background-size: cover;
}
</style>
