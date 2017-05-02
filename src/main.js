import Vue from 'vue'
import VueRouter from 'vue-router'
import VueLazyload from './components/Lazyload/index.js'
import App from './App'
import DemoList from './demos/demoList.vue'
import Index from './demos/index.vue'
import About from './demos/about.vue'
import Button from './demos/button.vue'
import Toast from './demos/toast.vue'
import Dialog from './demos/dialog.vue'
import Tab from './demos/tabbar.vue'
import DatetimePicker from './demos/datetimePicker.vue'
import InfiniteLoading from './demos/infiniteLoading.vue'
import Checkbox from './demos/checkbox.vue'
import Pulldown from './demos/Pulldown.vue'
import Loading from './demos/loading.vue'
import Radio from './demos/radio.vue'
import Field from './demos/field.vue'
import Switch from './demos/switch.vue'
import Tcell from './demos/tcell.vue'
import Lazyload from './demos/lazyload.vue'

Vue.use(VueRouter)
Vue.use(VueLazyload)

Vue.config.debug = false
Vue.config.devtools = false
Vue.config.silent = true


// 配置路由规则
const router = new VueRouter({
  routes: [
    // {path: '/', component: Index, name: 'index'},
    {path: '/',redirect: '/demos/demolist'},
    {path: 'about', component: About, name: 'about'},
    {path: '/demos/demolist', component: DemoList, name: 'demolist'},
    {path: '/demos/button', component: Button, name: 'button'},
    {path: '/demos/toast', component: Toast, name: 'toast'},
    {path: '/demos/dialog', component: Dialog, name: 'dialog'},
    {path: '/demos/tab', component: Tab, name: 'tab'},
    {path: '/demos/datetimePicker', component: DatetimePicker, name: 'datetimePicker'},
    {path: '/demos/infiniteLoading', component: InfiniteLoading, name: 'infiniteLoading'},
    {path: '/demos/checkbox', component: Checkbox, name: 'checkbox'},
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
