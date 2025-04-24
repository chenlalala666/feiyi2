//初始化
PrintNav();

//保存表单
const titleName = document.getElementById("title-name");
const form = document.getElementById("form");
const userNameInput = document.getElementById("user-name");
const sloginInput = document.getElementById("slogin");
const genderSelecter = document.getElementById("gender");
const birthInput = document.getElementById("birth");
const adressInput = document.getElementById("adress");
const button = document.getElementById("button");
var gender = "男";
function Submit() {
  if (!CheckNameFormat(userNameInput.value)) {
    alert("昵称为3-13字符，只能包含数字、英文字母与汉字");
    userNameInput.value = "";
    return;
  }
  if (!CheckBirthFormat(birthInput.value)) {
    alert("生日格式为“2000-1-1”");
    birthInput.value = "";
    return;
  }
  let slogin = sloginInput.value;
  let birth = birthInput.value;
  let adress = adressInput.value;
  titleName.innerText = userNameInput.value;
  form.innerHTML = `
            <div class="item slogin">
                <div class="name">签名：</div>
                <div class="submitted">
                    ${slogin}
                </div>
            </div>
            <div class="item gender">
                <div class="name">性别：</div>
                <div class="submitted">
                    ${gender}
                </div>
            </div>
            <div class="item birth">
                <div class="name">生日：</div>
                <div class="submitted">
                    ${birth}
                </div>
            </div>
            <div class="item adress">
                <div class="name">地址：</div>
                <div class="submitted">
                    ${adress}
                </div>
            </div>
  `;
  button.remove();
}

//检测
function CheckNameFormat(inputStr) {
  if (inputStr.length < 3 || inputStr.length > 13) {
    return false;
  }
  let regex = /^[0-9a-zA-Z\u4e00-\u9fa5]+$/;
  if (!regex.test(inputStr)) {
    return false;
  }
  return true;
}
function CheckBirthFormat(inputStr) {
  let regex = /^\d{4}-\d{1,2}-\d{1,2}$/;
  if (!regex.test(inputStr)) {
    return false;
  }
  return true;
}

//选择性别
const genderBtns = genderSelecter.querySelectorAll("div");
function SelectGender(index) {
  gender = index == 0 ? "男" : "女";
  genderBtns[0].style = genderBtns[1].style =
    "color: black; background-color: white;";
  genderBtns[index].style = "color: white; background-color: #0F4C81;";
}
