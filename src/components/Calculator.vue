<template>
  <div id="main-content" v-motion-slide-top>
    <div id="calc">
    <main :fullscreen="true">
      <header collapse="condense">
        <h1>
        <fa icon="fire"/>
        </h1>
      </header>
      <div class="c-heading">
        <h1>
          Exercise calculator
        </h1>
      </div>
        <div id="c-listed">
          <ul :inset="true">
              <li>
              <select aria-label="Exercise" interface="popover" placeholder="Select exercise">
                  <option value="Push-ups">Push-ups</option>
                  <option value="Sit-ups">Sit-ups</option>
                  <option value="Jumping Jacks">Jumping Jacks</option>
              </select>
              </li>
              <li>
              <button>Calculate</button>
              </li>
              <h2>0 calories / min</h2>
          </ul>
        </div>
      </main>
    </div>
  </div>
</template>
  