<template>
  <div class="home">
    <o-banner></o-banner>
    <o-news></o-news>
    <o-footer></o-footer>
  </div>
</template>
<script>
import OBanner from '@/components/Banner.vue'
import ONews from '@/components/News.vue'
import OFooter from '@/components/Footer.vue'

export default {
  components: {
    OBanner,
    ONews,
    OFooter
  }
}
</script>

