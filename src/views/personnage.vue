<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

let data = ref('')

onMounted(async () => {
  const response = await axios.get('https://rickandmortyapi.com/api/character') //cette URL est une démonstration, vous devez adapter l'URL à votre besoin. La récupération se fait ici en GET, mais il est possible de faire des requêtes POST, PUT, DELETE, ...
  data.value = response.data
})
</script>

<template>

  <ul>
    <li v-for="personnage in data">
      {{personnage}}
    </li>

  </ul>
</template>

<style scoped>

</style>