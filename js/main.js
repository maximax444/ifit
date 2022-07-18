$(".reviews__slider").slick({
    slide: ".reviews__block",
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 225000,
    prevArrow: ".reviews__prev",
    nextArrow: ".reviews__next"
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