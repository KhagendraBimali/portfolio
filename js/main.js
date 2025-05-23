/** 
 * ===================================================================
 * main js
 *
 * ------------------------------------------------------------------- 
 */ 

(function($) {

	"use strict";

	/*---------------------------------------------------- */
	/* Preloader
	------------------------------------------------------ */ 
   $(window).load(function() {

      // will first fade out the loading animation 
    	$("#loader").fadeOut("slow", function(){

        // will fade out the whole DIV that covers the website.
        $("#preloader").delay(300).fadeOut("slow");

      });       

  	})


  	/*---------------------------------------------------- */
  	/* FitText Settings
  	------------------------------------------------------ */
  	setTimeout(function() {

   	$('#intro h1').fitText(1, { minFontSize: '42px', maxFontSize: '84px' });

  	}, 100);


	/*---------------------------------------------------- */
	/* FitVids
	------------------------------------------------------ */ 
  	$(".fluid-video-wrapper").fitVids();


	/*---------------------------------------------------- */
	/* Owl Carousel
	------------------------------------------------------ */ 
	$("#owl-slider").owlCarousel({
        navigation: false,
        pagination: true,
        itemsCustom : [
	        [0, 1],
	        [700, 2],
	        [960, 3]
	     ],
        navigationText: false
    });


	/*----------------------------------------------------- */
	/* Alert Boxes
  	------------------------------------------------------- */
	$('.alert-box').on('click', '.close', function() {
	  $(this).parent().fadeOut(500);
	});	


	/*----------------------------------------------------- */
	/* Stat Counter
  	------------------------------------------------------- */
   var statSection = $("#stats"),
       stats = $(".stat-count");

   statSection.waypoint({

   	handler: function(direction) {

      	if (direction === "down") {       		

			   stats.each(function () {
				   var $this = $(this);

				   $({ Counter: 0 }).animate({ Counter: $this.text() }, {
				   	duration: 4000,
				   	easing: 'swing',
				   	step: function (curValue) {
				      	$this.text(Math.ceil(curValue));
				    	}
				  	});
				});

       	} 

       	// trigger once only
       	this.destroy();      	

		},
			
		offset: "90%"
	
	});	


	/*---------------------------------------------------- */
	/*	Masonry
	------------------------------------------------------ */
	var containerProjects = $('#folio-wrapper');

	containerProjects.imagesLoaded( function() {

		containerProjects.masonry( {		  
		  	itemSelector: '.folio-item',
		  	resize: true 
		});

	});


	/*----------------------------------------------------*/
	/*	Modal Popup
	------------------------------------------------------*/
   $('.item-wrap a').magnificPopup({

      type:'inline',
      fixedContentPos: false,
      removalDelay: 300,
      showCloseBtn: false,
      mainClass: 'mfp-fade'

   });

   $(document).on('click', '.popup-modal-dismiss', function (e) {
   	e.preventDefault();
   	$.magnificPopup.close();
   });

	
	/*-----------------------------------------------------*/
  	/* Navigation Menu
   ------------------------------------------------------ */  
   var toggleButton = $('.menu-toggle'),
       nav = $('.main-navigation');

   // toggle button
   toggleButton.on('click', function(e) {

		e.preventDefault();
		toggleButton.toggleClass('is-clicked');
		nav.slideToggle();

	});

   // nav items
  	nav.find('li a').on("click", function() {   

   	// update the toggle button 		
   	toggleButton.toggleClass('is-clicked'); 
   	// fadeout the navigation panel
   	nav.fadeOut();   		
   	     
  	});


   /*---------------------------------------------------- */
  	/* Highlight the current section in the navigation bar
  	------------------------------------------------------ */
	var sections = $("section"),
	navigation_links = $("#main-nav-wrap li a");	

	sections.waypoint( {

       handler: function(direction) {

		   var active_section;

			active_section = $('section#' + this.element.id);

			if (direction === "up") active_section = active_section.prev();

			var active_link = $('#main-nav-wrap a[href="#' + active_section.attr("id") + '"]');			

         navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");

		}, 

		offset: '25%'
	});


	/*---------------------------------------------------- */
  	/* Smooth Scrolling
  	------------------------------------------------------ */
  	$('.smoothscroll').on('click', function (e) {
	 	
	 	e.preventDefault();

   	var target = this.hash,
    	$target = $(target);

    	$('html, body').stop().animate({
       	'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
      	window.location.hash = target;
      });

  	});  
  

   /*---------------------------------------------------- */
	/*  Placeholder Plugin Settings
	------------------------------------------------------ */ 
	$('input, textarea, select').placeholder()  


  	/*---------------------------------------------------- */
	/*	contact form
	------------------------------------------------------ */

	/* local validation */
	$('#contactForm').validate({
		submitHandler: function(form) {
			// Show success message
			$('#message-success').fadeIn();
			// Hide the form
			$('#contactForm').fadeOut();
			// Submit the form
			form.submit();
		}
	});


 	/*----------------------------------------------------- */
  	/* Back to top
   ------------------------------------------------------- */ 
	var pxShow = 300; // height on which the button will show
	var fadeInTime = 400; // how slow/fast you want the button to show
	var fadeOutTime = 400; // how slow/fast you want the button to hide
	var scrollSpeed = 300; // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'

   // Show or hide the sticky footer button
	jQuery(window).scroll(function() {

		if (!( $("#header-search").hasClass('is-visible'))) {

			if (jQuery(window).scrollTop() >= pxShow) {
				jQuery("#go-top").css('display', 'block').fadeIn(fadeInTime);
			} else {
				jQuery("#go-top").fadeOut(fadeOutTime, function() {
					jQuery(this).css('display', 'none');
				});
			}

		}		

	});
})(jQuery);

