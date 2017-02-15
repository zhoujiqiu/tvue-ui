import Vue from 'vue'
import {Tab} from '../../../src/components/Tab/index.js'
import { createElm } from '../util.js'

describe('Tab.vue', () => {
  const elm = createElm()
  const vm = new Vue({
    components: {Tab},
    template: `<Tab :index="2" :conArray="['电影', '美食', '音乐']"></Tab>`
  }).$mount(elm)
  it('Tab children length should be 3', () => {
    expect(vm.$el.querySelector('.m-tab__slot').children.length).to.equal(3)
  })
  it('Tab second children  should be checked', () => {
    expect(vm.$el.querySelector('.m-tab__slot').children[1].className.indexOf('m_item_select')).to.not.equal(-1)
  })
})
