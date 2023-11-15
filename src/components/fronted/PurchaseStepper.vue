<template>
  <div>
    <ol class="stepper d-flex p-0 w-100">
      <li class="stepper-item-cart" :class="{ 'stepper-item-isDone': isActive === 'cart' }">
        <h3 class="stepper-title">購物車</h3>
        <p class="stepper-desc d-none d-sm-block">請確認您的商品</p>
      </li>
      <li class="stepper-item-details" :class="{ 'stepper-item-isDone': isActive === 'details' }">
        <h3 class="stepper-title">訂單明細</h3>
        <p class="stepper-desc d-none d-sm-block">填寫訂購人相關資訊並建立訂單</p>
      </li>
      <li class="stepper-item-pay" :class="{ 'stepper-item-isDone': isActive === 'pay' }">
        <h3 class="stepper-title">訂單付款</h3>
        <p class="stepper-desc d-none d-sm-block">選擇您的付款方式並進行付款</p>
      </li>
      <li class="stepper-item-complete" :class="{ 'stepper-item-isDone': isActive === 'complete' }">
        <h3 class="stepper-title">完成訂單</h3>
        <p class="stepper-desc d-none d-sm-block">完成訂單</p>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ['isActive'],
};
</script>

<style lang="scss" scope>
:root {
  --circle-size: clamp(2rem, 4vw, 3rem);
  --spacing: clamp(0.25rem, 2vw, 0.5rem);
}

@mixin stepper-item {
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: center;

  &:before {
    --size: 3rem;
    display: block;
    width: var(--circle-size);
    height: var(--circle-size);
    border-radius: 50%;
    border: 2px solid $primary;
    color: $primary;
    margin: 0 auto 1rem;
    font-size: calc(var(--circle-size) / 2);
    padding-top: 2px;
  }

  &:not(:last-child) {
    &:after {
      content: '';
      position: relative;
      top: calc(var(--circle-size) / 2);
      width: calc(100% - var(--circle-size) - calc(var(--spacing) * 2));
      left: calc(50% + calc(var(--circle-size) / 2 + var(--spacing)));
      height: 2px;
      background-color: $secondary;
      order: -1;
    }
  }
}

.stepper-item-cart {
  @include stepper-item;
  &:before {
    content: '1';
  }
}
.stepper-item-details {
  @include stepper-item;
  &:before {
    content: '2';
  }
}
.stepper-item-pay {
  @include stepper-item;
  &:before {
    content: '3';
  }
}
.stepper-item-complete {
  @include stepper-item;
  &:before {
    content: '4';
  }

  &:after {
    content: '';
    height: 2px;
    order: -1;
  }
}

.stepper-item-isDone:before {
  background-color: $primary;
  color: white;
}

.stepper-title {
  font-weight: bold;
  font-size: clamp(1rem, 4vw, 1.25rem);
  margin-bottom: 0.5rem;
}

.stepper-desc {
  color: grey;
  font-size: clamp(0.85rem, 2vw, 1rem);
  padding-left: var(--spacing);
  padding-right: var(--spacing);
}
</style>
