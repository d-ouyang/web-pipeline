<template>
  <div>
    <el-container class="signup-container">
      <el-main>
        <div class="info-container">
          <h4 class="info-header">
            <span>重新上传资料</span>
          </h4>
          <div class="upload-wrapper">
            <div class="upload-box">
              <h4>毕业证书</h4>
              <el-upload class="upload-box-add" :action="uploadAction" auto-upload drag :headers='uploadHeader' :show-file-list="false" :on-success="handleGraduationSuccess" :on-error="handleGraduationError" :before-upload="beforeGraduationUpload">
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
              <el-upload class="upload-box-add" :action="uploadAction" auto-upload drag :headers='uploadHeader' :show-file-list="false" :on-success="handleIntelligenceSuccess" :on-error="handleIntelligenceError" :before-upload="beforeIntelligenceUpload">
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
          <el-button @click="reUpload">重新上传</el-button>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import {
    config
  } from '../api/config'
  
  export default {
    data() {
      return {
        uploadAction: `${config.BASE_URL}/image`,
        uploadHeader: {},
        IMG_BASE_URL: config.IMG_BASE_URL,
        graduationUploadSrc: '',
        graduationUploadBool: false,
        intelligenceUploadSrc: '',
        intelligenceUploadBool: false,
        orderid: this.$route.params.orderid,
        // router: this.$router.from
      }
    },
    mounted() {
      this.setUploadHeader()
    },
    methods: {
      reUpload() {
        console.log('重新上传')
        let params = {
          orderId: parseInt(this.orderid),
          graduationCertificate: this.graduationUploadSrc,
          qualificationCertificate: this.intelligenceUploadSrc
        }
        if (this.graduationUploadSrc == '' || this.intelligenceUploadSrc == '') {
          this.showToastError('请上传证件')
          return false
        }
        this.Api.reUpload(params).then(res => {
          this.showToastSuccess('重新上传成功')
          this.$router.push({
            name: 'myexam'
          })
        })
      },
      setUploadHeader() {
        let token = window.localStorage.getItem('token')
        let uploadHeader = {
          token: token
        }
        this.uploadHeader = uploadHeader
      },
      // 上传毕业证书
      handleGraduationSuccess(response, file, fileList) {
        console.log(response)
        this.graduationUploadSrc = response.data.path
        this.graduationUploadBool = true
      },
      handleGraduationError(err, file, fileList) {
        consol.elog(err)
        this.graduationUploadBool = false
        this.showToastError('上传失败')
      },
      beforeGraduationUpload(file) {
        console.log(file)
      },
  
      // 上传资质证书
      handleIntelligenceSuccess(response, file, fileList) {
        console.log(response)
        this.intelligenceUploadSrc = response.data.path
        this.intelligenceUploadBool = true
      },
      handleIntelligenceError(err, file, fileList) {
        consol.elog(err)
        this.intelligenceUploadBool = false
        this.showToastError('上传失败')
      },
      beforeIntelligenceUpload(file) {
        console.log(file)
      }
    }
  
  }
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

