<template>
    <div id="login">
      <header>
        <!-- <toolbar>
          <h1>Login</h1>
        </toolbar> -->
        <h1>Login</h1>
      </header>
  
      <main class="ion-padding">
        <div>
          <label for="email">Email</label>
          <input id="email" v-model="email" type="text">
        </div>
  
        <div>
          <label for="password">Password</label>
          <input id="password" v-model="password" type="password">
        </div>
  
        <button @click="authenticateUser">Login</button>
      </main>
    </div>
  </template>

<script setup>
import { loginAuthentication } from './js/login.js'
import { useRouter } from 'vue-router';
const router = useRouter()
const { email, password, authenticateUser } = loginAuthentication(router)
</script>