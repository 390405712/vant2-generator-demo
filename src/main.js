import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.scss'
import store from './store'
import 'vant/lib/index.css'

import JsonViewer from 'vue-json-viewer'

Vue.config.productionTip = false

Vue.use(JsonViewer)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
