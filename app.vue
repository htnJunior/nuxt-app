<template>
  <NuxtLayout>
    <TheHeader />
    <NuxtLoadingIndicator :throttle="0" :height="5"  />
    <NuxtPage/>
    <TheFooter />
  </NuxtLayout>
</template>

<script setup>
import TheHeader from '~/layouts/default/TheHeader.vue';
import TheFooter from "~/layouts/default/TheFooter.vue";

definePageMeta({
  layout: 'default'
});

</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
