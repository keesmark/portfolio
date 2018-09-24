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