import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import * as Realm from "realm-web";
new Realm.App({id: 'workout_final-jogzu'})

const app = createApp(App);
app.mount('#app');
