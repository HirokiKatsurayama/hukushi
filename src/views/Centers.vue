<template>
  <div>
    <!-- Skip Link -->
    <a href="#main-content" class="skip-link">メインコンテンツにスキップ</a>

    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-500 to-secondary-500 text-white py-16 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-secondary-600/20"></div>
      <div class="container relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl font-bold mb-4">事業所検索</h1>
          <p class="text-xl mb-8 opacity-90">
            全国の事業所を検索できます。地域、対応可能な障害種別、アクセス情報などの条件で絞り込んで、あなたに最適な事業所を見つけてください。
          </p>
          
          <!-- Statistics -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div class="text-center">
              <div class="text-3xl font-bold mb-1">150</div>
              <div class="text-sm opacity-80">登録事業所</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold mb-1">47</div>
              <div class="text-sm opacity-80">全都道府県</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold mb-1">12</div>
              <div class="text-sm opacity-80">サービス種別</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold mb-1">98%</div>
              <div class="text-sm opacity-80">満足度</div>
            </div>
          </div>

          <!-- Search Form -->
          <div class="bg-white rounded-2xl p-8 shadow-2xl mt-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-6 text-center">条件を指定して検索</h2>
            <form @submit.prevent="searchCenters" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="relative">
                  <label class="form-label">
                    <svg class="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    地域・都道府県
                  </label>
                  <select v-model="searchForm.prefecture" class="form-select pl-10">
                    <option value="">すべて</option>
                    <option value="tokyo">東京都</option>
                    <option value="osaka">大阪府</option>
                    <option value="kanagawa">神奈川県</option>
                    <option value="aichi">愛知県</option>
                    <option value="saitama">埼玉県</option>
                    <option value="chiba">千葉県</option>
                  </select>
                </div>

                <div class="relative">
                  <label class="form-label">
                    <svg class="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                    サービス種別
                  </label>
                  <select v-model="searchForm.serviceType" class="form-select pl-10">
                    <option value="">すべて</option>
                    <option value="employment">就労継続支援A型</option>
                    <option value="employment_b">就労継続支援B型</option>
                    <option value="transition">就労移行支援</option>
                    <option value="independent">自立訓練</option>
                  </select>
                </div>

                <div class="relative">
                  <label class="form-label">
                    <svg class="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                    対応障害種別
                  </label>
                  <select v-model="searchForm.disabilityType" class="form-select pl-10">
                    <option value="">すべて</option>
                    <option value="physical">身体障害</option>
                    <option value="intellectual">知的障害</option>
                    <option value="mental">精神障害</option>
                    <option value="developmental">発達障害</option>
                  </select>
                </div>
              </div>

              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <button type="submit" class="btn btn-primary flex-1 max-w-48">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                  検索する
                </button>
                <button type="button" @click="resetSearch" class="btn btn-outline flex-1 max-w-48">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                  </svg>
                  リセット
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Results Section -->
    <section class="py-12">
      <div class="container">
        <!-- CTA バナー -->
        <div class="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl shadow-lg p-8 mb-8 text-white">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div class="md:col-span-2">
              <h3 class="text-2xl font-bold mb-3">気になる事業所は見つかりましたか？</h3>
              <p class="text-lg opacity-90 mb-4">
                まずは資料請求や見学で、実際の雰囲気を確認してみましょう。<br>
                専門スタッフが無料でご相談に応じます。
              </p>
              <div class="flex items-center gap-4 text-sm">
                <div class="flex items-center gap-2">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span>完全無料</span>
                </div>
                <div class="flex items-center gap-2">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span>複数事業所OK</span>
                </div>
                <div class="flex items-center gap-2">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span>強引な勧誘なし</span>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-3">
              <button @click="$router.push('/tour-booking')" class="btn bg-white text-primary-600 hover:bg-gray-100 btn-lg py-4 text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                一括見学予約
              </button>
              <button @click="$router.push('/document-request')" class="btn bg-white/20 text-white border-2 border-white hover:bg-white/30 btn-lg py-4 text-lg font-bold">
                <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                資料一括請求
              </button>
            </div>
          </div>
        </div>

        <div class="flex justify-between items-center mb-8">
          <h2 class="text-2xl font-semibold text-gray-900">検索結果</h2>
          <div class="text-sm text-gray-600">
            {{ filteredCenters.length }}件の事業所が見つかりました
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="center in filteredCenters" :key="center.id" class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
            <!-- Image Gallery -->
            <div class="relative h-48 overflow-hidden">
              <img :src="center.images[currentImageIndex[center.id] || 0]" :alt="center.name" class="w-full h-full object-cover transition-transform hover:scale-105">
              <div class="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
                <button 
                  v-for="(image, index) in center.images" 
                  :key="index"
                  @click="setCurrentImage(center.id, index)"
                  class="w-2 h-2 rounded-full transition-all"
                  :class="(currentImageIndex[center.id] || 0) === index ? 'bg-white scale-125' : 'bg-white/50'"
                ></button>
              </div>
            </div>

            <!-- Content -->
            <div class="p-6">
              <div class="flex justify-between items-start mb-4">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ center.name }}</h3>
                <span class="bg-primary-100 text-primary-700 px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                  {{ center.serviceType }}
                </span>
              </div>

              <!-- Rating -->
              <div class="flex items-center gap-2 mb-4">
                <div class="flex">
                  <svg v-for="star in 5" :key="star" class="w-4 h-4" :class="star <= center.rating ? 'text-yellow-400' : 'text-gray-300'" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
                <span class="text-sm text-gray-600">{{ center.rating }}.0 ({{ center.reviewCount }}件)</span>
              </div>

              <!-- Location -->
              <div class="flex items-center gap-2 mb-4">
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span class="text-sm text-gray-600">{{ center.location }}</span>
              </div>

              <!-- Features -->
              <div class="flex flex-wrap gap-2 mb-6">
                <span v-for="feature in center.features" :key="feature" class="bg-accent-50 text-accent-700 px-2 py-1 rounded text-xs font-medium">
                  {{ feature }}
                </span>
              </div>

              <!-- Description -->
              <p class="text-gray-600 text-sm mb-6 line-clamp-3">{{ center.description }}</p>

              <!-- Actions -->
              <div class="flex gap-3">
                <button @click="viewCenter(center)" class="btn btn-primary flex-1">
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                  詳細を見る
                </button>
                <button @click="bookTour(center)" class="btn bg-teal-100 text-teal-700 hover:bg-teal-200 border border-teal-300 flex-1">
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  見学予約
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// Import images
import pcWork from '/images/pc-work.png'
import pcLearning from '/images/pc-learning.png'
import lecture from '/images/lecture.png'
import officeWork1 from '/images/office-work1.png'
import officeWork2 from '/images/office-work2.png'
import staffLineup1 from '/images/staff-lineup1.png'
import staffLineup2 from '/images/staff-lineup2.png'
import meetingSuit from '/images/meeting-suit.png'

