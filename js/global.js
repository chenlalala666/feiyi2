//解析信息
function AnalysUrl() {
  try {
    let url = decodeURIComponent(top.window.location.href).split(".");
    htmlPos =
      url[url.length - 2].split("/")[url[url.length - 2].split("/").length - 1];
    let info = url[url.length - 1].split("?")[1];
    return info;
  } catch {}
}

/* 功能键 */
//头像
function ShowPersonal() {
  let panelPersonal = document.getElementById("panel-personal");
  HideAll();
  panelPersonal.style.height = "280px";
}
function HidePersonal() {
  let panelPersonal = document.getElementById("panel-personal");
  panelPersonal.style.height = "0";
}
//消息
function ShowMsg() {
  HideAll();
  let panelMsg = document.getElementById("panel-msg");
  panelMsg.style.height = "500px";
}
function HideMsg() {
  let panelMsg = document.getElementById("panel-msg");
  panelMsg.style.height = "0";
}
function ClearMsg() {
  let panelMsg = document.getElementById("panel-msg");
  let msgs = panelMsg.querySelectorAll(".content>div");
  msgs.forEach((msg) => {
    msg.style.bottom = "100%";
    msg.remove();
  });
}
//购物车
function ShowBuyCar() {
  let panelCar = document.getElementById("panel-car");
  HideAll();
  panelCar.style.height = "500px";
}
function HideBuyCar() {
  let panelCar = document.getElementById("panel-car");
  panelCar.style.height = "0";
}
function AddToBuyCar(title, price, imageUrl) {
  let panelCar = document.getElementById("panel-car");
  panelCar.querySelector(".content").innerHTML += `
  <div class="but-card">
                            <div class="dec"></div>
                            <div class="img" style="background: url('${imageUrl}') center / cover no-repeat;">
                            </div>
                            <div class="title">${title}</div>
                            <div class="cost">￥${price}</div>
                            <div class="delete" onclick="RemoveBuyCar(this)">
                                <img src="../icons/delete.png" alt="icon">
                            </div>
                        </div>
    `;
  CalcBuyCar();
}
function RemoveBuyCar(e) {
  let panelCar = document.getElementById("panel-car");
  let contents = panelCar.querySelectorAll(".but-card");
  contents.forEach((item) => {
    if (e == item.querySelector(".delete")) {
      item.remove();
    }
  });
  CalcBuyCar();
}
function CalcBuyCar() {
  let panelCar = document.getElementById("panel-car");
  let sum = 0;
  let prices = panelCar.querySelectorAll(".but-card .cost");
  prices.forEach((price) => {
    sum += parseInt(price.innerHTML.slice(1));
  });
  panelCar.querySelector(".btm .price").innerHTML = `￥${sum}`;
}
function ClearBuyCar() {
  let panelCar = document.getElementById("panel-car");
  alert("结算成功！");
  panelCar.querySelectorAll(".but-card").forEach((card) => {
    card.remove();
  });
}
//主题
function ChangeTheme() {
  let body = document.body;
  body.classList.toggle("dark-mode");
  let themebtns = document.querySelectorAll("#theme");
  themebtns.forEach((btn) => {
    btn.src = body.classList.contains("dark-mode")
      ? "../icons/太阳.png"
      : "../icons/月亮.png";
  });
}
//收回所有
function HideAll() {
  HidePersonal();
  HideMsg();
  HideBuyCar();
}

/* 跳转 */
//桌面
function GoIndex() {
  window.location.href = "../html/home.html";
}
//加工链接信息
function PosToUrl(info) {
  if (info == undefined) info = "";
  else info = "?pos=" + info;
  return info;
}
//解码链接信息
function AnalysPos() {
  try {
    return AnalysUrl().split("=")[1];
  } catch {}
}
//系统组成
function GoSys(info) {
  window.location.href = "../html/system.html" + PosToUrl(info);
}
//历史
function GoHis(info) {
  window.location.href = "../html/history.html" + PosToUrl(info);
}
//博物馆
function GoMuse(info) {
  window.location.href = "../html/museum.html" + PosToUrl(info);
}
//新闻
function GoNews(info) {
  window.location.href = "../html/news.html" + PosToUrl(info);
}
//文创
function GoPeri(info) {
  window.location.href = "../html/periphery.html" + PosToUrl(info);
}
//登录
function GoLogin() {
  window.location.href = "../html/login.html";
}
//个人面板
function GoPersonal() {
  window.location.href = "../html/personal.html";
}

