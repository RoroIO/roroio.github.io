// Wait for window load
$(window).on('load', function() {
    // Animate loader off screen
    setTimeout(function() {
        $(".loading-animation").fadeOut();
    }, 5300);
});
// end

function mobileMenu() {
    var checkWidth = $(window).width();
    if (checkWidth > 768) {
        // Mobile Menu Toggle
        $('#menu').on('click', '.mobile-menu', function() {
            $(this).toggle();
            $(this).parent().addClass('active-menu');
            // $(this).siblings('nav').toggle();
        });
    } else if (checkWidth < 769) {
        // Mobile Menu Toggle
        $('#menu').on('click', '.mobile-menu', function() {
            // $(this).toggle();
            $(this).fadeOut().siblings('nav').show().find('ul').show().addClass('show');
            $(this).siblings('.closeBtn').fadeIn('slow');
        });
        $('#menu').on('click', '.closeBtn', function() {
            // $(this).toggle();
            $(this).fadeOut().siblings('nav').delay(300).fadeOut().find('ul').delay(200).fadeOut().removeClass('show');
            $(this).siblings('.mobile-menu').fadeIn('slow');
        });
        $('#menu nav ul li').on('click', 'a', function() {
            console.log('ul clicked');
            $(this).parents('ul').removeClass('show').parents('nav').hide();
            $(this).parents('#menu').find('.mobile-menu').fadeIn('slow');
            $(this).parents('#menu').find('.closeBtn').hide();
        });
    }
}
$(document).ready(mobileMenu);
$(window).resize(mobileMenu);

