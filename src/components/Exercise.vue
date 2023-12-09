<script setup>
import { ref, onUpdated, computed } from 'vue';
import { types } from '../selection/typesExercise';
import { muscles } from '../selection/musclesExercise';
import { difficulties } from '../selection/difficultiesExercise';
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import * as Realm from "realm-web";
const app = Realm.getApp("workout_final-jogzu");

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

const exeList = ref([])

let urlApi = ref(`https://api.api-ninjas.com/v1/exercises?type=${selectedType.value}&?muscle=${selectedMuscle.value}&?difficulty${selecteDifficulty.value}`)

onUpdated(() => {
  urlApi = `https://api.api-ninjas.com/v1/exercises?type=${selectedType.value}&?muscle=${selectedMuscle.value}&?difficulty${selecteDifficulty.value}`
})

async function fetchExercise(url) {
  try {
    const response = await axios.get(url, {
      headers: {
        'X-Api-Key': 'H2hjF7GM2NnHzuZTm5Nakw==cnVmqdsMHbfV8EVb'
      }
    }).then( (response) => {
      console.log(response.data)
      exeList.value = response.data
      insertCalorie()
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function insertCalorie() {
  exeList.value.forEach(exercise => {
    exercise.time = 0

    let baseCalorie = 0
    let multiplier = 0.0

    switch(exercise.type) {
      case "cardio":
        baseCalorie = 4.2
        break;
      case "olympic_weightlifting":
        baseCalorie = 3.5
        break;
      case "plyometrics":
        baseCalorie = 5.1
        break;
      case "powerlifting":
        baseCalorie = 4.8
        break;
      case "strength":
        baseCalorie = 3.2
        break;
      case "stretching":
        baseCalorie = 2.4
        break;
      case "strongman":
        baseCalorie = 4.7
        break;
    }
    
    switch(exercise.difficulty) {
      case "beginner":
        multiplier = 1.0
        break;
      case "intermediate":
        multiplier = 1.5
        break;
      case "expert":
        multiplier = 2.0
        break;
    }

    let calorie = 0.0
    calorie = baseCalorie * multiplier
    exercise.calorie = calorie.toFixed(1)
  })

  console.log(exeList.value)
}

async function updateList(exercise, mins){
  try{
    const mongodb = app.currentUser.mongoClient('mongodb-atlas')
    const collection = mongodb.db('workoutwalrus').collection('users')
  
    console.log(exercise.type, exercise.difficulty)
  
    const newItem = {
      id: uuidv4(),
      name: exercise.name,
      instructions: exercise.instructions,
      equipment: exercise.equipment,
      time: parseInt(mins),
      calories: parseFloat(exercise.calorie)
    }
    await collection.updateOne(
      {userID: app.currentUser.id},
      {$push: {toDo: newItem}}
    )
    console.log("success")
  }catch(err){
    console.error("tangina may error")
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
              <label>Type</label>
              <select v-model="selectedType">
                <option value="" disabled selected hidden>Select a type</option>
                <option v-for="type in types" :value="type.value"> 
                  {{ type.name }}
                </option>
              </select>

              <br>

              <label>Muscle</label>
              <select v-model="selectedMuscle">
                <option value="" disabled selected hidden>Select a muscle</option>
                <option v-for="muscle in muscles" :value="muscle.value"> 
                  {{ muscle.name }}
                </option>
              </select>
              
              <br>

              <label>Difficulty</label>
              <select v-model="selecteDifficulty">
                <option value="" disabled selected hidden>Select a difficulty</option>
                <option v-for="difficulty in difficulties" :value="difficulty.value"> 
                  {{ difficulty.name }}
                </option>
              </select>
            </div>
            

            <button class="genbtn" @click="fetchExercise(urlApi)"> 
              Generate Exercise
            </button>

            </main>
        </div>
              
            
          
      </div>
    </div>
  </div>
  <div class="Spacer">
    <div class="criterion">
      <div v-if="exeList.length === 0" >
        <h1>No Exercise</h1>
        <h4>Select criteria to get started</h4>
      </div>

      <div v-else class="listExercise">
        <ul>
          <li class="exerList" v-for="exer in exeList" :value="exer.value" >
            <div>
            <h4>{{ exer.name }}</h4>
            </div>
              <div class="Instructions">
                <p>Instructions: {{ exer.instructions }}</p> 
                <p>{{ exer.calorie }} calorie per minute</p> 
              </div>
              <div class="testings">
                <span><input class="time" v-model="exer.time" type="number" placeholder=" " required>
                <!-- <input class="time" v-model="time" type="number" placeholder=" " required> -->
                <label for="time">minutes</label>
                </span>
                <p>{{ `${exer.calorie} * ${exer.time}` }} = {{ Math.ceil(exer.time * exer.calorie) }} estimated calories burned</p>
                
              </div>
              <div class="btns">
              <button class="exbtn" @click="updateList(exer, exer.time)">Add Exercise</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>