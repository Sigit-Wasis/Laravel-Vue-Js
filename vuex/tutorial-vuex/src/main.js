import Vue from 'vue'
// Import store dari file store.js
import store from 'store'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
	// Menggunakan vuex yang telah didefinisikan
	store,
  	render: h => h(App),
}).$mount('#app')