// Hamburger Menu Toggle
(function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNavigation = document.querySelector('.main-navigation');

    if (menuToggle && mainNavigation) {
        menuToggle.addEventListener('click', function() {
            // Toggle menu and hamburger icon
            menuToggle.classList.toggle('active');
            mainNavigation.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!menuToggle.contains(event.target) && !mainNavigation.contains(event.target)) {
                menuToggle.classList.remove('active');
                mainNavigation.classList.remove('active');
            }
        });

        // Close menu when a navigation link is clicked
        const navLinks = mainNavigation.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                mainNavigation.classList.remove('active');
            });
        });

        // Keyboard accessibility
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && mainNavigation.classList.contains('active')) {
                menuToggle.classList.remove('active');
                mainNavigation.classList.remove('active');
            }
        });
    }
})();

// Mobile Navigation Toggle
(function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMobileMenu = document.querySelector('.nav-mobile-menu');
    const navLinks = document.querySelectorAll('.nav-mobile-menu a');

    // Toggle mobile menu
    navToggle.addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.toggle('is-clicked');
        navMobileMenu.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('is-clicked');
            navMobileMenu.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        const isClickInsideNavToggle = navToggle.contains(e.target);
        const isClickInsideMobileMenu = navMobileMenu.contains(e.target);

        if (!isClickInsideNavToggle && !isClickInsideMobileMenu) {
            navToggle.classList.remove('is-clicked');
            navMobileMenu.classList.remove('active');
        }
    });
})();

// Cursor Circle Tracking
document.addEventListener('DOMContentLoaded', () => {
    const cursorCircle = document.createElement('div');
    cursorCircle.id = 'cursor-circle';
    document.body.appendChild(cursorCircle);

    let mouseTimeout;
    let lastX = 0, lastY = 0;

    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
        // Clear previous timeout
        clearTimeout(mouseTimeout);

        // Remove at-rest class
        cursorCircle.classList.remove('at-rest');

        // Update circle position
        cursorCircle.style.left = `${e.clientX}px`;
        cursorCircle.style.top = `${e.clientY}px`;

        // Check if mouse is moving
        if (e.clientX !== lastX || e.clientY !== lastY) {
            // Set timeout for at-rest state
            mouseTimeout = setTimeout(() => {
                cursorCircle.classList.add('at-rest');
            }, 1000);
        }

        // Update last known position
        lastX = e.clientX;
        lastY = e.clientY;
    });

    // Expand circle on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .skill-item, .nav-right a');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            // Reduce size to 30px for clickable elements (50% of 60px)
            cursorCircle.style.width = '30px';
            cursorCircle.style.height = '30px';
        });
        
        el.addEventListener('mouseleave', () => {
            // Return to default size of 20px
            cursorCircle.style.width = '20px';
            cursorCircle.style.height = '20px';
        });
    });
});