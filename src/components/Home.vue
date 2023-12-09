<script>
import * as Realm from "realm-web";
import { ref, onMounted } from 'vue';
export default {
  setup(){
    const userData = ref(null)
    const weightLabel = ref(0.0)
    const heightLabel = ref(0.0)
    let weight, height
    const bmi = ref(0.0)
    const app = Realm.getApp("workout_final-jogzu");
    const user = app.currentUser
    userData.value = user.customData

    const fetchData = async () =>{
      userData.value = user.customData

      weightLabel.value = parseFloat(userData.value.weight["$numberDouble"])
      weight = parseFloat(userData.value.weight["$numberDouble"])

      heightLabel.value = parseFloat(userData.value.height["$numberDouble"])
      height = parseFloat(userData.value.height["$numberDouble"])
      
      bmi.value = (weight/(height*0.01)**2).toFixed(2)

    }

    onMounted(async ()=>{
      await app.currentUser.refreshCustomData()
      await fetchData()
    })
    return{
      userData,
      weightLabel,
      heightLabel,
      bmi,
    }
    
  }
};
</script>

<template>
  <div class="Spacer">
  <div  id="main-content" v-motion-slide-top>
    <div class="backed">
      <header class="user">
          <h1 >{{ userData.username }}</h1>
          <img id="pfp" aria-hidden="true" src="src/assets/pfps.svg" alt="User Avatar" /> 
      </header>
    </div>
    <main>
      <div id="UserInfo" v-motion-slide-top>
      <h1>{{ userData.name }}</h1>
        <p>User Information</p>
        <ul lines="none" :inset="true">
          <li>
            <span class="wlabel">Height: {{ heightLabel }}cm</span>
          </li>
          <li>
            <span class="wlabel">Weight: {{ weightLabel }}Kg</span>
          </li>
          <li>
            <span class="wlabel">BMI: {{ bmi }}</span>
          </li>
        </ul>

        <div class="center">
          <button class="button updated" @click="update">
            Update
          </button>
        </div>
        
      </div>
      
      <div id="recent-Act" v-motion-slide-top>
        <h1>Pending Activities</h1>  
        <ul>
          <li>
            The quick brown fox jumped over the lazy dog.
          </li>
        </ul>
      </div>
    </main>
  </div>
  </div>
</template>
  

  