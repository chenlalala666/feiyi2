//初始化
var cliWidth = window.innerWidth;
var cliHeight = window.innerHeight;

PrintNav();
PrintFooter();
PrintTopBtn();

//轮播图
const banner = document.querySelector(".banner .contaner>.img");
const bannerSub = document.getElementById("banner-sub");
const bannerTitle = document.getElementById("banner-title");
const bannerText = document.getElementById("banner-text");
const bannerMore = document.querySelector(".banner .corn-more>a");
const abbs = document.querySelectorAll(".banner .abb .bar");
const abbBars = document.querySelectorAll(".banner .abb .prog");
const abbOddImgs = document.querySelectorAll(
  ".banner .abb:nth-child(odd) .img img"
);
const abbEvenImgs = document.querySelectorAll(
  ".banner .abb:nth-child(even) .img img"
);
const abbSubs = [
  `New Product Announcement`,
  `New Product Announcement`,
  `Cartoon Stickers`,
  `Personalized Customization`,
];
const abbTitles = [
  `空间站建造阶段 <br>
    后续飞行任务标识发布！`,
  `航天服饰个性化定制！ <br>
    多种颜色可选`,
  `选择喜欢的形象卡贴 <br>
    贴在任何你喜欢的地方`,
  `航天服饰个性化定制！<br>
    官方文创定制服务`,
];
const abbTexts = [
  `现在已经支持自选标识制作徽章 <br>
    <br>`,
  `满足你的个性化需求 <br>
    <br>`,
  `在此购买的所有商品都可以免费获赠品牌形象卡贴， <br>
    支持人物卡贴自选 <br>`,
  `在此购买的所有商品都可以享受免费的个性化定制服务 <br>
    图案、签名，来者不拒`,
];
var swappingInterval = setInterval(Swapping, 5000);
var abbIndex = 1;
function Swapping() {
  for (let i = 0; i < abbs.length; i++) {
    abbs[i].style.opacity = "0";
    abbBars[i].style.width = "0%";
    for (let j = 0; j < abbEvenImgs.length; j++) {
      abbOddImgs[j].style.transform = "translateX(-50%) translateY(-50%)";
      abbEvenImgs[j].style.transform = "translateY(-50%)";
    }
  }
  banner.style.left = `-${(abbIndex * banner.offsetWidth) / 4}px`;
  bannerSub.innerHTML = `${abbSubs[abbIndex]}`;
  bannerTitle.innerHTML = `${abbTitles[abbIndex]}`;
  bannerText.innerHTML = `${abbTexts[abbIndex]}`;
  abbs[abbIndex].style.opacity = "1";
  abbBars[abbIndex].style.width = "100%";
  if (abbIndex % 2 == 0) {
    abbOddImgs[Math.floor(abbIndex / 2)].style.transform =
      "translateX(-50%) translateY(-50%) scale(1.1)";
  } else {
    abbEvenImgs[Math.floor(abbIndex / 2)].style.transform =
      "translateY(-50%) scale(1.1)";
  }
  if (abbIndex == 2) {
    bannerTitle.style.color =
      bannerText.style.color =
      bannerMore.style.color =
        "black";
    bannerSub.style.color = "#BB2649";
  } else {
    bannerTitle.style.color =
      bannerText.style.color =
      bannerMore.style.color =
        "white";
    bannerSub.style.color = "#E5CCAE";
  }
  abbIndex = (abbIndex + 1) % abbs.length;
}
function ManualSwapping(index) {
  clearInterval(swappingInterval);
  abbIndex = index;
  Swapping();
  swappingInterval = setInterval(Swapping, 5000);
}
bannerMore.addEventListener("click", () => {
  smoothScroll("clothing");
});

