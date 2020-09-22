// var imgLinks=document.querySelector("#imgLinks")
// var imgLink=document.querySelectorAll(".imgLink")
// imgLink=Array.from(imgLink)


       
//        ajax();

//       function ajax() {
//         var xhr = new XMLHttpRequest();
//         xhr.addEventListener("load", loadHandler);
//         xhr.open("GET", "http://10.20.159.169:4011/province");
//         xhr.send();
//       }

//       function loadHandler(e) {
//         var attr = JSON.parse(e.currentTarget.response);
//         var arr=[]
//         for(var attrs in attr){
//           arr.push(attrs)
//           // document.write("<img src='"+attr+"'></img>")
//         }
//       for(var i=0;i<arr.length;i++){
//         var img=document.createElement("img");
//         var a=document.createElement("a")
//         img.src=arr[i];
//         a.href="./listPage.html"
//         imgLink[i].appendChild(a)
//         a.appendChild(img)



//       }

//       }
      






//     // 接口含义
//     // node服务端  理解路径的问题，作为接口请求的类型  将数据分解发回给客户端
//     // ajax通信 方式
//     // Utils.setCss   如何通过js添加css样式
//     // Utils.addClass removeClass   复习正则和数组方法，完成添加删除class
//     // ES6面向对象生成tabs，并且通过两次获取ajax不同项目id获取到不同标签，生成对应组的选项卡
//     // 当针对多组切换选项时，通过prevList这个对象，针对不同的组名存储唯一prev，以达到切换不同组的选项卡目的

// es6
/* var imgLinks=document.querySelector("#imgLinks")
var imgLink=document.querySelectorAll(".imgLink")
imgLink=Array.from(imgLink)
function ajax(){
  var xhr=new XMLHttpRequest();
  xhr.addEventListener("load",loadHandler);
  xhr.open("POST","http://10.20.159.169:4011/advImg");
  xhr.send();
}
function loadHandler(e){
    var arr=e.currentTarget.response
    arr=JSON.parse(arr)
    console.log(arr)
  
    for(var i=0;i<arr.length;i++){
      var img=document.createElement("img");
      var a=document.createElement("a")
      img.src=arr[i].imgsrc;
      a.href="./listPage.html"
      imgLink[i].appendChild(a)
      a.appendChild(img)
    }

    
}

ajax() */

export default class homeAdvImg{
  
  constructor(){
    homeAdvImg.ajax();
  }
  static ajax(){
    let xhr=new XMLHttpRequest();
    xhr.addEventListener("load",homeAdvImg.loadHandler);
    xhr.open("POST","http://10.20.159.169:5000/advImg");
    xhr.send();
  }
  static loadHandler(e){
    let imgLink=document.querySelectorAll(".imgLink")
    imgLink=Array.from(imgLink)

    let arr=e.currentTarget.response
    arr=JSON.parse(arr)
  
    for(let i=0;i<arr.length;i++){
      let img=document.createElement("img");
      let a=document.createElement("a")
      img.src=arr[i].imgsrc;
      a.href="./listPage.html";

      imgLink[i].appendChild(a)
      a.appendChild(img)
    }
  }
}