import { ref } from 'vue'

const difficulties = ref([
  {
    name: 'Beginner',
    value: 'beginner',
    selected: 'false'
  }, 
  {
    name: 'Intermediate',
    value: 'intermediate',
    selected: 'false'
  }, 
  {
    name: 'Expert',
    value: 'expert',
    selected: 'false'
  }
]);

export { difficulties }