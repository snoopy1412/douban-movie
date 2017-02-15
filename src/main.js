import Vue from 'vue'
import VueResource from 'vue-resource'
import router from './router'
import App from './App'
// import store from './store'

Vue.use(VueResource)

/* eslint-disable no-new */
const app = new Vue({
	router,
	// store,
	el: '#app',
	render: h => h(App)
})