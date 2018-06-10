import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Query from '@/components/Query'
import Admin from '@/components/Admin'
import Home from '@/components/Home'
import Food from '@/components/Food'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Hello
    }, {
      path: '/register',
      name: 'register',
      component: Register
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/query',
      name: 'query',
      component: Query
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/food',
      name: 'food',
      component: Food
    }
  ]
})
