$(document).ready(function() {

//#hamburger
	
	var hamburger = $("#hamburger i");
	var mainNav = $("#main-nav");

	hamburger.on("click", function(event) {

		mainNav.toggleClass("menu-responsive");
		hamburger.toggleClass("fa-bars").toggleClass("fa-times");

	});


});