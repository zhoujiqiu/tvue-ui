import Vue from 'vue'
import MInput from '../../../src/components/MInput/index.vue'
import { createElm } from '../util.js'

describe('MInput.vue', () => {
  const elm = createElm()
  const vm = new Vue({
    components: {MInput},
    template: `<m-input title="请输入验证码" :min="2" :max="5"></m-input>`
  }).$mount(elm)
  it('Input title', () => {
    expect(vm.$el.querySelector('.m-input__des').textContent.replace(/\s+/g, '')).to.equal('请输入验证码')
  })
  it('expect length 2-5, type "a", should be invalid', () => {
    vm.$el.querySelector('input').value = 'a'
    vm.$el.querySelector('input').blur()
    setTimeout(function () {
      expect(vm.$el.querySelector('.m-input--warn').style.display).to.not.equal('none')
    }, 300)
  })
  it('expect length 2-5, type "awq", should be valid', () => {
    vm.$el.querySelector('input').value = 'awq'
    vm.$el.querySelector('input').blur()
    setTimeout(function () {
      expect(vm.$el.querySelector('.m-input--warn').style.display).to.equal('none')
    }, 300)
  })
})
