<template>
  <div>
    <div class="courses-subtitle">
      <p>Todos os cursos</p>
    </div>
    <div class="card" v-if="showCarousel">
      <Carousel
          :value="products"
          :numVisible="4"
          :numScroll="1"
          :responsiveOptions="responsiveOptions"
      >
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
    <div v-else class="courses-column">
      <div v-for="product in products" :key="product.id" class="courses-container">
        <div class="course-image-container">
          <img :src="product.image" :alt="product.name" class="course-image" />
        </div>
        <div class="course-name">
          {{ product.name }}
        </div>
        <div class="course-link">
          <a :href="product.link" target="_blank" rel="noopener noreferrer">
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
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from "vue";
import Carousel from 'primevue/carousel';

const products = ref([
  {
    id: '0',
    name: 'Lógica de Programação',
    description: 'Elegant bamboo watch for every occasion.',
    image: '/logica-de-programacao.jpeg',
    link: 'https://www.youtube.com/watch?v=gMxQ8vxH9Vk'
  },
  {
    id: '1',
    name: 'Introdução ao Desenvolvimento IOS',
    description: 'Elegant bamboo watch for every occasion.',
    image: '/introducao-dev-ios.jpeg',
    link: 'https://www.youtube.com/watch?v=I8p8KlKEI_Y'
  },
  {
    id: '2',
    name: 'Computação na Núvem',
    description: 'Stylish sunglasses to complement any outfit.',
    image: '/computacao-nuvem.jpeg',
    link: 'https://www.eucapacito.com.br/cursos/o-que-e-computacao-em-nuvem/',
  },
  {
    id: '3',
    name: 'Noções Básicas da Internet',
    description: 'Comfortable cotton t-shirt in vibrant blue.',
    image: '/nocoes-basicas-internet.jpeg',
    link: 'https://www.eucapacito.com.br/cursos/nocoes-basicas-da-internet/',
  },
  {
    id: '4',
    name: 'Introdução à Análise de Dados',
    description: 'High-quality headset with surround sound.',
    image: '/desenvolvimento-web-microsoft.png',
    link: 'https://www.eucapacito.com.br/cursos/cintroducao-a-analise-de-dados-da-microsoft/',
  },
  {
    id: '5',
    name: 'C# para Iniciantes',
    description: 'Comfortable wrist band for daily use.',
    image: '/csharp-iniciantes.jpeg',
    link: 'https://learn.microsoft.com/pt-br/shows/csharp-for-beginners/',
  },
  {
    id: '6',
    name: 'Introdução ao Desenvolvimento para a Web',
    description: 'Premium leather handbag with multiple compartments.',
    image: '/desenvolvimento-web-microsoft.png',
    link: 'https://learn.microsoft.com/pt-br/training/modules/get-started-with-web-development/1-introduction',
  },
  {
    id: '7',
    name: 'Python para iniciantes',
    description: 'Durable case for all smartphone models.',
    image: '/desenvolvimento-web-microsoft.png',
    link: 'https://learn.microsoft.com/pt-br/training/paths/beginner-python/',
  },
  {
    id: '8',
    name: 'Conceitos básicos da rede de computadores',
    description: 'Comfortable wrist band for daily use.',
    image: '/desenvolvimento-web-microsoft.png',
    link: 'https://learn.microsoft.com/pt-br/training/modules/network-fundamentals/',
  },
  {
    id: '9',
    name: 'Conceitos básicos da segurança de rede',
    description: 'Premium leather handbag with multiple compartments.',
    image: '/desenvolvimento-web-microsoft.png',
    link: 'https://learn.microsoft.com/pt-br/training/modules/network-fundamentals-2/',
  },
  {
    id: '10',
    name: 'Introdução ao Python',
    description: 'Durable case for all smartphone models.',
    image: '/desenvolvimento-web-microsoft.png',
    link: 'https://learn.microsoft.com/pt-br/training/modules/intro-to-python/',
  },
  {
    id: '11',
    name: 'Introdução aos conceitos básicos do Microsoft Azure',
    description: 'Stylish and sturdy wooden chair for your home.',
    image: '/desenvolvimento-web-microsoft.png',
    link: 'https://learn.microsoft.com/pt-br/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/',
  },
]);

const responsiveOptions = [
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '1400px',
    numVisible: 3,
    numScroll: 2
  }
];

const screenWidth = ref(0);
const showCarousel = ref(true);

onMounted(() => {
  if (typeof window !== 'undefined') {
    screenWidth.value = window.innerWidth;
    window.addEventListener('resize', updateWidth);
  }
});

const updateWidth = () => {
  screenWidth.value = window.innerWidth;
};

watchEffect(() => {
  showCarousel.value = screenWidth.value > 770;
});

</script>

<style scoped>

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

@media (max-width: 775px) {

  .courses-subtitle {
    margin: 20px;
    font-size: 1rem;
  }

  .courses-subtitle p {
    font-size: 0.9rem;
  }

  .courses-container {
    padding: 10px;
    gap: 5px;
  }

  .course-image-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .course-image {
    height: 150px;
    width: 350px;
    border-radius: 8px;
  }

  .course-name {
    font-size: 0.9rem;
    padding: 5px;
    text-align: center;
  }

  .course-link {
    margin-top: 10px;
    justify-content: center;
  }

  .button-course {
    font-size: 0.9rem;
    padding: 6px 12px;
    border-radius: 5px;
  }
}


</style>