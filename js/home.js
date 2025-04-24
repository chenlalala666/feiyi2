//启动项
PrintNav();
PrintFooter();
PrintTopBtn();
ChangeTheme();

//标题打字机
window.addEventListener("DOMContentLoaded", function () {
  var typewriter = document.getElementById("home-title");
  var text = " 中国·问天";
  var speed = 150;
  var pauseTime = 600;

  var i = 0;
  function typeWriter() {
    if (i < text.length) {
      typewriter.innerHTML += text.charAt(i);
      i++;
      if (i == 1 || i == 3 || i == 4) {
        setTimeout(typeWriter, pauseTime);
      } else {
        setTimeout(typeWriter, speed);
      }
    }
  }

  typeWriter();
});

/* 系统组成 */
//面板切换
var astPanel = document.getElementById("panel-ast");
var astTab = document.getElementById("tab-ast");
var macPanel = document.getElementById("panel-mac");
var macTab = document.getElementById("tab-mac");
var sysHideTime;
function SetSys(e) {
  clearTimeout(sysHideTime);
  if (e == "ast") {
    astPanel.style.display = "block";
    astPanel.style.opacity = 1;
    astTab.style.color = "#BB2649";
    astTab.style.zIndex = "41";
    macPanel.style.opacity = 0;
    macTab.style.color = "white";
    macTab.style.zIndex = "40";
    sysHideTime = setTimeout(() => {
      macPanel.style.display = "none";
    }, 500);
  } else {
    macPanel.style.display = "block";
    macPanel.style.opacity = 1;
    macTab.style.color = "#BB2649";
    macTab.style.zIndex = "41";
    astTab.style.color = "white";
    astPanel.style.opacity = 0;
    astPanel.style.zIndex = "40";
    sysHideTime = setTimeout(() => {
      astPanel.style.display = "none";
    }, 500);
  }
}
//按钮切换
var panelBtns = document.querySelectorAll("#panel-btns>div");
var sysIntroText = document.getElementById("sys-intro-text");
var sysIntroTextM = document.getElementById("sys-intro-text-m");
function PanelBtn(e) {
  for (let i = 0; i < 3; i++) {
    if (panelBtns[i] != e) {
      panelBtns[i].style.backgroundColor = "#1F1C2A";
    } else {
      panelBtns[i].style.backgroundColor = "#BB2649";
      switch (i) {
        case 0:
          sysIntroText.innerHTML = `
          1965年6月，杨利伟出生于辽宁省葫芦岛市绥中县 <br>
                                        1983年，高中毕业后考入空军第八飞行学院。<br>
                                        1987年，获得中国人民解放军空军航空大学学士位，<br>
                                        后分配至中国人民解放军空军某部，先后成为空军某师强击机、歼击机飞行员。<br>
                                        1988年，加入中国共产党。<br>
                                        1992年，部队精简整编，转入驻川航空兵某团。
          `;
          break;
        case 1:
          sysIntroText.innerHTML = `
          2003年<br>
航天英雄（航天功勋奖章）<br>
中共中央、国务院、中央军委授予<br>
中国十大杰出青年<br>
中华全国青年联合会等
          `;
          break;
        case 2:
          sysIntroText.innerHTML = `
          中国共产党第十七次全国代表大会代表<br>
          中国共产党第十七届中央委员会候补委<br>员，海南省文昌中学荣誉校长
          `;
          break;
      }
    }
  }
}
function PanelBtnM(e) {
  for (let i = 3; i < 6; i++) {
    if (panelBtns[i] != e) {
      panelBtns[i].style.backgroundColor = "#1F1C2A";
    } else {
      panelBtns[i].style.backgroundColor = "#BB2649";
      switch (i) {
        case 3:
          sysIntroTextM.innerHTML = `
          以“神舟”载人飞船为例，它是我国自行研制的用于天地往返运输人员和物资的载人航天器，达到或优于国际第三代载人飞船技术，具有完全自主知识产权及鲜明的中国特色。飞船可一船多用，既可留轨观测又可作为交会对接飞行器，满足天地往返的需求。
          `;
          break;
        case 4:
          sysIntroTextM.innerHTML = `
          载人飞船按照其飞行任务的不同分为
          卫星式载人飞船与
          登月载人飞船和行星际载人飞船。
          `;
          break;
        case 5:
          sysIntroTextM.innerHTML = `
          载人飞船可以独立进行航天活动，也可以作为往返于地面和空间站之间的“渡船”，还能与空间站或其它航天器对接后进行联合飞行。载人飞船容积较小，受到所载消耗性物资数量限制，不具备再补给的能力，而且不能重复使用。
          `;
          break;
      }
    }
  }
}

/* 博物馆 */
//当前日期
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
const barPoint = document.querySelector(".museum .process .bar .point");
function SetProcessTime() {
  let now = new Date();
  processNowTime.innerText = `现在是${now.getHours()}:${now.getMinutes()}`;
  if (now.getHours() === 0 && now.getMinutes() === 0) SetNowDate();
  let secondsPassed =
    (now.getHours() * 60 + now.getMinutes()) * 60 + now.getSeconds();
  barPoint.style = `--left: ${(secondsPassed / 86400) * 100}%;`;
}
SetProcessTime();
setInterval(SetProcessTime, 1000);

/* 文创 */
//轮播图
var periSwapper = document.querySelector("#peri-swapper .imgs");
var periBtns = document.querySelectorAll("#peri-swapper .buttons>div");
var PerText = document.querySelector("#peri-swapper .info");
var PerTexts = [
  "个性化定制，多种颜色可选！",
  "中国航天文创定制礼盒！",
  "官方文创定制服务！",
];
var nowStep = 1;
function ChangePeriPic(num) {
  clearInterval(PeriInterval);
  if (num > 3) num = 1;
  nowStep = num;
  periSwapper.style.left = `-${--num * 100}%`;
  periBtns.forEach((btn) => {
    btn.style.backgroundColor = "#f5f5f5";
  });
  periBtns[num].style.backgroundColor = "white";
  PerText.innerText = PerTexts[num];
  SetPeriInterval();
}
var PeriInterval;
SetPeriInterval();
function SetPeriInterval() {
  PeriInterval = setInterval(() => {
    ChangePeriPic(nowStep + 1);
  }, 5000);
}
