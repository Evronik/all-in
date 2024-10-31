
$(window).load(function() {
	'use strict'; 

/* Placehoalder */
	if(!Modernizr.input.placeholder){

		$('[placeholder]').focus(function() {
		  var input = $(this);
		  if (input.val() == input.attr('placeholder')) {
			input.val('');
			input.removeClass('placeholder');
		  }
		}).blur(function() {
		  var input = $(this);
		  if (input.val() == '' || input.val() == input.attr('placeholder')) {
			input.addClass('placeholder');
			input.val(input.attr('placeholder'));
		  }
		}).blur();
		$('[placeholder]').parents('form').submit(function() {
		  $(this).find('[placeholder]').each(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
			  input.val('');
			}
		  })
		});

	}
/* and Placehoalder */

/* Back to Top */

		var offset = 220;
		var duration = 500;
		jQuery(window).scroll(function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.back-to-top').fadeIn(duration);
			} else {
				jQuery('.back-to-top').fadeOut(duration);
			}
		});
		
		jQuery('.back-to-top').click(function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})

/* and Back to Top */
});

/* Add class animated */
jQuery.noConflict()( function($){
	$(document).ready(function(){
	    wow = new WOW (
	      {
	        animateClass: 'animated',
	        mobile: false,
	        offset: 150
	      }
	    );
	    wow.init();
	});
});
/* and Add class animated */

/* Launch owl sliders */
	$(document).ready(function($) {
	  	$("#owl-carousel").owlCarousel({
	  	autoPlay: 3000, //Set AutoPlay to 3 seconds
	  	items:5,
	  	itemsDesktop : [1199,4],
		itemsDesktopSmall : [979,3],
	  	});
	});
	$(document).ready(function() {
	    $("#owl-demo-1").owlCarousel({
	    items : 4,
	    navigation : true,
	    navigationText : [" "," "],
	    });
	});
	$(document).ready(function() {
	    $("#owl-demo-2").owlCarousel({
	    items : 6,
	    navigation : true,
	    navigationText : [" "," "],
	    });
	});
	$(document).ready(function() {
	    $("#owl-demo-3").owlCarousel({
	    items : 4,
	    navigation : true,
	    navigationText : [" "," "],
	    });
	});
	$(document).ready(function() {
	    $("#owl-demo-4").owlCarousel({
	    autoPlay : 3000,
	    stopOnHover : true,
	    navigation: true,
	    paginationSpeed : 1000,
	    goToFirstSpeed : 2000,
	    singleItem : true,
	    autoHeight : true,
	    navigationText : [" "," "],
	    transitionStyle:"fade",
	    });
    });
	$(document).ready(function() {
	    $("#owl-demo-5").owlCarousel({
	    items : 4,
	    navigation : true,
	    navigationText : ["",""],
	    });
	 });
	$(document).ready(function() {
	    $("#owl-demo-6").owlCarousel({
	    items : 2,
	    navigation : true,
	    navigationText : ["",""],
	    });
	});
	$(document).ready(function() {
	    $("#owl-demo-7").owlCarousel({
	    items : 4,
	    navigation : true,
	    navigationText : ["",""],
	    });
	 })
	$(document).ready(function() {
	    $("#owl-demo-8").owlCarousel({
	    items : 3,
	    navigation : true,
	    navigationText : [" "," "],
	    });
	});
	$(document).ready(function() {
	    $("#owl-demo-9").owlCarousel({
	    items : 1,
	    singleItem:true,
	    navigation : true,
	    navigationText : [" "," "],
	    });
	});
	$(document).ready(function() {
	    $("#owl-demo-10").owlCarousel({
	    items : 1,
	    singleItem:true,
	    navigation : true,
	    navigationText : [" "," "],
	    });
	});
	$(document).ready(function() {
	    $("#owl-demo-11").owlCarousel({
	    items : 2,
	    itemsDesktop : [1199,2],
		itemsDesktopSmall : [979,2],
	    navigation : true,
	    navigationText : [" "," "],
	    });
	});
	$(document).ready(function() {
	    $("#owl-demo-12").owlCarousel({
	    items : 5,
	    itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,2],
	    navigation : true,
	    navigationText : [" "," "],
	    });
	});
	$(document).ready(function() {
	    $("#owl-demo-13").owlCarousel({
	    items : 5,
	    itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,2],
	    navigation : true,
	    navigationText : [" "," "],
	    });
	});
	$(document).ready(function() {
	    $("#owl-demo-14").owlCarousel({
	    autoPlay : false,
	    stopOnHover : true,
	    navigation: true,
	    paginationSpeed : 1000,
	    goToFirstSpeed : 2000,
	    singleItem : true,
	    autoHeight : true,
	    navigationText : [" "," "],
	    transitionStyle:"fade",
	    });
    });
    $(document).ready(function() {
	    $("#owl-demo-15").owlCarousel({
	    items : 5,
	    itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,2],
	    navigation : true,
	    navigationText : [" "," "],
	    });
	});
	$(document).ready(function() {
	    $("#owl-demo-16").owlCarousel({
	    items : 5,
	    itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,2],
	    navigation : true,
	    navigationText : [" "," "],
	    });
	});
	$(document).ready(function() {
	    $("#owl-demo-17").owlCarousel({
	    items : 5,
	    itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,2],
	    navigation : true,
	    navigationText : [" "," "],
	    });
	});
/* and Launch owl sliders */

