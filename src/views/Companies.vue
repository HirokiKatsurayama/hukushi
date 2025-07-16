<template>
  <div class="bg-gray-50 min-h-screen">
    <div class="container py-12">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">企業・求人</h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          障害者雇用に積極的な企業と求人情報をご紹介します
        </p>
      </div>

      <!-- 企業一覧 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="company in companies" :key="company.id" class="card">
          <div class="card-body">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                <span class="text-primary-500 font-bold">{{ company.name.charAt(0) }}</span>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900">{{ company.name }}</h3>
                <p class="text-sm text-gray-600">{{ company.industry }}</p>
              </div>
            </div>
            
            <p class="text-gray-600 mb-4">{{ company.description }}</p>
            
            <div class="mb-4">
              <h4 class="text-sm font-medium text-gray-900 mb-2">求人情報</h4>
              <div class="space-y-2">
                <div v-for="job in company.jobs" :key="job.id" class="flex justify-between items-center">
                  <span class="text-sm text-gray-600">{{ job.title }}</span>
                  <span class="text-sm font-medium text-primary-500">{{ job.salary }}</span>
                </div>
              </div>
            </div>
            
            <div class="flex gap-2">
              <button class="btn btn-primary flex-1">詳細を見る</button>
              <button class="btn btn-outline flex-1">応募する</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Companies',
  data() {
    return {
      companies: [
        {
          id: 1,
          name: '株式会社テックソリューション',
          industry: 'IT・情報通信',
          description: 'IT分野で障害者雇用を積極的に推進している企業です。在宅勤務制度も充実しています。',
          jobs: [
            { id: 1, title: 'データ入力', salary: '月給18万円〜' },
            { id: 2, title: 'システム運用', salary: '月給22万円〜' }
          ]
        },
        {
          id: 2,
          name: '株式会社グリーンファクトリー',
          industry: '製造業',
          description: '製造業界でのパイオニア企業。障害者の特性を活かした職場環境を提供しています。',
          jobs: [
            { id: 3, title: '軽作業', salary: '時給900円〜' },
            { id: 4, title: '品質管理', salary: '月給20万円〜' }
          ]
        },
        {
          id: 3,
          name: '株式会社ユニバーサルサービス',
          industry: 'サービス業',
          description: 'サービス業界で多様な人材を活用し、お客様により良いサービスを提供しています。',
          jobs: [
            { id: 5, title: '事務職', salary: '月給17万円〜' },
            { id: 6, title: '接客', salary: '時給950円〜' }
          ]
        }
      ]
    }
  }
}
</script>