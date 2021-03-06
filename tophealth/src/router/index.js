import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/customers/:id/health-records',
    name: 'HealthRecords',
    component: () => import('../views/Customers/HealthRecords.vue')
  },
  {
    path: '/customers/:id/profile',
    name: 'AccountProfile',
    component: () => import('../views/Customers/Profile.vue')
  },
  {
    path: '/customers/:id/profile/edit',
    name: 'AccountProfileEdit',
    component: () => import('../views/Customers/ProfileEdit.vue')
  },
  {
    path: '/customers/:id/health-profile/edit',
    name: 'HealthProfile',
    component: () => import('../views/Customers/HealthProfile.vue')
  },
  {
    path: '/customers/:id/bookings',
    name: 'AccountBooking',
    component: () => import('../views/Customers/Bookings.vue')
  },
  {
    path: '/activity',
    name: 'Activity',
    component: () => import('../views/Customers/Activity.vue')
  },
  {
    path: '/appointments/:activityId',
    name: 'Appointment',
    component: () => import('../views/Customers/Appointment.vue')
  },
  {
    path: '/appointments/calendar/:locationId',
    name: 'SlotCalendar',
    component: () => import('../views/Customers/SlotCalendar.vue')
  },
  {
    path: '/appointments/calendar/:locationId/slots',
    name: 'Slot',
    component: () => import('../views/Customers/Slot.vue')
  },
  {
    path: '/appointments/:slotId',
    name: 'AppointmentDetail',
    component: () => import('../views/Customers/AppointmentDetail.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
