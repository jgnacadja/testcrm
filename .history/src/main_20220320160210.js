//import "vue-simplecrm";

import App from './App.vue';
import Buefy from "buefy";
import Hello from "vue-simplecrm";
import Vue from "vue/dist/vue.common.js";
import VueAxios from "vue-axios";
import VueIframe from "vue-iframes";
import axios from "axios";

Vue.use(VueAxios, axios);
Vue.use(Buefy);
Vue.use(VueIframe);
Vue.use(Hello);
Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
}).$mount("#app");