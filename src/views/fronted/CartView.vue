<template>
  <div
    class="py-md-13 py-9 background-position-center background-size-corver"
    style="
      background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1689994205093.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=RLJFHdzxV1ZFvcHobhOCdJFG71iTXspxuTuLv3LAuadLgMdzvO3ebfDIxgaswSy6G8SbPxVDbqyApt2wU2it78WeORuUUxdwMwTXV4qzswD20QiHhMvd3AZgGH6OcmLl%2BSP1YQilwzCQZlKgSckbe6LYnCKT2E7vj3iO9qTAsfoXM3FYNRfGl4p3Z11%2BRPSu5PDI5Wjg%2BSnmgeYzn3LLZfqyWN%2BHKVesfnxsDx4s6CkU%2ByX97aX4%2FIZiE89I6SwCw4DvMsNctfvaurRt6YyJKQ3NAB%2BBkmC1pBr0ARDd8C%2BWkxQXNVbaVkvu9PdgirS2CneyZtgonvceaSs5mSNnZA%3D%3D');
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
              <routerLink class="text-decoration-none text-white" to="/">首頁</routerLink>
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
import PurchaseStepper from '@/components/fronted/PurchaseStepper.vue'
import CartCard from '@/components/fronted/CartCard.vue'

export default {
  data() {
    return {
      PurchaseStepperIsActive: 'cart' // purchaseSteps active 樣式狀態
    }
  },
  components: {
    PurchaseStepper,
    CartCard
  },
  mounted() {}
}
</script>
