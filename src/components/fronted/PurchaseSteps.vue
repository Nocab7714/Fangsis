<template>
  <div class="purchase-steps">
    <ul class="row list-unstyled fs-6 fs-md-5 text-secondary text-center">
      <li class="col-4 pb-3" :class="{ 'purchase-active': isActive === 'cart' }">購物車</li>
      <li class="col-4 pb-3" :class="{ 'purchase-active': isActive === 'details' }">訂單明細</li>
      <li class="col-4 pb-3" :class="{ 'purchase-active': isActive === 'complete' }">完成訂單</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: ['isActive']
}
</script>

<style lang="scss" scoped>
.purchase-active {
  color: black;
  font-weight: bold;
  border-bottom: 4px solid $primary;
}
</style>
