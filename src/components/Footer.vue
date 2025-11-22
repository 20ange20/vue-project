<template>
<footer class="site-footer">
<div class="container">
<div>© {{ new Date().getFullYear() }} — Seu Nome</div>
<div class="links">
<a href="https://github.com/20ange20" target="_blank" rel="noopener">GitHub</a>
<a href="https://www.linkedin.com/in/seu-usuario" target="_blank" rel="noopener">LinkedIn</a>
</div>
</div>
</footer>
</template>


<script setup>
</script>


<style scoped>
.site-footer{margin-top:auto;background:#0b1220;color:#dbeafe;padding:14px 0}
.container{display:flex;justify-content:space-between;align-items:center;max-width:1100px;margin:0 auto;padding:0 16px}
.links a{margin-left:12px;color:inherit;text-decoration:none}
</style>