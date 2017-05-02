<template>
  <a class="toon-cell">
    <span class="toon-cell-mask" v-if="isLink"></span>
    <div class="toon-cell-left">
      <slot name="left"></slot>
    </div>
    <div class="toon-cell-wrapper">
      <div class="toon-cell-title">
        <slot name="icon">
          <i v-if="icon" class="toonui" :class="'toonui-' + icon"></i>
        </slot>
        <slot name="title">
          <span class="toon-cell-text" v-text="title"></span>
          <span v-if="label" class="toon-cell-label" v-text="label"></span>
        </slot>
      </div>
      <div class="toon-cell-value" :class="{ 'is-link' : isLink }">
        <slot>
          <span v-text="value"></span>
        </slot>
      </div>
    </div>
    <div class="toon-cell-right">
      <slot name="right"></slot>
    </div>
    <i v-if="isLink" class="toon-cell-allow-right"></i>
  </a>
</template>

<script>
/**
 * t-cell
 * @module components/cell
 * @desc 单元格
 * @param {string} [icon] - 图标，提供 more, back，或者自定义的图标（传入不带前缀的图标类名，最后拼接成 .toonui-xxx）
 * @param {string} [title] - 标题
 * @param {string} [label] - 备注信息
 * @param {boolean} [is-link=false] - 可点击的链接
 * @param {string} [value] - 右侧显示文字
 * @param {slot} - 同 value, 会覆盖 value 属性
 * @param {slot} [title] - 同 title, 会覆盖 title 属性
 * @param {slot} [icon] - 同 icon, 会覆盖 icon 属性，例如可以传入图片
 *
 * @example
 * <t-cell title="标题文字" icon="back" is-link value="描述文字"></t-cell>
 * <t-cell title="标题文字" icon="back">
 *   <div slot="value">描述文字啊哈</div>
 * </t-cell>
 */
export default {
  name: 't-cell',

  props: {
    icon: String,
    title: String,
    label: String,
    isLink: Boolean,
    value: {}
  }
};
</script>

<style lang="css">
  .toon-cell {
      position: relative;
      background-color: #fff;
      box-sizing: border-box;
      color: inherit;
      min-height: 44px;
      display: block;
      overflow: hidden;
  }

  .toon-cell img {
      vertical-align: middle;
  }

  .toon-cell::after {
      color: #d9d9d9;

      content: " ";

      width: 100%;

      height: 1;

      border-top: 1px solid;

      top: 0;

      left: 0;

      position: absolute;

      -webkit-transform-origin: 0 0;

              transform-origin: 0 0;
  }

  @media screen and (-webkit-min-device-pixel-ratio: 2) {

      .toon-cell::after {

          -webkit-transform: scaleY(.5);

                  transform: scaleY(.5);
      }
  }

  .toon-cell::before {

      color: #d9d9d9;

      content: " ";

      width: 100%;

      height: 1;

      border-bottom: 1px solid;

      bottom: 0;

      left: 0;

      position: absolute;

      -webkit-transform-origin: 0 100%;

              transform-origin: 0 100%;
  }

  @media screen and (-webkit-min-device-pixel-ratio: 2) {

      .toon-cell::before {

          -webkit-transform: scaleY(.5);

                  transform: scaleY(.5);
      }
  }

  .toon-cell + .toon-cell::after {

      content: none;
  }

  .toon-cell:last-child::before {

      left: 0;
  }

  .toon-cell-wrapper {

      -webkit-box-align: center;

          -ms-flex-align: center;

              align-items: center;

      box-sizing: border-box;

      display: -webkit-box;

      display: -ms-flexbox;

      display: flex;

      font-size: 14px;

      line-height: 1;

      min-height: inherit;

      overflow: hidden;

      padding: 0 10px;

      position: relative;

      width: 100%;
  }

  .toon-cell-mask {}

  .toon-cell-mask::after {

      background-color: #000;

      content: " ";

      opacity: 0;

      top: 0;

      right: 0;

      bottom: 0;

      left: 0;

      position: absolute;
  }

  .toon-cell-mask:active::after {

      opacity: .1;
  }

  .toon-cell-text {

      vertical-align: middle;
  }

  .toon-cell-label {

      color: #888;

      display: block;

      font-size: 12px;

      margin-top: 6px;
  }

  .toon-cell-title {

      -webkit-box-flex: 1;

          -ms-flex: 1;

              flex: 1;
  }

  .toon-cell-value {

      color: #888;

      display: -webkit-box;

      display: -ms-flexbox;

      display: flex;

      -webkit-box-align: center;

          -ms-flex-align: center;

              align-items: center;
  }

  .toon-cell-value.is-link {

      margin-right: 24px;
  }

  .toon-cell-left {

      position: absolute;

      height: 100%;

      left: 0;

      -webkit-transform: translate3d(-100%, 0, 0);

              transform: translate3d(-100%, 0, 0);
  }

  .toon-cell-right {

      position: absolute;

      height: 100%;

      right: 0;

      top: 0;

      -webkit-transform: translate3d(100%, 0, 0);

              transform: translate3d(100%, 0, 0);
  }

  .toon-cell-allow-right::after {

      border: solid 2px #c8c8cd;

      border-bottom-width: 0;

      border-left-width: 0;

      content: " ";

      top: 50%;

      right: 20px;

      position: absolute;

      width: 5px;

      height: 5px;

      -webkit-transform: translateY(-50%) rotate(45deg);

              transform: translateY(-50%) rotate(45deg);
  }
</style>
