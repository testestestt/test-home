$(window).resize(function() {
    headerHeight = $('header').height();
    innerHeightVar = window.innerHeight;
    $('.view-height').css('height', innerHeightVar -  headerHeight);
});

$(document).ready(function() {
    headerHeight = $('header').height();
    innerHeightVar = window.innerHeight;
    $('.view-height').css('height', innerHeight -  headerHeight);
    $('.socials').css('transform', 'translateY('+ (innerHeightVar - $('.socials').height() - 15) + 'px)');
});