<template>
  <div class="bg-gray-50 min-h-screen">
    <div class="container py-12">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">管理者ダッシュボード</h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          システムの管理と運営状況を確認できます
        </p>
      </div>

      <!-- 統計情報 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div class="card">
          <div class="card-body text-center">
            <div class="text-3xl font-bold text-primary-500 mb-2">1,234</div>
            <div class="text-gray-600">登録利用者数</div>
          </div>
        </div>
        <div class="card">
          <div class="card-body text-center">
            <div class="text-3xl font-bold text-secondary-500 mb-2">567</div>
            <div class="text-gray-600">就職成功者数</div>
          </div>
        </div>
        <div class="card">
          <div class="card-body text-center">
            <div class="text-3xl font-bold text-accent-500 mb-2">89</div>
            <div class="text-gray-600">新規お問い合わせ</div>
          </div>
        </div>
        <div class="card">
          <div class="card-body text-center">
            <div class="text-3xl font-bold text-orange-500 mb-2">45</div>
            <div class="text-gray-600">アクティブ事業所</div>
          </div>
        </div>
      </div>

      <!-- 管理メニュー -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="card">
          <div class="card-header">
            <h3 class="text-xl font-semibold text-gray-900">利用者管理</h3>
          </div>
          <div class="card-body">
            <p class="text-gray-600 mb-4">利用者情報の管理と進捗状況の確認</p>
            <div class="space-y-2">
              <button class="btn btn-outline w-full">利用者一覧</button>
              <button class="btn btn-outline w-full">進捗管理</button>
              <button class="btn btn-outline w-full">レポート作成</button>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <h3 class="text-xl font-semibold text-gray-900">事業所管理</h3>
          </div>
          <div class="card-body">
            <p class="text-gray-600 mb-4">事業所情報の管理と連携状況の確認</p>
            <div class="space-y-2">
              <button class="btn btn-outline w-full">事業所一覧</button>
              <button class="btn btn-outline w-full">新規登録</button>
              <button class="btn btn-outline w-full">連携状況</button>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <h3 class="text-xl font-semibold text-gray-900">企業管理</h3>
          </div>
          <div class="card-body">
            <p class="text-gray-600 mb-4">企業情報と求人情報の管理</p>
            <div class="space-y-2">
              <button class="btn btn-outline w-full">企業一覧</button>
              <button class="btn btn-outline w-full">求人管理</button>
              <button class="btn btn-outline w-full">マッチング状況</button>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <h3 class="text-xl font-semibold text-gray-900">お問い合わせ管理</h3>
          </div>
          <div class="card-body">
            <p class="text-gray-600 mb-4">お問い合わせの確認と対応状況の管理</p>
            <div class="space-y-2">
              <button class="btn btn-outline w-full">新着問い合わせ</button>
              <button class="btn btn-outline w-full">対応履歴</button>
              <button class="btn btn-outline w-full">FAQ管理</button>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <h3 class="text-xl font-semibold text-gray-900">コンテンツ管理</h3>
          </div>
          <div class="card-body">
            <p class="text-gray-600 mb-4">サイトコンテンツの管理と更新</p>
            <div class="space-y-2">
              <button class="btn btn-outline w-full">ニュース管理</button>
              <button class="btn btn-outline w-full">成功事例</button>
              <button class="btn btn-outline w-full">プログラム管理</button>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <h3 class="text-xl font-semibold text-gray-900">システム設定</h3>
          </div>
          <div class="card-body">
            <p class="text-gray-600 mb-4">システム設定と管理者権限の管理</p>
            <div class="space-y-2">
              <button class="btn btn-outline w-full">管理者設定</button>
              <button class="btn btn-outline w-full">バックアップ</button>
              <button class="btn btn-outline w-full">ログ確認</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Admin'
}
</script>