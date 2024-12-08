<template>
  <div>
    <div class="navigation-buttons">
      <NuxtLink to="/about" class="button">Sobre</NuxtLink>
      <NuxtLink to="/courses" class="button">Cursos</NuxtLink>
      <NuxtLink to="/donate" class="button">Apoie</NuxtLink>
    </div>
    <div class="developed-by">Desenvolvido Por: Lorrayne M. Leite</div>
  </div>
</template>

<script setup lang="ts">

import Image from "primevue/image";
</script>

<style scoped>

.navigation-buttons{
  display: flex;
  justify-content: center;
  padding: 5px;
  gap: 10px;
}

.developed-by{
  display: flex;
  justify-content: center;
  padding: 5px;
  color: rgb(247, 86, 124);
}

.button {
  padding: 5px;
  margin-top: 2px;
  border-radius: 2px;
  color: rgb(247, 86, 124);
  text-decoration: none;
  transition: border-bottom 0.3s ease;
  border-bottom: 1px solid rgba(244, 175, 180, 0.35);
}

.button:hover {
  border-bottom: 1px solid rgb(247, 86, 124);;
}

</style>