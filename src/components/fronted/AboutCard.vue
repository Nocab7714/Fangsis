<template>
  <section
    class="section-bkg pt-8 pb-15"
    style="
      background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1682598842821.png');
    "
  >
    <div class="container">
      <div data-aos="fade-up">
        <h2 class="fs-2 fw-bold text-primary text-center mb-6" style="font-family: var(--bs-NotoSerif-TC)">
          關於芳心。
        </h2>
      </div>
      <div class="row flex-lg-row flex-column-reverse align-items-center gx-lg-8 gy-3">
        <div class="col-lg-6 p-55">
          <div data-aos="fade-up">
            <h3
              class="text-secondary fs-3 fw-bold mb-3"
              style="font-family: var(--bs-NotoSerif-TC)"
            >
              Fangsis
            </h3>
            <p class="text-secondary fs-4 fw-bold mb-4">
              是阿美族語「馨香之氣」的意思， 那是造物主給予最獨特的記號。
            </p>
            <p class="text-secondary mb-4">
              在花蓮，能看到大自然的美，就好像呼吸一樣理所當然。<br />
              但這份禮物卻一點一滴的從我們眼前流失。<br />
              我們希望連結花蓮在地的小農，用在地的農作物，<br />
              重心出發，恢復大地原本的芳香。
            </p>
            <RouterLink to="/about" class="btn btn-outline-primary w-100 w-lg-35 py-2" href=""
              >查看更多</RouterLink
            >
          </div>
        </div>
        <div class="col-lg-6">
          <div data-aos="fade-up">
            <img
              class="img-fluid d-none d-lg-block"
              src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1682598856516.png"
              alt="用滴管將黃色精油滴在手上的特寫"
              width="636"
              height="368"
              style="background-color: var(--bs-secondary)"
            />
            <div
              class="aboutImg d-block d-lg-none"
              style="
                background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1682598856516.png');
              "
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.aboutImg {
  background-position: center, center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 320px;
}
.section-bkg {
  background-position: top;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
