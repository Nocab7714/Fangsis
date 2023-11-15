<template>
  <loading
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
        src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1682598276311.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=qL%2F7begbYX2RvKeejMCXEVhmPIyuNGNfCCMcDFt7bJOkRpxv46JeWb2TcnzDlPj0WB%2BEdEY5kqcd%2FuGxVX0MUcXT6mdARX8Fq51Oyho%2FKl3YIiVxIVVeF7sxsMIAK0oBlZNxrvy7yzcGJLq7uUKcPuDNXzasO4M4qt9bBKXOrDkbf8%2BCMlUoWim4Q9jtjfbIO7IgAgPn5PA1DJzmhv4bfRPco8SgGxGVvG8k9Q2ZSDxnODfwqxYHJE%2Bb6woza2dFQcEzDiBR%2FVhf1%2B8%2BB2%2BWaXD5AJCkLDjLIcTtZZBO5zCfbzg2HQAknzt%2FbXAHPI3xhOJ%2F5WXn5SnRr%2F2Xk7WDhQ%3D%3D"
        width="192"
        height="64"
        alt="芳心白色logo"
      />
      <span class="text-white fs-7 mt-2">Loading ...</span>
    </div>
  </loading>
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
