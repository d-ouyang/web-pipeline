<template>
  <div id="app">
    <!-- <o-header v-on:login='bindLogin'></o-header> -->
    <o-header v-on:exit='bindExit' v-on:login='bindLogin' v-bind:showLogin='isLogin' v-bind:userInfo='userInfo'></o-header>
    <header style="height:60px;"></header>
	  <router-view v-bind:showLogin='showLogin' v-on:cancle='bindCancle' v-on:exit='bindExit' v-on:registerOver='registerOver'></router-view>
  </div>
</template>
<script>
import OHeader from '@/components/Header.vue'
import { isLogin } from './common/js/utils'

export default {
  data () {
    return {
      showLogin: false,
      userInfo: {},
      isLogin: false
    }
  },
  components: {
    OHeader
  },
  created () {
    // window.localStorage.clear()
  },
  mounted () {
    console.log(isLogin())
    // 初始化 默认不显示登录框
    this.showLogin = false
    if (isLogin()) {
      this.isLogin = true
      this.getUserInfo()
    } else {
      this.isLogin = false
    }
  },
  methods: {
    getUserInfo () {
      this.Api.getUserInfo(1).then(res => {
        console.log(res)
        window.localStorage.setItem('userInfo', res)
        this.userInfo = res
      })
    },
    bindLogin () {
      this.showLogin = true
    },
    bindCancle () {
      this.showLogin = false
      if (isLogin()) {
        this.isLogin = true
        this.getUserInfo()
      } else {
        this.isLogin = false
      }
    },
    bindExit () {
      this.showLogin = true
      this.userInfo = {}
      this.$router.push('/home')
    },
    registerOver () {
      this.isLogin = true
      this.showLogin = false
    }
  }
}
</script>

<style lang="stylus">
@import './common/stylus/index.styl'

#app
  background-color: $color-background

</style>
