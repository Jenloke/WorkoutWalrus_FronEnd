<template>
    <div>
      <header>
        <toolbar>
          <h1>Login</h1>
        </toolbar>
      </header>
  
      <main class="ion-padding">
        <div>
          <label for="username">Username</label>
          <input id="username" type="text">
        </div>
  
        <div>
          <label for="password">Password</label>
          <input id="password" type="password">
        </div>
  
        <button>Login</button>
      </main>
    </div>
  </template>

<script setup>
import { loginAuthentication } from '.\js\login.js'
import { useRouter } from 'vue-router';
const router = useRouter()
router.isReady()
const { username, password, authenticateUser } = loginAuthentication(router)
</script>