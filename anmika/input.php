
<html>

<head>
    <meta charset="utf-8">
    <title>課題テンプレート</title>
    <style>

        body{
            width:1200px;
            margin:auto; 
        }



        h1{
            background-color:#864152;
            color:#B79B5B;
        }

       
        .mainimg{
            position: absolute;

        }

        .maintitle{
            position: relative;
            text-align:center;
            width:1000px;
            top:0px;
            
        }


        .anmikaimg{
            position: relative;
            top:200px;
            left:755px;
        }

        .form{
            z-index: 1;
            position: relative;
            top:400px;
            left:300px;
        }
        

    </style>

</head>



<body>
    <h1 class="maintitle">アンミカの部屋</h1>
    <img class="mainimg" src="http://hoshino.asablo.jp/blog/img/2014/12/04/360f50.jpg" alt="徹子の部屋" width="1000px" height="600px">
    <img class="anmikaimg" src="https://pbs.twimg.com/media/DoVB6n-UYAAsIRq.jpg" alt="アンミカ" width="110px" height="110px">
    <form action="anmika.php" method="post" class="form">
        
        お名前: <input type="text" name="name">
        お悩み: <input type="text" name="worry">
        
        <input type="submit" value="相談する">
        <div class="form-design">
        </div>
    </form>
</body>

</html>
