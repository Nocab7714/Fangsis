<template>
  <div
    class="login-bkg py-22"
    style="
      background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1698922687349.png');
    "
  >
    <div class="login-bkg-mask"></div>
    <div class="container z-index-3 mb-1">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="d-flex justify-content-between align-items-end">
            <img
              class="img-fluid z-index-3 d-block d-md-none mb-1"
              src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1688867746757.png"
              alt="英文白色文字的Fangsis的店商網站logo"
              width="175"
              height="109"
            />
            <img
              class="img-fluid z-index-3 d-none d-md-block mb-1"
              src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1688867746757.png"
              alt="英文白色文字的Fangsis的店商網站logo"
              width="350"
              height="219"
            />
            <h2 class="fs-6 fs-md-4 text-light z-index-3 mb-0">後台登入</h2>
          </div>
          <div class="bg-light z-index-3 py-7 py-md-7 py-7 px-3 px-md-7 position-relative">
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
                    rules="required|min:8|max:16|mix_num"
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
// sweetalert2
import Swal from 'sweetalert2';

// vee-validate
import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import {
  required, email, min, max,
} from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
setLocale('zh_TW'); // 設定預設語系

const VField = Field;
const VForm = Form;

// vee-validate rule
defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
defineRule('max', max);
defineRule('mix_num', (value) => {
  if (/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(value)) {
    return true;
  }
  return '需要以英文與數字混和';
});

const { VITE_APP_URL } = import.meta.env;

export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    AdminLoginIn() {
      this.$http
        .post(`${VITE_APP_URL}/v2/admin/signin`, this.user)
        .then((res) => {
          const { token, expired } = res.data;
          document.cookie = `hexPeihanWangToken=${token};expire=${new Date(expired)};path=/`;
          Swal.fire({
            title: '後台登入成功!',
            icon: 'success',
            confirmButtonText: '確定',
            confirmButtonColor: '#5D7067',
            customClass: {
              title: 'titleFontStyle',
              popup: 'radius0',
              confirmButton: 'radius0',
            },
          }).then((result) => {
            if (result.isConfirmed) {
              this.$router.push('/admin/adminProducts');
            }
          });
        })
        .catch(() => {
          Swal.fire({
            title: '後台登入失敗!',
            text: '請確認輸入的帳號與密碼是否有誤並再次嘗試!',
            icon: 'error',
            confirmButtonText: '關閉',
            confirmButtonColor: '#5D7067',
            customClass: {
              title: 'titleFontStyle',
              popup: 'radius0',
              confirmButton: 'radius0',
            },
          });
        });
    },
  },
  components: {
    VField, VForm, ErrorMessage,
  },
};
</script>

<style lang="scss">
.login-bkg {
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left bottom;
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

.input-icon {
  left: 10px;
  top: 5px;
}
.input-text {
  text-indent: 25px;
}
</style>
