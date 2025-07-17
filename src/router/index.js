import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Centers from '../views/Centers.vue'
import CenterDetail from '../views/CenterDetail.vue'
import Featured from '../views/Featured.vue'
import Services from '../views/Services.vue'
import Areas from '../views/Areas.vue'
import Reviews from '../views/Reviews.vue'
import Guide from '../views/Guide.vue'
import Contact from '../views/Contact.vue'
import Admin from '../views/Admin.vue'
import TourBooking from '../views/TourBooking.vue'
import OnlineConsultation from '../views/OnlineConsultation.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/centers',
    name: 'Centers',
    component: Centers
  },
  {
    path: '/centers/:id',
    name: 'CenterDetail',
    component: CenterDetail
  },
  {
    path: '/featured',
    name: 'Featured',
    component: Featured
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/areas',
    name: 'Areas',
    component: Areas
  },
  {
    path: '/reviews',
    name: 'Reviews',
    component: Reviews
  },
  {
    path: '/guide',
    name: 'Guide',
    component: Guide
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/tour-booking',
    name: 'TourBooking',
    component: TourBooking
  },
  {
    path: '/online-consultation',
    name: 'OnlineConsultation',
    component: OnlineConsultation
  }
]

const router = createRouter({
  history: createWebHistory('/hukushi/'),
  routes
})

export default router