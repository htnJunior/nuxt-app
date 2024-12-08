<template>
  <div>
    <div class="intro-text">
      Nossa missão é impulsionar o protagonismo feminino na tecnologia, através da indicação de formações na área da tecnologia e empregabilidade de mulheres.
    </div>
    <div class="info-cards">
      <Card @click="goToInspirations()" class="info-card-body">
        <template #title>
          Inspirações
          <i class="pi pi-star"></i>
        </template>
        <template #content>
          <p class="m-0">
            Mulheres têm desempenhado papéis fundamentais na história da tecnologia,
            superando desafios e abrindo caminho para inovações que transformam o mundo.
          </p>
        </template>
      </Card>
      <Card @click="goToCourses()" class="info-card-body">
        <template #title>
          Cursos
          <i class="pi pi-book"></i>
        </template>
        <template #content>
          <p class="m-0">
            Explore oportunidades de aprendizado com cursos que oferecem conteúdos atualizados e práticos.
          </p>
        </template>
      </Card>
      <Card @click="goToTips()" class="info-card-body">
        <template #title>
          Dicas
          <i class="pi pi-check"></i>
        </template>
        <template #content>
          <p class="m-0">
            Encontre sugestões e insights práticos para facilitar seu dia a dia,
            aprimorar suas habilidades e alcançar seus objetivos com mais eficiência.
          </p>
        </template>
      </Card>
      <Card @click="goToOportunities()" class="info-card-body">
        <template #title>
          Oportunidades
          <i class="pi pi-briefcase"></i>
        </template>
        <template #content>
          <p class="m-0">
            Descubra novas possibilidades de crescimento pessoal e profissional, com chances únicas para explorar, aprender e se desenvolver.
          </p>
        </template>
      </Card>
    </div>
    <div class="main-image">
      <img src="../public/womantech2.jpeg" alt="main-image" class="woman-tech-image">
    </div>
    <div class="courses-section">
      <div class="section-title">
        Escolha o curso ideal para sua carreira!
      </div>
      <div class="course-list">
        <div class="course-tag">
          <div>
            <i class="pi pi-cloud course-icon"></i>
            <div class="course-title">
              Cloud Engineering
            </div>
          </div>
          <div class="course-description">
            É a prática de projetar, implementar e gerenciar sistemas e aplicações na nuvem,
            utilizando serviços como infraestrutura, armazenamento e computação escaláveis.
            Envolve automação, segurança e otimização para garantir eficiência e custo-benefício
            em ambientes como AWS, Azure e Google Cloud.
          </div>
        </div>
        <div class="course-tag">
          <div>
            <i class="pi pi-mobile course-icon"></i>
            <div class="course-title">
              Mobile Development
            </div>
          </div>
          <div class="course-description">
            É o processo de criar aplicativos para dispositivos móveis, como smartphones e tablets,
            utilizando tecnologias nativas (Swift para iOS, Kotlin/Java para Android) ou híbridas (React Native, Flutter).
            Foca em desempenho, usabilidade e design responsivo.
          </div>
        </div>
        <div class="course-tag">
          <div>
            <i class="pi pi-server course-icon"></i>
            <div class="course-title">
              DevOps
            </div>
          </div>
          <div class="course-description">
            É uma abordagem cultural e técnica que integra desenvolvimento (Dev) e
            operações (Ops) para acelerar a entrega de software com qualidade.
            Envolve automação, integração contínua (CI), entrega contínua (CD),
            monitoramento e colaboração para otimizar processos e reduzir o tempo de lançamento de produtos.
          </div>
        </div>
      </div>
      <div class="all-courses-tag">
        <Button
            label="Todos os cursos"
            icon="pi pi-arrow-right"
            iconPos="right"
            severity="danger"
            variant="text"
            @click="goToCourses()"
            raised
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import Card from "primevue/card";
import {useRouter} from "vue-router";

const router = useRouter();

const goToCourses = () => {
  router.push('/courses');
}

const goToInspirations = () => {
  router.push('/inspirations');
}

const goToTips = () => {
  router.push('/tips');
}

const goToOportunities = () => {
  router.push('/oportunities');
}

</script>

<style scoped>

.intro-text{
  display: flex;
  justify-content: center;
  font-weight: 500;
}

.info-cards{
  display: flex;
  gap: 10px;
  margin: 40px 40px 80px;
  cursor: pointer;
}

.info-cards .p-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 10px;
}

.info-cards .p-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.p-card{
  border: 1px solid rgba(247, 86, 124, 0.44);
}

.courses-section{
  padding: 5px;
  margin: 5px;
}

.section-title{
  display: flex;
  justify-content: center;
  font-size: 2rem;
  font-weight: 600;
  margin-left: 25px;
  margin-bottom: 45px;
  margin-top: 50px;
}

.course-list{
  display: flex;
  flex-direction: row;
}

.course-tag{
  padding: 8px;
  margin: 20px;
}

.course-title{
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 1.5rem;
  color: rgb(247, 86, 124);
}

.course-icon{
  font-size: 2.5rem;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
  padding: 5px;
}

.course-description{
  font-weight: 300;
}

.all-courses-tag{
  padding: 8px;
  margin: 20px;
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
}

.main-image img {
  width: 100%; /* Ajusta ao container */
  height: auto; /* Mantém a proporção */
}

.main-image img{
  display: flex;
}

.woman-tech-image{
  width: 100%;
  height: 450px;
}

.info-card-body{
  width: 550px;
  height: 220px;
  background-color: rgba(247, 86, 124, 0.07);
}

@keyframes slidedown-icon {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(20px);
  }

  100% {
    transform: translateY(0);
  }
}

.slidedown-icon {
  animation: slidedown-icon;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}

@media (max-width: 1400px) {
  .intro-text {
    font-size: 1rem;
    padding: 10px;
    text-align: center;
    display: flex;
    justify-content: center;
  }

  .info-cards {
    flex-direction: column;
    gap: 15px;
  }

  .info-card-body {
    width: 100%;
    height: auto;
  }

  .woman-tech-image {
    height: auto;
    width: 100%;
  }

  .course-list {
    flex-direction: column;
    margin: 0 10px;
  }

  .section-title {
    font-size: 1.5rem;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }

  .all-courses-tag {
    font-size: 1rem;
  }

  .course-title {
    font-size: 1.2rem;
  }

  .course-icon {
    font-size: 2rem;
  }
}

</style>