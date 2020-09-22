import Utils from "./Utils.js";
export default class GoodDetails{
  focusBox_L;//焦点小盒子的Left值
  focusBox_T;//焦点小盒子的Top值

  focusBox_w;//焦点小盒子的宽;
  focusBox_h;//焦点小盒子的高;

  bigImg_ele_x;//大照片距离最左边的边距
  bigImg_ele_y;//大照片距离最上边的边距
  
  bigImgBox_w//大盒子的宽
  bigImgBox_h//大盒子的高
  

  focusBox_pIX;//焦点小盒子背景图片位置的X值
  focusBox_pIY;//焦点小盒子背景图片位置的Y值

  ipt_num; //增加数量的输入框里面的值
  constructor(){
    this.ajax();
  }
   ajax(){
    let xhr=new XMLHttpRequest();
    xhr.addEventListener("load",e=>this.loadHandler(e));
    xhr.open("POST","http://10.20.159.169:5000/GoodDetails");
    xhr.send();
  }
   loadHandler(e){
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

   let focusBox=Utils.ce("div",{},bigImgBox)
   focusBox.className="focus-box"
  //  console.log(bigImgBox)
   
   

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
   this.getEle(specBox,bigImg_ele,focusBox,bigImgBox);

   this.magnifier(bigImg_ele,focusBox,bigImgBox)

   /* 右侧选项表 */

    let goodName=document.querySelector(".goodname")
    goodName.innerHTML=res.detail;

    let goodCode=document.querySelector(".goodcode")
    goodCode.innerHTML="商品编号"+res.goodSn

    let priceNum=document.querySelector(".priceNum")
    priceNum.innerHTML=res.price

    let goodSizeUl=document.querySelector(".good_size")
    res.size.forEach((item,index)=>{
      let goodSizeLi=Utils.ce("li",{},goodSizeUl)
      goodSizeLi.className="cur option"
      goodSizeLi.innerHTML=item;
      goodSizeLi.setAttribute("data-value",item);
      if(index===0){
        goodSizeLi.className="cur option active"
      }
    })

    //给size选项卡添加点击事件
    goodSizeUl.addEventListener("click",e=>this.goodSUClickHandler(e))


    let goodColorUl=document.querySelector(".good_color")
    res.color.forEach((item,index)=>{
      let goodColorLi=Utils.ce("li",{
        padding:" 0px 5px",
        margin: "3px 2px",
      },goodColorUl)
      goodColorLi.innerHTML=item
      goodColorLi.setAttribute("data-value",item);
      goodColorLi.className="option color"
      if(index===0){
        goodColorLi.className="option color active"
      }
    })

    //给 color选项卡添加点击事件
    goodColorUl.addEventListener("click",e=>this.goodCUClickHandler(e))


    //获取到改变数量的部分
    let num_input=document.querySelector("#num");
    let up_num=document.querySelector(".up_num")
    let lower_num=document.querySelector(".lower_num")
    let favBtn=document.querySelector(".favBtn")

    

    this.num=num_input.value
    
    
    up_num.onclick=()=>{
      this.num++;
      if(num_input.value>=200||this.num>=200){
        num_input.value=200;
        return;
      }
      num_input.value=this.num

    }
    lower_num.onclick=()=>{
      this.num--;
      if(num_input.value<=0||this.num<=0){
        num_input.value=0;
        return;
      }
      num_input.value=this.num

    }
    num_input.onchange=()=>{
      this.num=num_input.value;
    }



  }




  getEle(specBox,bigImg_ele,focusBox,bigImgBox){
    specBox.addEventListener("click",e=>this.speClickHandler(e,bigImg_ele,focusBox,bigImgBox))
 
    

  }
  speClickHandler(e,bigImg_ele,focusBox,bigImgBox){
    if (e.target.constructor !== HTMLImageElement) return;
    bigImg_ele.src=e.target.src;
    this.magnifier(bigImg_ele,focusBox,bigImgBox)
  }
  magnifier(bigImg_ele,focusBox,bigImgBox){
    let scale_box_ele=document.querySelector(".scale-box-ele");
    let scale_box=document.querySelector(".scale-box");
    scale_box_ele.src=bigImg_ele.src
    focusBox.style.backgroundImage='url('+bigImg_ele.src+')';
    

    bigImgBox.addEventListener("mouseover",e=>this.bibMouseHandler(e,focusBox,scale_box,bigImgBox))
    bigImgBox.addEventListener("mouseout",e=>this.bibMouseHandler(e,focusBox,scale_box,bigImgBox))



    this.focusBox_w=parseInt(getComputedStyle(focusBox).width)
    this.focusBox_h=parseInt(getComputedStyle(focusBox).height)

    this.bigImgBox_w=parseInt(getComputedStyle(bigImgBox).width);
    this.bigImgBox_h=parseInt(getComputedStyle(bigImgBox).height);
    // console.log(this.bigImgBox_w,this.bigImgBox_h)
 
    bigImgBox.addEventListener("mousemove",e=>this.bibMouseMoveHandler(e,bigImg_ele,focusBox))
    //focusbox背景跟随鼠标位置改变
    document.addEventListener("mousemove",e=>this.docuMouseMoveHandler(e,focusBox))

   

  }
  bibMouseHandler(e,focusBox,scale_box,bigImg_ele){
    let bigImg=document.querySelector(".head_figure")
    if(e.type=="mouseover"){
      if(e.clientX>this.getOffset(bigImg_ele).x){
        focusBox.style.display="block";
        scale_box.style.display="block";
        bigImg.style.opacity=0.3
        
      }
      else{
        focusBox.style.display="none"
        scale_box.style.display="none";
        bigImg.style.opacity=1
      }
    
  }
    else {
    focusBox.style.display="none"
    scale_box.style.display="none";
    bigImg.style.opacity=1


    }
  }

