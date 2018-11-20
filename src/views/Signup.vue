<template>
  <div>
    <el-container class="signup-container">
      <el-main>
        <el-header height="73px">
          <div class="signup-name">课程报名</div>
        </el-header>
  
        <div class="info-container">
          <h4 class="info-header">
            <span>课程信息</span>
            <span class="examination-notes" @click="bindNotes">考试须知</span>
          </h4>
          <div class="info-wrapper">
            <table class="info-box">
              <tr>
                <td class="name">课程名称</td>
                <td class="value">上海市.浦东新区</td>
              </tr>
              <tr>
                <td class="name">课程费用</td>
                <td class="value">￥380</td>
              </tr>
            </table>
            <table class="info-box">
              <tr>
                <td class="name">课程时间</td>
                <td class="value">2018/10/20~2018/10/21</td>
              </tr>
              <tr>
                <td class="name">课程地点</td>
                <td class="value">上海市.浦东新区.浦东南路500号 41楼</td>
              </tr>
            </table>
          </div>
        </div>
  
        <div class="info-container">
          <h4 class="info-header">
            <span>上传资料</span>
          </h4>
          <div class="upload-wrapper">
            <div class="upload-box">
              <h4>毕业证书</h4>
              <div class="upload-box-add">
                <img src="../common/image/add.png" alt="">
                <h5>点击添加图片</h5>
                <p>支持jpg/png格式</p>
                <p>不超过5MB</p>
              </div>
            </div>
            <div class="upload-box">
              <h4>上传资质证书</h4>
              <div class="upload-box-add">
                <img src="../common/image/add.png" alt="">
                <h5>点击添加图片</h5>
                <p>支持jpg/png格式</p>
                <p>不超过5MB</p>
              </div>
            </div>
          </div>
        </div>
  
        <div class="comfirm-btn">
          <el-button @click="goToPay">确认并支付</el-button>
        </div>
      </el-main>
    </el-container>
    <o-footer></o-footer>
    <o-exam-notes v-show="showNotes" v-on:cancle='bindCancle'></o-exam-notes>
  </div>
</template>

<script>
import OFooter from '@/components/Footer.vue'
import OExamNotes from '@/components/ExamNotes.vue'

  export default {

    data() {
      return {
        showNotes: false
      };
    },
    created() {
  
    },
    mounted() {
      console.log('报名页面')
      console.log(this.$route);
    },
    methods: {
      goToPay() {
        this.$router.push({
          path: '/pay/nihao'
        })
      },
      bindNotes() {
        console.log(this.showNotes)
        this.showNotes = true
      },
      bindCancle() {
        this.showNotes = false
      }
    },
    components: {
      OFooter,
      OExamNotes
    }
  };
</script>

<style lang="stylus" scoped>
@import '../common/stylus/variable.styl'
@import '../common/stylus/mixin.styl'

.signup-container
  padding-top 60px
  margin-bottom 102px
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
    .comfirm-btn
      display flex
      flex-direction column
      align-items center
      margin-top 70px
      .el-button
        width 290px
        height 48px
        background-color $color-nav-active
        color $color-normal
        font-size $size-nav-text
        border-radius(8px)
    .info-container
      width 100%
      background-color $color-normal
      border-radius(8px)
      margin-bottom 20px
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
        .examination-notes
          font-size $size-sub-title
          font-weight 300
          color $color-exam-note
          cursor pointer
      .info-wrapper
        padding 50px 55px
        display flex
        flex-direction row
        align-items center
        justify-content space-between
        table
          border-radius(4px)
          border 1px solid #F1F5F8
          td
            border 1px solid #F1F5F8
          .name
            height 55px
            line-height 55px
            text-align center
            width 140px
            background-color $color-td-name
            font-size $size-news-content
            color $color-td-name-text
          .value
            width 350px
            height 55px
            line-height 55px
            padding-left 20px
            font-size $size-news-content
            color $color-td-value-text
            font-weight 400

      .upload-wrapper
        display flex
        flex-direction row
        align-items center
        justify-content space-around
        .upload-box
          display flex
          flex-direction column
          align-items center
          padding 48px 0 50px
          h4
            font-size $size-news-btn
            color $color-td-value-text
            margin-bottom 28px
          .upload-box-add
            position relative
            width 240px
            height 180px
            display flex
            flex-direction column
            align-items center
            border 2px dashed $color-upload-border
            background-color $color-upload-bg
            img 
              width 44px
              height 44px
              margin-bottom 20px
              margin-top 28px
            h5
              font-size $size-news-btn
              color $color-news-value
              opacity(0.5)
              margin-bottom 12px
            p 
              font-size $size-news-date
              color $color-upload-border
              margin-bottom 8px
            
</style>

