<template>
  <div
    class="signUp-bkg py-19"
    style="
      background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1698922687349.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=IrecqnNunJNfvLfGPWqaSMcTQi8SReVh7ORqiuAGkul%2B31%2FdPvn5q1YVqpqbtgwdw4Q05KOtp4ybZ4BJunlGsbd3HpXurxR7cPZm4gUCzcFd66Dn%2Fs9Hqj1qXFYx7oDSsIm%2Bkj6xw8ivr0CCwQIVSEn2NM0f5L9ZYWCXrTnWVbyjkCVhakzwguW1TwLUsAVYbMWYNfKDWGvMq60q8jq3AYX%2BSxcTu4Yl%2BCNt6l0NgUj62Ht8%2BUC%2BKJ6lBC1SpiZwdnUueWVA3MQ%2BjloYwPVl2o1NfjHjlQ9VNTY7gmZumY%2B76D6by9jMhgEV%2FCK3khdKaSX3ShspGxrq%2Bm5cBoFLcg%3D%3D');
    "
  >
    <div class="signUp-bkg-mask"></div>
    <div class="container z-index-3">
      <MemberSignUpForm />
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
