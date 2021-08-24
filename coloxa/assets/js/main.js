(function($) {
  "use strict";

  /*****************************
   * Commons Variables
   *****************************/
  var $window = $(window),
    $body = $('body');

  /****************************
   * Sticky Menu
   *****************************/
  $(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    if (scroll < 100) {
      $(".sticky-header").removeClass("sticky");
    } else {
      $(".sticky-header").addClass("sticky");
    }
  });


  /*****************************
   * Off Canvas Function
   *****************************/
  (function() {
    var $offCanvasToggle = $('.offcanvas-toggle'),
      $offCanvas = $('.offcanvas'),
      $offCanvasOverlay = $('.offcanvas-overlay'),
      $mobileMenuToggle = $('.mobile-menu-toggle');
    $offCanvasToggle.on('click', function(e) {
      e.preventDefault();
      var $this = $(this),
        $target = $this.attr('href');
      $body.addClass('offcanvas-open');
      $($target).addClass('offcanvas-open');
      $offCanvasOverlay.fadeIn();
      if ($this.parent().hasClass('mobile-menu-toggle')) {
        $this.addClass('close');
      }
    });
    $('.offcanvas-close, .offcanvas-overlay').on('click', function(e) {
      e.preventDefault();
      $body.removeClass('offcanvas-open');
      $offCanvas.removeClass('offcanvas-open');
      $offCanvasOverlay.fadeOut();
      $mobileMenuToggle.find('a').removeClass('close');
    });
  })();


  /**************************
   * Offcanvas: Menu Content
   **************************/
  function mobileOffCanvasMenu() {
    var $offCanvasNav = $('.offcanvas-menu'),
      $offCanvasNavSubMenu = $offCanvasNav.find('.mobile-sub-menu');

    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.parent().prepend('<div class="offcanvas-menu-expand"></div>');

    /*Category Sub Menu Toggle*/
    $offCanvasNav.on('click', 'li a, .offcanvas-menu-expand', function(e) {
      var $this = $(this);
      if ($this.attr('href') === '#' || $this.hasClass('offcanvas-menu-expand')) {
        e.preventDefault();
        if ($this.siblings('ul:visible').length) {
          $this.parent('li').removeClass('active');
          $this.siblings('ul').slideUp();
          $this.parent('li').find('li').removeClass('active');
          $this.parent('li').find('ul:visible').slideUp();
        } else {
          $this.parent('li').addClass('active');
          $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
          $this.closest('li').siblings('li').find('ul:visible').slideUp();
          $this.siblings('ul').slideDown();
        }
      }
    });
  }
  mobileOffCanvasMenu();

  /*********************************************
   *   Cases Slider Active
   **********************************************/
  var casesSlider = new Swiper('.cases-slider .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 50,
    speed: 1500,
    loop: true,
    navigation: {
      nextEl: '.cases-slider .swiper-button-next',
      prevEl: '.cases-slider .swiper-button-prev',
    },
    breakpoints: {

      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1400: {
        spaceBetween: 50,
      },
    }
  });


  /*********************************************
   *   Dortor Team Slider Active
   **********************************************/
  var doctorTeamSlider = new Swiper('.doctors-team-slider .swiper-container', {
    slidesPerView: 4,
    spaceBetween: 40,
    speed: 1500,
    loop: true,
    navigation: {
      nextEl: '.doctors-team-slider .swiper-button-next',
      prevEl: '.doctors-team-slider .swiper-button-prev',
    },
    breakpoints: {

      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1400: {
        spaceBetween: 40,
      },
    }
  });


  /*********************************************
   *   Company Logo Slider Active - 7 Grid Single Rows
   **********************************************/
  var companyLogoSlider = new Swiper('.company-logo-slider .swiper-container', {
    slidesPerView: 4,
    speed: 1500,
    navigation: {
      nextEl: '.company-logo-slider .swiper-button-next',
      prevEl: '.company-logo-slider .swiper-button-prev',
    },
    breakpoints: {

      0: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 4,
      },

    }
  });

  /********************************
   *  Testimonial Slider
   **********************************/
  var testimonialSliderOne = new Swiper('.testimonial-slider-style-1 .swiper-container', {
    slidesPerView: 3,
    speed: 1500,
    autoplay: true,
    loop: true,
    breakpoints: {

      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1400: {
        slidesPerView: 3,
      },

    }
  });


  var testimonialSliderTwo = new Swiper('.testimonial-slider-style-2 .swiper-container', {
    slidesPerView: 1,
    speed: 1500,
    autoplay: true,
    loop: true,
    spaceBetween: 25,
    // If we need pagination
    pagination: {
      el: '.testimonial-slider-style-2 .swiper-pagination',
      clickable: true,
    },
    breakpoints: {

      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 45,
      },
      1200: {
        slidesPerView: 1,
      },

    }
  });


  /********************************
   * Blog List Slider - Single Slide
   * *********************************/
  var blogFeedSlider = new Swiper('.blog-feed-slider .swiper-container', {
    slidesPerView: 1,
    speed: 1500,
    loop: true,
    spaceBetween: 25,
    // If we need pagination
    pagination: {
      el: '.blog-feed-slider .swiper-pagination',
      clickable: true,
    },
    breakpoints: {

      0: {
        slidesPerView: 1,
        pagination: false,
        direction: 'horizontal',
      },
      768: {
        spaceBetween: 15,
        slidesPerView: 2,
      },
      992: {
        direction: 'vertical',
      },
      
    }
  });


  /************************************************
   * Video  Popup
   ***********************************************/
  $('.wave-btn').venobox();

  /************************************************
   * Date Picker
   ***********************************************/
  $("#datepicker").pDatepicker();

  /************************************************
   * Scroll Top
   ***********************************************/
  $('body').materialScrollTop();

})(jQuery);
