<template>
  <div id="app" class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-1">
      <router-view />
    </main>
    <Footer />
    <FloatingCTA />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import FloatingCTA from './components/FloatingCTA.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    FloatingCTA
  }
}
</script>

<style>
/* Global styles are handled in main.css */
</style>