$(document).ready(function() {
    headerHeight = $('header').height();
    innerHeight = window.innerHeight;
    console.log(innerHeight);
    $('.view-height').css('height', innerHeight -  headerHeight);
});

$(window).resize(function() {
    headerHeight = $('header').height();
    console.log(headerHeight);
    $('.view-height').css('height', 'calc(100vh - ' + headerHeight + 'px)');
});