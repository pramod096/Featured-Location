import { createRouter, createWebHistory } from 'vue-router'
import LocationCard from '../views/LocationCard'
import AllLocations from '../views/AllLocations'
import Login from '../views/Login'
import SignUp from '../views/SignUp.vue'

const routes = [
    {
      path: '/',
      name: 'LocationCard',
      component: LocationCard,
    },
    {
        path: '/allLocations',
        name: 'AllLocations',
        component: AllLocations,
      },
      {
        path: '/login',
        name: 'Login',
        component: Login,
      },
      {
        path: '/signUp',
        name: 'SignUp',
        component: SignUp,
      }
    ]
    const router = createRouter({
        history: createWebHistory(process.env.BASE_URL),
        routes,
      })
      
      export default router
      