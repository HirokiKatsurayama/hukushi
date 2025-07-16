<template>
  <div class="bg-gray-50 min-h-screen">
    <div class="container py-12">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">特集・おすすめ事業所</h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          編集部が厳選した優良事業所をご紹介します
        </p>
      </div>

      <!-- 特集記事 -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2">
          <article class="card">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop" 
              alt="特集記事" class="w-full h-64 object-cover rounded-t-lg">
            <div class="card-body">
              <div class="flex items-center gap-4 mb-4">
                <span class="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">特集</span>
                <span class="text-gray-500 text-sm">2024年3月15日</span>
              </div>
              <h2 class="text-2xl font-bold mb-4">IT分野に強い就労移行支援事業所10選</h2>
              <p class="text-gray-700 mb-6">
                プログラミングやWebデザインなど、IT分野のスキルを身につけられる就労移行支援事業所をピックアップ。
                各事業所の特徴や強み、実際の就職実績などを詳しくご紹介します。
              </p>
              <button class="btn btn-primary">記事を読む</button>
            </div>
          </article>
        </div>

        <div class="space-y-6">
          <article class="card">
            <div class="card-body">
              <span class="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm font-medium">インタビュー</span>
              <h3 class="text-lg font-semibold mt-3 mb-2">施設長に聞く成功の秘訣</h3>
              <p class="text-gray-600 text-sm">就職率90%を誇る事業所の取り組みとは</p>
            </div>
          </article>

          <article class="card">
            <div class="card-body">
              <span class="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-medium">レポート</span>
              <h3 class="text-lg font-semibold mt-3 mb-2">2024年度 事業所満足度調査</h3>
              <p class="text-gray-600 text-sm">利用者1000人に聞いた満足度ランキング</p>
            </div>
          </article>
        </div>
      </div>

      <!-- おすすめ事業所一覧 -->
      <section class="mt-16">
        <h2 class="text-3xl font-bold mb-8">今月のおすすめ事業所</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="center in recommendedCenters" :key="center.id" class="card hover:shadow-xl transition-shadow">
            <div class="relative">
              <img :src="center.image" :alt="center.name" class="w-full h-48 object-cover rounded-t-lg">
              <div class="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
                <span class="text-primary-500 font-medium">{{ center.badge }}</span>
              </div>
            </div>
            <div class="card-body">
              <h3 class="text-xl font-semibold mb-2">{{ center.name }}</h3>
              <p class="text-gray-600 text-sm mb-4">{{ center.description }}</p>
              <div class="mb-4">
                <p class="text-sm text-gray-700 mb-2"><strong>おすすめポイント：</strong></p>
                <ul class="space-y-1">
                  <li v-for="point in center.points" :key="point" class="text-sm text-gray-600 flex items-start">
                    <span class="text-accent-500 mr-2">•</span>
                    {{ point }}
                  </li>
                </ul>
              </div>
              <router-link :to="`/centers/${center.id}`" class="btn btn-primary w-full">
                詳細を見る
              </router-link>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Featured',
  data() {
    return {
      recommendedCenters: [
        {
          id: 1,
          name: 'テックキャリアサポート',
          image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop',
          badge: '編集部イチオシ',
          description: 'IT業界への就職に特化した支援を提供',
          points: [
            '就職率95%の高い実績',
            '大手IT企業との連携',
            '充実した設備環境'
          ]
        },
        {
          id: 2,
          name: 'グリーンファーム就労支援',
          image: 'https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?w=400&h=300&fit=crop',
          badge: '新規オープン',
          description: '農業を通じた就労支援プログラム',
          points: [
            '自然豊かな環境での作業',
            '有機農業の技術習得',
            '直売所での販売体験'
          ]
        },
        {
          id: 3,
          name: 'アートワークスタジオ',
          image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop',
          badge: 'ユニーク',
          description: 'クリエイティブな仕事を目指す方へ',
          points: [
            'デザイン・アート系の訓練',
            'プロのクリエイター講師',
            '作品展示・販売の機会'
          ]
        }
      ]
    }
  }
}
</script>