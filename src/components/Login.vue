<template>
  <div class="login-mask">
    <div class="login-model">
      <div class="login-pass login-item" v-show="loginShow">
        <h3>
          <span class="login-title">登录</span>
          <div class="phone-login" @click="toPhoneLogin">
            <span>手机验证快捷登录</span>
            <i class="el-icon-arrow-right"></i>
          </div>
        </h3>
        <!-- <p class="error-text">账号或密码错误</p> -->
        <el-form class="form" status-icon ref="form" :model="formLogin" :rules="rulesLogin">
          <el-form-item class="form-item" prop='user'>
            <img class="input-icon" src="./image/icon-user.png" alt="">
            <el-input v-model="formLogin.user" placeholder='请输入学号/身份证'></el-input>
          </el-form-item>
          <el-form-item class="form-item" prop='pass' style="margin-bottom:0;">
            <img class="input-icon" src="./image/icon-pass.png" alt="">
            <el-input :type="loginPass ? 'password' : 'text'" v-model="formLogin.pass" placeholder='密码'></el-input>
            <img @click="transPass" class="eye-icon" :src="loginPass ? openSrc : closeSrc" alt="">
          </el-form-item>
          <p class="forget-text">
            <span style="cursor: pointer" @click="bindForget">忘记密码?</span>
          </p>
          <el-form-item class="submit-btn" style="margin-top:66px;">
            <el-button type="primary" @click="onLoginSubmit('form')">登录</el-button>
          </el-form-item>
        </el-form>
        <p class="regis-entrance">
          <span>没有账号？</span>
          <router-link class="register" to='/register' tag="div">立即注册</router-link>
        </p>
      </div>

      <!-- 手机号验证码登录 -->
      <div class="login-pass login-item" v-show="phoneLoginShow">
        <h3>
          <span class="login-title">登录</span>
          <div class="phone-login" @click="toNumberLogin">
            <span>身份证/学号密码登录</span>
            <i class="el-icon-arrow-right"></i>
          </div>
        </h3>

        <el-form class="form" status-icon ref="phone-form" :model="formPhoneLogin" :rules="rulesPhoneLogin">
          <el-form-item class="form-item" prop='phone'>
            <img class="input-icon" src="./image/icon-phone.png" alt="">
            <el-input v-model="formPhoneLogin.phone" placeholder='请输入手机号'></el-input>
          </el-form-item>
          <el-form-item class="form-item" prop='captcha'>
            <img class="input-icon" src="./image/icon-img-code.png" alt="">
            <el-input style="width:73%;" v-model="formPhoneLogin.captcha" placeholder='图形验证码'></el-input>
            <el-tooltip class="item" effect="dark" content="点击更换图形验证码" placement="right-start">
              <img @click="getImgCaptcha('phone')" class="img-captcha" :src="IMG_BASE_URL+formPhoneLogin.imageUrl" alt="">
            </el-tooltip>
          </el-form-item>
          <el-form-item class="form-item" prop='msgCaptcha'>
            <img class="input-icon" src="./image/icon-img-code.png" alt="">
            <el-input v-model="formPhoneLogin.msgCaptcha" placeholder='短信验证码'></el-input>
            <el-tooltip class="item" effect="dark" content="优先填写手机号和图形验证码" placement="right-start">
              <span class="get-captcha" @click="getMsgCaptcha('phone')">{{formPhoneLogin.msgValue}}</span>
            </el-tooltip>
          </el-form-item>
          <el-form-item class="submit-btn" style="margin-top:40px;margin-bottom:20px;">
            <el-button type="primary" @click="onPhoneLoginSubmit('phone-form')">登录</el-button>
          </el-form-item>
        </el-form>
        <p class="regis-entrance">
          <span>没有账号？</span>
          <router-link class="register" to='/register' tag="div">立即注册</router-link>
        </p>
      </div>

      <div class="modify-pass login-item" v-show="modifyShow">
        <h3 style="margin-bottom:12px;">修改密码</h3>
        <h4>为了账号安全，您需修改初始密码才能登陆</h4>
        <!-- <p class="error-text">两次输入密码不一致</p> -->
        <el-form status-icon class="modify-form" ref="modify-form" :model="formModify" :rules="rulesModify">
          <el-form-item class="form-item" prop='passFirst'>
            <img class="input-icon" src="./image/icon-pass.png" alt="">
            <el-input type="password" v-model="formModify.passFirst" placeholder='新密码'></el-input>
          </el-form-item>
          <el-form-item class="form-item" prop='passSecond'>
            <img class="input-icon" src="./image/icon-pass.png" alt="">
            <el-input type="password" v-model="formModify.passSecond" placeholder='请再次输入密码'></el-input>
          </el-form-item>
          <el-form-item class="submit-btn">
            <el-button type="primary" @click="onModifySubmit('modify-form')">登录</el-button>
          </el-form-item>
        </el-form>
        <p class="regis-entrance">
          <span>没有账号？</span>
          <router-link class="register" to='/register' tag="div">立即注册</router-link>
        </p>
      </div>

      <div class="find-pass login-item" v-show="findShow">
        <h3>密码找回</h3>
        <!-- <p class="error-text">验证码已过期，请重新发送</p> -->
        <el-form status-icon class="find-form" ref="find-form" :model="formFind" :rules="rulesFind">
          <el-form-item class="form-item" prop="phone">
            <img class="input-icon" src="./image/icon-phone.png" alt="">
            <el-input v-model="formFind.phone" placeholder='手机号'></el-input>
          </el-form-item>
          <el-form-item class="form-item" prop="captcha">
            <img class="input-icon" src="./image/icon-img-code.png" alt="">
            <el-input style="width:73%;" v-model="formFind.captcha" placeholder='图形验证码'></el-input>
            <el-tooltip class="item" effect="dark" content="点击更换图形验证码" placement="right-start">
              <img @click="getImgCaptcha('find')" class="img-captcha" :src="IMG_BASE_URL+formFind.imageUrl" alt="">
            </el-tooltip>
          </el-form-item>
          <el-form-item class="form-item" prop="msgCaptcha">
            <img class="input-icon" src="./image/icon-verify-code.png" alt="">
            <el-input v-model="formFind.msgCaptcha" placeholder='短信验证码'></el-input>
            <el-tooltip class="item" effect="dark" content="优先填写手机号和图形验证码" placement="right-start">
              <span class="get-captcha" @click="getMsgCaptcha('find')">{{formFind.msgValue}}</span>
            </el-tooltip>
          </el-form-item>
          <el-form-item class="submit-btn" style="margin-top:40px;margin-bottom:20px;">
            <el-button type="primary" @click="onFindSubmit('find-form')">发送密码到手机</el-button>
          </el-form-item>
        </el-form>
        <p class="regis-entrance" style="flex-direction:row-reverse;">
          <span style="cursor:pointer;" @click="toLogin">登录</span>
        </p>
      </div>

      <!-- cancle -->
      <i class="el-icon-close cancle" @click="cancle"></i>
    </div>

  </div>
