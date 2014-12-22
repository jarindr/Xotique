$(document).ready(function () {
    var check = true;
    $(".nav-menu").click(function () {
        if (check) {
            $(".hidden-nav").animate({right: "0", opacity: 1, top: "80"}, 0, function () {
                check = false;
            });
        }else{
            $(".hidden-nav").animate({right: "-200", opacity: 0, top: "80"}, 0, function () {
                check = true;
            });
        }
    });
});