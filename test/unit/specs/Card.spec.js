import Vue from 'vue'
import Card from '../../../src/components/Card/index.vue'
import { createElm } from '../util.js'

describe('Card.vue', () => {
  const elm = createElm()
  const vm = new Vue({
    components: {Card},
    template: `<Card>
                 <div slot="header">我是卡片标题</div>
                 <div>
                   <p>我是卡片内容</p>
                   <p>我是卡片内容</p>
                   <p>我是卡片内容</p>
                 </div>
                </Card>`
  }).$mount(elm)
  it('card title', () => {
    expect(vm.$el.querySelector('.m-card__header').textContent).to.equal('我是卡片标题')
  })
  it('card body children length should be 3', () => {
    expect(vm.$el.querySelector('.m-card__body').children[0].children.length).to.equal(3)
  })
})
