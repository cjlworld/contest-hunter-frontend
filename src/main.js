import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入 bookstrap 5, 需要安装 @popperjs/core 依赖
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

createApp(App).use(store).use(router).mount('#app')
