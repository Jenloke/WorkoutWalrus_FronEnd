import { createApp } from 'vue'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import App from './App.vue'

import * as Realm from "realm-web";
new Realm.App({id: 'workout_final-jogzu'})

const app = createApp(App);
app.mount('#app');
