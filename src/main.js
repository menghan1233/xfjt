import  { createApp } from 'vue'
import App from './App.vue'
import axios from "axios";
import Vant from 'vant';
import 'vant/lib/index.css';
import {router} from "@/router";
import VueWechatTitle from 'vue-wechat-title'
const app = createApp(App)

app.config.devtools = true
app.config.globalProperties.$axios = axios;
app.use(Vant).use(VueWechatTitle).use(router).mount('#app')
