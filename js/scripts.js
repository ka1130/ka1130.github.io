(function() {
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

        // //Sticky
        // var stickyNav = $("#nav-sticky").parent();

        // function setHideTime() {
        //     setTimeout(stickyNav.fadeOut(), 1500)
        // }


        // function hideStickyNav() {
        //     $(window).on("resize", function(event) {
        //         if ($(window).width() < 768) {
        //             stickyNav.hide();
        //         }
        //     });
        // }

        // hideStickyNav();

        // stickyNav.css({
        //     "left": ($(window).width() / 2) - (stickyNav.width() / 2),
        // });


        // $(window).on("scroll", function(event) {
        //     if ($(window).scrollTop() > 100) {
        //         stickyNav.css({
        //             "display": "block"
        //         });
        //     } else {
        //         stickyNav.fadeOut(500);
        //     }

        // });


        // $(document).on("mousemove", function(event) {
        //     var verticalOffset = event.pageY;
        //     var topPagePosition = $("#front").offset().top;
        //     var viewPortOffsetTop = topPagePosition - $(document).scrollTop();
        //     var actualYPosition = verticalOffset + viewPortOffsetTop;

        //     if ((actualYPosition) <= 20 && !stickyNav.is(":visible")) {
        //         stickyNav.fadeIn(500);
        //     }

        // });


        //Download CV button

        var resumeBtn = $(".download-cv-block");
        var resumeLink = resumeBtn.find("a");

        resumeBtn.hover(function(event) {
            resumeBtn.animate({
                backgroundColor: "#fff",
                border: "4px solid #f27768",
            }, 500);

        });

        //Resume circles

        var resumeCircle = $(".cv-block-header");
        resumeCircle.addClass("on");


        //Progress bars

        $(window).on("scroll", function() {
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

        function getPreviousImage(event) {
            imageNumber--;

            imgModal.show(500)
                .attr("src", $(".gallery")
                    .find(".gallery-image[data-id='" + imageNumber + "']")
                    .find("img").attr("src").replace("small", "big"));
        }

        function getNextImage(event) {
            imageNumber++;
            imgModal.attr("src", $(".gallery")
                .find(".gallery-image[data-id='" + imageNumber + "']")
                .find("img").attr("src").replace("small", "big"));
        }

        prevBtn.on("click", getPreviousImage);

        nextBtn.on("click", getNextImage);

        $(window).on("keyup", function(event) {
            var key = event.which;
            if (key == 13 || key == 39) { // the enter key code or right arrow
                getNextImage();
                return false;
            } else if (key == 37) { // left arrow
                getPreviousImage();
                return false;
            }
        });

        //Gallery Filtering

        var filterBtn = $(".filter");
        var selectedClass = "";
        var gallery = $(".gallery");
        var galleryImg = $(".gallery-image");


        filterBtn.on("click", function(event) {
            selectedClass = $(this).attr("data-filter");
            gallery.fadeTo(100, 0.1);
            galleryImg.not("." + selectedClass).fadeOut().removeClass("scale-animation");
            setTimeout(function() {
                $("." + selectedClass).fadeIn().addClass("scale-animation");
                gallery.fadeTo(300, 1);
            }, 300);

        });

        //Typewriting Animation

        function typeString($target, str, cursor, delay) {
            $target.html(function(_, html) {
                return html + str[cursor];
            });

            if (cursor < str.length - 1) {
                setTimeout(function() {
                    typeString($target, str, cursor + 1, delay);
                }, delay);
            }
        }


        // jQuery hook
        $.fn.extend({
            teletype: function(opts) {
                var settings = $.extend({}, $.teletype.defaults, opts);

                return $(this).each(function() {
                    (function loop($tar, idx) {
                        // type
                        typeString($tar, settings.text[idx], 0, settings.delay);

                    }($(this), 0));
                });
            }
        });

        // plugin defaults
        $.extend({
            teletype: {
                defaults: {
                    delay: 100,
                    pause: 5000,
                    text: []
                }
            }
        });

        var textHello = $("#hello").find("h2");
        var textResume = $("#resume").find("h2");
        var textPortfolio = $("#work").find("h2");
        var textContact = $("#contact").find("h2");

        textHello.hide();
        textResume.hide();
        textPortfolio.hide();
        textContact.hide();

        function teletypeText(element, str) {
            element.empty();
            element.teletype({
                text: [str]
            });
        }

        var hello = new Waypoint({
            element: document.getElementById("hello"),
            handler: function() {
                textHello.show();
                teletypeText(textHello, "Hello_")
            }
        });

        var resume = new Waypoint({
            element: document.getElementById("resume"),
            handler: function() {
                textResume.show();
                teletypeText(textResume, "Resume_")
            }
        });

        var portfolio = new Waypoint({
            element: document.getElementById("work"),
            handler: function() {
                textPortfolio.show();
                teletypeText(textPortfolio, "Portfolio_")
            }
        });

        var contact = new Waypoint({
            element: document.getElementById("contact"),
            handler: function() {
                textContact.show();
                teletypeText(textContact, "Kontakt_")
            }
        });


        //Back to Top

        if ($('#back-to-top').length) {
            var scrollTrigger = 100,
                backToTop = function() {
                    var scrollTop = $(window).scrollTop();
                    if (scrollTop > scrollTrigger) {
                        $("#back-to-top").show();
                    } else {
                        $("#back-to-top").hide();
                    }
                };
            backToTop();

            $(window).on("scroll", function() {
                backToTop();
            });

            $('#back-to-top').on("click", function(event) {
                event.preventDefault();
                $("html, body").animate({
                    scrollTop: 0
                }, 700);
            });
        }

    });

})();