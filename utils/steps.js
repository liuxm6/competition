// 关卡
var steps = {
  p1:{
    title:'初级',              //标题
    limitTime:30,             //限时
    limitSubjectNumber:10,    //题目数量
    limitSubjectScore:2,      //每题2分
    limitScore:100,           //成功分数
    costStrength: 10,         //花费体力
    awardCoin:5,              //奖励金币
    awardExp:100,             //经验
  },
  p2: {
    title: '中级',
    limitTime: 30,
    limitSubjectNumber: 10,
    limitScore: 100,
    costStrength: 10,
    awardCoin: 5,
    awardExp: 200,
  },
  p3: {
    title: '高级',
    limitTime: 30,
    limitSubjectNumber: 10,
    limitScore: 100,
    costStrength: 10,
    awardCoin: 5,
    awardExp: 300,
  },
  pp1: {
    title: '日常区',
    limitTime: 30,
    limitSubjectNumber: 10,
    limitScore: 100,
    costStrength: 10,
    awardCoin: 5,
    awardExp: 20,
  },
};
module.exports = steps;