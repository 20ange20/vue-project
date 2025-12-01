<template>
  <main class="container">

    <!-- Botão de voltar estilizado -->
    <button class="back-btn" @click="$router.back()">← Voltar</button>

    <div v-if="project" class="project-box">

      <h2 class="title">{{ project.title }}</h2>

      <!-- IMAGEM DO PROJETO -->
     <img 
  v-if="project.demoImage"
  :src="project.demoImage"
  alt="Imagem do projeto"
  class="project-image"
/>


      <p class="desc">{{ project.description }}</p>

      <p><strong>Tecnologias:</strong> {{ project.technologies.join(', ') }}</p>

      <div class="links">
        <a v-if="project.repo" :href="project.repo" target="_blank">🔗 Repositório</a>
        <a v-if="project.demo" :href="project.demo" target="_blank">🚀 Demo</a>
      </div>

    </div>

    <div v-else>
      <p>Projeto não encontrado.</p>
    </div>

  </main>
</template>


<script setup>
import projects from '../data/projects.js'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id

const project = computed(() => projects.find(p => p.id === id))
</script>


<style scoped>
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px 16px;
}

/* CARD PRINCIPAL */
.project-box {
  background: #1e1e2e;
  padding: 25px;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.25);
}

/* TÍTULO */
.title {
  color: #cdd6f4;
  margin-bottom: 15px;
  font-size: 28px;
}

/* IMAGEM DO PROJETO */
.project-image {
  width: 100%;
  max-width: 900px;
  border-radius: 14px;
  margin: 20px 0;
  box-shadow: 0 4px 10px rgba(0,0,0,0.25);
}

/* DESCRIÇÃO */
.desc {
  color: #bac2de;
  line-height: 1.6;
  margin-bottom: 15px;
}

/* LINKS */
.links a {
  display: inline-block;
  margin-right: 20px;
  color: #89b4fa;
  text-decoration: none;
  font-weight: 600;
}
.links a:hover {
  color: #b4befe;
}

/* BOTÃO DE VOLTAR LINDO */
.back-btn {
  background: #89b4fa;
  color: #1e1e2e;
  padding: 10px 22px;
  border-radius: 30px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  margin-bottom: 20px;
  transition: 0.2s ease;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}
.back-btn:hover {
  background: #b4befe;
  transform: translateY(-2px);
}
</style>
