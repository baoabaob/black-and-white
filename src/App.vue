<script setup>
import MyCards from './components/MyCards.vue'
</script>

<template>
  <p class="font-mono drop-shadow-none hover:drop-shadow-3xl text-6xl truncate text-black/50 transition-all duration-300 select-none font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-10">
    Black & White
  </p>
  <div class="font-number text-6xl absolute right-36 top-1/2 transform -translate-y-1/2 select-none flex flex-col items-center">
    <span>1</span>
    <span class="text-4xl">|</span>
    <span>3</span>
  </div>
  <my-cards class="absolute left-1/2 bottom-20 -translate-x-1/2" />
</template>

<style scoped>
</style>
