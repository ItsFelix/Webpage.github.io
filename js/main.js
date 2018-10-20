// ANimations animate.css waypoints.js
$(document).ready(function(){
 
  // hide our element on page load
  $('#About h2, #Portfolio h2, #Skills h2').css('opacity', 1);

  // Animation
  $('#profilbild').waypoint(function() {
      $('#profilbild').toggleClass('swing');
  }, { offset: '80%' });

  $('#Kontakt').waypoint(function() {
      $('#contact').toggleClass('flipInY');
  }, { offset: '80%' });

  $('#About').waypoint(function() {
      $('#About h2').toggleClass('animated fadeInUp');
  }, { offset: '80%' });
  $('#Portfolio').waypoint(function() {
      $('#Portfolio h2').toggleClass('animated fadeInUp');
  }, { offset: '80%' });
  $('#Skills').waypoint(function() {
      $('#Skills h2').toggleClass('animated fadeInUp');
  }, { offset: '80%' });
  // Skillbar

  $('.skillbar').waypoint(function() {
      jQuery('.skillbar').each(function(){
      jQuery(this).find('.skillbar-bar').animate({
      width:jQuery(this).attr('data-percent')
    },6000);
  });
  }, { offset: '80%' });

  $('#Portfolio').waypoint(function() {
    $('.header h1 p').toggleClass('none');
    $('#scroll-down a').toggleClass('none');
  }, { offset: '80%' });

});

// Navigation scroll background black

$(window).on('scroll', function () {
	if($(window).scrollTop()) {
		$('nav').addClass('black');
	}
	else {
		$('nav').removeClass('black');
	}
});

/*$(window).resize(function() {
  if ($(window).width() > 1007) {
    $("nav ul").css("display", "block");
  }
  else {
    $("nav ul").css("display", "none");
  }
});*/

$(document).ready(function() {
  $(".nav-toggle").click(function() {
    $("nav ul").slideToggle("slow");
    $(".nav-toggle").toggleClass("change");
  });
});

// Navigation active

$(function(){
    $('nav ul li a').click(function () {
        $('nav ul li a').removeClass('active');
        $(this).addClass('active');
     });
});

// Show Nav

$(window).resize(function() {
  if ($(window).width() > 1007) {
    $("nav ul").css("display", "block");
    $(".nav-toggle").addClass("change");
  }
  else {
    $("nav ul").css("display", "none");
    $(".nav-toggle").removeClass("change");
  }
});

// Toggle Profile Card

$(document).ready(function() {
  $(".toggle-profile-card").click(function() {
    $(".profile-card").slideToggle("slow");
    $(".toggle-profile-card").toggleClass("change-card");
  });
});

// Popup box

$(document).ready(function() {
  $('.popup-btn').click(function(e) {
    $('.popup-wrap').fadeIn(500);
    $('.popup-box').removeClass('transform-out-popup').addClass('transform-in-popup');

    e.preventDefault();
  });

  $('.popup-close, .popup-wrap').click(function(e) {
    $('.popup-wrap').fadeOut(500);
    $('.popup-box').removeClass('transform-in-popup').addClass('transform-out-popup');

    e.preventDefault();
  });
});

// Preloader 

$(document).ready(function() {
	$('#dots').delay(750).fadeOut(300,function(){
		$('#bg_left').animate({left: '-50%'}, 400);
		$('#bg_right').animate({right: '-50%'}, 400,function() {
			$('#preloader').fadeOut(10);
		});
	});
});

// Animated Skillbar

// Submit 2

  function hover() {
    $(".button2").on("mouseenter", function() {
      return $(this).addClass("hover");
    });
  }

  function hoverOff() {
    $(".button2").on("mouseleave", function() {
      return $(this).removeClass("hover");
    });
  }

  /*function active() {
    $(".button2").on("click", function() {
      return $(this).addClass("active2");
    });
  }*/

  function active() {
    $(".button2").on("click", function() {
      return $(this).addClass("active2");
    });
  }

  hover();
  hoverOff();
  active();

  function validateForm() {
  var isValid = true;
  $('#contact').each(function() {
    if ( $(this).val() === '' )
        isValid = false;
  });
  return isValid;
}

// typewriter
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap-writer">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap-writer { border-right: 0.08em solid #039BE5; }";
        document.body.appendChild(css);
    };

// Back To Top
$(document).ready(function() {
      // Show or hide the sticky footer button
      $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
          $('.go-top').fadeIn(200);
        } else {
          $('.go-top').fadeOut(200);
        }
      });
      
      // Animate the scroll to top
      $('.go-top').click(function(event) {
        event.preventDefault();
        
        $('html, body').animate({scrollTop: 0}, 300);
      })
    });

// Portfolio

$(document).ready(function(){

  $('.filter').on('change',function(){
    var select = $(this).val();

    $('.container').removeClass('fadein').addClass('fadeout');
    $('.container').removeClass('none');

    setTimeout(function(){
      $('.container').each(function(){
        if(!($(this).hasClass(select))) {
          $(this).addClass('none');
        }
      });
    },510);

    setTimeout(function(){
      $('.container').each(function(){
        if($(this).hasClass(select)) {
          $(this).removeClass('none');
        }
      });
    },520);

    setTimeout(function(){
      $('.container').each(function(){
        if($(this).hasClass(select)) {
          $(this).removeClass('fadeout').addClass('fadein');
        }
      });
    },550);

  });
});

// Scroll to animation

    $(document).ready(function () {
        $(document).on("scroll", onScroll);

        //smoothscroll
        $('nav ul li a[href^="#"], #scroll-down a[href^="#"], go-top a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");

            $('nav ul li a').each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');

            var target = this.hash,
                menu = target;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 500, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });
    });

//  Active if scroll to section

    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('nav ul li a, nav ul ul li a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('nav ul li a, nav ul ul li a').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    }

