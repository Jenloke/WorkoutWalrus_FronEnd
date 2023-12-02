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




<template>
  <div id="top-bar">
    
    <h1>
      <img id="Logo" src="./assets/Logo.svg" alt="Image" srcset=""/> 
      Workout Walrus
    </h1>
     
  </div>
  
  <div class="navigation">
      <ul>
        <li class="list ">
            <router-link to="/calculator">
              <span class="icon">
                <fa icon="fire"/>
              </span>
              <span class="text">
                Calculator
              </span>
            </router-link>
        </li>
        <li class="list active">
            <router-link to="/home">
              <span class="icon">
                <fa icon="home"/>
              </span>
              <span class="text">
                Home
              </span>
            </router-link>
        </li>
        <li class="list">
            <router-link to="/exercise">
              <span class="icon">
                <fa icon="dumbbell"/>
              </span>
              <span class="text">
                Exercise
              </span>
            </router-link>
        </li>
        <div class="indicator"></div>
      </ul>
    
  </div>
  
  <router-view></router-view>
  <!-- <a href="#/non-existent-path">Broken Link</a> -->
  <!-- <component :is="currentView" /> -->
</template>