$(document).ready(function() {
    // if( /iPhone/i.test(navigator.userAgent) ) {
    //  // alert("iphone Rule");
    //  $(".landscape-mode").removeClass('android').addClass("iphone");
    // } else if( /android/i.test(navigator.userAgent) ) {
    // 	// alert("Android Rule");
    //  $(".landscape-mode").addClass('android').removeClass("iphone");
    // }

    var isAndroid = navigator.userAgent.toLowerCase().indexOf("android");
    if (isAndroid > -1) {
        //It is an Android device. Redirect to Android Version.
        $(".landscape-mode").addClass('android').removeClass("iphone");
    } else {
        $(".landscape-mode").removeClass('android').addClass("iphone");
    }


    // var SCROLLING_SPEED = 700;
    // Fullpage config
    $('#fullpage').fullpage({
        // scrollingSpeed: SCROLLING_SPEED,
        scrollBar: false,
        fixedElements: '.modal',
        responsiveSlides: false,
        // responsiveHeight: 900,
        // autoScrolling:false,
        menu: '.menu',
        verticalCentered: false,
        lockAnchors: false,
        slidesNavigation: false,
        anchors: ['landing', 'whatWeDo', 'portfolio', 'planing', 'design', 'development', 'maintain', 'team', 'contact'],  

        onLeave: function(index, nextIndex, direction) {
            var checkWidth = $(window).width();
            // nav show
            if (checkWidth > 768) {
                if (index == 1 && direction === "down") {
                    $('#menu').addClass('active-menu');
                    $('#menu nav').fadeIn();
                    $('#menu .mobile-menu').fadeOut();
                } else if (index == 2 && direction === "up") {
                    $('#menu').removeClass('active-menu');
                    // $('#menu nav').hide();
                    $('#menu .mobile-menu').fadeIn(1000);
                }
            }
            if (checkWidth < 769) {
                if (index == 1 && direction === "down") {
                    $('#menu').addClass('menu-shadow');
                } else if (index == 2 && direction === "up") {
                    $('#menu').removeClass('menu-shadow');
                }

                if (index == 2 && direction === "up") {
                    $('#menu .mobi-page-title').empty();
                }
            }
            // nav end
            if ((index == 4 && direction === "down") || (index == 7 && direction === "up")) {
                $('.vertical-tabs.menu').addClass("fixed");

            }

            if ((index == 7 && direction === "down") || (index == 4 && direction === "up")) {
                $('.vertical-tabs.menu').removeClass("fixed");
//                $('header nav ul li[data-menuanchor="planing"]').removeClass('active-state');
            }


            if (checkWidth > 800) {
                if (direction === "down") {
                    $('.vertical-tabs .vertical-tab').removeClass('up');
                    $('.vertical-tabs .vertical-tab').addClass('down');
                } else if (direction === "up") {
                    $('.vertical-tabs .vertical-tab').removeClass('down');
                    $('.vertical-tabs .vertical-tab').addClass('up');
                }
            }

            if (checkWidth < 801) {
                if ((index == 6 && direction === "down") || (index == 7 && direction === "up")) {
                    $('#vTab4').addClass('mobi-hide');
                }
                if (index == 8 && direction === "up") {
                    $('#vTab4').removeClass('mobi-hide');
                    $('#menu .mobi-page-title').animate({
                        'opacity': 0
                    }, 200, function() {
                        $(this).html('<span>Process</span>');
                    }).animate({
                        'opacity': 1
                    }, 200);
                }


                if (index == 3 && direction === "down") {

                    $('#menu .mobi-page-title').animate({
                        'opacity': 0
                    }, 200, function() {
                        $(this).html('<span>Process</span>');
                    }).animate({
                        'opacity': 1
                    }, 200);
                }
            }

        },

        afterLoad: function(anchorLink, index) {
            var checkWidth = $(window).width();
            var col = $('.process .vertical-tab-content .pr-tab-content .process-steps .pr-step .col');
            var colMobi = $('.process .vertical-tab-content .pr-tab-content .process-steps .pr-step .col-mobi');
            var colIcon = $('.process .vertical-tab-content .pr-tab-content .process-desc.mobi .wrap .pr-desc-blk');
            if (checkWidth > 768) {
                if (index == 1) {
                    $('#menu').removeClass('active-menu');
                    // $('#menu nav').hide();
                    $('#menu .mobile-menu').fadeIn(1000);
                } else {
                    $('#menu').addClass('active-menu');
                    $('#menu nav').fadeIn();
                    $('#menu .mobile-menu').fadeOut();
                }
            }

            // On page Load add title
            $('#menu nav ul li').each(function() {
                var activeTitle = $(this).find('a').text();
                var appendTitle = "<span>" + activeTitle + "</span>";
                var notPlaningAnchor = $('#menu nav ul li[data-menuanchor="planing"]');

                if ($(this).not(notPlaningAnchor).hasClass('active')) {
                    $('#menu .mobi-page-title').animate({
                        'opacity': 0
                    }, 200, function() {
                        $(this).html(appendTitle);
                    }).animate({
                        'opacity': 1
                    }, 200);
                }
                if ($(notPlaningAnchor).hasClass('active')) {
                    $('#menu .mobi-page-title').html('<span>Process</span>').css({
                        'opacity': 1
                    });
                }
            });

            if (index == 1) {
                $('#menu .mobi-page-title').empty();
                $('#menu').removeClass('menu-shadow');
            }

            if (index == 4) {
                $('#tab1').addClass('open');
                $('header nav ul li[data-menuanchor="planing"]').addClass('active-state');
                $('.vertical-tabs.menu').addClass("fixed");
                $('#menu .mobi-page-title').css({
                    'opacity': 0
                }, function() {
                    $(this).html("<span>Process</span>");
                }).css({
                    'opacity': 1
                });
                col.addClass('visible');
                colMobi.removeClass('visible');
                colIcon.removeClass('changeImage');
            } else if (index == 5) {
                $('#tab2').addClass('open');
                $('.vertical-tabs.menu').addClass("fixed");
                $('#menu .mobi-page-title').css({
                    'opacity': 0
                }, function() {
                    $(this).html("<span>Process</span>");
                }).css({
                    'opacity': 1
                });
                col.addClass('visible');
                colMobi.removeClass('visible');
                colIcon.removeClass('changeImage');
            } else if (index == 6) {
                $('#tab3').addClass('open');
                $('.vertical-tabs.menu').addClass("fixed");
                $('#menu .mobi-page-title').css({
                    'opacity': 0
                }, function() {
                    $(this).html("<span>Process</span>");
                }).css({
                    'opacity': 1
                });
                col.addClass('visible');
                colMobi.removeClass('visible');
                colIcon.removeClass('changeImage');
            } else if (index == 7) {
                $('#tab4').addClass('open');
                $('header nav ul li[data-menuanchor="planing"]').addClass('active-state');
                $('.vertical-tabs.menu').addClass("fixed");
                $('#menu .mobi-page-title').css({
                    'opacity': 0
                }, function() {
                    $(this).html("<span>Process</span>");
                }).css({
                    'opacity': 1
                });
                col.addClass('visible');
                colMobi.removeClass('visible');
                colIcon.removeClass('changeImage');
            } else {
                $('.vertical-tabs.menu').removeClass("fixed");
                $('header nav ul li[data-menuanchor="planing"]').removeClass('active-state');
            }

            // tap to expand discription process step
            if (checkWidth < 801) {
                $('.vertical-tab-content.open .pr-step').on('click', '.col', function() {
                    $(this).next('.col-mobi').addClass('visible');
                    $(this).parent().find('.col').removeClass('visible');

                    var index = $(".vertical-tab-content.open .pr-step").index($(this).parent());
                    $('.vertical-tab-content.open .process-desc.mobi .pr-desc-blk').eq(index).addClass('changeImage');
                });
                $('.vertical-tab-content.open .pr-step').on('click', '.col-mobi', function() {
                    $(this).removeClass('visible');
                    $(this).parent().find('.col').addClass('visible');
                    var index = $(".vertical-tab-content.open .pr-step").index($(this).parent());
                    $('.vertical-tab-content.open .process-desc.mobi .pr-desc-blk').eq(index).removeClass('changeImage');
                });
            }
        }
    });

    $('#enquiry').on('focus', function(e) {
        $.fn.fullpage.setAllowScrolling(false);
    })
    $('#enquiry').on('blur', function(e) {
        $.fn.fullpage.setAllowScrolling(true);
    })

    // append svg to slides arrow
    var arrowIcon = '<svg class="icon icon-icon_development"><use xlink:href="images/icons/icons.svg#icon-right_arrow"></use></svg>';

    $(".portfolio .fp-controlArrow.fp-prev, .portfolio .fp-controlArrow.fp-next").append(arrowIcon);
    // end

    $(".landing .down-arrow").on("click", function() {
        $.fn.fullpage.moveTo(2);
    });
    $("#logo a").on("click", function() {
        $('.vertical-tabs').removeClass('fixed');
        $.fn.fullpage.moveTo(1);
    });


    $('#menu nav ul li').on('click', function() {
        $('.vertical-tabs').removeClass('fixed');
    });

    $('textarea').each(function() {
        $(this).height($(this).prop('scrollHeight'));
    });

    // truncate text and add ellipsis
    if ($(window).width() < 769) {
        $(".what-we-do .content .grid .col .text-box .para").dotdotdot({
            ellipsis: '... ',
            // height: 50,
            // tolerance	: 20,
            watch: "window"
        });
    }
    // end

    // owl carousel initialization
    $("#portfolioSlider").owlCarousel({
        // animateOut: 'fadeOut',
        animateIn: 'fadeOut',
        autoWidth: false,
        touchDrag: false,
        mouseDrag: false,
        center: true,
        items: 1,
        singleItem: true,
        // smartSpeed:450,
        nav: true,
        navText: ['<svg class="icon icon-icon_development"><use xlink:href="images/icons/icons.svg#icon-right_arrow"></use></svg>', '<svg class="icon icon-icon_development"><use xlink:href="images/icons/icons.svg#icon-right_arrow"></use></svg>'],
        dots: true,
    });

    // Mobile portfolio slider initialise
    $('.mobile-slider').owlCarousel({
        autoWidth: false,
        center: true,
        items: 1,
        dots: false,
    });

    $('.p-slide .mobile-slider .owl-item').on('click', function() {
        $('.p-slide .p-description').addClass('collaps');
        $(".mobile-slider .item").addClass('image-change');
        // $(this).parents(".mobile-slider").find(".item").addClass('image-change');
    });
    $('.p-slide .p-description').on('click', function() {
        $('.p-slide .p-description').removeClass('collaps');
        $(".mobile-slider .item").removeClass('image-change');
        // $(this).parents(".mobile-slider").find(".item").addClass('image-change');
    });
    // end

    // Modal script
    var modalHeight = {};
    $('.modal').each(function(i, elm) {
        // console.log(elm);
        var modalId = $(this).attr('id');
        modalHeight = $(elm).height();
        $(elm).attr("data-height", modalHeight);
        // console.log("Modal height : " + modalHeight);
    });


    var buttonId,
        finalTop,
        colTop,
        colLeft,
        finalLeft,
        windowWidth, initialHeight, initialWidth, $trigger;

    // $('.modal-fade-screen').fadeOut();
    $('.modal-trigger').click(function(e) {
        $trigger = $(e.target); //Modal Trigger
        buttonId = $(this).attr('data-modal'); //Modal Id
        finalTop = $(e.target).parents('.grid').offset().top; //Grid Top
        finalLeft = $(e.target).parents('.grid').offset().left; //Grid Left
        colTop = $(e.target).parents('.col').offset().top; //Target column Top
        colLeft = $(e.target).parents('.col').offset().left; //Target column Left
        windowWidth = $(window).width(); //Window width
        initialWidth = $(e.target).parents('.col').width(); //Target column width
        initialHeight = $(e.target).parents('.col').height(); //Target column height


        var windowHeight = $(window).height();
        var modalDataHeight = $('#' + buttonId).attr("data-height");
        console.log(modalDataHeight);
        var modalTop = (windowHeight - modalDataHeight) / 2; //To center modat top
        // console.log("Modal top :-" +modalTop);

        $('.modal .modal-inner > div').hide();
//
//        // hiding the items of box
//        $(this).find('div').animate({
//            opacity: "0"
//        }, 100);
//        $('#' + buttonId).delay(400).fadeIn(300);
//        $('.modal-inner > div').delay(500).fadeOut(1000);

        if (windowWidth > 768) {
//            // fading in the overall bg
//            $('.modal-fade-screen').delay(200).fadeIn(600);
//            // Initial State
//            $('#' + buttonId).css({
//                "width": initialWidth,
//                "height": initialHeight,
//                "top": finalTop,
//                "left": colLeft,
//            }).find('.modal-inner').css({
//                width: "100%",
//                height: "100%",
//                transition: "background-color 0.85s ease",
//                boxShadow: "0 9px 9px 4px rgba(0, 0, 0, 0)",
//            });
//            // end
//            // expand modal here
//            $('#' + buttonId).fadeIn(200).delay(100).animate({
//                width: "90%",
//                height: modalDataHeight,
//                top: modalTop,
//                // top: '140px',
//                left: "5%",
//                bottom: "0",
//                right: "0",
//            }, 300).find('.modal-inner').css({
//                width: "100%",
//                height: "100%",
//                opacity: "1",
//                boxShadow: "0 9px 9px 4px rgba(0, 0, 0, 0.09)",
//            }).delay(700).queue(function() {
//                $(this).css({
//                    backgroundColor: "#fff"
//                });
//                $(this).dequeue();
//            }).find('div').delay(700).fadeIn(700);
            // end
        } else if (windowWidth < 769) { //mobile layout
            
            // hiding the items of box
            $(this).find('div').animate({
                opacity: "0"
            }, 100);
            $('#' + buttonId).delay(400).fadeIn(300);
            $('.modal-inner > div').delay(500).fadeOut(1000);
            
            $('.modal-fade-screen').delay(400).fadeIn(400);
            // Initial state
            $('#' + buttonId).css({
                "width": initialWidth,
                "height": initialHeight,
                "top": colTop,
                "left": colLeft,
            }).find('.modal-inner').css({
                width: "100%",
                height: "100%",
                boxShadow: "0 9px 9px 4px rgba(0, 0, 0, 0)",
            });
            // end

            // Modal Expand here
            $('#' + buttonId).fadeIn(400).delay(100).animate({
                width: "90%",
                height: modalDataHeight,
                top: modalTop,
                left: "5%",
                right: "5%",
            }, 500).find('.modal-inner').css({
                width: "100%",
                height: "100%",
                opacity: "1",
                boxShadow: "0 9px 9px 4px rgba(0, 0, 0, 0.09)",
            }).delay(700).queue(function() {
                $(this).css({
                    backgroundColor: "#fff"
                });
                $(this).dequeue();
            }).find('div').delay(1000).fadeIn(700);
            // end
        }
    });

    $(".modal-close").on("click", function(e) {

        if (windowWidth > 768) {
//            $('#' + buttonId).find('.modal-inner > div').fadeOut(300);
//            $('#' + buttonId).delay(400).animate({
//                "width": initialWidth,
//                "height": initialHeight,
//                "top": finalTop,
//                "left": colLeft,
//            }, 200).fadeOut();
//            $('#' + buttonId).find('.modal-inner').css({
//                transition: "background-color 0.85s ease",
//                boxShadow: "0 9px 9px 4px rgba(0, 0, 0, 0)",
//            }).delay(200).queue(function() {
//                $(this).css({
//                    backgroundColor: "#f8f8f8"
//                });
//                $(this).dequeue();
//            });
//            $('.modal-trigger').find('div').delay(1200).animate({
//                opacity: "1"
//            });
        } else if (windowWidth < 769) {
            $('#' + buttonId).find('.modal-inner > div').fadeOut();
            $('#' + buttonId).delay(700).animate({
                "width": initialWidth,
                "height": initialHeight,
                "top": colTop,
                "left": colLeft,
            }, 200).fadeOut();
            $('#' + buttonId).find('.modal-inner').css({
                transition: "background-color 0.85s ease",
                boxShadow: "0 9px 9px 4px rgba(0, 0, 0, 0)",
            }).delay(200).queue(function() {
                $(this).css({
                    backgroundColor: "#f8f8f8"
                });
                $(this).dequeue();
            });

            $('.modal-trigger').find('div').delay(1400).animate({
                opacity: "1"
            });
        }

        $('.modal-fade-screen').delay(600).fadeOut();
        // $trigger.fadeIn(1000);

    });

    // Form validation
    var testEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    var nameValid, emailValid;

    var name = $('#name');
    var email = $('#email');
    var enquiry = $('#enquiry');

    function validateName() {
        if (name.val()) {
            name.addClass('valid').removeClass('invalid');
            name.siblings('.error').fadeOut();
            nameValid = true;
        } else {
            name.removeClass('valid').addClass('invalid');
            name.siblings('.error').fadeIn();
            nameValid = false;
        }
    }

    function validateEmail() {
        if (testEmail.test(email.val())) {
            email.addClass('valid').removeClass('invalid');
            email.siblings('.error').fadeOut();
            emailValid = true;
        } else {
            email.removeClass('valid').addClass('invalid');
            email.siblings('.error').fadeIn();
            emailValid = false;
        }
    }

    function validateEnquiry() {
        if (enquiry.val()) {
            enquiry.addClass('valid').removeClass('invalid');
            enquiry.siblings('.error').fadeOut();
            enquiryValid = true;
        } else {
            enquiry.removeClass('valid').addClass('invalid');
            enquiry.siblings('.error').fadeIn();
            enquiryValid = false;
        }
    }

    $('form input, form textarea').on('change', function() {
        if ($(this).val()) {
            $(this).addClass('valid').removeClass('invalid');
            $(this).siblings('.error').fadeOut();
        } else {
            $(this).removeClass('valid').addClass('invalid');
            $(this).siblings('.error').fadeOut();
        }
    })


    // post call on submit
    $('#submitBtn').on('click', function(e) {
        validateName();
        validateEmail();
        validateEnquiry();
        if (!nameValid || !emailValid || !enquiryValid) {
            e.preventDefault();
            return;
        } else {
            $('#submitBtn').find('.showbox').show();
        }
        var name = $('#name').val();
        var email = $('#email').val();
        var enquiry = $('#enquiry').val();
        var data = {
            "name": name,
            "email": email,
            "detail": enquiry,
            "device_type": "desktop"
        }

        $.ajax({
            url: 'https://calm-brushlands-97331.herokuapp.com/enquiries/',
            headers: {
                'X-Auth-Token': '7C5D43459BDE2193B00AEFB68F28BE753440A436D6C0F7186871838E64DC7F49',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            data: JSON.stringify(data),
            success: function(data) {
                console.log('succes: ' + data.name);
                $('#submitBtn').find('.showbox').hide();
                $('.success-message').fadeIn(300).delay(2000).fadeOut(500);
                $('#mainForm').find('input').removeClass('valid').val(" ");
            }
        });
    });
});