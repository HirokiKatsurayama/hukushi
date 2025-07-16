<template>
  <div class="bg-gray-50 min-h-screen">
    <div class="container py-12">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">学習・訓練</h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          多様な学習プログラムと訓練コースで、就労に必要なスキルを身につけます
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- プログラム1 -->
        <div class="card">
          <div class="card-body">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">ITスキル習得プログラム</h3>
            <p class="text-gray-600 mb-6">
              プログラミング、Webデザイン、データ入力などのITスキルを学びます。
            </p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-center text-sm text-gray-600">
                <span class="text-accent-500 mr-2">✓</span>
                プログラミング基礎
              </li>
              <li class="flex items-center text-sm text-gray-600">
                <span class="text-accent-500 mr-2">✓</span>
                Webデザイン
              </li>
              <li class="flex items-center text-sm text-gray-600">
                <span class="text-accent-500 mr-2">✓</span>
                データ入力・処理
              </li>
            </ul>
            <button class="btn btn-primary w-full">詳細を見る</button>
          </div>
        </div>

        <!-- プログラム2 -->
        <div class="card">
          <div class="card-body">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">事務スキル習得プログラム</h3>
            <p class="text-gray-600 mb-6">
              オフィスワークに必要な事務スキルを総合的に学習します。
            </p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-center text-sm text-gray-600">
                <span class="text-accent-500 mr-2">✓</span>
                文書作成
              </li>
              <li class="flex items-center text-sm text-gray-600">
                <span class="text-accent-500 mr-2">✓</span>
                表計算
              </li>
              <li class="flex items-center text-sm text-gray-600">
                <span class="text-accent-500 mr-2">✓</span>
                電話応対
              </li>
            </ul>
            <button class="btn btn-primary w-full">詳細を見る</button>
          </div>
        </div>

        <!-- プログラム3 -->
        <div class="card">
          <div class="card-body">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">製造・軽作業プログラム</h3>
            <p class="text-gray-600 mb-6">
              製造業や軽作業に必要な技術とスキルを身につけます。
            </p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-center text-sm text-gray-600">
                <span class="text-accent-500 mr-2">✓</span>
                製造技術
              </li>
              <li class="flex items-center text-sm text-gray-600">
                <span class="text-accent-500 mr-2">✓</span>
                品質管理
              </li>
              <li class="flex items-center text-sm text-gray-600">
                <span class="text-accent-500 mr-2">✓</span>
                安全管理
              </li>
            </ul>
            <button class="btn btn-primary w-full">詳細を見る</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Learning'
}
</script>