<template>
  <transition name="fade">
    <div
      v-if="isGoToTopVisible"
      class="goToTop rounded-circle position-fixed bottom-2 end-2 z-index-7 bg-light"
      id="goToTop"
    >
      <a class="cursor-pointer" href="#" @click.prevent="scrollToTop">
        <img
          class="goToTop-img-opacity"
          src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1682598597601.png"
          alt="透明度100的向上按鈕"
          width="40"
          height="40"
        />
      </a>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      isGoToTopVisible: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    goToTopHandleScroll() {
      const distanceFromTop = window.scrollY;
      // 設定一個閾值，表示視窗離開頂部多少距離時，顯示 div 元素
      const threshold = 400;
      this.isGoToTopVisible = distanceFromTop > threshold;
    },
  },
  beforeUnmount() {
    // 移除事件監聽器，避免記憶體洩漏
    window.removeEventListener('scroll', this.goToTopHandleScroll);
  },
  mounted() {
    // 監聽視窗滾動事件
    window.addEventListener('scroll', this.goToTopHandleScroll);
  },
};
</script>
<style lang="scss" scoped>
.goToTop-img-opacity {
  opacity: 60%;
}
.goToTop {
  &:hover {
    .goToTop-img-opacity {
      opacity: 100%;
    }
  }
}

/* 淡入淡出的效果 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
