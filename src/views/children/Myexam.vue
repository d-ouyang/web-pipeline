<template>
  <div class="container">
    <el-tabs type="border-card">
      <el-tab-pane label="全部考试">
        <el-table :stripe='true' :data="tableDataAll" style="width: 100%" height="600" @cell-click='selectRow'>
          <el-table-column fixed prop="curriculmName" label="考试名称">
          </el-table-column>
          <el-table-column prop="startDate" label="考试时间">
          </el-table-column>
          <el-table-column prop="statusText1" label="当前状态">
          </el-table-column>
          <el-table-column prop="statusText2" label="">
          </el-table-column>
          <el-table-column prop="" label="" width="40">
            <template slot-scope="scope">
              <i class="el-icon-arrow-right"></i>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="审核中">配置管理</el-tab-pane>
      <el-tab-pane label="等待考试">角色管理</el-tab-pane>
      <el-tab-pane label="考试结果">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableDataAll: [],
        tableDataPart1:[],
        tableDataPart2:[],
        tableDataPart3:[],

        // 测试数组
        testArr:[{
          orderId: 18,
          userExamId: 3,
          userId: 2,
          examId: 9,
          examName: '压力管道培训A',
          payAt:null,
          bookAt:"2018-09-19T07:36:23",
          status: 2,
          graduation: '123.png',
          quality: '456.png',
          price: 0.01,
          registerNumber:'2938487625267',
          examStatus:2,
          examGrade: 70,
          examResult:'未通过',
          examSeat: '24',
          examRoom: 'D101',
          examDate:"2018-09-29T10:10:10",
          examDateDay:"2018-09-29",
          examDateTime:"10:10:10",
          location: '徐汇商务大厦'
        },{
          orderId: 19,
          userCurriculmId: 3,
          userId: 2,
          curriculmId: 19,
          curriculmName: '压力管道培训B',
          payAt:null,
          bookAt:"2018-09-19T07:36:23",
          status: 1,
          price: 0.01,
          startDate:"2018-09-29",
          location: '徐汇商务大厦哈哈哈'
        }]
      }
    },
    mounted() {
      this.getMyexams()
    },
    methods: {
      selectRow(row, column, cell, event) {
        console.log(row)
        console.log(column)
        console.log(cell)
      },
      getMyexams() {
        this.Api.getUserInfo(1).then(res => {
          return this.Api.getPersonalExams(res.id)
        }).then(res => {
          // console.log(res)
          this._handleArr(res)
        })
      },
      _handleArr(arr) {
        let dataAll = []
        let dataPart1 = []
        let dataPart2 = []
        let dataPart3 = []
        for (let i in arr) {
          console.log(arr[i])
        }
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
  .el-tabs--border-card
    border 0
    box-shadow(none)
  .el-tabs >>> .el-tabs__header
    border-bottom 0
    background-color $color-normal
    // background-color $color-tab-header-bg
    .el-tabs__nav
      width 100%
      display flex
      flex-direction row
      float none
      .el-tabs__item
        border 0
        width 26%
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

