<template>
  <div class="mask">
    <div class="container">
      <div class="content">
        <h3>考试须知</h3>
        <div class="box-wrapper">
          <!-- <div class="box"> -->
            <p>
              1.考试前30分钟进入考场候考，考试正式开始10分钟后将不允许进入考场。
              <br /><br />
              2.进入考场务必出示准考证、身份证（无证不得进入考场）。
              <br /><br />
              3.进入考场后务必关闭手机，考试过程中如手机响起将根据相关考务规定当作弊处理。 
              <br /><br />
              4.听从监考老师提示，启动并检测电脑、确认考试正常等。
              <br /><br /> 
              5.考试前务必关闭Office文件、IE网页及其他与考试相关的软件，否则考试无法正常进行。
              <br /><br />
              6.考试中出现死机或特殊情况时，可以重启电脑或更换电脑（进入考试系统后由死机时的题目继续做题，7.如更换了电脑则试卷会重置并从第一题开始）。
              <br /><br />
              7.每张试卷重启的次数不能超过三次。
              <br /><br />
              8.考试过程中如遇到有疑问的题目可以先点击“跳过”，其他题目都完成后会自动返回跳过的题目。所有题目完成后没有再检查机会。
              <br /><br />
              9.考试结束后需举手，让监考老师检查确认成绩并正常上传，签名确认后方可离开考场。
              <br /><br />
              10.考试结束即时得到考试成绩，务必关闭成绩对话框，保证成绩成功上传服务器。
              <br /><br />
              11.使用纸考的，应保持卷面整洁，按照监考老师宣读的考试须知认真作答。
              <br /><br />
            </p>
          <!-- </div> -->
        </div>
        <el-button @click="cancle">我知道了</el-button>
      </div>
      <i class="el-icon-close cancle" @click="cancle"></i>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    cancle() {
      this.$emit('cancle')
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../common/stylus/variable.styl'
@import '../common/stylus/mixin.styl'

.mask
  position fixed
  width 100vw
  height 100vh
  left 0
  top 0
  background-color rgba(0,0,0,0.6)
  z-index 100
  .container
    position absolute
    width 440px
    height 600px
    box-sizing()
    left 50%
    margin-left -220px
    top 50%
    margin-top -290px
    border-radius(4px)
    background-color $color-normal 
    padding 0 50px 
    .content
      width 100%
      height 100%
      display flex
      flex-direction column
      align-items center
      justify-content center
      h3
        font-size $size-reg
        color $color-news-title
        font-weight bold
        // margin-bottom 30px
      .box-wrapper
        width 100%
        height 400px
        box-sizing()
        padding 0 20px
        overflow-y scroll
        background-color $color-note-bg
        margin 20px 0 40px
        p
          padding-top 20px
          color $color-news-value
          font-size $size-news-content
          line-height 1.5
      .el-button
        width 290px
        height 48px
        background-color $color-nav-active
        color $color-normal
        font-size $size-nav-text
        border-radius(8px)
  .cancle
    position absolute
    top -4px
    right -36px
    font-size $size-title
    color $color-normal
    cursor pointer
</style>

