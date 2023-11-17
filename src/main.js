/* eslint-disable import/extensions */
import { createApp } from 'vue';
import { createPinia } from 'pinia';
// Axios
import axios from 'axios';
import VueAxios from 'vue-axios';

// Bootstrap 5
import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import router from './router';
import App from './App.vue';

const app = createApp(App);
app.use(createPinia());
app.use(VueAxios, axios);
app.provide('axios', app.config.globalProperties.axios);
app.use(router);
app.mount('#app');
