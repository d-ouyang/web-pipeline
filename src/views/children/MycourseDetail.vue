<template>
  <div class="container">
    <el-container class="signup-container">
      <el-main>
        <el-header height="73px">
          <div class="signup-name">
            <span>课程详情</span>
            <span class="back" @click="goBack">返回我的课程</span>
          </div>
        </el-header>

        <div class="info-container">
          <h4 class="info-header">
            <span>课程信息</span>
          </h4>

          <div class="info-wrapper">
            <div class="info-wrapper-box">
              <table class="info-box">
                <tr>
                  <td class="name">课程名称</td>
                  <td class="value">{{info.name}}</td>
                </tr>
                <tr>
                  <td class="name">课程状态</td>
                  <td class="value">{{info.title}}</td>
                </tr>
              </table>
              <table class="info-box">
                <tr>
                  <td class="name">课程时间</td>
                  <td class="value">{{info.duration}}</td>
                </tr>
                <tr>
                  <td class="name">课程地点</td>
                  <td class="value">{{info.location}}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <div class="info-container" v-if='orderinfoShow'>
          <h4 class="info-header">
            <span>支付情况</span>
          </h4>
          <div class="pay-info-wrapper">
            <p>
              <span class="pay-key">支付渠道</span>
              <span class="pay-value">{{orderInfo.payText}}</span>
            </p>
            <p>
              <span class="pay-key">支付金额</span>
              <span class="pay-value">￥{{orderInfo.price}}</span>
            </p>
            <p>
              <span class="pay-key">支付时间</span>
              <span class="pay-value">{{orderInfo.time}}</span>
            </p>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import {
  config,
  retrunDuration
} from '../../api/config'

export default {
  data () {
    return {
      info: {
        name: '',
        location: '',
        duration: '',
        price: '',
        title: ''
      },
      orderinfoShow: true,
      orderInfo: {
        payText: '',
        price: '',
        time: ''
      },
      orderid: this.$route.params.orderid,
      id: this.$route.params.id,
      status: this.$route.params.status
    }
  },
  mounted() {
    this.initParams()
  },
  methods: {
    initParams() {
      let id = this.id
      let orderid = this.orderid
      let status = this.status
      console.log(id, orderid)
      this.Api.getCourseDetail(id).then(res => {
        console.log(res)
        if (status == 1) {
          res.title = '待开课'
        } else if (status == 2) {
          res.title = '开课中'
        } else if (status == 3) {
          res.title = '已结业'
        } 
        res.duration = `${retrunDuration(res.startDate)} ~ ${retrunDuration(res.endDate)}`
        this.info = Object.assign({},res)
      })
      
      this.Api.pollingPay(orderid).then(res => {
        console.log(res)
        if (res.payMethod == 'alipay') { // 支付宝
          res.payText = '支付宝'
        } else if (res.payMethod == 'wxpay') { // 微信
          res.payText = '微信'
        } else { // 其它
          res.payText = '其它'
        }
        res.time = this._returnYND(res.bookAt)
        this.orderinfoShow = true
        this.orderInfo = Object.assign({},res)
      }).catch(err => {
        this.orderinfoShow = false
      })
    },
    // 年月日
    _returnYND(date) {
      let arr = date.split(' ')
      let arr1 = arr[0].split('-')
      return `${arr1[0]}年${arr1[1]}月${arr1[2]}日 ${arr[1]}`
    },
    // 返回上一级
    goBack() {
      this.$router.go(-1)
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
