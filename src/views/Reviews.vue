<template>
  <div class="bg-gray-50 min-h-screen">
    <div class="container py-12">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">口コミ・評価</h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          実際に利用された方々の生の声をお届けします
        </p>
      </div>

      <!-- フィルター -->
      <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label class="form-label">評価</label>
            <select v-model="filters.rating" class="form-select">
              <option value="">すべて</option>
              <option value="5">★★★★★ (5)</option>
              <option value="4">★★★★☆ (4以上)</option>
              <option value="3">★★★☆☆ (3以上)</option>
            </select>
          </div>
          <div>
            <label class="form-label">サービス種別</label>
            <select v-model="filters.service" class="form-select">
              <option value="">すべて</option>
              <option value="a-type">就労継続支援A型</option>
              <option value="b-type">就労継続支援B型</option>
              <option value="transition">就労移行支援</option>
            </select>
          </div>
          <div>
            <label class="form-label">投稿者</label>
            <select v-model="filters.reviewer" class="form-select">
              <option value="">すべて</option>
              <option value="user">利用者</option>
              <option value="family">家族</option>
              <option value="staff">元職員</option>
            </select>
          </div>
          <div>
            <label class="form-label">並び順</label>
            <select v-model="filters.sort" class="form-select">
              <option value="new">新しい順</option>
              <option value="helpful">参考になった順</option>
              <option value="rating-high">評価が高い順</option>
            </select>
          </div>
        </div>
      </div>

      <!-- 評価統計 -->
      <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h2 class="text-xl font-semibold mb-4">総合評価</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div class="flex items-center mb-4">
              <div class="text-5xl font-bold text-gray-900 mr-4">4.3</div>
              <div>
                <div class="flex text-yellow-400 mb-1">
                  <svg v-for="i in 5" :key="i" class="w-6 h-6" :class="{ 'text-gray-300': i > 4 }" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
                <p class="text-sm text-gray-600">12,543件の評価</p>
              </div>
            </div>
            <div class="space-y-2">
              <div v-for="rating in ratingDistribution" :key="rating.star" class="flex items-center">
                <span class="text-sm text-gray-600 w-12">{{ rating.star }}★</span>
                <div class="flex-1 bg-gray-200 rounded-full h-2 mx-3">
                  <div class="bg-primary-500 h-2 rounded-full" :style="`width: ${rating.percentage}%`"></div>
                </div>
                <span class="text-sm text-gray-600 w-12 text-right">{{ rating.count }}</span>
              </div>
            </div>
          </div>
          <div>
            <h3 class="font-medium mb-3">評価項目別平均</h3>
            <div class="space-y-3">
              <div v-for="item in ratingItems" :key="item.name" class="flex items-center justify-between">
                <span class="text-sm text-gray-600">{{ item.name }}</span>
                <div class="flex items-center">
                  <div class="flex text-yellow-400 mr-2">
                    <svg v-for="i in 5" :key="i" class="w-4 h-4" :class="{ 'text-gray-300': i > item.rating }" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                  <span class="text-sm text-gray-900">{{ item.rating }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 口コミ一覧 -->
      <div class="space-y-6">
        <div v-for="review in reviews" :key="review.id" class="bg-white rounded-lg shadow-sm p-6">
          <div class="flex items-start justify-between mb-4">
            <div>
              <h3 class="font-semibold text-lg mb-1">{{ review.centerName }}</h3>
              <div class="flex items-center gap-4 text-sm text-gray-600">
                <span>{{ review.serviceType }}</span>
                <span>{{ review.location }}</span>
              </div>
            </div>
            <div class="text-right">
              <div class="flex text-yellow-400 mb-1">
                <svg v-for="i in 5" :key="i" class="w-5 h-5" :class="{ 'text-gray-300': i > review.rating }" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
              <p class="text-sm text-gray-500">{{ review.date }}</p>
            </div>
          </div>

          <h4 class="font-medium mb-2">{{ review.title }}</h4>
          <p class="text-gray-700 mb-4">{{ review.content }}</p>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
            <div>
              <span class="text-gray-600">スタッフ対応:</span>
              <span class="font-medium ml-1">{{ review.ratings.staff }}/5</span>
            </div>
            <div>
              <span class="text-gray-600">プログラム:</span>
              <span class="font-medium ml-1">{{ review.ratings.program }}/5</span>
            </div>
            <div>
              <span class="text-gray-600">施設・設備:</span>
              <span class="font-medium ml-1">{{ review.ratings.facility }}/5</span>
            </div>
            <div>
              <span class="text-gray-600">アクセス:</span>
              <span class="font-medium ml-1">{{ review.ratings.access }}/5</span>
            </div>
          </div>

          <div class="flex items-center justify-between border-t pt-4">
            <div class="flex items-center gap-4 text-sm text-gray-600">
              <span>{{ review.reviewer }} ({{ review.reviewerType }})</span>
              <span>利用期間: {{ review.period }}</span>
            </div>
            <div class="flex items-center gap-4">
              <button class="text-sm text-gray-600 hover:text-primary-500 flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                </svg>
                参考になった ({{ review.helpful }})
              </button>
              <router-link :to="`/centers/${review.centerId}`" class="text-sm text-primary-500 hover:text-primary-600">
                事業所詳細 →
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- ページネーション -->
      <div class="flex justify-center mt-12">
        <nav class="flex items-center gap-2">
          <button class="px-4 py-2 text-gray-500 hover:text-gray-700">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button class="px-4 py-2 bg-primary-500 text-white rounded">1</button>
          <button class="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">2</button>
          <button class="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">3</button>
          <span class="px-2">...</span>
          <button class="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">24</button>
          <button class="px-4 py-2 text-gray-500 hover:text-gray-700">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Reviews',
  data() {
    return {
      filters: {
        rating: '',
        service: '',
        reviewer: '',
        sort: 'new'
      },
      ratingDistribution: [
        { star: 5, percentage: 45, count: 5654 },
        { star: 4, percentage: 35, count: 4389 },
        { star: 3, percentage: 15, count: 1882 },
        { star: 2, percentage: 3, count: 376 },
        { star: 1, percentage: 2, count: 242 }
      ],
      ratingItems: [
        { name: 'スタッフの対応', rating: 4.5 },
        { name: 'プログラム内容', rating: 4.2 },
        { name: '施設・設備', rating: 4.0 },
        { name: 'アクセス', rating: 4.3 },
        { name: '就職支援', rating: 4.4 }
      ],
      reviews: [
        {
          id: 1,
          centerName: 'さくらワークセンター',
          centerId: 'sakura-work',
          serviceType: '就労移行支援',
          location: '東京都新宿区',
          rating: 5,
          date: '2024年3月15日',
          title: '親身なサポートで就職成功！',
          content: 'スタッフの方々が本当に親身になって相談に乗ってくださり、自分に合った職場を見つけることができました。特に面接練習や履歴書の添削は、実際の就職活動で大いに役立ちました。施設も清潔で、パソコンなどの設備も充実していて、快適に訓練を受けることができました。',
          ratings: {
            staff: 5,
            program: 5,
            facility: 4,
            access: 5
          },
          reviewer: 'M.Kさん',
          reviewerType: '利用者',
          period: '6ヶ月',
          helpful: 128
        },
        {
          id: 2,
          centerName: 'みらい就労支援事業所',
          centerId: 'mirai-support',
          serviceType: '就労継続支援A型',
          location: '大阪府大阪市',
          rating: 4,
          date: '2024年3月10日',
          title: '安定した環境で働けています',
          content: '製造業の仕事を中心に、自分のペースで働かせていただいています。最低賃金以上の給与が保証されているので、生活も安定しました。ただ、もう少し仕事の種類があると良いかなと思います。',
          ratings: {
            staff: 4,
            program: 3,
            facility: 4,
            access: 4
          },
          reviewer: 'T.Yさん',
          reviewerType: '利用者',
          period: '1年2ヶ月',
          helpful: 89
        }
      ]
    }
  }
}
</script>