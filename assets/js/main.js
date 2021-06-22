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
        onLeave: function(index, nextIndex, direction) {
            var checkWidth = $(window).width();
            // nav show
         
          
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


});


//Scroll
  
  $(document).ready(function() {
    $('#fullpage').fullpage({
        scrollBar: false,
        fixedElements: '.modal',
        responsiveSlides: false,
        menu: '.menu',
        verticalCentered: false,
        lockAnchors: false,
        slidesNavigation: false,
        anchors: ['recentwork', 'getintouch'],
    });
});

// Form validation

$(document).ready(function() {
    
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

//Address Copy

const links = document.querySelectorAll('.copy-click');
const cls = {
  copied: 'is-copied',
  hover: 'is-hovered' };


const copyToClipboard = str => {
  const el = document.createElement('input');
  str.dataset.copyString ? el.value = str.dataset.copyString : el.value = str.text;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.opacity = 0;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

const clickInteraction = e => {
  e.preventDefault();
  copyToClipboard(e.target);
  e.target.classList.add(cls.copied);
  setTimeout(() => e.target.classList.remove(cls.copied), 1000);
  setTimeout(() => e.target.classList.remove(cls.hover), 700);
};

Array.from(links).forEach(link => {
  link.addEventListener('click', e => clickInteraction(e));
  link.addEventListener('keypress', e => {
    if (e.keyCode === 13) clickInteraction(e);
  });
  link.addEventListener('mouseover', e => e.target.classList.add(cls.hover));
  link.addEventListener('mouseleave', e => {
    if (!e.target.classList.contains(cls.copied)) {
      e.target.classList.remove(cls.hover);
    }
  });
});

