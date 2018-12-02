<template>
  <div>
    <el-cotainer class="signup-container">
      <el-main>
        <div class="info-container">
          <div class="pay-over">
            <img src="../common/image/success.png" alt="">
            <h3>报名成功</h3>
            <p v-if='!showExam'>请前往“个人中心”-“我的课程”中查看课程订单<br>请准时参加培训</p>
            <p v-if='showExam'>资料审核通过后，您将收到短信提醒<br>考试当日需携带有效证件和准考证前往考场考试</p>
            <span v-if='showExam'>*准考证请前往“个人中心”-“我的考试”中下载并打印</span>
          </div>
        </div>
        <div class="info-container">
          <p>
            <span>{{title}}名称</span>
            <span>{{title}}时间</span>
            <span>支付费用</span>
          </p>
          <h5>
            <span>{{info.name}}</span>
            <span>{{info.duration}}</span>
            <span>{{info.price}} 元</span>
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
    data() {
      return {
        title: '',
        info:{
          name:'',
          location:'',
          duration:'',
          price: ''
        },
        showExam: false,
        id: this.$route.params.id,
        group: this.$route.params.group,
        type: this.$route.params.type,
        isGropu: this.$route.params.isGroup
      }
    },
    mounted() {
      this.initParams()
    },
    methods: {
      initParams() {
        const id = this.id
        const group = this.group
        const type = this.type
        console.log(id, group, type)
        if (group == 'personal') {
          this.isGropu = false
        } else if (group == 'compony') {
          this.isGropu = true
        }
        if (type == 'course') {
          this.title = '课程'
          this.showExam = false
          this.Api.getCourseDetail(id).then(res => {
            console.log(res)
            this.handleInfo(res)
          })
        } else if (type == 'exam') {
          this.title = '考试'
          this.showExam = true
          this.Api.getExamDeatil(id).then(res => {
            console.log(res)
            this.handleInfo(res)
          })
        }
      },
      handleInfo(info) {
        console.log(info)
        info.duration = `${info.registerStartDate}~${info.registerEndDate}`
        this.info = info
      },
  
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

