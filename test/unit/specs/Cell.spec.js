import Vue from 'vue'
import Cell from '../../../src/components/Cell/index.vue'
import { createElm } from '../util.js'

describe('Cell.vue', () => {
  const elm = createElm()
  const vm = new Vue({
    components: {Cell},
    template: `<Cell title="我是Cell" url="/a">
                </Cell>`
  }).$mount(elm)
  it('Cell title', () => {
    expect(vm.$el.querySelector('.m-cell__center').children[0].textContent.replace(/\s+/g, '')).to.equal('我是Cell')
  })
  it('Cell click, window.location is "/a"', () => {
    vm.$el.click()
    setTimeout(function () {
      expect(window.location.href.indexOf('/a')).to.not.equal(-1)
    }, 300)
  })
})
