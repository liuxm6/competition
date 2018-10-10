// 关卡
var steps = {
  p1:{
    title:'初级',              //标题
    limitTime:30,             //限时
    limitSubjectNumber:10,    //题目数量
    limitSubjectScore:10,     //每题2分
    limitScore:100,           //成功分数
    costStrength: 10,         //花费体力
    awardCoin:100,            //奖励金币
    awardExp:100,             //经验
  },
  p2: {
    title: '中级',
    limitTime: 30,
    limitSubjectNumber: 10,
    limitSubjectScore: 10,
    limitScore: 100,
    costStrength: 20,
    awardCoin: 200,
    awardExp: 200,
  },
  p3: {
    title: '高级',
    limitTime: 30,
    limitSubjectNumber: 10,
    limitSubjectScore: 10,
    limitScore: 100,
    costStrength: 30,
    awardCoin: 300,
    awardExp: 300,
  },
  pp1: {
    title: '日常训练',
    limitTime: 30,
    limitSubjectNumber: 10,
    limitSubjectScore: 10,
    limitScore: 100,
    costStrength: 10,
    awardCoin: 20,
    awardExp: 20,
  },
};
module.exports = steps;