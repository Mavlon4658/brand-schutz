const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

const phoneInp = document.querySelectorAll('input[type="tel"]');

if (phoneInp.length) {
    phoneInp.forEach(el => {
        IMask(el, {
            mask: '+{7}(000) 000-00-00',
        })
    });
}

const homeSwp = new Swiper('.home-swp .swiper', {
    slidesPerView: 1,
    effect: 'fade',
    spaceBetween: 0,
    pagination: {
        el: '.home .swp-pagination',
        clickable: true,
    }
})