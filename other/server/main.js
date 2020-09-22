var http=require("http");
var querystring=require("querystring");
var sql = require("mysql");

var data,req,res;
var db = sql.createConnection({
    url: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "hlamall"
});


db.connect(function (err) {
    if (err) {
        console.log("连接失败");
        return;
    } else {
        console.log("连接成功");
    }
})



// 数据查询
function sql_select(table,res1,callback) {
    var sql = "select * from "+table;
    db.query(sql, function (err, results) {
        if(callback){
            callback(results,res1);
            return;
        }
        res1.write(JSON.stringify(results));
        res1.end()
    })

}


function sql_insert(phone,password) {
    let sql = "INSERT INTO `user`(`phone`, `password`) VALUES (?,?)";
    db.query(sql, [phone, password], function (error, res) {
        console.log(error)
        console.log(res);
    })
}

var arr = {
"advImg":[
    {imgsrc:'https://img.alicdn.com/imgextra/i3/1657259311/O1CN01PkNphG2IeUO6xyEgY_!!1657259311.jpg'},
    {imgsrc:'https://gdp.alicdn.com/imgextra/i3/693060164/O1CN01CZfBAG1D59XaEvezr_!!693060164.jpg'},
    {imgsrc:'https://gdp.alicdn.com/imgextra/i2/693060164/O1CN01zhT2eV1D59Xss1c3a_!!693060164.jpg'},
    {imgsrc:'https://gdp.alicdn.com/imgextra/i2/693060164/O1CN01raE4eO1D59Y2ASEKE_!!693060164.jpg'},
    {imgsrc:'https://gdp.alicdn.com/imgextra/i2/693060164/O1CN01guEPKV1D59Y2mZIM8_!!693060164.jpg'},
    {imgsrc:'https://img.alicdn.com/imgextra/i3/1657259311/O1CN01IJfDVl2IeUO8THU3M_!!1657259311.jpg'},
    {imgsrc:'https://img.alicdn.com/imgextra/i3/1657259311/O1CN01w2NoOM2IeUOEgYXSJ_!!1657259311.jpg'}

],
"GoodList":[
    {
        id:"0001",
        photo:"https://img.hlamall.cn/hntpd4q353a/1600136015350.jpg",
        thumb:["https://img.hlamall.cn/hntpd4q353a/1600136015350.jpg","https://img.hlamall.cn/hntpd4q353a/1600136015350.jpg","https://img.hlamall.cn/hntpd4q353a/1600136017086.jpg","https://img.hlamall.cn/hntpd4q353a/1600136017599.jpg","https://img.hlamall.cn/hntpd4q353a/1600136018596.jpg","https://img.hlamall.cn/hntpd4q353a/1600136019709.jpg"],
        goodSn:"HNTPD4Q353A",
        price:"￥218.00",
        size:["165/84A(46)","170/88A(48)","175/92A(50)","180/96A(52)"],
        color:["藏青（净色）"],
        detail:"HLA海澜之家翻领抗静电长袖POLO衫2020冬季绣花加绒保暖套头衫男HNTPD4Q353A",
        sales:0
        
    },
    {
        id:"0002",
        photo:"https://img.hlamall.cn/hntpd3q304a/1596252987228.jpg",
        thumb:["https://img.hlamall.cn/hntpd3q304a/1596252987228.jpg","https://img.hlamall.cn/hntpd3q304a/1596252987228.jpg","https://img.hlamall.cn/hntpd3q304a/1596252987648.jpg","https://img.hlamall.cn/hntpd3q304a/1596252987907.jpg","https://img.hlamall.cn/hntpd3q304a/1596252988123.jpg","https://img.hlamall.cn/hntpd3q304a/1596252988364.jpg"],
        goodSn:"HNTPD3Q304A",
        price:"￥178.00",
        size:["160/80A(44)","165/84A(46)","170/88A(48)","175/92A(50)","180/96A(52)","185/100A(54)","190/104A(56)"],
        color:["暗红（净色）"],
        detail:"HLA海澜之家净色小标长袖POLO衫2020秋季新品混纺莫代尔上衣男HNTPD3Q304A",
        sales:0
        
    },
    {
        id:"0003",
        photo:"https://img.hlamall.cn/hntpd4q358a/1600136013753.jpg",
        thumb:["https://img.hlamall.cn/hntpd4q358a/1600136013753.jpg","https://img.hlamall.cn/hntpd4q358a/1600136014912.jpg","https://img.hlamall.cn/hntpd4q358a/1600136013753.jpg","https://img.hlamall.cn/hntpd4q358a/1600136014081.jpg","https://img.hlamall.cn/hntpd4q358a/1600136014435.jpg","https://img.hlamall.cn/hntpd4q358a/1600136014645.jpg"],
        size:["160/80A(44)","165/84A(46)","170/88A(48)","175/92A(50)","180/96A(52)","185/100A(54)","190/104A(56)"],
        color:["暗红（净色）"],
        goodSn:"HNTPD4Q358A",
        price:"￥238.00",
        detail:"HLA海澜之家经典半开襟长袖POLO衫2020冬季绣花加绒保暖套头衫男HNTPD4Q358A",
        sales:0
        
    },
    {
        id:"0004",
        photo:"https://img.hlamall.cn/hntpd3q303a/1596252965892.jpg",
        thumb:["https://img.hlamall.cn/hntpd3q303a/1596252965892.jpg","https://img.hlamall.cn/hntpd3q303a/1596252965892.jpg","https://img.hlamall.cn/hntpd3q303a/1596252966185.jpg","https://img.hlamall.cn/hntpd3q303a/1596252966349.jpg","https://img.hlamall.cn/hntpd3q303a/1596252966528.jpg","https://img.hlamall.cn/hntpd3q303a/1596252966716.jpg"],
        size:["160/80A(44)","165/84A(46)","170/88A(48)","175/92A(50)","180/96A(52)","185/100A(54)","190/104A(56)"],
        color:["暗红（净色）"],
        goodSn:"HNTPD3Q303A",
        price:"￥178.00",
        detail:"HLA海澜之家净色小标长袖POLO衫2020秋季新品简约舒适翻领上衣男HNTPD3Q303A",
        sales:0
        
    },
    {
        id:"0005",
        photo:"https://img.hlamall.cn/hntpd3q300a/1596159746978.jpg",
        thumb:["https://img.hlamall.cn/hntpd3q300a/1596180447877.jpg","https://img.hlamall.cn/hntpd3q300a/1596180447877.jpg","https://img.hlamall.cn/hntpd3q300a/1596180448248.jpg","https://img.hlamall.cn/hntpd3q300a/1596180449323.jpg","https://img.hlamall.cn/hntpd3q300a/1596180449323.jpg","https://img.hlamall.cn/hntpd3q300a/1596180450187.jpg"],
        goodSn:"HNTPD3Q300A",
        price:"¥198.00",
        detail:"HLA/海澜之家舒适休闲刺绣经典POLO衫2020秋季新品净色套头衫男",
        sales:0
        
    },
    {
        id:"0006",
        photo:"https://img.hlamall.cn/hntpd3q307a/1595919403705.jpg",
        thumb:["https://img.hlamall.cn/hntpd3q307a/1595919403705.jpg","https://img.hlamall.cn/hntpd3q307a/1596180450221.jpg","https://img.hlamall.cn/hntpd3q307a/1596180451460.jpg","https://img.hlamall.cn/hntpd3q307a/1596180452818.jpg","https://img.hlamall.cn/hntpd3q307a/1596180453437.jpg","https://img.hlamall.cn/hntpd3q307a/1596180455240.jpg"],
        size:["160/80A(44)","165/84A(46)","170/88A(48)","175/92A(50)","180/96A(52)","185/100A(54)","190/104A(56)"],
        color:["浅蓝（净色）"],
        goodSn:"HNTPD3Q307A",
        price:"¥178.00",
        detail:"HLA海澜之家舒适亲肤简约清新刺绣POLO衫2020秋新品净色套头衫男HNTPD3Q307A",
        sales:0
        
    },
    {
        id:"0007",
        photo:"https://img.hlamall.cn/hntpd3q306a/1595384409299.jpg",
        thumb:["https://img.hlamall.cn/hntpd3q306a/1595384409299.jpg","https://img.hlamall.cn/hntpd3q306a/1595384409299.jpg","https://img.hlamall.cn/hntpd3q306a/1595384409505.jpg","https://img.hlamall.cn/hntpd3q306a/1595384410201.jpg","https://img.hlamall.cn/hntpd3q306a/1595384410447.jpg","https://img.hlamall.cn/hntpd3q306a/1595384410680.jpg"],
        size:["160/80A(44)","165/84A(46)","170/88A(48)","175/92A(50)","180/96A(52)","185/100A(54)","190/104A(56)"],
        color:["暗红（净色）"],
        goodSn:"HNTPD3Q306A",
        price:"¥178.00",
        detail:"HLA海澜之家健康亲肤POLO衫2020秋季新品简约大方套头衫男HNTPD3Q306A",
        sales:0
        
    },
    {
        id:"0008",
        photo:"https://img.hlamall.cn/hntpd3q302a/1593707341270.jpg",
        thumb:["https://img.hlamall.cn/hntpd3q302a/1593707341270.jpg","https://img.hlamall.cn/hntpd3q306a/1595384409299.jpg","https://img.hlamall.cn/hntpd3q302a/1593707341824.jpg","https://img.hlamall.cn/hntpd3q302a/1593707342549.jpg","https://img.hlamall.cn/hntpd3q302a/1593707343466.jpg","https://img.hlamall.cn/hntpd3q302a/1593707344294.jpg"],
        size:["160/80A(44)","165/84A(46)","170/88A(48)","175/92A(50)","180/96A(52)","185/100A(54)","190/104A(56)"],
        color:["暗红（净色）"],
        goodSn:"HNTPD3Q302A",
        price:"¥178.00",
        detail:"HLA海澜之家商务绅士简约POLO衫2020秋季新品翻领刺绣套头衫男HNTPD3Q302A",
        sales:0
        
    },
    {
        id:"0009",
        photo:"https://img.hlamall.cn/hntpd3q301a/1592791798228.jpg",
        thumb:["https://img.hlamall.cn/hntpd3q301a/1592791798228.jpg","https://img.hlamall.cn/hntpd3q301a/1592791798228.jpg","https://img.hlamall.cn/hntpd3q301a/1592791798440.jpg","https://img.hlamall.cn/hntpd3q301a/1592791798640.jpg","https://img.hlamall.cn/hntpd3q301a/1592791798921.jpg","https://img.hlamall.cn/hntpd3q301a/1592791799187.jpg"],
        size:["160/80A(44)","165/84A(46)","170/88A(48)","175/92A(50)","180/96A(52)","185/100A(54)","190/104A(56)"],
        color:["暗红（净色）"],
        goodSn:"HNTPD3Q301A",
        price:"¥198.00",
        detail:"HLA海澜之家肌理感polo衫2020秋季新品舒适柔软上衣男HNTPD3Q301A",
        sales:0
        
    },
    {
        id:"0010",
        photo:"https://img.hlamall.cn/hntpd3q308a/1592562023883.jpg",
        thumb:["https://img.hlamall.cn/hntpd3q308a/1592562023883.jpg","https://img.hlamall.cn/hntpd3q308a/1592562023883.jpg","https://img.hlamall.cn/hntpd3q308a/1592562024142.jpg","https://img.hlamall.cn/hntpd3q308a/1592562024346.jpg","https://img.hlamall.cn/hntpd3q308a/1592562024586.jpg","https://img.hlamall.cn/hntpd3q308a/1592562024908.jpg"],
        size:["160/80A(44)","165/84A(46)","170/88A(48)","175/92A(50)","180/96A(52)","185/100A(54)","190/104A(56)"],
        color:["暗红（净色）"],
        goodSn:"HNTPD3Q308A",
        price:"¥158.00",
        detail:"HLA海澜之家舒适绅士简约长袖POLO衫2020秋季新品翻领套头衫男HNTPD3Q308A",
        sales:0
        
    },
    {
        id:"0011",
        photo:"https://img.hlamall.cn/hntpd2q669a/1585620814195.jpg",
        thumb:["https://img.hlamall.cn/hntpd2q669a/1585620814195.jpg","https://img.hlamall.cn/hntpd2q669a/1585620829974.jpg","https://img.hlamall.cn/hntpd2q669a/1585620831922.jpg","https://img.hlamall.cn/hntpd2q669a/1585620831922.jpg","https://img.hlamall.cn/hntpd2q669a/1585620832538.jpg","https://img.hlamall.cn/hntpd2q669a/1585620832745.jpg"],
        size:["160/80A(44)","165/84A(46)","170/88A(48)","175/92A(50)","180/96A(52)","185/100A(54)","190/104A(56)"],
        color:["暗红（净色）"],
        goodSn:"HNTPD2Q669A",
        price:"¥128.00",
        detail:"HLA海澜之家大闹天宫系列2020夏季印花翻领微弹男女同款短袖POLOHNTPD2Q669A",
        sales:2
        
    },
    {
        id:"0012",
        photo:"https://img.hlamall.cn/hntpd2q031a/1587806841360.jpg",
        thumb:["https://img.hlamall.cn/hntpd2q031a/1587806841360.jpg","https://img.hlamall.cn/hntpd2q031a/1587806841360.jpg","https://img.hlamall.cn/hntpd2q031a/1587806841763.jpg","https://img.hlamall.cn/hntpd2q031a/1587806842037.jpg","https://img.hlamall.cn/hntpd2q031a/1587806842476.jpg","https://img.hlamall.cn/hntpd2q031a/1587806842778.jpg"],
        size:["160/80A(44)","165/84A(46)","170/88A(48)","175/92A(50)","180/96A(52)","185/100A(54)","190/104A(56)"],
        color:["暗红（净色）"],
        goodSn:"HNTPD2Q031A",
        price:"¥178.00",
        detail:"HLA海澜之家简约绣标短袖POLO2020夏季新品沉稳净色套头衫男HNTPD2Q031A",
        sales:0
        
    },
    {
        id:"0013",
        photo:"https://img.hlamall.cn/hntpd2q761a/1585620811328.jpg",
        thumb:["https://img.hlamall.cn/hntpd2q761a/1585620811328.jpg","https://img.hlamall.cn/hntpd2q761a/1585620811328.jpg","https://img.hlamall.cn/hntpd2q761a/1585620811539.jpg","https://img.hlamall.cn/hntpd2q761a/1585620811738.jpg","https://img.hlamall.cn/hntpd2q761a/1585620811968.jpg","https://img.hlamall.cn/hntpd2q761a/1585620812186.jpg"],
        size:["110/56","120/60","130/64","140/68","150/72"],
        color:["藏青（净色）","漂白（净色）","大红（净色）"],
        goodSn:"HNTPD2Q761A",
        price:"¥88.00",
        detail:"HLA海澜之家大闹天宫系列儿童2020夏新翻领刺绣图案短袖POLO衫HNTPD2Q761A",
        sales:0
        
    },
    {
        id:"0014",
        photo:"https://img.hlamall.cn/hntpd2q113a/1585099022773.jpg",
        thumb:["https://img.hlamall.cn/hntpd2q113a/1585099022773.jpg","https://img.hlamall.cn/hntpd2q113a/1585099022773.jpg","https://img.hlamall.cn/hntpd2q113a/1585099023054.jpg","https://img.hlamall.cn/hntpd2q113a/1585099023255.jpg","https://img.hlamall.cn/hntpd2q113a/1585099023496.jpg","https://img.hlamall.cn/hntpd2q113a/1585099023738.jpg"],
        size:["160/80A(44)","165/84A(46)","170/88A(48)","175/92A(50)","180/96A(52)","185/100A(54)","190/104A(56)"],
        color:["暗红（净色）"],
        goodSn:"HNTPD2Q113A",
        price:"¥128.00",
        detail:"HLA海澜之家前胸撞色图案短袖POLO2020夏季新品半开襟套头衫男HNTPD2Q113A",
        sales:0
        
    },
    {
        id:"0015",
        photo:"https://img.hlamall.cn/hntpd2q696a/1582690650085.jpg",
        thumb:["https://img.hlamall.cn/hntpd2q696a/1582690650085.jpg","https://img.hlamall.cn/hntpd2q696a/1582690650350.jpg","https://img.hlamall.cn/hntpd2q696a/1582690650550.jpg","https://img.hlamall.cn/hntpd2q696a/1582690650723.jpg","https://img.hlamall.cn/hntpd2q696a/1582690650915.jpg","https://img.hlamall.cn/hntpd2q696a/1582690651096.jpg"],
        size:["160/80A(44)","165/84A(46)","170/88A(48)","175/92A(50)","180/96A(52)","185/100A(54)","190/104A(56)"],
        color:["暗红（净色）"],
        goodSn:"HNTPD2Q696A",
        price:"¥128.00",
        detail:"HLA海澜之家大闹天宫系列男女2020夏季新悟空头像logo短袖POLO衫HNTPD2Q696A",
        sales:5
        
    },
    {
        id:"0016",
        photo:"https://img.hlamall.cn/hntpd2q025a/1587806836656.jpg",
        thumb:["https://img.hlamall.cn/hntpd2q025a/1587806836656.jpg","https://img.hlamall.cn/hntpd2q025a/1587806836656.jpg","https://img.hlamall.cn/hntpd2q025a/1587806836869.jpg","https://img.hlamall.cn/hntpd2q025a/1587806837101.jpg","https://img.hlamall.cn/hntpd2q025a/1587806837328.jpg","https://img.hlamall.cn/hntpd2q025a/1587806837567.jpg"],
        size:["160/80A(44)","165/84A(46)","170/88A(48)","175/92A(50)","180/96A(52)","185/100A(54)","190/104A(56)"],
        color:["暗红（净色）"],
        goodSn:"HNTPD2Q025A",
        price:"¥158.00",
        detail:"HLA海澜之家条纹珠地短袖POLO2020夏季新品前胸绣花套头衫男HNTPD2Q025A",
        sales:3
        
    },
    {
        id:"0017",
        photo:"https://img.hlamall.cn/hntpd2q024a/1587806837054.jpg",
        thumb:["https://img.hlamall.cn/hntpd2q024a/1587806837054.jpg","https://img.hlamall.cn/hntpd2q024a/1587806837054.jpg","https://img.hlamall.cn/hntpd2q024a/1587806837457.jpg","https://img.hlamall.cn/hntpd2q024a/1587806837854.jpg","https://img.hlamall.cn/hntpd2q024a/1587806838402.jpg","https://img.hlamall.cn/hntpd2q024a/1587806838835.jpg"],
        size:["160/80A(44)","165/84A(46)","170/88A(48)","175/92A(50)","180/96A(52)","185/100A(54)","190/104A(56)"],
        color:["暗红（净色）"],
        goodSn:"HNTPD2Q024A",
        price:"¥198.00",
        detail:"HLA/海澜之家舒适休闲刺绣经典POLO衫2020秋季新品净色套头衫男",
        sales:0
        
    },
    {
        id:"0018",
        photo:"https://img.hlamall.cn/hntpd2q055a/1582030734242.jpg",
        thumb:["https://img.hlamall.cn/hntpd2q055a/1582030734242.jpg","https://img.hlamall.cn/hntpd2q055a/1582030734242.jpg","https://img.hlamall.cn/hntpd2q055a/1582030734625.jpg","https://img.hlamall.cn/hntpd2q055a/1582030734950.jpg","https://img.hlamall.cn/hntpd2q055a/1582030735242.jpg","https://img.hlamall.cn/hntpd2q055a/1582030735495.jpg"],
        size:["160/80A(44)","165/84A(46)","170/88A(48)","175/92A(50)","180/96A(52)","185/100A(54)","190/104A(56)"],
        color:["暗红（净色）"],
        goodSn:"HNTPD2Q055A",
        price:"¥158.00",
        detail:"HLA海澜之家净色珠地短袖POLO2020夏季新品半开襟舒适短T男HNTPD2Q055A",
        sales:8
        
    },
    {
        id:"0019",
        photo:"https://img.hlamall.cn/hntpd2q232a/1582114989009.jpg",
        thumb:["https://img.hlamall.cn/hntpd2q232a/1582114989009.jpg","https://img.hlamall.cn/hntpd2q232a/1582114989009.jpg","https://img.hlamall.cn/hntpd2q232a/1582114989263.jpg","https://img.hlamall.cn/hntpd2q232a/1582114989501.jpg","https://img.hlamall.cn/hntpd2q232a/1582114989776.jpg","https://img.hlamall.cn/hntpd2q232a/1582114990045.jpg"],
        size:["160/80A(44)","165/84A(46)","170/88A(48)","175/92A(50)","180/96A(52)","185/100A(54)","190/104A(56)"],
        color:["暗红（净色）"],
        goodSn:"HNTPD2Q232A",
        price:"¥198.00",
        detail:"HLA海澜之家线条提花丝光棉polo衫2020夏季新品舒适短T男HNTPD2Q232A",
        sales:0
        
    },
    {
        id:"0020",
        photo:"https://img.hlamall.cn/hntpd2q006a/1576806090819.jpg",
        thumb:["https://img.hlamall.cn/hntpd2q006a/1576806090819.jpg","https://img.hlamall.cn/hntpd2q006a/1576806097583.jpg","https://img.hlamall.cn/hntpd2q006a/1576806102861.jpg","https://img.hlamall.cn/hntpd2q006a/1576806102861.jpg","https://img.hlamall.cn/hntpd2q006a/1576806102861.jpg","https://img.hlamall.cn/hntpd2q006a/1576806102861.jpg"],
        size:["160/80A(44)","165/84A(46)","170/88A(48)","175/92A(50)","180/96A(52)","185/100A(54)","190/104A(56)"],
        color:["暗红（净色）"],
        goodSn:"HNTPD2Q006A",
        price:"¥198.00",
        detail:"HLA海澜之家雅致翻领短袖POLO2020夏季新品前胸刺绣短T男HNTPD2Q006A",
        sales:0
        
    },
    
]
}

