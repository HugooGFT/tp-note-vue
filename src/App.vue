<script setup></script>

<template>
  <nav>
    <router-link to="/location">Location</router-link>
    <router-link to="/episode">Episode</router-link>
  </nav>

  <router-view></router-view>
</template>

<style scoped>
nav{
  background-color: antiquewhite;
  padding: 10px;
}
</style>
