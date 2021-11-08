import { createApp } from 'vue';
import App from './App.vue';
import Products from './components/Products.vue';
import router from './router';

const app = createApp(App);
app.component("Products", Products);
app.use(router);
app.mount('#app');
