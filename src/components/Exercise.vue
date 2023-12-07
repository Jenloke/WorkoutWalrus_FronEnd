<script setup>
import { ref, onUpdated } from 'vue';
import { types } from '../selection/typesExercise';
import { muscles } from '../selection/musclesExercise';
import { difficulties } from '../selection/difficultiesExercise';


const selectedType = ref('')
let selectedMuscle = ref('')
let selecteDifficulty = ref('')

/* Napagana ko yung sa database. ang issue kasi eh since hindi ko nilagay LAHAT ng exercise, may mga times talaga
   na wala siyang mage-generate na list. pero honestly at this point, kahit ano na lang gawin para sa computation
   dun na lang tayo sa madali.   */

// import * as Realm from "realm-web";
// const app = Realm.getApp("workout_final-jogzu");
// const getExerciseApi = ref(callexercise())
// async function callexercise() {
//   try {
//     const mongodb = app.currentUser.mongoClient('mongodb-atlas')
//     const collection = mongodb.db('workoutwalrus').collection('exercises')
//     console.log("success")
//     const query = {"type": selectedType.value,"muscle": selectedMuscle.value,"difficulty": selecteDifficulty.value}
//     const realmResponse =  await collection.find(query)
//     console.log(realmResponse)
//     exeList.value = realmResponse
//   } 
//   catch(err) {
//     console.log('failed', err)
//   }
// }

const exeList = ref({})

let call = 0

let urlApi = ref(`https://api.api-ninjas.com/v1/exercises?type=${selectedType.value}&?muscle=${selectedMuscle.value}&?difficulty${selecteDifficulty.value}`)

onUpdated(() => {
  urlApi = `https://api.api-ninjas.com/v1/exercises?type=${selectedType.value}&?muscle=${selectedMuscle.value}&?difficulty${selecteDifficulty.value}`
})

// async function getExerciseApi(url = urlApi) {
//   call++
//   console.log(call)
//   const response = await fetch(url, {
//     headers: {
//       'X-Api-Key': 'H2hjF7GM2NnHzuZTm5Nakw==cnVmqdsMHbfV8EVb'
//     }
//   }).then;
//   console.log(response)
//   return await response.json();
// }

import axios from 'axios'
async function fetchData(url) {
  try {
    const response = await axios.get(url, {
      headers: {
        'X-Api-Key': 'H2hjF7GM2NnHzuZTm5Nakw==cnVmqdsMHbfV8EVb'
      }
    }).then( (response) => {
      // exeList.value.splice(0, exeList.value.length)
      console.log(response.data)
      // return response.data 
      exeList.value = response.data
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

</script>

<template>
  <div class="Spacer">  
    <div id="main-content" v-motion-slide-top>
      <div class="h-exer">
        <div class="exer">
          <header>
            <h1>
              Exercise
            </h1>
          </header>

          <main>
            <div class="selection">
              <select v-model="selectedType">
                <option disabled value="" selected>Select an option</option>
                <option v-for="type in types" :value="type.value"> 
                  {{ type.name }}
                </option>
              </select>

              <br>

              <select v-model="selectedMuscle">
                <option disabled value="" selected>Select an option</option>
                <option v-for="muscle in muscles" :value="muscle.value"> 
                  {{ muscle.name }}
                </option>
              </select>
              
              <br>

              <select v-model="selecteDifficulty">
                <option disabled value="" selected>Select an option</option>
                <option v-for="difficulty in difficulties" :value="difficulty.value"> 
                  {{ difficulty.name }}
                </option>
              </select>
            </div>

            <button @click="fetchData(urlApi)"> 
              Generate Exercise
            </button>
              
            <div v-if="exeList.length === 0" class="n-exer">
              <p>No Exercise</p>
              <p>{{ selectedType }} - {{ selectedMuscle }} - {{ selecteDifficulty }}</p>
            </div>

            <div v-else class="listExercise">
              <ul>
              <li v-for="exer in exeList" :value="exer.name">
                <button @click="console.log(exer.name)">{{ exer.name }} </button>
              </li>
            </ul>

            </div>
  
          </main>
        </div>
      </div>
    </div>
  </div>
</template>