</template>

<script>
import {
  config,
  returnFormData
} from '../api/config'

export default {
  data () {
    return {
      IMG_BASE_URL: config.IMG_BASE_URL,
      loginPass: true,
      openSrc: require('./image/icon-open-eye.png'),
      closeSrc: require('./image/icon-close-eye.png'),
      // 登录
      loginShow: true,
      formLogin: {
        user: '',
        pass: ''
      },
      rulesLogin: {
        user: [{
          required: true,
          message: '请输入身份证',
          trigger: 'blur'
        } ],
        pass: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        } ]
      },

      // 手机号验证码登录
      phoneLoginShow: false,
      formPhoneLogin: {
        canGetMsg: true,
        second: 30,
        phone: '',
        captcha: '',
        imageUrl: '',
        requestId: '',
        msgCaptcha: '',
        msgValue: '获取验证码'
      },
      rulesPhoneLogin: {
        phone: [{
          required: true,
          validator: (rule, value, callback) => {
            var reg = /^1[34578][0-9]{9}$/
            if (value === '') {
              callback(new Error('请填写手机号码'))
            } else if (!reg.test(value) && value.length <= 11) {
              callback(new Error('请填写正确手机号码'))
            } else if (value.length > 11) {
              callback(new Error('手机号码不能超过11位'))
            } else {
              callback()
            }
          },
          trigger: 'change'
        } ],
        captcha: [{
          required: true,
          validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入图形验证码'))
            } else if (value.length !== 4) {
              callback(new Error('请输入 4 位图形验证码'))
            } else {
              callback()
            }
          },
          trigger: 'blur'
        } ],
        msgCaptcha: [{
          required: true,
          validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入短信验证码'))
            } else if (value.length !== 6) {
              callback(new Error('请输入 6 位短信验证码'))
            } else {
              callback()
            }
          },
          trigger: 'blur'
        } ],
      },

      // 修改
      modifyShow: false,
      formModify: {
        passFirst: '',
        passSecond: ''
      },
      rulesModify: {
        passFirst: [{
          required: true,
          message: '请输入新密码',
          trigger: 'change'
        },
        {
          min: 6,
          max: 16,
          message: '长度为 6 ~ 16 个字符',
          trigger: 'change'
        }
        ],
        passSecond: [{
          required: true,
          validator: (rule, value, callback) => {
            console.log(value)
            if (value == '') {
              callback(new Error('请再次输入密码'))
            } else if (value !== this.formModify.passFirst) {
              callback(new Error('两次输入密码不一致'))
            } else {
              callback()
            }
          },
          trigger: 'change'
        }]
      },

      // 找回密码
      findShow: false,
      formFind: {
        canGetMsg: true,
        second: 30,
        phone: '',
        captcha: '',
        imageUrl: '',
        requestId: '',
        msgCaptcha: '',
        msgValue: '获取验证码'
      },
      rulesFind: {
        phone: [{
          required: true,
          validator: (rule, value, callback) => {
            var reg = /^1[34578][0-9]{9}$/
            if (value === '') {
              callback(new Error('请填写手机号码'))
            } else if (!reg.test(value) && value.length <= 11) {
              callback(new Error('请填写正确手机号码'))
            } else if (value.length > 11) {
              callback(new Error('手机号码不能超过11位'))
            } else {
              callback()
            }
          },
          trigger: 'change'
        } ],
        captcha: [{
          required: true,
          validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入图形验证码'))
            } else if (value.length !== 4) {
              callback(new Error('请输入 4 位图形验证码'))
            } else {
              callback()
            }
          },
          trigger: 'blur'
        } ],
        msgCaptcha: [{
          required: true,
          validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入短信验证码'))
            } else if (value.length !== 6) {
              callback(new Error('请输入 6 位短信验证码'))
            } else {
              callback()
            }
          },
          trigger: 'blur'
        } ],
      }
    }
  },

  mounted () {

  },

  methods: {
    transPass () {
      this.loginPass = !this.loginPass
    },
    // 切换成手机号登录方式
    toPhoneLogin() {
      this.loginShow = false
      this.phoneLoginShow = true
      this.getImgCaptcha('phone')
    },

    // 切换成学号/身份证登录
    toNumberLogin() {
      this.loginShow = true
      this.phoneLoginShow = false
    },

    // 获取图形验证码
    getImgCaptcha(kind) {
      this.Api.getImgCap().then(res => {
        console.log(res)
        if (kind == 'phone') {
          this.formPhoneLogin.imageUrl = res.imageUrl
          this.formPhoneLogin.requestId = res.requestId
        } else if (kind == 'find') {
          this.formFind.imageUrl = res.imageUrl
          this.formFind.requestId = res.requestId
        }
      })
    },
    // 获取短信验证码
    getMsgCaptcha(kind) {
      if (kind == 'phone') {
        var formData = this.formPhoneLogin
      } else if (kind == 'find') {
        var formData = this.formFind
      }

      const phone = formData.phone
      const requestId = formData.requestId
      const code = formData.captcha
      let canGetMsg = formData.canGetMsg

      console.log(canGetMsg)
      if (!canGetMsg) {
        return false
      }

      if (phone == '') {
        this.showToastError('请填写手机号')
      } else if (code == '') {
        this.showToastError('请填写图形验证码')
      } else {
        let data = {
          code: code,
          requestId: requestId,
          phone: phone
        }
        this.Api.getMsgCap(data).then(res => {
          console.log(res)
          this._countDown(kind)
        })
      }

    },
    
    // 倒计时
    _countDown (kind) {
      if (kind == 'phone') {
        let interval = setInterval(() => {
          this.formPhoneLogin.second--
          this.formPhoneLogin.msgValue = this.formPhoneLogin.second + ' s'
          if (this.formPhoneLogin.second < 0) {
            this.formPhoneLogin.msgValue = '重新获取'
            this.formPhoneLogin.canGetMsg = true
            this.formPhoneLogin.second = 30
            clearInterval(interval)
          }
        }, 1000)
      } else if (kind == 'find') {
        let interval = setInterval(() => {
          this.formFind.second--
          this.formFind.msgValue = this.formFind.second + ' s'
          if (this.formFind.second < 0) {
            this.formFind.msgValue = '重新获取'
            this.formFind.canGetMsg = true
            this.formFind.second = 30
            clearInterval(interval)
          }
        }, 1000)
      }
    },
    
    // 学号/身份证登录
    onLoginSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        console.log(valid)
        if (valid) {
          let requestStr = returnFormData({
            username: this.formLogin.user,
            password: this.formLogin.pass
          })
          console.log(requestStr)
          this._commonLogin(requestStr)
          // this.Api.login(requestStr).then(res => {
          //   console.log(res)
          //   window.localStorage.setItem('token', res)
          //   return this.Api.getUserInfo(1)
          // }).then(res => {
          //   console.log(res)
          //   window.localStorage.setItem('userInfo', res)
          //   this.userInfo = res
          //   if (res.passwordType == 0) {
          //     this.loginShow = false
          //     this.modifyShow = true
          //   } else if (res.passwordType == 1) {
          //     this.$emit('cancle')
          //   }
          // })
        } else {
          this.showToastError('必填信息均要符合要求')
          return false
        }
      })
    },

    // 手机号验证码登录公共函数
    _commonLogin(requestStr) {
      this.Api.login(requestStr).then(res => {
        console.log(res)
        window.localStorage.setItem('token', res)
        return this.Api.getUserInfo(1)
      }).then(res => {
        console.log(res)
        window.localStorage.setItem('userInfo', res)
        this.userInfo = res
        if (res.passwordType == 0) {
          this.loginShow = false
          this.modifyShow = true
        } else if (res.passwordType == 1) {
          this.$emit('cancle')
        }
      })
    },

    // 手机号登录
    onPhoneLoginSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let requestStr = returnFormData({
            username: this.formPhoneLogin.phone,
            password: this.formPhoneLogin.msgCaptcha
          })
          console.log(requestStr)
          this._commonLogin(requestStr)
        } else {
          this.showToastError('必填信息均要符合要求')
          return false
        }
      })
    },

    // 修改密码
    onModifySubmit (formName) {
      console.log('修改密码')
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let data = {
            //  modifyPassword
            password: this.formModify.passSecond
          }
          this.Api.modifyPassword(data).then(res => {
            console.log(res)
            this.showToastSuccess('密码修改成功')
            this.loginShow = true
            this.modifyShow = false
            this.findShow = false
            this.$emit('cancle')
          }).catch(err => {
            this.showToastSuccess('密码修改失败')
          })
        } else {
          this.showToastError('必填信息均要符合要求')
          return false
        }
      })
    },

    
    // 关闭登录模块
    cancle () {
      this.$emit('cancle')
    },

    // 点击忘记密码
    bindForget() {
      this.loginShow = false
      this.findShow = true
      this.getImgCaptcha('find')
    },

    // 找回密码
    onFindSubmit () {
      console.log('发送密码到手机')
    },

    // 从找回密码回到登录
    toLogin() {
      this.loginShow = true
      this.findShow = false
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
    top 100px
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
        margin-bottom 30px
        font-weight bold
        display flex
        flex-direction row
        align-items center
        justify-content space-between
        .phone-login
          font-size $size-sub-title
          color $color-news-value
          font-weight bold
          cursor pointer
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
        .forget-text
          text-align right
          font-size $size-news-content
          color rgba(26,26,26,0.3)
          margin-top 22px
        .el-form-item >>> .el-form-item__content
          display flex
          height 45px
          flex-direction row
          align-items center
          border-bottom 1px solid $color-border
          .el-input__inner
            border 0
            outline none
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
          .img-captcha
            width 60px
            height 28px
            cursor pointer
            // background red
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