//商品
//轮播图
const clothingSwapper = document.getElementById("clothing-swapper");
const clothingRightBtn = document.querySelector(".clothing .right-btn");
const clothingLeftBtn = document.querySelector(".clothing .left-btn");
var itemWidth = clothingSwapper.querySelector(".item").clientWidth;
var nowClothingStep = 1;
function GoRightClothing() {
  GoClothing(nowClothingStep + 1);
}
function GoLeftClothing() {
  GoClothing(nowClothingStep - 1);
}
function GoClothing(step) {
  clothingLeftBtn.style.display = step == 2 ? "block" : "none";
  clothingRightBtn.style.display = step == 1 ? "block" : "none";
  clothingSwapper.style.left = `-${(step - 1) * (itemWidth + 16)}px`;
  nowClothingStep = step;
}
const blocksSwapper = document.getElementById("blocks-swapper");
const blocksRightBtn = document.querySelector(".blocks .right-btn");
const blocksLeftBtn = document.querySelector(".blocks .left-btn");
var nowBlocksStep = 1;
function GoRightBlocks() {
  GoBlocks(nowBlocksStep + 1);
}
function GoLeftBlocks() {
  GoBlocks(nowBlocksStep - 1);
}
function GoBlocks(step) {
  blocksLeftBtn.style.display = step == 2 ? "block" : "none";
  blocksRightBtn.style.display = step == 1 ? "block" : "none";
  blocksSwapper.style.left = `-${(step - 1) * (itemWidth + 16)}px`;
  nowBlocksStep = step;
}
const dropSwapper = document.getElementById("drop-swapper");
const dropRightBtn = document.querySelector(".drop .right-btn");
const dropLeftBtn = document.querySelector(".drop .left-btn");
var nowDropStep = 1;
function GoRightDrop() {
  GoDrop(nowDropStep + 1);
}
function GoLeftDrop() {
  GoDrop(nowDropStep - 1);
}
function GoDrop(step) {
  dropLeftBtn.style.display = step == 2 ? "block" : "none";
  dropRightBtn.style.display = step == 1 ? "block" : "none";
  dropSwapper.style.left = `-${(step - 1) * (itemWidth + 16)}px`;
  nowDropStep = step;
}
const emblemSwapper = document.getElementById("emblem-swapper");
const emblemRightBtn = document.querySelector(".emblem .right-btn");
const emblemLeftBtn = document.querySelector(".emblem .left-btn");
var nowEmblemStep = 1;
function GoRightEmblem() {
  GoEmblem(nowEmblemStep + 1);
}
function GoLeftEmblem() {
  GoEmblem(nowEmblemStep - 1);
}
function GoEmblem(step) {
  emblemLeftBtn.style.display = step == 2 ? "block" : "none";
  emblemRightBtn.style.display = step == 1 ? "block" : "none";
  emblemSwapper.style.left = `-${(step - 1) * (itemWidth + 16)}px`;
  nowEmblemStep = step;
}

//三级
const items = document.querySelectorAll(".swapper .item");
items.forEach((item) => {
  let title = item.querySelector(".title").innerHTML.trim();
  item.querySelector(".img").addEventListener("click", () => {
    GoPeriT(title);
  });
  item.querySelector(".title").addEventListener("click", () => {
    GoPeriT(title);
  });
});
function GoPeriT(title) {
  window.open("../html-peri-t/" + title + ".html", "_blank");
}

//页内跳转
function smoothScroll(sectionId) {
  let section = document.getElementById(sectionId);
  let sectionTop = section.offsetTop;
  console.log(section);
  console.log(sectionTop);
  window.scrollTo({
    top: sectionTop - 85,
    behavior: "smooth",
  });
}

//位置跳转
let analysedPos = AnalysPos();
window.onload = function () {
  Swapping();
  try {
    let PosId;
    switch (analysedPos) {
      case "1":
        PosId = "clothing";
        break;
      case "1-2":
        PosId = "blocks";
        break;
      case "1-3":
        PosId = "drop";
        break;
      case "1-4":
        PosId = "emblem";
        break;
      case "1-5":
        PosId = "stickers";
        break;
      case "2":
        PosId = "services";
        break;
    }
    document.getElementById(PosId).scrollIntoView();
    if (analysedPos == "1-3" || analysedPos == "1-5") window.scrollBy(0, -55);
    else window.scrollBy(0, -85);
  } catch {}
};

document.getElementById("nav-buy-car").style.display = "inline-block";

//购买
items.forEach((item) => {
  item.querySelectorAll(".buy-btn").forEach((buyBtn) => {
    buyBtn.addEventListener("click", () => {
      ToBuyCar(item);
      ShowBuyCar();
    });
  });
  item.querySelectorAll(".car-btn").forEach((carBtn) => {
    carBtn.addEventListener("click", () => {
      ToBuyCar(item);
      alert("已添加至购物车！");
    });
  });
});
function ToBuyCar(infos) {
  AddToBuyCar(
    infos.querySelector(".title").innerHTML,
    infos.querySelector(".price").innerHTML.trim().replace("￥", ""),
    infos.querySelector(".img img").getAttribute("src")
  );
}
