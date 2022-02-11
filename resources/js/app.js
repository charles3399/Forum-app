require('./bootstrap');

import { createApp } from 'vue'

import Hello from './components/Hello.vue';

const app = createApp({});

app.component('hello', Hello).mount('#app');
