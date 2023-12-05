<script setup>
import { ref } from 'vue';
import { types } from '../selection/typesExercise';
import { muscles } from '../selection/musclesExercise';
import { difficulties } from '../selection/difficultiesExercise';

const paraExe = [ '', '', ''];

const selectedType = ref('')
let selectedMuscle = ref('')
let selecteDifficulty = ref("")

let select = ref(false)

function display(x) {
  console.log(x)
}

// async function getExercise(url) {
//   const response = await fetch(url, {
//     headers: {
//       'X-Api-Key': 'H2hjF7GM2NnHzuZTm5Nakw==cnVmqdsMHbfV8EVb'
//     }
//   });
//   console.log(response.json());
//   // return response.json();
// }

const selected = ref('')


</script>

<template>
    <div id="main-content" v-motion-slide-top>
      <header>
          <h1>
            Exercise
          </h1>
      </header>

      <div>
        {{ selected }}
      </div>

      <main>
        <div>
          <select v-model="selectedType" @change="console.log(selectedType)">
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
        
        <button @click="select = !select">
          Generate Exercise
        </button>

        <!-- <button @click="getExercise(`https://api.api-ninjas.com/v1/exercises?type=${paraExe[0]}&?difficulty${paraExe[2]}`)"> 
          Generate Exercise
        </button> -->
          
        <div v-if="!select">
          <p>No Exercise</p>
          <p>{{ selectedType }} - {{ selectedMuscle }} - {{ selecteDifficulty }}</p>
        </div>
        <ul v-else>
          <p>{{ selectedType }} - {{ selectedMuscle }} - {{ selecteDifficulty }}</p>
          <li>
            <label>Push-ups</label>
          </li>
          <li>
            <label>Sit-ups</label>
          </li>
          <li>
            <label>Lunges</label>
          </li>
          <li>
            <label>Squats</label>
          </li>
          <li>
            <label>Plank</label>
          </li>
        </ul>
  
      </main>
    </div>
  </template>