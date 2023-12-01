<script setup>
import { ref } from 'vue';
import { types } from '../selection/typesExercise';
import { muscles } from '../selection/musclesExercise';
import { difficulties } from '../selection/difficultiesExercise';

const paraExe = [ '', '', ''];

let selectedType = ref(null)
let selectedMuscle = ref(null)
let selecteDifficulty = ref(null)

let select = ref(false)

function getExercise() {

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

</script>

<template>
    <div id="main-content">
      <header>
          <h1>
            Exercise
          </h1>
      </header>

      <main>
        <div>
          <select name="Types" id="" required="true">  
            <option disabled value="" selected>Select an option</option>
            <option v-for="(type, index) in types" :key="index" :value="types.data">
              {{ type.name }}
            </option>
          </select>

          <br/>

          <select name="Musles" id="" required="true">  
            <option disabled value="" selected>Select an option</option>
            <option v-for="(muscle, index) in muscles" :key="index" :value="muscle.data">
              {{ muscle.name }}
            </option>
          </select>

          <br/>

          <select name="Types" id="" required="true">  
            <option disabled value="" selected>Select an option</option>
            <option v-for="(difficulty, index) in difficulties" :key="index" :value="difficulty.data">
              {{ difficulty.name }}
            </option>
          </select>
        </div>
        <button @click="getExercise(`https://api.api-ninjas.com/v1/exercises?type=${paraExe[0]}&?difficulty${paraExe[2]}`)"> 
          Generate Exercise
        </button>
          
  
        <div v-if="!select">
          <p>No Exercise</p>
        </div>
        <ul v-else>
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