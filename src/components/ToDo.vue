<script setup>
import { parse } from "@fortawesome/fontawesome-svg-core";
import * as Realm from "realm-web";
import { ref, onMounted } from 'vue';
const app = Realm.getApp("workout_final-jogzu");

const userData = ref(null)
const user = app.currentUser
userData.value = user.customData

const fetchData = async () =>{
  userData.value = user.customData
}

const updateCalories = async (mins, calories, exercise) =>{
    const mongodb = app.currentUser.mongoClient('mongodb-atlas')
    const collection = mongodb.db('workoutwalrus').collection('users')

    let newMins = parseInt(mins["$numberInt"])
    let newCal = parseFloat(calories["$numberDouble"])

    let incCal = newMins*newCal
    console.log(incCal)

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
  // return{
  //   userData,
  //   updateCalories,
  // }
</script>

<template>
    <div class="Spacer">  
      <div id="main-content" v-motion-slide-top>
        <div v-if="userData && userData.toDo.length > 0">
          <ul>
            <li v-for="item in userData.toDo" :value="item.value">
              <div>
                <p>{{ item.name }} - {{ item.time }} - {{ item.calories }}</p>
                <button @click="updateCalories(item.time, item.calories, item)"> Finish </button>
              </div>
            </li>
          </ul>
        </div>

        <div v-else>
        <p>No data available.</p>
        </div>
      </div>
    </div>
  </template>