<template>
  <section id="reg">
    <div id="register" v-motion-slide-top>
      <div class="register-content">
      <header>
        <h2>
          <span class="iconic">
            <img class="iconic" src="src/assets/Logo.svg" alt="Image" srcset=""/>
          </span>
        Sign Up
        </h2>
      </header>
        <div class="input-box">
          <fa class="r-con" icon="envelope"></fa>
          <input id="email" v-model="email" type="text" placeholder="" required>
          <label for="email">Email</label>
        </div>
        <div class="input-box">
          <fa class="r-con" icon="lock"></fa>
          <input id="password" v-model="password" type="password" placeholder="" required>
          <label for="password">Password</label>
        </div>
        <div class="input-box">
          <fa class="r-con" icon="user"></fa>
          <input id="username" v-model="username" type="text" placeholder="" required>
          <label for="username">Username</label>
        </div>
        <div class="input-box">
          <fa class="r-con" icon="user"></fa>
          <input id="name" v-model="name" type="text" placeholder="" required>
          <label for="name">Full Name</label>
        </div>
        <div class="input-box">
          <input id="birthday" v-model="birthday" type="date" placeholder="" required>
          <label for="birthday">Birthday</label>
        </div>
        <div class="input-box">
          <input id="height" v-model="height" type="number" placeholder=" " required>
          <label for="height">Height (cm)</label>
        </div>
        <div class="input-box">
          <input id="weight" v-model="weight" type="number" placeholder=" " required>
          <label for="weight">Weight (kg)</label>
        </div>

        <button id="r-button" @click="signUp">Register</button>

        <div class="grouped">
          <span><p>Already have an Account? </p></span>
          <span>
            <a href="">Log-in</a>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { registerUser } from './js/register.js'
import { useRouter } from 'vue-router';
const router = useRouter()
const {email,username, password, birthday, name, height, weight, signUp} = registerUser(router)
</script>