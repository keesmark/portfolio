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
  $(window).on('scroll',function(){
    var scroll_top = $(window).scrollTop();
    var scroll_up = $('#history').scrollTop();
    $('#history').each(function(){
      var offset_top = $(this).offset().top,
          top_margin = 10 ; 
      if( scroll_top > offset_top - top_margin ){
          $('.current_nav').addClass('on');       
      }else if ( scroll_top < offset_top ){
          $('.current_nav').removeClass('on');       
      } else {
      	$('.current_nav').removeClass('on');
      }
    });
  });
});

$(function(){
    var margin = 400,
    sectionTop = new Array,
    current = -1;
 
    $('.current_box').each(function(i) {
        sectionTop[i] = $(this).offset().top;
    });
 
    changeNavCurrent(0);
 
    $(window).scroll(function(){
        scrollY = $(window).scrollTop();
 
        for (var i = sectionTop.length - 1 ; i >= 0; i--) {
            if (scrollY > sectionTop[i] - margin) {
                    changeNavCurrent(i);
                break;
            }
        };
    });
    function changeNavCurrent(curNum) {
        if (curNum != current) {
            current = curNum;
            curNum2 = curNum + 1;
            $('.current_nav li').removeClass('current');
            $('.current_nav li:nth-child(' + curNum2 +')').addClass('current');
        }
    };
});