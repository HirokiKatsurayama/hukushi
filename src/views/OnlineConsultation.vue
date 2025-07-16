<template>
  <div class="min-h-screen bg-gray-50">
    <!-- ヒーローセクション -->
    <section class="relative bg-gradient-to-br from-teal-400 to-teal-500 text-white py-12 overflow-hidden">
      <!-- 背景画像 -->
      <div class="absolute inset-0 z-0">
        <img 
          :src="pcLearning" 
          alt="PCを使った学習の様子"
          class="w-full h-full object-cover opacity-20"
        >
        <div class="absolute inset-0 bg-gradient-to-br from-teal-400/80 to-teal-500/80"></div>
      </div>
      
      <div class="container relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">オンライン無料相談</h1>
          <p class="text-xl opacity-90 mb-6 drop-shadow-md">
            Zoomで福祉の専門スタッフとオンライン面談ができます
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
              <span>全国対応</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <span>当日予約OK</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container py-4 sm:py-8 -mt-4 sm:-mt-8">
      <div class="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
        <!-- プログレスバー -->
        <div class="mb-8">
          <div class="flex items-center justify-between mb-4">
            <div v-for="step in steps" :key="step.number" class="flex items-center">
              <div 
                class="w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300"
                :class="currentStep >= step.number ? 'bg-teal-400 text-white' : 'bg-gray-200 text-gray-500'"
              >
                <svg v-if="currentStep > step.number" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span v-else>{{ step.number }}</span>
              </div>
              <span class="ml-2 text-sm font-medium hidden md:block" :class="currentStep >= step.number ? 'text-gray-900' : 'text-gray-500'">
                {{ step.label }}
              </span>
              <div v-if="step.number < steps.length" class="w-8 md:w-16 h-1 mx-2 rounded" :class="currentStep > step.number ? 'bg-teal-400' : 'bg-gray-200'"></div>
            </div>
          </div>
        </div>

        <!-- ステップ1: 相談内容選択 -->
        <div v-if="currentStep === 1">
          <h2 class="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">相談内容を選択してください</h2>
          
          <!-- 相談内容の選択 -->
          <div class="mb-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div v-for="topic in consultationTopics" :key="topic.id" 
                class="border rounded-lg p-3 sm:p-4 cursor-pointer hover:border-teal-400 transition-all duration-200"
                :class="selectedTopic === topic.id ? 'border-teal-400 bg-teal-50' : 'border-gray-200'"
                @click="selectTopicAndProceed(topic.id)"
              >
                <div class="flex items-start gap-3 sm:gap-4">
                  <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="topic.icon"></path>
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <h3 class="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{{ topic.title }}</h3>
                    <p class="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 line-clamp-2">{{ topic.description }}</p>
                    <div class="flex items-center gap-1 sm:gap-2">
                      <span class="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded">{{ topic.duration }}</span>
                      <span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">{{ topic.availability }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 急いでいる場合の案内 -->
          <div class="bg-orange-50 rounded-lg p-4 mb-6">
            <h3 class="font-semibold mb-2 flex items-center text-orange-800">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path>
              </svg>
              お急ぎの場合
            </h3>
            <p class="text-sm text-orange-700 mb-3">
              緊急性の高いご相談は、まずお電話でご連絡ください。専門スタッフが迅速に対応いたします。
            </p>
            <div class="flex items-center gap-4">
              <a href="tel:0120-951-712" class="inline-flex items-center text-orange-700 hover:text-orange-800">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                0120-951-712
              </a>
              <span class="text-xs text-orange-600">平日 9:00-18:00</span>
            </div>
          </div>

        </div>

        <!-- ステップ2: 日付選択 -->
        <div v-if="currentStep === 2">
          <h2 class="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">相談日を選択</h2>
          
          <div class="max-w-2xl mx-auto">
            <!-- カレンダー -->
            <div>
              <h3 class="font-semibold mb-4">日付を選択してください</h3>
              <div class="bg-gray-50 rounded-lg p-4">
                <div class="grid grid-cols-7 gap-2 mb-4">
                  <div v-for="day in ['日', '月', '火', '水', '木', '金', '土']" :key="day" class="text-center text-sm font-medium text-gray-700">
                    {{ day }}
                  </div>
                </div>
                <div class="grid grid-cols-7 gap-2">
                  <div v-for="date in calendarDates" :key="date.day"
                    class="aspect-square flex items-center justify-center rounded-lg cursor-pointer transition-all duration-200"
                    :class="getDateClass(date)"
                    @click="selectDateAndProceed(date)"
                  >
                    <span class="text-sm">{{ date.day }}</span>
                  </div>
                </div>
              </div>
              
              <!-- 凡例 -->
              <div class="flex items-center gap-4 mt-4 text-sm justify-center">
                <div class="flex items-center gap-2">
                  <div class="w-4 h-4 bg-teal-100 rounded"></div>
                  <span>予約可能</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-4 h-4 bg-orange-100 rounded"></div>
                  <span>残りわずか</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-4 h-4 bg-gray-100 rounded"></div>
                  <span>予約不可</span>
                </div>
              </div>
            </div>
          </div>

          <!-- ボタン -->
          <div class="flex justify-center mt-8">
            <button @click="prevStep" class="btn btn-outline">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              戻る
            </button>
          </div>
        </div>

        <!-- ステップ3: 時間選択 -->
        <div v-if="currentStep === 3">
          <h2 class="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">相談時間を選択</h2>
          
          <div class="max-w-2xl mx-auto">
            <!-- 選択した日付の表示 -->
            <div class="bg-teal-50 rounded-lg p-4 mb-6">
              <p class="font-semibold text-teal-800">
                選択した日付: {{ formatDate(selectedDate) }}
              </p>
            </div>

            <!-- 時間帯選択 -->
            <div>
              <p class="text-sm font-medium mb-3">相談時間（所要時間：約{{ getSelectedTopicDuration() }}）</p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button v-for="time in availableTimes" :key="time.value"
                  @click="selectTimeAndProceed(time.value)"
                  class="p-3 rounded-lg border transition-all duration-200"
                  :class="selectedTime === time.value 
                    ? 'border-teal-400 bg-teal-50 text-teal-700' 
                    : time.available 
                      ? 'border-gray-200 hover:border-gray-300' 
                      : 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'"
                  :disabled="!time.available"
                >
                  <p class="font-medium">{{ time.label }}</p>
                  <p class="text-xs mt-1">{{ time.status }}</p>
                </button>
              </div>
            </div>
          </div>

          <!-- ボタン -->
          <div class="flex justify-center mt-8">
            <button @click="prevStep" class="btn btn-outline">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              戻る
            </button>
          </div>
        </div>

        <!-- ステップ4: 情報入力 -->
        <div v-if="currentStep === 4">
          <h2 class="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">お客様情報の入力</h2>
          
          <form @submit.prevent="nextStep" class="space-y-6">
            <!-- 基本情報 -->
            <div>
              <h3 class="font-semibold mb-4">基本情報</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
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
              </div>
            </div>

            <!-- 相談者情報 -->
            <div>
              <h3 class="font-semibold mb-4">相談者について</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label class="form-label">相談者のお立場</label>
                  <select v-model="formData.relationship" class="form-select">
                    <option value="">選択してください</option>
                    <option value="本人">ご本人</option>
                    <option value="家族">ご家族</option>
                    <option value="支援者">支援者・相談員</option>
                    <option value="その他">その他</option>
                  </select>
                </div>
                <div>
                  <label class="form-label">年齢</label>
                  <select v-model="formData.age" class="form-select">
                    <option value="">選択してください</option>
                    <option value="20代">20代</option>
                    <option value="30代">30代</option>
                    <option value="40代">40代</option>
                    <option value="50代">50代</option>
                    <option value="60代以上">60代以上</option>
                  </select>
                </div>
              </div>
            </div>


            <!-- プライバシーポリシー同意 -->
            <div class="bg-gray-50 rounded-lg p-3 sm:p-4">
              <label class="flex items-start cursor-pointer hover:bg-gray-100 rounded-lg p-2 sm:p-3 transition-colors">
                <input type="checkbox" v-model="formData.agree" class="w-5 h-5 mt-1 mr-3 sm:mr-4 text-teal-500 border-2 border-gray-300 rounded focus:ring-teal-500 focus:ring-2" required>
                <span class="text-sm sm:text-base leading-relaxed">
                  <a href="/privacy" target="_blank" class="text-teal-500 hover:text-teal-600 font-medium">プライバシーポリシー</a>
                  に同意の上、オンライン相談を申し込みます
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

        <!-- ステップ5: 確認 -->
        <div v-if="currentStep === 5">
          <h2 class="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">相談内容の確認</h2>
          
          <!-- 相談情報 -->
          <div class="mb-8">
            <h3 class="text-lg font-semibold mb-4">相談情報</h3>
            <div class="bg-gray-50 rounded-lg p-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p class="text-sm text-gray-600">相談内容</p>
                  <p class="font-medium">{{ getSelectedTopicTitle() }}</p>
                </div>
                <div>
                  <p class="text-sm text-gray-600">相談日</p>
                  <p class="font-medium">{{ formatDate(selectedDate) }}</p>
                </div>
                <div>
                  <p class="text-sm text-gray-600">相談時間</p>
                  <p class="font-medium">{{ selectedTime }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- お客様情報 -->
          <div class="mb-8">
            <h3 class="text-lg font-semibold mb-4">お客様情報</h3>
            <div class="bg-gray-50 rounded-lg p-6">
              <dl class="space-y-2">
                <div class="flex">
                  <dt class="w-32 text-gray-600 text-sm">お名前：</dt>
                  <dd class="font-medium">{{ formData.name }}</dd>
                </div>
                <div class="flex">
                  <dt class="w-32 text-gray-600 text-sm">メール：</dt>
                  <dd class="font-medium">{{ formData.email }}</dd>
                </div>
                <div class="flex">
                  <dt class="w-32 text-gray-600 text-sm">電話番号：</dt>
                  <dd class="font-medium">{{ formData.phone }}</dd>
                </div>
                <div v-if="formData.relationship" class="flex">
                  <dt class="w-32 text-gray-600 text-sm">お立場：</dt>
                  <dd class="font-medium">{{ formData.relationship }}</dd>
                </div>
              </dl>
            </div>
          </div>

          <!-- 注意事項 -->
          <div class="bg-yellow-50 rounded-lg p-4 mb-8">
            <h4 class="font-medium mb-2 flex items-center">
              <svg class="w-5 h-5 text-yellow-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
              </svg>
              オンライン相談について
            </h4>
            <ul class="text-sm text-yellow-800 space-y-1">
              <li>・相談開始の5分前にZoomリンクをメールでお送りします</li>
              <li>・キャンセルの場合は前日までにご連絡ください</li>
              <li>・接続に問題がある場合は、お電話でサポートいたします</li>
              <li>・相談内容は守秘義務により厳重に管理されます</li>
            </ul>
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
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              オンライン相談を予約する
            </button>
          </div>
        </div>

        <!-- 完了画面 -->
        <div v-if="currentStep === 6" class="text-center py-12">
          <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-10 h-10 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <h2 class="text-2xl sm:text-3xl font-bold mb-4">オンライン相談の予約が完了しました</h2>
          <p class="text-lg text-gray-600 mb-8">
            ご登録いただいたメールアドレスに確認メールをお送りしました。<br>
            当日は、Zoomリンクをクリックしてご参加ください。
          </p>
          
          <!-- Zoom URL -->
          <div class="bg-green-50 rounded-lg p-4 sm:p-6 max-w-2xl mx-auto mb-6 sm:mb-8">
            <h3 class="font-semibold mb-3 flex items-center text-green-800">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
              </svg>
              Zoomミーティング情報
            </h3>
            <div class="bg-white rounded-lg p-4 mb-4">
              <p class="text-sm text-gray-600 mb-2">ミーティングURL：</p>
              <div class="flex items-center gap-2">
                <input type="text" 
                  :value="generateZoomURL()" 
                  readonly 
                  class="flex-1 px-3 py-2 bg-gray-50 border border-gray-300 rounded text-sm font-mono"
                  id="zoomUrl"
                >
                <button @click="copyZoomURL" class="btn btn-primary px-2 sm:px-3 py-2 text-sm flex-shrink-0">
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                  </svg>
                  <span class="hidden sm:inline">コピー</span>
                  <span class="sm:hidden">コピー</span>
                </button>
              </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p class="text-gray-600">ミーティングID：</p>
                <p class="font-mono">{{ generateMeetingID() }}</p>
              </div>
              <div>
                <p class="text-gray-600">パスコード：</p>
                <p class="font-mono">{{ generateMeetingPassword() }}</p>
              </div>
            </div>
            <div class="mt-4 p-3 bg-blue-100 rounded-lg">
              <p class="text-sm text-blue-800">
                <svg class="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                </svg>
                相談開始の5分前にこのURLをクリックしてご参加ください。
              </p>
            </div>
          </div>

          <!-- 予約詳細 -->
          <div class="bg-teal-50 rounded-lg p-4 sm:p-6 max-w-md mx-auto mb-6 sm:mb-8">
            <h3 class="font-semibold mb-3">予約詳細</h3>
            <div class="text-left space-y-2">
              <div class="flex justify-between">
                <span class="text-gray-600">相談内容：</span>
                <span class="font-medium">{{ getSelectedTopicTitle() }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">日時：</span>
                <span class="font-medium">{{ formatDate(selectedDate) }} {{ selectedTime }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">予約番号：</span>
                <span class="font-medium">OC-{{ generateReservationNumber() }}</span>
              </div>
            </div>
          </div>

          <!-- 次のアクション -->
          <div class="space-y-4">
            <p class="text-gray-600">他にもご相談がございますか？</p>
            <div class="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <button @click="resetForm" class="btn btn-outline">
                別の相談を予約
              </button>
              <router-link to="/" class="btn btn-primary">
                トップページへ
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Import images
import pcLearning from '/images/pc-learning.png'

export default {
  name: 'OnlineConsultation',
  data() {
    return {
      currentStep: 1,
      steps: [
        { number: 1, label: '相談内容' },
        { number: 2, label: '日付選択' },
        { number: 3, label: '時間選択' },
        { number: 4, label: '情報入力' },
        { number: 5, label: '確認' },
        { number: 6, label: '完了' }
      ],
      selectedTopic: null,
      selectedDate: null,
      selectedTime: null,
      selectedStaff: 'auto',
      formData: {
        name: '',
        kana: '',
        email: '',
        phone: '',
        relationship: '',
        age: '',
        agree: false
      },
      consultationTopics: [
        {
          id: 1,
          title: '障害福祉サービスについて',
          description: 'サービス内容や利用方法、申請手続きなどについてご相談いただけます',
          duration: '30分',
          availability: '当日予約可',
          icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
        },
        {
          id: 2,
          title: '就労支援・就職について',
          description: '就労移行支援や就労継続支援の利用、就職活動のサポートについて',
          duration: '45分',
          availability: '翌日以降',
          icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 00-2 2H6a2 2 0 00-2-2V4'
        },
        {
          id: 3,
          title: '家族・支援者の方へ',
          description: '家族としての関わり方、支援方法、制度の活用方法について',
          duration: '45分',
          availability: '翌日以降',
          icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z'
        },
        {
          id: 4,
          title: 'その他のご相談',
          description: '上記以外でも、福祉に関するご相談がございましたらお気軽にどうぞ',
          duration: '30分',
          availability: '当日予約可',
          icon: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        }
      ],
      staffMembers: [
        {
          id: 1,
          name: '田中 美穂',
          specialty: '就労支援専門',
          avatar: 'https://images.unsplash.com/photo-1494790108755-2616b9e78186?w=100&h=100&fit=crop&crop=face'
        },
        {
          id: 2,
          name: '佐藤 健一',
          specialty: '生活支援専門',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
        },
        {
          id: 3,
          name: '山田 智子',
          specialty: '児童発達支援専門',
          avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
        }
      ],
      calendarDates: [],
      availableTimes: [
        { value: '09:00', label: '09:00〜09:30', available: true, status: '空きあり' },
        { value: '10:00', label: '10:00〜10:30', available: true, status: '空きあり' },
        { value: '11:00', label: '11:00〜11:30', available: true, status: '残り1枠' },
        { value: '13:00', label: '13:00〜13:30', available: false, status: '満席' },
        { value: '14:00', label: '14:00〜14:30', available: true, status: '空きあり' },
        { value: '15:00', label: '15:00〜15:30', available: true, status: '空きあり' },
        { value: '16:00', label: '16:00〜16:30', available: true, status: '残り2枠' },
        { value: '17:00', label: '17:00〜17:30', available: true, status: '空きあり' }
      ]
    }
  },
  mounted() {
    this.generateCalendar()
  },
  methods: {
    selectTopicAndProceed(topicId) {
      this.selectedTopic = topicId
      this.currentStep++
    },
    generateCalendar() {
      // TourBooking.vueと同じカレンダー生成ロジック
      const dates = []
      const today = new Date()
      const currentMonth = today.getMonth()
      const currentYear = today.getFullYear()
      
      const firstDay = new Date(currentYear, currentMonth, 1).getDay()
      
      for (let i = 0; i < firstDay; i++) {
        dates.push({ day: '', available: false })
      }
      
      const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(currentYear, currentMonth, day)
        const isPast = date < today
        const isWeekend = date.getDay() === 0 || date.getDay() === 6
        const random = Math.random()
        
        dates.push({
          day,
          date,
          available: !isPast && !isWeekend && random > 0.2, // 相談は土日も可能
          limited: !isPast && !isWeekend && random > 0.8
        })
      }
      
      this.calendarDates = dates
    },
    getDateClass(date) {
      if (!date.day) return ''
      if (this.selectedDate === date.date) return 'bg-teal-400 text-white'
      if (!date.available) return 'bg-gray-100 text-gray-400 cursor-not-allowed'
      if (date.limited) return 'bg-orange-100 text-orange-700 hover:bg-orange-200'
      return 'bg-teal-100 text-teal-700 hover:bg-teal-200'
    },
    selectDate(date) {
      if (date.available) {
        this.selectedDate = date.date
      }
    },
    selectDateAndProceed(date) {
      if (date.available) {
        this.selectedDate = date.date
        this.currentStep++
      }
    },
    selectTime(timeValue) {
      this.selectedTime = timeValue
    },
    selectTimeAndProceed(timeValue) {
      this.selectedTime = timeValue
      if (this.selectedTime) {
        this.currentStep++
      }
    },
    getSelectedTopicTitle() {
      const topic = this.consultationTopics.find(t => t.id === this.selectedTopic)
      return topic ? topic.title : ''
    },
    getSelectedTopicDuration() {
      const topic = this.consultationTopics.find(t => t.id === this.selectedTopic)
      return topic ? topic.duration : '30分'
    },
    formatDate(date) {
      if (!date) return ''
      return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日(${['日', '月', '火', '水', '木', '金', '土'][date.getDay()]})`
    },
    generateReservationNumber() {
      const now = new Date()
      const year = now.getFullYear()
      const month = String(now.getMonth() + 1).padStart(2, '0')
      const day = String(now.getDate()).padStart(2, '0')
      const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0')
      return `${year}${month}${day}${random}`
    },
    generateZoomURL() {
      const meetingId = this.generateMeetingID()
      return `https://zoom.us/j/${meetingId}?pwd=${this.generateMeetingPassword()}`
    },
    generateMeetingID() {
      // ランダムな11桁のミーティングIDを生成
      const random = Math.floor(Math.random() * 90000000000) + 10000000000
      return random.toString()
    },
    generateMeetingPassword() {
      // 6桁のランダムパスワードを生成
      return Math.random().toString(36).substring(2, 8).toUpperCase()
    },
    copyZoomURL() {
      const urlInput = document.getElementById('zoomUrl')
      urlInput.select()
      document.execCommand('copy')
      alert('Zoom URLがコピーされました')
    },
    nextStep() {
      if (this.currentStep === 4) {
        // フォームバリデーション
        const errors = []
        if (!this.formData.name) errors.push('お名前')
        if (!this.formData.email) errors.push('メールアドレス')
        if (!this.formData.phone) errors.push('電話番号')
        if (!this.formData.agree) errors.push('プライバシーポリシーへの同意')
        
        if (errors.length > 0) {
          alert(`以下の項目を入力してください：\n${errors.join('、')}`)
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
      console.log('オンライン相談予約送信:', {
        topic: this.selectedTopic,
        date: this.selectedDate,
        time: this.selectedTime,
        formData: this.formData
      })
      this.currentStep = 6
    },
    resetForm() {
      this.currentStep = 1
      this.selectedTopic = null
      this.selectedDate = null
      this.selectedTime = null
      this.selectedStaff = 'auto'
      this.formData = {
        name: '',
        kana: '',
        email: '',
        phone: '',
        relationship: '',
        age: '',
        agree: false
      }
    }
  }
}
</script>

<style scoped>
.form-label.required::after {
  content: ' *';
  color: #ef4444;
}

.btn {
  @apply font-medium py-2 px-4 rounded-lg transition-all duration-200;
}

.btn-primary {
  @apply bg-teal-400 text-white hover:bg-teal-500;
}

.btn-outline {
  @apply border border-gray-300 text-gray-700 hover:bg-gray-50;
}

.btn-lg {
  @apply py-3 px-6 text-lg;
}

.form-input, .form-select, .form-textarea {
  @apply w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent;
}

.form-label {
  @apply block text-sm font-medium text-gray-700 mb-2;
}

/* 柔らかいフォント */
* {
  font-family: 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Meiryo', sans-serif;
}

/* ボタンの丸みを強化 */
.btn {
  @apply rounded-full;
}

/* カードの丸みを強化 */
.rounded-lg {
  border-radius: 1rem;
}

.rounded-xl {
  border-radius: 1.5rem;
}

.container {
  @apply max-w-6xl mx-auto px-4;
}
</style>