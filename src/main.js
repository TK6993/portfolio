import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import './custom.scss'
import router from './router.js'
import checkView from 'vue-check-view'
import './assets/css/styles.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import './assets/css/popup.css'
Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(checkView)

new Vue({
  router,
  checkView,
  render: h => h(App),
}).$mount('#app')
