import { createApp } from 'vue'
import './style/main.scss'
import App from './App.vue'
// import 'vue-fullpage.js/dist/style.css'
// import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions
import VueFullPage from 'vue-fullpage.js'

const app = createApp(App)
app.use(VueFullPage)

app.mount('#app')
