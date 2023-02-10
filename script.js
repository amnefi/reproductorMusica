$(document).ready(function () {
    $('button.btn-extend').click(function () {
        $('.player-screen').addClass("active");
    });
    $('button.btn-close').click(function () {
        $('.player-screen').removeClass("active");
    });
});