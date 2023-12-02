import { createApp } from 'vue'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import App from './App.vue'

import * as Realm from "realm-web";
new Realm.App({id: 'workout_final-jogzu'})

library.add(fas);

const app = createApp(App)
.component('fa', FontAwesomeIcon)
app.mount('#app');

const trigger = document.querySelectorAll('nav li');
  trigger.forEach((menu) => menu.addEventListener('click' , toggle));

  function toggle(){
    trigger.forEach((item) => item != this ? item.classList.remove('active'):null);
    if (this.classList != 'active'){
      this.classList.toggle('active');
    }
  }
