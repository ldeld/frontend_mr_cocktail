import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import axios from 'axios'

Vue.use({
    install (Vue) {
    Vue.prototype.$api = axios.create({
      baseURL: process.env.VUE_APP_API_HOST,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
