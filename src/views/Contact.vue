<template>
  <div class="bg-gray-50 min-h-screen">
    <div class="container py-12">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">お問い合わせ</h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          お気軽にお問い合わせください。専門スタッフが丁寧に対応いたします。
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- お問い合わせフォーム -->
        <div class="card">
          <div class="card-header">
            <h2 class="text-xl font-semibold text-gray-900">お問い合わせフォーム</h2>
          </div>
          <div class="card-body">
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="form-label">お名前 <span class="text-red-500">*</span></label>
                  <input 
                    v-model="form.name" 
                    type="text" 
                    class="form-input" 
                    required 
                    placeholder="山田太郎"
                  >
                </div>
                <div>
                  <label class="form-label">メールアドレス <span class="text-red-500">*</span></label>
                  <input 
                    v-model="form.email" 
                    type="email" 
                    class="form-input" 
                    required 
                    placeholder="example@email.com"
                  >
                </div>
              </div>
              
              <div>
                <label class="form-label">電話番号</label>
                <input 
                  v-model="form.phone" 
                  type="tel" 
                  class="form-input" 
                  placeholder="03-0000-0000"
                >
              </div>
              
              <div>
                <label class="form-label">お問い合わせ種別 <span class="text-red-500">*</span></label>
                <select v-model="form.type" class="form-select" required>
                  <option value="">選択してください</option>
                  <option value="consultation">無料相談</option>
                  <option value="service">サービスについて</option>
                  <option value="center">事業所について</option>
                  <option value="other">その他</option>
                </select>
              </div>
              
              <div>
                <label class="form-label">お問い合わせ内容 <span class="text-red-500">*</span></label>
                <textarea 
                  v-model="form.message" 
                  class="form-textarea" 
                  rows="5" 
                  required 
                  placeholder="お問い合わせ内容をご記入ください"
                ></textarea>
              </div>
              
              <div class="flex items-center">
                <input 
                  v-model="form.privacy" 
                  type="checkbox" 
                  class="mr-2" 
                  required
                >
                <label class="text-sm text-gray-600">
                  <router-link to="/privacy" class="text-primary-500 hover:underline">プライバシーポリシー</router-link>に同意する
                </label>
              </div>
              
              <button type="submit" class="btn btn-primary w-full">
                送信する
              </button>
            </form>
          </div>
        </div>

        <!-- 連絡先情報 -->
        <div class="space-y-6">
          <div class="card">
            <div class="card-header">
              <h3 class="text-xl font-semibold text-gray-900">お電話でのお問い合わせ</h3>
            </div>
            <div class="card-body">
              <div class="text-center">
                <div class="text-3xl font-bold text-primary-500 mb-2">0120-951-712</div>
                <p class="text-gray-600">受付時間：平日9:00-18:00</p>
                <p class="text-sm text-gray-500 mt-2">土日祝日はお休みをいただいております</p>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h3 class="text-xl font-semibold text-gray-900">オフィス情報</h3>
            </div>
            <div class="card-body">
              <div class="space-y-4">
                <div>
                  <h4 class="font-medium text-gray-900">東京本社</h4>
                  <p class="text-gray-600">〒100-0001 東京都千代田区千代田1-1-1</p>
                  <p class="text-gray-600">TEL: 03-0000-0000</p>
                </div>
                <div>
                  <h4 class="font-medium text-gray-900">大阪支社</h4>
                  <p class="text-gray-600">〒530-0001 大阪府大阪市北区梅田1-1-1</p>
                  <p class="text-gray-600">TEL: 06-0000-0000</p>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h3 class="text-xl font-semibold text-gray-900">相談会・説明会</h3>
            </div>
            <div class="card-body">
              <p class="text-gray-600 mb-4">
                定期的に相談会や説明会を開催しています。お気軽にご参加ください。
              </p>
              <ul class="space-y-2 text-sm text-gray-600">
                <li>• 毎月第2土曜日：個別相談会</li>
                <li>• 毎月第4木曜日：サービス説明会</li>
                <li>• 随時：オンライン相談会</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        type: '',
        message: '',
        privacy: false
      }
    }
  },
  methods: {
    submitForm() {
      // フォーム送信処理
      console.log('フォーム送信:', this.form)
      alert('お問い合わせを受け付けました。担当者より連絡いたします。')
      
      // フォームをリセット
      this.form = {
        name: '',
        email: '',
        phone: '',
        type: '',
        message: '',
        privacy: false
      }
    }
  }
}
</script>