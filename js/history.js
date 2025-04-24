//初始化
PrintNav();
PrintTopBtn();
ChangeTheme();

//可视触发
const elements = document.querySelectorAll(
  ".a1:not(.mix-blend), .a2:not(.mix-blend), .a3:not(.mix-blend),.contents>div:not(.mix-blend),.steps .step>*"
);
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.4,
};
const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
};
const observer = new IntersectionObserver(callback, options);
elements.forEach((element) => {
  observer.observe(element);
});

//位置跳转
window.onload = function () {
  try {
    let PosId;
    switch (AnalysPos()) {
      case "1":
        PosId = "prof";
        break;
      case "2":
        PosId = "culture";
        break;
      case "3":
        PosId = "history";
        break;
    }
    document.getElementById(PosId).scrollIntoView();
    window.scrollBy(0, -85);
  } catch {}
};

