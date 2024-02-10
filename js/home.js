$(document).ready(function() {
    headerHeight = $('header').height();
    innerHeight = window.innerHeight;
    console.log(innerHeight);
    $('.view-height').css('height', innerHeight -  headerHeight);
});

$(window).resize(function() {
    headerHeight = $('header').height();
    innerHeight = window.innerHeight;
    console.log(headerHeight);
    $('.view-height').css('height', innerHeight -  headerHeight);
});