$(document).ready(function() {

	var scroll_left = 0;

	var width = $(window).width();
	var height = $(window).height();
	var $slides = $('.slides li');
	$slides.css('width',  (width - 80 - 100)+'px');
	$slides.css('height', (height - 80 - 100)+'px');

	$slides.each(function(index, slide) {
		$(slide).css('left', index*width+'px')
	});

	$('.prev').click(function() {
		scroll_left = scroll_left - width;
		$('body').animate({
			scrollLeft: scroll_left
		}, 800);
	});
	$('.next').click(function() {
		scroll_left = scroll_left + width;
		$('body').animate({
			scrollLeft: scroll_left
		}, 800);
	})
});