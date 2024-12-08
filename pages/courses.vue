<template>
  <div>
    <div class="courses-subtitle">
      <p>Todos os cursos</p>
    </div>
    <div class="card">
      <Carousel :value="products" :numVisible="4" :numScroll="4">
        <template #item="slotProps">
          <div class="courses-container">
            <div class="course-image-container">
              <img :src="slotProps.data.image" :alt="slotProps.data.name" class="course-image" />
            </div>
            <div class="course-name">
              {{ slotProps.data.name }}
            </div>
            <div class="course-link">
              <a :href="slotProps.data.link" target="_blank" rel="noopener noreferrer">
                <Button
                    severity="danger"
                    icon="pi pi-youtube"
                    class="button-course"
                    label="Assistir Curso"
                    raised
                />
              </a>
            </div>
          </div>
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Carousel from 'primevue/carousel';

const products = ref([
  {
    id: '1000',
    name: 'Lógica de Programação',
    description: 'Elegant bamboo watch for every occasion.',
    image: '/logica-de-programacao.jpeg',
    link: 'https://www.youtube.com/watch?v=gMxQ8vxH9Vk'
  },
  {
    id: '1000',
    name: 'Introdução ao Desenvolvimento IOS',
    description: 'Elegant bamboo watch for every occasion.',
    image: '/introducao-dev-ios.jpeg',
    link: 'https://www.youtube.com/watch?v=I8p8KlKEI_Y'
  },
  {
    id: '1001',
    name: 'Computação na Núvem',
    description: 'Stylish sunglasses to complement any outfit.',
    image: '/computacao-nuvem.jpeg',
    link: 'https://www.eucapacito.com.br/cursos/o-que-e-computacao-em-nuvem/',
  },
  {
    id: '1002',
    name: 'Noções Básicas da Internet',
    description: 'Comfortable cotton t-shirt in vibrant blue.',
    image: '/nocoes-basicas-internet.jpeg',
    link: 'https://www.eucapacito.com.br/cursos/nocoes-basicas-da-internet/',
  },
  {
    id: '1003',
    name: 'Introdução à Análise de Dados',
    description: 'High-quality headset with surround sound.',
    image: '/desenvolvimento-web-microsoft.png',
    link: 'https://www.eucapacito.com.br/cursos/cintroducao-a-analise-de-dados-da-microsoft/',
  },
  {
    id: '1007',
    name: 'C# para Iniciantes',
    description: 'Comfortable wrist band for daily use.',
    image: '/csharp-iniciantes.jpeg',
    link: 'https://learn.microsoft.com/pt-br/shows/csharp-for-beginners/',
  },
  {
    id: '1004',
    name: 'Introdução ao Desenvolvimento para a Web',
    description: 'Premium leather handbag with multiple compartments.',
    image: '/desenvolvimento-web-microsoft.png',
    link: 'https://learn.microsoft.com/pt-br/training/modules/get-started-with-web-development/1-introduction',
  },
  {
    id: '1005',
    name: 'Python para iniciantes',
    description: 'Durable case for all smartphone models.',
    image: '/desenvolvimento-web-microsoft.png',
    link: 'https://learn.microsoft.com/pt-br/training/paths/beginner-python/',
  },
  {
    id: '1007',
    name: 'Conceitos básicos da rede de computadores',
    description: 'Comfortable wrist band for daily use.',
    image: '/desenvolvimento-web-microsoft.png',
    link: 'https://learn.microsoft.com/pt-br/training/modules/network-fundamentals/',
  },
  {
    id: '1004',
    name: 'Conceitos básicos da segurança de rede',
    description: 'Premium leather handbag with multiple compartments.',
    image: '/desenvolvimento-web-microsoft.png',
    link: 'https://learn.microsoft.com/pt-br/training/modules/network-fundamentals-2/',
  },
  {
    id: '1005',
    name: 'Introdução ao Python',
    description: 'Durable case for all smartphone models.',
    image: '/desenvolvimento-web-microsoft.png',
    link: 'https://learn.microsoft.com/pt-br/training/modules/intro-to-python/',
  },
  {
    id: '1006',
    name: 'Introdução aos conceitos básicos do Microsoft Azure',
    description: 'Stylish and sturdy wooden chair for your home.',
    image: '/desenvolvimento-web-microsoft.png',
    link: 'https://learn.microsoft.com/pt-br/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/',
  },
]);

</script>

<style scoped>

.courses-title{
  font-weight: 400;
  font-size: 2rem;
  margin: 40px;
}

.courses-subtitle{
  margin: 40px;
  font-weight: 500;
  color: #FF609A;
  display: flex;
  justify-content: center;
}

.courses-subtitle p{
  border-bottom: 1px solid #FF609A;
  cursor: pointer;
}

.courses-subtitle:hover{
  color: #ff1269;
}

.courses-subtitle p:hover{
  border-bottom: 1px solid #ff1269;
}

.courses-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  gap: 10px;
}

.course-image-container {
  overflow: hidden;
  display: inline-block;
  width: 100%;
}

.course-image {
  width: 100%;
  height: 229px;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
}

.course-image:hover {
  transform: scale(1.1);
}

.course-name{
  display: flex;
  justify-content: center;
  font-weight: 500;
}

.course-link{
  display: flex;
  justify-content: center;
}

.button-course{
  background-color: #FF0033;
}


</style>