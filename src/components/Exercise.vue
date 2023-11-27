<script>



async function getExercise(url = urlExercise) {
  const response = await fetch(url, {
    headers: {
      'X-Api-Key': 'H2hjF7GM2NnHzuZTm5Nakw==cnVmqdsMHbfV8EVb'
    }
  });
  console.log(response.json());
  // return response.json();
}
</script>

<template>
    <div id="main-content">
      <header>
        <toolbar>
          <h1 class="ion-text-justify">Workout Walrus</h1>
        </toolbar>
      </header>
      <main>
        <h1 class="ion-padding"><strong>Exercises</strong></h1>
  
        <ul :inset="true">
          <li>
            <select label="Types" label-placement="fixed" placeholder="Select One" @change="paraExe[0]=$event.target.value">
              <option v-for="(x, index) in types" :key="index" :value="x.value">{{ x.name }}</option>
            </select>
          </li>
  
          <li>
            <select label="Muscle" label-placement="fixed" placeholder="Select One" @change="paraExe[1]=$event.target.value">
              <option v-for="(x, index) in muscles" :key="index" :value="x.value">{{ x.name }}</option>
            </select>
          </li>
  
          <li>
            <select label="Difficulties" label-placement="fixed" placeholder="Select One" @change="paraExe[2]=$event.target.value">
              <option v-for="(x, index) in difficulties" :key="index" :value="x.value">{{ x.name }}</option>
            </select>
          </li>
          
          <li id="button-generate-exercise" class="asd">
            <button @click="getExercise(`https://api.api-ninjas.com/v1/exercises?type=${paraExe[0]}&?difficulty${paraExe[2]}`)"> 
              Generate Exercise
            </button>
          </li> 
        </ul>
  
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
  
<script setup>
import { types, muscles, difficulties } from '../selection/types';

const paraExe = [ '', '', ''];
</script>