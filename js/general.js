$(document).ready(function() {

    /*************** bxslider *****************/
    jQuery(function() {
        jQuery('#slider1').bxSlider({
            mode: 'fade',
            auto: false,
            autoControls: true,
            controls: true,
			pager: false,
            pause: 5000 
        });
    });
    /*************** Sticky Header *****************/
    if ($(window).width() >= 1025) {
        $(window).scroll(function() {
            if($(window).scrollTop() > $("#banner").height() - 33)
			{
				$('header').addClass('sticky');
			}
			else
			{
				$('header').removeClass('sticky');
			}
        });
    } else {
        $('header').removeClass("sticky");
    }
	
	/*************** Search Box *****************/
	$(document).ready(function () {
		$(".header-profile").click(function () {
			$(".header-profile-list").toggle();
		});
		$(".search_button").click(function () {
			$(".search-box-main").fadeIn();
			$("body").addClass("popup");
		});
		$(".search-close").click(function () {
			$(".search-box-main").fadeOut();
			$("body").removeClass("popup");
		});

	});
	/*************** Sticky Form *****************/
    $(".sticky_button").click(function() {
        $(".sticky_form").toggleClass("in");
		$(".sticky_button").toggleClass("in");
		$("body").toggleClass("overly-get-quote");
    });
	$(window).on('click touchend',function (e) {
		if (!$(e.target).hasClass("sticky_button") && !$(e.target).hasClass("input") && !$(e.target).hasClass("form_row") && $(e.target).parents(".sticky_form").length === 0		    )
		{
			$(".sticky_form").removeClass('in');
			$(".sticky_button").removeClass("in");
			$("body").removeClass("overly-get-quote");
		}
	});
	$('.close-form').on('click', function(e) {
		if($(e.target).closest().length == 0) {
		   $(".sticky_form").removeClass('in');
			$(".sticky_button").removeClass("in");
			$("body").removeClass("overly-get-quote");
		}
	});
	/*************** parallax *****************/
	$(window).scroll(function () {
		var get_width = $(window).width();
		if (get_width >= 1025)
		{
			if ($(window).scrollTop() > ($("#call_section").offset().top - $(window).height()))
			{
				$('.call_section').parallax("50%", 0.5);
			}
			if ($(window).scrollTop() > ($("#client_section").offset().top - $(window).height()))
			{
				$('.client_section').parallax("50%", 0.5);
			}
		}
	});
    /*************** client_slider *****************/
    $(".client_slider").owlCarousel(
	{
		autoplay: true,
		autoplayTimeout: 3000,
		smartSpeed: 1500,
		loop: true,
		nav: false,
		dots: true,
		margin: 0,
		responsiveClass: true,
		responsive: {
			0: {
				items: 2
			},
			375: {
				items: 2
			},
			480: {
				items: 3
			},
			767: {
				items: 4
			},
			991: {
				items: 5
			},
			1024: {
				items: 6
			},
			1200: {
				items: 6
			},
		}
	});
	/*************** testimonails_slider *****************/
    jQuery('.testimonials_slider').owlCarousel({
        autoplay: true,
		autoplayTimeout: 3000,
		smartSpeed: 1500,
		loop: true,
		nav: true,
		dots: true,
		margin: 30,
		navText: ["<span title='Previous'></span>", "<span title='Next'></span>"],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 1
			},
			991: {
				items: 2
			},
			1200: {
				items: 2
			},
		}
    })
    /************* Animation *******************/
	var get_width = $(window).width();
    if (get_width >= 1025) {
        new WOW().init();
    }
    /************* Custom Scrollbar*******************/
    $(".welcome_cnt").mCustomScrollbar({
        mouseWheel: {
            enable: false
        },
        contentTouchScroll: false
    });
	/************************ Mobile Accordion ****************/
	$(".mobile-accordion .title span").click(function() {
        if ($(this).parent(".title").parent(".mobile-accordion").hasClass("in")) {
            $(this).parent(".title").parent(".mobile-accordion").children(".mobile-accordion-toggle").slideUp();
            $(".mobile-accordion").removeClass("in");
        } else {
            $(".mobile-accordion").children(".mobile-accordion-toggle").slideUp();
            $(".mobile-accordion").removeClass("in");
            $(this).parent(".title").parent(".mobile-accordion").toggleClass("in");
            if ($(this).parent(".title").parent(".mobile-accordion").hasClass('mobile-toggle')) {
                $(this).parent(".title").parent(".mobile-accordion").children(".mobile-accordion-toggle").slideToggle();
            } else {
                $(".mobile-accordion-toggle").slideUp();
            }
        }
    });
	/******************* armodal popup *******************/
	$(".armodal-close").click(function() {
        $(".armodal_box").fadeOut(700);
        $("body").removeClass("sticky");
    });
    $(".popup").click(function() {
        var a = $(this).attr("data-id");
        var m = $(".armodal_box");
        $("."+a).fadeIn(700);
        $("body").addClass("sticky");
    });
	/******************* File Input *********************/
	$(".file-box .input").change(function(e) {
        var z = $(this).val().replace(/\\/g, '/').replace(/.*\//, '');
        if (z == "") {
            $(this).parent(".file-box").children(".input-text").val("No Files Selected");
        } else {
            $(this).parent(".file-box").children(".input-text").val(z);
        }
    });
 
    /************* Back to top *******************/
    jQuery('body').append('<div id="toTop" class="btn top-btn"><i class="fa fa-angle-up"></i><div clas="top-text">top</div></div>');
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() != 0) {
            jQuery('#toTop').fadeIn();
        } else {
            jQuery('#toTop').fadeOut();
        }
    });
    jQuery('#toTop').click(function() {
        jQuery("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
	/*********************************************************************/
	$(window).on('click touchend', function(e) {
    if (!$(e.target).hasClass("armodal-close") && !$(e.target).hasClass("armodal") && !$(e.target).hasClass("popup") && $(e.target).parents(".armodal_box").length === 0) {
        $(".armodal_box").fadeOut(700);
        $("body").removeClass("sticky");
    }
	if (!$(e.target).hasClass("search_button") && !$(e.target).hasClass("search-text") && !$(e.target).hasClass("search-input") && $(e.target).parents(".search-box-main").length === 0)
    {
        $(".search-box-main").fadeOut();
        $("body").removeClass("popup");
    }
	if (!$(e.target).hasClass("profile-btn") && !$(e.target).hasClass("header-profile-list") && $(e.target).parents(".header-profile-list").length === 0) {
        $(".header-profile-list").hide();
    }
	if (!$(e.target).hasClass("cart-close") && !$(e.target).hasClass("mini_cart") && !$(e.target).hasClass("cart-btn") && $(e.target).parents(".mini_cart").length === 0) {
        $(".cart_sidebar_main").fadeOut();
        $("body").removeClass("cart_open");
    }
    
});

});
