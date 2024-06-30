<template>
  <transition-group
    name="card"
    tag="div"
    class="flex flex-row justify-center select-none w-[80rem]"
    @leave="onLeave"
  >
    <div
      v-for="card in cards"
      :id="'card' + card.number"
      :key="card.number"
      class="font-number text-9xl border-double border-4 cursor-pointer basis-[10%] aspect-[4/5.5] rounded-lg mr-[0.555%] ml-[0.555%]"
      :class="(card.color === 'white' ? 'bg-neutral-50 border-neutral-900 text-black' : 'bg-neutral-900 border-neutral-50 text-white').concat(onTransition?' ':' hvr-bob')"
      @transitionend="onTransitionEnd"
      @click="playCard(card.number)"
    >
      <span class="flex h-full w-full items-center justify-center">{{ card.number }}</span>
    </div>
  </transition-group>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue'
import anime from 'animejs/lib/anime.es.js'
const cards = ref([
  { number: 0, color: 'black' },
  { number: 1, color: 'white' },
  { number: 2, color: 'black' },
  { number: 3, color: 'white' },
  { number: 4, color: 'black' },
  { number: 5, color: 'white' },
  { number: 6, color: 'black' },
  { number: 7, color: 'white' },
  { number: 8, color: 'black' },
])
const onTransition = ref(true)
const shuffle = () => {
  onTransition.value = true
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

// 播放卡片动画函数
const playCard = (number) => {
  console.log(number)
  onTransition.value = true
  console.log(onTransition.value)
  nextTick(()=>{
    if(cards.value.findIndex(card => card.number === number) === -1) return
    cards.value.splice(cards.value.findIndex(card => card.number === number), 1)
  })
  
}
const onLeave = (el,done) => {
  const targetArea = document.querySelector('#myCmpArea')
  const parentRect = el.parentElement.getBoundingClientRect()
  const cardRect = el.getBoundingClientRect()
  const targetRect = targetArea.getBoundingClientRect()
  console.log(targetRect)
  // 动态设置元素的位置，使其从当前位置开始动画
  el.style.position = 'absolute'
  el.style.left = `${cardRect.left - parentRect.left}px`
  el.style.top = `${cardRect.top - parentRect.top}px`
  el.style.width = `${cardRect.width}px`
  el.style.height = `${cardRect.height}px`
  const translateX = targetRect.left - parentRect.left - 2
  const translateY = targetRect.top - parentRect.top + 5
  var timeLine = anime.timeline({
    targets: el
  })
  .add({
    left: `${translateX}px`,
    top: `${translateY}px`,
    easing:'easeInOutSine',
    complete:()=>{
      timeLine.pause()
      addEventListener('resize', () => {
        const parentRect = el.parentElement.getBoundingClientRect()
        const targetRect = targetArea.getBoundingClientRect()
        const translateX = targetRect.left - parentRect.left - 2
        const translateY = targetRect.top - parentRect.top + 5
        el.style.left = `${translateX}px`,
        el.style.right = `${translateY}px`
      })
    }
  })
  .add({
    scale:1.2,
    duration:300,
    easing:'easeInOutSine'
  })
  .add({
    scale:1,
    duration:300,
    easing:'easeInOutSine',
  })
  .add({
    delay:600,
    opacity:0,
    easing:'easeInOutSine',
    translateY: 100,
    duration:400,
    complete:()=>{
      removeEventListener('mouseup',()=>{})
      removeEventListener('resize',()=>{})
      done()
    }
  })
  addEventListener('mouseup',()=>{
    timeLine.play()
  })
}
onMounted(() => {
  shuffle()
})
</script>

<style scoped>
.card-move {
  transition: all 0.8s ease;
}
.card-leave-active {
  transition: none;
}
</style>
