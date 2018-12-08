<template>
  <div class="mask">
    <div class="container">
      <div class="content">
        <h3>服务条款和隐私政策</h3>
        <div class="box-wrapper">
            <p>
              专业技术工种资格考试网上报名协议
              <br /> <br />
一、专业技术工种资格考试服务平台网上报名系统（以下简称服务平台）的所有权归锐驰高科股份有限公司所有，报考人员使用平台进行网上报名，视为报考人员同意平台所有服务条款
<br /> <br />
二、报考人员责任
<br />
1．保证所提供相关证明材料和提交的报名信息完整、准确、有效。
<br /> 
2．保证不利用本平台从事违反法律、法规和政策规章的活动。
<br /> 
3．保证不进行针对本平台的任何恶意行为，对于破坏本平台的恶意行为，将依法追究其相应法律责任。
<br /> 
4. 承诺已认真阅读本服务协议，并点击“我接受”选项之后，表示已与我中心方(锐驰高科股份有限公司，以下简称锐驰高科)自愿达成本协议，并完全接受协议各条款的约束。
<br /> 
5. 报考人员承诺将仔细阅读本平台上指导报名和考试的有关通知、政策、制度、流程、问题解答及公告等内容作为本服务使用协议的附属条款加以遵守，并严格按照其要求进行操作。
<br /> <br /> 
三、报考人员隐私保护
<br /> 
1．锐驰高科承诺尊重和保护考报考人员个人隐私，不对社会公众公开其个人信息资料。但此承诺在下列情况下自动失效：
<br /> 
（1）报考人员（包括其授权人）要求锐驰高科公开这些信息，并采用书面形式提出上述要求。
<br /> 
（2）在符合国家政策和法律的情况下，拥有合法调查权的国家机关索取考生个人信息。
<br /> 
（3）按照有关规定公布违纪违规考生的相关信息。
<br /> 
（4）非锐驰高科过失，因报考人员自身操作原因或不可抗力的作用所导致的个人信息泄漏。
<br /> 
2．锐驰高科系统维护、组织考试、管理考籍等内部管理工作需要，在相应工作范围内使用并公开考生个人信息料不受本协义的约束。
<br /> 
3．在考试制度和考试业务允许范围内，报考人员有查阅和修改其个人信息的权利。
<br /> 
4．如果报考人员提供的资料不真实、不准确，锐驰高科有权中止报考人员使用本系统服务的权利。
<br /> <br /> 
四、关于考试费用支付
<br /> 
1．用户完全接受报考通知上所列出的相关考试费用。
<br /> 
2．报考人员同意并接受以下支付方式及责任分担：
<br /> 
（1）根据锐驰高科确定的支付方式进行考试费用支付。
<br /> 
（2）如报考人员需要，锐驰高科应出具收据或发票。
<br /> <br /> 
五、关于服务条款的修改
<br /> 
1、我方有权随时修改系统的服务条款和服务内容。
<br /> 
2、系统服务条款及服务内容一旦发生变化，锐驰高科将会在网页页面提示修改内容。如果考生不接受修改内容，则即时取消考生本网站使用服务资格。考生要继续使用相关服务需要两方面的确认：
<br /> 
（1）首先确认系统服务条款及其变动。
<br /> 
（2）同意接受所有的服务条款限制。
<br /> <br /> 
六、关于考生密码和安全性
<br /> 
1．禁止使用他人身份登录系统享受系统提供的服务。
<br /> 
2．考生有妥善保管其登录密码的义务，因考生对自己的密码安全保管不善所造成的损失，由其本人负全部责任。
<br /> 
3．考生如发现任何程序问题或安全漏洞情况，请立即通知我方。
<br /> 
4．考生用于银行支付的密码系由银行提供，应仅属考生本人知晓，锐驰高科无权获知，亦不对其银行密码安全承担任何责任。
<br /> <br /> 
七、关于结束服务
<br /> 
1．我方有权随时中断服务，我方行使中断服务的权利不需对考生或第三方负责。
<br /> 
2．考生若反对任何服务条款的建议或对后来的条款修改有异议，或对我方网络系统服务不满，仅享有以下的权利：
<br /> 
（1）不再使用我方网络系统提供的服务。
<br /> 
（2）通知我方停止该考生的服务。我方不对考生自行终止结束服务的选择所产生的后果承担任何责任。
<br /> 
3．对违反本协议以及本协议附属条款的考生，我方有权利终止对其服务。
<br /> 
4．结束服务后，考生使用与网上报名相关的一切服务的权利即刻中止，考生没有权利要求，我方也没有义务对其网上查询、报考负任何责任。
<br /> <br /> 
八、关于信息发布
<br /> 
我方将通过网上公告形式向考生发布提供权威资讯，先告知服务条款的修改、服务变更或其它重要事项。
<br /> <br /> 
九、法律
<br /> 
网上报考及查询等服务条款均要遵守国家的法律、法规，考生和我方一致同意服从有管辖权法院管辖。若我方部分服务条款与法律、法规相抵触，并不影响其他条款的法律效力。
<br /> <br /> 
            </p>
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
    cancle () {
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
      justify-content center
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
        margin 20px 0 40px
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
