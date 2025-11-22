<template>
  <section class="projects">
    <div class="projects-container">
      <ProjectCard
        v-for="p in projects"
        :key="p.id"
        :project="p"
      />
    </div>
  </section>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue'
import projects from '../data/projects.js'
</script>

<style scoped>
.projects-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2rem;
  justify-content: flex-start;
}
</style>
