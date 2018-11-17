<template>
  <div id="app">
    <o-header></o-header>
    <header style="height:60px;"></header>
	  <router-view></router-view>
  </div>
</template>
<script>
import OHeader from '@/components/Header.vue'

export default {
  components: {
    OHeader,
  }
};
</script>

<style lang="stylus">
@import './common/stylus/index.styl';

#app 
  background-color: $color-background
  
</style>
