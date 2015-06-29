// RESPONSIVE MENU

/* 
 * on click of the responsive menu button, this will add a .button-close class to
 * change the state of the button and make it look like a closing button.
 */

$(document).ready(function() {
	$('.button-open').click(function() {
		$('.navigational-menu').slideToggle();
		$(this).toggleClass('button-close');
	});
});


/*
 * Specify the mobile breakpoint here. This will make sure the default navigational menu
 * will appear again, once the responsive menu has been closed.
 */

$(window).resize(function() {
	var viewportWidth = $(window).width();
	if(viewportWidth > 1100) {
		$('.navigational-menu').show();
	}
});