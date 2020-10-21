import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = 'http://localhost:8000/'; 
Vue.use(store)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