  bibMouseMoveHandler(e,bigImg_ele,focusBox){
    // console.log(e.clientX)
    // let e= e||window.event;
   

    this.bigImg_ele_x=this.getOffset(bigImg_ele).x
    this.bigImg_ele_y=this.getOffset(bigImg_ele).y
    this.focusBox_L=e.clientX-this.bigImg_ele_x-this.focusBox_w/2
    this.focusBox_T=e.clientY-this.bigImg_ele_y-this.focusBox_h/2
    

    //边界检测 超出右边部分
    if(e.clientX>this.bigImg_ele_x+this.bigImgBox_w-(this.focusBox_w/2)-15){
      this.focusBox_L=this.bigImgBox_w-this.focusBox_w-15
  }
        //边界检测 超出左边部分

    if(e.clientX<this.bigImg_ele_x+(this.focusBox_w/2)+15){
          this.focusBox_L=15
  }
  //边界检测 超出上边部分
  if(e.clientY<this.bigImg_ele_y+(this.focusBox_h/2)+15){
    this.focusBox_T=15

  }
  //边界检测 超出下边部分
  if(e.clientY>this.bigImg_ele_y+this.bigImgBox_h-(this.focusBox_h/2)-19){
    this.focusBox_T=this.bigImgBox_h-this.focusBox_h-19
  
  
  }
    focusBox.style.left=this.focusBox_L+'px';
    focusBox.style.top=this.focusBox_T+'px';
}
docuMouseMoveHandler(e,focusBox){//鼠标移动 改变焦点小盒子的背景图片的位置，并且改变右边展示盒子图片的位置
  let scale_box_ele=document.querySelector(".scale-box-ele")
  let focus_box=document.querySelector(".focus-box")
  let scale_box_ele_size=parseFloat(getComputedStyle(scale_box_ele).width)
  let focus_box_bgpx=parseFloat(getComputedStyle(focus_box).backgroundSize)

  let moveProp=scale_box_ele_size/focus_box_bgpx
  moveProp=Math.floor(moveProp*10)/10;//保留一位小数 且以为以后的小数不会进行四舍五入


  this.focusBox_pIX=parseInt(getComputedStyle(focusBox).left)
  this.focusBox_pIY=parseInt(getComputedStyle(focusBox).top)
  focusBox.style.backgroundPositionX=-1 * this.focusBox_pIX+15+'px'
  focusBox.style.backgroundPositionY=-1 * this.focusBox_pIY+15+'px'


  scale_box_ele.style.left=-1 * moveProp*this.focusBox_pIX+15+'px'//moveProp为 在焦点盒子里面 鼠标移动一下 改变1px 但是右边展示盒子更大一些 所以每移动一下改变的值也要更大一些 比例是焦点盒子背景图的大小比展示盒子中图片的大小
  scale_box_ele.style.top=-1 * moveProp*this.focusBox_pIY+15+'px'//
  
}


goodSUClickHandler(e){
  if (e.target.constructor !== HTMLLIElement) return;
    let goodSL=Array.from(e.target.parentNode.children)
    goodSL.forEach((item)=>{
      item.className="cur option"
    })
    e.target.className="cur option active"
}


goodCUClickHandler(e){
  if (e.target.constructor !== HTMLLIElement) return;
    let goodCL=Array.from(e.target.parentNode.children)
    goodCL.forEach((item)=>{
      item.className="option color"
    })
    e.target.className="option color active"
}
getOffset(dom){
    let res={
        x:0,
        y:0
    }
    while(dom!=document.body){
        res.x+=dom.offsetLeft;
        res.y+=dom.offsetTop;
        dom=dom.offsetParent
    }
    return res;
}
}