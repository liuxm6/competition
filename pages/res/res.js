const util = require('../../utils/util.js')
const steps = require('../../utils/steps.js')

Page({
  data: {
    issuccess:false,
    step:'',
    stepObj:{},
    title_step:0,
    score_rmk:''
  },
  onLoad: function (options){
    var step = steps[options.step];
    console.log(step);
    var issuccess = isNaN(options.issuccess) ? 0 : parseInt(options.issuccess);
    var right_cnt = isNaN(options.right_cnt)?0:parseInt(options.right_cnt);
    console.log(issuccess);
    this.setData({
      issuccess:issuccess,
      step:options.step,
      stepObj:step,
      score_rmk: '您当前得分为' + right_cnt * step.limitSubjectScore
    })
  },
  goClick:function(){
    var issuccess = this.data.issuccess;
    console.log(issuccess);
    if(issuccess){
      wx.navigateTo({
        url: '../index/index?type=forward&step='+(this.data.step),
      })
    }else{
      wx.navigateTo({
        url: '../index/index?step=' + this.data.step,
      })
    }
  }
})