//index.js
//获取应用实例
const app = getApp()
const util = require('../../utils/util.js')

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    userData: { 
      grade:90,
      coin:1200,
      exp:{
        cur:5,
        limit:20
      },
      strength:{
        cur: 5,
        limit: 20
      }
    },
    ballTop: 0,
    ballLeft: 0,
    screenHeight: 0,
    screenWidth: 0,
    canShow:false
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  goMain:function(){
    wx.reLaunch({
      url: '../main/main?step=p1',
    })
  },
  onLoad: function (options) {
    var _this = this;
    wx.getSystemInfo({
      success: function (res) {
        // console.log(res);
        _this.setData({
          screenHeight: res.windowHeight,
          screenWidth: res.windowWidth,
        });
      }
    })
    wx.getUserInfo(
      {
        success: function (res) {
          app.globalData.userInfo = res.userInfo
          _this.setData({
              userInfo: res.userInfo,
            }
          )
        }
      }
    )
  },
  onPullDownRefresh:function(){
    console.log('222222222222');
  },
  onShow:function(){
    // console.log("onshow");
    // console.log(this.data.canShow);
    var pages = getCurrentPages();
    var len = pages.length;
    // console.log(pages[len-1]);
    // if(!this.data.canShow){
    //   wx.navigateTo({
    //     url: '../main/main?step=2',
    //   })
    // }
  }
})
