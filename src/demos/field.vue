<template>
  <div class="page-field">
    <div class="page-title">Field</div>
    <div class="page-part">
      <t-field label="用户名" placeholder="请输入用户名" :attr="{ maxlength: 10 }"></t-field>
      <t-field label="邮箱" placeholder="请输入邮箱" type="email"></t-field>
      <t-field label="密码" placeholder="请输入密码" type="password"></t-field>
      <t-field label="手机号" placeholder="请输入手机号" type="tel"></t-field>
      <t-field label="网站" placeholder="请输入网址" type="url"></t-field>
      <t-field label="数字" placeholder="请输入数字" type="number"></t-field>
      <t-field label="生日" placeholder="请输入生日" type="date"></t-field>
      <t-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4"></t-field>
    </div>

    <div class="page-part">
      <t-field placeholder="登录邮箱" type="email"></t-field>
      <t-field placeholder="密码" type="password"></t-field>
    </div>

    <div class="page-part">
      <t-field label="邮箱" placeholder="成功状态" state="success"></t-field>
      <t-field label="邮箱" placeholder="失败状态" state="error"></t-field>
      <t-field label="邮箱" placeholder="警告状态" state="warning"></t-field>
    </div>

    <div class="page-part">
      <t-field label="验证码" placeholder="输入验证码">
        <img height="48px" width="100px">
      </t-field>
    </div>
  </div>
</template>

<script>
import tField from '../components/Field/index.vue'

export default {
  components: {
    tField
  }
}
</script>
