<script>
export default {
  data() {
    return {
      username: 'John Doe',
      height: 'Height: 180cm',
      weight: 'Weight: 75kg',
      bmi: 'BMI: 23.15',
      avatarSrc: 'https://ionicframework.com/docs/img/demos/avatar.svg'
    };
  },
  methods: {
    update() {
      console.log("abc")
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
        <p>{{ username }}</p>
      </div>

      <div>
      <h1>User Information</h1>
        <ul lines="none" :inset="true">
          <li>
            <span>{{ height }}</span>
          </li>
          <li>
            <span>{{ weight }}</span>
          </li>
          <li>
            <span>{{ bmi }}</span>
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
  

  