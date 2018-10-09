//index.js
//获取应用实例
const app = getApp()
const util = require('../../utils/util.js')

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    ballTop: 0,
    ballLeft: 0,
    screenHeight: 0,
    screenWidth: 0
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  goMain:function(){
    wx.navigateTo({
      url: '../main/main?type=2',
    })
  },
  onLoad: function () {

    // 一是会将按钮拖出屏幕边缘，
    // 二是按钮始终在鼠标右下方。
    // 获取屏幕宽高
    var _this = this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res);
        _this.setData({
          screenHeight: res.windowHeight,
          screenWidth: res.windowWidth,
        });
      }
    });


    
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },
  handletouchstart:function(event){
    console.log(event);
  },
  handletouchmove: function (event) {
    console.log(event)
    let pageX = event.touches[0].pageX;
    let pageY = event.touches[0].pageY;
    //屏幕边界判断   中心点位置
    if (pageX < 30 || pageY < 30)
      return;
    if (pageX > this.data.screenWidth - 30)
      return;
    if (pageY > this.data.screenHeight - 30)
      return;

    //左上角位置
    this.setData({
      ballTop: event.touches[0].pageY - 30,
      ballLeft: event.touches[0].pageX - 30,
    });

  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onPullDownRefresh:function(){
    console.log('222222222222');
  }
})
