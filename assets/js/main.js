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
        anchors: ['recentwork', 'getintouch','mob-recentwork', 'mob-getintouch'],
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

