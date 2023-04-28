import { createApp } from 'vue'
import App from './App.vue';
import 'ant-design-vue/dist/antd.css';
import axios from "axios";
import router from "@/router";
import store from '@/store'

const app = createApp(App)
app.config.productionTip = false;
app.config.globalProperties.$axios = axios //将axios方法挂载到全局

app.use(router) // 使用路由
app.use(store) // 使用状态管理器

app.mount('#app');

// 在组件中调用
// this.axios



