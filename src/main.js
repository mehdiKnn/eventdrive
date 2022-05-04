import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.css'
import "../services/setupInterceptor";

createApp(App).mount('#app')
