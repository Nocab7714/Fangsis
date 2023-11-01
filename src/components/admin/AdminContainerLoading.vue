<template>
  <!-- Loading 容器範圍由外部元件 props 傳入控制 -->
  <!-- Loading 開啟狀態由外部元件透過 props 傳入控制 -->
  <loading
    :active="isLoading"
    :can-cancel="false"
    :lock-scroll="lockScroll"
    :background-color="backgroundColor"
    :container="container"
    :opacity="opacity"
    :is-full-page="fullPage"
  >
    <div class="loadingio-spinner-spin">
      <div class="ldio">
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
      </div>
    </div>
  </loading>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

export default {
  data() {
    return {
      lockScroll: true,
      fullPage: false,
      backgroundColor: '#ffffff',
      opacity: 0.85
    }
  },
  props: ['isLoading', 'container'],
  components: {
    Loading
  }
}
</script>
