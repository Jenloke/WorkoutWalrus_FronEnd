<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}/
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style> -->

<script setup>
import { ref, computed } from 'vue';
import Home from './components/Home.vue';
import Calculator from './components/Calculator.vue';
import Exercise from './components/Exercise.vue';
import NotFound from './components/NotFound.vue';

const routes = {
  '/': Home,
  '/about': Exercise,
  '/calculator': Calculator
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
  <a href="#/calculator">Calculator</a>
  <a href="#/">Home</a>
  <a href="#/exercise">About</a>
  <!-- <a href="#/non-existent-path">Broken Link</a> -->
  <component :is="currentView" />
</template>

