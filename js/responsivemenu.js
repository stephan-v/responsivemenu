$(document).ready(function() {
	$('.button-open').click(function() {
		$('.navigational-menu').slideToggle();
		$(this).toggleClass('button-close');
	});
});


// Specify the mobile breakpoint here!

$(window).resize(function() {
	var viewportWidth = $(window).width();
	if(viewportWidth > 1100) {
		$('.navigational-menu').show();
	}
});