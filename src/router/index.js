// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import UserLogin from '@/views/UserLogin.vue';
import UserRegister from '@/views/Register.vue';
import ServicesMenu from '@/views/ServicesMenu.vue';
import UserProfile from '@/views/UserProfile.vue';
import SplashScreen from '@/views/SplashScreen.vue';


const routes = [
  { path: '/', name: 'splash', component: SplashScreen }, 
  { path: '/login', name: 'login', component: UserLogin },
  { path: '/register', name: 'register', component: UserRegister },
  { path: '/services-menu', name: 'services-menu', component: ServicesMenu },
  { path: '/user-profile', name: 'user-profile', component: UserProfile }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;


