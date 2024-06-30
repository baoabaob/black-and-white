<script setup>
import MyCards from './components/MyCards.vue'
import RivalCards from './components/RivalCards.vue'
</script>

<template>
  <p
    class="font-mono drop-shadow-none hover:drop-shadow-3xl text-6xl truncate text-black/50 transition-all duration-300 select-none font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-10"
  >
    Black & White
  </p>
  <rival-cards class="absolute left-1/2 top-[20%] -translate-y-1/2 -translate-x-1/2" />
  <div
    id="rivalCmpArea"
    class="absolute left-[25%] top-1/2 transform -translate-y-1/2 border-dashed border-4 border-gray-400/50 w-[138px] h-[186px] rounded-md"
  />
  <div
    class="font-number text-6xl absolute right-[15%] top-1/2 transform -translate-y-1/2 select-none flex flex-col items-center"
  >
    <span>1</span>
    <span class="text-4xl">|</span>
    <span>3</span>
  </div>
  <div
    id="myCmpArea"
    class="absolute right-[25%] top-1/2 transform -translate-y-1/2 border-dashed border-4 border-gray-400/50 w-[138px] h-[186px] rounded-md"
  />
  <my-cards class="absolute left-1/2 bottom-[20%] translate-y-1/2 -translate-x-1/2" />
</template>

<style scoped></style>
