import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Foo from './pages/Foo.vue'
import Bar from './pages/Bar.vue'


Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Foo },
  { path: '/bar', component: Bar }
]

const router = new VueRouter({
  // routes: routes -moze shortcut ako se key value names poklapaju:
  routes
})
// instancira novu vue app
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
