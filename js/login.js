//启动项
PrintNav();

/* 登录 */
//登录
function Login() {
  if (!ValidateLogin()) return;
  if (loginEmail.value != user_name || loginPwd.value != user_pwd) {
    alert("密码或账号错误！");
    loginEmail.value = loginPwd.value = "";
    return;
  }
  alert("登录成功！");
  GoIndex();
}
var loginEmail = document.getElementById("login-email");
var loginPwd = document.getElementById("login-pwd");
function ValidateLogin() {
  let email = document.getElementById("login-email").value;
  let password = document.getElementById("login-pwd").value;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("请输入有效的电子邮箱");
    loginEmail.value = loginPwd.value = "";
    return false;
  }
  let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,24}$/;
  if (!passwordRegex.test(password)) {
    alert("密码必须包含至少一个字母和一个数字，且长度为8-24个字符");
    loginEmail.value = loginPwd.value = "";
    return false;
  }
  return true;
}

/* 注册 */
//前往注册
var flipBox = document.getElementById("flip-box");
var flipBoxInner = document.getElementById("flip-box-inner");
function GoRegister() {
  flipBoxInner.style = "height: 670px; transform: rotateY(180deg);";
}
//返回
function Back() {
  flipBoxInner.style = "height: 565px;";
}
//注册
function Register() {
  if (!ValidateRegister()) {
    document.getElementById("register-email").value =
      document.getElementById("register-pwd").value =
      document.getElementById("register-pwd2").value =
        "";
    return;
  }
  alert("注册成功！");
  GoIndex();
}
function ValidateRegister() {
  let email = document.getElementById("register-email").value;
  let password = document.getElementById("register-pwd").value;
  let confirmPassword = document.getElementById("register-pwd2").value;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("请输入有效的电子邮箱地址");
    return false;
  }
  let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,14}$/;
  if (!passwordRegex.test(password)) {
    alert("密码必须为8-14位的至少包含一个字母和一个数字的组合");
    return false;
  }
  if (password !== confirmPassword) {
    alert("两次输入的密码不一致");
    return false;
  }
  return true;
}
