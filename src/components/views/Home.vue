<template>
<main class="home container">
<section class="intro">
<h2>Olá — Eu sou Seu Nome</h2>
<p>Desenvolvedor(a) Front-end com foco em Vue.js. Aqui estão alguns dos meus trabalhos.</p>
</section>


<section>
<h2>Projetos</h2>
<ProjectsList />
</section>
</main>
</template>


<script setup>
import ProjectsList from '../components/ProjectsList.vue'
</script>


<style scoped>
.container{max-width:1100px;margin:0 auto;padding:20px 16px}
.intro{margin-bottom:22px}
</style>