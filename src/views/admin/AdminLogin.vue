<template>
  <div
    class="login-bkg py-22"
    style="
      background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1698922687349.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=IrecqnNunJNfvLfGPWqaSMcTQi8SReVh7ORqiuAGkul%2B31%2FdPvn5q1YVqpqbtgwdw4Q05KOtp4ybZ4BJunlGsbd3HpXurxR7cPZm4gUCzcFd66Dn%2Fs9Hqj1qXFYx7oDSsIm%2Bkj6xw8ivr0CCwQIVSEn2NM0f5L9ZYWCXrTnWVbyjkCVhakzwguW1TwLUsAVYbMWYNfKDWGvMq60q8jq3AYX%2BSxcTu4Yl%2BCNt6l0NgUj62Ht8%2BUC%2BKJ6lBC1SpiZwdnUueWVA3MQ%2BjloYwPVl2o1NfjHjlQ9VNTY7gmZumY%2B76D6by9jMhgEV%2FCK3khdKaSX3ShspGxrq%2Bm5cBoFLcg%3D%3D');
    "
  >
    <div class="login-bkg-mask"></div>
    <div class="container z-index-3 mb-1">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="d-flex justify-content-between align-items-end">
            <img
              class="img-fluid z-index-3 d-block d-md-none mb-1"
              src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1688867746757.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Ra3XcsE4BJti%2F9%2BmCHz%2BQdCc1XpTvmUVp%2BozoXtQ%2BiRkQdmVYLBHsvs1%2BwmVpztShcExpGJDctLtC8J29gKYUW9gBgzNejiySTNvSvBotVFJZbgoKtZHml2klBu7jEZom5eVgubwQLeKqeLdtVKLoSG2FF9SMFO8wwODKVYn3AlmttMcCAejB3%2BL3T593Z%2FevryE8yINL1YmBQu5%2BIJYryhJ9uiI%2FCFUASL0eAmFAOMxMDa%2BHOtJFdsw%2Bm8%2Fna1KNPmKFnmot9THm1EqYWrQRgZ%2FJ8PLh1jl01Z4%2BZqywE4FaAnxqhI4nFNBiMMZstGf%2BDvYz7tNlkkYF7aE0GhfqQ%3D%3D"
              alt="英文白色文字的Fangsis的店商網站logo"
              width="175"
              height="109"
            />
            <img
              class="img-fluid z-index-3 d-none d-md-block mb-1"
              src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1688867746757.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Ra3XcsE4BJti%2F9%2BmCHz%2BQdCc1XpTvmUVp%2BozoXtQ%2BiRkQdmVYLBHsvs1%2BwmVpztShcExpGJDctLtC8J29gKYUW9gBgzNejiySTNvSvBotVFJZbgoKtZHml2klBu7jEZom5eVgubwQLeKqeLdtVKLoSG2FF9SMFO8wwODKVYn3AlmttMcCAejB3%2BL3T593Z%2FevryE8yINL1YmBQu5%2BIJYryhJ9uiI%2FCFUASL0eAmFAOMxMDa%2BHOtJFdsw%2Bm8%2Fna1KNPmKFnmot9THm1EqYWrQRgZ%2FJ8PLh1jl01Z4%2BZqywE4FaAnxqhI4nFNBiMMZstGf%2BDvYz7tNlkkYF7aE0GhfqQ%3D%3D"
              alt="英文白色文字的Fangsis的店商網站logo"
              width="350"
              height="219"
            />
            <h2 class="fs-6 fs-md-4 text-light z-index-3 mb-0">後台登入</h2>
          </div>
          <div class="bg-light z-index-3 py-7 py-md-7 py-7 px-3 px-md-7 position-relative rounded">
            <VForm v-slot="{ meta, errors }" @submit="AdminLoginIn">
              <div class="mb-3">
                <label for="AdminLoginAccount" class="form-label">帳號 / Account </label>
                <div class="position-relative">
                  <i class="bi bi-person-fill fs-5 text-secondary position-absolute input-icon"></i>
                  <VField
                    v-model="user.username"
                    class="form-control input-text"
                    :class="{ 'is-invalid': errors.帳號 }"
                    id="AdminLoginAccount"
                    type="text"
                    name="帳號"
                    rules="required"
                    autoComplete="off"
                  />
                  <ErrorMessage class="invalid-feedback ms-1" name="帳號" />
                </div>
              </div>
              <div class="mb-3">
                <label for="AdminLoginPassword" class="form-label fs-6">密碼 / Password </label>
                <div class="position-relative">
                  <i class="bi bi-key-fill fs-5 text-secondary position-absolute input-icon"></i>
                  <VField
                    v-model="user.password"
                    class="form-control input-text"
                    :class="{ 'is-invalid': errors.密碼 }"
                    id="AdminLoginPassword"
                    type="password"
                    name="密碼"
                    rules="required|alpha_num|min:8|max:16|mix_num"
                    autoComplete="off"
                  />
                  <ErrorMessage class="invalid-feedback ms-1" name="密碼" />
                </div>
              </div>
              <div class="mb-4">
                <p class="text-danger fs-6">注意!! 此為後台管理系統登入頁面!!</p>
              </div>

              <div class="row justify-content-end">
                <div class="col-lg-3 col-6">
                  <button type="submit" class="btn btn-primary w-100" :disabled="!meta.valid">
                    登入
                  </button>
                </div>
              </div>
            </VForm>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const { VITE_APP_URL } = import.meta.env
import { defineRule } from 'vee-validate'
//定義驗證規則 : 需要輸入內容以英文與數字混和
defineRule('mix_num', (value) => {
  if (/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(value)) {
    return true
  }
  return '需要以英文與數字混和'
})
// sweetalert2
import Swal from 'sweetalert2'
export default {
  data() {
    return {
      // signin api post 資料格式
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    AdminLoginIn() {
      this.$http
        .post(`${VITE_APP_URL}/v2/admin/signin`, this.user)
        // 成功狀態:
        // 先將儲存在 res.data 的 token 與 expired 解構出來，
        // 寫入 cookie token，
        // expire 設置有效時間 (unix timestamp 格式轉換)
        // 跳轉頁面到後台管理系統
        .then((res) => {
          const { token, expired } = res.data
          document.cookie = `hexPeihanWangToken=${token};expire=${new Date(expired)};path=/`
          Swal.fire({
            title: '後台登入成功!',
            icon: 'success',
            confirmButtonText: '確定',
            confirmButtonColor: '#5D7067',
            customClass: {
              popup: 'radius0',
              confirmButton: 'radius0'
            }
          }).then((result) => {
            if (result.isConfirmed) {
              this.$router.push(`/admin/adminProducts`)
            }
          })
        })
        // 失敗狀態:
        // 失敗將 err.response.data 的錯誤訊息透過彈跳視窗顯示
        .catch((err) => {
          Swal.fire({
            title: '後台登入失敗!',
            text: '請確認輸入的帳號與密碼是否有誤並再次嘗試!',
            icon: 'error',
            confirmButtonText: '關閉',
            confirmButtonColor: '#5D7067',
            customClass: {
              popup: 'radius0',
              confirmButton: 'radius0'
            }
          })
        })
    }
  }
}
</script>

<style lang="scss">
.login-bkg {
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left bottom;
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

.input-icon {
  left: 10px;
  top: 5px;
}
.input-text {
  text-indent: 25px;
}
</style>
