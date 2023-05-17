<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const id = route.params.id

import { onMounted, ref } from 'vue'
import axios from 'axios'

let data = ref('')

onMounted(async () => {
  const response = await axios.get('https://rickandmortyapi.com/api'+id) //cette URL est une démonstration, vous devez adapter l'URL à votre besoin. La récupération se fait ici en GET, mais il est possible de faire des requêtes POST, PUT, DELETE, ...
  data.value = response.data[0]
})
</script>

<template>
 <p>{{id}}</p>

</template>

<style scoped>
img{
  width: 60%;
}
p{
  display: flex;
  flex-direction: column;
}
</style>