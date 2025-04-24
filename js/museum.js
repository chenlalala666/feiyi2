//启动项
PrintNav();
PrintFooter();
PrintTopBtn();

//时间面板
const panelNowTime = document.getElementById("panel-now-time");
const panelState = document.getElementById("panel-state");
function SetNowDate() {
  let now = new Date();
  let dayOfWeek = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][
    now.getDay()
  ];
  let month = now.getMonth() + 1;
  let date = now.getDate();
  let timeString = `${dayOfWeek}/${month}月${date}日`;
  panelNowTime.innerText = timeString;
  panelState.innerText = now.getDay() <= 5 ? "今日开馆" : "今日闭馆";
}
SetNowDate();
//当前时间
const processNowTime = document.getElementById("process-now-time");
const barPoint = document.querySelector(".process .bar .point");
const timeSelectDates = document.querySelectorAll(".ticket>.time ul .date");
function SetProcessTime() {
  let now = new Date();
  processNowTime.innerText = `现在是${
    now.getHours() < 10 ? "0" + now.getHours() : now.getHours()
  }:${now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes()}`;
  if (now.getHours() === 0 && now.getMinutes() === 0) SetNowDate();
  let secondsPassed =
    (now.getHours() * 60 + now.getMinutes()) * 60 + now.getSeconds();
  barPoint.style = `--left: ${(secondsPassed / 86400) * 100}%;`;
  if (timeSelectDates[0].innerHTML != GetDate(0)) SetVisitTime();
}
SetProcessTime();
setInterval(SetProcessTime, 1000);

/* 订票 */
//生成参观时间
function SetVisitTime() {
  timeSelectDates[0].innerHTML = GetDate(0);
  timeSelectDates[1].innerHTML = GetDate(1);
  timeSelectDates[2].innerHTML = GetDate(2);
}
// 获取日期
function GetDate(offset) {
  var date = new Date();
  date.setDate(date.getDate() + offset);
  var month = date.getMonth() + 1;
  var day = date.getDate();
  return month + "月" + day + "日";
}
SetVisitTime();
//选择参观时间
const timeSelects = document.querySelectorAll(".ticket>.time ul>li");
var visitTime = GetDate(0);
function SelectVisitTime(e) {
  visitTime = GetDate(Array.from(timeSelects).indexOf(e));
  timeSelects.forEach((item) => {
    item.style = "";
  });
  e.style = "background-color: #e5ccae;";
  SetPrice();
}
//选择门票种类
const typeSelects = document.querySelectorAll(".price ul li");
var visitType = 0;
function SelectVisitType(e) {
  visitType = Array.from(typeSelects).indexOf(e);
  typeSelects.forEach((item) => {
    item.style = "";
  });
  e.style = "background-color: #e5ccae;";
  SetPrice();
}
//选择门票数量
const cntSelects = document.querySelectorAll(".count ul li");
var visitCnt = 0;
function SelectVisitCnt(e) {
  visitCnt = Array.from(cntSelects).indexOf(e);
  cntSelects.forEach((item) => {
    item.style = "";
  });
  e.style = "background-color: #e5ccae;";
  SetPrice();
}
//更新价格预览
const sumPrice = document.getElementById("sumPrice");
function SetPrice() {
  let singlePrice = visitType == 0 ? 30 : 15;
  sumPrice.innerHTML = `¥${singlePrice * (visitCnt + 1)}`;
}

//加入购物车
function AddCar() {
  let singlePrice = visitType == 0 ? 30 : 15;
  let visitTypeText =
    visitType == 0 ? "普通票" : visitType == 1 ? "老年票" : "学生票";
  AddToBuyCar(
    "展馆门票 " + visitTime + " " + visitTypeText + " " + (visitCnt + 1) + "张",
    singlePrice * (visitCnt + 1),
    "../icons/stick.png"
  );
  alert("已放入购物车！");
}

document.getElementById("nav-buy-car").style.display = "inline-block";
