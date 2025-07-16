<template>
  <transition name="fade-slide">
    <div v-if="showFloating" class="fixed bottom-6 right-6 z-50">
      <!-- オンライン相談ボタンのみ -->
      <button 
        @click="$router.push('/online-consultation')"
        class="bg-purple-600 text-white p-6 rounded-2xl shadow-2xl hover:bg-purple-700 transform hover:scale-105 transition-all duration-300 group relative touch-target"
      >
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
        </svg>
        <span class="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-base font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          オンライン相談<br>（Zoom面談）
        </span>
      </button>
      
      <!-- パルスアニメーション -->
      <div class="absolute -inset-2 bg-purple-400 rounded-2xl opacity-20 animate-ping pointer-events-none"></div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'FloatingCTA',
  data() {
    return {
      showFloating: false,
      scrollY: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY
      // スクロール位置が300px以上で表示
      this.showFloating = this.scrollY > 300
    }
  }
}
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

.animate-ping {
  animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}
</style>