<template>
  <div>
    <el-container class="signup-container">
      <el-main>
        <el-header height="73px">
          <div class="signup-name">
            {{title}}报名
            <el-tag v-show='isGropu' size="mini">企业版</el-tag>
          </div>
        </el-header>

        <div class="info-container">
          <h4 class="info-header">
            <span>{{title}}信息</span>
            <span v-if='showExam' class="examination-notes" @click="bindNotes">考试须知</span>
          </h4>
          <div class="info-wrapper">
            <table class="info-box">
              <tr>
                <td class="name">{{title}}名称</td>
                <td class="value">{{info.name}}</td>
              </tr>
              <tr>
                <td class="name">{{title}}费用</td>
                <td class="value">￥{{info.price}}</td>
              </tr>
            </table>
            <table class="info-box">
              <tr>
                <td class="name">{{title}}时间</td>
                <td class="value">{{showExam ? info.examDate : info.duration}}</td>
              </tr>
              <tr>
                <td class="name">{{title}}地点</td>
                <td class="value">{{info.location}}</td>
              </tr>
            </table>
          </div>
        </div>

        <div class="info-container" v-show="showExam && isGropu">
          <h4 class="info-header">
            <span>报名流程</span>
          </h4>
          <div class="info-box-wrapper">
            <div class="info-content">
              <p>1、通过在线支付或公司转账支付报名费用，报名费用为每人价格 </p>
              <p>2、将贵公司名称及报名员工统计表发送至邮箱：richht@163.com  </p>
              <P>3、报名成功后，您将收到确认邮件和员工报考证</P>
            </div>
          </div>

        </div>

        <div class="info-container" v-show='showExam && !isGropu'>
          <h4 class="info-header">
            <span>上传资料</span>
          </h4>
          <div class="upload-wrapper">
            <div class="upload-box">
              <h4>毕业证书</h4>
              <el-upload class="upload-box-add"
                :action = "uploadAction"
                auto-upload
                drag
                :headers='uploadHeader'
                :show-file-list="false"
                :on-success="handleGraduationSuccess"
                :on-error="handleGraduationError"
                :before-upload="beforeGraduationUpload">
                <div class="upload-box-add-slot" v-if='!graduationUploadBool'>
                  <img src="../common/image/add.png" alt="">
                  <h5>点击/拖拽 添加图片</h5>
                  <p>支持jpg/png格式</p>
                  <p>不超过5MB</p>
                </div>
                <img class="upload-img" :src="IMG_BASE_URL+graduationUploadSrc" alt="" v-if='graduationUploadBool'>
              </el-upload>
            </div>
            <div class="upload-box">
              <h4>上传资质证书</h4>
              <el-upload class="upload-box-add"
                :action = "uploadAction"
                auto-upload
                drag
                :headers='uploadHeader'
                :show-file-list="false"
                :on-success="handleIntelligenceSuccess"
                :on-error="handleIntelligenceError"
                :before-upload="beforeIntelligenceUpload">
                <div class="upload-box-add-slot" v-if='!intelligenceUploadBool'>
                  <img src="../common/image/add.png" alt="">
                  <h5>点击/拖拽 添加图片</h5>
                  <p>支持jpg/png格式</p>
                  <p>不超过5MB</p>
                </div>
                <img class="upload-img" :src="IMG_BASE_URL+intelligenceUploadSrc" alt="" v-if='intelligenceUploadBool'>
              </el-upload>
            </div>
          </div>
        </div>

        <div class="comfirm-btn">
          <el-button @click="goToPay">{{isGropu ? "下一步" : "确认并支付"}}</el-button>
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
import { config } from '../api/config'
import { isLogin } from '../common/js/utils'
const IMG_BASE_URL = config.IMG_BASE_URL

