import Utils from "./Utils.js";
export default class GoodList{
  
  constructor(){
    this.ajax();
 
  }
   ajax(){
    let xhr=new XMLHttpRequest();
    xhr.addEventListener("load",e=>this.loadHandler(e));
    xhr.open("POST","http://127.0.0.1:4011/GoodList");
    xhr.send();
  }
   loadHandler(e){
    let arr=e.currentTarget.response
    arr=JSON.parse(arr)
    this.createEle(arr);
  }
  createEle(arr){
   let oUl=document.querySelector(".right-list ul")

    arr.forEach((item,index)=>{
      let li=Utils.ce('li',{},oUl)
      let phoA=Utils.ce("a",{},li)
      phoA.href="./GoodDetails.html#id="+item.id+"&&goodSn="+item.goodSn+""
      let photoDiv=Utils.ce("div",{},phoA)
      photoDiv.className="photo"
      let bigImg=Utils.ce("img",{},photoDiv)
      bigImg.src=item.photo;
      let thumbDiv=Utils.ce("div",{},li);
      thumbDiv.className="thumb"
      item.thumb.forEach((item,index)=>{
        let thumbImg=Utils.ce("img",{
          width:"30px",
          height:"30px"
        },thumbDiv)
        thumbImg.src=item
        if(index==0)thumbImg.className="selected";
      })
      let detA=Utils.ce("a",{},li)
      let priDiv=Utils.ce("div",{},detA)
      priDiv.className="price";
      priDiv.innerHTML=item.price;
      let detDiv=Utils.ce("div",{},detA)
      detDiv.className="detail"
      detDiv.innerHTML=item.detail

      let ratDiv=Utils.ce("div",{},li);
      ratDiv.className="rates";
      let salSpan=Utils.ce("span",{},ratDiv)
      salSpan.className="sales"
      salSpan.innerHTML="总销量:"
      let salFont=Utils.ce("font",{},salSpan)
      salFont.innerHTML=item.sales;
      this.getEle(li,bigImg,item)
      
      // console.log(this)
      // thumbList.addEventListener("click",e=>GoodList.thuclickHandler(e))
    
      
    })
  }
  getEle(li,bigImg){
    // let thumbList=document
    let thumbList=li.querySelector(".thumb")
    thumbList.addEventListener("click",e=>this.thuclickHandler(e,bigImg))
    // console.log(thumbList)
    
  }
  thuclickHandler(e,bigImg){
    if (e.target.constructor !== HTMLImageElement) return;
    var index = Array.from(e.currentTarget.children).indexOf(e.target);
        
        bigImg.src=e.target.src
        var tpcArr=Array.from(e.target.parentNode.children)
        tpcArr.forEach((item)=>{
          item.className=""
        })
        e.target.className="selected"
        
      
        
  }
}