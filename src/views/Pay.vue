<template>
  <div>
    <el-container class="signup-container">
      <el-main>
        <el-header height="73px">
          <div class="signup-name">
            您正在报名以下{{title}}
            <el-tag v-show='isGropu' size="mini">企业版</el-tag>
          </div>
        </el-header>

        <div class="info-container" v-show='!isGropu'>
          <p>
            <span>{{title}}名称</span>
            <span>{{title}}时间</span>
            <span>待支付费用</span>
          </p>
          <h5>
            <span>{{info.name}}</span>
            <span>{{showExam ? info.examDate : info.duration}}</span>
            <span>{{info.price}} 元</span>
          </h5>
        </div>

        <div class="info-container" v-show='isGropu'>
          <p>
            <span>{{title}}名称</span>
            <span>{{title}}编号</span>
            <span>单价</span>
            <span>数量</span>
            <span>总价</span>
          </p>
          <h5>
            <span>{{info.name}}</span>
            <span>{{info.id}}</span>
            <span>{{info.price}} 元</span>
            <el-input-number size="mini" v-model="num" :min='1'></el-input-number>
            <span style="color:#FF475D;">￥ {{(num*info.price).toFixed(2)}}</span>
          </h5>
        </div>

        <div class="info-container">
          <h4 class="info-header">
            <span>支付方式</span>
          </h4>
          <el-tabs :tab-position="tabPosition" type="border-card" v-show="!isGropu">
            <el-tab-pane>
              <span slot="label">
                  <img src="../common/image/alipay.png" alt="">支付宝支付
                </span>
              <div class="pay-box">
                <h4>共需支付</h4>
                <h3>
                  <span>￥</span> {{info.price}}
                </h3>
                <img :src="AlipayQrcode" alt="">
                <p>请用支付宝扫描支付</p>
              </div>
            </el-tab-pane>
            <el-tab-pane>
              <span slot="label">
                  <img src="../common/image/wechat.png" alt="">微信支付
                </span>
              <div class="pay-box">

                <!-- <h4>共需支付</h4>
                <h3>
                  <span>￥</span> 5,900
                </h3>
                <img @click="goToPay" src="" alt=""> -->
                <p style="margin-top: 200px;">微信支付即将上线，尽请期待</p>
              </div>
            </el-tab-pane>
          </el-tabs>

          <el-tabs :tab-position="tabPosition" type="border-card" v-show="isGropu">
            <el-tab-pane>
              <span slot="label">
                  <img src="../common/image/unionPay.png" alt="">银行支付
                </span>
              <div class="pay-box-card">
                <div class="info-content">
                  <h4>转账支付流程说明</h4>
                  <div>1、将上述金额转账至 ：</div>
                  <div style="text-indent :30px;">公司开户名：锐驰高科股份有限公司 </div>
                  <div style="text-indent :30px;">公司账户：257202709096</div>
                  <div style="text-indent :30px;">公司开户行：中国银行濮阳科技新村支行 </div>
                  <div>2、将贵公司名称，转账记录及报名员工统计表发送至邮箱：richht@163.com  </div>
                  <div>3、统计表里面备注考试编号和报名公司</div>
                  <div style="margin-bottom:60px;">4、报名成功后，您将收到确认邮件和员工报考表</div>
                  <span @click="downLoadSheet">
                    <i class="el-icon-download"></i>
                    员工统计表
                  </span>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-main>

    </el-container>
    <o-footer></o-footer>
  </div>
</template>

<script>
import OFooter from '@/components/Footer.vue'
import { config } from '../api/config'

export default {
  data () {
    return {
      tabPosition: 'left',
      title: '',
      num: 1,
      info: {
        name: '',
        location: '',
        duration: '',
        price: ''
      },
      showExam: false,
      timer:null,
      orderid: this.$route.params.orderid,
      id: this.$route.params.id,
      group: this.$route.params.group,
      type: this.$route.params.type,
      isGropu: this.$route.params.isGroup,
      AlipayQrcode: '',
      WxpayQrcode: ''
    }
  },
  mounted () {
    console.log(this.$route)
    this.initParams()
  },
  filters: {

  },
  methods: {
    // goToPay () {
    //   this.$router.push('/payOver/123')
    // },
    initParams () {
      const id = this.id
      const group = this.group
      const type = this.type
      const orderid = this.orderid
      console.log(id, group, type, orderid)
      if (group == 'personal') {
        this.isGropu = false
        this._createRQcode(this.orderid, 'Alipay')
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
    },

    // 生成二维码
    _createRQcode (id, payType) {
      let data = {
        orderId: id,
        payType: payType
      }
      this.Api.createQrCodeImg(data).then(res => {
        console.log(res)
        this.AlipayQrcode = res
        this._pollingPay(id)
      })
    },
    handleInfo (info) {
      console.log(info)
      info.duration = `${info.registerStartDate}~${info.registerEndDate}`
      this.info = info
    },

    // 轮询订单
    _pollingPay (id) {
      let timer = this.timer
      clearInterval(timer)
      timer = setInterval(() => {
        this.Api.pollingPay(id).then(res => {
          this.timer = timer
          if (res.status == 1) {
            clearInterval(timer)
            this.$router.push({
              name: 'payOver',
              params: {
                group: this.group,
                type: this.type,
                id: this.id
              }
            })
          }
        }).catch(err => {
          clearInterval(timer)
        })
      }, 8000)
    },

    // 下载员工表
    downLoadSheet() {
      window.location.href = config.USER_SHEET
    }
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
    .info-container
      width 100%
      background-color $color-normal
      border-radius(8px)
      margin-bottom 20px
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
      .el-tabs
        height 452px
      .el-tabs--border-card
        border 0
        box-shadow(none)
      .el-tabs--border-card >>> .el-tabs__header
        border-right 0
        background-color $color-border
        margin-right 0
        .el-tabs__item
          border 0
          height 60px
          line-height 60px
          span
            display flex
            flex-direction row
            align-items center
            font-size $size-sub-title
            color $color-td-value-text
            img
              width 20px
              height 20px
              margin-right 10px
      .el-tabs--border-card >>> .el-tabs__content
        padding 0
        .pay-box-card
          width 100%
          height 452px
          .info-content
            position relative
            max-width 540px
            top 88px
            left 50%
            transform translateX(-50%)
            h4
              font-size 20px
              color #4B6796
              font-weight 500
              margin-bottom 30px
            div
              text-align left
              font-size 15px
              line-height 30px
              color #4B6796
              border-bottom 0
            span 
              color #4264FB
              font-size 14px
              cursor pointer
        .pay-box
          display flex
          flex-direction column
          align-items center
          h4
            font-size $size-news-btn
            color $color-nav-active
            margin-bottom 10px
            margin-top 84px
          h3
            font-size $size-amount
            color $color-nav-active
            font-weight 400
            margin-bottom 30px
            display flex
            flex-direction row
            align-items baseline
            span
              font-size $size-news-title
          img
            width 190px
            height 190px
            margin-bottom 16px
          p
            font-size $size-sub-title
            color $color-td-name-text
            border-bottom 0

</style>
