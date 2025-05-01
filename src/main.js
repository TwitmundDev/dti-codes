import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import "vue3-toastify/dist/index.css";
import { router } from './utils/router/router.js'
import '@fortawesome/fontawesome-free/css/all.css'

// Importation de Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faClipboard } from '@fortawesome/free-solid-svg-icons'

// Ajout de l'icone clipboard à la bibliothèque
library.add(faClipboard)

const app = createApp(App)

// Enregistrement global du composant FontAwesomeIcon
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.mount('#app')