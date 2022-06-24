<?php
$name = $_POST['name'];
$worry = $_POST['worry'];

// 記入時間
$time = date('Y/m/d H:i:s');

// ファイルオープン
$file = fopen('data/db.txt', 'a');

// ファイルに書き込み
fwrite($file, $time . $name . $worry . "\n");

// ファイルに保存
fclose($file);

$rand = rand(1, 10);
    

    if ($rand === 1){

        echo '<p>白って２００色あんねん</p>';

    } else if ($rand === 2){

        echo '<p>起こってしまったことは変えられへん</p>';   
        
    }else if ($rand === 3){

        echo '<p>人生で失敗したことのない人なんておらへん</p>';   
    }else if ($rand === 4){

        echo '<p>過去の自分も抱きしめてあげて</p>';   
    }else if ($rand === 5){

        echo '<p>学びと発見があったら失敗なんかない</p>'; 

    }else if ($rand === 6){

        echo '<p>笑顔は幸せになるための近道</p>';   

    }else if ($rand === 7){

        echo '<p>暗闇があるから光の有り難みが分かる</p>';   
    }

    else if ($rand === 8){

        echo '<p>ありがとうは魔法の言葉</p>';   
    }

    else if ($rand === 9){

        echo '<p>やった後悔より、やらなかった後悔の方が<br>深く残る</p>';   
    }

    else if ($rand === 10){

        echo '<p>自分は一生のパートナー</p>';   
    }

    

?>

<style>



body{
position: relative;
}


.balloon4 {
    position: absolute;
    z-index:1;
    left: 150px;
    top: 100px;
    margin: 2em 0 2em 40px;
    padding: 15px;
    background: #fff0c6;
    border-radius: 30px;
    width: 300px;
    height: 200px;
    font-size: 30px;
  }

  p{
z-index: 2;
position: absolute;
left: 200px;
top:200px;


}

.mainphoto{
    width: 400px;
    height: 500px;
    position: absolute;
    left:550px;
    top:150px;
}

.return{
    position: absolute;
    left:0px;
    top:600px;
    
}


</style>


<html>

<head>
    <meta charset="utf-8">
    <title>File書き込み</title>
</head>

<body>



    お名前:<?= $name ?>
    <br>お悩み内容:<?= $worry ?>

    <div class="balloon4">
            <!-- <input type="text" id="key" class="input-balloon"> -->
        </div>

    <img class="mainphoto" src="https://newsatcl-pctr.c.yimg.jp/r/iwiz-amd/20220308-09246577-nnn-000-4-view.jpg?exp=10800" alt="アンミカ">


    <ul class="return">
        <li><a href="read.php">相談内容を確認する</a></li>
        <li><a href="input.php">もう一回相談する</a></li>
    </ul>
</body>

</html>