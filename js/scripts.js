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
        menuElements.toggle().addClass("menu-responsive-element");

    });


    if (mobileViewport.matches) {
        menuElements.on("click", function(event) {
            mainNav.removeClass("menu-responsive");
            hamburger.addClass("fa-bars").removeClass("fa-times");
            menuList.removeClass("menu-responsive-list");
            menuElements.hide();
        });
    }

    //Home hover

    var homeBtn = $("#front li.home").find("a").find("img");

    homeBtn.hover(function(event) {
        $(this).attr("src", "img/home-hover.svg");
    }, function(event) {
        $(this).attr("src", "img/home.svg");
    });

    //Download CV button

    var resumeBtn = $(".download-cv-block");
    var resumeLink = resumeBtn.find("a");

    resumeBtn.hover(function(event) {
        console.log("ok");
        resumeBtn.animate({
            backgroundColor: "#fff",
            border: "4px solid #f27768",
        }, 500);

    });

    //Resume circles 

    var resumeCircle = $(".cv-block-header");
    resumeCircle.addClass("on");


    //Progress bars

    $(window).on('scroll', function() {
        var innerBar = $(".inner-bar");
        var yScroll = window.pageYOffset;
        var position = $("#resume").offset().top;

        if (yScroll > position - 10) {

            $.each(innerBar, function(index, value) {
                $(this).animate({
                    width: $(this).data("percent")
                }, 1500);
            });

        }
    });

    //Gallery
    var modalContainer = $(".modal-container");
    var imgModal = $(".gallery-image-modal img");
    var imgToClick = $(".gallery .gallery-image");
    var imgArray = $(".gallery-image img").attr("src");
    var closeBtn = $(".close-img");
    var prevBtn = $(".prev-img");
    var nextBtn = $(".next-img");
    var imgClicked;
    var imageNumber;


    imgModal.hide();
    modalContainer.hide();


    imgToClick.on("click", function(event) {

        imgModal.show();
        modalContainer.css({
            "display": "flex"
        });

        imgModal.attr("src", $(this).find("img").attr("src").replace("small", "big"));

        imgClicked = $(this).find("img");
        imageNumber = imgClicked.parent().data("id");

    });


    closeBtn.on("click", function(event) {

        imgModal.hide();
        modalContainer.hide();

    });


    prevBtn.on("click", function(event) {

//        $(".gallery-image-modal").addClass("gallery-image-slider").animate({"opacity": 0.5}, "slow");

        imageNumber--;

        imgModal.show(500)
                .attr("src", $(".gallery")
                .find(".gallery-image[data-id='" + imageNumber + "']")
                .find("img").attr("src").replace("small", "big"));

    });


    nextBtn.on("click", function(event) {

        imageNumber++;
        imgModal.attr("src", $(".gallery")
                .find(".gallery-image[data-id='" + imageNumber + "']")
                .find("img").attr("src").replace("small", "big"));

    });



});