<template>
<article class="card" @click="openDetail">
<h3 class="title">{{ project.title }}</h3>
<p class="desc">{{ project.description }}</p>
<div class="tags">
<span v-for="(t, i) in project.technologies" :key="i" class="tag">{{ t }}</span>
</div>
<div class="actions">
<a v-if="project.repo" :href="project.repo" target="_blank" @click.stop>Repositório</a>
<a v-if="project.demo" :href="project.demo" target="_blank" @click.stop>Demo</a>
</div>
</article>
</template>


<script setup>
import { useRouter } from 'vue-router'
const props = defineProps({ project: Object })
const router = useRouter()


function openDetail() {
router.push({ name: 'ProjectDetail', params: { id: props.project.id } })
}
</script>


<style scoped>
.card {
  background: #1e1f29;
  border: 1px solid #2d2f3b;
  border-radius: 12px;
  padding: 20px;
  width: 350px;
  transition: 0.3s;
  color: #cdd6f4;
}

.card:hover {
  transform: translateY(-5px);
  border-color: #89b4fa;
  box-shadow: 0 4px 14px rgba(137, 180, 250, 0.2);
}

h3 {
  color: #f5c2e7;
}

.tags {
  margin-top: 10px;
}

.tag {
  background: #2d2f3b;
  color: #89b4fa;
  padding: 4px 10px;
  border-radius: 8px;
  margin-right: 6px;
  font-size: 12px;
}

.links a {
  color: #94e2d5;
  font-weight: 600;
  text-decoration: none;
  margin-right: 12px;
}

.links a:hover {
  color: #f5c2e7;
}

</style>