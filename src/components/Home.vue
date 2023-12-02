<script>
import * as Realm from "realm-web";
import { ref, onMounted } from 'vue';
export default {
  // data() {
  //   return {
  //     username: 'John Doe',
  //     height: 'Height: 180cm',
  //     weight: 'Weight: 75kg',
  //     bmi: 'BMI: 23.15',
  //     avatarSrc: 'src/assets/pfp.svg'
  //   };
  // },
  // methods: {
  //   update() {
  //     console.log("abc")
  //   }
  // }
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
  <div id="main-content">
    <header>
        <h1>{{ userData.username }}</h1>
    </header>

    <main>

      <div>
        <img aria-hidden="true" :src="avatarSrc" alt="User Avatar" />
        <p>{{ userData.name }}</p>
      </div>

      <div id="UserInfo">
      <h1>User Information</h1>
        <ul lines="none" :inset="true">
          <li>
            <span>{{ heightLabel }}</span>
          </li>
          <li>
            <span>{{ weightLabel }}</span>
          </li>
          <li>
            <span>{{ bmi }}</span>
          </li>
        </ul>
        <button @click="update">Update</button>
      </div>
      
      <div id="recent-Act">
        <h1>Recent Activity</h1>  
        <ul>
          <li>
            The quick brown fox jumped over the lazy dog.
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>
  

  