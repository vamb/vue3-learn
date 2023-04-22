import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue';
import 'ant-design-vue/dist/reset.css';

const app = createApp(App).mount('#app');
app.config.productionTip = false;
app.use(Antd);


