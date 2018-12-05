<template>
  <el-row class="news-item">
    <div>
      <h2>
        <img src="../common/image/industry.png" alt="">
        <span>行业动态</span>
      </h2>
      <i class="el-icon-arrow-right"></i>
    </div>
    <ul>
      <li>
        <p>《第九届管道工程与非开挖工程与非开挖技术国际……</p>
        <span>2018/07/21</span>
      </li>
      <li>
        <p>《第九届管道工程与非开挖工程与非开挖技术国际……</p>
        <span>2018/07/21</span>
      </li>
      <li>
        <p>《第九届管道工程与非开挖技术工程与非开挖国际……</p>
        <span>2018/07/21</span>
      </li>
    </ul>
  </el-row>
</template>
<script>
export default {

}
</script>
<style lang="stylus" scoped>
@import '../common/stylus/variable.styl'
@import '../common/stylus/mixin.styl'

.news-item
  width 100%
  height 100%
  padding 0 16px
  position relative
  box-sizing('border-box')
  border-radius(8px)
  background-color #ffffff
  div
    cursor pointer
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
  ul
    li
      cursor pointer
      display flex
      align-items baseline
      justify-content space-between
      padding 22px 0
      border-bottom 1px solid $color-list-border
      p
        width 75%
        color $color-news-value
        font-size $size-news-content
        no-wrap()
      span
        color $color-news-key
        font-size $size-news-date
</style>
