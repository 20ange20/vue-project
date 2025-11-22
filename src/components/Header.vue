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
.site-header { background:#0f172a; color:white; position:sticky; top:0; z-index:10 }
.container { display:flex; align-items:center; justify-content:space-between; padding:12px 16px; max-width:1100px; margin:0 auto }
.logo { font-size:1.1rem; margin:0 }
.nav-link { margin-left:12px; color:inherit; text-decoration:none }
.nav-link.router-link-active { font-weight:700 }


@media (max-width:600px){
.container{padding:10px}
.nav-link{margin-left:8px;font-size:0.95rem}
}
</style>