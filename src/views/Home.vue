<template>
  <div>
    <!-- Hero Section - 検索メイン -->
    <section class="relative bg-gray-900 text-white py-24 overflow-hidden">
      <!-- 背景画像 -->
      <div class="absolute inset-0 z-0">
        <img 
          src="/images/事業所で作業2.png" 
          alt="事業所での作業風景"
          class="w-full h-full object-cover opacity-40"
        >
        <div class="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-800/80"></div>
      </div>
      <div class="container relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            <span class="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">安心と笑顔あふれる</span><br>
            <span class="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">福祉の未来を一緒に</span>
          </h1>
          <p class="text-2xl mb-12 leading-relaxed">
            <span class="text-gray-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">全国の障害福祉サービス事業所を</span><br>
            <span class="text-gray-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">わかりやすく比較・検索できます</span>
          </p>
          
          <!-- 検索フォーム -->
          <div class="bg-white rounded-2xl p-10 shadow-2xl mb-12">
            <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">
              まずは簡単検索から始めましょう
            </h2>
            <form @submit.prevent="searchCenters" class="space-y-8">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="form-label text-gray-800">お住まいの地域</label>
                  <select v-model="searchForm.area" class="form-select text-gray-700">
                    <option value="">地域を選択してください</option>
                    <option value="tokyo">東京都</option>
                    <option value="osaka">大阪府</option>
                    <option value="kanagawa">神奈川県</option>
                    <option value="aichi">愛知県</option>
                    <option value="saitama">埼玉県</option>
                    <option value="chiba">千葉県</option>
                  </select>
                </div>
                <div>
                  <label class="form-label text-gray-800">サービスの種類</label>
                  <select v-model="searchForm.service" class="form-select text-gray-700">
                    <option value="">種類を選択してください</option>
                    <option value="a-type">就労継続支援A型（雇用契約あり）</option>
                    <option value="b-type">就労継続支援B型（雇用契約なし）</option>
                    <option value="transition">就労移行支援（一般就労を目指す）</option>
                    <option value="independent">自立訓練（生活スキル向上）</option>
                  </select>
                </div>
              </div>
              
              <div class="text-center">
                <button type="submit" class="btn btn-primary btn-lg px-12 py-5 text-xl">
                  <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                  事業所を検索する
                </button>
              </div>
              
              <div class="text-center">
                <p class="text-gray-600 text-lg">
                  または、<br class="md:hidden">
                  <a href="tel:0120-123-456" class="text-red-600 font-bold hover:underline">お電話（0120-123-456）</a>
                  でお気軽にご相談ください
                </p>
              </div>
            </form>
          </div>
          
          <!-- 安心ポイント -->
          <div class="bg-gray-800/95 rounded-xl p-8 shadow-xl">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="text-center">
                <div class="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold mb-2 text-white">完全無料</h3>
                <p class="text-lg text-gray-300">見学も資料請求も<br>すべて無料です</p>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold mb-2 text-white">専門スタッフ</h3>
                <p class="text-lg text-gray-300">経験豊富な<br>スタッフがサポート</p>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold mb-2 text-white">安心サポート</h3>
                <p class="text-lg text-gray-300">一緒に最適な<br>事業所を見つけます</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 統計情報 -->
    <section class="bg-blue-50 py-16">
      <div class="container">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">
          多くの方にご利用いただいています
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center bg-white p-8 rounded-xl shadow-lg">
            <div class="text-5xl font-bold text-blue-600 mb-4">8,542</div>
            <div class="text-xl text-gray-700 font-medium">掲載事業所数</div>
            <div class="text-sm text-gray-500 mt-2">全国各地の事業所を掲載</div>
          </div>
          <div class="text-center bg-white p-8 rounded-xl shadow-lg">
            <div class="text-5xl font-bold text-green-600 mb-4">全国</div>
            <div class="text-xl text-gray-700 font-medium">47都道府県</div>
            <div class="text-sm text-gray-500 mt-2">どの地域でもご利用可能</div>
          </div>
          <div class="text-center bg-white p-8 rounded-xl shadow-lg">
            <div class="text-5xl font-bold text-purple-600 mb-4">15万人</div>
            <div class="text-xl text-gray-700 font-medium">以上の方が利用</div>
            <div class="text-sm text-gray-500 mt-2">累計利用者数</div>
          </div>
          <div class="text-center bg-white p-8 rounded-xl shadow-lg">
            <div class="text-5xl font-bold text-orange-600 mb-4">4.5</div>
            <div class="text-xl text-gray-700 font-medium">平均評価</div>
            <div class="text-sm text-gray-500 mt-2">5段階評価での平均</div>
          </div>
        </div>
      </div>
    </section>

    <!-- オンライン無料相談の強調セクション ---->
    <section class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
      <div class="container">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-6">ご自宅から安心相談</h2>
            <p class="text-2xl opacity-95 leading-relaxed">
              Zoomで福祉の窓口の専門スタッフと<br>
              オンライン面談ができます
            </p>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <!-- 左側：メリット説明 -->
            <div>
              <div class="space-y-8">
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-2xl font-semibold mb-3">外出不要で安心</h3>
                    <p class="text-lg opacity-90">ご自宅からリラックスしてご相談いただけます。移動の心配がありません。</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-2xl font-semibold mb-3">操作は簡単</h3>
                    <p class="text-lg opacity-90">PC・スマホ・タブレットで簡単接続。操作に不安がある方もスタッフがサポートします。</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-2xl font-semibold mb-3">専門スタッフが丁寧対応</h3>
                    <p class="text-lg opacity-90">福祉サービスの専門知識を持つスタッフが、お一人お一人のご相談に丁寧にお応えします。</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- 右側：予約ボタンとサポート情報 -->
            <div class="text-center">
              <!-- 支援員の画像 -->
              <div class="mb-6">
                <img 
                  src="/images/支援員が整列してる1.png" 
                  alt="専門スタッフが揃っています" 
                  class="w-full max-w-md mx-auto rounded-xl shadow-lg"
                >
              </div>
              
              <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
                <h3 class="text-2xl font-bold mb-4">完全無料</h3>
                <p class="text-lg mb-6 opacity-90">
                  ご相談は完全無料です<br>
                  平日 9:00〜18:00 対応
                </p>
                <button @click="$router.push('/online-consultation')" class="btn bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-4 text-xl rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 mb-6">
                  <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                  </svg>
                  オンライン相談を予約
                </button>
                <p class="text-base opacity-80">
                  予約は1分で完了<br>
                  最短で翌日からご相談可能
                </p>
              </div>
              
              <div class="text-center">
                <p class="text-lg opacity-90 mb-4">
                  操作が不安な方はお電話でサポート
                </p>
                <a href="tel:0120-123-456" class="text-2xl font-bold hover:text-yellow-300 transition-colors">
                  📞 0120-123-456
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- カテゴリーから探す -->
    <section class="py-20">
      <div class="container">
        <h2 class="text-4xl font-bold text-center mb-12">サービス種別から探す</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <router-link to="/services?type=a-type" class="card hover:shadow-lg transition-shadow">
            <div class="card-body text-center">
              <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold mb-2">就労継続支援A型</h3>
              <p class="text-gray-600 text-sm mb-4">雇用契約を結んで働く</p>
              <span class="text-primary-500 text-sm font-medium">2,156事業所 →</span>
            </div>
          </router-link>

          <router-link to="/services?type=b-type" class="card hover:shadow-lg transition-shadow">
            <div class="card-body text-center">
              <div class="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold mb-2">就労継続支援B型</h3>
              <p class="text-gray-600 text-sm mb-4">自分のペースで働く</p>
              <span class="text-secondary-500 text-sm font-medium">3,842事業所 →</span>
            </div>
          </router-link>

          <router-link to="/services?type=transition" class="card hover:shadow-lg transition-shadow">
            <div class="card-body text-center">
              <div class="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold mb-2">就労移行支援</h3>
              <p class="text-gray-600 text-sm mb-4">一般就労を目指す</p>
              <span class="text-accent-500 text-sm font-medium">1,523事業所 →</span>
            </div>
          </router-link>

          <router-link to="/services?type=life-care" class="card hover:shadow-lg transition-shadow">
            <div class="card-body text-center">
              <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold mb-2">生活介護</h3>
              <p class="text-gray-600 text-sm mb-4">日常生活の支援</p>
              <span class="text-orange-500 text-sm font-medium">1,021事業所 →</span>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- 特集・おすすめ事業所 -->
    <section class="bg-gray-50 py-20">
      <div class="container">
        <h2 class="text-4xl font-bold text-center mb-12">注目の事業所</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="center in featuredCenters" :key="center.id" class="card hover:shadow-xl transition-shadow">
            <div class="relative h-48 overflow-hidden rounded-t-lg">
              <img :src="center.image" :alt="center.name" class="w-full h-full object-cover">
              <div class="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                おすすめ
              </div>
            </div>
            <div class="card-body">
              <h3 class="text-xl font-semibold mb-2">{{ center.name }}</h3>
              <div class="flex items-center mb-3">
                <div class="flex text-yellow-400 mr-2">
                  <svg v-for="i in 5" :key="i" class="w-4 h-4" :class="{ 'text-gray-300': i > center.rating }" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
                <span class="text-sm text-gray-600">{{ center.rating }} ({{ center.reviewCount }}件)</span>
              </div>
              <p class="text-gray-600 text-sm mb-4">{{ center.description }}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tag in center.tags" :key="tag" class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                  {{ tag }}
                </span>
              </div>
              <div class="flex gap-2">
                <router-link :to="`/centers/${center.id}`" class="btn btn-outline flex-1">
                  詳細を見る
                </router-link>
                <button @click="$router.push('/tour-booking')" class="btn btn-primary flex-1 font-bold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                  見学予約
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-12">
          <router-link to="/featured" class="btn btn-outline btn-lg">
            もっと見る
          </router-link>
        </div>
      </div>
    </section>

    <!-- 地域から探す -->
    <section class="py-20">
      <div class="container">
        <h2 class="text-4xl font-bold text-center mb-12">地域から探す</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <router-link v-for="region in regions" :key="region.id" :to="`/areas?region=${region.id}`" 
            class="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-primary-500 hover:shadow-md transition-all">
            <h3 class="font-semibold text-gray-800">{{ region.name }}</h3>
            <p class="text-sm text-gray-600 mt-1">{{ region.count }}事業所</p>
          </router-link>
        </div>
      </div>
    </section>

    <!-- 最新の口コミ -->
    <section class="bg-gray-50 py-20">
      <div class="container">
        <h2 class="text-4xl font-bold text-center mb-12">最新の口コミ・評価</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="review in latestReviews" :key="review.id" class="card">
            <div class="card-body">
              <div class="flex items-start justify-between mb-4">
                <div>
                  <h3 class="font-semibold text-lg">{{ review.centerName }}</h3>
                  <div class="flex items-center mt-1">
                    <div class="flex text-yellow-400 mr-2">
                      <svg v-for="i in 5" :key="i" class="w-4 h-4" :class="{ 'text-gray-300': i > review.rating }" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
                    <span class="text-sm text-gray-600">{{ review.rating }}.0</span>
                  </div>
                </div>
                <span class="text-sm text-gray-500">{{ review.date }}</span>
              </div>
              <p class="text-gray-700 mb-4">{{ review.comment }}</p>
              <div class="flex items-center text-sm text-gray-500">
                <span>{{ review.userName }} ({{ review.userType }})</span>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-12">
          <router-link to="/reviews" class="btn btn-outline btn-lg">
            すべての口コミを見る
          </router-link>
        </div>
      </div>
    </section>

    <!-- CTA セクション -->
    <section class="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
      <div class="container">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">オンライン無料相談</h2>
          <p class="text-xl text-gray-600 mb-12">
            ご自宅からZoomで専門スタッフと安心相談
          </p>
          
          <div class="max-w-2xl mx-auto mb-12">
            <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-purple-200 relative">
              <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                おすすめ
              </div>
              <div class="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg class="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-semibold mb-4">オンライン無料相談</h3>
              <p class="text-gray-600 mb-6">ご自宅からZoomで専門スタッフと面談。外出不要で安心してご相談いただけます。</p>
              <div class="bg-blue-50 p-4 rounded-lg mb-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="flex items-start space-x-3">
                    <svg class="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div class="text-sm text-gray-700">
                      <p class="font-medium mb-1">外出不要で安心</p>
                      <p>PC・スマホで簡単接続</p>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <svg class="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div class="text-sm text-gray-700">
                      <p class="font-medium mb-1">平日 9:00〜18:00</p>
                      <p>完全無料でご相談</p>
                    </div>
                  </div>
                </div>
              </div>
              <button @click="$router.push('/online-consultation')" class="btn bg-purple-600 text-white hover:bg-purple-700 btn-lg w-full py-4 text-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
                オンライン相談を予約
              </button>
            </div>
          </div>
          
          <div class="bg-white rounded-xl p-8 shadow-md">
            <p class="text-lg text-gray-700 mb-4">
              <svg class="w-6 h-6 inline mr-2 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
              </svg>
              <span class="font-semibold">今月の見学予約枠は残りわずか！</span>
            </p>
            <p class="text-gray-600">
              人気の事業所は予約が埋まりやすいため、お早めのご予約をおすすめします
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      searchForm: {
        area: '',
        service: ''
      },
      featuredCenters: [
        {
          id: 1,
          name: 'さくらワークセンター',
          image: '/images/パソコンを使った作業.png',
          rating: 4.5,
          reviewCount: 32,
          description: 'アットホームな雰囲気で、一人ひとりに寄り添った支援を行っています。',
          tags: ['就労移行支援', '駅近', 'IT訓練']
        },
        {
          id: 2,
          name: 'みらい就労支援事業所',
          image: '/images/事業所で作業1.png',
          rating: 4.8,
          reviewCount: 45,
          description: '最新の設備と充実したプログラムで、確実なスキルアップを支援します。',
          tags: ['就労継続支援A型', '高賃金', '製造業']
        },
        {
          id: 3,
          name: 'ステップアップ横浜',
          image: '/images/事業所で作業2.png',
          rating: 4.3,
          reviewCount: 28,
          description: '多様な職種の体験ができ、自分に合った仕事を見つけられます。',
          tags: ['就労移行支援', '企業実習', '資格取得']
        }
      ],
      regions: [
        { id: 'hokkaido', name: '北海道', count: 342 },
        { id: 'tohoku', name: '東北', count: 456 },
        { id: 'kanto', name: '関東', count: 2341 },
        { id: 'chubu', name: '中部', count: 892 },
        { id: 'kinki', name: '近畿', count: 1523 },
        { id: 'chugoku', name: '中国', count: 423 },
        { id: 'shikoku', name: '四国', count: 234 },
        { id: 'kyushu', name: '九州', count: 678 }
      ],
      latestReviews: [
        {
          id: 1,
          centerName: 'さくらワークセンター',
          rating: 5,
          date: '2024年3月15日',
          comment: 'スタッフの方々がとても親切で、自分のペースで学ぶことができました。おかげで希望の仕事に就くことができました。',
          userName: 'A.Tさん',
          userType: '利用者'
        },
        {
          id: 2,
          centerName: 'みらい就労支援事業所',
          rating: 4,
          date: '2024年3月14日',
          comment: '実践的な訓練が多く、実際の職場で役立つスキルを身につけることができました。',
          userName: 'B.Sさん',
          userType: '利用者家族'
        }
      ]
    }
  },
  methods: {
    searchCenters() {
      this.$router.push({
        path: '/centers',
        query: {
          area: this.searchForm.area,
          service: this.searchForm.service
        }
      })
    }
  }
}
</script>