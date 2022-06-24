


$(function(){
    $('.select').hide();  
  });

  $(function(){
    
    $('.action').on('click',function(){
    $('.action-select').hide();
    $('.'+$(this).attr('id')).show();
    });
  });




$('#musicPlay').click(function(){
  $('#audio').get(0).play();
});


$(function(){
    $('.rony').hide();  
  });

$(function(){
    $('.shuwa').hide();  
  });

  $(function(){
    $('.kinnikun').hide();  
  });

// 以下データ取得

const playerData = {
   
    hp: 100
}

const enemyData = {
  
    hp: 50
}

function insertText(id, text){
    document.getElementById(id).textContent = text;   
}

insertText("currentPlayerHp", playerData["hp"]);
insertText("maxPlayerHp", playerData["hp"]);
insertText("currentEnemyHp", enemyData["hp"]);
insertText("maxPlayerHp", enemyData["hp"]);

// document.getElementById("currentPlayerHp").textContent = playerData["hp"];
// document.getElementById("maxPlayerHp").textContent = playerData["hp"];
// document.getElementById("currentEnemyHp").textContent = enemyData["hp"];
// document.getElementById("maxEnemyHp").textContent = enemyData["hp"];



// (a)上腕二頭筋ラリアットのアクション

$(".a").on("click",function(){

    $(".enemy-meter").width("-=20");
    $("h1").text("マッスル児玉の上腕二頭筋ラリアット!マッチョ阿修羅に20のダメージを与えた!");

    window.setTimeout(teki,1000);//tekiって関数の呼び出しを3秒後に実行させてる
})

//敵側のアクション

function teki(){//tekiって関数

    let random= Math.floor(Math.random()*3);
    console.log(random,"ランダム数字");
    
        if (random === 0){
            $(".player-meter").width("-=20");
            console.log("マッチョ阿修羅の腹直筋アタック!マッスル児玉は20のダメージを負った!");
            $("h1").text("マッチョ阿修羅の腹直筋アタック!マッスル児玉は20のダメージを負った!");
            
            

        } else if (random === 1){
            $(".player-meter").width("-=10");
            console.log("マッチョ阿修羅の強すぎるデコピン!マッスル児玉は10のダメージを負った!");
            $("h1").text("マッチョ阿修羅の強すぎるデコピン!マッスル児玉は10のダメージを負った!");
            
            

        } else if (random === 2){
            console.log("マッチョ阿修羅にあれ？痩せた？と言われた!マッスル児玉は少し悲しかった!");
            $("h1").text("マッチョ阿修羅にあれ？痩せた？と言われた!マッスル児玉は少し悲しかった!");
            
              

        } else if (random === 3){
            $(".player-meter").width("-=30");
            console.log("マッチョ阿修羅の背筋鬼の形相!効果抜群！マッスル児玉は30のダメージを負った!");
            $("h1").text("マッチョ阿修羅の背筋鬼の形相!効果抜群！マッスル児玉は30のダメージを負った!");
        }

        // window.setTimeout(teki,1000);

    }

        // function teki(){

        //     let (("player-meter".width())<0);
        //         $('.player-pic').hide();
        //     };


// (B)僧帽筋プレスのアクション

$(".b").on("click",function(){

    $(".enemy-meter").width("-=10");
    $("h1").text("マッスル児玉の僧帽筋プレス!マッチョ阿修羅に10のダメージを与えた!");

    window.setTimeout(teki,1000);//tekiって関数の呼び出しを3秒後に実行させてる
})

 //敵側のアクション

function teki(){//tekiって関数

    let random= Math.floor(Math.random()*3);
    console.log(random,"ランダム数字");
    
        if (random === 0){
            $(".player-meter").width("-=20");
            console.log("マッチョ阿修羅の腹直筋アタック!マッスル児玉は20のダメージを負った!");
            $("h1").text("マッチョ阿修羅の腹直筋アタック!マッスル児玉は20のダメージを負った!");
            


        } else if (random === 1){
            $(".player-meter").width("-=10");
            console.log("マッチョ阿修羅の強すぎるデコピン!マッスル児玉は10のダメージを負った!");
            $("h1").text("マッチョ阿修羅の強すぎるデコピン!マッスル児玉は10のダメージを負った!");


        } else if (random === 2){
            console.log("マッチョ阿修羅にあれ？痩せた？と言われた!マッスル児玉は少し悲しかった!");
            $("h1").text("マッチョ阿修羅にあれ？痩せた？と言われた!マッスル児玉は少し悲しかった!");
            
            
        } else if (random === 3){
            $(".player-meter").width("-=30");
            console.log("マッチョ阿修羅の背筋鬼の形相!効果抜群！マッスル児玉は30のダメージを負った!");
            $("h1").text("マッチョ阿修羅の背筋鬼の形相!効果抜群！マッスル児玉は30のダメージを負った!");
        }

 
               
};
    
