<template>
  <div>
    <div class="donate-title">
      Apoiar
    </div>
    <div class="donate-text">
      A tecnologia transforma o mundo, e mulheres desempenham um papel essencial nessa mudança.
      Para ampliar esse impacto, convidamos você a conhecer e apoiar iniciativas que incentivam a inclusão e o
      crescimento feminino no setor. Acesse os links abaixo e descubra como você
      pode contribuir para um futuro mais diverso e inovador na tecnologia.
    </div>
    <div class="donate-body">
      <a href="https://womakerscode.org/doar/" target="_blank" rel="noopener noreferrer">
        <div class="donate-body-title">womakerscode</div>
      </a>
      <a href="https://www.programaria.org/" target="_blank" rel="noopener noreferrer">
        <div class="donate-body-title">programaria</div>
      </a>
      <a href="https://infopreta.com.br/" target="_blank" rel="noopener noreferrer">
        <div class="donate-body-title">InfoPreta</div>
      </a>
      <a href="https://www.elasprogramam.com.br/" target="_blank" rel="noopener noreferrer">
        <div class="donate-body-title">elasprogramam</div>
      </a>
      <a href="https://phpwomen.org.br/" target="_blank" rel="noopener noreferrer">
        <div class="donate-body-title">phpwomen</div>
      </a>
      <a href="https://educatransforma.com.br/" target="_blank" rel="noopener noreferrer">
        <div class="donate-body-title">EducaTransForma</div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

.donate-title{
  font-size: 2rem;
  margin: 40px;
  font-weight: 500;
}

.donate-text{
  margin: 40px;
  font-weight: 400;
}

.donate-body{
  display: flex;
  flex-direction: row;
  gap: 40px;
  margin: 40px;
  justify-content: center;
}

.donate-body-title {
  font-weight: 700;
  color: #FF609A;
  font-size: 2rem;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.donate-body-title:hover {
  transform: scale(1.1);
}

</style>