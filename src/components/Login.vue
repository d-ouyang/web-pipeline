<template>
  <div class="login-mask">
    <div class="login-model">
      <div class="login-pass login-item" v-show="false">
        <h3>登录</h3>
        <p class="error-text">账号或密码错误</p>
        <el-form class="form" ref="form" :model="formLogin" :rules="rulesLogin">
          <div class="form-item">
            <img class="input-icon" src="./image/icon-user.png" alt="">
            <el-input v-model="formLogin.user" placeholder='用户名'></el-input>
          </div>
          <div class="form-item">
            <img class="input-icon" src="./image/icon-pass.png" alt="">
            <el-input v-model="formLogin.pass" placeholder='密码'></el-input>
            <img class="eye-icon" src="./image/icon-open-eye.png" alt="">
          </div>
          <p class="forget-text">
            <span>忘记密码?</span>
          </p>
          <el-form-item class="submit-btn">
            <el-button type="primary" @click="onLoginSubmit">登录</el-button>
          </el-form-item>
        </el-form>
        <p class="regis-entrance">
          <span>没有账号？</span>
          <router-link class="register" to='/register' tag="div">立即注册</router-link>
        </p>
      </div>

      <div class="modify-pass login-item" v-show="false">
        <h3 style="margin-bottom:12px;">修改密码</h3>
        <h4>为了账号安全，您需修改初始密码才能登陆</h4>
        <p class="error-text">两次输入密码不一致</p>
        <el-form class="modify-form" ref="modify-form" :model="formModify" :rules="rulesModify">
          <div class="form-item">
            <img class="input-icon" src="./image/icon-pass.png" alt="">
            <el-input v-model="formModify.passFirst" placeholder='新密码'></el-input>
          </div>
          <div class="form-item">
            <img class="input-icon" src="./image/icon-pass.png" alt="">
            <el-input v-model="formModify.passSecond" placeholder='请再次输入密码'></el-input>
          </div>
          <el-form-item class="submit-btn">
            <el-button type="primary" @click="onModifySubmit">登录</el-button>
          </el-form-item>
        </el-form>
        <p class="regis-entrance">
          <span>没有账号？</span>
          <router-link class="register" to='/register' tag="div">立即注册</router-link>
        </p>
      </div>

      <div class="find-pass login-item" v-show="true">
        <h3>密码找回</h3>
        <p class="error-text">验证码已过期，请重新发送</p>
        <el-form class="find-form" ref="find-form" :model="formFind" :rules="rulesFind">
          <div class="form-item">
            <img class="input-icon" src="./image/icon-phone.png" alt="">
            <el-input v-model="formFind.phone" placeholder='手机号'></el-input>
          </div>
          <div class="form-item">
            <img class="input-icon" src="./image/icon-img-code.png" alt="">
            <el-input v-model="formFind.captcha" placeholder='图形验证码'></el-input>
          </div>
          <div class="form-item">
            <img class="input-icon" src="./image/icon-verify-code.png" alt="">
            <el-input v-model="formFind.msgCaptcha" placeholder='短信验证码'></el-input>
            <p class="get-captcha">获取验证码</p>
          </div>
          <el-form-item class="submit-btn">
            <el-button style="margin-top:40px;" type="primary" @click="onFindSubmit">发送密码到手机</el-button>
          </el-form-item>
        </el-form>
        <p class="regis-entrance" style="flex-direction:row-reverse;">
          <span style="cursor:pointer;">登录</span>
        </p>
      </div>

      <!-- cancle -->
      <i class="el-icon-close cancle" @click="cancle"></i>
    </div>
    
  </div>
</template>
<script>
export default {
  data () {
    return {
      formLogin: {
        user: '',
        pass: ''
      },
      rulesLogin: {
        user: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        pass: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      },
      formModify: {
        passFirst: '',
        passSecond: ''
      },
      rulesModify: {
        passFirst: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        passSecond: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      },
      formFind: {
        phone: '',
        captcha: '',
        msgCaptcha: ''
      },
      rulesFind: {
        phone: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        captcha: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        msgCaptcha: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },

  methods: {
    onLoginSubmit() {
      console.log('登录');
    },
    onModifySubmit() {
      console.log('修改密码');
    },
    onFindSubmit() {
      console.log('发送密码到手机');
    },
    cancle() {
      this.$emit('cancle')
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../common/stylus/variable.styl'
@import '../common/stylus/mixin.styl'

.login-mask 
  position fixed
  width 100vw
  height 100vh
  left 0
  top 0
  background-color rgba(0,0,0,0.6)
  z-index 100
  .login-model
    position absolute
    box-sizing()
    left 50%;
    margin-left -195px
    top 180px
    width 390px
    height 486px
    padding 60px 50px 0
    border-radius 8px
    background-color $color-normal
    .cancle
      position absolute
      top -4px
      right -36px
      font-size $size-title
      color $color-normal
      cursor pointer
    .login-item
      h3
        font-size $size-news-title
        color $color-news-title
        margin-bottom 16px
        font-weight 500
      h4 
        font-size $size-sub-title
        color $color-news-title
        margin-bottom 16px
      .error-text
        height 28px
        line-height 28px
        text-align center
        font-size $size-clause
        color $color-error-pass
        background-color $color-error-bg
      .form
        margin-top 10px
      .modify-form
        margin-top 12px
      .find-form 
        margin-top 10px
      form
        margin-top 10px
        .el-button
          width 100%
          height 48px
          background-color $color-nav-active
          margin-top 66px
        .forget-text
          text-align right
          font-size $size-news-content
          color rgba(26,26,26,0.3)
        .form-item 
          display flex
          height 45px
          flex-direction row
          align-items center
          border-bottom 1px solid $color-border
          margin-bottom 20px
          .get-captcha
            width 120px
            text-align right
            cursor pointer
            font-size $size-news-content
            color $color-captcha
          .input-icon
            width 20px
            height 20px
          .eye-icon
            width 18px
            height 16px
          .el-input >>> .el-input__inner
            border 0
      .regis-entrance
        display flex
        flex-direction row
        align-items center
        color $color-nav-active
        span
          color rgba(26,26,26,0.3)
          font-size $size-news-content
        .register
          cursor pointer
          

</style>


