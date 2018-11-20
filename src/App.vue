<template>
  <div id="app">
    <o-header v-on:login='bindLogin'></o-header>
    <header style="height:60px;"></header>
	  <router-view v-bind:showLogin='showLogin' v-on:cancle='bindCancle'></router-view>
  </div>
</template>
<script>
import OHeader from '@/components/Header.vue'

export default {
  data() {
    return {
      showLogin: false
    }
  },
  components: {
    OHeader,
  },
  methods: {
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
