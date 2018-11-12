<template>
  <div class="news">
    <el-row type="flex" justify="space-around">
      <el-col :span="8">
        <o-entrance></o-entrance>
      </el-col>
      <el-col :span="8" v-for="item in news" :key="item.title">
        <o-news-item></o-news-item>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import OEntrance from './Entrance.vue'
import ONewsItem from './NewsItem.vue'

export default {
  components: {
    OEntrance,
    ONewsItem
  },
  data () {
    return {
      news:[
        {
          title: "行业动态",
          src: require("../common/image/industry.png")
        },
        {
          title: "招标咨询",
          src: require("../common/image/tenders.png")
        }
      ]
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
</style>


