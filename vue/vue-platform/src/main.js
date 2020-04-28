import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './config/elementui'
import './config/slider'
import './config/echarts'
import './config/date'
import log from './config/log'

Vue.config.productionTip = false
Vue.prototype.log = log

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
