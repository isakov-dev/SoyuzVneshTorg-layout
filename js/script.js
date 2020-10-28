$(window).on('load', function () {

    $('.partners__slider').flickity({
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        percentPosition: false,
    });

    $('.reviews__slider').flickity({
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        percentPosition: true,
    });

});