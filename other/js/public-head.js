// let new_product_ele=document.querySelector("#new-product")
// let hot_spring_sale_ele=document.querySelector("#hot-spring-sale")
// let accessory_ele=document.querySelector('#accessory')
// let new_product_box=document.querySelector('.new-product-box')
// let hot_spring_sale_box=document.querySelector('.hot-spring-sale-box')
// let accessory_box=document.querySelector('.accessory-box')
import Utils from "./Utils.js";
export default class publicHead{
    new_product_ele=document.querySelector("#new-product")
    hot_spring_sale_ele=document.querySelector("#hot-spring-sale")
    accessory_ele=document.querySelector('#accessory')
    new_product_box=document.querySelector('.new-product-box')
    hot_spring_sale_box=document.querySelector('.hot-spring-sale-box')
    accessory_box=document.querySelector('.accessory-box')
    npe_on=false;
    hsse_on=false;
    ae_on=false;
    constructor(){
        this.loggingStatus();
        this.addEventListener();
    }
     advBoxOn(ele){
        switch(ele){
            case this.new_product_ele:{
                if(this.npe_on){
                    this.new_product_box.style.display="block"
                    }else{
                    this.new_product_box.style.display="none"
                
                    }
                    
            }break;
            case this.hot_spring_sale_ele:{
                if(this.hsse_on){
                    this.hot_spring_sale_box.style.display="block"
                    }else{
                    this.hot_spring_sale_box.style.display="none"
                
                    }
            }break;
            case this.accessory_ele:{
                if(this.ae_on){
                    this.accessory_box.style.display="block"
                    }else{
                    this.accessory_box.style.display="none"
                
                    }
            }
        }
        
    }
    //添加监听事件
    addEventListener(){
        this.new_product_ele.addEventListener('mouseover',e=>this.npeMouseHandler(e));
        this.new_product_ele.addEventListener('mouseout',e=>this.npeMouseHandler(e));
        
        this.hot_spring_sale_ele.addEventListener('mouseover',e=>this.hsseMouseHandler(e));
        this.hot_spring_sale_ele.addEventListener('mouseout',e=>this.hsseMouseHandler(e));
        
        this.accessory_ele.addEventListener('mouseover',e=>this.aeMouseHandler(e));
        this.accessory_ele.addEventListener('mouseout',e=>this.aeMouseHandler(e));
        
        this.new_product_box.addEventListener('mouseover',e=>this.npeMouseHandler(e));
        this.new_product_box.addEventListener('mouseout',e=>this.npeMouseHandler(e));
        
        this.hot_spring_sale_box.addEventListener('mouseover',e=>this.hsseMouseHandler(e));
        this.hot_spring_sale_box.addEventListener('mouseout',e=>this.hsseMouseHandler(e));
        
        this.accessory_box.addEventListener('mouseover',e=>this.aeMouseHandler(e));
        this.accessory_box.addEventListener('mouseout',e=>this.aeMouseHandler(e));
        
    }
    
     npeMouseHandler(e){
        if(e.type==="mouseover"){
            this.npe_on=true;
        }else{
            this.npe_on=false
        }
        this.advBoxOn(this.new_product_ele)
        
    }
    
     hsseMouseHandler(e){
        if(e.type==="mouseover"){
            this.hsse_on=true;
        }else{
            this.hsse_on=false
        }
        this.advBoxOn(this.hot_spring_sale_ele)
        
    }
    
     aeMouseHandler(e){
        if(e.type==="mouseover"){
            this.ae_on=true;
        }else{
            this.ae_on=false
        }
        this.advBoxOn(this.accessory_ele)
    }
    loggingStatus(){
        let loginedHead=document.querySelector("#unLoginedHead")
        let top_l=document.querySelector(".top_l")
        loginedHead.style.display="none"
        let ul=Utils.ce("ul",{
            display:"none"
        },top_l);
        ul.className="LoginedHead";
        // <span class="top_ml"></span>
        let li1=Utils.ce("li",{
            cursor: "pointer",
        },ul);
        li1.innerHTML="HI,"+sessionStorage.name+"&nbsp;&nbsp;|";
        let li2=Utils.ce("li",{},ul);
        li2.innerHTML="当前等级：普通会员&nbsp;|";
        let li3=Utils.ce("li",{
            cursor: "pointer",
        },ul);
        li3.innerHTML="我的收藏"
        let li4=Utils.ce("li",{
            cursor: "pointer",
        },ul);
        li4.className="exit"
        li4.innerHTML="退出"
        if(sessionStorage.name=="undefined"){
            ul.style.display="none"
            loginedHead.style.display="block"
        }
        else if(sessionStorage.name!="undefined"){
        ul.style.display="block"
        li4.onclick=function(){
            sessionStorage.name="undefined";
            ul.style.display="none"
            loginedHead.style.display="block"
        }
        }
       
      
    }
}
/* 鼠标移入显示广告栏*/



//添加状态显示函数
// function advBoxOn(ele){
//     switch(ele){
//         case new_product_ele:{
//             if(npe_on){
//                 new_product_box.style.display="block"
//                 }else{
//                 new_product_box.style.display="none"
            
//                 }
                
//         }break;
//         case hot_spring_sale_ele:{
//             if(hsse_on){
//                 hot_spring_sale_box.style.display="block"
//                 }else{
//                     hot_spring_sale_box.style.display="none"
            
//                 }
//         }break;
//         case accessory_ele:{
//             if(ae_on){
//                 accessory_box.style.display="block"
//                 }else{
//                     accessory_box.style.display="none"
            
//                 }
//         }
//     }
    
// }
// //添加监听事件
// new_product_ele.addEventListener('mouseover',npeMouseHandler);
// new_product_ele.addEventListener('mouseout',npeMouseHandler);

// hot_spring_sale_ele.addEventListener('mouseover',hsseMouseHandler);
// hot_spring_sale_ele.addEventListener('mouseout',hsseMouseHandler);

// accessory_ele.addEventListener('mouseover',aeMouseHandler);
// accessory_ele.addEventListener('mouseout',aeMouseHandler);

// new_product_box.addEventListener('mouseover',npeMouseHandler);
// new_product_box.addEventListener('mouseout',npeMouseHandler);

// hot_spring_sale_box.addEventListener('mouseover',hsseMouseHandler);
// hot_spring_sale_box.addEventListener('mouseout',hsseMouseHandler);

// accessory_box.addEventListener('mouseover',aeMouseHandler);
// accessory_box.addEventListener('mouseout',aeMouseHandler);

// function npeMouseHandler(e){
//     if(e.type==="mouseover"){
//         npe_on=true;
//     }else{
//         npe_on=false
//     }
//     advBoxOn(new_product_ele)
    
// }

// function hsseMouseHandler(e){
//     if(e.type==="mouseover"){
//         hsse_on=true;
//     }else{
//         hsse_on=false
//     }
//     advBoxOn(hot_spring_sale_ele)
    
// }

// function aeMouseHandler(e){
//     if(e.type==="mouseover"){
//         ae_on=true;
//     }else{
//         ae_on=false
//     }
//     advBoxOn(accessory_ele)
// }