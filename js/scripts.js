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

    homeBtn.hover(function(event){
        $(this).attr("src", "img/home-hover.svg");
    }, function(event){
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
                $(this).animate({ width: $(this).data("percent") }, 1500);
            });

        }
    });

    //Gallery
    var modalContainer = $(".modal-container");
    var imgModal = $(".gallery-image-modal img");
    var imgToClick = $(".gallery-image");
    var imgBigSrc = imgToClick.find("img").attr("src");
    var closeBtn = $(".close-img");
    var prevBtn = $(".prev-img");
    var nextBtn = $(".next-img");


    imgModal.hide();
    modalContainer.hide();


    imgToClick.on("click", function(event) {

        imgModal.show();
        modalContainer.css({"display": "flex"});

        imgModal.attr("src", $(this).find("img").attr("src"));

    });

    closeBtn.on("click", function(event) {

        imgModal.hide();
        modalContainer.hide();

    });

    prevBtn.on("click", function(event) {

        var thisSrc = $(this).parent().find("img").attr("src");
        var srcArray = $(".gallery-image img"); //to nie jest tablica, tablicę trzeba znaleźć inaczej
        var srcFound;
        var srcPrev;
         console.log(srcArray);

        for (var i = 0; i < srcArray.length; i++) {
           
            if (thisSrc === srcArray[i]) {
                console.log("found");
                srcFound = thisSrc;
                srcPrev = srcArray[i - 1];
                imgModal.attr("src", srcPrev);
            } else {
                console.log(thisSrc);
            }
        }


    });

    nextBtn.on("click", function(event) {

        console.log("ok2");
    });





});
