<template>
<div id="app">
<Header />
<!-- Vídeo de fundo -->
    <video autoplay muted loop playsinline class="bg-video">
      <source src="/videos/fundo.mp4" type="video/mp4" />
    </video>

<!-- animação simples entre rotas -->
<transition name="fade" mode="out-in">
<router-view />
</transition>


<Footer />
</div>
</template>


<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>
