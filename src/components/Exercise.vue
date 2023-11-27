<script>



async function getExercise(url = urlExercise) {
  const response = await fetch(url, {
    headers: {
      'X-Api-Key': 'H2hjF7GM2NnHzuZTm5Nakw==cnVmqdsMHbfV8EVb'
    }
  });
  console.log(response.json());
  // return response.json();
}
</script>

<template>
    <h1>Exercise</h1>
</template>
