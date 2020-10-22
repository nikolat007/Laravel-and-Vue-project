import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from '../components/pages/Todos.vue';
import Register from '../components/pages/Register.vue';
import Login from '../components/pages/Login.vue';
import TodoPage from '../components/pages/TodoPage.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Todo',
    component: Todo
  },
  {
    path: '/todo/:id',
    name: 'TodoPage',
    component: TodoPage
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