var server=http.createServer(creatHandler);
server.listen("5000", "10.20.159.169", function () {
    console.log("开启成功")
})

function creatHandler(_req,_res){
    req=_req;
    res=_res;
    req.on("data",dataHandler);
    req.on("end",endHandler);
}

function dataHandler(_data){
    data=String(_data);
    console.log(data);
}

function endHandler(){
    res.writeHead(200,{
        "content-type":"text/html;charset=utf-8",
        "Access-Control-Allow-Origin":"*",
        "Access-Control-Allow-Headers":"*"
    });


    var type=req.url.indexOf("?")>-1 ? req.url.split("?")[0] : req.url;
    type=type.slice(1);
    var obj;


    if(req.method.toLowerCase()==="get"){
        if(req.url.indexOf("?")>-1){
            obj=querystring.parse(req.url.split("?")[1]);
        }
    }else if(req.method.toLowerCase()==="post"){
        try{
            obj=JSON.parse(data);
        }catch(e){
            obj=querystring.parse(data);
        }
    }else{
        res.end();
        return;
    }
    switch (type) {
        case "login":
                sql_select("user",res,function(results,res1){   
                    var a;
                    results.forEach(function(item){
                        if(item.password === obj.password && item.phone === obj.phone ){
                            a ={}
                            a.name = item.phone;
                        }
                    });
                    if(a){
                        res1.write(JSON.stringify(a));
                        res1.end();
                        return;
                    }
                    // res1.write();
                    res1.end("账号或密码错误");
                    
                })
                break;
            case "registe":
                sql_select("user",res,function(results,res1){
                    var flag = results.some(function(item){
                        return item.phone === obj.phone
                    })
                    if(flag){
                        res1.write("该手机已被注册");
                        res1.end();
                        return
                    }
                    console.log(obj)
                    sql_insert(obj.phone, obj.password);
                    res1.write("恭喜您成功注册");
                    res1.end();
                })
                break;
        case "advImg":
           
            res.write(JSON.stringify(arr["advImg"]))
            res.end();
           
            break;
        case "GoodList":
            res.write(JSON.stringify(arr["GoodList"]))
            res.end();
            break;
        case "GoodDetails":
            res.write(JSON.stringify(arr["GoodList"]))
            res.end();
            break;
            
    }
    
}

