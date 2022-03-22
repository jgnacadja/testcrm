import App from './App.vue'
import ComponentLibrary from "vue"
import Vue from 'vue-simplecrm'
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')