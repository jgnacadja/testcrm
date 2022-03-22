import "vue-simplecrm";

import App from './App.vue';
import Buefy from "buefy";
import Vue from 'vue';
import VueAxios from "vue-axios";
import VueIframe from "vue-iframes";
import axios from "axios";

Vue.use(VueAxios, axios);
Vue.use(Buefy);
Vue.use(VueIframe);
Vue.use(Simplecrm);
Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
}).$mount("#app");