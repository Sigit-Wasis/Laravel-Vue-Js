import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate' // IMPORT LIBRARY

Vue.use(Vuelidate) // DEFINIS AS GLOBAL

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
