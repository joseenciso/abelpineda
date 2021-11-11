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
    
    let winHeight = $(window).height();
    console.log(winHeight);
    $(window).scroll(function(){

        var scroll = $(window).scrollTop();
        let winHeight = $(window).height();
        let percentage = winHeight - (winHeight % 75);

        
        if (scroll > percentage ) {
            console.log(percentage);
            $("nav").addClass("black");
            $("nav").removeClass("nav-top-shawdow");
        } else {
            $("nav").removeClass("black");
            $("nav").addClass("nav-top-shawdow");
        }
    })
  })