export default {

  data () {
    return {
      IMG_BASE_URL: config.IMG_BASE_URL,
      uploadAction: `${config.BASE_URL}/image`,
      graduationUploadSrc: '',
      graduationUploadBool: false,
      intelligenceUploadSrc: '',
      intelligenceUploadBool: false,
      uploadHeader: {},
      info: {
        name: '',
        location: '',
        duration: '',
        price: ''
      },
      title: '',
      showExam: false,
      showNotes: false,
      id: this.$route.params.id,
      group: this.$route.params.group,
      type: this.$route.params.type,
      isGropu: this.$route.params.isGroup
    }
  },
  created () {

  },
  mounted () {
    this.initParams()
  },
  watch: {
    '$route' (to, from) {

    }
  },
  methods: {
    setUploadHeader () {
      let token = window.localStorage.getItem('token')
      let uploadHeader = {
        token: token
      }
      this.uploadHeader = uploadHeader
    },
    initParams () {
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
          this.handleInfo(res)
        })
      } else if (type == 'exam') {
        this.title = '考试'
        this.showExam = true
        this.Api.getExamDeatil(id).then(res => {
          this.handleInfo(res)
        })
      }

      // 设置上传的请求头
      this.setUploadHeader()
    },

    handleInfo (info) {
      console.log(info)
      info.duration = `${info.startDate}~${info.endDate}`
      this.info = info
    },
    // 生成订单
    goToPay () {
      console.log(this.id)
      console.log(this.group)
      console.log(this.type)
      console.log(this.isGropu)
      // 判断要生成个什么订单
      if (this.isGropu) { // 公司 一定是 公司统一订单
        let params = {
          group: this.group,
          type: this.type,
          id: this.id,
          orderid: null
        }
        this._goToOrderPage(params)
      } else {
        if (this.type == 'exam') { // 个人 考试订单
          this.Api.getUserInfo(1).then(res => {
            console.log(res)
            console.log('个人考试')
            let data = {
              userId: res.id,
              examId: this.id,
              price: this.info.price,
              graduationCertificate: this.graduationUploadSrc,
              qualificationCertificate: this.intelligenceUploadSrc
            }
            console.log(data)
            return this.Api.createPersonalExamOrder(data)
          })
            .then(res => {
              console.log(res)
              let params = {
                group: this.group,
                type: this.type,
                id: this.id,
                orderid: res.id
              }
              this._goToOrderPage(params)
            })
        } else if (this.type == 'course') { // 个人 课程订单
          this.Api.getUserInfo(1).then(res => {
            console.log(res)
            console.log('个人课程')
            let data = {
              userId: res.id,
              price: this.info.price,
              curriculumId: this.id
            }
            console.log(data)
            return this.Api.createPersonalCourseOrder(data)
          })
            .then(res => {
              console.log(res)
              let params = {
                group: this.group,
                type: this.type,
                id: this.id,
                orderid: res.id
              }
              this._goToOrderPage(params)
            })
        }
      }
    },
    _goToOrderPage (params) {
      this.$router.push({
        name: 'pay',
        params: params
      })
    },
    bindNotes () {
      console.log(this.showNotes)
      this.showNotes = true
    },
    bindCancle () {
      this.showNotes = false
    },
    // 上传毕业证书
    handleGraduationSuccess (response, file, fileList) {
      console.log(response)
      this.graduationUploadSrc = response.data.path
      this.graduationUploadBool = true
    },
    handleGraduationError (err, file, fileList) {
      console.log(err)
      this.graduationUploadBool = false
      this.showToastError('上传失败')
    },
    beforeGraduationUpload (file) {
      if (file.size >= 5 * 1024 * 1024) {
        this.showToastError('文件超过 5M')
        return false
      }
    },

    // 上传资质证书
    handleIntelligenceSuccess (response, file, fileList) {
      console.log(response)
      this.intelligenceUploadSrc = response.data.path
      this.intelligenceUploadBool = true
    },
    handleIntelligenceError (err, file, fileList) {
      console.log(err)
      this.intelligenceUploadBool = false
      this.showToastError('上传失败')
    },
    beforeIntelligenceUpload (file) {
      if (file.size >= 5 * 1024 * 1024) {
        this.showToastError('文件超过 5M')
        return false
      }
    }

  },
  components: {
    OFooter,
    OExamNotes
  }
}
</script>

<style lang="stylus">
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
      .info-box-wrapper
        position relative
        width 100%
        height 322px
        .info-content
          position absolute
          width 500px
          height 128px
          left 50%
          margin-left -250px
          top 78px
          display flex
          flex-direction column
          justify-content space-between
          p
            font-size $size-news-btn
            color $color-news-value
            font-weight 500
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
          .upload-box-add .el-upload .el-upload-dragger
            width 240px
            height 180px
            border 2px dashed $color-upload-border
            background-color $color-upload-bg
            .upload-img
              width 240px
              height 180px
              background-color $color-normal
            .upload-box-add-slot
              display flex
              flex-direction column
              align-items center
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
