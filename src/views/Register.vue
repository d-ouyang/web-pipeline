<template>
  <div class="register">
    <el-row class="register-box">
      <img class="register-box-bg" src="../common/image/register.png" alt="">
      <h2 class="register-header">注册账号</h2>

      <el-form class="form" ref="form" :model="form" :rules="rules" :label-position="labelPosition">
        <div class="form-model form-left">
          <el-form-item label="真实姓名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.passStart"></el-input>
          </el-form-item>
          <el-form-item label="确认密码">
            <el-input v-model="form.passEnd"></el-input>
            <p class="pass-error">两次密码输入不一致</p>
          </el-form-item>

          <el-form-item label="手机号">
            <el-input v-model="form.phone"></el-input>
          </el-form-item>

          <el-form-item class="captcha-item" label="图形验证码">
            <el-input class="captcha" v-model="form.captcha"></el-input>
            <img style="width:60px;height:28px;margin-left:20px;" src="" alt="">
          </el-form-item>

          <el-form-item class="captcha-item" label="短信验证码">
            <el-input class="captcha" v-model="form.msgCaptcha"></el-input>
            <span class="get-captcha">获取验证码</span>
          </el-form-item>

          <el-form-item class="submit-btn">
            <el-button type="primary" @click="onSubmit">立即注册</el-button>
          </el-form-item>
        </div>
        <div class="form-model form-right">
          <el-form-item label="身份证号码">
            <el-input v-model="form.idCard"></el-input>
          </el-form-item>

          <el-form-item label="公司（若没记录选择其他）">
            <el-select v-model="form.company" placeholder="请选公司">
              <el-option label="公司一" value="1"></el-option>
              <el-option label="公司二" value="2"></el-option>
              <el-option label="其他" value="3"></el-option>
            </el-select>
          </el-form-item>
        </div>
      </el-form>

      <div class="clause">
        <p class="clause-link">
          <span>您同意管道e生</span>
          <a href="javascript:;">服务条款</a>
          <span> 和 </span>
          <a href="javascript:;">隐私政策</a>
        </p>
        <p class="clause-login">
          <span>已有账号？</span>
          <router-link class="login" to='/home' tag="div">立即登录</router-link>
        </p>
      </div>
      
    </el-row>

    <o-footer></o-footer>
  </div>
</template>
<script>
import OFooter from '@/components/Footer.vue'

export default {
  components: {
    OFooter
  },

  data () {
    return {
      labelPosition: 'top',
      form: {
        name: '',
        passStart: '',
        passEnd: '',
        phone: '',
        captcha: '',
        msgCaptcha: '',
        company: '',
        idCard: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        passStart: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        passEnd: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        phone: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        captcha: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        msgCaptcha: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        company: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        idCard: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    }
  },

  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../common/stylus/variable.styl'
@import '../common/stylus/mixin.styl'

.register
  padding 60px 0 0
  background -webkit-linear-gradient(left top, #9170f7 , #557cff)
  background -o-linear-gradient(bottom right, #9170f7 , #557cff)
  background -moz-linear-gradient(bottom right, #9170f7 , #557cff)
  background linear-gradient(to bottom right, #9170f7 , #557cff)
  .register-box
    width 690px
    padding 40px 50px 35px
    background-color $color-normal
    border-radius 8px
    position relative
    left 50%
    transform translateX(-50%)
    .register-box-bg
      position absolute
      right 0
      bottom 0
      width 487px
      height 684px
    .register-header
      font-size $size-reg
      color $color-news-title
      font-weight 500
      margin-bottom 40px
    .form 
      display flex
      flex-direction row
      justify-content space-between
      .form-model
        width 50%
        .el-form-item >>> .el-form-item__label
          padding 0
        .el-form-item
          width 240px
          .pass-error
            font-size $size-news-date
            color $color-error
            line-height 1.0
            margin-top 8px
          .get-captcha
            margin-left 10px
            cursor pointer
            font-size $size-news-date
            color $color-captcha
          .el-select
            width 100%
          .captcha
            width 160px
        .submit-btn
          button
            width 290px
            height 48px
            border-radius 8px
            background-color $color-nav-active
    .clause
      width 240px
      font-size $size-clause
      color $color-clause
      .clause-link
        padding-bottom 11px
        border-bottom 1px solid $color-clause 
        a
          color $color-nav-active
      .clause-login
        display flex
        flex-direction row
        align-items center
        padding-top 11px
        .login
          color $color-nav-active
          cursor pointer
  .footer
    margin-top 19px
</style>

