<template>
  <transition-group
    name="card"
    tag="div"
    class="flex flex-row justify-center select-none w-[80rem]"
  >
    <div
      v-for="card in cards"
      :key="card.id"
      class="font-number text-9xl border-double border-4 cursor-pointer basis-[10%] aspect-[4/5.5] rounded-lg mr-[1.11%] ml-[1.11%]"
      :class="(card.color === 'white' ? 'bg-neutral-50 border-neutral-900 text-black' : 'bg-neutral-900 border-neutral-50 text-white').concat(onTransition?' ':' hvr-bob')"
      @transitionend="onTransitionEnd"
    />
  </transition-group>
</template>

<script setup>
import { ref, onMounted } from 'vue'
  const cards = ref([
  { id: 0, color: 'black' },
  { id: 1, color: 'white' },
  { id: 2, color: 'black' },
  { id: 3, color: 'white' },
  { id: 4, color: 'black' },
  { id: 5, color: 'white' },
  { id: 6, color: 'black' },
  { id: 7, color: 'white' },
  { id: 8, color: 'black' },
])
const onTransition = ref(true)
const shuffle = () => {
  const arr = cards.value
  for (let i = 0; i < arr.length - 1; i++) {
    const temp = arr[i]
    const rnd = i + Math.floor(Math.random() * (arr.length - i))
    arr[i] = arr[rnd]
    arr[rnd] = temp
  }
}

const onTransitionEnd = (event) => {
  if (event.propertyName === 'transform') {
    onTransition.value = false
  }
}

onMounted(() => {
  shuffle()
})
</script>

<style scoped>
.card-move {
  transition: transform 0.8s ease;
}
</style>