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
    const app = Realm.getApp("workout_final-jogzu");
    const user = app.currentUser
    userData.value = user.customData

    onMounted(async ()=>{
      await app.currentUser.refreshCustomData()
      userData.value = user.customData
    })
    return{
      userData,
    }
    
  }
};
</script>

<template>
  <div id="main-content">
    <header>
        <h1>Workout Walrus</h1>
    </header>

    <main>

      <div>
        <img aria-hidden="true" :src="avatarSrc" alt="User Avatar" />
        <p>{{ userData.username }}</p>
      </div>

      <div>
      <h1>User Information</h1>
        <ul lines="none" :inset="true">
          <li>
            <span>{{ userData.height }}</span>
          </li>
          <li>
            <span>{{ userData.weight }}</span>
          </li>
          <li>
            <span>{{ bmi = (userData.weight/(userData.height*0.01)**2).toFixed(2) }}</span>
          </li>
        </ul>
        <button @click="update">Update</button>
      </div>
      
      <div>
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
  

  