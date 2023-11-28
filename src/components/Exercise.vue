<script>
import { types } from '../selection/typesExercise';
import { muscles } from '../selection/musclesExercise';
import { difficulties } from '../selection/difficultiesExercise';
const paraExe = [ '', '', ''];



async function getExercise(url) {
  const response = await fetch(url, {
    headers: {
      'X-Api-Key': 'H2hjF7GM2NnHzuZTm5Nakw==cnVmqdsMHbfV8EVb'
    }
  });
  console.log(response.json());
  // return response.json();
}

export default {
  data() {
    return {
      selectedType: null,
      optionTypes: types,
      selectedMuscle: null, 
      optionMuscles: muscles,
      selecteDifficulty: null,
      optionDifficulties: difficulties
    }
  }
}
</script>

<template>
    <div id="main-content">
      <header>
          <h1 class="ion-text-justify">
            Workout Walrus
          </h1>
      </header>

      <main>
        <h1 class="ion-padding">
          Exercises
        </h1>

        <select name="" id="" v-model="selectedType" required="true">  
          <option disabled value="" selected>Select an option</option>
          <option v-for="(optionTypes, index) in optionTypes" :key="index" :value="optionTypes.value">
            {{ optionTypes.name }}
          </option>
        </select>
        <p v-if="selectedType">Selected option: {{ selectedType }}</p>
        <p v-else>No option selected</p>


  
          <!-- <li>
            <select label="Muscle" label-placement="fixed" placeholder="Select One" @change="paraExe[1]=$event.target.value">
              <option v-for="(x, index) in muscles" :key="index" :value="x.value">{{ x.name }}</option>
            </select>
          </li>
  
          <li>
            <select label="Difficulties" label-placement="fixed" placeholder="Select One" @change="paraExe[2]=$event.target.value">
              <option v-for="(x, index) in difficulties" :key="index" :value="x.value">{{ x.name }}</option>
            </select>
          </li> -->
          
          <button @click="getExercise(`https://api.api-ninjas.com/v1/exercises?type=${paraExe[0]}&?difficulty${paraExe[2]}`)"> 
            Generate Exercise
          </button>
          
  
        <ul :inset="true">
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