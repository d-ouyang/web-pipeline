<template>
  <div>
    <el-container>
      <el-header height='300px'>
        <h3>最新2019年 D3 冲刺班现已火热开班</h3>
        <p>学习掌握压力容器管道的低压、中压、高压、超高压焊接技术和工艺，掌握各种焊接工艺；掌握单面焊双面成形工艺，掌握组合焊技术和各类管道的焊接。</p>
      </el-header>
      <el-container>
        <el-main>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="全部" name="overall">
              <ul class="list">
                <li class="item" v-for="(item, index) in courses" :key='index'>
                  <div class="item-info">
                    <div class="item-img">
                      <h4>{{item.name}}</h4>
                      <p>冲刺班</p>
                      <img :src="item.src" alt="">
                    </div>
                    <div class="item-info-detail">
                      <div class="detail-top">
                        <h4>{{item.name}}</h4>
                        <p>{{item.description}}</p>
                      </div>
                      <div class="detail-bottom">
                        <h4>￥{{item.price}}</h4>
                        <p>报名时间：{{item.startDate}}-{{item.endDate}}</p>
                      </div>
                    </div>
                  </div>
                  <el-button @click="bindSignUp(index)">立即报名</el-button>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane name="heat">
              <span slot="label">人气 
                <!-- <i class="el-icon-sort-down"></i> -->
              </span>
              <ul class="list">
                <li class="item" v-for="(item, index) in courses" :key='index'>
                  <div class="item-info">
                    <div class="item-img">
                      <h4>{{item.name}}</h4>
                      <p>冲刺班</p>
                      <img :src="item.src" alt="">
                    </div>
                    <div class="item-info-detail">
                      <div class="detail-top">
                        <h4>{{item.name}}</h4>
                        <p>{{item.description}}</p>
                      </div>
                      <div class="detail-bottom">
                        <h4>￥{{item.price}}</h4>
                        <p>报名时间：{{item.startDate}}-{{item.endDate}}</p>
                      </div>
                    </div>
                  </div>
                  <el-button @click="bindSignUp(index)">立即报名</el-button>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane name="price">
              <span slot="label">价格 
                <!-- <i class="el-icon-d-caret"></i> -->
              </span>
              <ul class="list">
                <li class="item" v-for="(item, index) in courses" :key='index'>
                  <div class="item-info">
                    <div class="item-img">
                      <h4>{{item.name}}</h4>
                      <p>冲刺班</p>
                      <img :src="item.src" alt="">
                    </div>
                    <div class="item-info-detail">
                      <div class="detail-top">
                        <h4>{{item.name}}</h4>
                        <p>{{item.description}}</p>
                      </div>
                      <div class="detail-bottom">
                        <h4>￥{{item.price}}</h4>
                        <p>报名时间：{{item.startDate}}-{{item.endDate}}</p>
                      </div>
                    </div>
                  </div>
                  <el-button @click="bindSignUp(index)">立即报名</el-button>
                </li>
              </ul>
            </el-tab-pane>
          </el-tabs>
        </el-main>
      </el-container>
    </el-container>
    <o-footer></o-footer>
    <o-login v-show="showLogin" v-on:cancle='bindCancle'></o-login>
  </div>
</template>

<script>
import OFooter from '@/components/Footer.vue'
import OLogin from '@/components/Login.vue'
import {
  Loading
} from 'element-ui'
import {
  isLogin
} from '../common/js/utils'

export default {
  components: {
    OFooter,
    OLogin
  },
  props: {
    showLogin: Boolean
  },
  data () {
    return {
      activeName: 'overall',
      courses: [],
      typeOneSrc: '',
      typeTwoSrc: '',
      firstHeatClick: true, // 表示还没点或者说第一次点
      firstPriceClick: true // 表示还没点或者说第一次点
    }
  },
  mounted () {
    this.getCourse('overall')
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab)
      console.log(tab.name)
      console.log(this.activeName)
      console.log(this.firstPriceClick)
      this.courses = []
      this.getCourse(tab.name)
    },
    bindSignUp (index) {
      if (isLogin()) {
        console.log(index)
        this.$router.push({
          name: 'signup',
          params: {
            group: 'personal',
            type: 'course',
            id: this.courses[index].id
          }
        })
      } else {
        this.showToastError('报名请先登录')
      }
    },
    bindCancle () {
      console.log('取消')
      this.$emit('cancle')
    },
    getCourse (str) {
      // const loading = this.$loading({
      //   lock: true,
      //   text: 'Loading',
      //   spinner: 'el-icon-loading',
      //   background: 'rgba(0, 0, 0, 0.7)'
      // });
      console.log(str)
      this.Api.getCourse({
        sortType: str
      }).then(res => {
        // this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
        //   loading.close();
        // });
        console.log(res)
        this._handleCourse(res)
      }).catch(err => {
        // this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
        //   loading.close();
        // });
      })
    },
    _handleCourse (arr) {
      for (let i in arr) {
        arr[i].startDate = this._handleDate(arr[i].startDate)
        arr[i].endDate = this._handleDate(arr[i].endDate)
        if (arr[i].type == 1) {
          arr[i].src = require('../common/image/course1.png')
        } else if (arr[i].type == 2) {
          arr[i].src = require('../common/image/course2.png')
        } else {
          arr[i].src = require('../common/image/course-default.png')
        }
      }
      this.courses = arr
    },
    _handleDate (str) {
      if (str == null) {
        return ''
      } else {
        let arr = str.split('-')
        return arr[0] + '年' + arr[1] + '月' + arr[2] + '日'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../common/stylus/variable.styl'
@import '../common/stylus/mixin.styl'

.el-container
  margin-bottom 102px
  .el-header
    padding 0
    background url('../common/image/course-bg.png') 0 0 no-repeat
    background-size cover
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
                // background-color $color-nav-active
                display flex
                flex-direction column
                align-items center
                justify-content center
                color $color-normal
                h4
                  font-size $size-nav-text
                  font-weight 400
                  margin-bottom 12px
                  text-align center
                  width 80%
                p
                  font-size $size-sub-title
                  font-weight 400
                img
                  position absolute
                  left 0
                  top 0
                  z-index -1
                  width 250px
                  height 140px
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
                    overflow hidden
                    text-overflow ellipsis
                    display -webkit-box
                    -webkit-line-clamp 3
                    -webkit-box-orient vertical
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
