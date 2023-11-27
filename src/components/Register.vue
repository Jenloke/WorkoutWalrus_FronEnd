<template>
    <div>
      <header>
        <toolbar>
          <h1>Signup</h1>
        </toolbar>
      </header>
  
      <main class="ion-padding">
        <div>
          <label for="username">Username</label>
          <input id="username" v-model="username" type="text">
        </div>
  
        <div>
          <label for="password">Password</label>
          <input id="password" v-model="password" type="password">
        </div>
  
        <div>
          <label for="name">Full Name</label>
          <input id="name" v-model="name" type="text">
        </div>
  
        <div>
          <label for="birthday">Birthday</label>
          <input id="birthday" v-model="birthday" type="date">
        </div>
  
        <div>
          <label for="height">Height</label>
          <input id="height" v-model="height" type="number">
        </div>
  
        <div>
          <label for="weight">Weight</label>
          <input id="weight" v-model="weight" type="number">
        </div>
  
        <button @click="signUp">Signup</button>
      </main>
    </div>
  </template>

<script setup>
import { registerUser } from './js/register.js'
import { useRouter } from 'vue-router';
const router = useRouter()
router.isReady()
const {username, password, birthday, name, height, weight, signUp} = registerUser(router)
</script>