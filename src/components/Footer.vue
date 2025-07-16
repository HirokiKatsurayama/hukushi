<template>
  <footer class="bg-gray-900 text-white" role="contentinfo">
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-12">
        <!-- Company Info -->
        <div class="lg:col-span-2">
          <div class="mb-4">
            <span class="text-2xl font-bold text-white">福祉の窓口</span>
          </div>
          <p class="text-gray-300 mb-6 leading-relaxed">
            一人ひとりの可能性を最大化する、新しい福祉就労支援プラットフォーム
          </p>
          <div class="text-gray-300">
            <p class="mb-2">
              フリーダイヤル：<a href="tel:0120-951-712" class="text-white hover:text-primary-400 transition-colors">0120-951-712</a>
            </p>
            <p>受付時間：平日9:00-18:00</p>
          </div>
        </div>

        <!-- 検索・閲覧 -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-white">事業所を探す</h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/centers" class="text-gray-300 hover:text-white transition-colors">
                事業所検索
              </router-link>
            </li>
            <li>
              <router-link to="/services" class="text-gray-300 hover:text-white transition-colors">
                サービス種別から探す
              </router-link>
            </li>
            <li>
              <router-link to="/areas" class="text-gray-300 hover:text-white transition-colors">
                地域から探す
              </router-link>
            </li>
            <li>
              <router-link to="/featured" class="text-gray-300 hover:text-white transition-colors">
                特集・おすすめ
              </router-link>
            </li>
          </ul>
        </div>

        <!-- 情報・サポート -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-white">情報・サポート</h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/guide" class="text-gray-300 hover:text-white transition-colors">
                お役立ち情報
              </router-link>
            </li>
            <li>
              <router-link to="/reviews" class="text-gray-300 hover:text-white transition-colors">
                口コミ・評価
              </router-link>
            </li>
            <li>
              <router-link to="/guide#faq" class="text-gray-300 hover:text-white transition-colors">
                よくある質問
              </router-link>
            </li>
            <li>
              <router-link to="/contact" class="text-gray-300 hover:text-white transition-colors">
                お問い合わせ
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-white">お問い合わせ</h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/contact" class="text-gray-300 hover:text-white transition-colors">
                無料相談
              </router-link>
            </li>
            <li>
              <router-link to="/contact#seminar" class="text-gray-300 hover:text-white transition-colors">
                説明会予約
              </router-link>
            </li>
            <li>
              <router-link to="/document-request" class="text-gray-300 hover:text-white transition-colors">
                資料請求
              </router-link>
            </li>
            <li>
              <router-link to="/contact#general" class="text-gray-300 hover:text-white transition-colors">
                一般お問い合わせ
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="border-t border-gray-800 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-4 md:mb-0">
            <ul class="flex flex-wrap justify-center md:justify-start space-x-6">
              <li>
                <router-link to="/privacy" class="text-gray-300 hover:text-white text-sm transition-colors">
                  プライバシーポリシー
                </router-link>
              </li>
              <li>
                <router-link to="/terms" class="text-gray-300 hover:text-white text-sm transition-colors">
                  利用規約
                </router-link>
              </li>
              <li>
                <router-link to="/company" class="text-gray-300 hover:text-white text-sm transition-colors">
                  会社情報
                </router-link>
              </li>
              <li>
                <router-link to="/sitemap" class="text-gray-300 hover:text-white text-sm transition-colors">
                  サイトマップ
                </router-link>
              </li>
            </ul>
          </div>
          <div class="text-gray-400 text-sm">
            <p>&copy; 2024 福祉の窓口. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>