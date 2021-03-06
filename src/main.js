import {createApp} from 'vue'
import store from "../store"
import App from './App.vue'
import './styles/index.css'
import "../services/setupInterceptor"

const app = createApp(App)
app.use(store)
app.mount('#app')