let new_product_ele=document.querySelector("#new-product")
let hot_spring_sale_ele=document.querySelector("#hot-spring-sale")
let accessory_ele=document.querySelector('#accessory')
let new_product_box=document.querySelector('.new-product-box')
let hot_spring_sale_box=document.querySelector('.hot-spring-sale-box')
let accessory_box=document.querySelector('.accessory-box')

/* 鼠标移入显示广告栏*/

let npe_on=false;
let hsse_on=false;
let ae_on=false;

//添加状态显示函数
function advBoxOn(ele){
    switch(ele){
        case new_product_ele:{
            if(npe_on){
                new_product_box.style.display="block"
                }else{
                new_product_box.style.display="none"
            
                }
                
        }break;
        case hot_spring_sale_ele:{
            if(hsse_on){
                hot_spring_sale_box.style.display="block"
                }else{
                    hot_spring_sale_box.style.display="none"
            
                }
        }break;
        case accessory_ele:{
            if(ae_on){
                accessory_box.style.display="block"
                }else{
                    accessory_box.style.display="none"
            
                }
        }
    }
    
}
//添加监听事件
new_product_ele.addEventListener('mouseover',npeMouseHandler);
new_product_ele.addEventListener('mouseout',npeMouseHandler);

hot_spring_sale_ele.addEventListener('mouseover',hsseMouseHandler);
hot_spring_sale_ele.addEventListener('mouseout',hsseMouseHandler);

accessory_ele.addEventListener('mouseover',aeMouseHandler);
accessory_ele.addEventListener('mouseout',aeMouseHandler);

new_product_box.addEventListener('mouseover',npeMouseHandler);
new_product_box.addEventListener('mouseout',npeMouseHandler);

hot_spring_sale_box.addEventListener('mouseover',hsseMouseHandler);
hot_spring_sale_box.addEventListener('mouseout',hsseMouseHandler);

accessory_box.addEventListener('mouseover',aeMouseHandler);
accessory_box.addEventListener('mouseout',aeMouseHandler);

function npeMouseHandler(e){
    if(e.type==="mouseover"){
        npe_on=true;
    }else{
        npe_on=false
    }
    advBoxOn(new_product_ele)
    
}

function hsseMouseHandler(e){
    if(e.type==="mouseover"){
        hsse_on=true;
    }else{
        hsse_on=false
    }
    advBoxOn(hot_spring_sale_ele)
    
}

function aeMouseHandler(e){
    if(e.type==="mouseover"){
        ae_on=true;
    }else{
        ae_on=false
    }
    advBoxOn(accessory_ele)
}