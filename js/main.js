$("body").on('click', '[href*="#"]', function (e) {
    var fixed_offset = 0;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
});
$(".reviews__slider").slick({
    slide: ".reviews__block",
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 225000,
    prevArrow: ".reviews__prev",
    nextArrow: ".reviews__next",
    responsive: [{
        breakpoint: 576,
        settings: {
            slidesToShow: 1,
            vertical: false
        }
    }]
});
if (screen.width >= 1200) {
    let bg = $('.main__img .after');
    let bg2 = $('.about__img .after');
    window.addEventListener('mousemove', function (e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        bg.css('transform', 'translate(' + x * 30 + 'px,' + y * 30 + 'px)');
        bg2.css('transform', 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)');
    });
}
$('.header__burger').on('click', function (e) {
    e.preventDefault();
    $('.header__drop').addClass('active');
});
$('.header__close, .header__menu a').on('click', function (e) {
    e.preventDefault();
    $('.header__drop').removeClass('active');
});
$('.modal-call').on('click', function (e) {
    e.preventDefault();
    $('.overlay-call').addClass('overlay-active');
    $('body').css("overflow", "hidden");
});
$('.modal-polit').on('click', function (e) {
    e.preventDefault();
    $('.overlay-polit').addClass('overlay-active');
    $('body').css("overflow", "hidden");
});
$('.popup-close').on('click', function (e) {
    $('body').css("overflow", "visible");
    $(this).closest('.overlay').removeClass('overlay-active');
});
$('.overlay-call').on('click', function (e) {
    if (!(($(e.target).parents('.popup-wrap').length) || ($(e.target).hasClass('popup-wrap')))) {
        $('body').css("overflow", "visible");
        $('.overlay-call').removeClass('overlay-active');
    }
});
$('.overlay-polit').on('click', function (e) {
    if (!(($(e.target).parents('.popup-wrap').length) || ($(e.target).hasClass('popup-wrap')))) {
        $('body').css("overflow", "visible");
        $('.overlay-polit').removeClass('overlay-active');
    }
});

function changeActive() {
    var activeBl = $('.popup__block.active');
    activeBl.next().addClass('active');
    activeBl.removeClass('active');
}
$("form.step1").submit(function (r) {
    r.preventDefault();
    if (!$('.input-name').hasClass('no')) {
        $("form.step2").find('input[name="name"]').val($("form.step1").find('input[name="name"]').val());
        $("form.step2").find('input[name="tel"]').val($("form.step1").find('input[name="tel"]').val());
        $("form.step2").find('input[name="email"]').val($("form.step1").find('input[name="email"]').val());
        changeActive();
    }

});
$("form.step2 input[type='radio']").on('change', function () {
    $("form.step2").submit();
});
$("form.step2").submit(function (r) {
    return r.preventDefault(),
        $.ajax({
            type: "POST",
            url: "/mail/mail.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val(""),
                $("form.step1").find("input").val(""),
                changeActive(),
                $("form").trigger("reset")
        })
});

function maskPhone() {
    var country = $('#country option:selected').val();
    switch (country) {
        case "ru":
            $("#phone").mask("+7(999) 999-99-99");
            break;
        case "ua":
            $("#phone").mask("+380(999) 999-99-99");
            break;
        case "by":
            $("#phone").mask("+375(999) 999-99-99");
            break;
    }
}
maskPhone();
$('#country').change(function () {
    maskPhone();
});

$('.input-name').on('input', function () {
    if (/^[а-яА-Яa-zA-ZЁёәіңғүұқөһӘІҢҒҮҰҚӨҺ\-\s\—]+$/.test($(this).val()) & $(this).val().length > 3) {
        $(this).css('border', 'none');
        $(this).removeClass('no');
    } else {
        $(this).css('border', '1px solid red');
        $(this).addClass('no');
    }
});