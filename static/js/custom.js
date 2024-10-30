$(document).ready(function(){
	"use strict";
  /*
  ==============================================================
   		COUNTDOWN  Script Start
  ==============================================================
  */
  if($('.countdown').length){
    $('.countdown').downCount({ date: '8/8/2017 12:00:00', offset: +1 });
  }


  setTimeout(function(){
    $('body').addClass('loaded');
  }, 1000);

  	/* 
  	=======================================================================
		  		 Chosen Script 
	=======================================================================
	*/	
	if($(".selecter-menu").length){
		$(".selecter-menu").chosen()
	}

  /*====================================================*/
  /*==========HOME PAGE 2 SCRIPT'S======================*/

  if($('.banner_slider').length){
    $('.banner_slider').slick({
      fade: true,
      autoplay:true,
      arrows:false,
      centerMode:true
    });
  }
  /*
  ==============================================================
   COUNTDOWN  Script Start
  ==============================================================
  */
  if($('.ho2-countdown').length){
    $('.ho2-countdown').downCount({ date: '8/8/2018 12:00:00', offset: +1 });
  }

  /* 
  ==============================================================
      Slick Slider Main Banner Script Start   
  ============================================================== 
  */
  if($('.kode_testimonial_slider').length){
    $('.kode_testimonial_slider').slick({
      centerMode: false,
      arrows: false,
      dots: true,
      centerPadding: '0px',
      slidesToShow: 2,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            arrows: true,
            centerMode: false,
            centerPadding: '0px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 481,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
          }
        }
      ]
    });
  }




  /*jQuery(document).ready(function($){
    var isLateralNavAnimating = false;
    
    //open/close lateral navigation
    $('.kf_menu_button').on('click', function(event){
      event.preventDefault();
      //stop if nav animation is running 
      if( !isLateralNavAnimating ) {
        if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
        
        $('body').toggleClass('navigation-is-open');
        $('.kf_menu_nav').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
          //animation is over
          isLateralNavAnimating = false;
        });
      }
    });
  });*/

  /* 
  ==============================================================
      Slick Slider Main Banner Script Start   
  ============================================================== 
  */
  if($('.new-album-slider').length){
    $('.new-album-slider').slick({
      centerMode: false,
      arrows: true,
      dots: true,
      centerPadding: '0px',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            arrows: true,
            centerMode: false,
            centerPadding: '0px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 481,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
          }
        }
      ]
    });
  }

  if($('.new-album-slider-4').length){
    $('.new-album-slider-4').slick({
      centerMode: false,
      arrows: true,
      dots: true,
      centerPadding: '0px',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            arrows: true,
            centerMode: false,
            centerPadding: '0px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 481,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
          }
        }
      ]
    });
  }
  /* 
  ==============================================================
      Slick Slider Main Banner Script Start   
  ============================================================== 
  */
  if($('.msl-eventlist2-slider').length){
    $('.msl-eventlist2-slider').slick({
      centerMode: false,
      arrows: true,
      dots: true,
      centerPadding: '0px',
      vertical: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1680,
          settings: {
            arrows: true,
            centerMode: false,
            centerPadding: '0px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 481,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
          }
        }
      ]
    });
  }
  /* 
  ==============================================================
      Slick Slider Main Banner Script Start   bottom-arrow
  ============================================================== 
  */
  if($('.featured-thumb3-silder').length){
    $('.featured-thumb3-silder').slick({
      centerMode: false,
      arrows: true,
      dots: true,
      centerPadding: '0px',
      slidesToShow: 2,
      responsive: [
        {
          breakpoint: 1680,
          settings: {
            arrows: true,
            centerMode: false,
            centerPadding: '0px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 481,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
          }
        }
      ]
    });
  }
	/* 
	==============================================================
			Slick Slider Main Banner Script Start
	============================================================== 
	*/
  if($('.main_banner').length){
    $('.main_banner').slick({
      centerMode: false,
      arrows: true,
      dots: true,
      centerPadding: '0px',
      slidesToShow: 4,
      responsive: [
        {
          breakpoint: 1680,
          settings: {
            arrows: true,
            centerMode: false,
            centerPadding: '0px',
            slidesToShow: 4
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 481,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
          }
        }
      ]
    });
  }
  /* 
  ==============================================================
      Slick Slider Main Banner Script Start
  ============================================================== 
  */
  if($('.msl-album-slider').length){
    $('.msl-album-slider').slick({
      fade: true
    });
  }

    /* 
  ==============================================================
      Slick Slider Main Banner Script Start
  ============================================================== 
  */
  if($('.msl-lifestyle-slider').length){
    $('.msl-lifestyle-slider').slick({
      fade: false,
      autoplaySpeed: 1500,
      autoplay:false
    });
  }
  /*
    ==============================================================
       Flicker Slider Script Start
    ==============================================================
  */
  if($('.flicker-slider').length){
    $('.flicker-slider').slick({
      centerMode: true,
      arrows: false,
      centerPadding: '0px',
      slidesToShow: 5,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '0px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 481,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '0px',
            slidesToShow: 1
          }
        }
      ]
    });
  }
  /*
    ==============================================================
       Flicker Slider Script Start
    ==============================================================
  */
  if($('.featured2-slider').length){
    $('.featured2-slider').slick({
      centerMode: true,
      arrows: true,
      centerPadding: '0px',
      slidesToShow: 2,
      responsive: [
        {
          breakpoint: 1680,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: false,
            centerPadding: '0px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 481,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '0px',
            slidesToShow: 1
          }
        }
      ]
    });
  }
  /*
  ==============================================================
      Main Banner SLIDER Script Start
  ==============================================================
  */
  if($('.featured-slider').length){
    $('.featured-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      dots: false,
      autoplay: false,
      asNavFor: '.featured-slider-nav'
    });
  }
  if($('.featured-slider-nav').length){
    $('.featured-slider-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.featured-slider',
      dots: false,
      vertical: true,
      centerMode: false,
      focusOnSelect: true,
      autoplay: false,
      pauseOnHover:true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '0px',
            slidesToShow: 4
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '0px',
            slidesToShow: 2
          }
        }
      ]
    });
  }
  if($('[href="#folk"]').length){
    $('[href="#folk"]').on('click', function (e) {
      $('.featured-slider-nav').resize();
    });
  }
  
   /* 
  ==============================================================
      Slick Slider Main Banner Script Start   
  ============================================================== 
  */
  if($('.mega-slider').length){
    $('.mega-slider').slick({
      centerMode: false,
	  autoplay:true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1680,
          settings: {
            arrows: true,
            centerMode: false,
            centerPadding: '0px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 481,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
          }
        }
      ]
    });
  }
	/*
	==============================================================
	 Back to Top  Script Start
	==============================================================
	*/
	$(window).scroll(function () {
		if ($(this).scrollTop() > 400) {
		  	$('.go-up').fadeIn();
		} else {
		  	$('.go-up').fadeOut();
		}
	});
	$('.go-up').on('click', function () {
		$("html, body").animate({
		  scrollTop: 0
		}, 600);
		return false;
	});
  /*
    =======================================================================
         Pretty Photo Script Script
    =======================================================================
  */
  if($("a[data-rel^='prettyPhoto']").length){
	  $("a[data-rel^='prettyPhoto']").prettyPhoto({
			animation_speed: 'fast', /* fast/slow/normal */
			slideshow: 5000, /* false OR interval time in ms */
			autoplay_slideshow: false, /* true/false */
			opacity: 0.80, /* Value between 0 and 1 */
			show_title: true, /* true/false */
			allow_resize: false, /* Resize the photos bigger than viewport. true/false */
			counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
			theme: 'pp_default', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
			hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
			wmode: 'opaque', /* Set the flash wmode attribute */
			autoplay: true, /* Automatically start videos: True/False */
			modal: false, /* If set to true, only the close button will close the window */
			deeplinking: true, /* Allow prettyPhoto to update the url to enable deeplinking. */
			overlay_gallery: true, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
			keyboard_shortcuts: true /* Set to false if you open forms inside prettyPhoto */	
		});
	}

  /*
    =======================================================================
            Map Script
    =======================================================================
  */
  if($('#map-canvas').length){
    google.maps.event.addDomListener(window, 'load', initialize);
  }
  /*
  ============================================================== 
      DL Responsive Menu
  ============================================================== 
  */
  if(typeof($.fn.dlmenu) == 'function'){
    $('#kode-responsive-navigation').each(function(){
      $(this).find('.dl-submenu').each(function(){
        if( $(this).siblings('a').attr('href') && $(this).siblings('a').attr('href') != '#' ){
          var parent_nav = $('<li class="menu-item kode-parent-menu"></li>');
          parent_nav.append($(this).siblings('a').clone());
          
          $(this).prepend(parent_nav);
        }
      });
      $(this).dlmenu();
    });
  }
 
  /*
    ==============================================================
      Masonry  Script Start
    ==============================================================
  */
  // Initialize Masonry

  if ($('.masonry').length) {
      var container = document.querySelector('.masonry');
      var msnry = new Masonry(container, {
          itemSelector: '.masonry-item'
      });

      msnry.on('layoutComplete', function() {

          mr_firstSectionHeight = $('.main-container section:nth-of-type(1)').outerHeight(true);

          // Fix floating project filters to bottom of projects container

          if ($('.filters.floating').length) {
              setupFloatingProjectFilters();
              updateFloatingFilters();
              window.addEventListener("scroll", updateFloatingFilters, false);
          }
          $('.masonry').addClass('fadeIn');
          $('.masonry-loader').addClass('fadeOut');
          if ($('.masonryFlyIn').length) {
              masonryFlyIn();
          }
      });
  }
  if($(".brk-slider").length){
      $('.brk-slider').bxSlider({
        minSlides: 2,
        maxSlides: 3,
        slideMargin: 30,
        slideWidth: true,
        ticker: true,
        speed: 30000
      });
    }

	/*
    ==============================================================
     	Range Slider
    ==============================================================
  */

    if($('.range-slider').length){
		$( ".range-slider" ).slider({
		  range: true,
		  min: 0,
		  max: 500,
		  values: [ 50, 450 ],
		  slide: function( event, ui ) {
			$( ".amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		  }
		});
		$( ".amount" ).val( "$" + $( ".range-slider" ).slider( "values", 0 ) +
		  " - $" + $( ".range-slider" ).slider( "values", 1 ) );
	}

	// Sidebar on left (default)
    if($('.sidebar.left').length){
    	$(".sidebar.left").sidebar().trigger("sidebar:open");
    }
    // Sidebar on right side
    if($('.sidebar.right').length){
    	$(".sidebar.right").sidebar({side: "right"});
	}
    // Sidebar on top side
    if($('.sidebar.top').length){
    	$(".sidebar.top").sidebar({side: "top"});
	}
    // Sidebar on bottom side
    if($('.sidebar.bottom').length){
    	$(".sidebar.bottom").sidebar({side: "bottom"});
    }
 /*
    ==============================================================
      Click  Script Start
    ==============================================================
  */
	if($('.album-list-thumb').length){
	    $(".album-list-thumb").on('click',function () {
	        $('.album-list-thumb-outer').removeClass("active");
	        $(this).parent().parent().parent('.album-list-thumb-outer').addClass("active");
	    });
	  }

	  if($('.album-list-thumb').length){
	    $('.album-list-thumb').on('click', function() {
	      var parent_box = $(this).closest('.album-list-thumb-outer');
	      parent_box.siblings().find('.album-play-list').slideUp();
	      parent_box.find('.album-play-list').slideToggle(500, 'swing')
	    });
	  }
    

      // Initialize jPlayerJukebox
	var jpjb = new jPlayerJukebox({
	  'swfPath': 'jplayer',
	  'jukeboxOptions': {
	    'autoAdvance': true,    
	    'position': 'static'
	  }
	});
});
 
  
  







	 /*
    =======================================================================
         Map Custom Style Script Script
    =======================================================================
  */
  function initialize() {
        
    "use strict";
    
    var MY_MAPTYPE_ID = 'custom_style';
    var map;
    var brooklyn = new google.maps.LatLng(40.6743890, -73.9455);
    var featureOpts = [
      {"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#f7f1df"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#d0e3b4"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"geometry","stylers":[{"color":"#fbd3da"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#bde6ab"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffe15f"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efd151"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"black"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"color":"#cfb2db"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#a2daf2"}]}

    ];
    var mapOptions = {
      zoom: 12,
      center: brooklyn,
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
      },
      zoomControl: false,
      scaleControl: false,
      scrollwheel: false,
      disableDoubleClickZoom: true,
      mapTypeId: MY_MAPTYPE_ID
    };

    map = new google.maps.Map(
      document.getElementById('map-canvas'),
      mapOptions
    );

    var styledMapOptions = {
      name: 'Custom Style'
    };

    var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

    map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
  }