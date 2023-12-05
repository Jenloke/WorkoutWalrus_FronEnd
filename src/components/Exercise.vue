<script setup>
import { ref } from 'vue';
import { types } from '../selection/typesExercise';
import { muscles } from '../selection/musclesExercise';
import { difficulties } from '../selection/difficultiesExercise';

const selectedType = ref('')
let selectedMuscle = ref('')
let selecteDifficulty = ref("")

// const select = ref(false)
let exeList = ref([])

import * as Realm from "realm-web";
const app = Realm.getApp("workout_final-jogzu");

const getExercise = ref(callexercise())
  
function callexercise() {
  try {
    const mongodb = app.currentUser.mongoClient('mongodb-atlas')
    const collection = mongodb.db('workoutwalrus').collection('exercises')
    return collection.find({
      'type': selectedType.value,
      'muscle': selectedMuscle.value,
      'difficulty': selecteDifficulty.value
    })
  } 
  catch(err) {
    console.log('failed', err)
  }
}

// console.log(getExercise)

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
        
        <!-- <button @click="select = !select"> -->
        <button  @click=getExercise>
          Generate Exercise
        </button>

        <button @click="console.log(exeList)">
          ASd
        </button>
        <!-- <button @click="getExercise(`https://api.api-ninjas.com/v1/exercises?type=${paraExe[0]}&?difficulty${paraExe[2]}`)"> 
          Generate Exercise
        </button> -->
          
        <div class="n-exer" v-if="!select">
          <p>No Exercise</p>
          <p>{{ selectedType }} - {{ selectedMuscle }} - {{ selecteDifficulty }}</p>
        </div>
        <ul v-else>
          <li v-for="e in getExercise">
            {{ e.name }} - {{ e.muscle }} - {{ e.difficulty }}
          </li>
        </ul>
  
      </main>
      </div>
    </div>
  </div>
  </div>
</template>