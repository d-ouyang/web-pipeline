<template>
  <div class="container">
    <el-tabs type="border-card">
      <el-tab-pane label="全部课程">
        <el-table stripe='true' :data="tableData3" style="width: 100%" height="698">
          <el-table-column fixed prop="name" label="考试名称">
          </el-table-column>
          <el-table-column prop="date" label="考试时间">
            <template slot-scope="scope">
              <p style="font-weight: bold;">{{ scope.row.date.date }}</p>
              <p>{{ scope.row.date.time }}</p>
            </template>
          </el-table-column>
          <el-table-column prop="status" label="当前状态">
          </el-table-column>
          <el-table-column prop="result" label="">
            <template slot-scope="scope">
              <span style="margin-right: 36px;font-weight:bold;">{{ scope.row.result }}</span>
              <i class="el-icon-time"></i>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="待开课">待开课</el-tab-pane>
      <el-tab-pane label="已结业">已结业</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData3: [{
          name: '管道 D3 考试',
          date: {
            date: '2018年10月11日',
            time: '16:30 ~ 18:00'
          },
          status: '已付款',
          result: '等待审核中'
        }, {
          name: '管道 D3 考试',
          date: {
            date: '2018年10月11日',
            time: '16:30 ~ 18:00'
          },
          status: '已付款',
          result: '等待审核中'
        }, {
          name: '管道 D3 考试',
          date: {
            date: '2018年10月11日',
            time: '16:30 ~ 18:00'
          },
          status: '已付款',
          result: '等待审核中'
        }, {
          name: '管道 D3 考试',
          date: {
            date: '2018年10月11日',
            time: '16:30 ~ 18:00'
          },
          status: '已付款',
          result: '等待审核中'
        }, {
          name: '管道 D3 考试',
          date: {
            date: '2018年10月11日',
            time: '16:30 ~ 18:00'
          },
          status: '已付款',
          result: '等待审核中'
        }]
      }
    }
  }
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable.styl'
@import '../../common/stylus/mixin.styl'

.container 
  .el-tabs--border-card
    border 0
    box-shadow(none)
  .el-tabs >>> .el-tabs__header
    border-bottom 0
    background-color $color-normal
    .el-tabs__nav
      width 100%
      display flex
      flex-direction row
      float none
      .el-tabs__item
        border 0
        width 34%
        height 72px
        line-height 72px
        text-align center
        font-size $size-news-btn
        color $color-sub-title
        font-weight 500
        background-color $color-tab-header-bg
      .is-active
        background-color $color-normal
        color $color-nav-active
  .el-tabs >>> .el-tabs__content
    padding 50px
    .el-tab-pane
      .el-table::before
        height 0
      .el-table .el-table__fixed::before
        height 0
      .el-table
        th
          text-align center
          font-size $size-sub-title
          color $color-upload-border
          .cell
            line-height 46px
            font-weight bold
        td
          text-align center
          font-size $size-news-btn
          color $color-td-value-text
          height 96px
          .cell
            font-weight bold
        
</style>