/* 动态html */
//导航
function PrintNav() {
  let nav = `
    <link rel="stylesheet" href="../css/nav.css">
    <div class="add-nav">
        <div class="ban">
            <nav class="nav-area">
                <img src="../images/badge.png" alt="logo" onclick="GoIndex()">
                <ul class="l1">
                    <li>
                        <span class="head" onclick="GoIndex()">首页</span>
                    </li>
                    <li>
                        <span class="head" onclick="GoSys()">系统组成</span>
                        <div class="sys">
                            <div class="l2">
                                <span class="l2-title" onclick="GoSys()">航天员</span>
                                <div class="hr"></div>
                                <ul class="l3">
                                    <li onclick="GoSys()">航天员概览</li>
                                </ul>
                            </div>
                            <div class="l2">
                                <span class="l2-title" onclick="GoSys('2')">航天器</span>
                                <div class="hr"></div>
                                <ul class="l3">
                                    <li onclick="GoSys('2-1')">载人飞船系统</li>
                                    <li onclick="GoSys('2-2')">货运飞船系统</li>
                                    <li onclick="GoSys('2-3')">空间站实验室系统</li>
                                    <li onclick="GoSys('2-4')">空间应用系统</li>
                                    <li onclick="GoSys('2-5')">光学舱系统统</li>
                                    <li onclick="GoSys('2-5')">测控通信系</li>
                                    <li onclick="GoSys('2-6')">着陆场系统</li>
                                    <li onclick="GoSys('2-6')">火箭系统</li>
                                    <li onclick="GoSys('2-6')">发射场系统</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <span class="head" onclick="GoHis()">问天之路</span>
                        <div class="his">
                            <div class="l2">
                                <span class="l2-title" onclick="GoHis('1')">了解航天</span>
                                <div class="hr"></div>
                                <ul class="l3">
                                    <li onclick="GoHis('1')">工程简介</li>
                                </ul>
                            </div>
                            <div class="l2">
                                <span class="l2-title" onclick="GoHis('2')">工程文化</span>
                                <div class="hr"></div>
                                <ul class="l3">
                                    <li onclick="GoHis('2')">工程标识</li>
                                    <li onclick="GoHis('2')">工程精神</li>
                                </ul>
                            </div>
                            <div class="l2">
                                <span class="l2-title" onclick="GoHis('3')">工程历史</span>
                                <div class="hr"></div>
                                <ul class="l3">
                                    <li onclick="GoHis('3')">航天历史</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li id="museum">
                        <span class="head" onclick="GoMuse()">九天博苑</span>
                        <div class="muse">
                            <div class="l2">
                                <span class="l2-title" onclick="GoMuse()">线下参观</span>
                                <div class="hr"></div>
                                <ul class="l3">
                                    <li onclick="GoMuse()">开放时间</li>
                                    <li onclick="GoMuse()">在线订票</li>
                                </ul>
                            </div>
                            <div class="l2">
                                <span class="l2-title" onclick="GoMuse('3')">相关公告</span>
                                <div class="hr"></div>
                                <ul class="l3">
                                    <li onclick="GoMuse()">近期展览</li>
                                    <li onclick="GoMuse()">游览须知</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <span class="head" onclick="GoNews()">逐梦飞讯</span>
                        <div class="sl2 news">
                            <span onclick="GoNews()">动态要闻</span>
                            <span onclick="GoNews('2')">国际合作</span>
                            <span onclick="GoNews('3')">国际航天动态</span>
                            <span onclick="GoNews('4')">政策公告</span>
                        </div>
                    </li>
                    <li>
                        <span class="head" onclick="GoPeri()">文创周边</span>
                        <div class="peri">
                            <div class="l2">
                                <span class="l2-title" onclick="GoPeri('1')">周边选购</span>
                                <div class="hr"></div>
                                <ul class="l3">
                                    <li onclick="GoPeri('1')">服饰周边</li>
                                    <li onclick="GoPeri('1-2')">拼装积木</li>
                                    <li onclick="GoPeri('1-3')">纪念吊牌</li>
                                    <li onclick="GoPeri('1-4')">徽章标识</li>
                                    <li onclick="GoPeri('1-5')">形象卡贴</li>
                                </ul>
                            </div>
                            <div class="l2">
                                <span class="l2-title" onclick="GoPeri('2')">专属服务</span>
                                <div class="hr"></div>
                                <ul class="l3">
                                    <li onclick="GoPeri('2')">服务方案</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="icons">
                    <img src="../icons/月亮.png" alt="theme" id="theme-btn" title="切换主题" onclick="ChangeTheme()"
                        style="display: none;">
                    <img src="../icons/gouwuche-2.png" alt="buy-car" title="购物车" style="display: none; "
                        id="nav-buy-car" onmouseenter="ShowBuyCar()">
                    <img src="../icons/xiaoxi-2.png" alt="msg" onmouseenter="ShowMsg()" title="消息">
                    <img src="../icons/touxiang.png" alt="user" title="个人中心" id="nav-user"
                        onmouseenter="ShowPersonal()">
                </div>
                <div class="panel-personal" id="panel-personal" onmouseleave="HidePersonal()">
                    <div class="title">个人中心</div>
                    <div class="head">
                        <img src="../icons/touxiang.png" alt="icon">
                    </div>
                    <div class="user-name">用户名</div>
                    <div class="sub">该用户还没有填写简介</div>
                    <div class="manage" onclick="GoPersonal()">信息填写</div>
                    <div class="btm">
                        <div class="readed" onclick="GoLogin()">重新登录</div>
                    </div>
                </div>
                <div class="panel-msg" id="panel-msg" onmouseleave="HideMsg()">
                    <div class="title">我的消息</div>
                    <div class="content">
                        <div class="g-card card-t">
                            <div class="title">
                                请尽快完善个人信息！
                            </div>
                            <div class="text">
                                请尽快到个人中心界面完善您的个人信息、付款方式与收获地址，以免影响文创产品的购买
                            </div>
                            <div class="date">2023年5月18日</div>
                        </div>
                    </div>
                    <div class="btm">
                        <div class="readed" onclick="ClearMsg()">清空信息</div>
                    </div>
                </div>
                <div class="panel-car" id="panel-car" onmouseleave="HideBuyCar()">
                    <div class="title">购物车</div>
                    <div class="content">
                        <div class="but-card">
                            <div class="dec"></div>
                            <div class="img"></div>
                            <div class="title">海澜之家（HLA）短袖POLO衫男中国航天</div>
                            <div class="cost">￥128</div>
                            <div class="delete" onclick="RemoveBuyCar(this)">
                                <img src="../icons/delete.png" alt="icon">
                            </div>
                        </div>
                    </div>
                    <div class="btm">
                        <div class="cost">
                            <span class="text">购物袋合计：</span>
                            <span class="price">￥128</span>
                        </div>
                        <div class="readed" onclick="ClearBuyCar()">立即结算</div>
                    </div>
                </div>
            </nav>
        </div>
    </div>
  `;
  document.body.innerHTML = nav + document.body.innerHTML;
}

