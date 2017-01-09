$(document).ready(function() {

    //Responsive Menu

    var mobileViewport = window.matchMedia("screen and (max-width: 480px)");

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


    if (mobileViewport.matches) {
        menuElements.on("click", function(event) {
            mainNav.removeClass("menu-responsive");
            hamburger.addClass("fa-bars").removeClass("fa-times");
            menuList.removeClass("menu-responsive-list");
            menuElements.hide();
        });
    }

    //Download CV button

    var resumeBtn = $(".download-cv-block");
    var resumeLink = resumeBtn.find("a");

    console.log(resumeBtn);

    // resumeBtn.hover(function(event) {
    //     resumeBtn.css({
    //         "backgroundColor": "white",
    //         "border": "4px solid #f27768",
    //     });
    //     resumeLink.css({"color": "#f27768"});
    // }, function(event) {
    //      resumeBtn.css({
    //         "backgroundColor": "",
    //         "border": "",
    //     });
    //     resumeLink.css({"color": ""});
    // });

    resumeBtn.hover(function(event) {
        console.log("ok");
        resumeBtn.animate({
            backgroundColor: "#fff",
            border: "4px solid #f27768",
        }, 500);


    });









});
