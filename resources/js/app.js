require('./bootstrap');
import { createApp } from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from './components/Welcome.vue'
import DataInsert from './components/DataInsert.vue'

const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/data',
        name: 'DataInsert',
        component: DataInsert
    },
  ]
const router= VueRouter.createRouter({
    history: VueRouter.createWebHistory('/laravel-vue3/public/'),
    routes
})
const app = createApp({})
vue.use(router)
app.component('hello-world', HelloWorld)
app.
app.mount('#app')