$('.owl-carousel').owlCarousel({
    loop:true,
    margin:7,
    nav:false,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:5
        },
        1000:{
            items:6
        }
    }
})

$(function () {
    $('#play').click(function (e) { 
        e.preventDefault();
        $('.modal_bg').show();
    });

    $('#close').click(function (e) { 
        e.preventDefault();
        $('.modal_bg').hide(500);
    });
});

