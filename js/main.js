
// Typed effect

var typed = new Typed(".auto-input", {
    strings : ["Tiendas Virtuales", "Aplicaciones Web", "Hosting", "Dominios"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})

// Cards Carousel

$(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0:{
        items:1,
        nav: false
        },
        600:{
        items:2,
        nav: false
        },
        1000:{
        items:3,
        nav: false
        }
    }
    });