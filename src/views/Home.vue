<template>
<main class="home container">
<section class="intro">
<h2>Olá! Meu nome é Angélica</h2>
<p>Desenvolvedora Front-end! Aqui estão alguns dos meus trabalhos.</p>
</section>

<br>
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
  color: #d770bc;
}

.home-container {
  max-width: 900px;
  margin: auto;
  margin-top: 40px;
  padding: 0 20px;
}
</style>