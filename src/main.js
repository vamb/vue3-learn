import { createApp } from 'vue'
import App from './App.vue';
import 'ant-design-vue/dist/antd.css';
import axios from "axios";

const app = createApp(App)
app.config.productionTip = false;
app.config.globalProperties.$axios = axios //将axios方法挂载到全局

app.mount('#app');

// 在组件中调用
// this.axios



