var inputs,btn,form,phone,loginPassword,tryPassword
init();
function init(){
    phone=document.querySelector("#phone")
    loginPassword=document.querySelector("#loginPassword")
    btn = document.querySelector("#subReg");

    btn.addEventListener("click",clickHandler)
}
function submitHandler(e){
    e.preventDefault()
}
function clickHandler(){
    var data = {
        phone : phone.value,
        password : loginPassword.value,
      
    }
    ajax(data);
}
function ajax(data){
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load",loadHadler);
    xhr.open("POST","http://10.20.159.169:5000/registe");
    xhr.send(JSON.stringify(data))
}
function loadHadler(e){
    alert(e.currentTarget.response)
}