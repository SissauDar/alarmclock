import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import { i18n } from './plugins/i18n'

Vue.config.productionTip = false

const themeColor = localStorage.getItem("themeColor");
document.documentElement.style.setProperty("--theme-color", themeColor);


new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
