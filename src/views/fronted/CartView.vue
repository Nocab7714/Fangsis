<template>
  <div class="py-md-13 py-9 products-header-bkg02">
    <div class="container d-flex flex-column align-items-center">
      <h2 class="fw-bold fs-lg-10 fs-1 mb-3 text-white" style="font-family: var(--bs-NotoSerif-TC)">
        購物車
      </h2>
      <div class="fs-6">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-0 text-white text-center">
            <li class="breadcrumb-item">
              <routerLink class="text-decoration-none text-white" to="/">首頁</routerLink>
            </li>
            <li class="breadcrumb-item active" aria-current="page">購物車</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  <div class="container mt-5 mt-md-7 mb-10">
    <div class="container purchase-steps">
      <ul class="row list-unstyled fs-6 fs-md-5 text-secondary text-center">
        <li class="col-4 pb-3 purchase-active">購物車</li>
        <li class="col-4 pb-3">訂單明細</li>
        <li class="col-4 pb-3">完成訂單</li>
      </ul>
    </div>
    <div class="row mt-4 gy-3">
      <div class="col-lg-8">
        <div class="border border-2 border-secondary px-5 py-5">
          <!-- 電腦版購物車列表 -->
          <div class="d-none d-md-block">
            <table class="table table-striped align-middle mb-6">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">商品名稱</th>
                  <th scope="col">價格</th>
                  <th class="text-center" scope="col">數量</th>
                  <th class="text-center" scope="col">刪除</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">
                    <img
                      class="img-fluid"
                      src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1685409103327.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=OvdXEuQtyceGUcLaad2HkURIB0b6EKyajfTcSbyWEjfdO5RRh4gB7kS%2FaSdpaUzNBaJvX%2Bdz6j1SgoScr%2F9goY9Za6DfLBkfeCyYLEG2sXZwS4C9qbwcmNjWXH1HPXUFXV8sG9Dh9M5kHdF2wyIiiHdzXtKC%2BaIc%2FD9Zo1CvnSj9f96cvSBsVO3HW73lKFZHxM09ZsACxHqLrAythPC1LUIeJ298ygaCw6lGJiRZP824q%2BIAjMeCcxCNO6l5ktoM5YIBGu6WxlIAztZfgD1bhQIpVMT2n3xHQM9W%2Fs7zTEhB8gy6HATI1xj3y0VvWESk8Qcf4UZKq%2F6Kmzy2IND7xw%3D%3D"
                      alt="購物車商品圖片"
                      width="100"
                      height="100"
                    />
                  </td>
                  <td>柚子雪松蠟燭禮盒</td>
                  <td>1999</td>
                  <td class="w-25">
                    <div class="input-group">
                      <button class="btn btn-outline-secondary" type="button">-</button>
                      <input
                        class="form-control text-center border-secondary"
                        type="text"
                        maxlength="99"
                        minlength="1"
                        oninput="value=value.replace(/[^\d]/g,'')"
                      />
                      <button class="btn btn-outline-secondary" type="button">+</button>
                    </div>
                  </td>
                  <th class="text-center">
                    <a href=""><i class="bi bi-trash3-fill fs-5"></i></a>
                  </th>
                </tr>
                <tr>
                  <td scope="row">
                    <img
                      class="img-fluid"
                      src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1685409103327.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=OvdXEuQtyceGUcLaad2HkURIB0b6EKyajfTcSbyWEjfdO5RRh4gB7kS%2FaSdpaUzNBaJvX%2Bdz6j1SgoScr%2F9goY9Za6DfLBkfeCyYLEG2sXZwS4C9qbwcmNjWXH1HPXUFXV8sG9Dh9M5kHdF2wyIiiHdzXtKC%2BaIc%2FD9Zo1CvnSj9f96cvSBsVO3HW73lKFZHxM09ZsACxHqLrAythPC1LUIeJ298ygaCw6lGJiRZP824q%2BIAjMeCcxCNO6l5ktoM5YIBGu6WxlIAztZfgD1bhQIpVMT2n3xHQM9W%2Fs7zTEhB8gy6HATI1xj3y0VvWESk8Qcf4UZKq%2F6Kmzy2IND7xw%3D%3D"
                      alt="購物車商品圖片"
                      width="100"
                      height="100"
                    />
                  </td>
                  <td>柚子雪松蠟燭禮盒</td>
                  <td>1999</td>
                  <td class="w-25">
                    <div class="input-group">
                      <button class="btn btn-outline-secondary" type="button">-</button>
                      <input
                        class="form-control text-center border-secondary"
                        type="text"
                        maxlength="99"
                        minlength="1"
                        oninput="value=value.replace(/[^\d]/g,'')"
                      />
                      <button class="btn btn-outline-secondary" type="button">+</button>
                    </div>
                  </td>
                  <th class="text-center">
                    <a href=""><i class="bi bi-trash3-fill fs-5"></i></a>
                  </th>
                </tr>
                <tr>
                  <td scope="row">
                    <img
                      class="img-fluid"
                      src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1685409103327.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=OvdXEuQtyceGUcLaad2HkURIB0b6EKyajfTcSbyWEjfdO5RRh4gB7kS%2FaSdpaUzNBaJvX%2Bdz6j1SgoScr%2F9goY9Za6DfLBkfeCyYLEG2sXZwS4C9qbwcmNjWXH1HPXUFXV8sG9Dh9M5kHdF2wyIiiHdzXtKC%2BaIc%2FD9Zo1CvnSj9f96cvSBsVO3HW73lKFZHxM09ZsACxHqLrAythPC1LUIeJ298ygaCw6lGJiRZP824q%2BIAjMeCcxCNO6l5ktoM5YIBGu6WxlIAztZfgD1bhQIpVMT2n3xHQM9W%2Fs7zTEhB8gy6HATI1xj3y0VvWESk8Qcf4UZKq%2F6Kmzy2IND7xw%3D%3D"
                      alt="購物車商品圖片"
                      width="100"
                      height="100"
                    />
                  </td>
                  <td>柚子雪松蠟燭禮盒</td>
                  <td>1999</td>
                  <td class="w-25">
                    <div class="input-group">
                      <button class="btn btn-outline-secondary" type="button">-</button>
                      <input
                        class="form-control text-center border-secondary"
                        type="text"
                        maxlength="99"
                        minlength="1"
                        oninput="value=value.replace(/[^\d]/g,'')"
                      />
                      <button class="btn btn-outline-secondary" type="button">+</button>
                    </div>
                  </td>
                  <th class="text-center">
                    <a href=""><i class="bi bi-trash3-fill fs-5"></i></a>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- 行動版購物車列表 -->
          <div class="d-block d-md-none">
            <table class="table table-striped align-middle mb-6">
              <thead>
                <tr>
                  <th scope="col">您所選擇的商品</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <div class="d-flex flex-column align-items-center py-3 px-2">
                      <img
                        class="img-fluid mb-3"
                        src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1685409103327.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=OvdXEuQtyceGUcLaad2HkURIB0b6EKyajfTcSbyWEjfdO5RRh4gB7kS%2FaSdpaUzNBaJvX%2Bdz6j1SgoScr%2F9goY9Za6DfLBkfeCyYLEG2sXZwS4C9qbwcmNjWXH1HPXUFXV8sG9Dh9M5kHdF2wyIiiHdzXtKC%2BaIc%2FD9Zo1CvnSj9f96cvSBsVO3HW73lKFZHxM09ZsACxHqLrAythPC1LUIeJ298ygaCw6lGJiRZP824q%2BIAjMeCcxCNO6l5ktoM5YIBGu6WxlIAztZfgD1bhQIpVMT2n3xHQM9W%2Fs7zTEhB8gy6HATI1xj3y0VvWESk8Qcf4UZKq%2F6Kmzy2IND7xw%3D%3D"
                        alt="手機板購物車內的商品圖片"
                        width="170"
                        height="170"
                      />
                      <span class="fw-normal">柚子雪松蠟燭禮盒</span>
                      <span class="fw-normal mb-3">NT$<span>1999</span></span>
                      <div class="input-group w-auto mb-4">
                        <button class="btn btn-outline-secondary" type="button">-</button>
                        <input
                          class="form-control text-center border-secondary"
                          type="text"
                          maxlength="99"
                          minlength="1"
                          oninput="value=value.replace(/[^\d]/g,'')"
                        />
                        <button class="btn btn-outline-secondary" type="button">+</button>
                      </div>
                      <a href=""><i class="bi bi-trash3-fill fs-4"></i></a>
                    </div>
                  </th>
                </tr>
                <tr>
                  <th scope="row">
                    <div class="d-flex flex-column align-items-center py-3 px-2">
                      <img
                        class="img-fluid mb-3"
                        src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1685409103327.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=OvdXEuQtyceGUcLaad2HkURIB0b6EKyajfTcSbyWEjfdO5RRh4gB7kS%2FaSdpaUzNBaJvX%2Bdz6j1SgoScr%2F9goY9Za6DfLBkfeCyYLEG2sXZwS4C9qbwcmNjWXH1HPXUFXV8sG9Dh9M5kHdF2wyIiiHdzXtKC%2BaIc%2FD9Zo1CvnSj9f96cvSBsVO3HW73lKFZHxM09ZsACxHqLrAythPC1LUIeJ298ygaCw6lGJiRZP824q%2BIAjMeCcxCNO6l5ktoM5YIBGu6WxlIAztZfgD1bhQIpVMT2n3xHQM9W%2Fs7zTEhB8gy6HATI1xj3y0VvWESk8Qcf4UZKq%2F6Kmzy2IND7xw%3D%3D"
                        alt="手機板購物車內的商品圖片"
                        width="170"
                        height="170"
                      />
                      <span class="fw-normal">柚子雪松蠟燭禮盒</span>
                      <span class="fw-normal mb-3">NT$<span>1999</span></span>
                      <div class="input-group w-auto mb-4">
                        <button class="btn btn-outline-secondary" type="button">-</button>
                        <input
                          class="form-control text-center border-secondary"
                          type="text"
                          maxlength="99"
                          minlength="1"
                          oninput="value=value.replace(/[^\d]/g,'')"
                        />
                        <button class="btn btn-outline-secondary" type="button">+</button>
                      </div>
                      <a href=""><i class="bi bi-trash3-fill fs-4"></i></a>
                    </div>
                  </th>
                </tr>
                <tr>
                  <th scope="row">
                    <div class="d-flex flex-column align-items-center py-3 px-2">
                      <img
                        class="img-fluid mb-3"
                        src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1685409103327.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=OvdXEuQtyceGUcLaad2HkURIB0b6EKyajfTcSbyWEjfdO5RRh4gB7kS%2FaSdpaUzNBaJvX%2Bdz6j1SgoScr%2F9goY9Za6DfLBkfeCyYLEG2sXZwS4C9qbwcmNjWXH1HPXUFXV8sG9Dh9M5kHdF2wyIiiHdzXtKC%2BaIc%2FD9Zo1CvnSj9f96cvSBsVO3HW73lKFZHxM09ZsACxHqLrAythPC1LUIeJ298ygaCw6lGJiRZP824q%2BIAjMeCcxCNO6l5ktoM5YIBGu6WxlIAztZfgD1bhQIpVMT2n3xHQM9W%2Fs7zTEhB8gy6HATI1xj3y0VvWESk8Qcf4UZKq%2F6Kmzy2IND7xw%3D%3D"
                        alt="手機板購物車內的商品圖片"
                        width="170"
                        height="170"
                      />
                      <span class="fw-normal">柚子雪松蠟燭禮盒</span>
                      <span class="fw-normal mb-3">NT$<span>1999</span></span>
                      <div class="input-group w-auto mb-4">
                        <button class="btn btn-outline-secondary" type="button">-</button>
                        <input
                          class="form-control text-center border-secondary"
                          type="text"
                          maxlength="99"
                          minlength="1"
                          oninput="value=value.replace(/[^\d]/g,'')"
                        />
                        <button class="btn btn-outline-secondary" type="button">+</button>
                      </div>
                      <a href=""><i class="bi bi-trash3-fill fs-4"></i></a>
                    </div>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <div
              class="border border-1 border-secondary border-top-0 border-end-0 border-start-0 mb-3"
            ></div>
            <router-link class="btn btn-outline-secondary" to="/products"
              ><i class="bi bi-arrow-left me-2"></i>繼續選購</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="border border-2 border-secondary px-5 py-5 d-flex flex-column">
          <div
            class="border border-1 border-secondary border-top-0 border-end-0 border-start-0 w-100 mb-6"
          >
            <h2 class="fs-5 fw-bold">購物車總計</h2>
          </div>
          <div
            class="border border-1 border-secondary border-top-0 border-end-0 border-start-0 w-100 mb-6 d-flex justify-content-between align-items-end"
          >
            <h3 class="fs-6 text-nowra">小計</h3>
            <span class="fw-bold fs-4 fst-italic">NT$ <span>11994</span></span>
          </div>
          <div class="mb-8">
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
              />
              <label class="form-check-label" for="DeliveryMethod02">
                順豐速遞 - 常溫配送 ( NT$100 )
              </label>
            </div>
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
          <router-link
            class="btn btn-primary w-100 w-lg-50 ms-auto mb-8"
            to="/CartOrderersInformation"
            >前往結帳</router-link
          >

          <div class="mb-8">
            <div
              class="border border-1 border-secondary border-top-0 border-end-0 border-start-0 w-100 mb-3 d-flex"
            >
              <h3 class="fs-6">折價卷</h3>
            </div>
            <input class="form-control mb-2" type="text" placeholder="請輸入優惠卷代碼" />
            <button class="btn btn-primary w-100">使用折價卷</button>
            <span class="fs-7">( 已使用 fanfsis888 優惠代碼 - 結帳8折大優惠 )</span>
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

<!-- 備註 -->
<!-- 商品圖片大小尚未正確設定 -->
