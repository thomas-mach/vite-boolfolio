import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'
import AppHome from './pages/AppHome.vue'
import AppContact from './pages/AppContact.vue'
import AppPortfolio from './pages/AppPortfolio.vue'
import AppProject from './pages/AppProject.vue'
import AppNotFound from './pages/AppNotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: AppHome },
        { path: '/contact', name: 'contact', component: AppContact },
        { path: '/portfolio', name: 'portfolio', component: AppPortfolio },
        // { path: '/project/:id', name: 'project', component: AppProject },
        {
            path: '/project/:slug',
            name: 'project',
            component: AppProject,
            props: true
        },
        { path: '/:pathMatch(.*)*', name: 'not-found', component: AppNotFound },
    ],
})

createApp(App).use(router).mount('#app')
