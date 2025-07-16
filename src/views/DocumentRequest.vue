<template>
  <div class="min-h-screen bg-gray-50">
    <!-- ヒーローセクション -->
    <section class="bg-gradient-to-br from-secondary-500 to-secondary-600 text-white py-12">
      <div class="container">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">無料資料請求</h1>
          <p class="text-xl opacity-90 mb-6">
            気になる事業所の詳しい資料を無料でお送りします
          </p>
          <div class="flex justify-center gap-6 text-sm">
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <span>完全無料</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <span>最短即日発送</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <span>複数施設OK</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container py-8 -mt-8">
      <div class="bg-white rounded-xl shadow-lg p-8">
        <!-- プログレスバー -->
        <div class="mb-8">
          <div class="flex items-center justify-between mb-4">
            <div v-for="step in steps" :key="step.number" class="flex items-center">
              <div 
                class="w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300"
                :class="currentStep >= step.number ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-500'"
              >
                {{ step.number }}
              </div>
              <span class="ml-2 text-sm font-medium" :class="currentStep >= step.number ? 'text-gray-900' : 'text-gray-500'">
                {{ step.label }}
              </span>
              <div v-if="step.number < steps.length" class="w-16 h-1 mx-2 rounded" :class="currentStep > step.number ? 'bg-primary-500' : 'bg-gray-200'"></div>
            </div>
          </div>
        </div>

        <!-- ステップ1: 施設選択 -->
        <div v-if="currentStep === 1">
          <h2 class="text-2xl font-bold mb-6">資料請求する事業所を選択</h2>
          
          <!-- 検索フィルター -->
          <div class="bg-gray-50 rounded-lg p-4 mb-6">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label class="form-label">地域</label>
                <select v-model="filters.area" class="form-select">
                  <option value="">すべて</option>
                  <option value="tokyo">東京都</option>
                  <option value="osaka">大阪府</option>
                  <option value="kanagawa">神奈川県</option>
                </select>
              </div>
              <div>
                <label class="form-label">サービス種別</label>
                <select v-model="filters.service" class="form-select">
                  <option value="">すべて</option>
                  <option value="transition">就労移行支援</option>
                  <option value="a-type">就労継続支援A型</option>
                  <option value="b-type">就労継続支援B型</option>
                </select>
              </div>
              <div>
                <label class="form-label">キーワード</label>
                <input type="text" v-model="filters.keyword" class="form-input" placeholder="施設名など">
              </div>
            </div>
          </div>

          <!-- 選択済み施設数 -->
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-semibold">事業所一覧</h3>
            <div class="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-medium">
              選択中: {{ selectedCenters.length }}件
            </div>
          </div>

          <!-- 施設リスト -->
          <div class="space-y-4 mb-6 max-h-96 overflow-y-auto">
            <div v-for="center in filteredCenters" :key="center.id" 
              class="border rounded-lg p-4 cursor-pointer transition-all duration-200"
              :class="isSelected(center.id) ? 'border-primary-500 bg-primary-50' : 'border-gray-200 hover:border-gray-300'"
              @click="toggleCenter(center.id)"
            >
              <div class="flex items-start gap-4">
                <div class="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <img :src="center.image" :alt="center.name" class="w-full h-full object-cover">
                </div>
                <div class="flex-1">
                  <div class="flex items-start justify-between mb-2">
                    <h4 class="font-semibold text-lg">{{ center.name }}</h4>
                    <div class="w-6 h-6 rounded border-2 flex items-center justify-center transition-all duration-200"
                      :class="isSelected(center.id) ? 'bg-primary-500 border-primary-500' : 'border-gray-300'"
                    >
                      <svg v-if="isSelected(center.id)" class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="flex items-center gap-4 text-sm text-gray-600 mb-2">
                    <span>{{ center.location }}</span>
                    <span class="bg-gray-100 px-2 py-1 rounded">{{ center.serviceType }}</span>
                  </div>
                  <p class="text-sm text-gray-700">{{ center.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 一括選択ボタン -->
          <div class="flex gap-4 mb-6">
            <button @click="selectAll" class="btn btn-outline-primary">
              すべて選択
            </button>
            <button @click="clearSelection" class="btn btn-outline-secondary">
              選択をクリア
            </button>
          </div>

          <!-- 次へボタン -->
          <div class="flex justify-end">
            <button 
              @click="nextStep" 
              :disabled="selectedCenters.length === 0"
              class="btn btn-primary btn-lg px-8"
              :class="selectedCenters.length === 0 ? 'opacity-50 cursor-not-allowed' : ''"
            >
              次へ進む
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- ステップ2: 情報入力 -->
        <div v-if="currentStep === 2">
          <h2 class="text-2xl font-bold mb-6">お客様情報の入力</h2>
          
          <form @submit.prevent="nextStep" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="form-label required">お名前</label>
                <input type="text" v-model="formData.name" class="form-input" required>
              </div>
              <div>
                <label class="form-label required">フリガナ</label>
                <input type="text" v-model="formData.kana" class="form-input" required>
              </div>
              <div>
                <label class="form-label required">メールアドレス</label>
                <input type="email" v-model="formData.email" class="form-input" required>
              </div>
              <div>
                <label class="form-label required">電話番号</label>
                <input type="tel" v-model="formData.phone" class="form-input" required>
              </div>
              <div>
                <label class="form-label">郵便番号</label>
                <input type="text" v-model="formData.zipcode" class="form-input" placeholder="123-4567">
              </div>
              <div>
                <label class="form-label">都道府県</label>
                <select v-model="formData.prefecture" class="form-select">
                  <option value="">選択してください</option>
                  <option value="tokyo">東京都</option>
                  <option value="osaka">大阪府</option>
                  <option value="kanagawa">神奈川県</option>
                </select>
              </div>
              <div class="md:col-span-2">
                <label class="form-label">住所</label>
                <input type="text" v-model="formData.address" class="form-input">
              </div>
              <div class="md:col-span-2">
                <label class="form-label">お問い合わせ内容・ご要望</label>
                <textarea v-model="formData.message" class="form-textarea" rows="4" placeholder="特にお知りになりたい情報などがございましたらご記入ください"></textarea>
              </div>
            </div>

            <!-- プライバシーポリシー同意 -->
            <div class="bg-gray-50 rounded-lg p-4">
              <label class="flex items-start">
                <input type="checkbox" v-model="formData.agree" class="mt-1 mr-3" required>
                <span class="text-sm">
                  <a href="/privacy" target="_blank" class="text-primary-500 hover:text-primary-600">プライバシーポリシー</a>
                  に同意の上、資料請求します
                </span>
              </label>
            </div>

            <!-- ボタン -->
            <div class="flex justify-between">
              <button type="button" @click="prevStep" class="btn btn-outline">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                戻る
              </button>
              <button type="submit" class="btn btn-primary btn-lg px-8">
                確認画面へ
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </form>
        </div>

        <!-- ステップ3: 確認 -->
        <div v-if="currentStep === 3">
          <h2 class="text-2xl font-bold mb-6">入力内容の確認</h2>
          
          <!-- 選択した施設 -->
          <div class="mb-8">
            <h3 class="text-lg font-semibold mb-4">資料請求する事業所</h3>
            <div class="bg-gray-50 rounded-lg p-4">
              <div class="space-y-2">
                <div v-for="centerId in selectedCenters" :key="centerId" class="flex items-center gap-3">
                  <svg class="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span>{{ getCenterName(centerId) }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- お客様情報 -->
          <div class="mb-8">
            <h3 class="text-lg font-semibold mb-4">お客様情報</h3>
            <div class="bg-gray-50 rounded-lg p-4">
              <dl class="space-y-2">
                <div class="flex">
                  <dt class="w-32 text-gray-600">お名前：</dt>
                  <dd class="font-medium">{{ formData.name }}</dd>
                </div>
                <div class="flex">
                  <dt class="w-32 text-gray-600">メール：</dt>
                  <dd class="font-medium">{{ formData.email }}</dd>
                </div>
                <div class="flex">
                  <dt class="w-32 text-gray-600">電話番号：</dt>
                  <dd class="font-medium">{{ formData.phone }}</dd>
                </div>
                <div v-if="formData.message" class="flex">
                  <dt class="w-32 text-gray-600">ご要望：</dt>
                  <dd class="font-medium">{{ formData.message }}</dd>
                </div>
              </dl>
            </div>
          </div>

          <!-- 送信ボタン -->
          <div class="flex justify-between">
            <button @click="prevStep" class="btn btn-outline">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              戻る
            </button>
            <button @click="submit" class="btn btn-primary btn-lg px-8 shadow-lg transform hover:scale-105 transition-all duration-200">
              <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              資料請求を送信
            </button>
          </div>
        </div>

        <!-- 完了画面 -->
        <div v-if="currentStep === 4" class="text-center py-12">
          <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-10 h-10 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <h2 class="text-3xl font-bold mb-4">資料請求が完了しました</h2>
          <p class="text-lg text-gray-600 mb-8">
            ご登録いただいたメールアドレスに確認メールをお送りしました。<br>
            資料は最短即日発送いたします。
          </p>
          <div class="bg-primary-50 rounded-lg p-6 max-w-2xl mx-auto mb-8">
            <h3 class="font-semibold mb-3">次のステップ</h3>
            <p class="text-sm text-gray-700 mb-4">
              資料をご覧いただき、気になる事業所がございましたら、ぜひ見学予約もご検討ください。
              実際の雰囲気を体験することで、より具体的なイメージを持つことができます。
            </p>
            <router-link to="/tour-booking" class="btn btn-primary">
              見学予約はこちら
            </router-link>
          </div>
          <router-link to="/" class="btn btn-outline">
            トップページへ戻る
          </router-link>
        </div>
      </div>
    </div>

    <!-- サポート情報 -->
    <section class="bg-gray-100 py-8 mt-8">
      <div class="container">
        <div class="text-center mb-6">
          <h3 class="text-xl font-semibold">お困りの場合はお気軽にお問い合わせください</h3>
        </div>
        <div class="flex justify-center gap-8">
          <div class="flex items-center gap-3">
            <svg class="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            <div>
              <p class="text-sm text-gray-600">お電話でのお問い合わせ</p>
              <p class="font-semibold">0120-XXX-XXX</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <svg class="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div>
              <p class="text-sm text-gray-600">受付時間</p>
              <p class="font-semibold">平日 9:00〜18:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'DocumentRequest',
  data() {
    return {
      currentStep: 1,
      steps: [
        { number: 1, label: '施設選択' },
        { number: 2, label: '情報入力' },
        { number: 3, label: '確認' },
        { number: 4, label: '完了' }
      ],
      selectedCenters: [],
      filters: {
        area: '',
        service: '',
        keyword: ''
      },
      formData: {
        name: '',
        kana: '',
        email: '',
        phone: '',
        zipcode: '',
        prefecture: '',
        address: '',
        message: '',
        agree: false
      },
      centers: [
        {
          id: 1,
          name: 'さくらワークセンター',
          location: '東京都新宿区',
          serviceType: '就労移行支援',
          description: 'IT分野に特化した就労移行支援事業所です。',
          image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop'
        },
        {
          id: 2,
          name: 'みらい就労支援事業所',
          location: '大阪府大阪市',
          serviceType: '就労継続支援A型',
          description: '製造業務を中心とした安定した就労環境を提供します。',
          image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=300&fit=crop'
        },
        {
          id: 3,
          name: 'ステップアップ横浜',
          location: '神奈川県横浜市',
          serviceType: '就労移行支援',
          description: '事務職・接客業への就労を目指す方をサポートします。',
          image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop'
        }
      ]
    }
  },
  computed: {
    filteredCenters() {
      return this.centers.filter(center => {
        const areaMatch = !this.filters.area || center.location.includes(this.getAreaName(this.filters.area))
        const serviceMatch = !this.filters.service || this.matchService(center.serviceType, this.filters.service)
        const keywordMatch = !this.filters.keyword || 
          center.name.includes(this.filters.keyword) || 
          center.description.includes(this.filters.keyword)
        return areaMatch && serviceMatch && keywordMatch
      })
    }
  },
  methods: {
    isSelected(centerId) {
      return this.selectedCenters.includes(centerId)
    },
    toggleCenter(centerId) {
      const index = this.selectedCenters.indexOf(centerId)
      if (index > -1) {
        this.selectedCenters.splice(index, 1)
      } else {
        this.selectedCenters.push(centerId)
      }
    },
    selectAll() {
      this.selectedCenters = this.filteredCenters.map(c => c.id)
    },
    clearSelection() {
      this.selectedCenters = []
    },
    getCenterName(centerId) {
      const center = this.centers.find(c => c.id === centerId)
      return center ? center.name : ''
    },
    getAreaName(value) {
      const areaMap = {
        'tokyo': '東京都',
        'osaka': '大阪府',
        'kanagawa': '神奈川県'
      }
      return areaMap[value] || value
    },
    matchService(centerService, filterValue) {
      const serviceMap = {
        'transition': '就労移行支援',
        'a-type': '就労継続支援A型',
        'b-type': '就労継続支援B型'
      }
      return centerService === serviceMap[filterValue]
    },
    nextStep() {
      if (this.currentStep === 2) {
        // フォームバリデーション
        if (!this.formData.name || !this.formData.email || !this.formData.phone || !this.formData.agree) {
          alert('必須項目を入力してください')
          return
        }
      }
      this.currentStep++
    },
    prevStep() {
      this.currentStep--
    },
    submit() {
      // 送信処理
      console.log('資料請求送信:', {
        centers: this.selectedCenters,
        formData: this.formData
      })
      this.currentStep = 4
    }
  }
}
</script>

<style scoped>
.form-label.required::after {
  content: ' *';
  color: #ef4444;
}
</style>