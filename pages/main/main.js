

const util = require('../../utils/util.js')
var interval;
var ans_interval;
var is_valid_click = true;
var timerstamp = 10;

Page({
  data: {
    countDownSecond: timerstamp,
    subjectList:[],
    curSubject: {},
    isright:false,
    ischecked:-1,
    idx:1,
    multiAns:[],
    rightAnsList: [{ isright: 0, ischecked: -1 }, { isright: 0, ischecked: -1 }, { isright: 0, ischecked: -1 }, { isright: 0, ischecked: -1 }],
    multi_disabled:false,
    qs_cnt:0,
    right_cnt:0
  },
  onLoad: function (options){
    var num = 5;
    is_valid_click = true;
    var qs_cnt = options.type ? options.type*5 : 5;
    var subjectList = util.getQsList(qs_cnt);
    timerstamp = qs_cnt+5;
    // var lsit = [];
    // for(var i = 0 ; i < subjectList.length; i++){
    //   if(subjectList[i]['ans'].length>1){
    //     lsit.push(subjectList[i]);
    //   }
    // }
    // subjectList = lsit;
    this.setData({ subjectList: subjectList, qs_cnt: qs_cnt, curSubject: subjectList[0]});
  },
  onHide: function () {
    // 生命周期函数--监听页面隐藏
    console.log("test1 onHide");
  },
  onUnload: function () {
    // 生命周期函数--监听页面卸载
    console.log("test1 onUnload");
    this.showRes();
  },
  convertAns:function(res){
    var ret = '';
    if (res.indexOf('A')!=-1){
      ret += '0';
    }
    if(res.indexOf('B')!=-1){
      ret+='1';
    }
    if (res.indexOf('C') != -1) {
      ret += '2';
    }
    if (res.indexOf('D') != -1) {
      ret += '3';
    }
    return ret;
  },
  chooseAnswer:function(opts){
    if (is_valid_click == false){
      return;
    }
    is_valid_click = false;
    var ischecked = opts.target.dataset.idx;
    var right_ans = this.convertAns(this.data.curSubject.ans);
    var isright = ischecked == right_ans ? true : false;
    var right_cnt = isright ? this.data.right_cnt+1 : this.data.right_cnt;
    this.setData({ ischecked: ischecked, isright: isright,right_cnt:right_cnt});

    ans_interval = setInterval(function(){
      this.restart();
      clearInterval(ans_interval);
    }.bind(this),500)
  },
  qsTimer:function(){
    var totalSecond =timerstamp;

    interval = setInterval(function () {
      this.setData({
        countDownSecond: totalSecond,
      });
      totalSecond--;
      if (totalSecond < 0) {
        this.showRes();
      }
    }.bind(this), 1000);
  },
  // 页面渲染完成后 调用
  onReady: function () {
    this.qsTimer();
  },
  restart:function(){
    var curidx = this.data.idx;
    if (curidx < this.data.subjectList.length) {
      curidx += 1;

      is_valid_click = true;
      this.setData({
        idx: curidx,
        ischecked: -1,
        isright: false,
        rightAns: [],
        curSubject: this.data.subjectList[curidx - 1],
        rightAnsList: [{ isright: 0, ischecked: -1 }, { isright: 0, ischecked: -1 }, { isright: 0, ischecked: -1 }, { isright: 0, ischecked: -1 }]
      });
    } else {
      this.showRes();
    }
    
  },
  mulClick:function(){
    this.setData({
      multi_disabled: true
    })

    var myAns = this.data.multiAns;//[2,3]
    console.log(myAns);
    var stdAns = this.convertAns(this.data.curSubject.ans)+"";//013
    if(stdAns){
      stdAns = stdAns.split('');//炸开数组
      stdAns.sort(function (a, b) { return (a + '').localeCompare(b + '') });
      console.log(stdAns);
    }
    var is_right = stdAns&&(myAns === stdAns) ? 1 :0;
    var right_cnt = is_right ? this.data.right_cnt + 1 : this.data.right_cnt;
    
    var rightAns = [];
    for (var i = 0; i < 4; i++) {
      var sub_right = (stdAns.indexOf(i.toString()) != -1) ? 1 : 0;
      var row = { ischecked: (myAns.indexOf(i.toString()) != -1) ? 1 : -1, isright: sub_right};
      rightAns[i]=row;
    }
    
    console.log(is_right);
    this.setData({
      rightAnsList: rightAns,
      multi_disabled:false,
      right_cnt:right_cnt
    })

    ans_interval = setInterval(function () {
      this.restart();
      clearInterval(ans_interval);
    }.bind(this), 500)
  },
  showRes:function(){
    wx.showModal({
      title: '时间到',
      content: '总共' + this.data.qs_cnt + "题,您总共答对了" + this.data.right_cnt + "题",
      showCancel:false,
      success: function (res) {
        wx.navigateBack({
          delta: 1,
        })
      }
    })
    clearInterval(interval);
  },
  checkboxChange: function (e) {
    this.setData({ multiAns: e.detail.value});
  }
})