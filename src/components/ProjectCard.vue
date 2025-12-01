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
<br></br>
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
  padding: 22px;
  border-radius: 14px;
  box-shadow: 0 8px 22px rgba(0,0,0,0.08);
  transition: transform .25s, box-shadow .25s;
  cursor: pointer;
  width: 100%;
  min-height: 260px; /* altura mínima padronizada */
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 32px rgba(0,0,0,0.12);
}

/* Imagem da demo */
.demo-img-wrapper {
  display: block;
  width: 100%;
  height: 180px;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 15px;
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
  font-size: 1.25rem;
  margin: 8px 0;
  font-weight: 700;
  color: #690f86;
}

.desc {
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 14px;
}

/* Tags */
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 18px;
}

.tag {
  background: #eef0f6;
  padding: 4px 10px;
  border-radius: 8px;
  font-size: 0.78rem;
  color: #333;
}

/* Botões */
.actions {
  display: flex;
  gap: 10px;
}

.btn {
  padding: 8px 14px;
  border-radius: 8px;
  background: #f0f1f7;
  text-decoration: none;
  color: #333;
  font-weight: 600;
  transition: background .2s;
}

.btn:hover {
  background: #e2e4ec;
}

.demo-btn {
  background: #993bf6;
  color: white;
}

.demo-btn:hover {
  background: #4d0ab0;
}


</style>
