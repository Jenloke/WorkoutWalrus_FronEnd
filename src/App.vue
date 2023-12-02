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
// import { ref, computed } from 'vue';
// import Home from './components/Home.vue';
// import Calculator from './components/Calculator.vue';
// import Exercise from './components/Exercise.vue';
// import NotFound from './components/NotFound.vue';
// import Login from './components/Login.vue';
// import Register from './components/Register.vue';

// const routes = {
//   '/': Home,
//   '/exercise': Exercise,
//   '/calculator': Calculator,
//   '/login': Login,
//   '/register': Register
// }

// const currentPath = ref(window.location.hash)

// window.addEventListener('hashchange', () => {
//   currentPath.value = window.location.hash
// })

// const currentView = computed(() => {
//   return routes[currentPath.value.slice(1) || '/'] || NotFound
// })
</script>


<template>
  <div id="top-bar">
    
    <h1>
      <img id="Logo" src="./assets/Logo.svg" alt="Image" srcset=""/> 
      Workout Walrus
      <img id="Logo" src="./assets/Logo.svg" alt="Image" srcset=""/> 
    </h1>
     
  </div>
  
  <ul id="bottom-bar">
    <!-- <li>
      <a href="#/calculator">Calculator</a>
    </li>
    <li>
      <a href="#/">Home</a>
    </li>
    <li>
      <a href="#/exercise">Exercise</a>
    </li>
    <li>
      <a href="#/login">Login</a>
    </li>
    <li>
      <a href="#/register">Register</a>
    </li> -->
    <li>
      <router-link to="/">Home</router-link>
    </li>
    <li>
      <router-link to="/calculator">Calculator</router-link>
    </li>
    <li>
      <router-link to="/exercise">Exercise</router-link>
    </li>
    <li>
      <router-link to="/login">Login</router-link>
    </li>
    <li>
      <router-link to="/register">Register</router-link>
    </li>
  </ul>
  <router-view></router-view>
  <!-- <a href="#/non-existent-path">Broken Link</a> -->
  <!-- <component :is="currentView" /> -->
</template>



<style>
  #top-bar {
    display: flex;
    flex-direction: row;
  }

  #bottom-bar { 
    display: flex;
    flex-direction: row;
    justify-content:space-evenly;
  }
</style>

