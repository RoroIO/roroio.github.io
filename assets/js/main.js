
$(document).ready(function() {
    

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

//Address Copy
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('copy', doCopy);
    document.addEventListener('paste', doPaste);
    document.querySelector('.addres_copy').addEventListener('click', autoCopy);
  });

  function autoCopy(ev) {
    let addres_copy = ev.target;
    let select = document.getSelection();
    select.removeAllRanges();
    let range = document.createRange();
    range.selectNode(addres_copy.firstChild);
    select.addRange(range);
    document.execCommand('copy');
  }

  function doCopy(ev) {
    let selection = document.getSelection();
    selection = selection.toString().toCapitalizeCase();
    console.log(selection);
    ev.clipboardData.setData('text/plain', selection);
    ev.preventDefault();
  }

  function doPaste(ev) {
    let data = ev.clipboardData.getData('text/plain');
    console.log(data);
    let span = document.createElement('span');
    span.textContent = data;
    let selection = document.getSelection();
    if (!selection.rangeCount) return false;
    selection.deleteFromDocument();
    selection.getRangeAt(0).insertNode(span);
    ev.preventDefault();
  }
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
        anchors: ['first', 'second'],
    });
});