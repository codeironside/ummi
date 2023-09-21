/**
*
* --------------------------------------------------------------------
*
* Template : Dlear - Education WordPress Theme
* Author : backtheme
* Author URI : https://backtheme.tech/
*
* --------------------------------------------------------------------
*
**/

(function($) {
    "use strict";

    if($('.back-canvas-icon').length) { 
        $('.back-canvas-icon').on('click', function() {
            $('.back-side-slide-nav').animate({right: "0px"}, 500); 
            $('body').addClass('back-active-offcanvas');       
        });
    }
    
    if($('span.back-nav-one').length) {   
        $('span.back-nav-one').on('click', function() {
            $('.back-side-slide-nav').animate({right: "-500px"}, 500);
            $('body').removeClass('back-active-offcanvas');
        }); 
    } 
    if($('.back-defualt-offcanvas').length) { 
        $('.back-defualt-offcanvas').on('click', function() {
            $('.back-side-slide-nav').animate({right: "-500px"}, 500);
            $('body').removeClass('back-active-offcanvas');
        });
    }
    
    if($('.back-join-now-btn').length) {        
        const back_taggle_btn = document.getElementById("back-join-now-btn");
        const back_taggle_btn_remove = document.getElementById("close___ev_pop");
        back_taggle_btn.addEventListener("click", function() {
        document.body.classList.add("enable_event_form");
        });
        back_taggle_btn_remove.addEventListener("click", function() {
        document.body.classList.remove("enable_event_form");
        });
    }

    if ($('.back-sticky-enable-here').length) {
        let lastScroll = 0;
        function sticky_header(){
            var height_child = $('header.elementor-section').outerHeight();    
            $('#page.site').css('padding-top', height_child + 'px');
            let header_hegith = $('header.elementor-section').innerHeight();
            let scroll = $(window).scrollTop();
            if (scroll > header_hegith && scroll > lastScroll) {
                $('header.elementor-section').addClass('back-hide-header');
            } else if (scroll < lastScroll) {
                $('header.elementor-section').removeClass('back-hide-header');
            }
            lastScroll = scroll;
        }
        $(() => {
          sticky_header();
        });
        window.onload = () => {
            sticky_header();
        };
        window.onscroll = () => {
            sticky_header();
        };
        window.onresize = (event) => {
            sticky_header();
        };
    }

    if ($('.menu-area').length) {
        $(".menu-area .navbar ul > li.menu-item-has-children").hover(
            function () {
                $(this).addClass('back-min');
            },
            function () {
                $(this).removeClass("back-min");
            }
        );
    }

    $(function(){ 
        $( "ul.children" ).addClass( "sub-menu" );
    });
    
    //Videos popup jQuery activation code
    $('.popup-videos').magnificPopup({
        disableOn: 10,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    //preloader
    $(window).on( 'load', function() {
        $("#back__preloader").delay(200).fadeOut(100);
        $("#back__preloader").delay(200).fadeOut(100);
    })

    if ($('.back-newsletter-all').length) {
        $(document).on("ready", function () {
            if (document.cookie.indexOf("accepted_cookies=") < 0) {
                $(".back-ns-cookie-overlay").removeClass("d-none").addClass("d-block");
                $("body").removeClass("back-ns-disable").addClass("back-ns-on");
            }
            $(".ns-accept-ckies").on("click", function () {
                document.cookie = "accepted_cookies=yes;";
                $(".back-ns-cookie-overlay").removeClass("d-block").addClass("d-none");
                $("body").removeClass("back-ns-on").addClass("back-ns-disable");
            });    
            $(".close-cookies").on("click", function () {
                $(".back-ns-cookie-overlay").removeClass("d-block").addClass("d-none");
                $("body").removeClass("back-ns-on").addClass("back-ns-disable");
            });
        });
    }

    // Scroll Top
    var win=$(window);
    var backtotop = $('#back--scrollup');    
    win.on('scroll', function() {
        if (win.scrollTop() > 150) {
            backtotop.fadeIn();
        } else {
            backtotop.fadeOut();
        }
    });
    backtotop.on('click', function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    });   

    $(function(){ 
        $( "ul.children" ).addClass( "sub-menu" );
    });    
    
    $( ".comment-body, .comment-respond" ).wrap( "<div class='comment-full'></div>" ); 

    if ( ! String.prototype.getDecimals ) {
          String.prototype.getDecimals = function() {
              var num = this,
                  match = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
              if ( ! match ) {
                  return 0;
              }
              return Math.max( 0, ( match[1] ? match[1].length : 0 ) - ( match[2] ? +match[2] : 0 ) );
          }
      }
    // Quantity "plus" and "minus" buttons
    $( document.body ).on( 'click', '.plus, .minus', function() {
        var $qty        = $( this ).closest( '.quantity' ).find( '.qty'),
            currentVal  = parseFloat( $qty.val() ),
            max         = parseFloat( $qty.attr( 'max' ) ),
            min         = parseFloat( $qty.attr( 'min' ) ),
            step        = $qty.attr( 'step' );

        // Format values
        if ( ! currentVal || currentVal === '' || currentVal === 'NaN' ) currentVal = 0;
        if ( max === '' || max === 'NaN' ) max = '';
        if ( min === '' || min === 'NaN' ) min = 0;
        if ( step === 'any' || step === '' || step === undefined || parseFloat( step ) === 'NaN' ) step = 1;

        // Change the value
        if ( $( this ).is( '.plus' ) ) {
            if ( max && ( currentVal >= max ) ) {
                $qty.val( max );
            } else {
                $qty.val( ( currentVal + parseFloat( step )).toFixed( step.getDecimals() ) );
            }
        } else {
            if ( min && ( currentVal <= min ) ) {
                $qty.val( min );
            } else if ( currentVal > 0 ) {
                $qty.val( ( currentVal - parseFloat( step )).toFixed( step.getDecimals() ) );
            }
        }

        // Trigger change event
        $qty.trigger( 'change' );
    });

})(jQuery);  