// 大腿四頭筋キック(C)のアクション

$(".c").on("click",function(){

    $(".enemy-meter").width("-=30");
    $("h1").text("マッスル児玉の大腿四頭筋キック!効果は抜群！マッチョ阿修羅に30のダメージを与えた!");

    window.setTimeout(teki,1000);//tekiって関数の呼び出しを3秒後に実行させてる
})

//敵側のアクション

function teki(){//tekiって関数

    let random= Math.floor(Math.random()*3);
    console.log(random,"ランダム数字");
    
        if (random === 0){
            $(".player-meter").width("-=20");
            console.log("マッチョ阿修羅の腹直筋アタック!マッスル児玉は20のダメージを負った!");
            $("h1").text("マッチョ阿修羅の腹直筋アタック!マッスル児玉は20のダメージを負った!");
            


        } else if (random === 1){
            $(".player-meter").width("-=10");
            console.log("マッチョ阿修羅の強すぎるデコピン!マッスル児玉は10のダメージを負った!");
            $("h1").text("マッチョ阿修羅の強すぎるデコピン!マッスル児玉は10のダメージを負った!");


        } else if (random === 2){
            console.log("マッチョ阿修羅にあれ？痩せた？と言われた!マッスル児玉は少し悲しかった!");
            $("h1").text("マッチョ阿修羅にあれ？痩せた？と言われた!マッスル児玉は少し悲しかった!");
            
            
        } else if (random === 3){
            $(".player-meter").width("-=30");
            console.log("マッチョ阿修羅の背筋鬼の形相!効果抜群！マッスル児玉は30のダメージを負った!");
            $("h1").text("マッチョ阿修羅の背筋鬼の形相!効果抜群！マッスル児玉は30のダメージを負った!");
        }
};

// 胸筋アタック(D)のアクション

$(".d").on("click",function(){

    $("h1").text("マッスル児玉の胸筋アタック!マッチョ阿修羅の胸筋に弾かれた!");

    window.setTimeout(teki,1000);//tekiって関数の呼び出しを3秒後に実行させてる
})

//敵側のアクション

function teki(){//tekiって関数

    let random= Math.floor(Math.random()*3);
    console.log(random,"ランダム数字");
    
        if (random === 0){
            $(".player-meter").width("-=20");
            console.log("マッチョ阿修羅の腹直筋アタック!マッスル児玉は20のダメージを負った!");
            $("h1").text("マッチョ阿修羅の腹直筋アタック!マッスル児玉は20のダメージを負った!");
            


        } else if (random === 1){
            $(".player-meter").width("-=10");
            console.log("マッチョ阿修羅の強すぎるデコピン!マッスル児玉は10のダメージを負った!");
            $("h1").text("マッチョ阿修羅の強すぎるデコピン!マッスル児玉は10のダメージを負った!");


        } else if (random === 2){
            console.log("マッチョ阿修羅にあれ？痩せた？と言われた!マッスル児玉は少し悲しかった!");
            $("h1").text("マッチョ阿修羅にあれ？痩せた？と言われた!マッスル児玉は少し悲しかった!");
            
            
        } else if (random === 3){
            $(".player-meter").width("-=30");
            console.log("マッチョ阿修羅の背筋鬼の形相!効果抜群！マッスル児玉は30のダメージを負った!");
            $("h1").text("マッチョ阿修羅の背筋鬼の形相!効果抜群！マッスル児玉は30のダメージを負った!");
        }
};

    
    // 選択肢アイテムのアクション

    $(".e").on("click",function(){
            $("h1").text("筋肉に栄養がほとばしる！");
        });

    $(".f").on("click",function(){
        $("h1").text("罪悪感に耐えられない！マッスル児玉は倒れた！");
        $(".player-pic").fadeOut('slow');
    });

    $(".g").on("click",function(){
        $("h1").text("飲み過ぎて気持ち悪い。マッスル児玉は倒れた！");
        $(".player-pic").fadeOut('slow');
    });

    $(".h").on("click",function(){
        $("h1").text("少し気分が良くなった！");
    });

    // 選択肢他のマッチョのアクション

    $(".i").on("click",function(){
        $("h1").text("細マッチョは恥ずかしがって出てこない");
    });

    $(".j").on("click",function(){
        $('.'+$(this).attr('id')).hide();
        $('.rony').show();
    });

    $(".k").on("click",function(){
        $('.'+$(this).attr('id')).hide();
        $('.shuwa').show();
    });

    $(".l").on("click",function(){
        $('.'+$(this).attr('id')).hide();
        $('.kinnikun').show();
    });

    // 選択肢逃げるのアクション

 