<template>
<header class="site-header">
<div class="container">
<h1 class="logo">Seu Nome</h1>
<nav>
<router-link to="/" class="nav-link">Home</router-link>
<router-link to="/sobre" class="nav-link">Sobre</router-link>
</nav>
</div>
</header>
</template>


<script setup>
// componente simples
</script>


<style scoped>
header {
  background: #1a1b26;
  color: #cdd6f4;
  padding: 20px 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
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