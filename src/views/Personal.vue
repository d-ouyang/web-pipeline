<template>
  <div>
    <el-container>
      <el-main>
        <el-aside width="190px">
          <el-menu class="el-menu-vertical-demo">
            <el-menu-item index="1">
              <router-link class="p-link" slot="title" to="/personal/myexam" tag="div"><i class="el-icon-menu"></i>我的考试</router-link>
            </el-menu-item>
            <el-menu-item index="2">
              <router-link class="p-link" slot="title" to="/personal/mycourse" tag="div"><i class="el-icon-document"></i>我的课程</router-link>
            </el-menu-item>
            <el-menu-item index="3">
              <router-link class="p-link" slot="title" to="/personal/myinfo" tag="div"><i class="el-icon-setting"></i>个人信息</router-link>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <div class="content">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
    <o-footer></o-footer>
    <o-login v-show="showLogin" v-on:cancle='bindCancle'></o-login>
  </div>
</template>

<script>
  import OFooter from '@/components/Footer.vue'
  import OLogin from '@/components/Login.vue'
  
  export default {
    props: {
      showLogin:Boolean
    },
    mounted() {
      this.Api.getUserInfo(1).then(res => {
        console.log(res)
      }).catch(err => {
        this.showLogin = true
      })
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      bindCancle() {
        console.log('取消')
        this.$emit('cancle')
      }
    },
    components: {
      OFooter,
      OLogin
    }
  }
</script>

<style lang="stylus" scoped>
@import '../common/stylus/variable.styl'
@import '../common/stylus/mixin.styl'

.el-container
  padding-top 60px
  margin-bottom 102px
  .el-main
    width 100%
    max-width 1200px
    position relative
    left 50%
    transform translateX(-50%)
    padding 0
    display flex
    .el-aside
      height 770px
      background-color $color-normal
      border-radius(8px)
      margin-right 10px
      .el-menu
        border-right 0
        .el-menu-item
          .p-link
            display flex
            align-items center
          .router-link-active
            color $color-nav-active
            i 
              color $color-nav-active
    .content
      width 100%
      max-width 1000px
      background-color $color-normal
      border-radius(8px)
</style>


