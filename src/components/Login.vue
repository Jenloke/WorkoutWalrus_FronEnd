<template>
  <section id="logged">
    <div id="login">
      <div class="login-content">
      <header>
        <h2>
          <span class="iconic">
            <img class="iconic" src="src/assets/Logo.svg" alt="Image" srcset=""/>
          </span>
        Login
        </h2>
      </header>
        <div class="input-box">
          <fa class="l-con" icon="envelope"></fa>
          <input id="email" v-model="email" type="text" placeholder=" " required>
          <label for="email" >Email</label>
        </div>
        <div class ="input-box">
          <fa class="l-con" icon="lock"></fa>
          <input id="password" v-model="password" type="password" placeholder=" " required>
          <label for="password">Password</label>
        </div>
        <div class ="forget">
          <label for=""><input type="checkbox">Remember Me. <a href="#">Forget Password?</a></label>
          
        </div>
        <button id="l-button" @click="authenticateUser">Log in</button>
        <div class="registered"> 
          <p>Don't have an account? <a href="#">Sign up</a></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { loginAuthentication } from './js/login.js'
import { useRouter } from 'vue-router';
const router = useRouter()
const { email, password, authenticateUser } = loginAuthentication(router)
</script>

<style>

</style>