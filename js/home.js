$(window).resize(function() {
    headerHeight = $('header').height();
    innerHeightVar = window.innerHeight;
    $('.view-height').css('height', innerHeightVar -  headerHeight);
});

$(document).ready(function() {
    headerHeight = $('header').height();
    innerHeightVar = window.innerHeight;
    $('.view-height').css('height', innerHeight -  headerHeight);
});