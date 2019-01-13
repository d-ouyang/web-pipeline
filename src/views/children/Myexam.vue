<template>
  <div class="container">
    <el-tabs type="border-card">
      <el-tab-pane label="全部考试">
        <el-table :stripe='true' :data="tableDataAll" style="width: 100%" height="600" @cell-click='selectRow'>
          <el-table-column fixed prop="examName" label="考试名称">
          </el-table-column>
          <el-table-column prop="startDate" label="考试时间">
            <template slot-scope="scope">
              <p style="font-weight:bold;">{{scope.row.examDateDay}}</p>
              <p style="font-weight:bold;">{{scope.row.examDateStartTime}}</p>
            </template>
          </el-table-column>
          <el-table-column prop="statusText" label="当前状态">
            <template slot-scope="scope">
              <span style="font-weight:bold;" :style="{color: scope.row.statusColor}">{{ scope.row.statusText }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="result" label="">
            <template slot-scope="scope">
              <div v-if="scope.row.isBtn">
                <el-button size="small" @click.stop="bindBtn(scope.row)">{{scope.row.result}}</el-button>
                <p v-if="scope.row.timing == 2" style="color:#FF475D;font-size:10px;">*需打印后携带</p>
              </div>
              <span v-else style="font-weight:bold;" :style="{color: scope.row.resultColor}">{{ scope.row.result }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="" label="" width="40">
            <template slot-scope="scope">
              <i class="el-icon-arrow-right"></i>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="审核中">
        <el-table :stripe='true' :data="tableDataPart1" style="width: 100%" height="600" @cell-click='selectRow'>
          <el-table-column fixed prop="examName" label="考试名称">
          </el-table-column>
          <el-table-column prop="startDate" label="考试时间">
            <template slot-scope="scope">
              <p style="font-weight:bold;">{{scope.row.examDateDay}}</p>
              <p style="font-weight:bold;">{{scope.row.examDateStartTime}}</p>
            </template>
          </el-table-column>
          <el-table-column prop="statusText" label="当前状态">
            <template slot-scope="scope">
              <span style="font-weight:bold;" :style="{color: scope.row.statusColor}">{{ scope.row.statusText }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="result" label="">
            <template slot-scope="scope">
              <div v-if="scope.row.isBtn">
                <el-button size="small" @click.stop="bindBtn(scope.row)">{{scope.row.result}}</el-button>
                <p v-if="scope.row.timing == 2" style="color:#FF475D;font-size:10px;">*需打印后携带</p>
              </div>
              <span v-else style="font-weight:bold;" :style="{color: scope.row.resultColor}">{{ scope.row.result }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="" label="" width="40">
            <template slot-scope="scope">
              <i class="el-icon-arrow-right"></i>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="等待考试">
        <el-table :stripe='true' :data="tableDataPart2" style="width: 100%" height="600" @cell-click='selectRow'>
          <el-table-column fixed prop="examName" label="考试名称">
          </el-table-column>
          <el-table-column prop="startDate" label="考试时间">
            <template slot-scope="scope">
              <p style="font-weight:bold;">{{scope.row.examDateDay}}</p>
              <p style="font-weight:bold;">{{scope.row.examDateStartTime}}</p>
            </template>
          </el-table-column>
          <el-table-column prop="statusText" label="当前状态">
            <template slot-scope="scope">
              <span style="font-weight:bold;" :style="{color: scope.row.statusColor}">{{ scope.row.statusText }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="result" label="">
            <template slot-scope="scope">
              <div v-if="scope.row.isBtn">
                <el-button size="small" @click.stop="bindBtn(scope.row)">{{scope.row.result}}</el-button>
                <p v-if="scope.row.timing == 2" style="color:#FF475D;font-size:10px;">*需打印后携带</p>
              </div>
              <span v-else style="font-weight:bold;" :style="{color: scope.row.resultColor}">{{ scope.row.result }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="" label="" width="40">
            <template slot-scope="scope">
              <i class="el-icon-arrow-right"></i>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="考试结果">
        <el-table :stripe='true' :data="tableDataPart3" style="width: 100%" height="600" @cell-click='selectRow'>
          <el-table-column fixed prop="examName" label="考试名称">
          </el-table-column>
          <el-table-column prop="startDate" label="考试时间">
            <template slot-scope="scope">
              <p style="font-weight:bold;">{{scope.row.examDateDay}}</p>
              <p style="font-weight:bold;">{{scope.row.examDateStartTime}}</p>
            </template>
          </el-table-column>
          <el-table-column prop="statusText" label="当前状态">
            <template slot-scope="scope">
              <span style="font-weight:bold;" :style="{color: scope.row.statusColor}">{{ scope.row.statusText }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="result" label="">
            <template slot-scope="scope">
              <div v-if="scope.row.isBtn">
                <el-button size="small" @click.stop="bindBtn(scope.row)">{{scope.row.result}}</el-button>
                <p v-if="scope.row.timing == 2" style="color:#FF475D;font-size:10px;">*需打印后携带</p>
              </div>
              <span v-else style="font-weight:bold;" :style="{color: scope.row.resultColor}">{{ scope.row.result }}</span>
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
import {config} from '../../api/config'

export default {
  data () {
    return {
      tableDataAll: [],
      tableDataPart1: [],
      tableDataPart2: [],
      tableDataPart3: [],
      IMG_BASE_URL: config.IMG_BASE_URL
    }
  },
  mounted () {
    this.getMyexams()
  },
  methods: {
    selectRow (row, column, cell, event) {
      console.log(row)
      if (row.examId == null) {
        this.$message({
          type: 'error',
          message: '暂时无法查看详情',
          showClose: true,
        }); 
        return false
      }
      if (row.timing == 0) { // 未付款
        this.$confirm('此考试未完成支付，立即支付？', '提示', {
          confirmButtonText: '前往支付',
          cancelButtonText: '暂不支付',
          type: 'warning'
        }).then(() => {
          let params = {
            group: 'personal',
            type: 'exam',
            id: row.examId,
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
      } else {
        let params = {
          id: row.examId,
          orderid: row.orderId,
          status: row.timing,
          number: row.registrationNumber,
          url: row.registration
        }
        this.$router.push({
          name: 'myexamdetail',
          params: params
        })
      }
    },

    // 重新上传文件 或者  下载准考证
    bindBtn(item) {
      console.log(item)
      if (item.timing == 2) { //  下载准考证
        console.log(`${this.IMG_BASE_URL}${item.registration}`)
        window.open(`${this.IMG_BASE_URL}${item.registration}`)
      } else if (item.timing == 5) { // 重新上传文件
        console.log('重新上传文件')
        let params = {
          orderid: item.orderId
        }
        this.$router.push({
          name: 'reupload',
          params: params
        })
      }
    },

    getMyexams () {
      this.Api.getUserInfo(1).then(res => {
        return this.Api.getPersonalExams(res.id)
      }).then(res => {
        this._handleArr(res)
      })
    },
    _handleArr (arr) {
      let dataAll = []
      let dataPart1 = [] // 审核中
      let dataPart2 = [] // 待考试
      let dataPart3 = [] // 考试结果
      let currentTime = new Date().getTime()
      console.log(arr)

      for (let i in arr) {
        let obj = {}
        // console.log(arr[i])
        obj.examDateDay = arr[i].examDate.split('T')[0]
        obj.examDateStartTime = arr[i].examDate.split('T')[1]
        let examDateTime = new Date(`${obj.examDateDay} ${obj.examDateStartTime}`).getTime()
        // let examDateEndTime = new Date(arr[i].endDate).getTime()
        // console.log(obj.examDateStartTime)
        // let endTimeArr = arr[i].examDate.split('T')[1].split(':')
        // endTimeArr[0] = (Number(endTimeArr[0]) + 2) < 10 ? '0' + (Number(endTimeArr[0]) + 2) : (Number(endTimeArr[0]) + 2)
        // console.log(endTimeArr)
        // obj.examDateEndTime = endTimeArr.join(':')
        // console.log(obj.examDateEndTime)
        if (arr[i].status == 0) {
          obj.timing = 0 // 未付款
          obj.statusText = '未付款'
          obj.statusColor = '#FF475D'
          obj.result = ''
          obj.resultColor = ''
          obj = Object.assign({}, obj, arr[i])
        } else if (arr[i].status == 1 || arr[i].status == 4 || arr[i].status == null) {
          obj.timing = 1 // 已付款  待审核
          obj.statusText = '已付款'
          obj.statusColor = '#4B6796'
          obj.result = '等待审核中'
          obj.resultColor = '#F5A623'
          obj = Object.assign({}, obj, arr[i])
          dataPart1.push(obj)
        } else if (arr[i].status == 2 && currentTime < examDateTime) {
          obj.timing = 2 // 已付款  审核通过  待考试
          obj.statusText = '等待考试'
          obj.statusColor = '#4B6796'
          obj.isBtn = true
          obj.src = ''
          obj.result = '下载准考证'
          obj.resultColor = '#4C84FF'
          obj = Object.assign({}, obj, arr[i])
          dataPart2.push(obj)
        } else if (arr[i].status == 2 && currentTime >= examDateTime) {
          if (arr[i].examResult == '通过') {
            obj.timing = 3 // 已付款  审核通过  考试通过
            obj.statusText = '考试已通过'
            obj.statusColor = '#4B6796'
            obj.result = '制证中'
            obj.resultColor = '#0FD6AB'
            obj = Object.assign({}, obj, arr[i])
            dataPart3.push(obj)
          } else if (arr[i].examResult == '未通过' || arr[i].examResult == null) {
            obj.timing = 4 // 已付款  审核通过  考试未通过
            obj.statusText = '考试未通过'
            obj.statusColor = '#FF475D'
            obj.result = ''
            obj.resultColor = ''
            obj = Object.assign({}, obj, arr[i])
            dataPart3.push(obj)
          }
        } else if (arr[i].status == 3) {
          obj.timing = 5 // 已付款  审核未通过
          obj.statusText = '审核未通过'
          obj.statusColor = '#FF475D'
          obj.isBtn = true
          obj.result = '重新上传资料'
          obj.resultColor = '#4C84FF'
          obj = Object.assign({}, obj, arr[i])
          dataPart1.push(obj)
        }
        dataAll.push(obj)
      }
      console.log(dataAll)
      // console.log(dataPart1)
      // console.log(dataPart2)
      // console.log(dataPart3)
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
