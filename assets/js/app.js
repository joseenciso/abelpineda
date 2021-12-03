$(document).ready(function(){

    $(".btn-hamburger").click( ( ) => {
        console.log("Hamburger");
        $(".btn-times").css("display", "block");
        $(".btn-hamburger").css("display", "none");
        $("nav .burger-menu").css("top", "0");
        $("nav ul").css("top", "0");
        $("body").css("overflow-y", "hidden");
    });

    $(".btn-times").click( ( ) => {
        console.log("Times");
        $(".btn-times").css("display", "none");
        $(".btn-hamburger").css("display", "block");
        $("nav .burger-menu").css("top", "-100vh");
        $("nav ul").css("top", "-100vh");
        $("body").css("overflow-y", "scroll");
    });

    let winHeight = $(window).height();
    // console.log(winHeight);
    $(window).scroll(function(){

        var scroll = $(window).scrollTop();
        //console.log("SCRLL: " + scroll)
        let winHeight = $(window).height();
        // let percentage = winHeight - (winHeight % 75);
        let percentage = 50;

        
        if (scroll > 50 ) {
            console.log("SCRLL: " + scroll + " PRECENT: " + percentage);
            $("nav").addClass("black");
            $("nav").removeClass("nav-top-shawdow");
        } else {
            $("nav").removeClass("black");
            $("nav").addClass("nav-top-shawdow");
        }
    });

});