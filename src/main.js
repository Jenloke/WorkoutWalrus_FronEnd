import { createApp } from 'vue'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import App from './App.vue'

library.add(fas);

createApp(App)
.component('fa', FontAwesomeIcon)
.mount('#app')

const trigger = document.querySelectorAll('nav li');
trigger.forEach((menu) => menu.addEventListener('click', toggle));

function toggle() {
  trigger.forEach((item) => item !== this ? item.classList.remove('active') : null);
  if (!this.classList.contains('active')) {
    this.classList.toggle('active');
  }
}
