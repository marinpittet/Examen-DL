$(document).ready(function(){
	$('.parallax-bg').fadeTo(2500, 1);
/* parallax background image
----------------------------- */
	$(window).scroll(function() {
		parallax();
	})

	function parallax() {
		var wScroll = $(window).scrollTop();

		$('.parallax-bg').css('background-position', '50%'+(50-(wScroll*.3))+'%')
		$('.personal').fadeTo(500, 1);
	}
/* fin parallax background image
----------------------------- */

/* Navbar animation on scroll
----------------------------- */
// When the user scrolls down 300px from the top of the window, the navbar goes black, else is transparent
	$(window).scroll(function(){
		if ($(window).scrollTop() > 100) {
			$('#navbar').css({
				background: 'linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.8))'
			});
		} else {
			$('#navbar').css({
				background: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(255,255,255,0.05))'
			});
		}
	});
/* Fin Skill bars animation
----------------------------- */

/* To Top button animated
----------------------------- */
// When the user scrolls down 200px from the top of the document, show the button
	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
		if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
			$("#toTop").css("display", "block");
		} else {
			$("#toTop").css("display", "none");
		}
	}

	$('#toTop').on('click', function(topFunction) {
		topFunction.preventDefault();
		$("html, body").animate({scrollTop: 0}, 200);
	});

/* fin To Top button animated
----------------------------- */
});