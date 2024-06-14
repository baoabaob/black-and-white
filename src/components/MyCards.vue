<template>
  <div class="flex flex-row justify-center select-none w-[80rem]">
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="font-number text-9xl border-double border-4 cursor-pointer hvr-bob basis-1/9 aspect-[4/5.5] rounded-lg m-2"
      :class="card.color==='white'?'bg-neutral-50 border-neutral-900 text-black':'bg-neutral-900 border-neutral-50 text-white'"
    >
      <span class="flex h-full w-full items-center justify-center">{{ card.number }}</span>
    </div>
  </div>
</template>

<script setup>
  const cards = [
  { number: 0, color: 'black' },
  { number: 1, color: 'white' },
  { number: 2, color: 'black' },
  { number: 3, color: 'white' },
  { number: 4, color: 'black' },
  { number: 5, color: 'white' },
  { number: 6, color: 'black' },
  { number: 7, color: 'white' },
  { number: 8, color: 'black' },
]
</script>

<style scoped>

</style>