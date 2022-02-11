import { createRouter, createWebHistory } from 'vue-router'
import LocationCard from '../views/LocationCard'
import AllLocations from '../views/AllLocations'
import Login from '../views/Login'
import SignUp from '../views/SignUp.vue'
import imageUpload from '../views/imageupload.vue'
import AddLocation from '../views/AddLocation.vue'

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
      },
      {
        path: '/addLocation',
        name: 'AddLocation',
        component: AddLocation,
      },
      {
        path: '/imageUpload',
        name: 'ImageUpload',
        component: imageUpload,
      }
    ]
    const router = createRouter({
        history: createWebHistory(process.env.BASE_URL),
        routes,
      })
      
      export default router
      