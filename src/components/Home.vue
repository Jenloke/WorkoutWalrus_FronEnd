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
      // Logic for update button click
    }
  }
};
</script>

<template>
  <div id="main-content">
    <header>
      <toolbar>
        <h1>Workout Walrus</h1>
      </toolbar>
    </header>
  
    <main>
      <ul :inset="true">
        <li>
          <div>
              <img aria-hidden="true" :src="avatarSrc" alt="User Avatar" />
              <span>{{ username }}</span>
          </div>
        </li>
      </ul>

      <ul lines="none" :inset="true">
        <li>
          <strong><h1>User Information</h1></strong>
        </li>
        <li>
          <span>{{ height }}</span>
        </li>
        <li>
          <span>{{ weight }}</span>
        </li>
        <li>
          <span>{{ bmi }}</span>
        </li>
        <li>
          <button @click="update">Update</button>
        </li>
      </ul>
      
      <ul lines="none" :inset="true">
        <li>
          <strong><h1>Recent Activity</h1></strong>
        </li>
        <li>
          <div>
            <div>
              <p>The quick brown fox jumped over the lazy dog.</p>
            </div>
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>
  

  