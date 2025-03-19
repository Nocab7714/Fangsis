<template>
  <div
    class="login-bkg pt-15 pt-lg-22 pb-20"
    style="
      background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1698922687349.png');
    "
  >
    <div class="login-bkg-mask"></div>
    <div class="container z-index-3 mb-1">
      <MemberLoginForm />
    </div>
  </div>
</template>

<script>
import MemberLoginForm from '@/components/fronted/MemberLoginForm.vue';

export default {
  data() {
    return {};
  },
  components: {
    MemberLoginForm,
  },
};
</script>

<style lang="scss" scoped>
.login-bkg {
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 100vh;
}
.login-bkg-mask {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: $primary;
  opacity: 50%;
  z-index: 2;
}
</style>
