<template>
<div id="app">
<Header />


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


<style scoped>
/* transição de página */
.fade-enter-active, .fade-leave-active { transition: opacity 300ms ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }


#app { display:flex; min-height:100vh; flex-direction:column; }
</style>