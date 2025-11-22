<template>
<section class="projects">
<div class="grid">
<ProjectCard v-for="p in projects" :key="p.id" :project="p" />
</div>
</section>
</template>


<script setup>
import ProjectCard from './ProjectCard.vue'
import projects from '../data/projects.js'
</script>


<style scoped>
.projects{padding:20px 16px;max-width:1100px;margin:0 auto}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
@media (max-width:900px){.grid{grid-template-columns:repeat(2,1fr)}}
@media (max-width:600px){.grid{grid-template-columns:1fr}}
</style>