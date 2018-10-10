const util = require('../../utils/util.js')

Page({
  data: {
    issuccess:false,
    step:0,
    title_step:0,
    title_msg:'',
    rmk:'',
    title_btn_msg:''
  },
  onLoad: function (options){
    console.log(options);
    this.setData({
      issuccess:options.issuccess,
      step:options.step,
      title_msg:this.convertMsg(options.step),
      rmk:options.issuccess?'恭喜你，挑战成功':'很遗憾，挑战失败',
      title_btn_msg: options.issuccess?'继续挑战':'重新挑战'
    })
  },
  convertMsg:function(step){
    var ret = "";
    if(step==1){
      ret = "第一关";
    } if (step == 2) {
      ret = "第二关";
    } if (step == 3) {
      ret = "第三关";
    } if (step == 4) {
      ret = "第四关";
    } if (step == 5) {
      ret = "第五关";
    } if (step == 6) {
      ret = "第六关";
    } if (step == 7) {
      ret = "第七关";
    } if (step == 8) {
      ret = "第八关";
    }
    return ret;
  },
  goClick:function(){
    var issuccess = this.data.issuccess;
    if(issuccess){
      wx.navigateTo({
        url: '../index/index?type=forward&step='+(this.data.step),
      })
    }else{
      wx.navigateTo({
        url: '../main/main?step=' + this.data.step,
      })
    }
  }
})