import { createApp } from 'vue'
import './style.css'
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

import * as Realm from "realm-web";
new Realm.App({id: 'workout_final-jogzu'})

<<<<<<< HEAD
library.add(fas);

const app = createApp(App)
.component('fa', FontAwesomeIcon)
=======
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Login },
        { path: '/calculator', component: Calculator },
        { path: '/exercise', component: Exercise },
        { path: '/error', component: NotFound },
        { path: '/home', component: Home },
        { path: '/register', component: Register },
    ]
});

const app = createApp(App);
app.use(router);

>>>>>>> 5fd998d6701660a3616781308782b65ceb4c3458
app.mount('#app');

const trigger = document.querySelectorAll('nav li');
  trigger.forEach((menu) => menu.addEventListener('click' , toggle));

  function toggle(){
    trigger.forEach((item) => item != this ? item.classList.remove('active'):null);
    if (this.classList != 'active'){
      this.classList.toggle('active');
    }
  }
