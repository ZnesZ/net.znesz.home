import Vue from 'vue';
import App from './App.vue';
import { Tabs } from 'bootstrap-vue/es/components';

Vue.use(Tabs);

Vue.config.productionTip = true;

new Vue({
    render: h => h(App)
}).$mount('#app');
