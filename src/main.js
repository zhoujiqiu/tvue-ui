import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import DemoList from './demos/demoList.vue'
import Index from './demos/index.vue'
import About from './demos/about.vue'
import Button from './demos/button.vue'
import Toast from './demos/toast.vue'
import Dialog from './demos/dialog.vue'
import Search from './demos/search.vue'
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

Vue.use(Router)
Vue.use(VueLazyload)
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
  'demo/search': {component: Search, name: 'search'},
  'demo/tab': {component: Tab, name: 'tab'},
  'demo/datetimePicker': {component: DatetimePicker, name: 'datetimePicker'},
  'demo/pullup': {component: Pullup, name: 'pullup'},
  'demo/checklist': {component: Checklist, name: 'checklist'},
  'demo/pulldown': {component: Pulldown, name: 'pulldown'},
  'demo/loading': {component: Loading, name: 'loading'},
  'demo/field': {component: Field, name: 'field'},
  'demo/switch': {component: Switch, name: 'switch'},
  'demo/tcell': {component: Tcell, name: 'tcell'},
  'demo/lazyload': {component: Lazyload, name: 'lazyload'},
  'demo/radio': {component: Radio, name: 'radio'}
})
/* eslint-disable no-new */
router.start(Vue.extend(App), '#app')
