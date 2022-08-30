$(function () {
    /////////////////////////////////////
    $('.top_close_btn').on('click', function () {
        $('.TopBanner').addClass('on');
        $('.Section01').addClass('on');
    });

    $('.main_slider').slick({
        arrows: false,
    });

    $('.left_slider').slick({
        arrows: false,
        fade: true,
        asNavFor: '.right_slider'
    });
    $('.right_slider').slick({
        arrows: false,
        asNavFor: '.left_slider',
        slidesToShow: 5,
    });

    $('.center_slider').on('init reInit afterChange', function (e, s, c) {
        console.log(s.slideCount);
        var current = $('.center_slider .slick-current');
        current.addClass('on').siblings().removeClass('on');
        console.log(current);
        $('.num').html((c ? c : 0) + 1 + '<span> / 0' + s.slideCount + '</span>');
        $('.content_box>div').eq(c).addClass('on').siblings().removeClass('on');
    });

    $('.center_slider').slick({
        arrows: false,
        centerMode: true,
        centerPadding: '300px',

    });



    $('.slide_handler i:first-child').on('click', function () {
        $('.left_slider').slick('slickPrev')
    });
    $('.slide_handler i:last-child').on('click', function () {
        $('.left_slider').slick('slickNext')
    });

    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        sct > 0
            ? $('.Header').addClass('on')
            : $('.Header').removeClass('on')
    })


    /////////////////////////////////////
})