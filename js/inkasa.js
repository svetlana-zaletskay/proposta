$(document).ready(function () {
    $('.inkasa-slick').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
    // $('.delivery-slick').slick({
    //     dots: true,
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 1,
    //     adaptiveHeight: true
    // });

    $("#search").focus(function () {
        $('#searchBlock').animate({width: '95%'}, 500);
    });

    $("#search").blur(function () {
        $('#searchBlock').animate({width: '50%',float:'right'}, 500);
    });
});






