<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

let data = ref('')

onMounted(async () => {
  const response = await axios.get('https://rickandmortyapi.com/api/episode') //cette URL est une démonstration, vous devez adapter l'URL à votre besoin. La récupération se fait ici en GET, mais il est possible de faire des requêtes POST, PUT, DELETE, ...
  data.value = response.data
})
</script>

<template>
  <div class="page">
    <div class="card" v-for="item in data.results">
      {{item.name}}
      <router-link :to="'/Card/'+item.name" >detail episode</router-link>

    </div>
  </div>
</template>

<style scoped>
.card{
  margin: 1%;
  background-color: azure;
  width: 45%;
}
.page{
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
}

img{
  width: 100%;
}
</style>