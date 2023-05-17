import { createRouter, createWebHistory } from 'vue-router'
import Personnage from "@/views/personnage.vue";
import Episode from "@/views/episode.vue";
import Location from "@/views/location.vue";
import Card from "@/views/card.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/personnage', component: Personnage },
    { path: '/episode', component: Episode },
    {path: '/location', component: Location},
    {path: '/card/:id', component: Card},
  ]
})

export default router
