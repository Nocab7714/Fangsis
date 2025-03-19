<template>
  <div
    class="py-md-13 py-9 background-position-center background-size-corver"
    style="
      background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1689994205093.jpg');
      background-color: var(--bs-primary);
    "
  >
    <div class="container d-flex flex-column align-items-center">
      <h2 class="fw-bold fs-lg-10 fs-1 mb-3 text-white" style="font-family: var(--bs-NotoSerif-TC)">
        購物車
      </h2>
      <div class="fs-6">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-0 text-white text-center">
            <li class="breadcrumb-item">
              <RouterLink class="text-decoration-none text-white" to="/">首頁</RouterLink>
            </li>
            <li class="breadcrumb-item active" aria-current="page">購物車</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  <div class="container mt-5 mt-md-7 mb-10">
    <PurchaseStepper :isActive="PurchaseStepperIsActive" />
    <CartCard />
  </div>
</template>

<script>
import PurchaseStepper from '@/components/fronted/PurchaseStepper.vue';
import CartCard from '@/components/fronted/CartCard.vue';

export default {
  data() {
    return {
      PurchaseStepperIsActive: 'cart', // purchaseSteps active 樣式狀態
    };
  },
  components: {
    PurchaseStepper,
    CartCard,
  },
  mounted() {},
};
</script>
