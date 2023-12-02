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
function toggle(){

}

</script>


<template>
  <div id="top-bar">
    
    <h1>
      <img id="Logo" src="./assets/Logo.svg" alt="Image" srcset=""/> 
      Workout Walrus
      <img id="Logo" src="./assets/Logo.svg" alt="Image" srcset=""/> 
    </h1>
     
  </div>
  
  <div>
    <nav>
    <ul id="bottom-bar">
      <li @click="toggle">
        <router-link to="/home">Home<fa icon="home"/></router-link>
      </li>
      <li @click="toggle">
        <router-link to="/calculator">Calculator</router-link>
      </li>
      <li @click="toggle">
        <router-link to="/exercise">Exercise</router-link>
      </li>
  </ul>

    </nav>
  </div>
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

