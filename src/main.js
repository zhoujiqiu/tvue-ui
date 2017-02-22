import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import DemoList from './demos/demoList.vue'
import Index from './demos/index.vue'
import About from './demos/about.vue'
import Button from './demos/button.vue'
import Toast from './demos/toast.vue'
import Dialog from './demos/dialog.vue'
import TabBar from './demos/tabBar.vue'


Vue.use(Router)
Vue.config.debug = false
Vue.config.devtools = false
Vue.config.silent = true

const router = new Router()

router.map({
  '/': {component:Index, name: 'index'},
  'about': {component: About, name: 'about'},
  'demolist': {component: DemoList, name: 'demolist'},
  'demo/button': {component: Button, name: 'button'},
  'demo/toast': {component: Toast, name: 'toast'},
  'demo/dialog': {component: Dialog, name: 'dialog'},
  'demo/tabBar': {component: TabBar, name: 'tabBar'}
})
/* eslint-disable no-new */
router.start(Vue.extend(App), '#app')
