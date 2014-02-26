$(document).ready(function() {
	var $root = $('html, body');
	$('div') {
	    $root.animate({
	        scrollTop: $( $(this).closest('.header-icons').nextAll('.header-icons') ).offset().top
	    }, 500);
	    return false;
	});
});