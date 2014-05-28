$(document).ready(function() {
	var width = $(window).width();
	var height = $(window).height();
	var $slides = $('.slides li');
	$slides.css('width',  (width - 80 - 100)+'px');
	$slides.css('height', (height - 80 - 100)+'px');

	$slides.each(function(index, slide) {
		$(slide).css('left', index*width+'px')
	});
});