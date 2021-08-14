import  { createApp } from 'vue'
import App from './App.vue'
import axios from "axios";
import Vant from 'vant';
import 'vant/lib/index.css';
import {router} from "@/router";
const app = createApp(App)

app.config.devtools = true
app.config.globalProperties.$axios = axios;
app.use(Vant).use(router).mount('#app')
