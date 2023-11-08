<template>
  <section
    class="subscript section-bkg"
    style="
      background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1682598842821.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=DU8b3nBYU2ER%2BdUWbghrVoA3KGX6KiJFzlKjmgNOTcZxCoxsv2AhJj7sZxIR%2BPIQLfiEq3cUrOIV9Sx0UA2NYMIPOxSla0gpXxR6MT8NRm5M4MazCYhnkplkioNt%2BSSMolimS8wk4SBicKJWyBaqRcrmKLe44PPP4QQQAFw3SLdkuBhOi%2BiKEKA4MnIEnzVxtpwY8bQfjQmCUKlLGS%2B2jhL%2FM2akcsWO0Z%2Bp9ebeA9VPplyNsoqu37H25KL%2FFT%2B9p%2F5jjoifcDzquWx7I6yqzINvnEQqu03UClrv9VHEImNlUPMc6y7%2FwP16d0tAyP6mqoDtMvsFdbPPaRGTeHF09g%3D%3D');
    "
  >
    <div class="container text-primary">
      <VForm v-slot="{ errors }" @submit="subscription">
        <label
          class="form-label fs-3 text-center text-md-start mb-55"
          for="subscript"
          style="font-family: var(--bs-NotoSerif-TC)"
          >訂閱我們，獲取優惠與最新活動消息</label
        >
        <div class="input-group">
          <VField
            class="form-control border-primary"
            :class="{ 'is-invalid': errors.email }"
            id="subscript"
            type="email"
            name="email"
            rules="required|email"
            placeholder="輸入您的信箱，獲得優惠劵與最新活動消息"
            v-model="subscriptEmail"
          />
          <button class="fs-6 btn btn-outline-primary px-5 py-2" type="submit">訂閱</button>
        </div>
      </VForm>
    </div>
  </section>
</template>

<script>
// sweetalert2
import Swal from 'sweetalert2'

export default {
  data() {
    return {
      subscriptEmail: ''
    }
  },
  methods: {
    // 訂閱最新活動消息
    subscription(subscriptEmail) {
      Swal.fire({
        icon: 'success',
        title: '成功訂閱',
        text: '獲得購物 8 折優惠代碼 fangsis888',
        confirmButtonText: '確定',
        confirmButtonColor: '#5D7067'
      })
      this.subscriptEmail = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.section-bkg {
  background-position: top;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.subscript {
  padding: 140px 0;
}
</style>
