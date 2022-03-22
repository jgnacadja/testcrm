import App from './App.vue';
import Simplecrm from "vue-simplecrm";
import Vue from 'vue';

Vue.use(ComponentLibrary);
Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app');