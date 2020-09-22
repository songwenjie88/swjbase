var inputs, btn, form ,loginUserName
init();
function init() {
    // form = document.querySelector("form")
    inputs = document.querySelectorAll("input")
    btn = document.querySelector("#loginbtn");
    // form.addEventListener("submit", submitHandler);
    btn.addEventListener("click", clickHandler)
    loginUserName=document.querySelector("#loginUserName")
    loginPassword=document.querySelector("#loginPassword")
}
function submitHandler(e) {
    e.preventDefault()
}
function clickHandler() {
    var data = {
        
        phone : loginUserName.value,
        password : loginPassword.value,
    }
    ajax(data);
}
function ajax(data) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", loadHadler);
    xhr.open("POST", "http://10.20.159.169:5000/login");
    xhr.send(JSON.stringify(data))
}
function loadHadler(e) {
    try {
        var a = JSON.parse(e.currentTarget.response);
        sessionStorage.name = a.name;
        location.href = "./home.html"
        
    } catch {
        alert("账户或密码错误");
    }
}