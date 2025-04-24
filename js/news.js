//启动项
PrintNav();
PrintFooter();
PrintTopBtn();
ChangeTheme();

//换页
const tabs = document.querySelectorAll(".tabs>li");
const panels = document.querySelectorAll(".panels>div");
function ChangePanel(e) {
  //标签
  let index = Array.from(tabs).indexOf(e);
  tabs.forEach((tab) => {
    tab.style = "";
  });
  e.style = "color: #6667AB; border-bottom: 3px solid #6667AB;";
  //页面
  for (let i = 0; i < index; i++) {
    panels[i].style = "left: -1196px; opacity: 0;z-index: -1;";
  }
  panels[index].style = "left: 0; z-index: 1;";
  for (let i = index + 1; i < 4; i++) {
    panels[i].style = "opacity: 0; z-index: -1;";
  }
}

//滚动
panels.forEach((panel) => {
  panel.addEventListener("wheel", function (event) {
    event.preventDefault();
    var scrollAmount = event.deltaY;
    var currentScrollLeft = panel.scrollLeft;
    panel.scrollLeft = currentScrollLeft + scrollAmount;
  });
});

//三级
const importNcard = document.querySelectorAll("#panel-import>div>div");
const aeroNcard = document.querySelectorAll("#panel-aero>div>div");
const coopNcard = document.querySelectorAll("#panel-coop>div>div");
const policyNcard = document.querySelectorAll("#panel-policy>div>div");
importNcard.forEach((card) => {
  card.addEventListener("click", () => {
    GoNewsT(card.querySelector(".title").textContent.trim(), "动态要闻");
  });
});
aeroNcard.forEach((card) => {
  card.addEventListener("click", () => {
    GoNewsT(card.querySelector(".title").textContent.trim(), "国际航天动态");
  });
});
coopNcard.forEach((card) => {
  card.addEventListener("click", () => {
    GoNewsT(card.querySelector(".title").textContent.trim(), "国际合作动态");
  });
});
policyNcard.forEach((card) => {
  card.addEventListener("click", () => {
    GoNewsT(card.querySelector(".title").textContent.trim(), "政策公告");
  });
});
function GoNewsT(title, sub) {
  window.open(
    "../html-news-t/" +
      title +
      " (cnsa.gov.cn).html?title=" +
      title +
      "&sub=" +
      sub,
    "_blank"
  );
}

//位置跳转
window.onload = function () {
  try {
    let PosId;
    switch (AnalysPos()) {
      case "1":
        PosId = "tab-import";
        break;
      case "2":
        PosId = "tab-aero";
        break;
      case "3":
        PosId = "tab-coop";
        break;
      case "4":
        PosId = "tab-policy";
        break;
    }
    ChangePanel(document.getElementById(PosId));
  } catch {
    ChangePanel(document.getElementById("tab-import"));
  }
};
