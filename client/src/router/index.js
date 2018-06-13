import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Query from '@/components/Query'
import Admin from '@/components/Admin'
import Book from '@/components/Book'
import Food from '@/components/Food'
import Home from '@/components/Home'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Home
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
      path: '/book',
      name: 'book',
      component: Book
    },
    {
      path: '/food',
      name: 'food',
      component: Food
    },
    {
      path: '/index',
      name: '/index',
      component: Index
    }
  ]
})
