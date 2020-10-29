$(document).ready(function () {

    let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))
    let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

});

$(window).on('load', function () {

    let $partners__slider = $('.partners__slider');
    if ($partners__slider.length) {
        $partners__slider.flickity({
            cellAlign: 'left',
            contain: true,
            pageDots: false,
            percentPosition: false,
        });
    }

    let $reviews__slider = $('.reviews__slider');
    if ($reviews__slider.length) {
        $reviews__slider.flickity({
            cellAlign: 'left',
            contain: true,
            pageDots: false,
            percentPosition: true,
        });
    }

});