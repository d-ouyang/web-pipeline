<template>
  <div class="register">
    <el-row class="register-box">
      <img class="register-box-bg" src="../common/image/register.png" alt="">
      <h2 class="register-header">注册账号</h2>

      <el-form class="form" status-icon ref="form" :model="form" :rules="rules" :label-position="labelPosition">
        <div class="form-model form-left">
          <el-form-item label="真实姓名" prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="passStart">
            <el-input type="password" v-model="form.passStart"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="passEnd">
            <el-input type="password" v-model="form.passEnd"></el-input>
          </el-form-item>

          <el-form-item label="手机号" prop="phone">
            <el-input maxlength="11" v-model="form.phone"></el-input>
          </el-form-item>

          <el-form-item class="captcha-item" label="图形验证码" prop="captcha">
            <el-input maxlength="4" class="captcha" v-model="form.captcha"></el-input>
            <el-tooltip class="item" effect="dark" content="点击更换图形验证码" placement="right-start">
              <img @click="getImgCaptcha" class="img-captcha" :src="IMG_BASE_URL+imgCaptcha.imageUrl" alt="">
            </el-tooltip>

          </el-form-item>

          <el-form-item class="captcha-item" label="短信验证码" prop="msgCaptcha">
            <el-input class="captcha" v-model="form.msgCaptcha"></el-input>
            <el-tooltip class="item" effect="dark" content="优先填写手机号和图形验证码" placement="right-start">
              <span class="get-captcha" @click="getMsgCaptcha">{{msgValue}}</span>
            </el-tooltip>
          </el-form-item>

          <el-form-item class="submit-btn">
            <el-button type="primary" @click="onSubmit('form')">立即注册</el-button>
          </el-form-item>
        </div>
        <div class="form-model form-right">
          <el-form-item label="身份证号码" prop="idCard">
            <el-input v-model="form.idCard"></el-input>
          </el-form-item>

          <el-form-item label="公司（若没记录选择其他）" prop="company">
            <el-select v-model="form.company" placeholder="请选公司" clearable @change='selectChange'>
              <el-option v-for="(item, index) in form.companys" :key="item.id" :label="item.name" :value="index">
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="性别" prop="gender">
            <el-radio-group v-model="form.gender">
              <el-radio label="1">男</el-radio>
              <el-radio label="2">女</el-radio>
              <el-radio label="3">其它</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>
      </el-form>

      <div class="clause">
        <p class="clause-link">
          <span>注册表示您已同意管道e生</span>
          <a href="javascript:;" @click="bindService">服务条款</a>
          <span> 和 </span>
          <a href="javascript:;" @click="bindService">隐私政策</a>
        </p>
        <p class="clause-login">
          <span>已有账号？</span>
          <router-link class="login" to='/home' tag="div">立即登录</router-link>
        </p>
      </div>

    </el-row>
    <o-footer></o-footer>
    <o-service v-show="showService" v-on:cancle='bindCancle'></o-service>
  </div>
</template>

<script>
import OFooter from '@/components/Footer.vue'
import OService from '@/components/Service'
import {
  config
} from '../api/config'

export default {
  components: {
    OFooter,
    OService
  },

  data () {
    var validatePhone = (rule, value, callback) => {
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
    }
    var validateIdCard = (rule, value, callback) => {
      var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
      if (value === '') {
        callback(new Error('请填写身份证号码'))
      } else if (!reg.test(value)) {
        callback(new Error('请填写正确的身份证号码'))
      } else {
        callback()
      }
    }
    return {
      showService: false,
      imgCaptcha: {
        imageUrl: '',
        requestId: ''
      },
      second: 30,
      IMG_BASE_URL: config.IMG_BASE_URL,
      canGetMsg: true,
      msgValue: '获取验证码',
      labelPosition: 'top',
      form: {
        name: '',
        passStart: '',
        passEnd: '',
        phone: '',
        captcha: '',
        msgCaptcha: '',
        company: '',
        companys: [],
        idCard: '',
        gender: '1',
        type: 3

      },
      rules: {
        name: [{
          required: true,
          message: '请输入真实姓名',
          trigger: 'change'
        },
        {
          min: 2,
          max: 4,
          message: '长度在 2 到 4 个汉字',
          trigger: 'change'
        }
        ],
        passStart: [{
          required: true,
          message: '请输入密码',
          trigger: 'change'
        },
        {
          min: 8,
          max: 24,
          message: '长度为 8 ~ 24 个字符',
          trigger: 'change'
        }
        ],
        passEnd: [
          {
            required: true,
            validator: (rule, value, callback) => {
              console.log(value)
              if (value == '') {
                callback(new Error('请再次输入密码'))
              } else if (value !== this.form.passStart) {
                callback(new Error('两次输入密码不一致'))
              } else {
                callback()
              }
            },
            trigger: 'change'
          }
        ],
        phone: [{
          required: true,
          validator: validatePhone,
          trigger: 'change'
        }],
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
          trigger: 'change'
        }],
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
        }],
        company: [{
          required: true,
          validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请选择公司'))
            } else {
              callback()
            }
          },
          trigger: 'change'
        }],
        idCard: [{
          required: true,
          validator: validateIdCard,
          trigger: 'change'
        }],
        gender: [{
          required: true,
          trigger: 'change'
        }]
      }
    }
  },

  created () {

  },
  mounted () {
    this.getImgCaptcha()
    this.getCompanys()
  },

  computed: {

  },

  methods: {
    // 选择框
    selectChange (index) {
      if (this.form.companys[index].name == '其它') {
        this.$prompt('请输入公司', '备注', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(({
          value
        }) => {
          console.log(value)
          if (value) {
            this.form.companys[index].name = value
          }
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          })
        })
      }
    },
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        console.log(valid)
        if (valid) {
          let form = this.form
          let data = {
            name: form.name,
            companyId: form.companys[form.company].id,
            companyName: form.companys[form.company].name,
            code: form.msgCaptcha,
            idNumber: form.idCard,
            phone: form.phone,
            password: form.passEnd,
            type: form.type,
            gender: form.gender
          }
          console.log(data)
          this.Api.register(data).then(res => {
            console.log(res)
            this.$router.push({
              path: '/home'
            })
          })
        } else {
          this.showToastError('必填信息均要符合要求')
          return false
        }
      })
    },
    getCompanys () {
      this.Api.getCompanys().then(res => {
        console.log(res)
        this.form.companys = res
      })
    },
    getImgCaptcha () {
      this.Api.getImgCap().then(res => {
        console.log(res)
        this.imgCaptcha = res
      }).catch(err => {

      })
    },
    _countDown () {
      let interval = setInterval(() => {
        this.second--
        this.msgValue = this.second + ' s'
        if (this.second < 0) {
          this.msgValue = '重新获取'
          this.canGetMsg = true
          this.second = 30
          clearInterval(interval)
        }
      }, 1000)
    },
    getMsgCaptcha () {
      if (this.canGetMsg) {
        const phone = this.form.phone
        const requestId = this.imgCaptcha.requestId
        const code = this.form.captcha

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
            this._countDown()
          })
        }
      } else {

      }
    },
    // 隐私条款
    bindService () {
      this.showService = true
    },
    bindCancle () {
      this.showService = false
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
      z-index -1
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
          .img-captcha
            width 60px
            height 28px
            margin-left 20px
            vertical-align middle
            cursor pointer
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
      width 300px
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
