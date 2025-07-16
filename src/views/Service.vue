<template>
  <div class="bg-gray-50 min-h-screen">
    <div class="container py-12">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">サービス概要</h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          利用者、企業、支援者それぞれのニーズに応じた包括的なサービスを提供します
        </p>
      </div>

      <!-- Service Cards -->
      <div class="space-y-16">
        <!-- 利用者向けサービス -->
        <section id="users" class="card">
          <div class="card-body">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 class="text-3xl font-bold text-gray-900 mb-4">利用者向けサービス</h2>
                <p class="text-gray-600 mb-6">
                  個別最適化されたカリキュラムと就労支援プログラムで、一人ひとりの特性に応じた支援を提供します。
                </p>
                <ul class="space-y-3 mb-6">
                  <li class="flex items-start">
                    <span class="text-accent-500 mr-2 mt-1">✓</span>
                    <span>個別支援計画の作成と定期的な見直し</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-accent-500 mr-2 mt-1">✓</span>
                    <span>200種類以上の多様な訓練プログラム</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-accent-500 mr-2 mt-1">✓</span>
                    <span>VR技術を活用した職場体験</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-accent-500 mr-2 mt-1">✓</span>
                    <span>就職後3年半の継続サポート</span>
                  </li>
                </ul>
                <router-link to="/contact" class="btn btn-primary">
                  詳細を問い合わせる
                </router-link>
              </div>
              <div class="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=400&fit=crop"
                  alt="利用者向けサービス"
                  class="rounded-lg shadow-lg w-full max-w-md mx-auto"
                >
              </div>
            </div>
          </div>
        </section>

        <!-- 企業向けサービス -->
        <section id="companies" class="card">
          <div class="card-body">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div class="order-2 lg:order-1 text-center">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=400&fit=crop"
                  alt="企業向けサービス"
                  class="rounded-lg shadow-lg w-full max-w-md mx-auto"
                >
              </div>
              <div class="order-1 lg:order-2">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">企業向けサービス</h2>
                <p class="text-gray-600 mb-6">
                  人材マッチングから雇用後の定着支援まで、企業の多様性推進を総合的にサポートします。
                </p>
                <ul class="space-y-3 mb-6">
                  <li class="flex items-start">
                    <span class="text-accent-500 mr-2 mt-1">✓</span>
                    <span>AIを活用した精度の高い人材マッチング</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-accent-500 mr-2 mt-1">✓</span>
                    <span>障害者雇用に関する専門コンサルティング</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-accent-500 mr-2 mt-1">✓</span>
                    <span>管理者・同僚向け研修プログラム</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-accent-500 mr-2 mt-1">✓</span>
                    <span>定着支援とフォローアップ体制</span>
                  </li>
                </ul>
                <router-link to="/contact" class="btn btn-primary">
                  詳細を問い合わせる
                </router-link>
              </div>
            </div>
          </div>
        </section>

        <!-- 支援者向けサービス -->
        <section id="supporters" class="card">
          <div class="card-body">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 class="text-3xl font-bold text-gray-900 mb-4">支援者向けサービス</h2>
                <p class="text-gray-600 mb-6">
                  支援者の業務効率化と利用者の成果向上を実現するデジタルツールとデータ分析を提供します。
                </p>
                <ul class="space-y-3 mb-6">
                  <li class="flex items-start">
                    <span class="text-accent-500 mr-2 mt-1">✓</span>
                    <span>デジタル化された進捗管理システム</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-accent-500 mr-2 mt-1">✓</span>
                    <span>データ分析とレポート機能</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-accent-500 mr-2 mt-1">✓</span>
                    <span>多機関連携支援ツール</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-accent-500 mr-2 mt-1">✓</span>
                    <span>効果測定と改善提案機能</span>
                  </li>
                </ul>
                <router-link to="/contact" class="btn btn-primary">
                  詳細を問い合わせる
                </router-link>
              </div>
              <div class="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500&h=400&fit=crop"
                  alt="支援者向けサービス"
                  class="rounded-lg shadow-lg w-full max-w-md mx-auto"
                >
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Service'
}
</script>