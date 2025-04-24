//初始化
PrintNav();
PrintFooter();
PrintTopBtn();

//按钮切换
var panelBtns = document.querySelectorAll("#panel-btns>div");
var panelIcons = document.querySelectorAll("#panel-btns>div img");
var panelTexts = document.querySelectorAll("#panel-btns>div div");
var sysIntroText = document.getElementById("sys-intro-text");
function PanelBtn(e) {
  for (let i = 0; i < 3; i++) {
    if (panelBtns[i] != e) {
      panelBtns[i].style.backgroundColor = "#f7f7f7";
      panelIcons[i].style.filter = "invert(0)";
      panelTexts[i].style.color = "black";
    } else {
      panelBtns[i].style.backgroundColor = "#0F4C81";
      panelIcons[i].style.filter = "invert(100%)";
      panelTexts[i].style.color = "white";
      switch (i) {
        case 0:
          sysIntroText.innerHTML = `
          张陆曾就读于汉寿县城关四小、詹乐贫中学、汉寿一中。<br>
                        1996年，考入中国人民解放军空军长春飞行学院 。<br>
                        2000年，他从空军第七飞行学院毕业，成为一名强五攻击机飞行员。<br>
                        2010年5月，飞行员张陆经过层层选拔，进入中国人民解放军航天员大队，与刘洋、王亚平、陈冬、汤洪波、叶光富、蔡旭哲一道，成为中国人民解放军第二批航天员 。<br>
                        2022年11月，经全面考评，入选神舟十五号载人飞行任务乘组。
          `;
          break;
        case 1:
          sysIntroText.innerHTML = `
          曾任空军某训练基地某团司令部空战射击主任，被评为空军一级飞行员。<br>
2018年1月，张陆与中国人民解放军航天员大队成员一起被中宣部授予“时代楷模”荣誉称号。
          `;
          break;
        case 2:
          sysIntroText.innerHTML = `
          2023年1月，参加《2023年中央广播电视总台春节联欢晚会》节目《零点钟声》。<br> 2023年1月21日，神舟十五号飞行乘组在中国空间站迎来建成后首个春节，张陆手持“福”字说：“从舷窗外看到了祖国的万家灯火，这是一份稳稳的幸福。”
<br>2023年2月5日，参加《2023年中央电视台元宵晚会》，与杨洪基、王鹤、金长勇等人合唱歌曲《花灿灯彩闹元宵》。
          `;
          break;
      }
    }
  }
}

//轮播图
var swapper = document.querySelector(".selecter .container");
var rightBtn = document.querySelector(".selecter .right-btn");
var leftBtn = document.querySelector(".selecter .left-btn");
var nowStep = 1;
function GoRightAst() {
  GoAst(nowStep + 2);
}
function GoLeftAst() {
  GoAst(nowStep - 2);
}
const astNum = 10;
function GoAst(step) {
  if (step < 1) step = 1;
  else if (step > astNum) step = astNum;
  leftBtn.style.display = step > 1 ? "block" : "none";
  rightBtn.style.display = step < astNum ? "block" : "none";
  nowStep = step;
  swapper.style.left = `-${--step * 356}px`;
}

//二级导航
function smoothScroll(sectionId) {
  const section = document.getElementById(sectionId);
  const sectionTop = section.offsetTop;
  window.scrollTo({
    top: sectionTop - 127,
    behavior: "smooth",
  });
}
var navItems = document.querySelectorAll(".nave .container ul>li");
var sections = document.querySelectorAll(".craft .contents>div");
var dec = document.querySelector(".nave .dec");
window.addEventListener("scroll", function () {
  let pagePos = this.window.scrollY;
  navItems.forEach((item) => {
    item.classList.remove("nave-active");
  });
  for (let i = 0; i < 6; i++) {
    //473
    if (pagePos < sections[i].offsetTop + 320) {
      navItems[i].classList.add("nave-active");
      return;
    }
  }
});

//位置跳转
window.onload = function () {
  try {
    let PosId;
    switch (AnalysPos()) {
      case "2":
        PosId = "craft";
        break;
      case "2-1":
        PosId = "manned";
        break;
      case "2-2":
        PosId = "cargo";
        break;
      case "2-3":
        PosId = "laboratory";
        break;
      case "2-4":
        PosId = "application";
        break;
      case "2-5":
        PosId = "dbcraft";
        break;
      case "2-6":
        PosId = "tbcraft";
        break;
    }
    document.getElementById(PosId).scrollIntoView();
    if (AnalysPos() == "2") window.scrollBy(0, -55);
    else window.scrollBy(0, -127);
  } catch {}
};
