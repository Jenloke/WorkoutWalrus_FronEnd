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
<div class="menuToggle" v-show="shouldShowNavBar"></div>
  <div v-show="shouldShowNavBar" class="navigation">
      <ul>
        <li class="logo" style="--bg:#333;">
            <router-link to="/todo">
              <div class="icon">
                <img src="./assets/Logo.svg" alt="Image" srcset=""/>
              </div>
              <div class="text">Workout Walrus</div>
            </router-link>
        </li>

        <div class="Menulist">
          <li style="--bg:#6495ed;" class="active">
            <router-link to="/home">
              <div class="icon"><fa class="icon" icon="home"/></div>
              <div class="text">Home</div>
            </router-link>
          </li> 
          

          <li style="--bg:#6495ed;">
            <router-link to="/exercise">
              <div class="icon"><fa class="icon" icon="dumbbell"/></div>
              <div class="text">Exercise</div>
            </router-link>
          </li>

          <li style="--bg:#6495ed;">
            <router-link to="/todo">
              <div class="icon"><fa class="icon" icon="inbox"/></div>
              <div class="text">To Do</div>
            </router-link>
          </li>
        </div>

        <div class="bottom">
          <li style="--bg:#333;">
            <router-link to="/home">
              <div class="icon">
                <div class="imgBx">
                  <img aria-hidden="true" src="src/assets/pfp.svg" alt="User Avatar" />
                </div>
              </div>
              <div class="text">Username</div>
            </router-link>
          </li> 
          <li style="--bg:#333;" @click="userLogout">
            <router-link to="/">
              <div class="icon"><fa icon="right-from-bracket"/></div>
              <div class="text">Logout</div>
            </router-link>
          </li> 
        </div>
        <div class="indicator"></div>
      </ul>
  </div>

  <router-view></router-view>
  <!-- <a href="#/non-existent-path">Broken Link</a> -->
  <!-- <component :is="currentView" /> -->
</template>

<script>
import * as Realm from "realm-web";
const app = Realm.getApp("workout_final-jogzu");

export default {
  methods:{
    async userLogout(){
      try{
        await app.currentUser.logOut()
        this.$router.replace({path: `/`})
      }catch(err){
        console.error("gago", err)
      }
    }
  },
  computed: {
    shouldShowNavBar() {
      // Specify the routes where you want to hide the navigation bar
      const routesWithoutNavBar = ['/', '/register'];
      return !routesWithoutNavBar.includes(this.$route.path);
    },
  },
};
</script>