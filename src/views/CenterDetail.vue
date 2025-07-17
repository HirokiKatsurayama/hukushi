<template>
  <div class="min-h-screen bg-gray-50">
    <!-- ヒーローセクション -->
    <section class="relative h-96 overflow-hidden">
      <div class="absolute inset-0">
        <img :src="center.mainImage" :alt="center.name" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>
      
      <div class="container relative z-10 h-full flex items-end pb-8">
        <div class="text-white">
          <div class="flex items-center gap-4 mb-4">
            <span class="bg-primary-500 px-4 py-1 rounded-full text-sm font-medium">{{ center.serviceType }}</span>
            <div class="flex items-center">
              <svg v-for="i in 5" :key="i" class="w-5 h-5" :class="i <= center.rating ? 'text-yellow-400' : 'text-gray-400'" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span class="ml-2">{{ center.rating }} ({{ center.reviewCount }}件)</span>
            </div>
          </div>
          <h1 class="text-4xl md:text-5xl font-bold mb-2">{{ center.name }}</h1>
          <p class="text-xl opacity-90">{{ center.catchphrase }}</p>
        </div>
      </div>

      <!-- 写真ギャラリーボタン -->
      <button @click="openGallery = true" class="absolute bottom-8 right-8 bg-white/90 hover:bg-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
        写真をもっと見る ({{ center.images.length }}枚)
      </button>
    </section>

    <!-- ナビゲーションタブ -->
    <div class="sticky top-0 bg-white shadow-sm z-40">
      <div class="container">
        <nav class="flex space-x-8 overflow-x-auto">
          <button 
            v-for="tab in tabs" 
            :key="tab.id"
            @click="activeTab = tab.id"
            class="py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors"
            :class="activeTab === tab.id 
              ? 'border-primary-500 text-primary-600' 
              : 'border-transparent text-gray-500 hover:text-gray-700'"
          >
            {{ tab.name }}
          </button>
        </nav>
      </div>
    </div>

    <div class="container py-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- メインコンテンツ -->
        <div class="lg:col-span-2 space-y-8">
          <!-- 基本情報 -->
          <section v-if="activeTab === 'overview'" class="card">
            <div class="card-body">
              <h2 class="text-2xl font-bold mb-6">基本情報</h2>
              
              <div class="prose max-w-none mb-8">
                <p>{{ center.description }}</p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 class="font-semibold mb-3">サービス内容</h3>
                  <ul class="space-y-2">
                    <li v-for="service in center.services" :key="service" class="flex items-start">
                      <svg class="w-5 h-5 text-primary-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span class="text-gray-700">{{ service }}</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 class="font-semibold mb-3">特徴</h3>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="feature in center.features" :key="feature" class="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm">
                      {{ feature }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- プログラム詳細 -->
          <section v-if="activeTab === 'programs'" class="card">
            <div class="card-body">
              <h2 class="text-2xl font-bold mb-6">プログラム・訓練内容</h2>
              
              <div class="space-y-6">
                <div v-for="program in center.programs" :key="program.id" class="border-l-4 border-primary-500 pl-6">
                  <h3 class="text-lg font-semibold mb-2">{{ program.name }}</h3>
                  <p class="text-gray-700 mb-3">{{ program.description }}</p>
                  <div class="flex items-center gap-4 text-sm text-gray-600">
                    <span>
                      <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      {{ program.duration }}
                    </span>
                    <span>
                      <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                      定員{{ program.capacity }}名
                    </span>
                  </div>
                </div>
              </div>

              <div class="mt-8 p-6 bg-primary-50 rounded-lg">
                <h3 class="font-semibold mb-3">一日のスケジュール例</h3>
                <div class="space-y-2">
                  <div v-for="schedule in center.dailySchedule" :key="schedule.time" class="flex">
                    <span class="text-primary-700 font-medium w-20">{{ schedule.time }}</span>
                    <span class="text-gray-700">{{ schedule.activity }}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- スタッフ紹介 -->
          <section v-if="activeTab === 'staff'" class="card">
            <div class="card-body">
              <h2 class="text-2xl font-bold mb-6">スタッフ紹介</h2>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div v-for="staff in center.staff" :key="staff.id" class="flex gap-4">
                  <img :src="staff.photo" :alt="staff.name" class="w-20 h-20 rounded-full object-cover">
                  <div>
                    <h3 class="font-semibold">{{ staff.name }}</h3>
                    <p class="text-sm text-gray-600 mb-2">{{ staff.role }}</p>
                    <p class="text-sm text-gray-700">{{ staff.message }}</p>
                  </div>
                </div>
              </div>

              <div class="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 class="font-semibold mb-3">スタッフ体制</h3>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div class="text-2xl font-bold text-primary-500">{{ center.staffCount.total }}</div>
                    <div class="text-sm text-gray-600">総スタッフ数</div>
                  </div>
                  <div>
                    <div class="text-2xl font-bold text-primary-500">{{ center.staffCount.fulltime }}</div>
                    <div class="text-sm text-gray-600">常勤職員</div>
                  </div>
                  <div>
                    <div class="text-2xl font-bold text-primary-500">{{ center.staffCount.qualified }}</div>
                    <div class="text-sm text-gray-600">有資格者</div>
                  </div>
                  <div>
                    <div class="text-2xl font-bold text-primary-500">1:{{ center.staffCount.ratio }}</div>
                    <div class="text-sm text-gray-600">職員配置</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- 設備・環境 -->
          <section v-if="activeTab === 'facility'" class="card">
            <div class="card-body">
              <h2 class="text-2xl font-bold mb-6">施設・設備</h2>
              
              <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <img v-for="(image, index) in center.facilityImages" :key="index" 
                  :src="image" :alt="`施設写真${index + 1}`" 
                  class="w-full h-40 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                  @click="openGallery = true">
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 class="font-semibold mb-3">設備一覧</h3>
                  <ul class="space-y-2">
                    <li v-for="facility in center.facilities" :key="facility" class="flex items-center">
                      <svg class="w-5 h-5 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span class="text-gray-700">{{ facility }}</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 class="font-semibold mb-3">バリアフリー対応</h3>
                  <ul class="space-y-2">
                    <li v-for="feature in center.accessibility" :key="feature" class="flex items-center">
                      <svg class="w-5 h-5 text-accent-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span class="text-gray-700">{{ feature }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <!-- 口コミ・評価 -->
          <section v-if="activeTab === 'reviews'" class="space-y-6">
            <div class="card">
              <div class="card-body">
                <h2 class="text-2xl font-bold mb-6">利用者の声</h2>
                
                <!-- 評価サマリー -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <div class="flex items-center mb-4">
                      <div class="text-5xl font-bold text-gray-900 mr-4">{{ center.rating }}</div>
                      <div>
                        <div class="flex text-yellow-400 mb-1">
                          <svg v-for="i in 5" :key="i" class="w-6 h-6" :class="{ 'text-gray-300': i > center.rating }" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        </div>
                        <p class="text-sm text-gray-600">{{ center.reviewCount }}件の評価</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 class="font-medium mb-3">評価項目別</h3>
                    <div class="space-y-2">
                      <div v-for="item in center.ratingBreakdown" :key="item.name" class="flex items-center justify-between">
                        <span class="text-sm text-gray-600">{{ item.name }}</span>
                        <div class="flex items-center">
                          <div class="w-32 bg-gray-200 rounded-full h-2 mr-3">
                            <div class="bg-primary-500 h-2 rounded-full" :style="`width: ${item.score * 20}%`"></div>
                          </div>
                          <span class="text-sm font-medium">{{ item.score }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 個別レビュー -->
                <div class="space-y-6">
                  <div v-for="review in center.reviews" :key="review.id" class="border-b pb-6 last:border-0">
                    <div class="flex items-start justify-between mb-3">
                      <div>
                        <div class="flex items-center mb-1">
                          <div class="flex text-yellow-400 mr-2">
                            <svg v-for="i in 5" :key="i" class="w-4 h-4" :class="{ 'text-gray-300': i > review.rating }" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          </div>
                          <span class="font-medium">{{ review.title }}</span>
                        </div>
                        <p class="text-sm text-gray-600">{{ review.author }} ({{ review.userType }}) · {{ review.date }}</p>
                      </div>
                      <button class="text-sm text-gray-500 hover:text-primary-500">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                        </svg>
                      </button>
                    </div>
                    <p class="text-gray-700">{{ review.content }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="text-center">
              <button class="btn btn-outline">もっと口コミを見る</button>
            </div>
          </section>
        </div>

        <!-- サイドバー -->
        <div class="lg:col-span-1 space-y-6">
          <!-- お問い合わせカード -->
          <div class="bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl shadow-2xl sticky top-20 p-1">
            <div class="bg-white rounded-lg p-6">
              <div class="text-center mb-4">
                <h3 class="text-xl font-bold text-gray-900">お気軽にご相談ください</h3>
              </div>
              
              <div class="space-y-3 mb-4">
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-600">電話番号</span>
                  <a href="tel:{{ center.contact.phone }}" class="text-primary-500 hover:text-primary-600 font-semibold">{{ center.contact.phone }}</a>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-600">メール</span>
                  <a href="mailto:{{ center.contact.email }}" class="text-primary-500 hover:text-primary-600 text-sm">{{ center.contact.email }}</a>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-600">営業時間</span>
                  <span class="text-sm">{{ center.businessHours }}</span>
                </div>
              </div>

              <button @click="$router.push('/tour-booking')" class="btn btn-primary btn-lg w-full mb-3 py-3 text-base font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                無料見学予約
              </button>
              
              
              <!-- 特典メッセージ -->
              <div class="mt-4 p-3 bg-accent-50 rounded-lg">
                <p class="text-center text-sm font-medium text-accent-700">
                  <svg class="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clip-rule="evenodd"></path>
                  </svg>
                  今なら見学で特典プレゼント！
                </p>
              </div>
            </div>
          </div>

          <!-- アクセス情報 -->
          <div class="card">
            <div class="card-body">
              <h3 class="text-lg font-semibold mb-4">アクセス</h3>
              
              <div class="mb-4">
                <p class="text-sm text-gray-600 mb-1">住所</p>
                <p class="text-sm">{{ center.address }}</p>
              </div>
              
              <div class="mb-4">
                <p class="text-sm text-gray-600 mb-1">最寄り駅</p>
                <p class="text-sm">{{ center.nearestStation }}</p>
              </div>
              
              <!-- 地図 -->
              <div class="bg-gray-200 h-48 rounded-lg flex items-center justify-center mb-4">
                <span class="text-gray-500">地図を表示</span>
              </div>
              
              <a href="#" class="text-primary-500 hover:text-primary-600 text-sm">
                Google マップで見る →
              </a>
            </div>
          </div>

          <!-- 基本情報 -->
          <div class="card">
            <div class="card-body">
              <h3 class="text-lg font-semibold mb-4">基本情報</h3>
              
              <dl class="space-y-3">
                <div>
                  <dt class="text-sm text-gray-600">運営法人</dt>
                  <dd class="text-sm font-medium">{{ center.company }}</dd>
                </div>
                <div>
                  <dt class="text-sm text-gray-600">開設年月</dt>
                  <dd class="text-sm font-medium">{{ center.established }}</dd>
                </div>
                <div>
                  <dt class="text-sm text-gray-600">定員</dt>
                  <dd class="text-sm font-medium">{{ center.capacity }}名</dd>
                </div>
                <div>
                  <dt class="text-sm text-gray-600">利用料金</dt>
                  <dd class="text-sm font-medium">{{ center.fee }}</dd>
                </div>
                <div>
                  <dt class="text-sm text-gray-600">対象地域</dt>
                  <dd class="text-sm font-medium">{{ center.targetArea }}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 写真ギャラリーモーダル -->
    <div v-if="openGallery" class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center" @click="openGallery = false">
      <div class="container">
        <div class="relative">
          <img :src="center.images[currentImageIndex]" :alt="`${center.name}の写真${currentImageIndex + 1}`" class="max-w-full max-h-screen mx-auto">
          
          <button @click.stop="previousImage" class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          
          <button @click.stop="nextImage" class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
          
          <button @click="openGallery = false" class="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <div class="flex justify-center mt-4 space-x-2">
          <button 
            v-for="(image, index) in center.images" 
            :key="index"
            @click.stop="currentImageIndex = index"
            class="w-20 h-20 rounded overflow-hidden opacity-60 hover:opacity-100 transition-opacity"
            :class="{ 'opacity-100 ring-2 ring-white': currentImageIndex === index }"
          >
            <img :src="image" :alt="`サムネイル${index + 1}`" class="w-full h-full object-cover">
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CenterDetail',
  data() {
    return {
      activeTab: 'overview',
      openGallery: false,
      currentImageIndex: 0,
      tabs: [
        { id: 'overview', name: '基本情報' },
        { id: 'programs', name: 'プログラム' },
        { id: 'staff', name: 'スタッフ' },
        { id: 'facility', name: '施設・設備' },
        { id: 'reviews', name: '口コミ・評価' }
      ],
      center: {
        id: 1,
        name: 'さくらワークセンター',
        catchphrase: '一人ひとりの可能性を最大限に引き出す就労支援',
        serviceType: '就労移行支援',
        rating: 4.5,
        reviewCount: 32,
        mainImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop',
        images: [
          'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop'
        ],
        description: 'さくらワークセンターは、一人ひとりの特性や希望に寄り添い、最適な就労支援を提供する事業所です。IT分野を中心に、実践的なスキルを身につけられるプログラムを多数用意。経験豊富なスタッフが、利用者の皆様の「働きたい」という思いを全力でサポートします。',
        services: [
          '個別支援計画の作成・実施',
          'ビジネスマナー研修',
          'PC・IT技能訓練',
          '企業実習・職場体験',
          '就職活動支援',
          '就職後の定着支援（6ヶ月）'
        ],
        features: ['駅徒歩5分', 'IT訓練充実', '就職率85%', '定着率90%', '個別支援'],
        programs: [
          {
            id: 1,
            name: 'ITスキル習得プログラム',
            description: 'Word、Excel、PowerPointなどの基本的なオフィスソフトから、プログラミングの基礎まで幅広く学べます。',
            duration: '3ヶ月〜6ヶ月',
            capacity: 8
          },
          {
            id: 2,
            name: 'ビジネスマナー講座',
            description: '挨拶、電話応対、メールの書き方など、職場で必要なマナーを実践的に学びます。',
            duration: '1ヶ月',
            capacity: 12
          },
          {
            id: 3,
            name: '職場実習プログラム',
            description: '提携企業での実習を通じて、実際の職場環境を体験できます。',
            duration: '2週間〜1ヶ月',
            capacity: 6
          }
        ],
        dailySchedule: [
          { time: '9:00', activity: '朝礼・体調確認' },
          { time: '9:30', activity: '個別訓練・グループワーク' },
          { time: '12:00', activity: '昼食・休憩' },
          { time: '13:00', activity: 'スキルアップ講座' },
          { time: '15:00', activity: '振り返り・清掃' },
          { time: '16:00', activity: '終了' }
        ],
        staff: [
          {
            id: 1,
            name: '山田太郎',
            role: '施設長・サービス管理責任者',
            photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces',
            message: '一人ひとりの夢の実現をサポートします。'
          },
          {
            id: 2,
            name: '佐藤花子',
            role: '就労支援員',
            photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces',
            message: '皆様の「働きたい」を全力で応援します。'
          }
        ],
        staffCount: {
          total: 12,
          fulltime: 8,
          qualified: 10,
          ratio: 3
        },
        facilityImages: [
          'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=300&fit=crop',
          'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop'
        ],
        facilities: [
          '訓練室（PC20台完備）',
          '個別相談室',
          '休憩室',
          '多目的室',
          '更衣室（男女別）',
          '給湯室'
        ],
        accessibility: [
          'エレベーター完備',
          '車椅子対応トイレ',
          '段差なし',
          '手すり設置',
          '点字ブロック'
        ],
        ratingBreakdown: [
          { name: 'スタッフの対応', score: 4.7 },
          { name: 'プログラム内容', score: 4.5 },
          { name: '施設・設備', score: 4.3 },
          { name: 'アクセス', score: 4.6 },
          { name: '就職支援', score: 4.4 }
        ],
        reviews: [
          {
            id: 1,
            rating: 5,
            title: '親身なサポートで就職できました',
            author: 'M.Kさん',
            userType: '卒業生',
            date: '2024年3月',
            content: 'スタッフの方々が本当に親身になって相談に乗ってくださり、自分に合った職場を見つけることができました。特に面接練習は実践的で役立ちました。'
          },
          {
            id: 2,
            rating: 4,
            title: 'IT スキルが身につきました',
            author: 'T.Sさん',
            userType: '利用者',
            date: '2024年2月',
            content: 'パソコンが苦手でしたが、基礎から丁寧に教えていただき、今では自信を持って使えるようになりました。'
          }
        ],
        contact: {
          phone: '03-1234-5678',
          email: 'info@sakura-work.jp'
        },
        businessHours: '平日 9:00-17:00',
        address: '東京都新宿区西新宿1-1-1 さくらビル3F',
        nearestStation: 'JR新宿駅 西口より徒歩5分',
        company: '社会福祉法人さくら福祉会',
        established: '2015年4月',
        capacity: 20,
        fee: '前年度収入により決定（上限9,300円/月）',
        targetArea: '新宿区、渋谷区、中野区、杉並区'
      }
    }
  },
  methods: {
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.center.images.length
    },
    previousImage() {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.center.images.length) % this.center.images.length
    }
  },
  mounted() {
    // URLパラメータからIDを取得して、実際のデータを取得する処理をここに実装
    // const centerId = this.$route.params.id
  }
}
</script>

<style scoped>
.prose {
  max-width: none;
}
</style>