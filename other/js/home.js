//ES5
// var tr_hidden_btn=document.querySelector(".trast_hidden")
// var tr_show_btn=document.querySelector(".trast_show")
// var trast_con=document.querySelector("#trast_container")
// var trasting=true
// trastBox();
// function trastBox(){
//     if (trasting){
//         trast_con.style.display="block";
//     }else{
//         trast_con.style.display="none";
//     }
//     tr_hidden_btn.addEventListener("click",trhClickhandler);
//     tr_show_btn.addEventListener("click",trsClickHandler)
// }
// function trhClickhandler(){
//     trasting=!trasting
//     trastBox();
//     tr_hidden_btn.style.display="none";
//     tr_show_btn.style.display="block"

// }
// function trsClickHandler(){
//     trasting=!trasting
//     trastBox();
//     tr_hidden_btn.style.display="block";
//     tr_show_btn.style.display="none"

// }


//ES6
export default class trastFn{
    tr_hidden_btn=document.querySelector(".trast_hidden")
    tr_show_btn=document.querySelector(".trast_show")
    trast_con=document.querySelector("#trast_container")

    trasting=true;
    constructor(){
        this.trClick();   
        this.trastBox();

    }
    trClick(){
        this.tr_hidden_btn.addEventListener("click",e=>this.trhClickhandler(e));
        this.tr_show_btn.addEventListener("click",e=>this.trsClickHandler(e))
    }
    trastBox(){
        if (this.trasting){
            this.trast_con.style.display="block";
        }else{
            this.trast_con.style.display="none";
        }
        
    }
    trhClickhandler(e){
        this.trasting=!this.trasting
        this.trastBox();
        this.tr_hidden_btn.style.display="none";
        this.tr_show_btn.style.display="block"
    
    }
    trsClickHandler(e){
        this.trasting=!this.trasting
        this.trastBox();
        this.tr_hidden_btn.style.display="block";
        this.tr_show_btn.style.display="none"
    
    }
    

}

