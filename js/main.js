$(document).ready(function () {

    if ($(window).width() > 990) {

        if ($('.wow').length) {
            new WOW().init();
        }
    }

    $('.header-slider').on('afterChange', function (event, slick, currentSlide) {
        $('.header-active').text(currentSlide + 1);
    });

    if ($('.solutions__item_box').length) {
        $('.solutions__item_box').matchHeight();
    }

    if ($('.articles__item').length) {
        $('.articles__item').matchHeight();
    }

    if ($('.catalog__item').length) {
        $('.catalog__item').matchHeight();
    }

    if ($('.payment__item').length) {
        $('.payment__item').matchHeight();
    }

    if ($('.select_js').length) {
        $('.select_js').select2({
            width: '100%',
            height: '100%',
            minimumResultsForSearch: -1
        });
    }

    if ($('.payment__item_border').length) {
        $('.payment__item_border').matchHeight();
    }

    if ($('.phone').length) {
        $(".phone").mask("+7 (999) 999-99-99");
    }

    $(".active-js .payment__item").click(function () {
        $(".active-js .payment__item").removeClass('active');
        $(this).addClass('active');
    })

    $(".active-js-second .payment__item").click(function () {
        $(".active-js-second .payment__item").removeClass('active');
        $(this).addClass('active');
    })

    $('.garant-slider').slick({



    })

    var time = 5;
    var $bar,
        $slick,
        isPause,
        tick,
        percentTime;

    $slick = $('.header-slider');
    $slick.slick({
        prevArrow: ".ar-left",
        nextArrow: ".ar-right",
        draggable: true,
        speed: 1000,
        swipe: false,
        adaptiveHeight: false,
        mobileFirst: true,
        pauseOnHover: false,
        pauseOnDotsHover: false,
    });

    $bar = $('.header__number .progress');

    $('.header').on({
        mouseenter: function () {
            isPause = false;
        },
        mouseleave: function () {
            isPause = false;
        }
    })

    function startProgressbar() {
        resetProgressbar();
        percentTime = 0;
        isPause = false;
        tick = setInterval(interval, 10);
    }

    function interval() {
        if (isPause === false) {
            percentTime += 1 / (time + 0.1);
            $bar.css({
                width: percentTime + "%"
            });
            if (percentTime >= 100) {
                $slick.slick('slickNext');
                startProgressbar();
            }
        }
    }


    function resetProgressbar() {
        $bar.css({
            width: 0 + '%'
        });
        clearTimeout(tick);
    }

    startProgressbar();


    $('.header-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {

        $(this).closest('.header').find('.header__number_slick .header__number_desc span').eq(nextSlide).addClass('active').siblings().removeClass('active');

    })


    $(".header__scroll").click(function (event) {
        event.preventDefault();

        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 800);
    });

    $(".header-inside__details").click(function (event) {
        event.preventDefault();

        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 800);
    });


    $('.hamburger').click(function () {
        $(this).toggleClass('is-active');
    })

    $('.toggler-trigger').click(function (e) {
        e.preventDefault();
        $(this).closest('.toggler').toggleClass('active');
        $(this).closest('.toggler').find('.toggler__content').stop().slideToggle();
    })

    if ($('.popup-trigger').length) {
        $('.popup-trigger').magnificPopup({
            type: 'inline'
        });
    }
});