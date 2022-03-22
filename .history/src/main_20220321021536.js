// import "vue-simplecrm";

import App from './App.vue';
import Buefy from "buefy";
import Simplecrm from "vue-simplecrm ";
import Vue from "vue/dist/vue.common.js";
import VueAxios from "vue-axios";
import VueIframe from "vue-iframes";
import axios from "axios";

Vue.use(VueAxios, axios);
Vue.use(Buefy);
Vue.use(VueIframe);
//Vue.use(Simplecrm);
Object.entries(Simplecrm).forEach((name, component) => {
    Vue.component(name, component);
});
Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
}).$mount("#app");