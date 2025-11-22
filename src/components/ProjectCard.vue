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
.card{border:1px solid #e6e6e6;border-radius:8px;padding:14px;cursor:pointer;background:white}
.title{margin:0 0 6px}
.desc{margin:0 0 10px;color:#334155}
.tags{margin-bottom:10px}
.tag{display:inline-block;border-radius:999px;padding:4px 8px;margin-right:6px;font-size:0.8rem;background:#f1f5f9}
.actions a{margin-right:8px;font-size:0.9rem;text-decoration:underline}
</style>