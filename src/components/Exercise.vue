<script setup>
import { ref } from 'vue';
import { types } from '../selection/typesExercise';
import { muscles } from '../selection/musclesExercise';
import { difficulties } from '../selection/difficultiesExercise';

const selectedType = ref('')
let selectedMuscle = ref('')
let selecteDifficulty = ref('')

const exeList = ref([])

// const getExerciseApi = ref(callexercise())
// import * as Realm from "realm-web";
// const app = Realm.getApp("workout_final-jogzu");
// async function callexercise() {
//   try {
//     const mongodb = app.currentUser.mongoClient('mongodb-atlas')
//     const collection = mongodb.db('workoutwalrus').collection('exercises')
//     exeList.value =  await collection.find({
//       'type': selectedType.value,
//       'muscle': selectedMuscle.value,
//       'difficulty': selecteDifficulty.value
//     }).json()
//   } 
//   catch(err) {
//     console.log('failed', err)
//   }
// }

const urlApi = ref(`https://api.api-ninjas.com/v1/exercises?type=${selectedType.value}&?muscle=${selectedMuscle.value}&?difficulty${selecteDifficulty.value}`)
async function getExerciseApi(url) {
  const response = await fetch(url, {
    headers: {
      'X-Api-Key': 'H2hjF7GM2NnHzuZTm5Nakw==cnVmqdsMHbfV8EVb'
    }
  });
  // console.log(typeof(response.json()));
  exeList.value = await response.json();
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

        <button @click="getExerciseApi(urlApi)">
          Generate Exercise
        </button>
          
        <div class="n-exer" v-if="exeList.length === 0">
          <p>No Exercise</p>
          <p>{{ selectedType }} - {{ selectedMuscle }} - {{ selecteDifficulty }}</p>
        </div>
        <ul v-else>
          <li v-for="exercise in exeList">
            <button>{{ exercise.name }}</button>
          </li>
        </ul>
  
      </main>
      </div>
    </div>
  </div>
  </div>
</template>