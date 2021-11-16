/*var tabletWidth = 768;

if ( window > tabletWidth) {
    console.log("No Tablet: " + winWidth);

    $("button .fa-times").addClass('hide');
    $("button .fa-times").removeClass('show');
    $("button .fa-hamburger").addClass('hide');
    $("button .fa-hamburger").removeClass("show");

}


function HOLA(){
    $(window).resize( ()=> {
        let screenWidth = $(window).width(); 

        console.log("Width " + screenWidth)
    });

}

$(document).ready( ()=> {
    HOLA();

});*/

$(document).ready(function(){
    /*
    $(window).resize( ( )=> {
        let widthWindow = $(window).width();
        console.log(widthWindow);

        if ( widthWindow < 576 ) {
            console.log("W: " + widthWindow);
            let hamburger = $(".fa-hamburger");
            let times = $(".fa-times");
            console.log(hamburger);
            console.log(times);

            let burgerButton = $(".btn");
            console.log(burgerButton);

            
        }

    });*/

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

    

/*
    function onWindowsWidth(){

        let winWidth = $(window).width();
        if ( winWidth <= 576 ) {

            console.log(winWidth);
        }
    }*/

    let winHeight = $(window).height();
    console.log(winHeight);
    $(window).scroll(function(){

        var scroll = $(window).scrollTop();
        let winHeight = $(window).height();
        let percentage = winHeight - (winHeight % 75);

        
        if (scroll > percentage ) {
            console.log(percentage);
            $("nav").addClass("black");
            console.log("BLACK");
            $("nav").removeClass("nav-top-shawdow");
        } else {
            $("nav").removeClass("black");
            console.log("NoBlack")
            $("nav").addClass("nav-top-shawdow");
        }
    });

    
    //onWindowsWidth();
});