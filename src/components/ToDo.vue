<script setup>
import { parse } from "@fortawesome/fontawesome-svg-core";
import * as Realm from "realm-web";
import { ref, onMounted, onUpdated } from 'vue';
const app = Realm.getApp("workout_final-jogzu");

const userData = ref(null)
const user = app.currentUser
userData.value = user.customData

const userCalTotal = ref(0)
userCalTotal.value = parseFloat(userData.value.totalCalBurned["$numberDouble"])

const fetchData = async () =>{
  userData.value = user.customData
  // console.log(userData.value)
  // console.log(userData.value.totalCalBurned)
}

const updateCalories = async (mins, calories, exercise) =>{
  userData.value.toDo = userData.value.toDo.filter((t) => t != exercise)

  const mongodb = app.currentUser.mongoClient('mongodb-atlas')
  const collection = mongodb.db('workoutwalrus').collection('users')

  let newMins = parseInt(mins["$numberInt"])
  let newCal = parseFloat(calories["$numberDouble"])

  let incCal = newMins*newCal
  console.log(incCal)

  userCalTotal.value += incCal

  try{
      const filter = {
          name: exercise.name,
          instructions: exercise.instructions,
          equipment: exercise.equipment,
          time: exercise.time,
          calories: exercise.calories,
      }
      await collection.updateOne({userID: user.id},{$pull: {toDo: filter}})
      await collection.updateOne({userID: user.id}, {$inc: {totalCalBurned: incCal}})
  }catch(err){
      console.error("tangina", err)
  }
}

onMounted(async ()=>{
  await app.currentUser.refreshCustomData()
  await fetchData()
})

onUpdated(async ()=> {
  await app.currentUser.refreshCustomData()
  await fetchData()
})
  // return{
  //   userData,
  //   updateCalories,
  // }
</script>

<template>
    <div class="Spacer">  
      <div id="main-content" v-motion-slide-top>
        <div class="act" v-if="!user">
          <p>No user logged in.</p>
        </div>
        <div class="act" v-else-if="userData && userData.toDo.length > 0">
        <!-- <div v-else-if="userData"> -->
          <h1> {{ Math.ceil(userCalTotal) }}</h1>
          <ul>
            <li  v-for="item in userData.toDo" :value="item.value">
              <div class="act" >
                <p>{{ item.name }} - {{ parseInt(item.time["$numberInt"]) }} - {{ parseFloat(item.calories["$numberDouble"]) }}</p>
                <button class="finish" @click="updateCalories(item.time, item.calories, item)"> Finish </button>
              </div>
            </li>
          </ul>
        </div>

        <div class="act" v-else>
          <h1> {{ Math.ceil(userCalTotal) }}</h1>
          <p>No pending Activities.</p>
        </div>
      </div>
    </div>
  </template>