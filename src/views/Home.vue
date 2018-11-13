<template>
  <div class="home">
    <o-banner></o-banner>
    <o-news></o-news>
    <o-footer></o-footer>
    <o-login></o-login>
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
  }
}
</script>

