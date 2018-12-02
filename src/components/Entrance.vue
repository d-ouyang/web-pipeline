<template>
  <el-row class="entrance">
    <div>
      <h2>
        <img src="../common/image/entrance.png" alt="">
        <span>考试信息</span>
      </h2>
      <button @click="signup('personal')">立即报名</button>
    </div>
    <ul>
      <li>
        <span>考试名称</span>
        <p>{{detail.name}}</p>
      </li>
      <li>
        <span>考试时间</span>
        <p>{{detail.examDate}}</p>
      </li>
      <li>
        <span>考试地点</span>
        <p class="address">{{detail.location}}</p>
      </li>
      <li>
        <span>考试费用</span>
        <p>￥{{detail.price}}</p>
      </li>
    </ul>
    <p @click="signup('compony')">
      <span>公司报名入口</span>
      <img src="../common/image/entrance-g.png" alt="">
    </p>
  </el-row>
</template>

<script>
  import {
    isLogin
  } from '../common/js/utils'
  
  export default {
    data() {
      return {
        detail: {}
      }
    },
    mounted() {
      this.getExamDetail()
    },
    methods: {
      getExamDetail() {
        this.Api.getExamDeatil(4).then(res => {
          this.detail = res
        })
      },
      signup(group) {
        if (isLogin()) {
          let params = {
            id: this.detail.id,
            group: group,
            type: 'exam'
          }
          // console.log(params)
          this.$emit('signup', params)
        } else {
          this.showToastError('报名请先登录')
        }
  
      }
    }
  }
</script>

<style lang="stylus" scoped>
@import '../common/stylus/variable.styl'
@import '../common/stylus/mixin.styl'

.entrance
  width 100%
  height 100%
  padding 0 16px
  position relative
  box-sizing('border-box')
  border-radius(8px)
  background-color $color-normal
  div
    display flex
    align-items center
    justify-content space-between
    padding 16px 0 14px
    border-bottom 2px solid $color-border
    h2
      display flex
      align-items center
      img 
        width 30px
        height 30px
        margin-right 4px
      span 
        font-size $size-news-title
        color $color-news-title
        font-weight 500
        line-height 1.0
    button 
      height 32px
      border 2px solid $color-nav-active
      color $color-nav-active
      font-size $size-news-btn
      border-radius(16px)
      padding 0 19px
      cursor pointer
  ul
    margin-top 24px
    margin-bottom 28px
    li
      font-size $size-news-content
      line-height 1.0
      margin-bottom 24px
      &:last-child
        margin-bottom 0
      span 
        color $color-news-key
        margin-right 28px
      p
        display inline-block
        color $color-news-value
      .address
        width 65%
        no-wrap()
  p
    display flex
    flex-direction row-reverse
    align-items center
    cursor pointer
    img 
      width 15px
      height 17px
      margin-right 4px
    span 
      font-size $size-news-content
      color $color-nav-active
      line-height 1.0
</style>


