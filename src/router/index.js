import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Sobre from '../views/Sobre.vue'
import ProjectDetail from '../views/ProjectDetail.vue'


const routes = [
{ path: '/', name: 'Home', component: Home },
{ path: '/sobre', name: 'Sobre', component: Sobre },
{ path: '/projeto/:id', name: 'ProjectDetail', component: ProjectDetail, props: true }
]


const router = createRouter({
history: createWebHistory(),
routes
})


export default router