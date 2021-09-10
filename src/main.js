import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from "element-plus"
import 'element-plus/dist/index.css'
import echarts from './utils/echarts'
import './styles/index.css'
import api from './utils/api'

createApp(App).use(store).use(router).use(ElementPlus).use(api).use(echarts).mount('#app')
