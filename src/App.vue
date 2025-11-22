<template>
<div id="app">
<Header />


<!-- animação simples entre rotas -->
<transition name="fade" mode="out-in">
<router-view />
</transition>


<Footer />
</div>
</template>


<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>


<style scoped>
/* --- Layout da Home --- */
.projects-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2rem;
}

.project-card {
  background: #2b2e4a;
  padding: 1.5rem;
  border-radius: 10px;
  width: 320px;
  border: 1px solid #604d82;
  box-shadow: 0 0 10px rgba(255,255,255,0.05);
  transition: 0.3s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 0 12px rgba(200, 180, 255, 0.25);
}

/* Título */
.project-card h3 {
  margin: 0 0 10px;
  color: #eacaff;
}

/* Descrição */
.project-card p {
  color: #dcd2ff;
}

/* Tags */
.tag {
  display: inline-block;
  padding: 5px 10px;
  margin: 5px 5px 0 0;
  background: #453d5d;
  color: #e7d4ff;
  border-radius: 20px;
  font-size: 12px;
}

/* Links */
.project-card a {
  display: inline-block;
  margin-top: 10px;
  color: #a6c8ff;
  font-weight: bold;
}

.project-card a:hover {
  color: #c5dcff;
}

/* Ajuste responsivo */
@media (max-width: 768px) {
  .project-card {
    width: 100%;
  }
}
/* transição de página */
.fade-enter-active, .fade-leave-active { transition: opacity 300ms ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }


#app { display:flex; min-height:100vh; flex-direction:column; }

#app {
  background: #1a1b26;
  min-height: 100vh;
}
</style>