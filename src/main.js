import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 🔥 Import FontAwesome Core
import { library } from '@fortawesome/fontawesome-svg-core'

// 🔥 Import Specific Icons You Need
import { faSearch, faHouse, faSuitcase, faGlobe, faPhone } from '@fortawesome/free-solid-svg-icons'

import {
  faComment,
  faNewspaper,
  faBell,
  faBookmark,
  faPenToSquare,
  faIdBadge,
} from '@fortawesome/free-regular-svg-icons'

// 🔥 Import FontAwesome Vue Component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// ✅ Add icons to the library
library.add(
  faSearch,
  faHouse,
  faNewspaper,
  faComment,
  faSuitcase,
  faGlobe,
  faBell,
  faBookmark,
  faPenToSquare,
  faIdBadge,
  faPhone,
)

const app = createApp(App)

// Register Plugins
app.use(createPinia())
app.use(router)

// ✅ Register FontAwesome Component Globally
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
