<template>
  <transition name="fade">
    <div
      v-if="isGoToTopVisible"
      class="goToTop rounded-circle position-fixed bottom-2 end-2 z-index-7 bg-light"
      id="goToTop"
    >
      <a class="cursor-pointer" @click.prevent="scrollToTop">
        <img
          class="goToTop-img-opacity"
          src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1682598597601.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=SlZgeC3bcoMaZXLRCt3LOyY0saRfRr3IcpguZvimYO5uF77zrFDKaBtfeMHtOZ7ivKxPoqp6zvmyvTn4vlppa110pZl3RvUmgPQEeoDYO3%2BZnXeTXBEG7Y3j5wfj21JAlMnWi3M1QknwDKchbR45NjnyIwK%2B00G7g3wd0%2F1y98UQsrnJtrPsxWbggxXrVmUmHvHVYvPPvScmTdgLvSpkhzYkYDa04O864bbXb31WT7bg32v5QD%2FzXq78QWxoNLJW0YsNju%2BGkGvWe3%2FnxMQZX7tVbnnKKA3blVo3QDv0GWUJtVpJIfAOHmf3eBzw8EEnR4%2FkLr%2Fm7dhYWfGYYC%2FrtQ%3D%3D"
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
      isGoToTopVisible: false
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },
    goToTopHandleScroll() {
      const distanceFromTop = window.scrollY
      // 設定一個閾值，表示視窗離開頂部多少距離時，顯示 div 元素
      const threshold = 400
      this.isGoToTopVisible = distanceFromTop > threshold
    }
  },
  beforeDestroy() {
    // 移除事件監聽器，避免記憶體洩漏
    window.removeEventListener('scroll', goToTopHandleScroll)
  },
  mounted() {
    // 監聽視窗滾動事件
    window.addEventListener('scroll', this.goToTopHandleScroll)
  }
}
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
