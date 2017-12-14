$(document).ready(function(){
/* parallax background image
----------------------------- */
	$(window).scroll(function() {
		parallax();
	})

	function parallax() {
		var wScroll = $(window).scrollTop();

		$('.parallax-bg').css('background-position', '50%'+(50-(wScroll*.7))+'%')
	}
/* fin parallax background image
----------------------------- */

/* Skill bars animation
----------------------------- */
// When the user scrolls down 300px from the top of the window, start the animation of te skillbar
	$(window).scroll(function(){
		if ($(window).scrollTop() > 300) {
		$('.skillbar').each(function(){
			$(this).find('.skillbar-bar').animate({
				width:$(this).attr('data-percent')
			},3000);
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