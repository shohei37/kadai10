$(document).ready(function(){

// 初期設定女優のプロフィールを隠す

$(function(){
    $('.buddy').hide();  
  });


// 2. 位置情報の取得に失敗した場合の処理

function mapsError(error) {
let e = "";
if (error.code == 1) { //1＝位置情報取得が許可されてない（ブラウザの設定）
e = "位置情報が許可されてません";
}
if (error.code == 2) { //2＝現在地を特定できない
e = "現在位置を特定できません";
}
if (error.code == 3) { //3＝位置情報を取得する前にタイムアウトになった場合
e = "位置情報を取得する前にタイムアウトになりました";
}
alert("エラー：" + e);
};

// 3.位置情報取得オプション

const set ={
enableHighAccuracy: true, //より高精度な位置を求める
maximumAge: 20000,        //最後の現在地情報取得が20秒以内であればその情報を再利用する設定
timeout: 10000            //10秒以内に現在地情報を取得できなければ、処理を終了
};

//Main:位置情報を取得する処理 //getCurrentPosition :or: watchPosition

navigator.geolocation.getCurrentPosition(mapsInit, mapsError, set);

// 1．位置情報の取得に成功した時の処理

function mapsInit(position) {
  console.log(position, "成功した");
     $('.buddy').show();  
  
  };
  
  // スワイプ処理
  


  $(".buddy").on("swiperight",function(){
      $(this).addClass('rotate-left').delay(700).fadeOut(1);
      $('.buddy').find('.status').remove();
      $(this).append('<div class="status like">Like!</div>');  
      
      console.log(this)

      if ( $(this).is(':last-child') ) {
        $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
       } else {
          $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
       }
    });  


   $(".buddy").on("swipeleft",function(){
    $(this).addClass('rotate-right').delay(700).fadeOut(1);
    $('.buddy').find('.status').remove();
    $(this).append('<div class="status dislike">Dislike!</div>');

    console.log(this)

    if ( $(this).is(':last-child') ) {
     $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
      alert('OUPS');
     } else {
        $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
    } 
  });

    // ボタンアクション



  // $(".like-btn").on("click",function(){
    
  //   $('.buddy').addClass('rotate-left').delay(700).fadeOut(1);
  //   $('.buddy').find('.status').remove();

  //   $('.buddy').append('<div class="status like">Like!</div>');      
  //   if ( $('.buddy').is(':last-child') ) {
  //     $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
  //    } else {
  //       $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
  //    }
  
  // });

  // $(".dislike-btn").on("click",function(){

  //   $('.buddy').addClass('rotate-right').delay(700).fadeOut(1);
  //   $('.buddy').find('.status').remove();
  //   $('.buddy').append('<div class="status dislike">Dislike!</div>');

  //   if ( $('.buddy').is(':last-child') ) {
  //    $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
  //     alert('OUPS');
  //    } else {
  //       $('.buddy').next().removeClass('rotate-left rotate-right').fadeIn(400);
  //   } 
  // });


});