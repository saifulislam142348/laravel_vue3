require('./bootstrap');
import { createApp } from 'vue'
import router from './router';
import store from './store/index';

import App from './layouts/App.vue';

createApp(App)
.use(router)
.use(store)
.mount("#app")




