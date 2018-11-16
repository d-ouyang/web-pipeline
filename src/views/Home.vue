<template>
  <div class="home">
    <o-banner v-on:signup='bindSignUp'></o-banner>
    <!-- <router-view></router-view> -->
    <o-news></o-news>
    <o-footer></o-footer>
    <o-login v-show="false"></o-login>
  </div>
</template>
<script>
import OBanner from '@/components/Banner.vue'
import ONews from '@/components/News.vue'
import OFooter from '@/components/Footer.vue'
import OLogin from '@/components/Login.vue'

export default {
  components: {
    OBanner,
    ONews,
    OFooter,
    OLogin
  },
  methods: {
    bindSignUp() {
      console.log('报名')
      this.$router.push({path:'/signup'})
    }
  }
}
</script>

