<template>
  <el-container>
    <el-header height='300px'>
      <h3>最新2019年 D3 冲刺班现已火热开班</h3>
      <p>学习掌握压力容器管道的低压、中压、高压、超高压焊接技术和工艺，掌握各种焊接工艺；掌握单面焊双面成形工艺，掌握组合焊技术和各类管道的焊接。</p>
    </el-header>
    <el-container>
      <el-main>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="综合" name="first">
            <ul class="list">
              <li class="item" v-for="(item, index) in [1,2,3,4,5]" :key='index'>
                <div class="item-info">
                  <div class="item-img">
                    <h4>压力管道巡检维护D1</h4>
                    <p>冲刺班</p>
                  </div>
                  <div class="item-info-detail">
                    <div class="detail-top">
                      <h4>压力管道巡检维护D1【10月班】</h4>
                      <p>商务印书馆独家授权，从零起步，零基础高压管道就选它！四大讲师轮流授课，近二十年的丰富行业经验</p>
                    </div>
                    <div class="detail-bottom">
                      <h4>￥5,900</h4>
                      <p>报名时间：2018年12月01日-2019年01月01日</p>
                    </div>
                  </div>
                </div>
                <el-button @click="bindSignUp">立即报名</el-button>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane name="second">
            <span slot="label">人气 <i class="el-icon-date"></i></span>
            
          </el-tab-pane>
          <el-tab-pane name="third">
            <span slot="label">价格 <i class="el-icon-date"></i></span>

          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      activeName: 'first'
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    bindSignUp() {
      this.$router.push({path: '/signup/personal'})
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../common/stylus/variable.styl'
@import '../common/stylus/mixin.styl'

.el-container
  .el-header
    padding 0
    background #3676FD
    color $color-normal
    display flex
    flex-direction column
    align-items center
    h3
      font-size $size-list-title
      font-weight 500
      margin-bottom 30px
      margin-top 102px
    p 
      width 100%
      max-width 690px
      line-height 1.5
      font-size $size-news-btn
      text-align center
  .el-container
    padding-top 60px
    .el-main
      width 100%;
      max-width 1200px
      position relative
      left 50%
      transform translateX(-50%)
      padding 0
      background-color $color-normal
      border-radius(8px)
      .el-tabs >>> .el-tabs__header
        margin 0
        .el-tabs__nav-wrap
          padding 0 20px
          &::after
            height 1px
          .el-tabs__item
            height 54px
            line-height 54px
      .el-tabs >>> .el-tabs__content
        .list
          .item
            display flex
            flex-direction row
            align-items flex-end
            justify-content space-between
            padding 30px 20px
            border-bottom 1px solid $color-border
            .item-info
              display flex
              .item-img
                width 250px
                height 140px
                position relative
                margin-right 30px
                background-color $color-nav-active
                display flex
                flex-direction column
                align-items center
                justify-content center
                color $color-normal
                h4
                  font-size $size-nav-text
                  font-weight 400
                  margin-bottom 12px
                p
                  font-size $size-sub-title
                  font-weight 400
              .item-info-detail
                height 140px
                max-width 590px
                display flex
                flex-direction column
                justify-content space-between
                .detail-top
                  h4
                    font-size $size-news-btn
                    color $color-td-value-text
                    font-weight 400
                    margin-bottom 12px
                  p
                    font-size $size-sub-title
                    color $color-sub-title
                    line-height 1.5
                .detail-bottom
                  h4
                    font-size $size-sub-title
                    color $color-nav-active
                    margin-bottom 6px
                  p
                    font-size $size-sub-title
                    color $color-sub-title
            .el-button
              padding 10px 22px


      
</style>


