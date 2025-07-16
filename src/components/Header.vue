<template>
  <header class="bg-white shadow-sm border-b border-gray-200" role="banner">
    <!-- 上段：電話番号とCTAボタン -->
    <div class="bg-teal-500 text-white py-3">
      <div class="container">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <!-- 電話番号（最優先） -->
          <div class="text-center md:text-left">
            <p class="text-sm font-medium opacity-90">お電話でのお問い合わせ</p>
            <a href="tel:0120-123-456" class="text-2xl font-bold hover:text-yellow-300 transition-colors">
              <svg class="w-6 h-6 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              0120-123-456
            </a>
            <p class="text-xs opacity-80">平日 9:00〜18:00</p>
          </div>

          <!-- CTAボタン -->
          <div class="flex flex-col sm:flex-row gap-3">
            <router-link to="/tour-booking" class="btn bg-white text-teal-600 hover:bg-gray-100 font-bold px-5 py-3 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 no-underline">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              見学予約
            </router-link>
            <router-link to="/document-request" class="btn bg-green-500 text-white hover:bg-green-600 font-bold px-5 py-3 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 no-underline">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              資料請求
            </router-link>
            <router-link to="/online-consultation" class="btn bg-purple-500 text-white hover:bg-purple-600 font-bold px-5 py-3 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 no-underline">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
              </svg>
              オンライン相談
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- 下段：ロゴとナビゲーション -->
    <div class="container">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center group no-underline">
            <div class="bg-gradient-to-r from-teal-400 to-teal-500 text-white px-4 py-2 rounded-full shadow-lg group-hover:shadow-xl transform group-hover:scale-105 transition-all duration-300">
              <svg class="w-6 h-6 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
              <span class="text-lg font-bold">福祉の窓口</span>
            </div>
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex space-x-6" role="navigation" aria-label="メインナビゲーション">
          <router-link 
            v-for="item in navItems" 
            :key="item.path"
            :to="item.path"
            class="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-full font-medium transition-colors"
            :class="{ 'text-teal-600 bg-teal-50': $route.path === item.path }"
          >
            {{ item.name }}
          </router-link>
        </nav>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu"
          class="lg:hidden inline-flex items-center justify-center p-3 rounded-full text-gray-700 hover:text-teal-600 hover:bg-gray-100 transition-colors"
          :aria-label="mobileMenuOpen ? 'メニューを閉じる' : 'メニューを開く'"
          :aria-expanded="mobileMenuOpen"
        >
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              v-if="!mobileMenuOpen"
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path 
              v-else
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div 
        v-if="mobileMenuOpen"
        class="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50"
        role="navigation" 
        aria-label="モバイルメニュー"
      >
        <div class="px-4 pt-4 pb-3 space-y-2">
          <router-link 
            v-for="item in navItems" 
            :key="item.path"
            :to="item.path"
            @click="closeMobileMenu"
            class="block px-4 py-3 rounded-full text-lg font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 transition-colors"
            :class="{ 'text-teal-600 bg-teal-50': $route.path === item.path }"
          >
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      mobileMenuOpen: false,
      navItems: [
        { name: '事業所を探す', path: '/centers' },
        { name: '特集・おすすめ', path: '/featured' },
        { name: 'サービス種別から探す', path: '/services' },
        { name: '地域から探す', path: '/areas' },
        { name: '口コミ・評価', path: '/reviews' },
        { name: 'お役立ち情報', path: '/guide' }
      ]
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false
    }
  },
  mounted() {
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!this.$el.contains(e.target)) {
        this.mobileMenuOpen = false
      }
    })
  }
}
</script>