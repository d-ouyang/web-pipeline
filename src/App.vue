<template>
  <div id="app">
    <o-header v-on:login='bindLogin'></o-header>
    <header style="height:60px;"></header>
	  <router-view v-bind:showLogin='showLogin' v-on:cancle='bindCancle'></router-view>
  </div>
</template>
<script>
import OHeader from '@/components/Header.vue'
import {isLogin} from './common/js/utils'

export default {
  data() {
    return {
      showLogin: false
    }
  },
  components: {
    OHeader,
  },
  created() {

  },
  mounted() {
    console.log(isLogin())
    if (isLogin()) {
      this.showLogin = false

    } else {
      this.showLogin = true
    }
  },
  methods: {
    getUserInfo() {
      this.Api.getUserInfo(1).then(res => {
        console.log(res)
        window.localStorage.setItem('userInfo',res)
      })
    },
    bindLogin() {
      this.showLogin = true
    },
    bindCancle () {
      this.showLogin = false
    }
  }
};
</script>

<style lang="stylus">
@import './common/stylus/index.styl'

#app 
  background-color: $color-background
  
</style>
