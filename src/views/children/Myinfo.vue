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
        <el-button>退出账号</el-button>
      </div>
      
    </el-main>
  </div>
</template>
<script>
export default {
  data () {
    return {
      userInfo: {
        account: {
          key: '账号',
          value: 'ray_6677'
        },
        phone: {
          key: '手机号',
          value: '13816776171'
        },
        name: {
          key: '姓名',
          value: '欧阳'
        },
        number: {
          key: '学号',
          value: '12084873982'
        },
        sex: {
          key: '性别',
          value: '男'
        },
        IDcard: {
          key: '身份证号',
          value: '330382199403075555'
        },
        compony: {
          key: '所属公司',
          value: '上海市第二工程有限公司'
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable.styl'
@import '../../common/stylus/mixin.styl'

.container
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
        width 362px
        height 68px
        border-radius(8px)
        background-color $color-nav-active
        color $color-normal
        font-size $size-nav-text
        font-weight bold


</style>
