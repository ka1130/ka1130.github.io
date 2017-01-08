$(document).ready(function() {

//#hamburger
	
	var hamburger = $("#hamburger");
	var mainNav = $("#main-nav");

	hamburger.on("click", function(event) {

		mainNav.addClass("menu-responsive");

	});


});