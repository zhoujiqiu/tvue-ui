# Vue组件

[演示](https://github.com/mengch/vueui/blob/master/docs/demos.md)

##说明

前端开发中，随着业务的增多，出于效率的考虑，我们对于组件化开发的需求也越来越迫切。最近公司也在推行组件化，参考其他的组件库的思路，我用 vue 做了一个组件化的 demo [vueui-m](https://www.npmjs.com/package/vueui-m) 在这里记录下。（目前还不完善，仅作为一个 demo）

##技术框架

Vue.js 2.0

Webpack

Gulp

PostCSS

ES6/ES5

##具体实现

###CSS

CSS 首先要解决的是命名的问题。团队开发组件的过程中，要按照一定的约定，保证组件命名不会冲突。同时也要让组件使用者能够清晰的了解命名的含义。这里采用了 BEM 命名法。BEM 的意思就是块（block）、元素（element）、修饰符（modifier）,是由Yandex团队提出的一种前端命名方法论。
关于 BEM 命名法，举个例子。
```css
.block{}
.block__element{}
.block--modifier{}	
```
这里的 block 元素为块元素，它的后代元素在块元素后面加两个下划线，表示是它的后代。不同状态的元素在后面加两个英文状态下的破折号。
下面假设有个名为 m-page 和 m-button 的元素。其中 m-button-group 是一个单独的元素，不属于 m-button 后代，所以是单个破折号。更详细的信息可以自行搜索。
```html
<!-- 不同后代 -->
<div class="m-page">
  <div class="m-page__header"></div>
  <div class="m-page__body"></div>
  <div class="m-page__footer"></div>
</div>
<!-- 不同状态 -->
<div class="m-button-group">
    <div class="m-button"></div>
    <div class="m-button--primary"></div>
    <div class="m-button--success"></div>
    <div class="m-button--cancel"></div>
</div>
```
实际的开发过程中，可以将这种命名规范和其他的实践相结合，来适应自身项目。
但是，这种命名方法在写 CSS 时，手动写较长的命名效率会比较低。结合 postcss-bem 插件，能够帮我们解决这个问题。
经过配置，我们能够这样写 CSS，完美解决问题。
```css
/*我们写的格式*/
@component-namespace m {
 
  @b page {
    
    @e header {
      
      @m gray {
        background-color: #ccc;
      }
    }
  }
}
/*插件帮我们生成的*/
.m-page__header--gray {
    background-color: #ccc;
}

```
同时，项目中使用了 cssnext 进行开发。cssnext 支持多种新特性，包括变量命名等。具体的可以参考[这里](http://cssnext.io/)。
结合 PostCSS，我们能够在项目中使用 cssnext 的语法。我这里使用了饿了么的[postcss-salad](https://github.com/ElemeFE/postcss-salad)插件处理这个问题。它整合了一些常用的功能，包括定义函数等功能。

###JavaScript

使用 Babel 转译 es6，不用多说。
另外在命名组件的过程中，有些组件会和原生 HTML 标签冲突，我们可以加一个前缀，比如 button 组件，命名为 mbutton 即可解决。

###测试

单元测试使用 Karma + Mocha + Chai，对组件进行单元测试。Demo中，由于时间原因，暂时只写了部分的单元测试用例。
端到端测试使用 Nightwatch。目前暂未编写端到端测试用例。==

###打包策略

使用 Webpack 和 Gulp 对我们写好的组件进行打包。
出于可维护的角度，我们的 Vue 组件和 CSS 在编写的时候就分为两个目录。然后打包的时候对它们分开打包。
对于 Vue 组件，使用 Webpack 进行生成的时候，把 output 的 libraryTarget 设置为 'umd'，使得产出的 JS 同时支持 AMD 和 CMD 规范。同时，我们生成的文件，会生成模块单独的文件以及一个整体的 Main.js。
对于 CSS，和 JS 类似，会生成一个整体的 Main.css 和 模块单独对应的 CSS 文件。

###目录结构

我们打包产出的文件产出在 lib 目录下。 lib 目录下有 components 和 styles 两个目录，分别对应 JS 和 CSS。
这个图片是发布到 npm 上的目录结构。

![目录图片][1]

这个是 lib 目录下的内容。目前 Main.js 在 main 目录下，以后应该单独拿出来。main.css 在 styles 目录下和模块的 CSS 文件同级。

![lib目录][2] 

src 目录和 lib 目录类似。

###引用方式

JS

```javascript
/* umd格式，.js 结尾 */
//从整体文件中引入
import {Tab, MButton} from 'vueui-m'
//从单个文件中引入
import Tab from 'vueui-m/lib/components/tab'
import MButton from 'vueui-m/lib/components/mbutton'

/* Vue 组件格式，.vue 结尾 */
//从整体文件引入
import {Tab, MButton} from 'vueui-m/src/components/main'
//从单个文件中引入
import Tab from 'vueui-m/src/components/tab'
import MButton from 'vueui-m/src/components/mbutton'
```

CSS

```CSS
/* 引入整体文件 */
@import '~vueui-m/lib/styles/main.css'
/* 引入单个文件 */
@import '~vueui-m/lib/styles/tab.css'
@import '～vueui-m/lib/styles/m-button.css'
```
目前对于 JS 和 CSS 需要引入两次，以后可以引入 [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component) 插件，使得引入一个组件的时候不需要再手动引入对应的 CSS。

##参考

这个 demo 的完成，参考了一些别的组件库的制作思路。

[element-ui](http://element.eleme.io/)

[vux](http://vux.li/)

[ant.design](https://ant.design/)

向他们表示感谢。

  [1]: https://raw.githubusercontent.com/mengch/vueui/master/assets/directory.jpeg
  [2]: https://raw.githubusercontent.com/mengch/vueui/master/assets/dirlib.jpeg
