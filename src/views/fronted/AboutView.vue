<template>
  <div class="py-md-13 py-9 products-header-bkg03">
    <div class="container d-flex flex-column align-items-center">
      <h2
        class="fw-bold fs-lg-10 fs-1 mb-3 text-white text-center"
        style="font-family: var(--bs-NotoSerif-TC)"
      >
        關於芳心
      </h2>
      <div class="fs-6">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-0 text-white text-center">
            <li class="breadcrumb-item">
              <routerLink class="text-decoration-none text-white" to="/">首頁</routerLink>
            </li>

            <li class="breadcrumb-item active" aria-current="page">關於芳心</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>

  <div class="container py-13 position-relative z-index-3">
    <div class="bkg-banai-secondary"></div>
    <div class="bkg-smallstepsgreen-secondary"></div>
    <div class="row justify-content-md-center">
      <div class="col-lg-6">
        <p>
          <span class="division">Fangsis</span>
          是由環保用品電商品牌「綠印生活」及花蓮在地深耕多年的優質手作品牌「白娜手作」共同創辦。創辦
          Fangsis
          的初衷，是為了花蓮這片土地。看到農作物受到滯銷，我們一方面覺得十分惋惜，一方面又認為一定可以做點什麼，讓花蓮甚至台灣的農產品之美可以被看到。
        </p>
        <p>
          因此，我們決定用我們最擅長的方式，將滯銷農產品提煉成精油，融入在香氛商品中。我們已經與瑞穗農會達成協議，每年將固定收購文旦柚提煉的精油。未來，除了文旦柚以外，將會有更多的在地農產品被運用在香氛商品中。
        </p>
        <p>
          我們希望秉持著環保愛地球的理念，並以最用心及精細的手作，而我們的使命就是<br /><span
            class="fs-4 fw-blod"
            >"重心出發，恢復大地原本的芳香"</span
          >
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.division {
  font-size: 300%;
  float: left;
  padding-right: 1%;
  font-weight: bold;
  line-height: 60%;
}
.bkg-banai-secondary {
  background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690375495924.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=DozD4VXQB0toB564NLELKSZfCkESXl8Qtjb1hDg0ohfu5PXEx%2F1LtxOLgwhOeRzMXE0kA4F6hCAUMeF%2FYuYCKgSk%2BBPimbh%2BRqFk6g7Xa1TxR3pXVr8TahUdU3d6lI%2FoCHsPSzowU6QXbgg5PH2zaCV8HOcEoSC58WdRoduG8mavLNOa%2BWadwy29InZB0uXv75ovv3uUw2bTOwgGzka0bCKI0buB%2FnakBJZv4gy9sa6oWxZPdI6zS9M986kwKa4tQk7BwhSuQr0jAGB4nGKK%2BR06BcXBd4hImHlrbX%2F%2FCbwwVsqP7X8MPXPPihm%2Fm64nXuvMpcVQJc5zN3VpuYnbSw%3D%3D');
  background-size: auto;
  background-position: center center;
  background-repeat: no-repeat;
  max-width: 100%;
  width: 170px;
  height: 170px;
  position: absolute;
  bottom: 0;
  right: 0;
  opacity: 15%;
}
.bkg-smallstepsgreen-secondary {
  background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690377184765.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=JL2EAyrOQKe4%2Bq2uNc7BgzRuNmovOEbFANacTzVmuPDLYEGmCRu5FLI6WNdmFUAHlJmM1gMaQSYE2B9hv1pNh9bx7pLWwqjLPz2hre7p0dUmDKg5Qw1JFHKTDM71voQDn6VafAsfKZkSD01dZwmhjTDsiXpOt6%2BB2i3GppcVMTCKiQ7D%2FO7tnpQKFjo7EWcb%2FNEkYiJS4MWnwwDcmRb6Gej8mfSF%2BRAiXa2w%2BzrVeiZSBRaNQlIfW%2FY2V2VvUo65OmegL3kHSsBIhnCsc2Ij2BygsIXDFOj4EfDy3Py12d%2BMr2RjVIuIrxo%2BzQbTUk%2BozPV0FR4jzLMCRpEkVO3u0w%3D%3D');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  max-width: 100%;
  width: 300px;
  height: 300px;
  position: absolute;
  top: -50px;
  left: 0;
  opacity: 15%;
}
</style>
