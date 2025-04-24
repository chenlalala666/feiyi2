//启动项
PrintNav();
PrintTopBtn();

//解析文章
const pageTitle = document.getElementById("page-title");
const headerSub = document.getElementById("header-sub");
const headerTitle = document.getElementById("header-title");
const headerSource = document.querySelector(".source");
pageTitle.innerText = headerTitle.innerHTML = AnalysUrl()
  .split("&")[0]
  .split("=")[1];
headerSub.innerHTML = AnalysUrl().split("&")[1].split("=")[1];
if (headerSource.innerHTML == "") headerSource.innerText = "来源 : 网络媒体";

//随机推荐
const recommends = [
  `<div class="a1">
                    <div class="img"
                        onclick="window.open('../html-news-t/天舟五号货运飞船顺利撤离空间站组合体 (cnsa.gov.cn).html?title=天舟五号货运飞船顺利撤离空间站组合体&sub=动态要闻', '_self')">
                        <img src="../images/xw/xinwen1.jpg" alt="pic">
                    </div>
                    <div class="title" onclick="window.open('../html-news-t/天舟五号货运飞船顺利撤离空间站组合体 (cnsa.gov.cn).html?title=天舟五号货运飞船顺利撤离空间站组合体&sub=动态要闻', '_self')">天舟五号货运飞船顺利撤离空间站组合体</div>
                    <div class="source">我们的太空 5-5</div>
                </div>`,
  `<div class="a1">
                    <div class="img"
                        onclick="window.open('../html-news-t/神舟十六号载人飞船成功发射 (cnsa.gov.cn).html?title=神舟十六号载人飞船成功发射&sub=动态要闻', '_self')">
                        <img src="../images/xw/10026887.jpg" alt="pic">
                    </div>
                    <div class="title"
                        onclick="window.open('../html-news-t/神舟十六号载人飞船成功发射 (cnsa.gov.cn).html?title=神舟十六号载人飞船成功发射&sub=动态要闻', '_self')">
                        神舟十六号载人飞船成功发射</div>
                    <div class="source">中国航天报 5-30</div>
                </div>`,
  `<div class="a1">
                    <div class="img"
                        onclick="window.open('../html-news-t/2023年“中国航天日”宣传海报正式发布 (cnsa.gov.cn).html?title=2023年“中国航天日”宣传海报正式发布&sub=动态要闻', '_self')">
                        <img src="../images/xw/10005620.jpg" alt="pic">
                    </div>
                    <div class="title"
                        onclick="window.open('../html-news-t/2023年“中国航天日”宣传海报正式发布 (cnsa.gov.cn).html?title=2023年“中国航天日”宣传海报正式发布&sub=动态要闻', '_self')">
                        2023年“中国航天日”宣传海报正式发布</div>
                    <div class="source">网络媒体 4-18</div>
                </div>`,
];
var shuffledRecommends = shuffleArray(recommends);
const recommend = document.getElementById("recommend");

shuffledRecommends.forEach((r) => {
  let container = document.createElement("div");
  container.innerHTML = r;
  recommend.appendChild(container);
});

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

//评论
var text = document.getElementById("text");
const comments = document.getElementById("comments");
const comment = document.getElementById("comment");
comment.addEventListener("click", function () {
  window.scrollTo({
    top: comments.offsetTop - 85,
    behavior: "smooth",
  });
});
text.addEventListener("keyup", SentComment);

function SentComment(event) {
  if (
    (event.code == "Enter" || event.code == "NumpadEnter") &&
    text.value != ""
  ) {
    Comment(text.value);
    text.value = "";
    event.preventDefault();
  }
}
function Comment(txt) {
  comments.innerHTML += `
        <div class="comment-box">
                    <div class="head">
                        <img src="../icons/touxiang.png" alt="head">
                    </div>
                    <div class="name">用户</div>
                    <div class="text">
                        ${txt}
                    </div>
                    <div class="time">
                        ${GetNowTime()}
                    </div>
                </div>
    `;
}

function GetNowTime() {
  let now = new Date();
  let month = now.getMonth() + 1;
  let date = now.getDate();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let formattedTime = `${month}月${date}日 ${hours}:${minutes}`;
  return formattedTime;
}

document.getElementById("theme-btn").style.display = "inline-block";

//点赞
const likeBtn = document.getElementById("like");
var isLike = false;
likeBtn.addEventListener("click", function () {
  if (isLike) {
    likeBtn.querySelector("img").src = "../icons/31dianzan.png";
    isLike = false;
  } else {
    likeBtn.querySelector("img").src = "../icons/31dianzan_click.png";
    isLike = true;
    if (isUnlike) unlikeBtn.click();
  }
});
const unlikeBtn = document.getElementById("unlike");
var isUnlike = false;
unlikeBtn.addEventListener("click", function () {
  if (isUnlike) {
    unlikeBtn.querySelector("img").src = "../icons/31dianzan.png";
    isUnlike = false;
  } else {
    unlikeBtn.querySelector("img").src = "../icons/31dianzan_click.png";
    isUnlike = true;
    if (isLike) likeBtn.click();
  }
});
document.getElementById("comment-like").style.display = document.getElementById(
  "comment-unlike"
).style.display = "none";
