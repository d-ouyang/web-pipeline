<template>
  <div id="app">
    <o-header></o-header>
    <header style="height:60px;"></header>
	  <router-view></router-view>
  </div>
</template>
<script>
import OHeader from '@/components/Header.vue'
// import OSignup from '@/components/Signup.vue'

export default {
  components: {
    OHeader,
    // OSignup
  }
};
</script>

<style lang="stylus">
@import './common/stylus/index.styl';

#app 
  background-color: $color-background
  
</style>
