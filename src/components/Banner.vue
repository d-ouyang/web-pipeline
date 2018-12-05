<template>
  <el-carousel class="banner" trigger="click" height="570px" arrow="never" :interval='5000'>
    <el-carousel-item class="banner-item" :class="index == 2 ? banner2 : banner1" v-for="(item, index) in details" :key="index">
      <div class="main-content" v-show='index != 2'>
        <el-row type="flex" justify="center" class="banner-content">
          <el-col :span="span" :push="1" tag="div">
            <h1>{{item.name}}</h1>
            <div class="title-line"></div>
            <ul>
              <li>
                <span>{{item.title}}时间</span>
                <p>{{item.duration}}</p>
              </li>
              <li>
                <span>{{item.title}}地点</span>
                <p>{{item.location}}</p>
              </li>
              <li>
                <span>{{item.title}}费用</span>
                <p>￥{{item.price}}</p>
              </li>
              <li>
                <span>{{item.title}}内容</span>
                <p class='description'>{{item.description}}</p>
              </li>
            </ul>
            <div class="btn-group">
              <button class="single-signup" @click="signup(index,'personal',item.type)">立即报名</button>
              <button class="group-signup" @click="signup(index,'compony',item.type)">公司报名</button>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
import { isLogin } from '../common/js/utils'

export default {
  data () {
    return {
      span: 12,
      banner1: 'banner-item1',
      banner2: 'banner-item2',
      details: []
    }
  },
  mounted () {
    this.getDetail()
  },
  methods: {
    getDetail () {
      // let detail1 = this.Api.bannerCourse()
      // let detail2 = this.Api.bannerExam()
      let details = []
      this.Api.bannerCourse().then(res => {
        console.log(res)
        let item1 = this.handleDetail(res[0])
        let item2 = this.handleDetail(res[1])
        details.push(item1,item2,{})
        this.details = details
      })
      // Promise.all([detail1, detail2]).then(list => {
        // list.forEach((res, i) => {
        //   console.log(res)
        //   // details.push(res)
        // })
        // details.push({})
        // console.log(details)
        // this.details = details
      // })
    },
    handleDetail(item) {
      if (item.type == 1) {// 考试
        item.title = '考试'
        item.duration = `${item.examDate}~${item.endDate}`
      } else if (item.type == 2) { // 课程
        item.title = '课程'
        item.duration = `${item.startDate}~${item.endDate}`
      }
      return item
    },
    signup (index, group,type) {
      if (isLogin()) {
        console.log(index, group)

        if (type == 2 && group == 'compony') {
          this.showToastSuccess('敬请期待')
        } else {
          let params = {
            id: this.details[index].id,
            group: group,
            type: type == 1 ? "exam" : "course"
          }
          this.$emit('signup', params)
        }
      } else {
        this.showToastError('报名请先登录')
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../common/stylus/variable.styl';

.banner
  min-height 542px
  .banner-item1
    background-image url('../common/image/bg-blue.png')
    background-size cover
    background-repeat no-repeat
    background-position 50% 50%
  .banner-item2
    background-image url('../common/image/banner2.png')
    background-size cover
    background-repeat no-repeat
    background-position 50% 50%
  .el-carousel__item
    background-color transparent
    .main-content
      position relative
      width 1200px
      left 50%
      transform translateX(-50%)
      height 100%
      display flex
      justify-content center
      .banner-content
        width 100%
        height 100%
        div
          height 100%
          display flex
          flex-direction column
          align-items center
          h1
            font-size $size-title
            line-height 37px
            color $color-normal
            font-weight 500
            margin 69px 0 40px
          .title-line
            width 40px
            height 4px
            border-radius 3px
            background-color $color-normal
            margin-bottom 35px
          ul
            font-size $size-nav-text
            color $color-normal
            font-weight 500
            margin-bottom 63px
            li
              display flex
              flex-direction row
              line-height 25px
              margin-bottom 20px
              span
                margin-right 97px
              p
                max-width 420px
              .description
                overflow hidden
                text-overflow ellipsis
                display -webkit-box
                -webkit-line-clamp 2
                -webkit-box-orient vertical
                
          .btn-group
            width 100%
            height 56px
            display flex
            flex-direction row
            button
              width 190px
              height 56px
              border-radius 8px
              border 2px solid $color-normal
              box-shadow box-shadow(0 11px 14px 0 rgba(0, 0, 0, 0.12))
              font-size 20px
              line-height 52px
              text-align center
              cursor pointer
            .single-signup
              background-color $color-normal
              color $color-nav-active
              margin-right 110px
            .group-signup
              background-color transparent
              color $color-normal

</style>
