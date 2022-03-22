import "bulma";
import "buefy/dist/buefy.css";

import App from './App.vue';
import Buefy from "buefy";
import Simplecrm from "vue-simplecrm";
import Vue from 'vue';
import VueAxios from "vue-axios";
import VueIframe from "vue-iframes";
import axios from "axios";
import router from "./router";
import store from "./store/";

Vue.use(VueAxios, axios);
Vue.use(Buefy);
Vue.use(VueIframe);
Vue.use(Simplecrm);
Vue.config.productionTip = false;

new Vue({
    router: router,
    store: store,
    render: (h) => h(App),
}).$mount("#app");