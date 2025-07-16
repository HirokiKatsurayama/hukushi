<template>
  <div class="bg-gray-50 min-h-screen">
    <div class="container py-12">
      <!-- ヒーローセクション with パソコンを使った作業の画像 -->
      <div class="text-center mb-12">
        <div class="mb-8">
          <img 
            src="/images/パソコンを使った作業.png" 
            alt="パソコンを使った作業の様子"
            class="w-full max-w-2xl mx-auto rounded-xl shadow-lg"
          >
        </div>
        <h1 class="text-4xl font-bold text-gray-900 mb-4">サービス種別から探す</h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          提供サービスの種類から事業所を検索できます
        </p>
      </div>

      <!-- サービス種別一覧 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="service in serviceTypes" :key="service.id" class="card">
          <div class="card-body">
            <div class="flex items-start gap-4">
              <div class="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="service.icon"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold mb-2">{{ service.name }}</h3>
                <p class="text-gray-600 mb-4">{{ service.description }}</p>
                
                <div class="bg-gray-50 rounded-lg p-4 mb-4">
                  <h4 class="font-medium text-gray-900 mb-2">主な特徴</h4>
                  <ul class="space-y-1">
                    <li v-for="feature in service.features" :key="feature" class="text-sm text-gray-600 flex items-start">
                      <span class="text-primary-500 mr-2">•</span>
                      {{ feature }}
                    </li>
                  </ul>
                </div>

                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-500">{{ service.centerCount }}事業所</span>
                  <router-link :to="`/centers?service=${service.id}`" class="btn btn-primary btn-sm">
                    この条件で検索
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- サービス比較表 -->
      <section class="mt-16">
        <h2 class="text-3xl font-bold mb-8 text-center">サービス種別比較表</h2>
        <div class="overflow-x-auto">
          <table class="w-full bg-white rounded-lg shadow-sm">
            <thead>
              <tr class="bg-gray-50 border-b">
                <th class="px-6 py-4 text-left font-medium text-gray-900">項目</th>
                <th class="px-6 py-4 text-center font-medium text-gray-900">就労継続支援A型</th>
                <th class="px-6 py-4 text-center font-medium text-gray-900">就労継続支援B型</th>
                <th class="px-6 py-4 text-center font-medium text-gray-900">就労移行支援</th>
                <th class="px-6 py-4 text-center font-medium text-gray-900">生活介護</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b">
                <td class="px-6 py-4 font-medium">雇用契約</td>
                <td class="px-6 py-4 text-center">あり</td>
                <td class="px-6 py-4 text-center">なし</td>
                <td class="px-6 py-4 text-center">なし</td>
                <td class="px-6 py-4 text-center">なし</td>
              </tr>
              <tr class="border-b bg-gray-50">
                <td class="px-6 py-4 font-medium">賃金・工賃</td>
                <td class="px-6 py-4 text-center">最低賃金以上</td>
                <td class="px-6 py-4 text-center">工賃（平均月1.5万円）</td>
                <td class="px-6 py-4 text-center">工賃の場合あり</td>
                <td class="px-6 py-4 text-center">なし</td>
              </tr>
              <tr class="border-b">
                <td class="px-6 py-4 font-medium">利用期間</td>
                <td class="px-6 py-4 text-center">制限なし</td>
                <td class="px-6 py-4 text-center">制限なし</td>
                <td class="px-6 py-4 text-center">原則2年</td>
                <td class="px-6 py-4 text-center">制限なし</td>
              </tr>
              <tr class="border-b bg-gray-50">
                <td class="px-6 py-4 font-medium">主な目的</td>
                <td class="px-6 py-4 text-center">就労の場の提供</td>
                <td class="px-6 py-4 text-center">生産活動の機会提供</td>
                <td class="px-6 py-4 text-center">一般就労への移行</td>
                <td class="px-6 py-4 text-center">日常生活支援</td>
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
  name: 'Services',
  data() {
    return {
      serviceTypes: [
        {
          id: 'a-type',
          name: '就労継続支援A型',
          icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
          description: '雇用契約を結び、最低賃金以上の給与を得ながら働くことができるサービスです。',
          features: [
            '雇用契約に基づく就労',
            '最低賃金以上の給与保証',
            '社会保険加入可能',
            '一般就労に近い環境'
          ],
          centerCount: 2156
        },
        {
          id: 'b-type',
          name: '就労継続支援B型',
          icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
          description: '雇用契約を結ばず、自分のペースで働きながら工賃を得ることができるサービスです。',
          features: [
            '体調に合わせた柔軟な勤務',
            '様々な作業内容',
            '生活リズムの確立',
            '社会参加の機会'
          ],
          centerCount: 3842
        },
        {
          id: 'transition',
          name: '就労移行支援',
          icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
          description: '一般企業への就職を目指し、必要な知識や技能を身につけるためのサービスです。',
          features: [
            '就職に向けた訓練',
            '職場実習の機会',
            '就職活動支援',
            '就職後の定着支援'
          ],
          centerCount: 1523
        },
        {
          id: 'life-care',
          name: '生活介護',
          icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
          description: '常時介護が必要な方に、日中の活動の場を提供し、生活支援を行うサービスです。',
          features: [
            '日常生活の支援',
            '創作活動・生産活動',
            '身体機能の維持向上',
            '社会参加の促進'
          ],
          centerCount: 1021
        }
      ]
    }
  }
}
</script>