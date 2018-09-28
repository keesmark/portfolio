$(function() {
	$('.slick-box').slick({
		arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
 　});
});

$(window).scroll(function () {

  if ($(this).scrollTop() > 10) {
    $('header').addClass('is-fixed');
    } else {
    　	$('header').removeClass('is-fixed');
    }
});


$(function() {
    $("#nav_btn").click(function () {
	  	$("#nav_container").fadeIn("slow");
	});
    $("#close").on("click",function(){
	  $("#nav_container").fadeOut("slow");  
	});
});

function updateButton() {
    if ($(this).scrollTop() >= 300) { 
        $(".top").fadeIn();
    } else {
        $(".top").fadeOut();
    }
}

$(document).ready(function() {
    updateButton();
    $(window).scroll(updateButton);
    $(".top").click(function() {
        $("html, body").animate({
            scrollTop: 0,
        }, 600);
        return false;
    });
});


$(function(){
  // スクロールごとに処理をさせる
  $(window).on('scroll',function(){
    // スクロール毎の処理

    // スクロール量を取得
    var scroll_top = $(window).scrollTop();
    var scroll_up = $('#history').scrollTop();
    

    // eachを利用して「effect」クラスの要素それぞれに処理を行なう
    $('#history').each(function(){
      // 要素のドキュメント上の位置を取得
      var offset_top = $(this).offset().top,
          top_margin = 50 ; // 画面上端からのマージン
      // スクロール量と要素の位置からマージンを引いた値を比較
      if( scroll_top > offset_top - top_margin ){
        // スクロール量が所定の位置を越えた時にfadeinクラスを付与
          $('.current_nav').addClass('on');       
      }else if ( scroll_top < offset_top ){
        // スクロール量が所定の位置を越えていない場合はfadeinクラスを外す
          $('.current_nav').removeClass('on');       
      } else {
      	$('.current_nav').removeClass('on');
      }
    });
  });
});
