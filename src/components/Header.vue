<template>
  <el-header class="header">
    <img src="@/common/image/rich-logo.png" />
    <div class="header-right">
      <div class="header-nav">
        <router-link to='/home' tag="div">首页</router-link>
        <!-- <div>课程列表</div>
        <div>考试列表</div>
        <div>个人中心</div> -->
        <router-link to='/course' tag="div">课程列表</router-link>
        <router-link to='/examination' tag="div">考试列表</router-link>
        <router-link to='/personal' tag="div">个人中心</router-link>
      </div>
      <div class="header-log-reg">
        <div class="header-log" @click="login">登录</div>
        <router-link class="header-reg" to='/register' tag="div">注册</router-link>
      </div>
    </div>
  </el-header>
</template>
<script>
export default {
  methods: {
    login() {
      this.$emit('login')
    }
  }
}
</script>

<style lang="stylus">
@import '../common/stylus/variable.styl';

.header 
  position fixed
  z-index 10
  width 100%
  height 60px
  top 0
  left 0
  display flex
  flex-direction row
  justify-content space-between
  align-items center
  background-color: #fff
  color $color-nav-text
  font-size $size-nav-text
  img 
    width 40px
    height 43px
    margin-left 32px
  .header-right
    display flex
    align-items center
    .header-nav
      display flex
      align-items center
      div
        cursor pointer
        margin-right 32px
      .router-link-active
        color $color-nav-active
    .header-log-reg
      display flex
      align-items center
      height 60px
      border-left 1px solid #EEEFF0
      .header-log
        cursor pointer
        margin 0 32px
      .header-reg
        cursor pointer
        margin-right 32px
</style>

