<template>
  <div class="home">
    <o-banner v-on:signup='bindSignUp'></o-banner>
    <o-news v-on:signup='bindSignUp'></o-news>
    <o-footer></o-footer>
    <o-login v-show="showLogin" v-on:cancle='bindCancle'></o-login>
  </div>
</template>
<script>
import OBanner from '@/components/Banner.vue'
import ONews from '@/components/News.vue'
import OFooter from '@/components/Footer.vue'
import OLogin from '@/components/Login.vue'
import {isLogin} from '../common/js/utils'

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
    // this.getUserInfo()
  },
  methods: {

    // getUserInfo() {
    //   this.Api.getUserInfo(1).then(res => {
    //     console.log(res)
    //   }).catch(err => {
    //     console.log(err)
    //   })
    // },
    bindSignUp(params) {
      console.log(params)
      this.$router.push({
        name: 'signup',
        params: params
      })
    },
    bindCancle() {
      console.log('取消')
      this.$emit('cancle')
    }
  }
}
</script>

