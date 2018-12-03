<template>
  <div class="container">
    <el-header height='76px'>
      个人信息
    </el-header>
    <el-main>
      <div class="info-box">
        <p v-for="item in userInfo" :key='item.key'>
          <span class="info-key">{{item.key}}</span>
          <span class="info-value">{{item.value}}</span>
        </p>
      </div>
      <div class="btn-box">
        <el-button @click="exit">退出账号</el-button>
      </div>
  
    </el-main>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userInfo: {
          phone: {
            key: '手机号',
            value: ''
          },
          name: {
            key: '姓名',
            value: ''
          },
          number: {
            key: '学号',
            value: ''
          },
          gender: {
            key: '性别',
            value: ''
          },
          IDcard: {
            key: '身份证号',
            value: ''
          },
          compony: {
            key: '所属公司',
            value: ''
          }
        }
      }
    },
    mounted() {
      this.getUserInfo()
    },
    methods: {
      getUserInfo() {
        this.Api.getUserInfo(1).then(res => {
          console.log(res)
          let userInfo = res
          this.userInfo.phone.value = userInfo.phone
          this.userInfo.name.value = userInfo.name
          this.userInfo.number.value = userInfo.userId
          this.userInfo.gender.value = this._returnGender(userInfo.gender)
          this.userInfo.IDcard.value = userInfo.idNumber
          this.userInfo.compony.value = userInfo.companyName
        })
      },
  
      _returnGender(gender) {
        if (gender == 1) {
          return '男'
        } else if (gender == 2) {
          return '女'
        } else if (gender == 3) {
          return '其它'
        }
      },

      // 退出
      exit() {
        window.localStorage.clear()
        // this.$router.push('/home')
        this.$emit('exit')
      }
  
    }
  }
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable.styl'
@import '../../common/stylus/mixin.styl'

.container
  width 100%
  max-width 1000px
  background-color $color-normal
  border-radius(8px)
  .el-header
    line-height 76px
    font-size $size-nav-text
    font-weight 400
    color $color-news-value
    border-bottom 2px solid $color-border
  .el-main
    .info-box
      padding 8px 30px
      p
        display flex
        align-items center
        margin-bottom 20px
        .info-key
          width 58px
          text-align right
          font-size $size-sub-title
          color $color-td-name-text
          font-weight 400
          margin-right 34px
        .info-value
          font-size $size-sub-title
          color $color-td-value-text
          font-weight bold
    .btn-box
      display flex
      flex-direction column
      align-items center
      margin-top 50px
      .el-button
        width 290px
        height 48px
        border-radius(8px)
        background-color $color-nav-active
        color $color-normal
        font-size $size-nav-text
        font-weight bold


</style>
