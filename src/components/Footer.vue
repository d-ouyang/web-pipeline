<template>
  <el-footer class="footer" height="27px">
    <p :style="{color:color}">Copyright@2018 <a target="_blank" href="http://www.miitbeian.gov.cn">豫ICP备11006208号-3</a></p>
  </el-footer>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: '#bbb'
    }
  },
  data () {
    return {

    }
  },
  created () {

  },
  mounted () {

  },
  computed: {

  },
  watch: {

  },
  methods: {

  },
  updated () {

  },
  destroyed () {

  }
}
</script>
<style lang="stylus" scoped>
.footer
  position relative
  background-color transparent
  p
    font-size 12px
    text-align center
</style>
