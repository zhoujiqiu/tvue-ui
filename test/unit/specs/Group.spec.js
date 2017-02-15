import Vue from 'vue'
import Group from '../../../src/components/Group/index.vue'
import { createElm } from '../util.js'

describe('Group.vue', () => {
  const elm = createElm()
  const vm = new Vue({
    components: {Group},
    template: `<Group title="我是Group">
                <h1 class="m-h1">hello</h1>
                </Group>`
  }).$mount(elm)
  it('Group title', () => {
    expect(vm.$el.querySelector('.m-group__title').textContent.replace(/\s+/g, '')).to.equal('我是Group')
  })
  it('Group default slot', () => {
    expect(vm.$el.querySelector('.m-h1').textContent.replace(/\s+/g, '')).to.equal('hello')
  })
})
