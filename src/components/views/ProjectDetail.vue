<template>
<main class="container">
<button @click="$router.back()">← Voltar</button>


<div v-if="project">
<h2>{{ project.title }}</h2>
<p>{{ project.description }}</p>
<p><strong>Tecnologias:</strong> {{ project.technologies.join(', ') }}</p>
<p v-if="project.repo"><a :href="project.repo" target="_blank">Repositório</a></p>
<p v-if="project.demo"><a :href="project.demo" target="_blank">Demo</a></p>
</div>


<div v-else>
<p>Projeto não encontrado.</p>
</div>
</main>
</template>


<script setup>
import projects from '../data/projects.js'
const props = defineProps({ id: String })
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const id = route.params.id


const project = computed(() => projects.find(p => p.id === id))
</script>


<style scoped>
.container{max-width:900px;margin:0 auto;padding:20px 16px}
</style>