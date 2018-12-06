<template>
  <div class="container">
    <el-tabs type="border-card">
      <el-tab-pane label="全部课程">
        <el-table :stripe='true' :data="tableDataAll" style="width: 100%" height="600" @cell-click='selectRow'>
          <el-table-column fixed prop="curriculumName" label="课程名称">
          </el-table-column>
          <el-table-column prop="startDate" label="开课时间">
          </el-table-column>
          <el-table-column prop="location" label="开课地址">
          </el-table-column>
           <el-table-column prop="statusText" label="">
            <template slot-scope="scope">
              <span style="font-weight:bold;" :style="{color: scope.row.color}">{{ scope.row.statusText }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="" label="" width="40">
            <template slot-scope="scope">
              <i class="el-icon-arrow-right"></i>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="待开课">
        <el-table :stripe='true' :data="tableDataPart1" style="width: 100%" height="600" @cell-click='selectRow'>
          <el-table-column fixed prop="curriculumName" label="课程名称">
          </el-table-column>
          <el-table-column prop="startDate" label="开课时间">
          </el-table-column>
          <el-table-column prop="location" label="开课地址">
          </el-table-column>
           <el-table-column prop="statusText" label="">
            <template slot-scope="scope">
              <span style="font-weight:bold;" :style="{color: scope.row.color}">{{ scope.row.statusText }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="" label="" width="40">
            <template slot-scope="scope">
              <i class="el-icon-arrow-right"></i>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="开课中">
        <el-table :stripe='true' :data="tableDataPart2" style="width: 100%" height="600" @cell-click='selectRow'>
          <el-table-column fixed prop="curriculumName" label="课程名称">
          </el-table-column>
          <el-table-column prop="startDate" label="开课时间">
          </el-table-column>
          <el-table-column prop="location" label="开课地址">
          </el-table-column>
           <el-table-column prop="statusText" label="">
            <template slot-scope="scope">
              <span style="font-weight:bold;" :style="{color: scope.row.color}">{{ scope.row.statusText }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="" label="" width="40">
            <template slot-scope="scope">
              <i class="el-icon-arrow-right"></i>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="已结业">
        <el-table :stripe='true' :data="tableDataPart3" style="width: 100%" height="600" @cell-click='selectRow'>
          <el-table-column fixed prop="curriculumName" label="课程名称">
          </el-table-column>
          <el-table-column prop="startDate" label="开课时间">
          </el-table-column>
          <el-table-column prop="location" label="开课地址">
          </el-table-column>
          <el-table-column prop="statusText" label="">
            <template slot-scope="scope">
              <span style="font-weight:bold;" :style="{color: scope.row.color}">{{ scope.row.statusText }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="" label="" width="40">
            <template slot-scope="scope">
              <i class="el-icon-arrow-right"></i>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

export default {
  props: {

  },
  data () {
    return {
      tableDataAll: [],
      tableDataPart1: [],
      tableDataPart2: [],
      tableDataPart3: []
    }
  },
  mounted () {
    this.getMycourses()
    // this._handleArr(this.testArr)
  },
  methods: {
    selectRow (row, column, cell, event) {
      console.log(row)
      console.log(column)
      console.log(cell)
      if (row.status == 0) {
        this.$confirm('此课程未完成支付，立即支付？', '提示', {
          confirmButtonText: '前往支付',
          cancelButtonText: '暂不支付',
          type: 'warning'
        }).then(() => {
          let params = {
            group: 'personal',
            type: 'course',
            id: row.curriculumId,
            orderid: row.orderId
          }
          console.log(params)
          this.$router.push({
            name: 'pay',
            params: params
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消支付',
            showClose: true,
          });          
        });
      } else if (row.status == 1) {
        let params = {
          id: row.curriculumId,
          orderid: row.orderId,
          status: row.timing
        }
        this.$router.push({
          name: 'mycoursedetail',
          params: params
        })
      }
    },
    getMycourses () {
      this.Api.getUserInfo(1).then(res => {
        return this.Api.getPersonalCourses(res.id)
      }).then(res => {
        console.log(res)
        this._handleArr(res)
      })
    },

    _handleArr (arr) {
      let dataAll = []
      let dataPart1 = []
      let dataPart2 = []
      let dataPart3 = []
      let currentTime = new Date().getTime()
      for (let i in arr) {
        let obj = {}
        console.log(arr[i])
        if (arr[i].status == 0) {
          obj.statusText = '未付款'
          obj.color = '#F5A623'
          obj = Object.assign({}, obj, arr[i])
          // dataPart1.push(obj)
        } else if (arr[i].status == 1) {
          let startTime = new Date(arr[i].startDate).getTime()
          let endTime = new Date(arr[i].endDate).getTime()
          if (currentTime < startTime) {
            obj.timing = 1
            obj.statusText = '待开课'
            obj.color = '#C6D2E0'
            obj = Object.assign({}, obj, arr[i])
            dataPart1.push(obj)
          } else if (currentTime >= startTime && currentTime <= endTime) {
            obj.timing = 2
            obj.statusText = '开课中'
            obj.color = '#C6D2E0'
            obj = Object.assign({}, obj, arr[i])
            dataPart2.push(obj)
          } else {
            obj.timing = 3
            obj.statusText = '已结业'
            obj.color = '#C6D2E0'
            obj = Object.assign({}, obj, arr[i])
            dataPart3.push(obj)
          }
        }
        dataAll.push(obj)
      }
      console.log(dataAll)
      console.log(dataPart1)
      console.log(dataPart2)
      this.tableDataAll = dataAll
      this.tableDataPart1 = dataPart1
      this.tableDataPart2 = dataPart2
      this.tableDataPart3 = dataPart3
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
