import Utils from "./Utils.js";
export default class GoodDetails{
  
  constructor(){
    GoodDetails.ajax();
  }
  static ajax(){
    let xhr=new XMLHttpRequest();
    xhr.addEventListener("load",GoodDetails.loadHandler);
    xhr.open("POST","http://127.0.0.1:4011/GoodDetails");
    xhr.send();
  }
  static loadHandler(e){
    let hash=location.hash;
    let id=hash.split("=")[1].split("&&")[0];
    let arr=e.currentTarget.response
    let res=null
    let good_img=document.querySelector(".good_img")
    arr=JSON.parse(arr)
/* 左侧图片部分*/ 
    arr.some((item)=>{
       if(item.id==id){
        res=item
        return res;
       }
   })
   
   let bigImgBox=Utils.ce("div",{},good_img)
   let bigImg_ele=Utils.ce("img",{},bigImgBox)
   bigImg_ele.src=res.photo;
   bigImg_ele.className="head_figure";

   let specBox=Utils.ce("div",{},good_img);
   specBox.className="spec-n5";

   let specUl=Utils.ce("ul",{},specBox);
   specUl.className="lunboUl"

   for(let i=0;i<5;i++){
       let specLi=Utils.ce("li",{},specUl);
       specLi.className="cur"
       let specImg=Utils.ce("img",{
        width:"55px",
        height:"55px",
       },specLi)
       specImg.className="goodsImg";
       specImg.src=res.thumb[i]
   }

   /* 右侧选项表 */

    let goodName=document.querySelector(".goodname")
    goodName.innerHTML=res.detail;

    let goodCode=document.querySelector(".goodcode")
    goodCode.innerHTML="商品编号"+res.goodSn

    let priceNum=document.querySelector(".priceNum")
    priceNum.innerHTML=res.price
  }
}