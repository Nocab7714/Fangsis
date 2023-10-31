<template>
  <div
    class="signUp-bkg py-19"
    style="
      background-image: url('https://images.unsplash.com/photo-1617351167197-1a8715231753?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');
    "
  >
    <div class="signUp-bkg-mask"></div>
    <div class="container z-index-3">
      <MemberSignUpForm></MemberSignUpForm>
    </div>
  </div>
</template>

<script>
import MemberSignUpForm from '@/components/fronted/MemberSignUpForm.vue'
export default {
  data() {
    return {}
  },
  components: {
    MemberSignUpForm
  }
}
</script>

<style lang="scss" scoped>
.signUp-bkg {
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left bottom;
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
