<template>
  <div class="home">
    <o-banner v-on:signup='bindSignUp'></o-banner>
    <o-news></o-news>
    <o-footer></o-footer>
    <o-login v-show="showLogin" v-on:cancle='bindCancle'></o-login>
  </div>
</template>
<script>
import OBanner from '@/components/Banner.vue'
import ONews from '@/components/News.vue'
import OFooter from '@/components/Footer.vue'
import OLogin from '@/components/Login.vue'

export default {
  props: {
    showLogin:Boolean
  },
  data() {
    return {
      
    }
  },
  components: {
    OBanner,
    ONews,
    OFooter,
    OLogin
  },
  mounted() {
    console.log('首页')
    console.log(this.$route)
  },
  methods: {
    bindSignUp() {
      console.log('tiaozhuandao pay')
      this.$router.push({path:'/signup/personal'})
    },
    bindCancle() {
      console.log('取消')
      // this.showLogin = false
      this.$emit('cancle')
    }
  }
}
</script>

