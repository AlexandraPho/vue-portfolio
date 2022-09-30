import { createRouter, createWebHistory } from 'vue-router'
import HomeApp from '../views/HomeApp.vue'

const routes = [
  { path: '/', component: HomeApp },
  { path: '/about', component: About },
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router