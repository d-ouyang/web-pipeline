import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import axios from 'axios'
import Api from './api/Api'
// import VueAxios from 'vue-axios'
Vue.use(Api)
Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
