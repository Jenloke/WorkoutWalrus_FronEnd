<script>
import * as Realm from 'realm-web'
const app = Realm.getApp('workout_final-jogzu')

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
}
</script>

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
</template>