<template>
  <div
    class="py-md-13 py-9 background-position-center background-size-corver"
    style="
      background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690032171404.jpg');
      background-color: var(--bs-primary);
    "
  >
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
              <RouterLink class="text-decoration-none text-white" to="/">首頁</RouterLink>
            </li>

            <li class="breadcrumb-item active" aria-current="page">關於芳心</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="position-relative z-index-3 py-10 w-md-75 mx-auto">
      <div class="bkg-banai-secondary"></div>
      <div class="bkg-smallstepsgreen-secondary"></div>
      <div class="row justify-content-md-center">
        <div class="col-lg-6">
          <div class="mx-3" style="color: #5b5c60">
            <h3 class="fs-2 fw-bolder mb-3" style="font-family: var(--bs-NotoSerif-TC)">
              我們的理念
            </h3>
            <p class="mb-7">
              「我們希望秉持著環保愛地球的理念，並以最用心及精細的手作，重心出發，恢復大地原本的芳香。」
            </p>

            <h3 class="fs-2 fw-bolder mb-3" style="font-family: var(--bs-NotoSerif-TC)">
              品牌起源
            </h3>
            <p>
              該品牌由環保用品電商「綠印生活」及花蓮在地深耕多年的優質手作「白娜手作」共同創辦。創辦
              Fangsis
              的初衷，是為了花蓮這片土地。看到農作物受到滯銷，我們一方面覺得十分惋惜，一方面又認為一定可以做點什麼，讓花蓮甚至台灣的農產品之美可以被看到。
            </p>
            <p>
              因此，我們決定用我們最擅長的方式，將滯銷農產品提煉成精油，融入在香氛商品中。我們已經與瑞穗農會達成協議，每年將固定收購文旦柚提煉的精油。未來，除了文旦柚以外，將會有更多的在地農產品被運用在香氛商品中。
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bkg-banai-secondary {
  background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690375495924.png');
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
  background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690377184765.png');
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
