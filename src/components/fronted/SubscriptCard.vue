<template>
  <section
    class="subscript section-bkg"
    style="
      background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1682598842821.png');
    "
  >
    <div class="container text-primary">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <VForm v-slot="{ errors }" @submit="subscription" ref="subscriptionForm">
            <label
              class="form-label fs-3 fw-bold text-center text-md-start mb-55"
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
              />
              <button class="fs-6 btn btn-outline-primary px-5 py-2" type="submit" >訂閱</button>
              <ErrorMessage class="invalid-feedback ms-1" name="email" />
            </div>
          </VForm>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// sweetalert2
import Swal from 'sweetalert2';
// vee-validate
import {
  Field, Form, defineRule, configure, ErrorMessage,
} from 'vee-validate';
import {
  required, email,
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

export default {
  data() {
    return {
    };
  },
  methods: {
    // 訂閱最新活動消息
    subscription() {
      Swal.fire({
        icon: 'success',
        title: '成功訂閱',
        text: '獲得購物 8 折優惠代碼 fangsis888',
        confirmButtonText: '確定',
        confirmButtonColor: '#5D7067',
        customClass: {
          title: 'titleFontStyle',
          popup: 'radius0',
          confirmButton: 'radius0',
        },
      });
      this.$refs.subscriptionForm.resetForm();
    },
  },
  components: {
    VField, VForm, ErrorMessage,
  },
};
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
