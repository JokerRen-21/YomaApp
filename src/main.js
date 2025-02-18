import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 🔥 Import FontAwesome Core
import { library } from '@fortawesome/fontawesome-svg-core'

// 🔥 Import Specific Icons You Need
import { faSearch, faHouse } from '@fortawesome/free-solid-svg-icons'

// 🔥 Import FontAwesome Vue Component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Add icons to the library (so you can use them in components)
library.add(faSearch, faHouse)

const app = createApp(App)

// Register Plugins
app.use(createPinia())
app.use(router)

// ✅ Register FontAwesome Component Globally
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
