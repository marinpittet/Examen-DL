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

/* Animations on button click
----------------------------- */
	$(window).ready(function(){
		if ($(window).scrollTop() > 100) {
			$('.personal').fadeTo(500, 1);
		
		$('.skillbar').each(function(){
				$(this).find('.skillbar-bar').animate({
					width:$(this).attr('data-percent')
				},3000);
			});
			$('#block-e1').fadeTo(1500, 1);
			$('#block1').fadeTo(1000, 1, function() {
				$('#block2').fadeTo(1000, 1, function() {
					$('#block-e2').fadeTo(1500, 1);
					$('#block3').fadeTo(900, 1, function() {
						$('#block4').fadeTo(900, 1, function(){
							$('#block5').fadeTo(800, 1);
						});
					});
				});
			});
		}
	});

/* Fin Animations on button click
----------------------------- */

/* Skill bars and Educacion Blocks animation, also change the color of the navbar depending to the scrollTop 
----------------------------- */
// When the user scrolls down 150px from the top of the window, start the animation of te skillbar and block div
	$(window).scroll(function(){
		if ($(window).scrollTop() > 150 && $(window).scrollTop() < 250) {
			$('.skillbar').each(function(){
				$(this).find('.skillbar-bar').animate({
					width:$(this).attr('data-percent')
				},3000);
			});
			$('#block-e1').fadeTo(1500, 1);
			$('#block1').fadeTo(1000, 1, function() {
				$('#block2').fadeTo(1000, 1, function() {
					$('#block-e2').fadeTo(1500, 1);
					$('#block3').fadeTo(900, 1, function() {
						$('#block4').fadeTo(900, 1, function(){
							$('#block5').fadeTo(800, 1);
						});
					});
				});
			});
		} else if ($(window).scrollTop() > 550) {
			$('#navbar').css({
				background: 'linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.8))'
			});

			$('.skillbar').each(function(){
				$(this).find('.skillbar-bar').animate({
					width:$(this).attr('data-percent')
				},3000);
			});
			$('#block-e1').fadeTo(1500, 1);
			$('#block1').fadeTo(1000, 1, function() {
				$('#block2').fadeTo(1000, 1, function() {
					$('#block-e2').fadeTo(1500, 1);
					$('#block3').fadeTo(900, 1, function() {
						$('#block4').fadeTo(900, 1, function(){
							$('#block5').fadeTo(800, 1);
						});
					});
				});
			});

		} else {
			$('#navbar').css({
				background: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(255,255,255,0.05))'
			});

			$('.skillbar').each(function(){
				$(this).find('.skillbar-bar').animate({
					width:$(this).attr('data-percent')
				},3000);
			});
			$('#block-e1').fadeTo(1500, 1);
			$('#block1').fadeTo(1000, 1, function() {
				$('#block2').fadeTo(1000, 1, function() {
					$('#block-e2').fadeTo(1500, 1);
					$('#block3').fadeTo(900, 1, function() {
						$('#block4').fadeTo(900, 1, function(){
							$('#block5').fadeTo(800, 1);
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