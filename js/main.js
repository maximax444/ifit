$("body").on('click', '[href*="#"]', function (e) {
    var fixed_offset = 50;
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