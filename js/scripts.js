$(document).ready(function() {

//#hamburger
	
	var hamburger = $("#hamburger i");
	var mainNav = $("#main-nav");
	var menuList = mainNav.find("ul");
	var menuElements = mainNav.find("li");


	hamburger.on("click", function(event) {

		mainNav.toggleClass("menu-responsive");
		hamburger.toggleClass("fa-bars").toggleClass("fa-times");
		menuList.toggleClass("menu-responsive-list");
		menuElements.show().addClass("menu-responsive-element");

	});

	menuElements.on("click", function(event){
		mainNav.removeClass("menu-responsive");
		hamburger.addClass("fa-bars").removeClass("fa-times");
		menuList.removeClass("menu-responsive-list");
		menuElements.hide();
	});


});