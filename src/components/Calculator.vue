<template>
  <div id="main-content" v-motion-slide-top>
    <main :fullscreen="true">
      <header collapse="condense">
        <h1 size="large">Calorie Tracker</h1>
      </header>
        <h1>
          Exercise calculator
        </h1>

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
        </ul>

        <h2>0 calories / min</h2>
        </main>
    </div>
</template>
  