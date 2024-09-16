import Swup from 'https://unpkg.com/swup@4?module';
import SwupScriptsPlugin from 'https://unpkg.com/@swup/scripts-plugin@2?module';

const swup = new Swup({
    containers: ["#swup"],
    plugins: [
        new SwupScriptsPlugin({
            head: true,
            body: true
        })
    ]
});

// Function to handle adding/removing the active class
function setActiveLink() {
    const links = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname;

    links.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function initializeCustomJs() {
    (function ($) {
        "use strict";
        /*
       Jquery Mobile Menu
       ============================*/
        $('#main-menu').meanmenu({
            meanMenuContainer: '.mobile-nav-menu',
            meanScreenWidth: "991",
            meanExpand: ['<i class="fal fa-plus"></i>'],
        });


        /*
       Jquery Sidebar Toggle
       ============================*/
        $(".mobile-menu-toggle-btn, #offcanvas_btn").on("click", function () {
            $(".menu-sidebar-area").addClass("active");
            $(".body-overlay").addClass("active");
        });
        $(".menu-sidebar-close-btn").on("click", function () {
            $(".menu-sidebar-area").removeClass("active");
            $(".body-overlay").removeClass("active");
        });

        /*
       Jquery Body Overlay
       ============================*/
        $(".body-overlay").on("click", function () {
            $(".menu-sidebar-area").removeClass("active");
            $(".body-overlay").removeClass("active");
        });
        /*
        Stikey Js
        ============================*/
        const body = document.body;
        const html = document.documentElement;
        const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

        if (height > 1400) {
            const nav = $(".header-menu-area.sticky-header");
            let scrolled = false;
            $(window).scroll(function () {
                if (1 < $(window).scrollTop() && !scrolled) {
                    nav
                        .addClass("sticky_menu animated fadeIn")
                        .animate({ "margin-top": "0px" });
                    scrolled = true;
                }
                if (1 > $(window).scrollTop() && scrolled) {
                    nav.removeClass("sticky_menu animated fadeIn").css("margin-top", "0px");
                    scrolled = false;
                }
            });
        }

        /*
        Client Logo Slider
        ============================*/
        $(".client-logo-slider-wrapper").slick({
            slidesToShow: 6,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: false,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            rtl: false,
            responsive: [{
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 1,
                },
            },
            ],
        });


        /*
        Jquery Empty Post Content Hide
        ============================*/
        $('.blog-area .post-content p').filter(function () {
            return /\u00A0/.test($(this).text());
        }).hide();


        /*
       Slider
       ============================*/
        $(".slider-wrapper").slick({
            slidesToShow: 1,
            infinite: true,
            autoplay: false,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: true,
            speed: 1500,
            vertical: true,
            rtl: false,
            prevArrow: "<button type='button' class='prev-btn'><i class='fa-solid fa-arrow-left-long'></i></button>",
            nextArrow: "<button type='button' class='next-btn'><i class='fa-solid fa-arrow-right-long'></i></button>",

            responsive: [{
                breakpoint: 767,
                settings: {
                    autoplay: true,
                },
            },],
        });
        $(".slider-wrapper-six").slick({
            slidesToShow: 1,
            infinite: true,
            autoplay: false,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            rtl: false,
            prevArrow: "<button type='button' class='prev-btn'><i class='fa-solid fa-arrow-left'></i></button>",
            nextArrow: "<button type='button' class='next-btn'><i class='fa-solid fa-arrow-right'></i></button>",
            responsive: [{
                breakpoint: 767,
                settings: {
                    autoplay: false,
                    arrows: false,
                    dots: true,
                },
            },],
        });


        /*
       Info Card Slider
       ============================*/
        $(".info-card-slider").slick({
            slidesToShow: 4,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: true,
            prevArrow: "#info_prev_btn",
            nextArrow: "#info_next_btn",
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            variableWidth: true,
            rtl: false,
            responsive: [{
                breakpoint: 1399,
                settings: {
                    slidesToShow: 2,
                    variableWidth: false,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                },
            },
            ],
        });


        /*
        Project Card Slider
        ============================*/
        $("#project_card_slider").slick({
            slidesToShow: 3,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: false,
            slidesToScroll: 1,
            loop: true,
            dots: true,
            speed: 1500,
            rtl: false,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
            ],
        });


        /*
       Feature Slider JS
       ============================*/
        $(".feature-slider-wrapper").slick({
            slidesToShow: 3,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: false,
            slidesToScroll: 1,
            centerMode: true,
            loop: true,
            dots: true,
            speed: 1500,
            rtl: false,
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                },
            },
            ],
        });

        /*
        Post Card Slider
        ============================*/
        $(".post_card_slider").slick({
            slidesToShow: 2,
            infinite: true,
            autoplay: false,
            draggable: true,
            arrows: true,
            prevArrow: "#post_slider_prev_btn",
            nextArrow: "#post_slider_next_btn",
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            rtl: false,
            responsive: [{
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                },
            },
            ],
        });

        /*
       Post Gallery Slider
       ============================*/
        $(".post-gallery").slick({
            slidesToShow: 1,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 300,
            rtl: false,
            prevArrow: "<button type='button' class='post-gallery-btn prev-btn'><i class='fa fa-arrow-left'></i></button>",
            nextArrow: "<button type='button' class='post-gallery-btn next-btn'><i class='fa fa-arrow-right'></i></button>",
        });
        /*
       Portfolio Logo Slider
       ============================*/
        $(".portfolio-slider").slick({
            slidesToShow: 2,
            infinite: true,
            autoplay: false,
            draggable: true,
            arrows: false,
            slidesToScroll: 1,
            variableWidth: true,
            loop: true,
            dots: false,
            speed: 1500,
            rtl: false,
            responsive: [{
                breakpoint: 1400,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                    centerMode: false,
                },
            },
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                    centerMode: false,
                },
            },
            ],
        });


        // Brand Marquee Wrapper
        const swiper = new Swiper('.brand-marquee-slider', {
            loop: true,
            speed: 2000,
            slidesPerView: 6,
            autoplay: {
                delay: 0,
                pauseOnMouseEnter: false,        // stop autoplay when hovering
                disableOnInteraction: false,    // restart autoplay when hover is removed
                reverseDirection: true,         // reverse the autoplay direction
            },
            breakpoints: {
                1600: {
                    slidesPerView: 6,
                },
                1300: {
                    slidesPerView: 5,
                },
                1100: {
                    slidesPerView: 4,
                },
                767: {
                    slidesPerView: 3,
                },
                577: {
                    slidesPerView: 2,
                },
                0: {
                    slidesPerView: 1,
                },
            }
        })


        /*
        Counter Js
        ============================*/
        $(".counter").counterUp({
            delay: 10,
            time: 1000,
        });

        /*
       Magnific Popup
       ============================*/
        $(".video-play").magnificPopup({
            disableOn: 700,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
        });

        /*
        Jquery Wow Js
        ============================*/
        new WOW().init();
        // wow = new WOW(
        //     {
        //     boxClass:     'wow',      // default
        //     animateClass: 'animated', // default
        //     offset:       0,          // default
        //     mobile:       true,       // default
        //     live:         true        // default
        //   })
        //   wow.init();

        /*
       Jquery Nice Select Js
       ============================*/
        $('select.select_option, select.wpcf7-select').niceSelect();

        /*
       Jquery Tilt Js
       ============================*/
        // $('.tilt-animate').tilt({
        //     maxTilt: 12,
        //     perspective: 1500,
        // })


        // Accordion Init Height
        const accordionEl = $(".accordion-box-wrapper");
        const accordionHeight = accordionEl.innerHeight();
        accordionEl.css("height", accordionHeight);

        // Portfolio Hover
        $('.portfolio-card-main-wrapper').each(function () {
            const item = $(this).find('.portfolio-card, .icon-card-inner');
            const img = $(this).find('.tabimg');
            item.on('mouseenter', function () {
                const tab_id = $(this).attr('data-tab');
                item.removeClass('active');
                $(this).addClass('active');
                img.removeClass('active');
                $("#" + tab_id).addClass('active');
                if ($(this).hasClass('active')) {
                    return false;
                }
            });
        });

        /*
        Scroll To Top Js
        ============================*/
        $(function () {
            $("#scrollTop").hide(); // Initially hide the button
            var timer;

            $(window).on('scroll', function () {
                var scrollTop = $(window).scrollTop();
                clearTimeout(timer);

                if (scrollTop > 200) {
                    $('#scrollTop').fadeIn();

                    timer = window.setTimeout(function () {
                        $("#scrollTop").fadeOut();
                    }, 3000);
                } else {
                    $('#scrollTop').fadeOut();
                }
            });

            // Smooth scroll to top on button click
            $(".scrollup-btn").click(function () {
                $("html, body").animate({ scrollTop: 0 }, "slow");
                return false;
            });
        });


        /*
        Window Load
        ============================*/
        $(window).on("load", function () {
            /*
            Preeloader
            ============================*/
            $(".loader").delay(250).slideUp();
            $(".preloader-status").delay(0).slideUp("slow");
            $("body").delay(200).css({
                "overflow-x": "hidden"
            });
        });

    })(jQuery);
}

function closeMobileMenu() {
    $(".menu-sidebar-area").removeClass("active");
    $(".body-overlay").removeClass("active");
}

// Handler for Swup page view events
const handler = () => {
    closeMobileMenu();  // Close menu on page view
    console.log('New page loaded');
    initializeCustomJs();  // Reinitialize JS components
    setActiveLink();  // Update the active link
};

// Register the handler for Swup page views
swup.hooks.on('page:view', handler);

// You can remove the handler later if needed
// swup.hooks.off('page:view', handler);

// Initially call the function on the first page load
document.addEventListener('DOMContentLoaded', () => {
    initializeCustomJs();  // Initialize JS on first load
    setActiveLink();  // Set the active link on first load
});
