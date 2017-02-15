import Vue from 'vue'
import MButton from '../../../src/components/MButton/index.vue'
import { createElm } from '../util.js'

describe('MButton.vue', () => {
  const elm = createElm()
  const vm = new Vue({
    components: {MButton},
    template: `<m-button text="success" type="success" :plain="true" :disable="true"></m-button>`
  }).$mount(elm)
  it('Button content', () => {
    expect(vm.$el.textContent).to.equal('success')
  })
})
