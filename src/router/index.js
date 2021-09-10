import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

const routes = [
  {
    path:'/',
    redirect:'Home',
  },{
    path:'/login',
    name:'Login',
    component:() => import('../views/Login.vue'),
  },{
    path: '/Home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },{
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if(to.path !== '/login'){
    if(!store.state.loggedIn){
      next({path:'/login'});
    }
  } else {
    if(store.state.loggedIn){
      next({path:'/home'});
    }
  }
  next();
});

export default router
