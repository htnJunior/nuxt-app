<template>
  <div>
    <div class="courses-title">
      Oportunidades
    </div>
    <div class="products">
      <DataView :value="products">
        <template #list="slotProps">
          <div class="flex flex-col">
            <div v-for="(item, index) in slotProps.items" :key="index">
              <div class="product-container" :class="{ 'product-container-border': index !== 0 }">
                <div class="product-content">
                  <div class="product-info">
                    <div class="product-tags">
                    <span class="product-category">
                      <Tag :value="item.category" />
                    </span>
                      <span class="product-category">
                      <Tag :value="item.regime" severity="info" />
                    </span>
                      <span class="product-category">
                      <Tag :value="item.local" severity="warn" />
                    </span>
                    </div>
                    <div class="product-name">{{ item.name }}</div>
                    <div class="product-description">{{ item.description }}</div>
                    <span class="product-price">
                    <i class="pi pi-money-bill" style="color: green"></i>
                    {{ item.price }}
                  </span>
                  </div>
                  <div class="product-buttons">
                    <a :href="item.link" target="_blank" rel="noopener noreferrer">
                      <Button
                          label="Inscreva-se"
                          icon="pi pi-briefcase"
                          iconPos="right"
                          severity="danger"
                          variant="text"
                          raised
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </DataView>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const products = ref([
  {
    name: 'Analista de Qualidade de Software Júnior',
    category: 'QA',
    price: 'Não Informado',
    regime: 'Home Office',
    local: 'Remoto',
    description: 'Aqui na Riachuelo a gente se conecta com @vc! #CarreiraQueConecta\n' +
        '\n' +
        '\n' +
        'Existimos para conectar desejos a realizações. E você escolher a Riachuelo para fazer a sua carreira acontecer é uma realização para a gente!\n' +
        '\n' +
        '\n' +
        'Aqui, nossos milhares de RCHLOVERS encontram o melhor ambiente para se transformarem e se desenvolverem junto com a gente. Afinal, somos moda, varejo, tech, logística, financeira, indústria e uma das maiores empregadoras do país!\n' +
        '\n' +
        '\n' +
        'Vamos juntos construir o maior ecossistema de moda, lifestyle e produtos financeiros do Brasil!\n' +
        '\n' +
        '\n' +
        'Nosso time de TI - PONTOS FISICOS está em busca de um ANALISTA DE QUALIDADE DE SOFTWARE JUNIOR para compor a equipe!\n' +
        '\n' +
        '\n' +
        'Os desafios da função são:\n' +
        '\n' +
        'Executar testes: Realizar testes manuais em diferentes níveis (unitários, integrados, sistema e aceitação) de acordo com os casos de teste definidos.\n' +
        'Reportar bugs: Documentar os defeitos encontrados com clareza e precisão, utilizando ferramentas de gerenciamento de defeitos.\n' +
        'Analisar documentação: Revisar os documentos de requisitos e especificações para identificar possíveis inconsistências e ambiguidades.\n' +
        'Colaborar com a equipe: Trabalhar em conjunto com desenvolvedores e demais membros da equipe para garantir a qualidade do software.\n' +
        'Aprender e se desenvolver: Buscar conhecimento sobre novas ferramentas, técnicas e metodologias de teste de software.',
    link: 'https://www.glassdoor.com.br/job-listing/analista-de-qualidade-de-software-j%C3%BAnior-riachuelo-JV_KO0,40_KE41,50.htm?jl=1009545018878&cs=1_358d0da6&s=353&t=REC_JOBS&pos=101&src=GD_JOB_AD&guid=0000019393db2f95a1dfb0eea1cb2125&jobListingId=1009545018878&ao=1136043&vt=w&jrtk=5-yul1-1-1ie9tmbvbgqon800-19139dc0b5cfd3e7&cb=1733352435950&ctt=1733352474749'
  },
  {
    name: 'Analista de Testes',
    category: 'QA',
    price: 'R$4.000,00 - R$5.400,00 por mês',
    regime: 'Home Office',
    local: 'Brasília, Distrito Federal',
    description: 'Requisitos\n' +
        '\n' +
        'Experiência em metodologia/ processos: Agile, Scrum, Kanban e TDD\n' +
        'Experiência em Appium, Cucumber, Selenium, Teste Manual, TestComplete, SQL Server, DB2, Windows\n' +
        'Modalidade:',
    link: 'https://www.glassdoor.com.br/job-listing/analista-de-testes-engesoftware-JV_IC2494161_KO0,18_KE19,31.htm?jl=1009549644440&cs=1_48cd032e&s=353&t=REC_JOBS&pos=115&src=GD_JOB_AD&guid=0000019393df5bb48c50009924a7c7a4&jobListingId=1009549644440&ea=1&ao=1136043&vt=w&jrtk=5-yul1-1-1ie9tun0723b8001-3f13ed729285ea51&cb=1733352709327&ctt=1733352780832'
  },
  {
    name: 'Desenvolvedor Junior',
    category: 'Programação',
    price: 'R$ 4 mil/mês',
    regime: 'Presencial',
    local: 'Brasília, Distrito Federal',
    description: 'Estamos em busca de um Desenvolvedor Júnior apaixonado por tecnologia e disposto a aprender e crescer em um ambiente dinâmico. O candidato ideal será responsável por desenvolver e manter aplicações web, produzindo relatórios e colaborando com a equipe para entregar soluções de alta qualidade.\n' +
        '\n' +
        'As principais funções são:\n' +
        '\n' +
        'Desenvolvimento de Aplicações: Contribuir na criação e manutenção de aplicações web utilizando as tecnologias React e Angular.\n' +
        'Produção de Relatórios: Analisar e gerar relatórios a partir dos dados disponíveis, garantindo clareza e precisão nas informações.\n' +
        'Programação Orientada a Objetos: Aplicar conceitos de programação orientada a objetos na construção de soluções eficientes e escaláveis.',
    link: 'https://www.glassdoor.com.br/job-listing/desenvolvedor-junior-brweb-JV_IC2494161_KO0,20_KE21,26.htm?jl=1009542045390&cs=1_ffe8ee80&s=353&t=REC_JOBS&pos=513&src=GD_JOB_AD&guid=0000019393e74ae3b418dcf0512e6f74&jobListingId=1009542045390&ea=1&ao=1136043&vt=w&jrtk=5-yul1-1-1ie9ueipdiud5800-a35e49fdd6dba34e&cb=1733353229445&ctt=1733353269218'
  },
  {
    name: 'Desenvolvedor Sistema Typescript e Nextjs',
    category: 'Programação',
    price: 'R$2.500,00 - R$3.000,00 por mês',
    regime: 'Presencial',
    local: 'Rio de Janeiro',
    description: 'Nosso cliente, é uma conceituada empresa no segmento de joias e acessórios de luxo.\n' +
        '\n' +
        'Com diversos pontos de venda na zona sul e norte do Rio de Janeiro.\n' +
        '\n' +
        'Estamos selecionando um Desenvolvedor de Sistemas Junior.\n' +
        '\n' +
        'Atividades: programação em Typescript e Nextjs.\n' +
        '\n' +
        'Diferencial: conhecimentos em: - Nodejs - Express - Prisma - Zod - Tailwind - React Hook Form\n' +
        '\n' +
        'De Segunda à Sexta-feira de 10h as 19h\n' +
        '\n' +
        'Enviar pretensão salarial.\n' +
        '\n' +
        'Vale transporte + refeição local (café + almoço + lanche)\n' +
        '\n' +
        'Tipo de vaga: Tempo Integral',
    link: 'https://www.glassdoor.com.br/job-listing/desenvolvedor-sistema-typescript-e-nextjs-dedicatto-consultoria-JV_KO0,41_KE42,63.htm?jl=1009544871927&cs=1_e1e35b0f&s=353&t=REC_JOBS&pos=602&src=GD_JOB_AD&guid=0000019393e97691b3f0d0e502172b7b&jobListingId=1009544871927&ea=1&ao=1136043&vt=w&jrtk=5-yul1-1-1ie9uitmtiuee81i-03abf3fe1cc7d26f&cb=1733353371586&ctt=1733353406648'
  },
]);
</script>

