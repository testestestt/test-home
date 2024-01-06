$(document).ready(function() {
    headerHeight = $('header').height();
    console.log(headerHeight);
    $('.view-height').css('height', 'calc(100vh - ' + headerHeight + 'px)');
});

$(window).resize(function() {
    headerHeight = $('header').height();
    console.log(headerHeight);
    $('.view-height').css('height', 'calc(100vh - ' + headerHeight + 'px)');
});