import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/index.scss'
import './assets/iconfont/iconfont.css'
// 引入elementui一般引入以下两个
import 'element-ui/lib/theme-chalk/index.css';
import './plugins/element.js'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