<style scoped>

.products{
  display: flex;
  margin: 10px;
  padding: 10px;
}

.courses-title{
  font-weight: 400;
  font-size: 2rem;
  margin: 25px;
}

.product-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
}

.product-container-border {
  border-top: 1px solid rgba(241, 84, 84, 0.34);
}

.product-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
}

.product-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.product-tags {
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
}

.product-category {
  font-size: 0.875rem;
  font-weight: 500;
}

.product-name {
  font-size: 1.3rem;
  font-weight: 700;
  margin: 8px;
}

.product-description {
  font-size: 1rem;
  font-weight: 400;
  margin: 2px;
}

.product-rating-wrapper {
  background-color: red;
  padding: 0.25rem;
  border-radius: 30px;
}

.product-rating {
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: 30px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.04), 0px 1px 2px rgba(0, 0, 0, 0.06);
}
.product-rating-icon {
  color: #ffc107;
}

.product-price {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 5px;
}

.product-buttons {
  padding: 2px;
  margin: 5px;
  font-size: 1.4rem;
  display: flex;
  justify-content: flex-end;
}

.product-buy-button {
  flex: 1;
  white-space: nowrap;
}

@media (max-width: 825px) {
  .products {
    flex-direction: column;
    margin: 5px;
    padding: 5px;
  }

  .courses-title {
    font-size: 1.5rem;
    margin: 15px;
    display: flex;
    justify-content: center;
  }

  .product-container {
    padding: 1rem;
    gap: 1rem;
  }

  .product-info {
    gap: 1rem;
  }

  .product-tags{
    font-size: 0.4rem;
  }

  .product-name {
    font-size: 1.1rem;
    margin: 5px;
  }

  .product-description {
    font-size: 0.9rem;
    margin: 2px;
  }

  .product-rating-wrapper {
    padding: 0.2rem;
  }

  .product-rating {
    padding: 0.25rem;
    font-size: 0.9rem;
  }

  .product-price {
    font-size: 1rem;
  }

  .product-buttons {
    font-size: 1rem;
    display: flex;
    justify-content: center;
  }

  .product-buy-button {
    white-space: normal;
  }
}

</style>