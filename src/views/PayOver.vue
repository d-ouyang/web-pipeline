<template>
  <div>
    <el-cotainer class="signup-container">
      <el-main>
        <div class="info-container">
          <div class="pay-over">
            <img src="../common/image/success.png" alt="">
            <h3>报名成功</h3>
            <!-- <p>请前往“个人中心”-“我的考试”中查看课程订单<br>请准时参加培训</p> -->
            <p>资料审核通过后，您将收到短信提醒<br>考试当日需携带有效证件和准考证前往考场考试</p>
            <span>*准考证请前往“个人中心”-“我的考试”中下载并打印</span>
          </div>
        </div>
        <div class="info-container">
          <p>
            <span>课程名称</span>
            <span>课程时间</span>
            <span>待支付费用</span>
          </p>
          <h5>
            <span>管道初级培训</span>
            <span>2018年10月11日</span>
            <span>5,900 元</span>
          </h5>
        </div>
      </el-main>
    </el-cotainer>
    <o-footer></o-footer>
  </div>
</template>
<script>
import OFooter from '@/components/Footer.vue'
export default {
  data () {
    return {

    }
  },
  mounted() {

  },
  methods: {

  },
  components: {
    OFooter
  }
}
</script>
<style lang="stylus" scoped>
@import '../common/stylus/variable.styl'
@import '../common/stylus/mixin.styl'

.signup-container
  padding-top 60px
  .el-main 
    width 100%;
    max-width 1200px
    position relative
    left 50%
    transform translateX(-50%)
    padding-top 45px
    .info-container
      width 100%
      background-color $color-normal
      border-radius(8px)
      margin-bottom 20px
      .pay-over
        display flex
        flex-direction column
        align-items center
        img 
          width 56px
          height 56px
          margin-top 64px
          margin-bottom 24px
        h3
          font-size $size-reg
          color $color-news-title
          font-size 400
          margin-bottom 48px
        p
          font-size $size-nav-text
          color $color-nav-text
          margin-bottom 20px
          line-height 1.5
          text-align center
          border-bottom 0
        span 
          font-size $size-sub-title
          color $color-error
          margin-bottom 60px
      p, h5
        display flex
        flex-direction row
        align-items center 
        justify-content space-around
      p
        height 58px
        border-bottom 1px solid $color-border
        span 
          font-size $size-sub-title
          color $color-upload-border
      h5 
        height 116px
        span 
          font-size $size-nav-text
          color $color-td-value-text
    
</style>

