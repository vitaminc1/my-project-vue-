// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import './mock'

// scss
import './assets/css/global.scss'

// prototype
import './util/prototype'

// 过滤器
import filters from './filters'

// 全局mixin
import GlobalMixin from './mixins/global'

// 中央事件处理器
Vue.prototype.$eventHub = new Vue()

Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

Vue.mixin(GlobalMixin)

Vue.use(iView)

Vue.config.productionTip = false

var $app = new Vue({
  el: '#app',
  components: { App },
  router,
  store,
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  // 某些处理
  next()
})
