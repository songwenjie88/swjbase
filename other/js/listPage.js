export default class ListPage{
    listBn1=document.querySelector(".list-btn1");
    listBn2=document.querySelector(".list-btn2");
    ulSpring=document.querySelector(".ul-spring")
    ulSummer=document.querySelector(".ul-summer")
    // thumbList=document.querySelectorAll(".thumb")
    ulsP=true;
    ulsU=true;
    
    constructor(){
        this.showUl();
        this.click();
        // console.log(this.thumbList)
    }
    showUl(){
        if(this.ulsP){
            this.ulSpring.style.display="block";
            this.listBn1.style.backgroundPositionX="-15px"
        }
        else if(!this.ulsP){
            this.ulSpring.style.display="none"
            this.listBn1.style.backgroundPositionX="-30px"
        }
       if(this.ulsU){
        this.ulSummer.style.display="block";
        this.listBn2.style.backgroundPositionX="-15px"

       }
       else if(!this.ulsU){
        this.ulSummer.style.display="none";
        this.listBn2.style.backgroundPositionX="-30px"

    }
    }
    click(){
        this.listBn1.addEventListener("click",e=>this.lb1ClickHandler(e))
        this.listBn2.addEventListener("click",e=>this.lb2ClickHandler(e))
    }
    lb1ClickHandler(e){

        this.ulsP=!this.ulsP
        this.showUl();


    }
    lb2ClickHandler(e){
        this.ulsU=!this.ulsU
        this.showUl();

    }
}