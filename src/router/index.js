import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from '@/components/LoginPage.vue';
import SignupForm from '@/components/SignupPage.vue';

const routes = [
{
    path: '/',
    name: 'Home',
    component: SignupForm,
},
{
    path: '/login',
    name: 'Login',
    component: LoginForm,
},
{
    path: '/signup',
    name: 'Signup',
    component: SignupForm,
},
];

const router = createRouter({
history: createWebHistory(),
routes,
});

export default router;
