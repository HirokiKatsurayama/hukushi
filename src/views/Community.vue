<template>
  <div class="bg-gray-50 min-h-screen">
    <div class="container py-12">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">コミュニティ</h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          利用者同士が交流し、互いに支え合えるコミュニティ機能を提供します
        </p>
      </div>

      <!-- コミュニティ機能 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div class="card">
          <div class="card-body">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">フォーラム</h3>
            <p class="text-gray-600 mb-6">
              同じ境遇の方々と情報交換や相談ができるオンラインフォーラムです。
            </p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-center text-sm text-gray-600">
                <span class="text-accent-500 mr-2">✓</span>
                質問・相談
              </li>
              <li class="flex items-center text-sm text-gray-600">
                <span class="text-accent-500 mr-2">✓</span>
                情報共有
              </li>
              <li class="flex items-center text-sm text-gray-600">
                <span class="text-accent-500 mr-2">✓</span>
                体験談
              </li>
            </ul>
            <button class="btn btn-primary w-full">フォーラムに参加</button>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">メンター制度</h3>
            <p class="text-gray-600 mb-6">
              経験豊富な先輩からアドバイスをもらえるメンター制度を提供しています。
            </p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-center text-sm text-gray-600">
                <span class="text-accent-500 mr-2">✓</span>
                個別相談
              </li>
              <li class="flex items-center text-sm text-gray-600">
                <span class="text-accent-500 mr-2">✓</span>
                キャリアアドバイス
              </li>
              <li class="flex items-center text-sm text-gray-600">
                <span class="text-accent-500 mr-2">✓</span>
                定期的なフォロー
              </li>
            </ul>
            <button class="btn btn-primary w-full">メンターに相談</button>
          </div>
        </div>
      </div>

      <!-- 最新の投稿 -->
      <div class="card">
        <div class="card-header">
          <h3 class="text-xl font-semibold text-gray-900">最新の投稿</h3>
        </div>
        <div class="card-body">
          <div class="space-y-4">
            <div v-for="post in posts" :key="post.id" class="border-b border-gray-200 pb-4 last:border-b-0">
              <div class="flex items-center mb-2">
                <div class="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary-500 font-medium text-sm">{{ post.author.charAt(0) }}</span>
                </div>
                <div>
                  <p class="font-medium text-gray-900">{{ post.author }}</p>
                  <p class="text-sm text-gray-500">{{ post.date }}</p>
                </div>
              </div>
              <h4 class="font-medium text-gray-900 mb-2">{{ post.title }}</h4>
              <p class="text-gray-600 text-sm">{{ post.excerpt }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Community',
  data() {
    return {
      posts: [
        {
          id: 1,
          author: '田中さん',
          date: '2024年3月15日',
          title: '就職活動の体験談',
          excerpt: '就職活動で大変だったことや、乗り越えた方法について共有します。'
        },
        {
          id: 2,
          author: '佐藤さん',
          date: '2024年3月14日',
          title: '職場でのコミュニケーションについて',
          excerpt: '職場での人間関係作りのコツについて質問があります。'
        },
        {
          id: 3,
          author: '鈴木さん',
          date: '2024年3月13日',
          title: 'IT資格取得のおすすめ',
          excerpt: 'IT分野での就職を目指す方におすすめの資格をご紹介します。'
        }
      ]
    }
  }
}
</script>