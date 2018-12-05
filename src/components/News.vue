<template>
  <div class="news">
    <el-row type="flex" justify="space-around">
      <el-col :span="8">
        <o-entrance v-on:signup='bindSignup'></o-entrance>
        <!-- <el-row class="entrance">
          <div>
            <h2>
              <img src="../common/image/entrance.png" alt="">
              <span>考试信息</span>
            </h2>
            <button>立即报名</button>
          </div>
          <ul>
            <li>
              <span>考试名称</span>
              <p>D2资格考</p>
            </li>
            <li>
              <span>考试时间</span>
              <p>2018年10月20日~10月27日</p>
            </li>
            <li>
              <span>考试地点</span>
              <p class="address">上海市.浦东新区.浦东南路500号 41楼</p>
            </li>
            <li>
              <span>考试费用</span>
              <p>￥380元</p>
            </li>
          </ul>
          <p>
            <span>公司报名入口</span>
            <img src="../common/image/entrance-g.png" alt="">
          </p>
        </el-row> -->
      </el-col>
      <el-col :span="8">
        <el-row class="news-item">
          <div>
            <h2>
              <img src="../common/image/industry.png" alt="">
              <span>行业动态</span>
            </h2>
            <!-- <i class="el-icon-arrow-right"></i> -->
          </div>
          <ul>
            <li>
              <a target="_blank" href="http://www.chinapipe.net/news/2018/65224.html">重庆渝中区采用CIPP内衬修复技术对污水管网进行加固</a>
              <span>2018/11/29</span>
            </li>
            <li>
              <a target="_blank" href="http://www.chinapipe.net/gas/2018/3469.html">西气东输西二线樟树-湘潭支干线醴陵压气站项目预计年底投产</a>
              <span>2018/11/28</span>
            </li>
            <li>
              <a target="_blank" href="http://www.chinapipe.net/water/2018/14934.html">南水北调东线山东干线枣庄局组织开展2018年度消防培训和消防演练活动</a>
              <span>2018/11/26</span>
            </li>
          </ul>
        </el-row>
      </el-col>
      <el-col :span="8">
        <el-row class="news-item">
          <div>
            <h2>
              <img src="../common/image/tenders.png" alt="">
              <span>招标咨询</span>
            </h2>
            <!-- <i class="el-icon-arrow-right"></i> -->
          </div>
          <ul>
            <li>
              <a target="_blank" href="http://www.chinapipe.net/project/d1342946.html">中国一冶鄂州市江碧路雨污分流改造项目寿昌大道西段污水管道工程招标</a>
              <span>2018/11/29</span>
            </li>
            <li>
              <a target="_blank" href="http://www.chinapipe.net/project/d1342862.html">郑州市东、南四环高压燃气管道改迁工程非开挖工程施工项目招标公告</a>
              <span>2018/11/28</span>
            </li>
            <li>
              <a target="_blank" href="http://www.chinapipe.net/project/d1336306.html">中煤鄂尔多斯能源化工有限公司带压堵漏、带压开孔、带压封堵维修项目招标公告</a>
              <span>2018/11/15</span>
            </li>
          </ul>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import OEntrance from './Entrance.vue'

export default {
  components: {
    OEntrance
  },
  data () {
    return {

    }
  },
  methods: {
    bindSignup (params) {
      this.$emit('signup', params)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../common/stylus/variable.styl'
.news
  max-width 1200px;
  position relative
  left 50%
  transform translateX(-50%)
  display flex
  justify-content center
  margin 52px 36px
  .el-row
    width 100%
    padding 0 10px
    .el-col
      min-height 278px
      &:nth-child(2)
        margin 0 10px
      .news-item
        width 100%
        height 100%
        padding 0 16px
        position relative
        box-sizing('border-box')
        border-radius(8px)
        background-color #ffffff
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
        ul
          li
            display flex
            align-items baseline
            justify-content space-between
            padding 22px 0
            border-bottom 1px solid $color-list-border
            a
              cursor pointer
              display inline-block
              width 75%
              color $color-news-value
              font-size $size-news-content
              text-overflow: ellipsis
              overflow: hidden
              white-space: nowrap
            span
              color $color-news-key
              font-size $size-news-date
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
              width 70%
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
