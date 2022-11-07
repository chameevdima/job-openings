$(document).ready(function () {
	$('.accordion-title').click(function (event) {
		$(this).toggleClass('active').next().slideToggle(300);
	})
});