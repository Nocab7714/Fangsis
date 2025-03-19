<template>
  <Loading
    :active="isLoading"
    :can-cancel="false"
    :lock-scroll="lockScroll"
    :background-color="backgroundColor"
    :opacity="opacity"
    :is-full-page="fullPage"
    class="vl-overlay-full-page"
  >
    <div class="d-flex flex-column align-items-center mx-3">
      <img
        class="img-fluid animate__animated animate__pulse animate__infinite"
        src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1682598276311.png"
        width="192"
        height="64"
        alt="芳心白色logo"
      />
      <span class="text-white fs-7 mt-2">Loading ...</span>
    </div>
  </Loading>
</template>

<script>
// vue-loading
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

export default {
  data() {
    return {
      lockScroll: true,
      fullPage: true,
      backgroundColor: '#5d7067',
      opacity: 1,
    };
  },
  props: ['isLoading'],
  components: {
    Loading,
  },
};
</script>
