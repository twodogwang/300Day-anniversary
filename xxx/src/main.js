import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import 'amfe-flexible'
import VueRouter from 'vue-router'
import routesConfig from './router.js'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.use(VueLazyload)

// or with options 也可以直接在这里设置参数
Vue.use(VueLazyload, {
  preLoad: 1.3,   //预加载的宽高比
  error: 'image/red flower.png',//图片加载失败时使用的图片源
  loading: 'image/red flower.png',//图片加载的路径
  attempt: 1,//尝试加载次数
  observer: true
})

Vue.use(VueRouter)
const router = new VueRouter({ routes: routesConfig })

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
