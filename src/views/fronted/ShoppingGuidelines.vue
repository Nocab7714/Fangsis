<template>
  <div
    class="py-md-13 py-9 background-position-center background-size-corver"
    style="
      background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690032171404.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=RvNdh2ZWGYVGrunm2%2BmV7OYg0Fi6Jyhi7iqINvhu6VEBrRzaEOhzfqFGTKpozLvxwM8LnGKFxBRr90vYvOILlHsBuALE4oV3bseVqyAzrcH5cdWk%2F556NfXJRnBwOsbxfA%2Fq5Axd5q20EKgGvac1yiw6FzQsnAoBeDYzWdE1N%2BAHhBnXZGm4fXyAOIhuC7PK1nAw%2F5%2FN3ImowPU0jzDj307xtmvfoZLPB1DOIR1DhvCM41RVZmuLnjqzMksc3Ol6WsIoHhtxMTvDl6rlwGn5zbIF677kF1mODSd74FL%2FEmLufMGibEcd9krsXTG2x6RT6f84iR5Kq0pWNL5bLFrdCA%3D%3D');
      background-color: var(--bs-primary);
    "
  >
    <div class="container d-flex flex-column align-items-center">
      <h2
        class="fw-bold fs-lg-10 fs-1 mb-3 text-white text-center"
        style="font-family: var(--bs-NotoSerif-TC)"
      >
        購物流程與常見Q&A
      </h2>
      <div class="fs-6">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-0 text-white text-center">
            <li class="breadcrumb-item">
              <routerLink class="text-decoration-none text-white" to="/">首頁</routerLink>
            </li>

            <li class="breadcrumb-item active" aria-current="page">購物流程與常見Q&A</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  <div class="container my-6 mb-12">
    <guidelines-card />
  </div>
</template>

<script>
import GuidelinesCard from '@/components/fronted/GuidelinesCard.vue';

export default {
  data() {
    return {};
  },
  components: { GuidelinesCard },
};
</script>
