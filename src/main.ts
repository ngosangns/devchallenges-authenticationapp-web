import { createApp } from 'vue'
import App from './App.vue'

// Bootstrap
// npm install bootstrap@next
// npm i @types/bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// Vue Router
import * as VueRouter from 'vue-router'
import SignupPage from './pages/SignupPage/SignupPage.vue'
import LoginPage from './pages/LoginPage/LoginPage.vue'
import LoginGooglePage from './pages/LoginGooglePage/LoginGooglePage.vue'
import InfoPage from './pages/InfoPage/InfoPage.vue'
import InfoUpdatePage from './pages/InfoUpdatePage/InfoUpdatePage.vue'

// Material icons
import 'material-design-icons/iconfont/material-icons.css'

const app = createApp(App)

// Create router
const routes = [
    { path: '/signup', component: SignupPage },
    { path: '/login', component: LoginPage },
    { path: '/login-google', component: LoginGooglePage },
    { path: '/info-update', component: InfoUpdatePage },
    { path: '/', component: InfoPage },
]
const router = VueRouter.createRouter({
    // mode: 'history',
    history: VueRouter.createWebHistory(),
    routes,
})
app.use(router)

app.mount('#app')
