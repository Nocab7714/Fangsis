<template>
  <div
    class="py-md-13 py-9 background-position-center background-size-corver"
    style="
      background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690032171404.jpg');
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
              <RouterLink class="text-decoration-none text-white" to="/">首頁</RouterLink>
            </li>

            <li class="breadcrumb-item active" aria-current="page">購物流程與常見Q&A</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  <div class="container my-6 mb-12">
    <GuidelinesCard />
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
