import { ref } from 'vue'

const types = ref([ 
    { 
      name: 'Cardio', 
      value: 'cardio',
      selected: false
    },
    { 
      name: 'Olympic Weightlifting', 
      value: 'olympic_weightlifting',
      selected: false
    },
    { 
      name: 'Plyometrics', 
      value: 'plyometrics',
      selected: false
    },
    { 
      name: 'Powerlifting', 
      value: 'powerlifting',
      selected: false
    },
    { 
      name: 'Strength', 
      value: 'strength',
      selected: false
    },
    { 
      name: 'Stretching', 
      value: 'stretching',
      selected: false
    },
    { 
      name: 'Strongman', 
      value: 'strongman',
      selected: false
    }
])

export { types }

  