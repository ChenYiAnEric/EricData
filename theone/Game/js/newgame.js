var gameList = [{
    name: "",
    ImgName: "godofwealth",
    status: [0,1,2,3],
    link: ""
},{
    name: "",
    ImgName: "thorragnarok",
    status: [0,1,2,3],
    link: ""
},{
    name: "",
    ImgName: "guanren5x50",
    status: [0,1,2,3],
    link: ""
}, {
    name: "",
    ImgName: "wikiki5x20",
    status: [0,1,2,3],
    link: "h"
}, {
    name: "",
    ImgName: "dtguangong15x9",
    status: [0,1,2],
    link: ""
},{
    name: "",
    ImgName: "lvbu5x25",
    status: [0,1,2],
    link: ""
},{
    name: "",
    ImgName: "dtwatermargin15x9",
    status: [0,2,3],
    link: ""
},{
    name: "",
    ImgName: "dtfafafa15x9",
    status: [0,2,3],
    link: ""
},{
    name: "",
    ImgName: "fengshen5x20",
    status: [0,3],
    link: ""
},{
    name: "",
    ImgName: "huga5x9",
    status: [0,3],
    link: ""
},{
    name: "",
    ImgName: "K3FF9tHBCK",
    status: [0,1],
    link: ""
},{
    name: "",
    ImgName: "aMRBBaUU92",
    status: [0,1],
    link: ""
},{
    name: "",
    ImgName: "sXBfYF5vuY",
    status: [0,1],
    link: ""
},{
    name: "",
    ImgName: "AAr7UwvuHpBW",
    status: [0,1],
    link: ""
},{
    name: "",
    ImgName: "B5RqMy7Rpdbu",
    status: [0,1],
    link: ""
},{
    name: "",
    ImgName: "AhYapDPsMVam",
    status: [0,1],
    link: ""
},{
    name: "",
    ImgName: "gTzhYT4Z",
    status: [0,1],
    link: ""
},{
    name: "",
    ImgName: "SuR8tnBW",
    status: [0,1],
    link: ""
},{
    name: "",
    ImgName: "InfinityStones",
    status: [0,1],
    link: ""
},{
    name: "",
    ImgName: "cocoAdventure",
    status: [0,1],
    link: ""
},{
    name: "",
    ImgName: "coming-soon",
    status: [0],
    link: ""
},{
    name: "",
    ImgName: "coming-soon",
    status: [0],
    link: ""
}];
var html;
var GameLength = 0;
var GameList = function(_num){
    if(_num == 0){
        GameLength = 0;
        html = gameList.map(function(item) {
            GameLength++
            var status;
            var menu
            if(item.status.indexOf(1) != -1){
                status = 'new';
            }else if(item.status.indexOf(2) != -1){
                status = 'hot';
            }else if(item.status.indexOf(3) != -1){
                status = 'popular';
            }
            if(status){
                menu = '<li class="col-md-3 col-sm-4 col-xs-6">'+'<a href="'+item.link+'" target="_blank">'+
                    '<div class="game-box">'+
                    '<img src="./images/gamelist/'+item.ImgName+'.png" alt="">'+
                    '<div class="bevel-icon '+status+'-icon"></div>'+
                    '<div class="black-Shady"><div class="try-btn">遊戲試玩</div></div>'+
                    '</div>'+
                    '<p>'+item.name+'</p>'+'</a>'+
                    '</li>';
            }else{
                menu = '<li class="col-md-3 col-sm-4 col-xs-6">'+'<a href="javascript:void(0)" class="coming" target="_blank">'+
                    '<div class="game-box">'+
                    '<img src="./images/gamelist/'+item.ImgName+'.png" alt="">'+
                    '<div class="bevel-icon '+status+'-icon"></div>'+
                    '</div>'+
                    '<p>'+item.name+'</p>'+'</a>'+
                    '</li>';
            }
            return menu;
        }).join("");
        // for(var i=0; i<20-GameLength; i++){
        //     html += '<li class="col-md-3 col-sm-4 col-xs-6">'+'<a href="javascript:void(0)" target="_blank">'+
        //         '<div class="game-box">'+
        //         '<img src="./images/gamelist/godofwealth.png" alt="">'+
        //         '</div>'+
        //         '<p>敬請期待</p>'+'</a>'+
        //         '</li>';
        // }
    }else if(_num == 1){
        GameLength = 0;
        html = gameList.map(function(item) {
            if(item.status.indexOf(1) != -1){
                GameLength++
                var menu = '<li class="col-md-3 col-sm-4 col-xs-6">'+'<a href="'+item.link+'" target="_blank">'+
                    '<div class="game-box">'+
                    '<img src="./images/gamelist/'+item.ImgName+'.png" alt="">'+
                    '<div class="bevel-icon new-icon"></div>'+
                    '<div class="black-Shady"><div class="try-btn">遊戲試玩</div></div>'+
                    '</div>'+
                    '<p>'+item.name+'</p>'+'</a>'+
                    '</li>';
            }
            return menu;
        }).join("");
    }else if(_num == 2){
        GameLength = 0;
        html = gameList.map(function(item) {
            if(item.status.indexOf(2) != -1){
                GameLength++
                var menu = '<li class="col-md-3 col-sm-4 col-xs-6">'+'<a href="'+item.link+'" target="_blank">'+
                    '<div class="game-box">'+
                    '<img src="./images/gamelist/'+item.ImgName+'.png" alt="">'+
                    '<div class="bevel-icon hot-icon"></div>'+
                    '<div class="black-Shady"><div class="try-btn">遊戲試玩</div></div>'+
                    '</div>'+
                    '<p>'+item.name+'</p>'+'</a>'+
                    '</li>';
            }
            return menu;
        }).join(" ");
    }else if(_num == 3){
        GameLength = 0;
        html = gameList.map(function(item) {
            if(item.status.indexOf(3) != -1){
                GameLength++
                var menu = '<li class="col-md-3 col-sm-4 col-xs-6">'+'<a href="'+item.link+'" target="_blank">'+
                    '<div class="game-box">'+
                    '<img src="./images/gamelist/'+item.ImgName+'.png" alt="">'+
                    '<div class="bevel-icon popular-icon"></div>'+
                    '<div class="black-Shady"><div class="try-btn">遊戲試玩</div></div>'+
                    '</div>'+
                    '<p>'+item.name+'</p>'+'</a>'+
                    '</li>';
            }
            return menu;
        }).join(" ");
    }else if(_num == 4){
        GameLength = 0;
        html = gameList.map(function(item) {
            if(item.status.indexOf(4) != -1){
                GameLength++
                var menu = '<li class="col-md-3 col-sm-4 col-xs-6">'+'<a href="'+item.link+'" target="_blank">'+
                    '<div class="game-box">'+
                    '<img src="./images/gamelist/'+item.ImgName+'.png" alt="">'+
                    '<div class="bevel-icon popular-icon"></div>'+
                    '<div class="black-Shady"><div class="try-btn">遊戲試玩</div></div>'+
                    '</div>'+
                    '<p>'+item.name+'</p>'+'</a>'+
                    '</li>';
            }
            return menu;
        }).join(" ");
    }
    document.getElementById("gameList").innerHTML = html;
};
$(function(){
    GameList(1);
    // $("#searchGame").quicksearch('#gameList li');
    $(document).ready(function(){
        $("#searchGame").on("input", function() {
            var value = $(this).val().toLowerCase();
            $("#gameList li").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    });
});