/* Menu */

	/* Dropdown menu if screen < 650px */
	$(document).ready(function(){
		$('#menu').slicknav();
	});
	/* and Dropdown menu if screen < 650px */

	/* Menu slide down */
	$(document).ready(function() {
	    $( 'ul#menu .drop' ).hover(
	        function(){
	            $(this).children('.slideDown').delay(50).slideDown(50);
	        },
	        function(){
	            $(this).children('.slideDown').slideUp(50);
	        }
	    );
	});
 	/* and Menu slide down */

	/* lang changer */
	$(document).ready(function(){
	    $(function () {
	        $('#lang').hover(
	        function () {
	            $('.lang').slideDown(100);
	        },
	        function () {
	            $('.lang').slideUp(150);
	        });
	    });
	 });
	/* and lang changer */

	/* lang changer */
	$(document).ready(function(){
	    $(function () {
	        $('#currency').hover(
	        function () {
	            $('.currency').slideDown(100);
	        },
	        function () {
	            $('.currency').slideUp(150);
	        });
	    });
	 });
	/* and lang changer */

	$(document).ready(function(){

		/* Shop card */
	    $(function () {
	        $('.top-bar-nav-shop-card').hover(
	        function () {
	            $('.shop-card').slideDown(100);
	        },
	        function () {
	            $('.shop-card').slideUp(150);
	        });
	    });
	    /* and Shop card */

	    /* Wishlist */
	    $(function () {
	        $('.top-bar-nav-wishlist').hover(
	        function () {
	            $('.wishlist').slideDown(100);
	        },
	        function () {
	            $('.wishlist').slideUp(150);
	        });
	    });
	    /* and Wishlist */

	 });

/* ScrollToFixed menu */
	$(document).ready(function() {
        $('.header').scrollToFixed({minWidth: 650});
    });
/* and ScrollToFixed menu */

/* and Menu */

/* Animation progress-bar */
	$(document).ready(function(){
		$(document).scroll(function() {
	
			var bar_width = $(".animated .progress-bar").attr('aria-valuenow');
			var bar = $('.animated .progress-bar');

			$(function(animate){
			  
				$(bar).each(function(){
				    bar_width = $(this).attr('aria-valuenow');
				    $(this).width(bar_width + '%');
				  });
			});
		});
	});
/* and Animation progress-bar */

/* Search button */
	$(document).ready(function(){
	    $(".search").click(function(){
	    $("#search").slideDown(function(){
	    	$('input', this).focus();
			});
		});
	});


	$(document).ready(function(){					
		$("#search-beack").click(function(){
		    $("#search").slideUp();
		});
	});
/* and Search button */

/* Accordion */

	$(document).ready(function(){
	   $('.toggle h4').click( function() {

	    var top = $(this).parent().parent();
	    var content = $(this).parent().find('.toggle-content');
	    var icon = $(this).parent().find('h4>i');
	    var h = $(this);
	  
	    top.find('h4').removeClass('opened');

	    if( content.is(':hidden') ) {
	     top.find('.toggle-content').slideUp();
	     top.find('h4>i').removeClass('minus').addClass('plus');
	     icon.removeClass('plus').addClass('minus');
	     h.addClass('opened');
	     content.slideDown(250);

	    } else {
	     icon.removeClass('minus').addClass('plus');
	     content.slideUp(50);
	    }

	    return false;
	   });
	});
/* and Accordion */

/* Blog slider */

	$(document).ready(function() {
	    $("#owl-slider-pager-slider").owlCarousel({
	    items : 5,
	    itemsDesktopSmall : [768,3],
	    itemsMobile : false,
	    lazyLoad : true,
	    navigation : true,
	    navigationText : [" "," "],
	    });
    });

    $(document).ready(function() {
	    $("#owl-slider-pager-slider-2").owlCarousel({
	    items : 4,
	    itemsDesktop : [1199,4],
		itemsDesktopSmall : [320,5],
	    lazyLoad : true,
	    navigation : true,
	    navigationText : [" "," "],
	    });
    });
    
/* and Blog slider */


/* Input quntity +/- */
	jQuery.noConflict()( function($){
		$(".button").on("click", function () {
		    var $button = $(this);
		    var $input = $button.closest('.quantity-block').find("input.quntity-input");
		    
		    $input.val(function(i, value) {
		        return + value + (1 * +$button.data('multi'));
		    });
		});
	});
/* and Input quntity +/- */

/* Button selectbox */
	jQuery.noConflict()( function($){
		$('.sort-buy-button').click(function(){
		    $('.sort-buy-content').slideToggle();
				});
			$(function () {
		        $('.sort-buy-button').hover(
			        function () {
			            $('.sort-buy-content').slideUp(250);
			        });
	    });
    });
/* and Button selectbox */


/* Cloud move */

		$(document).ready(function move() {
			$(".cloud").animate( {"top": "+=30px"}, 2500, "linear",
			function() {
				$(".cloud").animate( {"top": "-=30px"}, 2500, "linear",
				function() {
					move();
				});
			});
		});

/* and Cloud move */

/* Swicher show/hide */
	$switcher = $('#switcher')

	$('.show-switcher-icon').on('click',function(){

		if ($switcher.hasClass("show-switcher")) {
	            	$switcher.addClass('hide-switcher'); 
	      		$switcher.removeClass('show-switcher');
	        }
	        else {
	        	$switcher.addClass('show-switcher'); 
	      		$switcher.removeClass('hide-switcher');
	        };

	});
/* and Swicher show/hide */




