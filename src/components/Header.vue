<template>
  <header class="site-header">
    <div class="overlay"></div>
    <div class="container">
      <nav>
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/sobre" class="nav-link">Sobre</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>

</script>

<style scoped>
.site-header {
  position: relative;
  padding: 20px 0;
  color: #cdd6f4;

  /* Imagem de fundo */
  background-image: url('/img/bg.jpg'); 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

/* Efeito escuro pra deixar o texto legível */
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(2px);
  pointer-events: none;
}

.container {
  position: relative; /* Para ficar acima da overlay */
  z-index: 2;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: auto;
  padding: 0 20px;
}

nav a {
  color: #89b4fa;
  margin-left: 20px;
  text-decoration: none;
  font-weight: 600;
  transition: 0.3s ease;
}

nav a:hover {
  color: #f5c2e7;
  transform: translateY(-2px);
}

h1 {
  color: #cdd6f4;
  font-size: 22px;
}
</style>
