<script setup>
import { ref, onMounted, onUpdated } from 'vue'

import * as Realm from "realm-web"
const app = Realm.getApp("workout_final-jogzu")
const user = app.currentUser

const userData = ref(null)
userData.value = user.customData

const userCalTotal = ref(0)
userCalTotal.value = Math.ceil(parseFloat(userData.value.totalCalBurned["$numberDouble"]))

const fetchData = async () => {
  userData.value = user.customData
}

const updateCalories = async (mins, calories, exercise) => {
  userData.value.toDo = userData.value.toDo.filter((list) => list != exercise)

  const mongodb = app.currentUser.mongoClient('mongodb-atlas')
  const collection = mongodb.db('workoutwalrus').collection('users')

  let newMins = parseInt(mins["$numberInt"])
  let newCal = parseFloat(calories["$numberDouble"])

  let incCal = newMins * newCal
  userCalTotal.value += incCal

  try {
    const filter = {
        name: exercise.name,
        instructions: exercise.instructions,
        equipment: exercise.equipment,
        time: exercise.time,
        calories: exercise.calories,
    }

    await collection.updateOne({userID: user.id},{$pull: {toDo: filter}})
    await collection.updateOne({userID: user.id}, {$inc: {totalCalBurned: incCal}})
  } catch(error) {
    console.error("Error Occured (Posting Error):", error)
  }
}

onMounted(async () => {
  await app.currentUser.refreshCustomData()
  await fetchData()
})

onUpdated(async () => {
  await app.currentUser.refreshCustomData()
  await fetchData()
})
</script>

<template>
    <div class="Spacer">  
      <div id="main-content" v-motion-slide-top>
        <div class="act" v-if="!user">
          <p>No user logged in.</p>
        </div>
        
        <div class="act" v-else-if="userData && userData.toDo.length > 0">
          <h1>Calories Burned</h1>
          <h1>{{ Math.ceil(userCalTotal) }} kcal</h1>
          <ul>
            <li  v-for="item in userData.toDo" :value="item.value">
              <div class="act" >
                <h2>{{ item.name }}</h2>
                <p>{{ parseFloat(item.calories["$numberDouble"]) }} Calories per Minute @ {{ parseInt(item.time["$numberInt"]) }} Minutes Duration</p>
                <p>{{ Math.floor(parseFloat(item.calories["$numberDouble"]) * parseInt(item.time["$numberInt"])) }} kcal - Estimated Total Calories Burned</p>
                <button class="finish" @click="updateCalories(item.time, item.calories, item)"> Finish </button>
              </div>
            </li>
          </ul>
        </div>

        <div class="act" v-else>
          <h1>Calories Burned</h1>
          <h1>{{ Math.ceil(userCalTotal) }} kcal</h1>
          <p>No pending Activities.</p>
        </div>
      </div>
    </div>
  </template>