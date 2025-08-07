<template>
  <div id="app">
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <BookingSection />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import BookingSection from './components/BookingSection.vue'
import Footer from './components/Footer.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', system-ui, sans-serif;
  background-color: #000;
  color: #fff;
  line-height: 1.6;
  overflow-x: hidden;
}

#app {
  min-height: 100vh;
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #111;
}

::-webkit-scrollbar-thumb {
  background: #D4AF37;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #B8941F;
}
</style>