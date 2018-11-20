<template>
  <div class="mask">
    <div class="container">
      <div class="content">
        <h3>考试须知</h3>
        <div class="box-wrapper">
          <!-- <div class="box"> -->
            <p>2018年，我省成人高校招生录取实行计算机远程网上录取。为确保考生电子档案的准确性，现制定如下成人高考网上报名实施细则。
              <br />
              <br /> 
              第一条 成人高等学校招生统一考试采取互联网报名方式，实行先网上报名后现场确认信息制度。网上报名时考生通过互联网了解报考须知以及各成人招生学校招生专业（不含专业计划数），在网上自行录入本人的基本信息、采集并上传电子相片、绑定手机号并交纳报考费，然后在省教育考试院规定的现场信息确认时间内到市招生办公室（考试中心）指定的报名点确认报名资格、校对信息、指纹采集和打印报名校对表。相片上传不成功的考生，可以到报名确认现场进行补摄像。 
              <br />
              <br /> 
              第二条 考生通过互联网报名自行录入的基本信息内容为：姓名、性别、出生年月、身份证号码、相片、报考类别、考生类别、考试科目组、通讯地址、邮政编码、本人手机号码（绑定）、个人密码、选择考试的县（区）地点和院校及专业志愿等。 每名考生须绑定一个手机号，作为接收考试成绩、录取结果等信息和志愿信息确认的主要凭证，考生务必确保准确绑定本人手机。绑定非本人手机，造成的一切后果由考生本人承担。 一个手机号只能用于一个考生绑定。为确保考试、录取期间的通讯畅通，考生须保障绑定的手机号正常使用。 </p>
          <!-- </div> -->
        </div>
        <el-button @click="cancle">我知道了</el-button>
      </div>
      <i class="el-icon-close cancle" @click="cancle"></i>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    cancle() {
      this.$emit('cancle')
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../common/stylus/variable.styl'
@import '../common/stylus/mixin.styl'

.mask
  position fixed
  width 100vw
  height 100vh
  left 0
  top 0
  background-color rgba(0,0,0,0.6)
  z-index 100
  .container
    position absolute
    width 440px
    height 600px
    box-sizing()
    left 50%
    margin-left -220px
    top 50%
    margin-top -290px
    border-radius(4px)
    background-color $color-normal 
    padding 0 50px 
    .content
      width 100%
      height 100%
      display flex
      flex-direction column
      align-items center
      justify-content space-around
      h3
        font-size $size-reg
        color $color-news-title
        font-weight bold
        // margin-bottom 30px
      .box-wrapper
        width 100%
        height 400px
        box-sizing()
        padding 0 20px
        overflow-y scroll
        background-color $color-note-bg
        p
          padding-top 20px
          color $color-news-value
          font-size $size-news-content
          line-height 1.5
      .el-button
        width 290px
        height 48px
        background-color $color-nav-active
        color $color-normal
        font-size $size-nav-text
        border-radius(8px)
  .cancle
    position absolute
    top -4px
    right -36px
    font-size $size-title
    color $color-normal
    cursor pointer
</style>

