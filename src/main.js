import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import './navigation.css'
import './home.css'
import './exercise.css'
import './calculator.css'
import './logReg.css'
import { createRouter, createWebHistory } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import App from './App.vue'

import Home from './components/Home.vue';
import Calculator from './components/Calculator.vue';
import Exercise from './components/Exercise.vue';
import NotFound from './components/NotFound.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import ToDo from './components/ToDo.vue';

import * as Realm from "realm-web";
new Realm.App({id: 'workout_final-jogzu'})

library.add(fas);

const app = createApp(App)
.component('fa', FontAwesomeIcon)
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Login },
        { path: '/calculator', component: Calculator },
        { path: '/exercise', component: Exercise },
        { path: '/error', component: NotFound },
        { path: '/home', component: Home },
        { path: '/register', component: Register },
        { path: '/todo', component: ToDo },
    ]
});

app.use(router);
app.use(MotionPlugin);
app.mount('#app');


router.beforeEach((to, from, next) =>{
  const user = Realm.getApp("workout_final-jogzu");
  console.log('Navigating to:', to.fullPath);
  if(to.fullPath === "/home" || to.fullPath === "/exercise" || to.fullPath === "/todo"){
    if(!user.currentUser){
      next("/")
    }else{
      next()
    }
  }

  if(to.fullPath === "/"){
    if(user.currentUser){
      next("/home")
    }else{
      next()
    }
  }

  if(to.fullPath === "/register"){
    next()
  }
})



let menuToggle = document.querySelector('.menuToggle');
let navigation = document.querySelector('.navigation');
menuToggle.onclick =function(){
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
}

let Menulist = document.querySelectorAll('.Menulist li');
function activeLink(){
  Menulist.forEach((item) => 
  item.classList.remove('active'));
  this.classList.add('active')
}

Menulist.forEach((item) => 
item.addEventListener('click',activeLink));