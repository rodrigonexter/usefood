import Home from './pages/home/Home.vue';
import Register from './pages/register/Register.vue'

export const routes = [
    {path: '', component: Home, titulo: Home},
    {path: '/register', component: Register, titulo: Register}
];