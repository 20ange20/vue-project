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
section {
  color: #cdd6f4;
}

h1, h2 {
  color: #f5c2e7;
}

.home-container {
  max-width: 900px;
  margin: auto;
  margin-top: 40px;
  padding: 0 20px;
}
</style>