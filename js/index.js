window.addEventListener('load', function() {
    var swiper = new Swiper('.get_job_fo', {
        slidesPerView: 2,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    var swiper = new Swiper('.study_fo', {
        slidesPerView: 2.4,
        spaceBetween: 20,
    });

})