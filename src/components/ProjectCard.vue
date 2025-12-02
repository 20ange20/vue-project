<template>
  <article class="card" @click="openDetail">
    
    <!-- IMAGEM DA DEMO -->
    <a 
      v-if="project.demoImage" 
      :href="project.demo" 
      target="_blank" 
      class="demo-img-wrapper"
      @click.stop
    >
      <img :src="project.demoImage" :alt="project.title" class="demo-img" />
    </a>

    <!-- TÍTULO + DESCRIÇÃO -->
    <h3 class="title">{{ project.title }}</h3>
    <p class="desc">{{ project.description }}</p>

    <!-- TAGS -->
    <div class="tags">
      <span 
        v-for="(t, i) in project.technologies" 
        :key="i" 
        class="tag"
      >
        {{ t }}
      </span>
    </div>

    <!-- BOTÕES -->
    <div class="actions">
      <a 
        v-if="project.repo" 
        :href="project.repo" 
        target="_blank" 
        class="btn"
        @click.stop
      >
        Repositório
      </a>
    </div>

  </article>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps({ project: Object });

function openDetail() {
  router.push({ 
    name: "ProjectDetail", 
    params: { id: props.project.id } 
  });
}
</script>

<style scoped>
.card {
  background: #d9f6ca;
  padding: 16px;          /* menor */
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.07);
  transition: transform .25s, box-shadow .25s;
  cursor: pointer;
  width: 100%;
  min-height: 220px;      /* altura menor */
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 26px rgba(0,0,0,0.12);
}

/* Imagem */
.demo-img-wrapper {
  width: 100%;
  height: 140px;          /* menor */
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 12px;
}

.demo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .3s;
}

.demo-img-wrapper:hover .demo-img {
  transform: scale(1.05);
}

/* Conteúdo */
.title {
  font-size: 1.05rem;      /* menor */
  margin: 4px 0;
  font-weight: 700;
  color: #690f86;
}

.desc {
  font-size: 0.85rem;
  color: #444;
  margin-bottom: 10px;
}

/* Tags */
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
}

.tag {
  background: #eef0f6;
  padding: 3px 8px;
  border-radius: 7px;
  font-size: 0.70rem;
  color: #333;
}

/* Botões */
.actions {
  display: flex;
  gap: 8px;
}

.btn {
  padding: 6px 10px;      /* menor */
  border-radius: 7px;
  background: #f0f1f7;
  text-decoration: none;
  color: #333;
  font-weight: 600;
  font-size: 0.78rem;     /* menor */
  transition: background .2s;
}

.btn:hover {
  background: #e2e4ec;
}
</style>
