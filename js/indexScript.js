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

/* Skill bars and Educacion Blocks animation 
----------------------------- */
// When the user scrolls down 300px from the top of the window, start the animation of te skillbar and block div
	$(window).scroll(function(){
		if ($(window).scrollTop() > 300) {
			$('.skillbar').each(function(){
				$(this).find('.skillbar-bar').animate({
					width:$(this).attr('data-percent')
				},3000);
			});
			$('#block-e1').fadeTo(1000, 1);
			$('#block1').fadeTo(1200, 1, function() {
				$('#block-e2').fadeTo(1000, 1);
				$('#block2').fadeTo(1100, 1, function() {
					$('#block3').fadeTo(1000, 1, function() {
						$('#block4').fadeTo(900, 1, function(){
							$('#block5').fadeTo(900, 1);
						});
					});
				});
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