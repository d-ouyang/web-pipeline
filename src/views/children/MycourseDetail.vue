<template>
  <div class="container">
    <el-container class="signup-container">
      <el-main>
        <el-header height="73px">
          <div class="signup-name">
            <span>考试详情</span>
            <span class="back">返回上一级</span>
          </div>
        </el-header>
  
        <div class="info-container">
          <h4 class="info-header">
            <span>等待考试</span>
            <!-- <span class="examination-notes" @click="bindNotes">考试须知</span> -->
          </h4>
  
          <div class="info-wrapper">
            <div class="error-warming">
              <span class="error-info">1、照片信息不够清晰，请重新上传</span>
              <span >2、未找到毕业信息，请核查后重新上传</span>
            </div>
            <div class="info-wrapper-box">
              <table class="info-box">
                <tr>
                  <td class="name">考试名称</td>
                  <!-- <td class="value">{{info.name}}</td> -->
                  <td class="value"></td>
                </tr>
                <tr>
                  <td class="name">考试费用</td>
                  <!-- <td class="value">￥{{info.price}}</td> -->
                  <td class="value"></td>
                </tr>
              </table>
              <table class="info-box">
                <tr>
                  <td class="name">考试时间</td>
                  <!-- <td class="value">{{info.duration}}</td> -->
                  <td class="value"></td>
                </tr>
                <tr>
                  <td class="name">考试地点</td>
                  <!-- <td class="value">{{info.location}}</td> -->
                  <td class="value"></td>
                </tr>
              </table>
            </div>
            <div class="btn-wrapper">
              <el-button>重新上传资料</el-button>
            </div>
          </div>
        </div>
  
        <div class="info-container">
          <h4 class="info-header">
            <span>支付情况</span>
            <!-- <span class="examination-notes" @click="bindNotes">考试须知</span> -->
          </h4>
          <div class="pay-info-wrapper">
            <p>
              <span class="pay-key">支付渠道</span>
              <span class="pay-value">支付宝</span>
            </p>
            <p>
              <span class="pay-key">支付金额</span>
              <span class="pay-value">￥400</span>
            </p>
            <p>
              <span class="pay-key">支付时间</span>
              <span class="pay-value">2018年9月29日 24:33:23</span>
            </p>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import {
    config
  } from '../../api/config'
  
  export default {
    data() {
      return {
  
      }
    }
  }
</script>

<style lang="stylus">
@import '../../common/stylus/variable.styl'
@import '../../common/stylus/mixin.styl'

.container
  width 100%
  max-width 1000px
  .el-main
    padding 0
    .el-header
      width 100%
      line-height 73px
      border-radius(8px)
      background-color $color-normal
      margin-bottom 10px
      .signup-name
        font-size $size-news-title
        color $color-news-title
        font-weight 500
        display flex
        flex-direction row
        align-items center
        justify-content space-between
        .back
          cursor pointer
          font-size $size-news-btn
          color $color-exam-note
    .info-container
      width 100%
      background-color $color-normal
      border-radius(8px)
      margin-bottom 10px
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
        padding 30px 50px
        .btn-wrapper
          display flex
          flex-direction column
          align-items center
          margin-top 50px
          .el-button
            width 290px
            height 48px
            background-color $color-nav-active
            color $color-normal
            font-size $size-nav-text
            border-radius(8px) 
        .error-warming
          display flex
          flex-direction row
          align-items center
          justify-content center
          height 28px
          width 100% 
          background-color $color-error-bg
          margin-bottom 50px
          span 
            font-size $size-clause
            color $color-error-pass
          .error-info
            margin-right 40px
        .info-wrapper-box
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
              width 250px
              height 55px
              line-height 55px
              padding-left 20px
              font-size $size-news-content
              color $color-td-value-text
              font-weight 400
      .pay-info-wrapper
        padding 30px 50px
        p 
          display flex
          flex-direction row
          align-items center
          margin-bottom 20px
          span 
            font-size $size-sub-title
          .pay-key
            color $color-td-name-text
            margin-right 34px
          .pay-value
            color $color-td-value-text
            font-weight 500
          
</style>



