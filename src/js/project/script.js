let timer;

$(window).on('scroll', function () {
	$('nav').addClass('show-navbar');
	try {
		clearTimeout(timer);
	} catch (e) {}
	timer = setTimeout(function () {
		$('nav').removeClass('show-navbar');
	}, 1500);
});
