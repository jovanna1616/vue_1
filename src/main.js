import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// instancira novu vue app
new Vue({
  render: h => h(App)
}).$mount('#app')
