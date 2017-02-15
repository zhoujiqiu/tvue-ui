import Vue from 'vue'
import Alert from '../../../src/components/Alert/index.vue'
import { createElm } from '../util.js'

describe('Alert.vue alert', () => {
  const elm = createElm()
  const vm = new Vue({
    components: {Alert},
    template: `<div>
                    <div class="my-button" @click="alertFunc">我是按钮</div>
                      <Alert :para="para" 
                          @on-cancel="onCancel"
                          />
              </div>`,
    data () {
      return {
        para: {
          content: '内容我是内容',
          title: '标题我是标题',
          type: 'alert',
          confirm: '确定辣',
          cancel: '取消辣',
          close: true,
          showStatus: true
        }
      }
    },
    methods: {
      alertFunc () {
        this.para.showStatus = true
      },
      onCancel () {
        this.para.showStatus = false
      }
    }
  }).$mount(elm)
  it('set showStatus true,el show be visible', () => {
    expect(vm.$el.querySelector('.m-alert-container').style.display).to.not.equal('none')
  })
  it('click close button, el should be hidden', () => {
    vm.$el.querySelector('.m-alert__close').click()
    setTimeout(function () {
      expect(vm.$el.querySelector('.m-alert-container').style.display).to.equal('none')
    }, 1000)
  })
  it('click my-button, el should be visible', () => {
    vm.$el.querySelector('.my-button').click()
    setTimeout(function () {
      expect(vm.$el.querySelector('.m-alert-container').style.display).to.not.equal('none')
    }, 1000)
  })
  it('click confirm, el should be hidden', () => {
    vm.$el.querySelector('.m-alert__confirm').click()
    setTimeout(function () {
      expect(vm.$el.querySelector('.m-alert-container').style.display).to.equal('none')
    }, 1000)
  })
})
describe('Alert.vue confirm', () => {
  const elm = createElm()
  const vm = new Vue({
    components: {Alert},
    template: `<div>
                    <div class="my-button" @click="alertFunc">我是按钮</div>
                      <Alert :para="para" 
                          @on-cancel="onCancel"
                          />
              </div>`,
    data () {
      return {
        para: {
          content: '内容我是内容',
          title: '标题我是标题',
          type: 'confirm',
          confirm: '确定辣',
          cancel: '',
          close: true,
          showStatus: true
        }
      }
    },
    methods: {
      alertFunc () {
        this.para.showStatus = true
      },
      onCancel () {
        this.para.showStatus = false
      }
    }
  }).$mount(elm)
  it('confirm button text should be "确定辣"', () => {
    expect(vm.$el.querySelector('.m-alert__confirm').textContent).to.equal('确定辣')
  })
  it('cancel button text is default, should be "取消"', () => {
    expect(vm.$el.querySelector('.m-alert__cancel').textContent).to.equal('取消')
  })
  it('click cancel, el should be hidden', () => {
    vm.$el.querySelector('.m-alert__cancel').click()
    setTimeout(function () {
      expect(vm.$el.querySelector('.m-alert-container').style.display).to.equal('none')
    }, 1000)
  })
})
