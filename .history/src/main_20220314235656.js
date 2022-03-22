import App from './App.vue'
import ComponentLibrary from "vue-simplecrm";
import Vue from 'vue'

Vue.use(Compo)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')