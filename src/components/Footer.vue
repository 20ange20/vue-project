<template>
  <br>
<footer class="site-footer">
<div class="container">
<div>© {{ new Date().getFullYear() }} — Angélica</div>
<div class="links">
<a href="https://github.com/20ange20" target="_blank" rel="noopener">GitHub</a>
<a href="https://www.linkedin.com/in/ang%C3%A9lica-ferreira-silva-1454052a6/" target="_blank" rel="noopener">LinkedIn</a>
</div>
</div>
</footer>
</template>


<script setup>
</script>


<style scoped>
footer {
  background: #1a1b26;
  color: #cdd6f4;
  padding: 20px;
  text-align: center;
  margin-top: auto;
  border-top: 1px solid #2d2f3b;
}

footer a {
  color: #89b4fa;
  margin: 0 10px;
  text-decoration: none;
}

footer a:hover {
  color: #f5c2e7;
}
</style>