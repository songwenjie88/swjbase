
var Utils=(function(){
    return {
        ce:function(type,style,parent){
            var elem=document.createElement(type);
            if(style)
            Object.assign(elem.style,style);
            if(parent){
                if(typeof parent==="string") parent=document.querySelector(parent);
                parent.appendChild(elem);
            }
            return elem;
        },
        setCss:function(selector,styleObject){
            if(document.styleSheets.length===0){
                Utils.ce("style",undefined,document.head);
            }
            var styleSheet=document.styleSheets[document.styleSheets.length-1];
            var css="";
            for(var prop in styleObject){
                var value=styleObject[prop]
                prop=prop.replace(/[A-Z]/g,function(s){
                    return "-"+s.toLowerCase();
                })
                css+=prop+":"+value+";";
            }
            if(styleSheet.insertRule){
                styleSheet.insertRule(selector+"{"+css+"}",styleSheet.cssRules.length);
            }else{
                styleSheet.addRule(selector,css,styleSheet.cssRules.length);
            }
        },
        addClass:function(elem,className){
            if(!className)return;
            var classArr=elem.className.split(/\s+/).concat(className.split(/\s+/));
            classArr=Array.from(new Set(classArr));
            elem.className=classArr.join(" ");
        },
        removeClass:function(elem,className){
            var classArr=elem.className.split(/\s+/);
            var arr=className.split(/\s+/);
            classArr=classArr.reduce((value,item)=>{
                if(arr.indexOf(item)<0) value.push(item);
                return value;
            },[]);
            elem.className=classArr.join(" ");
        }
    }
})();