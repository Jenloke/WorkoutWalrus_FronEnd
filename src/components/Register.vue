<template>
  <section id="reg">
    <div id="register">
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
          <label for="email">Email</label>
          <input id="email" v-model="email" type="text" placeholder="" required>
        </div>
        <div class="input-box">
          <fa class="r-con" icon="lock"></fa>
          <label for="password">Password</label>
          <input id="password" v-model="password" type="password" placeholder="" required>
        </div>
        <div class="input-box">
          <fa class="r-con" icon="user"></fa>
          <label for="username">Username</label>
          <input id="username" v-model="username" type="text" placeholder="" required>
        </div>
        <div class="input-box">
          <fa class="r-con" icon="user"></fa>
          <label for="name">Full Name</label>
          <input id="name" v-model="name" type="text" placeholder="" required>
        </div>
        <div class="input-box">
          <label for="birthday">Birthday</label>
          <input id="birthday" v-model="birthday" type="date" placeholder="" required>
        </div>
        <div class="input-box">
          <label for="height">Height</label>
          <input id="height" v-model="height" type="number" placeholder="" required>
        </div>
        <div class="input-box">
          <label for="weight">Weight</label>
          <input id="weight" v-model="weight" type="number" placeholder="" required>
        </div>

        <button id="r-button" @click="signUp">Register</button>

        <div class="grouped">
          <span>
            <a href="">Forget-Password</a>
          </span>
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