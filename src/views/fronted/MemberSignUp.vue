<template>
  <div
    class="signUp-bkg pt-13 pt-lg-17 pb-20"
    style="
      background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1698922687349.png');
    "
  >
    <div class="signUp-bkg-mask"></div>
    <div class="container z-index-3">
      <MemberSignUpForm />
    </div>
  </div>
</template>

<script>
import MemberSignUpForm from '@/components/fronted/MemberSignUpForm.vue';

export default {
  data() {
    return {};
  },
  components: {
    MemberSignUpForm,
  },
};
</script>

<style lang="scss" scoped>
.signUp-bkg {
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left bottom;
  height: 100vh;
}
.signUp-bkg-mask {
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
