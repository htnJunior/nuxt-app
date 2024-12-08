<template>
  <div>
    <div class="top-icons">
      <div class="navigation-logo">
        <img src="../../public/logo-mtech.png" alt="m-tech-banner" class="logo-mtech" @click="goToHome()">
      </div>
      <div class="navigation-buttons">
        <NuxtLink to="/about" class="button">Sobre</NuxtLink>
        <NuxtLink to="/courses" class="button">Cursos</NuxtLink>
        <NuxtLink to="/donate" class="button">Apoie</NuxtLink>
      </div>
    </div>
    <div class="mulheres-img-container">
      <Image src="main-banner.png" alt="Image" class="mulheres-img"/>
    </div>
  </div>
</template>

<script setup>
import Image from 'primevue/image';
import {useRouter} from "vue-router";

const router = useRouter();
const goToHome = () => {
  router.push('/about');
}

</script>

<style scoped>

.top-icons{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.navigation-logo{
  margin: 20px 20px 5px;
  display: flex;
}

.navigation-buttons {
  margin: 2px 10px 5px;
}

.mulheres-img-container{
  display: flex;
  justify-content: center;
  width: 100%;
}

.mulheres-img{
  height: 250px;
  display: flex;
  justify-content: center;
  margin-bottom: 45px;
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

.logo-mtech{
  width: 80px;
  height: 80px;
  cursor: pointer;
}

</style>