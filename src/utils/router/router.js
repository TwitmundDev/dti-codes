import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../../view/HomeView.vue'
import ContactView from "../../view/ContactView.vue";
import AboutView from "../../view/AboutView.vue";
import CodeCheckerView from "../../view/CodeCheckerView.vue";


const routes = [
    { path: '/', component: HomeView },
    { path: '/contact', component: ContactView },
    { path: '/about', component: AboutView },
    { path: '/codeChecker', component: CodeCheckerView },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})