//返回顶部
function PrintTopBtn() {
  let top_btn = `
    <link rel="stylesheet" href="../css/top-btn.css">
    <div class="add-top-btn" onclick="BackToTop()">
        <img src="../icons/totop.png" alt="icon">
        <div>顶部</div>
    </div>
  `;
  document.body.innerHTML = top_btn + document.body.innerHTML;
}
function BackToTop() {
  let c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 1) {
    window.requestAnimationFrame(BackToTop);
    window.scrollTo(0, c - c / 8);
  } else {
    window.scrollTo(0, 0);
  }
}

//页脚
function PrintFooter() {
  let footer = `
    <link rel="stylesheet" href="../css/footer.css">
    <div class="add-footer">
        <div class="ban">
            <div class="type-area">
                <footer>
                    <ul>
                        <li class="h1">
                            <div onclick="GoSys()">系统组成</div>
                            <ul>
                                <li class="h2">
                                    <div onclick="GoSys()">航天员</div>
                                    <ul>
                                        <li class="h3" onclick="GoSys()">航天员概览</li>
                                    </ul>
                                </li>
                                <li class="h2">
                                    <div onclick="GoSys('2')">航天器</div>
                                    <ul>
                                        <li class="h3" onclick="GoSys('2-1')">载人飞船系统</li>
                                        <li class="h3" onclick="GoSys('2-2')">货运飞船系统</li>
                                        <li class="h3" onclick="GoSys('2-3')">空间实验室系统</li>
                                        <li class="h3" onclick="GoSys('2-4')">空间应用系统</li>
                                        <li class="h3" onclick="GoSys('2-5')">光学舱系统统</li>
                                        <li class="h3" onclick="GoSys('2-5')">测控通信系</li>
                                        <li class="h3" onclick="GoSys('2-6')">着陆场系统</li>
                                        <li class="h3" onclick="GoSys('2-6')">火箭系统</li>
                                        <li class="h3" onclick="GoSys('2-6')">发射场系统</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="h1">
                            <div onclick="GoHis()">问天之路</div>
                            <ul>
                                <li class="h2">
                                    <div onclick="GoHis('1')">了解航天</div>
                                    <ul class="l3">
                                        <li class="h3" onclick="GoHis('1')">工程简介</li>
                                    </ul>
                                </li>
                                <li class="h2">
                                    <div onclick="GoHis('2')">工程文化</div>
                                    <ul>
                                        <li class="h3" onclick="GoHis('2')">工程标识</li>
                                        <li class="h3" onclick="GoHis('2')">工程精神</li>
                                    </ul>
                                </li>
                                <li class="h2">
                                    <div onclick="GoHis('3')">航天历史</div>
                                </li>
                            </ul>
                        </li>
                        <li class="h1">
                            <div onclick="GoMuse()">九天博苑</div>
                            <ul>
                                <li class="h2">
                                    <div onclick="GoMuse()">线下参观</div>
                                    <ul>
                                        <li class="h3" onclick="GoMuse()">开放时间</li>
                                        <li class="h3" onclick="GoMuse()">在线订票</li>
                                    </ul>
                                </li>
                                <li class="h2">
                                    <div onclick="GoMuse('3')">相关公告</div>
                                    <ul>
                                        <li class="h3" onclick="GoMuse()">近期展览</li>
                                        <li class="h3" onclick="GoMuse()">游览须知</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="h1">
                            <div onclick="GoNews()">逐梦飞讯</div>
                            <ul>
                                <li class="h2" onclick="GoNews()">
                                    <div>动态要闻</div>
                                </li>
                                <li class="h2" onclick="GoNews('2')">
                                    <div>国际合作</div>
                                </li>
                                <li class="h2" onclick="GoNews('3')">
                                    <div>国际航天动态</div>
                                </li>
                                <li class="h2" onclick="GoNews('4')">
                                    <div>政策公告</div>
                                </li>
                            </ul>
                        </li>
                        <li class="h1">
                            <div onclick="GoPeri()">文创周边</div>
                            <ul>
                                <li class="h2">
                                    <div onclick="GoPeri('1')">周边选购</div>
                                    <ul>
                                        <li class="h3" onclick="GoPeri('1')">服饰周边</li>
                                        <li class="h3" onclick="GoPeri('1-2')">拼装积木</li>
                                        <li class="h3" onclick="GoPeri('1-3')">纪念吊牌</li>
                                        <li class="h3" onclick="GoPeri('1-4')">徽章标识</li>
                                        <li class="h3" onclick="GoPeri('1-5')">形象卡贴</li>
                                    </ul>
                                </li>
                                <li class="h2">
                                    <div onclick="GoPeri('2')">专属服务</div>
                                    <ul>
                                        <li class="h3" onclick="GoPeri('2')">服务方案</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </footer>
            </div>
        </div>
    </div>
  `;
  document.body.innerHTML += footer;
}
