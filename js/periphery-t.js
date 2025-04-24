//启动项
PrintNav();
window.onload = () => {
  let img = document.querySelector(".main .img img");
  if (img.offsetWidth > img.offsetHeight) {
    img.style.width = "80%";
    img.style.height = "auto";
  }
};

//购买
document.getElementById("nav-buy-car").style.display = "inline-block";
document.querySelector(".btn").addEventListener("click", () => {
  let infos = document.querySelector(".main");
  AddToBuyCar(
    infos.querySelector(".title").innerHTML,
    infos.querySelector(".price>div").innerHTML.trim().replace("￥", ""),
    infos.querySelector(".img img").getAttribute("src")
  );
  ShowBuyCar();
});

