$(document).ready(function() {
    $('.main-container nav .second-nav .nav-image .fa-caret-down').click(function() {
        $(this).toggleClass('fa-caret-up');
        $('.main-container nav .second-nav .nav-image .dropdown-box').toggle();
    });
    if (window.outerWidth <= 1000) {
        $('.main-container nav .second-nav .nav-image .fa-bars').click(function() {
            $('.main-container .aside-table aside').css("left", "0");
        });
        $('.main-container .aside-table aside article .fa-times').click(function() {
            $('.main-container .aside-table aside').css("left", "-100%");
        });
    }
});