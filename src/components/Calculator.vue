<template>
    <div>
        <header>
        <toolbar>
            <h1>Workout Walrus</h1>
        </toolbar>
        </header>
        <main :fullscreen="true">
        <header collapse="condense">
            <toolbar>
            <h1 size="large">Tab 3</h1>
            </toolbar>
        </header>

        <h1><strong>Exercise Calculator</strong></h1>

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
  