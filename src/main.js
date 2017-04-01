import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import DemoList from './demos/demoList.vue'
import Index from './demos/index.vue'
import About from './demos/about.vue'
import Button from './demos/button.vue'
import Toast from './demos/toast.vue'
import Dialog from './demos/dialog.vue'
import Tab from './demos/tabbar.vue'
import DatetimePicker from './demos/datetimePicker.vue'
import Pullup from './demos/pullup.vue'
import Checklist from './demos/checklist.vue'
import Pulldown from './demos/Pulldown.vue'
import Loading from './demos/loading.vue'
import Radio from './demos/radio.vue'
import Field from './demos/field.vue'
import Switch from './demos/switch.vue'
import Tcell from './demos/tcell.vue'
import Lazyload from './demos/lazyload.vue'

import VueLazyload from './components/Lazyload/index.js'

Vue.use(VueRouter)
Vue.use(VueLazyload)
Vue.config.debug = false
Vue.config.devtools = false
Vue.config.silent = true


// 配置路由规则
const router = new VueRouter({
  routes: [
    {path: '/', component: Index, name: 'index'},
    {path: '/',redirect: 'index'},
    {path: 'about', component: About, name: 'about'},
    {path: '/demos/demolist', component: DemoList, name: 'demolist'},
    {path: '/demos/button', component: Button, name: 'button'},
    {path: '/demos/toast', component: Toast, name: 'toast'},
    {path: '/demos/dialog', component: Dialog, name: 'dialog'},
    {path: '/demos/tab', component: Tab, name: 'tab'},
    {path: '/demos/datetimePicker', component: DatetimePicker, name: 'datetimePicker'},
    {path: '/demos/pullup', component: Pullup, name: 'pullup'},
    {path: '/demos/checklist', component: Checklist, name: 'checklist'},
    {path: '/demos/pulldown', component: Pulldown, name: 'pulldown'},
    {path: '/demos/loading', component: Loading, name: 'loading'},
    {path: '/demos/field', component: Field, name: 'field'},
    {path: '/demos/switch', component: Switch, name: 'switch'},
    {path: '/demos/tcell', component: Tcell, name: 'tcell'},
    {path: '/demos/lazyload', component: Lazyload, name: 'lazyload'},
    {path: '/demos/radio', component: Radio, name: 'radio'}
  ]
})
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
