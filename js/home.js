$(window).resize(function() {
    headerHeight = $('header').height();
    innerHeightVar = window.innerHeight;
    $('.view-height').css('height', 'calc(100vh - ' + headerHeight + 'px)');
});

$(document).ready(function() {
    headerHeight = $('header').height();
    innerHeightVar = window.innerHeight;
    $('.view-height').css('height', innerHeight -  headerHeight);
    $('.socials').css('transform', 'translateY('+ (innerHeightVar - $('.socials').height()) + 'px)');
});