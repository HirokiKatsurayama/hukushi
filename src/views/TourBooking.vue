<template>
  <div class="min-h-screen bg-gray-50">
    <!-- ヒーローセクション -->
    <section class="relative bg-gradient-to-br from-primary-500 to-primary-600 text-white py-12 overflow-hidden">
      <!-- 背景画像 -->
      <div class="absolute inset-0 z-0">
        <img 
          src="/images/説明会でスーツ.png" 
          alt="施設見学・説明会の様子"
          class="w-full h-full object-cover opacity-25"
        >
        <div class="absolute inset-0 bg-gradient-to-br from-primary-500/80 to-primary-600/80"></div>
      </div>
      
      <div class="container relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">施設見学予約</h1>
          <p class="text-xl opacity-90 mb-6 drop-shadow-md">
            実際の雰囲気を体験して、あなたに合った事業所を見つけましょう
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
              <span>オンライン見学対応</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <span>当日キャンセルOK</span>
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
                <svg v-if="currentStep > step.number" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span v-else>{{ step.number }}</span>
              </div>
              <span class="ml-2 text-sm font-medium hidden md:block" :class="currentStep >= step.number ? 'text-gray-900' : 'text-gray-500'">
                {{ step.label }}
              </span>
              <div v-if="step.number < steps.length" class="w-8 md:w-16 h-1 mx-2 rounded" :class="currentStep > step.number ? 'bg-primary-500' : 'bg-gray-200'"></div>
            </div>
          </div>
        </div>

        <!-- ステップ1: 施設選択 -->
        <div v-if="currentStep === 1">
          <h2 class="text-2xl font-bold mb-6">見学する事業所を選択</h2>
          
          <!-- おすすめ施設 -->
          <div class="bg-primary-50 rounded-lg p-6 mb-6">
            <h3 class="font-semibold mb-3 flex items-center">
              <svg class="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              人気の見学先
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div v-for="center in popularCenters" :key="center.id" 
                class="bg-white rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow"
                @click="selectCenter(center.id)"
              >
                <div class="flex items-center justify-between mb-2">
                  <h4 class="font-medium">{{ center.name }}</h4>
                  <span class="text-sm text-primary-600 font-medium">★{{ center.rating }}</span>
                </div>
                <p class="text-sm text-gray-600 mb-2">{{ center.location }}</p>
                <div class="flex items-center gap-2 text-xs">
                  <span class="bg-green-100 text-green-700 px-2 py-1 rounded">見学可能日多数</span>
                  <span class="bg-blue-100 text-blue-700 px-2 py-1 rounded">オンライン対応</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 施設リスト -->
          <div class="mb-6">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-semibold">すべての事業所</h3>
              <input 
                type="text" 
                v-model="searchKeyword" 
                class="form-input w-64" 
                placeholder="施設名や地域で検索"
              >
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto">
              <div v-for="center in filteredCenters" :key="center.id" 
                class="border rounded-lg p-4 cursor-pointer hover:border-primary-500 transition-all duration-200"
                :class="selectedCenter === center.id ? 'border-primary-500 bg-primary-50' : 'border-gray-200'"
                @click="selectCenter(center.id)"
              >
                <div class="flex items-start gap-4">
                  <img :src="center.image" :alt="center.name" class="w-24 h-24 rounded-lg object-cover">
                  <div class="flex-1">
                    <h4 class="font-semibold mb-1">{{ center.name }}</h4>
                    <p class="text-sm text-gray-600 mb-2">{{ center.location }}</p>
                    <p class="text-sm text-gray-700 mb-2">{{ center.description }}</p>
                    <div class="flex items-center gap-2">
                      <span class="text-xs bg-gray-100 px-2 py-1 rounded">{{ center.serviceType }}</span>
                      <span v-if="center.hasOnlineTour" class="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">オンライン可</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 次へボタン -->
          <div class="flex justify-end">
            <button 
              @click="nextStep" 
              :disabled="!selectedCenter"
              class="btn btn-primary btn-lg px-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              :class="!selectedCenter ? 'opacity-50 cursor-not-allowed' : ''"
            >
              日時を選択する
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- ステップ2: 日時選択 -->
        <div v-if="currentStep === 2">
          <h2 class="text-2xl font-bold mb-6">見学日時を選択</h2>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- カレンダー -->
            <div>
              <h3 class="font-semibold mb-4">日付を選択</h3>
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
                    @click="selectDate(date)"
                  >
                    <span class="text-sm">{{ date.day }}</span>
                  </div>
                </div>
              </div>
              
              <!-- 凡例 -->
              <div class="flex items-center gap-4 mt-4 text-sm">
                <div class="flex items-center gap-2">
                  <div class="w-4 h-4 bg-primary-100 rounded"></div>
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

            <!-- 時間選択 -->
            <div>
              <h3 class="font-semibold mb-4">時間を選択</h3>
              <div v-if="selectedDate" class="space-y-4">
                <!-- 見学タイプ選択 -->
                <div class="bg-gray-50 rounded-lg p-4">
                  <p class="text-sm font-medium mb-3">見学タイプ</p>
                  <div class="grid grid-cols-2 gap-3">
                    <label class="relative">
                      <input type="radio" v-model="tourType" value="onsite" class="sr-only peer">
                      <div class="border rounded-lg p-4 cursor-pointer transition-all duration-200 peer-checked:border-primary-500 peer-checked:bg-primary-50">
                        <div class="flex items-center gap-3">
                          <svg class="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                          </svg>
                          <div>
                            <p class="font-medium">来所見学</p>
                            <p class="text-xs text-gray-600">実際に施設を訪問</p>
                          </div>
                        </div>
                      </div>
                    </label>
                    <label class="relative">
                      <input type="radio" v-model="tourType" value="online" class="sr-only peer">
                      <div class="border rounded-lg p-4 cursor-pointer transition-all duration-200 peer-checked:border-primary-500 peer-checked:bg-primary-50">
                        <div class="flex items-center gap-3">
                          <svg class="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                          </svg>
                          <div>
                            <p class="font-medium">オンライン見学</p>
                            <p class="text-xs text-gray-600">ZoomやSkypeで対応</p>
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

                <!-- 時間帯選択 -->
                <div>
                  <p class="text-sm font-medium mb-3">見学時間（所要時間：約60分）</p>
                  <div class="grid grid-cols-2 gap-3">
                    <button v-for="time in availableTimes" :key="time.value"
                      @click="selectedTime = time.value"
                      class="p-3 rounded-lg border transition-all duration-200"
                      :class="selectedTime === time.value 
                        ? 'border-primary-500 bg-primary-50 text-primary-700' 
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
              <div v-else class="bg-gray-50 rounded-lg p-8 text-center text-gray-500">
                <svg class="w-12 h-12 mx-auto mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <p>日付を選択してください</p>
              </div>
            </div>
          </div>

          <!-- ボタン -->
          <div class="flex justify-between mt-8">
            <button @click="prevStep" class="btn btn-outline">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              戻る
            </button>
            <button 
              @click="nextStep" 
              :disabled="!selectedDate || !selectedTime"
              class="btn btn-primary btn-lg px-8"
              :class="(!selectedDate || !selectedTime) ? 'opacity-50 cursor-not-allowed' : ''"
            >
              次へ進む
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- ステップ3: 情報入力 -->
        <div v-if="currentStep === 3">
          <h2 class="text-2xl font-bold mb-6">お客様情報の入力</h2>
          
          <form @submit.prevent="nextStep" class="space-y-6">
            <!-- 基本情報 -->
            <div>
              <h3 class="font-semibold mb-4">基本情報</h3>
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
              </div>
            </div>

            <!-- 見学者情報 -->
            <div>
              <h3 class="font-semibold mb-4">見学者について</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="form-label">見学者のお立場</label>
                  <select v-model="formData.visitorType" class="form-select">
                    <option value="">選択してください</option>
                    <option value="本人">ご本人</option>
                    <option value="家族">ご家族</option>
                    <option value="支援者">支援者・相談員</option>
                    <option value="その他">その他</option>
                  </select>
                </div>
                <div>
                  <label class="form-label">同伴者数</label>
                  <select v-model="formData.companions" class="form-select">
                    <option value="0">なし</option>
                    <option value="1">1名</option>
                    <option value="2">2名</option>
                    <option value="3">3名以上</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- 希望・要望 -->
            <div>
              <h3 class="font-semibold mb-4">ご希望・ご要望</h3>
              <div class="space-y-4">
                <div>
                  <label class="form-label">特に見学したい点（複数選択可）</label>
                  <div class="grid grid-cols-2 gap-3">
                    <label v-for="interest in interests" :key="interest" class="flex items-center">
                      <input type="checkbox" v-model="formData.interests" :value="interest" class="mr-2">
                      <span class="text-sm">{{ interest }}</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label class="form-label">その他ご要望・質問事項</label>
                  <textarea v-model="formData.message" class="form-textarea" rows="4" 
                    placeholder="配慮が必要な点、聞きたいことなどがございましたらご記入ください"></textarea>
                </div>
              </div>
            </div>

            <!-- プライバシーポリシー同意 -->
            <div class="bg-gray-50 rounded-lg p-4">
              <label class="flex items-start">
                <input type="checkbox" v-model="formData.agree" class="mt-1 mr-3" required>
                <span class="text-sm">
                  <a href="/privacy" target="_blank" class="text-primary-500 hover:text-primary-600">プライバシーポリシー</a>
                  に同意の上、見学予約を申し込みます
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

        <!-- ステップ4: 確認 -->
        <div v-if="currentStep === 4">
          <h2 class="text-2xl font-bold mb-6">予約内容の確認</h2>
          
          <!-- 見学情報 -->
          <div class="mb-8">
            <h3 class="text-lg font-semibold mb-4">見学情報</h3>
            <div class="bg-gray-50 rounded-lg p-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p class="text-sm text-gray-600">施設名</p>
                  <p class="font-medium">{{ getSelectedCenterName() }}</p>
                </div>
                <div>
                  <p class="text-sm text-gray-600">見学タイプ</p>
                  <p class="font-medium">{{ tourType === 'onsite' ? '来所見学' : 'オンライン見学' }}</p>
                </div>
                <div>
                  <p class="text-sm text-gray-600">見学日</p>
                  <p class="font-medium">{{ formatDate(selectedDate) }}</p>
                </div>
                <div>
                  <p class="text-sm text-gray-600">見学時間</p>
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
                <div v-if="formData.visitorType" class="flex">
                  <dt class="w-32 text-gray-600 text-sm">見学者：</dt>
                  <dd class="font-medium">{{ formData.visitorType }}</dd>
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
              ご確認ください
            </h4>
            <ul class="text-sm text-yellow-800 space-y-1">
              <li>・見学時間の5分前までにお越しください</li>
              <li>・キャンセルの場合は前日までにご連絡ください</li>
              <li>・体調不良の場合は無理せずご連絡ください</li>
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
              見学予約を確定する
            </button>
          </div>
        </div>

        <!-- 完了画面 -->
        <div v-if="currentStep === 5" class="text-center py-12">
          <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-10 h-10 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <h2 class="text-3xl font-bold mb-4">見学予約が完了しました</h2>
          <p class="text-lg text-gray-600 mb-8">
            ご登録いただいたメールアドレスに確認メールをお送りしました。<br>
            当日は、お気をつけてお越しください。
          </p>
          
          <!-- 予約詳細 -->
          <div class="bg-primary-50 rounded-lg p-6 max-w-md mx-auto mb-8">
            <h3 class="font-semibold mb-3">予約詳細</h3>
            <div class="text-left space-y-2">
              <div class="flex justify-between">
                <span class="text-gray-600">施設名：</span>
                <span class="font-medium">{{ getSelectedCenterName() }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">日時：</span>
                <span class="font-medium">{{ formatDate(selectedDate) }} {{ selectedTime }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">予約番号：</span>
                <span class="font-medium">TB-2024-0315</span>
              </div>
            </div>
          </div>

          <!-- 次のアクション -->
          <div class="space-y-4">
            <p class="text-gray-600">他の施設も見学されますか？</p>
            <div class="flex justify-center gap-4">
              <button @click="resetForm" class="btn btn-outline">
                別の施設を予約
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
export default {
  name: 'TourBooking',
  data() {
    return {
      currentStep: 1,
      steps: [
        { number: 1, label: '施設選択' },
        { number: 2, label: '日時選択' },
        { number: 3, label: '情報入力' },
        { number: 4, label: '確認' },
        { number: 5, label: '完了' }
      ],
      selectedCenter: null,
      selectedDate: null,
      selectedTime: null,
      tourType: 'onsite',
      searchKeyword: '',
      formData: {
        name: '',
        kana: '',
        email: '',
        phone: '',
        visitorType: '',
        companions: '0',
        interests: [],
        message: '',
        agree: false
      },
      interests: [
        '施設・設備',
        'プログラム内容',
        'スタッフ体制',
        '就職実績',
        '利用者の様子',
        '費用・利用料'
      ],
      popularCenters: [
        {
          id: 1,
          name: 'さくらワークセンター',
          location: '東京都新宿区',
          rating: 4.8
        },
        {
          id: 2,
          name: 'みらい就労支援事業所',
          location: '大阪府大阪市',
          rating: 4.7
        }
      ],
      centers: [
        {
          id: 1,
          name: 'さくらワークセンター',
          location: '東京都新宿区',
          serviceType: '就労移行支援',
          description: 'IT分野に特化した就労移行支援事業所',
          image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
          hasOnlineTour: true
        },
        {
          id: 2,
          name: 'みらい就労支援事業所',
          location: '大阪府大阪市',
          serviceType: '就労継続支援A型',
          description: '製造業務を中心とした安定した就労環境',
          image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=300&fit=crop',
          hasOnlineTour: true
        },
        {
          id: 3,
          name: 'ステップアップ横浜',
          location: '神奈川県横浜市',
          serviceType: '就労移行支援',
          description: '事務職・接客業への就労をサポート',
          image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop',
          hasOnlineTour: false
        }
      ],
      calendarDates: [],
      availableTimes: [
        { value: '10:00', label: '10:00〜11:00', available: true, status: '空きあり' },
        { value: '11:00', label: '11:00〜12:00', available: true, status: '残り2枠' },
        { value: '13:00', label: '13:00〜14:00', available: false, status: '満席' },
        { value: '14:00', label: '14:00〜15:00', available: true, status: '空きあり' },
        { value: '15:00', label: '15:00〜16:00', available: true, status: '空きあり' },
        { value: '16:00', label: '16:00〜17:00', available: true, status: '残り1枠' }
      ]
    }
  },
  computed: {
    filteredCenters() {
      if (!this.searchKeyword) return this.centers
      const keyword = this.searchKeyword.toLowerCase()
      return this.centers.filter(center => 
        center.name.toLowerCase().includes(keyword) ||
        center.location.toLowerCase().includes(keyword) ||
        center.description.toLowerCase().includes(keyword)
      )
    }
  },
  mounted() {
    this.generateCalendar()
  },
  methods: {
    selectCenter(centerId) {
      this.selectedCenter = centerId
    },
    generateCalendar() {
      // 簡易的なカレンダー生成
      const dates = []
      const today = new Date()
      const currentMonth = today.getMonth()
      const currentYear = today.getFullYear()
      
      // 月初の曜日を取得
      const firstDay = new Date(currentYear, currentMonth, 1).getDay()
      
      // 前月の日付で埋める
      for (let i = 0; i < firstDay; i++) {
        dates.push({ day: '', available: false })
      }
      
      // 当月の日付
      const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(currentYear, currentMonth, day)
        const isPast = date < today
        const isWeekend = date.getDay() === 0 || date.getDay() === 6
        const random = Math.random()
        
        dates.push({
          day,
          date,
          available: !isPast && !isWeekend && random > 0.3,
          limited: !isPast && !isWeekend && random > 0.7
        })
      }
      
      this.calendarDates = dates
    },
    getDateClass(date) {
      if (!date.day) return ''
      if (this.selectedDate === date.date) return 'bg-primary-500 text-white'
      if (!date.available) return 'bg-gray-100 text-gray-400 cursor-not-allowed'
      if (date.limited) return 'bg-orange-100 text-orange-700 hover:bg-orange-200'
      return 'bg-primary-100 text-primary-700 hover:bg-primary-200'
    },
    selectDate(date) {
      if (date.available) {
        this.selectedDate = date.date
      }
    },
    getSelectedCenterName() {
      const center = this.centers.find(c => c.id === this.selectedCenter)
      return center ? center.name : ''
    },
    formatDate(date) {
      if (!date) return ''
      return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日(${['日', '月', '火', '水', '木', '金', '土'][date.getDay()]})`
    },
    nextStep() {
      if (this.currentStep === 3) {
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
      console.log('見学予約送信:', {
        center: this.selectedCenter,
        date: this.selectedDate,
        time: this.selectedTime,
        tourType: this.tourType,
        formData: this.formData
      })
      this.currentStep = 5
    },
    resetForm() {
      this.currentStep = 1
      this.selectedCenter = null
      this.selectedDate = null
      this.selectedTime = null
      this.tourType = 'onsite'
      this.formData = {
        name: '',
        kana: '',
        email: '',
        phone: '',
        visitorType: '',
        companions: '0',
        interests: [],
        message: '',
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
</style>