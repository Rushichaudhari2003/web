$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 50){
            $('.navbar').addClass("sticky");
            $('.navbar .menu li a:hover').addClass("new-hover");

        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    //toggle navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    var typed = new Typed(".typing",{
        strings: ["Developer", "Designer", "programmer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true

    });
    var typed = new Typed(".typing-2",{
        strings: ["Developer", "Designer", "Programmer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true

    });

    // owl 

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false,
            },
            1000:{
                items: 3,
                nav: false,
            }
        }

    });

});

const parentContainer =  document.querySelector('.skills-content .left');

parentContainer.addEventListener('click', event=>{

    const current = event.target;

    const isReadMoreBtn = current.className.includes('read-more-btn');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text');

    currentText.classList.toggle('read-more-text--show');

    current.textContent = current.textContent.includes('Read More') ? "Read Less..." : "Read More...";

})
