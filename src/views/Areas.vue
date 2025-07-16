<template>
  <div class="bg-gray-50 min-h-screen">
    <div class="container py-12">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">地域から探す</h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          お住まいの地域や希望する地域から事業所を検索できます
        </p>
      </div>

      <!-- 地域選択 -->
      <div class="bg-white rounded-xl shadow-sm p-8 mb-12">
        <h2 class="text-2xl font-bold mb-6">地域を選択してください</h2>
        
        <!-- 地方別タブ -->
        <div class="border-b mb-6">
          <nav class="flex space-x-8">
            <button 
              v-for="region in regions" 
              :key="region.id"
              @click="selectedRegion = region.id"
              class="pb-4 px-1 border-b-2 font-medium text-sm transition-colors"
              :class="selectedRegion === region.id 
                ? 'border-primary-500 text-primary-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700'"
            >
              {{ region.name }}
            </button>
          </nav>
        </div>

        <!-- 都道府県一覧 -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <router-link 
            v-for="prefecture in selectedPrefectures" 
            :key="prefecture.id"
            :to="`/centers?area=${prefecture.id}`"
            class="border-2 border-gray-200 rounded-lg p-4 hover:border-primary-500 hover:shadow-md transition-all"
          >
            <h3 class="font-semibold text-gray-800">{{ prefecture.name }}</h3>
            <p class="text-sm text-gray-600 mt-1">{{ prefecture.centerCount }}事業所</p>
            <div class="mt-2 text-xs text-gray-500">
              <span v-for="(type, index) in prefecture.topServices" :key="type">
                {{ type }}<span v-if="index < prefecture.topServices.length - 1">、</span>
              </span>
            </div>
          </router-link>
        </div>
      </div>

      <!-- 人気の地域 -->
      <section>
        <h2 class="text-3xl font-bold mb-8">人気の地域</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="area in popularAreas" :key="area.id" class="card">
            <img :src="area.image" :alt="area.name" class="w-full h-48 object-cover rounded-t-lg">
            <div class="card-body">
              <h3 class="text-xl font-semibold mb-2">{{ area.name }}</h3>
              <p class="text-gray-600 text-sm mb-4">{{ area.description }}</p>
              <div class="flex items-center justify-between mb-4">
                <span class="text-sm text-gray-500">{{ area.centerCount }}事業所</span>
                <div class="flex items-center text-yellow-400">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span class="ml-1 text-sm text-gray-600">{{ area.avgRating }}</span>
                </div>
              </div>
              <router-link :to="`/centers?area=${area.id}`" class="btn btn-primary w-full">
                この地域で探す
              </router-link>
            </div>
          </div>
        </div>
      </section>

      <!-- 地域別の特徴 -->
      <section class="mt-16">
        <h2 class="text-3xl font-bold mb-8">地域別の特徴</h2>
        <div class="bg-white rounded-xl shadow-sm overflow-hidden">
          <table class="w-full">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-4 text-left font-medium text-gray-900">地域</th>
                <th class="px-6 py-4 text-center font-medium text-gray-900">事業所数</th>
                <th class="px-6 py-4 text-center font-medium text-gray-900">平均評価</th>
                <th class="px-6 py-4 text-left font-medium text-gray-900">特徴</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(area, index) in areaFeatures" :key="area.id" :class="index % 2 === 0 ? 'bg-white' : 'bg-gray-50'">
                <td class="px-6 py-4 font-medium">{{ area.name }}</td>
                <td class="px-6 py-4 text-center">{{ area.count }}</td>
                <td class="px-6 py-4 text-center">
                  <div class="flex items-center justify-center">
                    <svg class="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    {{ area.rating }}
                  </div>
                </td>
                <td class="px-6 py-4 text-sm text-gray-600">{{ area.feature }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Areas',
  data() {
    return {
      selectedRegion: 'kanto',
      regions: [
        { id: 'hokkaido', name: '北海道' },
        { id: 'tohoku', name: '東北' },
        { id: 'kanto', name: '関東' },
        { id: 'chubu', name: '中部' },
        { id: 'kinki', name: '近畿' },
        { id: 'chugoku', name: '中国' },
        { id: 'shikoku', name: '四国' },
        { id: 'kyushu', name: '九州・沖縄' }
      ],
      prefectures: {
        kanto: [
          { id: 'tokyo', name: '東京都', centerCount: 892, topServices: ['就労移行支援', 'A型'] },
          { id: 'kanagawa', name: '神奈川県', centerCount: 456, topServices: ['B型', '生活介護'] },
          { id: 'saitama', name: '埼玉県', centerCount: 342, topServices: ['就労移行支援', 'B型'] },
          { id: 'chiba', name: '千葉県', centerCount: 298, topServices: ['A型', 'B型'] },
          { id: 'ibaraki', name: '茨城県', centerCount: 156, topServices: ['B型', '生活介護'] },
          { id: 'tochigi', name: '栃木県', centerCount: 98, topServices: ['A型', 'B型'] },
          { id: 'gunma', name: '群馬県', centerCount: 102, topServices: ['B型', '就労移行支援'] }
        ],
        kinki: [
          { id: 'osaka', name: '大阪府', centerCount: 678, topServices: ['就労移行支援', 'A型'] },
          { id: 'kyoto', name: '京都府', centerCount: 234, topServices: ['B型', '生活介護'] },
          { id: 'hyogo', name: '兵庫県', centerCount: 345, topServices: ['A型', 'B型'] },
          { id: 'nara', name: '奈良県', centerCount: 123, topServices: ['B型', '就労移行支援'] },
          { id: 'wakayama', name: '和歌山県', centerCount: 89, topServices: ['B型', '生活介護'] },
          { id: 'shiga', name: '滋賀県', centerCount: 98, topServices: ['A型', 'B型'] }
        ]
      },
      popularAreas: [
        {
          id: 'tokyo',
          name: '東京都',
          image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop',
          description: '最も事業所数が多く、多様なサービスから選択できます',
          centerCount: 892,
          avgRating: 4.5
        },
        {
          id: 'osaka',
          name: '大阪府',
          image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=400&h=300&fit=crop',
          description: '関西の中心地で、アクセスも良好な事業所が豊富',
          centerCount: 678,
          avgRating: 4.3
        },
        {
          id: 'kanagawa',
          name: '神奈川県',
          image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=400&h=300&fit=crop',
          description: '都心へのアクセスも良く、環境の良い事業所が多数',
          centerCount: 456,
          avgRating: 4.4
        }
      ],
      areaFeatures: [
        { id: 'tokyo', name: '東京都', count: '892', rating: '4.5', feature: 'IT・事務系の就労移行支援が充実' },
        { id: 'osaka', name: '大阪府', count: '678', rating: '4.3', feature: '製造業系のA型事業所が多い' },
        { id: 'kanagawa', name: '神奈川県', count: '456', rating: '4.4', feature: 'バランスよく各種サービスが揃う' },
        { id: 'aichi', name: '愛知県', count: '423', rating: '4.2', feature: '自動車関連の就労支援が特徴' },
        { id: 'fukuoka', name: '福岡県', count: '367', rating: '4.6', feature: 'サービス業への就労支援が活発' }
      ]
    }
  },
  computed: {
    selectedPrefectures() {
      return this.prefectures[this.selectedRegion] || []
    }
  }
}
</script>