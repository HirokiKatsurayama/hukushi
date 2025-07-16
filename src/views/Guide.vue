<template>
  <div class="bg-gray-50 min-h-screen">
    <div class="container py-12">
      <!-- ヒーローセクション with 講義の画像 -->
      <div class="text-center mb-12">
        <div class="mb-8">
          <img 
            src="/images/講義.png" 
            alt="講義の様子"
            class="w-full max-w-2xl mx-auto rounded-xl shadow-lg"
          >
        </div>
        <h1 class="text-4xl font-bold text-gray-900 mb-4">お役立ち情報</h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          障害福祉サービスの利用に関する基礎知識や最新情報をお届けします
        </p>
      </div>

      <!-- カテゴリー別ガイド -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <router-link to="/guide/basics" class="card hover:shadow-lg transition-shadow">
          <div class="card-body text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">基礎知識</h3>
            <p class="text-gray-600 text-sm">サービスの種類や利用方法</p>
          </div>
        </router-link>

        <router-link to="/guide/process" class="card hover:shadow-lg transition-shadow">
          <div class="card-body text-center">
            <div class="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">利用の流れ</h3>
            <p class="text-gray-600 text-sm">申請から利用開始まで</p>
          </div>
        </router-link>

        <router-link to="/guide/support" class="card hover:shadow-lg transition-shadow">
          <div class="card-body text-center">
            <div class="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">支援制度</h3>
            <p class="text-gray-600 text-sm">利用できる各種制度</p>
          </div>
        </router-link>
      </div>

      <!-- 最新記事 -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-8">最新の記事</h2>
        <div class="space-y-6">
          <article v-for="article in articles" :key="article.id" class="card">
            <div class="card-body">
              <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div class="md:col-span-3">
                  <div class="flex items-center gap-4 mb-3">
                    <span class="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                      {{ article.category }}
                    </span>
                    <span class="text-gray-500 text-sm">{{ article.date }}</span>
                    <span class="text-gray-500 text-sm">{{ article.readTime }}</span>
                  </div>
                  <h3 class="text-xl font-semibold mb-3">{{ article.title }}</h3>
                  <p class="text-gray-700 mb-4">{{ article.excerpt }}</p>
                  <router-link :to="`/guide/article/${article.id}`" class="text-primary-500 hover:text-primary-600 font-medium">
                    続きを読む →
                  </router-link>
                </div>
                <div>
                  <img :src="article.image" :alt="article.title" class="w-full h-32 md:h-full object-cover rounded-lg">
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <!-- よくある質問 -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-8">よくある質問</h2>
        <div class="bg-white rounded-lg shadow-sm">
          <div v-for="(faq, index) in faqs" :key="faq.id" class="border-b last:border-b-0">
            <button 
              @click="toggleFaq(faq.id)"
              class="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
            >
              <h3 class="font-medium text-gray-900">{{ faq.question }}</h3>
              <svg 
                class="w-5 h-5 text-gray-500 transition-transform"
                :class="{ 'transform rotate-180': openFaq === faq.id }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div v-if="openFaq === faq.id" class="px-6 py-4 bg-gray-50">
              <p class="text-gray-700">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- お問い合わせCTA -->
      <div class="bg-primary-50 rounded-xl p-8 text-center">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">もっと詳しく知りたい方へ</h2>
        <p class="text-gray-700 mb-6">
          専門スタッフが無料でご相談に応じます。お気軽にお問い合わせください。
        </p>
        <router-link to="/contact" class="btn btn-primary btn-lg">
          無料相談はこちら
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Guide',
  data() {
    return {
      openFaq: null,
      articles: [
        {
          id: 1,
          category: '基礎知識',
          date: '2024年3月20日',
          readTime: '5分で読める',
          title: '就労継続支援A型とB型の違いとは？選び方のポイントを解説',
          excerpt: '就労継続支援にはA型とB型があり、それぞれ特徴が異なります。雇用契約の有無、賃金・工賃の違い、働き方の柔軟性など、選択する際の重要なポイントをわかりやすく解説します。',
          image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop'
        },
        {
          id: 2,
          category: '制度解説',
          date: '2024年3月18日',
          readTime: '7分で読める',
          title: '障害者手帳がなくても利用できる？福祉サービスの利用条件',
          excerpt: '障害福祉サービスの利用には必ずしも障害者手帳が必要ではありません。医師の診断書や自治体の判断により利用できるケースもあります。具体的な条件と申請方法について詳しく説明します。',
          image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop'
        },
        {
          id: 3,
          category: '体験談',
          date: '2024年3月15日',
          readTime: '10分で読める',
          title: '利用者インタビュー：就労移行支援から一般就労への道のり',
          excerpt: '実際に就労移行支援を利用して一般企業への就職を果たした方々のリアルな体験談をご紹介。訓練内容、支援の効果、就職活動のプロセスなど、これから利用を検討している方の参考になる情報が満載です。',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop'
        }
      ],
      faqs: [
        {
          id: 1,
          question: '障害福祉サービスを利用するには何が必要ですか？',
          answer: 'サービスを利用するには、まずお住まいの市区町村の障害福祉課などで相談し、サービス利用の申請を行います。その後、認定調査を受け、サービス等利用計画を作成し、支給決定を受ける必要があります。'
        },
        {
          id: 2,
          question: '利用料金はどのくらいかかりますか？',
          answer: '障害福祉サービスの利用料は、原則として1割負担ですが、所得に応じて月額上限額が設定されています。生活保護世帯は0円、市町村民税非課税世帯も0円、それ以外の世帯でも収入により上限額が異なります。'
        },
        {
          id: 3,
          question: '複数のサービスを同時に利用できますか？',
          answer: 'サービスの種類によっては併用が可能です。例えば、就労継続支援と生活介護の併用はできませんが、就労系サービスとグループホームの併用は可能です。詳しくは相談支援専門員にご相談ください。'
        },
        {
          id: 4,
          question: '事業所の見学はできますか？',
          answer: 'ほとんどの事業所で見学を受け付けています。実際の雰囲気や支援内容を確認するためにも、利用前の見学をおすすめします。事前に電話やメールで予約を取ってから訪問しましょう。'
        }
      ]
    }
  },
  methods: {
    toggleFaq(id) {
      this.openFaq = this.openFaq === id ? null : id
    }
  }
}
</script>