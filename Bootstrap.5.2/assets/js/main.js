(function ($) {
	"use strict";

  	 // Preloader

	  (function () {
	    $(window).load(function() {
	        $('#pre-status').fadeOut();
	        $('#preloader').delay(800).fadeOut('slow');
	    });
	}());

	// slide-start
	  $('.app-slider').owlCarousel({
        items:3,
        loop:true,
        dot:true,
        margin:20,
        nav:true,
        autoplay:false,
        autoplayTimeout:3000,
        smartSpeed:1000,
        navText:['<i class="fa fa-angle-right"></i>'],
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            768:{
              items:1
          },
            992:{
                items:1
            },
            1000:{
                items:1
            }
        }
        
      })  
	// slide-end


    // Hamburger-menu
    $('.hamburger-menu').on('click', function () {
        $('.hamburger-menu, #menu').toggleClass('current');
    });
    $(window).scroll(function() {    
		var scroll = $(window).scrollTop();
	
		//>=, not <=
		if (scroll >= 1) {
			//clearHeader, not clearheader - caps H
			$(".header-area").addClass("is-stick");
		}else{
			$(".header-area").removeClass("is-stick");
		};
	});


	
    $(".video-play-btn") .magnificPopup({
        type:'video',
    });

	// wow/aos-animetion-start
    var wow = new WOW(
        {
            mobile: false,
        }
    )
    wow.init();
	AOS.init();
	// wow/aos-animetion-start
	// scrollToTop
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="fa fa-angle-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});
})(jQuery);