// JavaScript Document

$(document).ready(function(){

    //first but + content
	$(".list").eq(0).addClass("ch_bg");
	$(".content").hide().eq(0).show();


var _index = $(this).index();
		$(".content").stop(true, true).hide().eq(_index).fadeIn(600);


//menu
	$(".menu").click(function(){ 
		$("nav").slideToggle();
	});

    //menu rwd
	$(window).on('load resize',function(){
		var a_w = document.body.clientWidth;
		if(a_w >= 768) $("nav").show(); else $("nav").hide();
	});

    //click event
        $(".list").click(function(){
        $(this).addClass("ch_bg").siblings().removeClass("ch_bg");

        var _index = $(this).index();
		$(".content").stop(true, true).hide().eq(_index).fadeIn(600);

    });

    

    //swiper
 var swiper = new Swiper('.mySwiper', {
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    
})