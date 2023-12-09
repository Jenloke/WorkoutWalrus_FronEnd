<script setup>
import * as Realm from "realm-web";
import { ref, onMounted } from 'vue';

const userData = ref(null)
const weightLabel = ref(0.0)
const heightLabel = ref(0.0)
const totalCalLabel = ref(0)
let weight, height
const bmi = ref(0.0)

const app = Realm.getApp("workout_final-jogzu");
const user = app.currentUser
userData.value = user.customData

const fetchData = async () =>{
  userData.value = user.customData

  weightLabel.value = parseFloat(userData.value.weight["$numberDouble"])
  weight = parseFloat(userData.value.weight["$numberDouble"])

  heightLabel.value = parseFloat(userData.value.height["$numberDouble"])
  height = parseFloat(userData.value.height["$numberDouble"])
  
  bmi.value = (weight/(height*0.01)**2).toFixed(2)

  totalCalLabel.value = Math.ceil(parseFloat(userData.value.totalCalBurned["$numberDouble"]))

  console.log(userData.value)
}

onMounted(async ()=>{
  await app.currentUser.refreshCustomData()
  await fetchData()
})
</script>

<template>
  <div class="Spacer">
  <div  id="main-content" v-motion-slide-top>
    <div class="backed">
      <header class="user">
          <h1 >{{ userData.username }}</h1>
          <img id="pfp" aria-hidden="true" src="src/assets/pfps.svg" alt="User Avatar" /> 
      </header>
    </div>
    <main>
      <div id="UserInfo" v-motion-slide-top>
      <h1>{{ userData.name }}</h1>
        <p>User Information</p>
        <ul lines="none" :inset="true">
          <li>
            <span class="wlabel">Height: {{ heightLabel }}cm</span>
          </li>
          <li>
            <span class="wlabel">Weight: {{ weightLabel }}Kg</span>
          </li>
          <li>
            <span class="wlabel">BMI: {{ bmi }}</span>
          </li>
        </ul>
<!-- 
        <div class="center">
          <button class="button updated" @click="update">
            Update
          </button>
        </div> -->
        
      </div>
      
      <div id="recent-Act" v-motion-slide-top>
        <!-- <h1>Pending Activities</h1>   -->
        <h1><fa icon="fire"/> Total Calories Burned <fa icon="fire"/></h1>
        <h2>{{ totalCalLabel }} kcal</h2>
        <ul>
          <li>
          </li>
        </ul>
      </div>
    </main>
  </div>
  </div>
</template>
  

  