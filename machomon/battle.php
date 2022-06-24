<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>マチョモン</title>

    <meta name="description" content="マチョモンのゲームです">
    
    <meta property="og:title" content="マチョモン">
    <meta property="og:type" content="website">
    <meta property="og:url" content="#">
    <meta property="og:image" content="images/common/ogimage.png">
    <meta property="og:site_name" content="マチョモン">
    <meta property="og:description" content="マチョモンのゲームです">
    
    <meta name="format-detection" content="telephone=no">
    
    <link rel="apple-touch-icon" href="images/common/touch-icon.png">
    <link rel="shortcut icon" href="images/common/favicon.ico">
     
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet">

    <script src="https://kit.fontawesome.com/4876f0dc74.js" crossorigin="anonymous"></script>


    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/mattcho.css">

</head>
<body>

<!-- htmlを記載 -->



<div class="wrap">
    
    <section>
    
    <!-- 全体背景 -->

    <div class="background">
        <img src="素材/battlebackground2.jfif" alt="戦闘背景" width="1000" height="600">
    </div>

    <audio id="audio" loop>
        <source src="素材/battle bgm.mp3" type="audio/mp3">
    </audio>

    <div class="audio-btn">
        <button id="musicPlay" class="bgm-btn">BGM</button>
    </div>

    <!-- 以下敵画面 -->

    
    
    <div class="enemy-pic">
      <img src="素材/ashura.jpg" alt="阿修羅マッチョ" width="200" height="200">
    </div>
   
    <div class="enemy-name">
        <h2>マッチョ阿修羅</h2>
    </div>

    <div class="enemy-level">
        <h2>100</h2>
    </div>

    <div class="white-back-e">
          <h3></h3>
    </div>

        <div class="hp">
            <div id="currentEnemyHp"></div><div id="maxEnemyHp"></div>    
          <!-- <meter id="enemy-meter" class="enemy-meter" min="0" max="60" low="30" optimum="50" value="100" style="width: 175px; height: 30px;">60/60</meter> -->
        </div>

    <!-- 以下プレイヤー画面 -->
    
    
            <div class="battle-text">
                <h1>マッチョ阿修羅が現れた</h1>
            </div>
            <div class="player-pic">
                <img src="素材/player.jpg" alt="プレイヤーマッチョ" width="200" height="200">
            </div>

            <div class="rony" id="rony">

            <img src="素材/rony.jpg" alt="ロニーコールマン" width="200" height="200">
            </div>

            <div class="shuwa" id="shuwa">

                <img src="素材/shuwa.jpg" alt="シュワルツェネッガー" width="200" height="200">
             </div>

             <div class="kinnikun" id="kinnikun">

                <img src="素材/kinnikun.jpg" alt="きんにくん" width="200" height="200">
             </div>


            <div class="player-name">
                <h2>マッスル児玉</h2>
            </div>

            <div class="player-level">
                <h2>5</h2>
            </div>

            <div class="white-back-p">
                <h3></h3>
          </div>

           
                <div class="hp">
                    <div id="currentPlayerHp"></div><div id="maxPlayerHp"></div>        
                  <!-- <meter id="player-meter" class="player-meter" min="0" max="60" low="30" optimum="50" value="100" style="width: 175px; height: 30px;">60/60</meter> -->
                </div>
            

         

                <div class="action">
                    <dl class="action-select">
                        <dt><button class="action select-btn" id="battle">たたかう</button></dt>
                        <dt><button class="action select-btn" id="item">どうぐ</button></dt>
                        <dt><button class="action select-btn" id="change">他のマッチョ</button></dt>
                        <dt><button class="action select-btn" id="avoid">逃げる</button></dt>                                            
                    </dl>
                </div>
            
                
                    <dl class="select battle">
                        <dt><button class="a select-btn">上腕二頭筋ラリアット</button></dt>
                        <dt><button class="b select-btn">僧帽筋プレス</button></dt>
                        <dt><button class="c select-btn">大腿四頭筋キック</button></dt>
                        <dt><button class="d select-btn">胸筋アタック</button></dt>                                            
                    </dl>
            

                <dl class="select item">
                    <dt><button class="e select-btn">プロテイン</button></dt>
                    <dt><button class="f select-btn">ステロイド</button></dt>
                    <dt><button class="g select-btn">EAA</button></dt>
                    <dt><button class="h select-btn">クレアチン</button></dt>                                            
                </dl>

                <dl class="select change">
                    <dt><button class="i select-btn">細マッチョ</button></dt>
                    <dt><button class="j select-btn">ゴリマッチョ</button></dt>    
                    <dt><button class="k select-btn">アーノルド・シュワルツェネガー</button></dt>
                    <dt><button class="l select-btn">中山きんにくん</button></dt>                                            
                </dl>

                <dl class="select avoid">
                    <h3></h3>
                    


                </dl>

          

    </section>

    <input type="button" class="reroad-btn" value="もう一回戦う" onclick="window.location.reload();" />
    
 
</div>
<!-- JSを記載 -->

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="js/mattcho.js"></script>

</body>
</html>