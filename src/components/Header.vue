<template>
  <el-header class="header">
    <img src="@/common/image/rich-logo.png" />
    <div class="header-right">
      <div class="header-nav">
        <router-link to='/home' tag="div">首页</router-link>
        <router-link to='/course' tag="div">课程列表</router-link>
        <router-link to='/examination' tag="div">考试列表</router-link>
        
      </div>
      <div class="header-log-reg" v-if="!showLogin">
        <div class="header-log active" @click="login">登录</div>
        <router-link class="header-reg" to='/register' tag="div">注册</router-link>
      </div>
      <div class="header-log-reg"  v-if="showLogin">
        <el-popover placement="bottom" trigger="hover">
          <router-link to='/personal' tag="div">
            <el-button style="border:0;width:100%;text-align:center;">个人中心</el-button>
          </router-link>
          <el-button @click="bindExit" style="border:0;width:100%;text-align:center;">退出登录</el-button>
          <span class="user-name" slot="reference">{{userInfo.name}}</span>
        </el-popover>

      </div>
    </div>
  </el-header>
</template>

<script>
import { isLogin } from '../common/js/utils'

export default {
  props: {
    showLogin: Boolean,
    userInfo: Object
  },
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {
    login () {
      this.$emit('login')
    },
    bindExit () {
      window.localStorage.clear()
      this.$emit('exit')
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
      .exit
        border 0
        width 100%
        text-align center
      .user-name
        margin 0 32px
        color $color-nav-active
        cursor pointer
        &:hover
          text-decoration underline
</style>
