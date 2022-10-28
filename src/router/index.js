import { createRouter, createWebHistory } from 'vue-router'
import HomeApp from '../views/HomeApp.vue'
import AboutMeApp from '../views/AboutMeApp.vue'
import ContactApp from '../views/ContactApp.vue'
import ProjectsApp from '../views/ProjectsApp.vue'
import NotFound from '../views/NotFound.vue'


const routes = [
  {
    path: '/',
    name: 'HomeApp',
    component: HomeApp
  },
  {
    path: '/aboutme',
    name: 'AboutMeApp',
    component: AboutMeApp
  },
  {
    path: '/projects',
    name: 'ProjectsApp',
    component: ProjectsApp
  },
  {
    path: '/contact',
    name: 'ContactApp',
    component: ContactApp
  },
  { 
    path: '/404', 
    name: 'NotFound',
    component: NotFound 
  },  
  {
    // path: "*",
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  }
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router