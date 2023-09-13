// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/index.css'
import './global/assets/js.js'
import './assets/prog.css'
import './assets/vanilla-js-pages-transition-loader.min'
const app = createApp(App)

app.use(router)

app.mount('#app')
