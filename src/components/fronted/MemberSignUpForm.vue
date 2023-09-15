<template>
  <div class="row justify-content-center">
    <div class="col-md-8">
      <div class="d-flex justify-content-between align-items-end">
        <img
          class="img-fluid z-index-3 d-block d-md-none mb-1"
          src="https://shorturl.at/egjwJ"
          alt="英文白色文字的Fangsis的店商網站logo"
          width="175"
          height="109"
        />
        <img
          class="img-fluid z-index-3 d-none d-md-block mb-1"
          src="https://shorturl.at/egjwJ"
          alt="英文白色文字的Fangsis的店商網站logo"
          width="350"
          height="219"
        />
        <h2 class="fs-6 fs-md-4 text-light z-index-3 mb-0">會員註冊</h2>
      </div>
      <div class="bg-light z-index-3 py-7 py-md-7 py-7 px-3 px-md-7 position-relative rounded">
        <VForm v-slot="{ meta, errors }" @submit="MemberSignUp">
          <div class="mb-3">
            <label for="MemberSignUpEmail" class="form-label">信箱 / Email </label>
            <div class="position-relative">
              <i class="bi bi-envelope-fill fs-5 text-secondary position-absolute input-icon"></i>
              <VField
                class="form-control input-text"
                :class="{ 'is-invalid': errors.email }"
                id="MemberSignUpEmail"
                type="email"
                name="email"
                rules="required|email"
                placeholder="請輸入您用於註冊會員的電子郵件信箱地址"
                autoComplete="off"
              />
              <ErrorMessage class="invalid-feedback ms-1" name="email" />
            </div>
          </div>
          <div class="mb-3">
            <label for="MemberSignUpAccount" class="form-label">帳號 / Account </label>
            <div class="position-relative">
              <i class="bi bi-person-fill fs-5 text-secondary position-absolute input-icon"></i>
              <VField
                class="form-control input-text"
                :class="{ 'is-invalid': errors.帳號 }"
                id="MemberSignUpAccount"
                name="帳號"
                rules="required|alpha_num|min:8|max:16|mix_num"
                type="text"
                placeholder="請設定8至16位元英文混和數字的會員帳號"
                autoComplete="off"
              />
              <ErrorMessage class="invalid-feedback ms-1" name="帳號" />
            </div>
          </div>
          <div class="mb-3">
            <label for="MemberSignUpPassword" class="form-label">密碼 / Password </label>
            <div class="position-relative">
              <i class="bi bi-key-fill fs-5 text-secondary position-absolute input-icon"></i>
              <VField
                class="form-control input-text"
                :class="{ 'is-invalid': errors.密碼 }"
                id="MemberSignUpPassword"
                name="密碼"
                rules="required|alpha_num|min:8|max:16|mix_num"
                type="password"
                placeholder="請設定8至16位元英文混和數字的會員密碼"
                autoComplete="off"
              />
              <ErrorMessage class="invalid-feedback ms-1" name="密碼" />
            </div>
          </div>
          <div class="mb-6">
            <label for="MemberSignUpPasswordConfirm" class="form-label"
              >確認密碼 / Password Confirm</label
            >
            <div class="position-relative">
              <i class="bi bi-key-fill fs-5 text-secondary position-absolute input-icon"></i>
              <VField
                class="form-control input-text"
                :class="{ 'is-invalid': errors.密碼確認 }"
                id="MemberSignUpPasswordConfirm"
                name="密碼確認"
                rules="required|confirmed:密碼|alpha_num|min:8|max:16|mix_num"
                type="password"
                placeholder="請再次輸入您設定的會員密碼"
                autoComplete="off"
              />
              <ErrorMessage class="invalid-feedback ms-1" name="密碼確認" />
            </div>
          </div>
          <div class="row justify-content-lg-end">
            <div class="col-lg-3">
              <button type="submit" class="btn btn-primary w-100" :disabled="!meta.valid">
                註冊
              </button>
            </div>
          </div>
        </VForm>
      </div>
    </div>
  </div>
</template>
<script>
import { defineRule } from 'vee-validate'

//定義驗證規則 : 二次確認密碼
defineRule('confirmed', (value, [target], ctx) => {
  if (value === ctx.form[target]) {
    return true
  }
  return '兩次密碼輸入不同，請重新確認'
})

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
    return {}
  },
  methods: {
    MemberSignUp() {
      Swal.fire({
        title: '會員註冊成功!',
        icon: 'success',
        confirmButtonText: '確定',
        confirmButtonColor: '#5D7067'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$router.push(`/MemberLogin`)
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.input-icon {
  left: 10px;
  top: 5px;
}
.input-text {
  text-indent: 25px;
}
</style>
