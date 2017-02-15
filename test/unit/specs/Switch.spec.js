import Vue from 'vue'
import MSwitch from '../../../src/components/Switch/index.vue'
import { createElm } from '../util.js'

describe('Switch.vue', () => {
  const elm = createElm()
  const vm = new Vue({
    components: {MSwitch},
    template: `<m-switch :checkedStatus="true" ></m-switch>`
  }).$mount(elm)
  it('Switch should be open', () => {
    expect(vm.$el.querySelector('input').checked).to.equal(true)
  })
  it('Switch should be closed', () => {
    vm.$el.querySelector('input').click()
    setTimeout(function () {
      expect(vm.$el.querySelector('input').checked).to.equal(false)
    }, 300)
  })
})