export default {
  name: 'Centers',
  data() {
    return {
      searchForm: {
        prefecture: '',
        serviceType: '',
        disabilityType: ''
      },
      currentImageIndex: {},
      centers: [
        {
          id: 1,
          name: '希望の里就労支援センター',
          serviceType: '就労移行支援',
          rating: 4,
          reviewCount: 28,
          location: '東京都新宿区西新宿1-1-1',
          features: ['駅近', 'IT研修', '個別支援', '就職後サポート'],
          description: 'IT分野に特化した就労移行支援事業所です。プログラミングやWebデザインなど、現代社会で需要の高いスキルを身につけることができます。経験豊富なスタッフが一人ひとりの特性に合わせたサポートを提供します。',
          images: [
            pcWork,
            pcLearning,
            lecture
          ]
        },
        {
          id: 2,
          name: 'みらい工房',
          serviceType: '就労継続支援A型',
          rating: 5,
          reviewCount: 42,
          location: '大阪府大阪市中央区本町2-2-2',
          features: ['製造業', '時給保証', 'スキルアップ', '交通費支給'],
          description: '製造業務を中心とした就労継続支援A型事業所です。時給制で安定した収入を得ながら、製造技術を学び、将来の一般就労を目指すことができます。',
          images: [
            officeWork1,
            officeWork2,
            staffLineup1
          ]
        },
        {
          id: 3,
          name: 'ステップアップ横浜',
          serviceType: '就労移行支援',
          rating: 4,
          reviewCount: 35,
          location: '神奈川県横浜市西区みなとみらい3-3-3',
          features: ['事務訓練', '接客研修', '資格取得支援', '企業実習'],
          description: '事務職や接客業への就労を目指す方のための支援事業所です。実際の職場に近い環境で訓練を行い、必要な資格取得もサポートします。',
          images: [
            officeWork1,
            pcWork,
            lecture
          ]
        },
        {
          id: 4,
          name: 'アクティブライフ名古屋',
          serviceType: '就労継続支援B型',
          rating: 4,
          reviewCount: 23,
          location: '愛知県名古屋市中村区名駅4-4-4',
          features: ['軽作業', '在宅勤務', '柔軟な時間', '生活支援'],
          description: '軽作業を中心とした就労継続支援B型事業所です。在宅勤務も可能で、一人ひとりの体調や生活リズムに合わせた働き方をサポートします。',
          images: [
            officeWork2,
            pcLearning,
            staffLineup2
          ]
        },
        {
          id: 5,
          name: 'サポートセンター埼玉',
          serviceType: '自立訓練',
          rating: 4,
          reviewCount: 18,
          location: '埼玉県さいたま市大宮区桜木町1-1-1',
          features: ['生活訓練', '機能訓練', '社会復帰', '医療連携'],
          description: '日常生活や社会生活を営むために必要な訓練を行う自立訓練事業所です。医療機関と連携して、個々の障害特性に応じた支援を提供します。',
          images: [
            lecture,
            staffLineup1,
            meetingSuit
          ]
        },
        {
          id: 6,
          name: 'クリエイティブ千葉',
          serviceType: '就労移行支援',
          rating: 5,
          reviewCount: 31,
          location: '千葉県千葉市中央区中央2-2-2',
          features: ['デザイン', 'クリエイティブ', 'ポートフォリオ作成', 'フリーランス支援'],
          description: 'クリエイティブ分野に特化した就労移行支援事業所です。デザイン・映像・音楽などの分野で、プロフェッショナルを目指す方をサポートします。',
          images: [
            pcWork,
            pcLearning,
            officeWork1
          ]
        }
      ]
    }
  },
  computed: {
    filteredCenters() {
      return this.centers.filter(center => {
        const prefectureMatch = !this.searchForm.prefecture || center.location.includes(this.getPrefectureName(this.searchForm.prefecture))
        const serviceTypeMatch = !this.searchForm.serviceType || center.serviceType.includes(this.getServiceTypeName(this.searchForm.serviceType))
        const disabilityTypeMatch = !this.searchForm.disabilityType || true // 簡略化のため、障害種別は常にマッチとする
        
        return prefectureMatch && serviceTypeMatch && disabilityTypeMatch
      })
    }
  },
  methods: {
    searchCenters() {
      // 検索実行（フィルタリングは computed で自動実行）
      console.log('検索実行:', this.searchForm)
    },
    resetSearch() {
      this.searchForm = {
        prefecture: '',
        serviceType: '',
        disabilityType: ''
      }
    },
    setCurrentImage(centerId, index) {
      this.currentImageIndex = { ...this.currentImageIndex, [centerId]: index }
    },
    viewCenter(center) {
      // 詳細ページへ遷移
      this.$router.push(`/centers/center-${center.id}`)
    },
    bookTour(center) {
      // 見学予約ページへ遷移（事業所情報を渡す）
      this.$router.push({
        path: '/tour-booking',
        query: { centerId: center.id, centerName: center.name }
      })
    },
    getPrefectureName(value) {
      const prefectureMap = {
        'tokyo': '東京都',
        'osaka': '大阪府',
        'kanagawa': '神奈川県',
        'aichi': '愛知県',
        'saitama': '埼玉県',
        'chiba': '千葉県'
      }
      return prefectureMap[value] || value
    },
    getServiceTypeName(value) {
      const serviceTypeMap = {
        'employment': '就労継続支援A型',
        'employment_b': '就労継続支援B型',
        'transition': '就労移行支援',
        'independent': '自立訓練'
      }
      return serviceTypeMap[value] || value
    }
  }
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>