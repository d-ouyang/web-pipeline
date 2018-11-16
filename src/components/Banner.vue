<template>
  <el-carousel class="banner" trigger="click" height="570px" arrow="never">
    <el-carousel-item v-for="item in 2" :key="item">
      <div class="main-content">
        <el-row type="flex" justify="center" class="banner-content">
          <el-col :span="span" :push="1" tag="div">
            <h1>D2摸底冲刺班</h1>
            <div class="title-line"></div>
            <ul>
              <li>
                <span>上课时间</span>
                <p>2018年10月20日~10月27日</p>
              </li>
              <li>
                <span>上课地点</span>
                <p>上海市.浦东新区.浦东南路500号 41楼</p>
              </li>
              <li>
                <span>课程费用</span>
                <p>￥5,800</p>
              </li>
              <li>
                <span>课程内容</span>
                <p>由国内知名讲师：XXX担任主讲。10年授课经验，98%的考试通过率，Balalalalal</p>
              </li>
            </ul>
            <div class="btn-group">
              <button class="single-signup" @click="signup">立即报名
                <!-- <router-link to='/signup' tag="div">立即报名</router-link> -->
              </button>
              <button class="group-signup">公司报名</button>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  data() {
    return {
      span: 12
    }
  },
  methods: {
    signup() {
      this.$emit('signup')
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../common/stylus/variable.styl';

.banner
  min-height 542px
  background-image url('../common/image/bg.png')
  background-size cover
  background-repeat no-repeat
  background-position 50% 50%
  .el-carousel__item
    background-color transparent
    .main-content
      position relative
      width 1200px
      left 50%
      transform translateX(-50%)
      height 100%
      display flex
      justify-content center
      .banner-content
        width 100%
        height 100%
        // background-color rgba(255, 255, 255, 0.5)
        div
          height 100%
          // background-color rgba(255, 255, 255, 0.5)
          display flex
          flex-direction column
          align-items center
          h1
            font-size $size-title
            line-height 37px
            color $color-normal
            font-weight 500
            margin 69px 0 40px
          .title-line
            width 40px
            height 4px
            border-radius 3px
            background-color $color-normal
            margin-bottom 35px
          ul
            font-size $size-nav-text
            color $color-normal
            font-weight 500
            margin-bottom 63px
            li
              display flex
              flex-direction row
              line-height 25px
              margin-bottom 20px
              span 
                margin-right 97px
              p
                max-width 420px
          .btn-group
            width 100%
            height 56px
            display flex
            flex-direction row
            button 
              width 190px
              height 56px
              border-radius 8px
              border 2px solid $color-normal
              box-shadow box-shadow(0 11px 14px 0 rgba(0, 0, 0, 0.12))
              font-size 20px
              line-height 52px
              text-align center
              cursor pointer
            .single-signup
              background-color $color-normal
              color $color-nav-active
              margin-right 110px
            .group-signup
              background-color transparent
              color $color-normal
               
</style>


