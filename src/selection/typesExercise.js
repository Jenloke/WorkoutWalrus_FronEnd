import { ref } from 'vue'

const types = ref([ 
    { 
      name: 'Cardio', 
      data: 'cardio',
      selected: false
    },
    { 
      name: 'Olympic Weightlifting', 
      data: 'olympic_weightlifting',
      selected: false
    },
    { 
      name: 'Plyometrics', 
      data: 'plyometrics',
      selected: false
    },
    { 
      name: 'Powerlifting', 
      data: 'powerlifting',
      selected: false
    },
    { 
      name: 'Strength', 
      data: 'strength',
      selected: false
    },
    { 
      name: 'Stretching', 
      data: 'stretching',
      selected: false
    },
    { 
      name: 'Strongman', 
      data: 'strongman',
      selected: false
    }
])

export { types }

  