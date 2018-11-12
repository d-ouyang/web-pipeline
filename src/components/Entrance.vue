<template>
  <el-row class="entrance">
    <div>
      <h2>
        <img src="../common/image/entrance.png" alt="">
        <span>考试信息</span>
      </h2>
      <button>立即报名</button>
    </div>
    <ul>
      <li>
        <span>考试名称</span>
        <p>D2资格考</p>
      </li>
      <li>
        <span>考试时间</span>
        <p>2018年10月20日~10月27日</p>
      </li>
      <li>
        <span>考试地点</span>
        <p class="address">上海市.浦东新区.浦东南路500号 41楼</p>
      </li>
      <li>
        <span>考试费用</span>
        <p>￥380元</p>
      </li>
    </ul>
    <p>
      <span>公司报名入口</span>
      <img src="../common/image/entrance-g.png" alt="">
    </p>
  </el-row>
</template>
<script>
export default {
  
}
</script>
<style lang="stylus" scoped>
@import '../common/stylus/variable.styl'
@import '../common/stylus/mixin.styl'

.entrance
  width 100%
  height 100%
  padding 0 16px
  position relative
  box-sizing('border-box')
  border-radius(8px)
  background-color $color-normal
  div
    display flex
    align-items center
    justify-content space-between
    padding 16px 0 14px
    border-bottom 2px solid $color-border
    h2
      display flex
      align-items center
      img 
        width 30px
        height 30px
        margin-right 4px
      span 
        font-size $size-news-title
        color $color-news-title
        font-weight 500
        line-height 1.0
    button 
      height 32px
      border 2px solid $color-nav-active
      color $color-nav-active
      font-size $size-news-btn
      border-radius(16px)
      padding 0 19px
      cursor pointer
  ul
    margin-top 24px
    margin-bottom 28px
    li
      display flex
      align-items center
      font-size $size-news-content
      line-height 1.0
      margin-bottom 24px
      &:last-child
        margin-bottom 0
      span 
        color $color-news-key
        margin-right 28px
      p
        color $color-news-value
      .address
        width 70%
        no-wrap()
  p
    display flex
    flex-direction row-reverse
    align-items center
    cursor pointer
    img 
      width 15px
      height 17px
      margin-right 4px
    span 
      font-size $size-news-content
      color $color-nav-active
      line-height 1.0
</style>


