<template>
  <el-container class="signup-container">
    <el-main>
      <el-header height="73px">
        <div class="signup-name">课程报名</div>
      </el-header>

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

      <div class="info-container">
        <h4 class="info-header">
          <span>支付方式</span>
        </h4>
        <el-tabs :tab-position="tabPosition" type="border-card">
          <el-tab-pane>
            <span slot="label">
              <img src="../common/image/alipay.png" alt="">支付宝支付
            </span>
            <div class="pay-box">
              <h4>共需支付</h4>
              <h3>
                <span>￥</span>
                5,900
              </h3>
              <img src="" alt="">
              <p>请用支付宝扫描支付</p>
            </div>
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label">
              <img src="../common/image/wechat.png" alt="">微信支付
            </span>
            <div class="pay-box">
              <h4>共需支付</h4>
              <h3>
                <span>￥</span>
                5,900
              </h3>
              <img @click="goToPay" src="" alt="">
              <p>请用微信扫描支付</p>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-main>

  </el-container>
</template>
<script>
export default {
  data () {
    return {
      tabPosition: 'left'
    }
  },
  mounted() {
    console.log(支付)
    console.log(this.$route)
  },
  methods: {
    goToPay() {
      this.$router.push('/payOver/123')
    }
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
    .el-header
      width 100%
      line-height 73px
      border-radius(8px)
      background-color $color-normal
      margin-bottom 20px
      .signup-name
        font-size $size-news-title
        color $color-news-title
        font-weight 400
    .info-container
      width 100%
      background-color $color-normal
      border-radius(8px)
      margin-bottom 20px
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
      .info-header
        display flex
        flex-direction row
        align-items center
        justify-content space-between
        padding 20px
        border-bottom 2px solid $color-border
        span
          font-size $size-nav-text
          font-weight 300
          color $color-news-value
      .el-tabs
        height 452px
      .el-tabs--border-card
        border 0
        box-shadow(none)
      .el-tabs--border-card >>> .el-tabs__header
        border-right 0
        background-color $color-border
        margin-right 0
        .el-tabs__item
          border 0
          height 60px
          line-height 60px
          span 
            display flex
            flex-direction row
            align-items center
            font-size $size-sub-title
            color $color-td-value-text
            img 
              width 20px
              height 20px
              margin-right 10px
      .el-tabs--border-card >>> .el-tabs__content
        padding 0
        .pay-box 
          display flex
          flex-direction column
          align-items center
          h4
            font-size $size-news-btn
            color $color-nav-active
            margin-bottom 10px
            margin-top 84px
          h3
            font-size $size-amount
            color $color-nav-active
            font-weight 400
            margin-bottom 30px
            display flex
            flex-direction row
            align-items baseline
            span 
              font-size $size-news-title
          img 
            width 190px
            height 190px
            margin-bottom 16px
          p
            font-size $size-sub-title
            color $color-td-name-text
            border-bottom 0

</style>
