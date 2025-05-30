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

let bars = document.querySelector('.bars');
let menu = document.querySelector('.menu');
let menuClose = document.querySelector('.menu_close');

bars.addEventListener('click', () => {
    menu.classList.add('active')
});

menuClose.addEventListener('click', () => {
    menu.classList.remove('active')
});

const homeSwp = new Swiper('.home-swp .swiper', {
    slidesPerView: 1,
    effect: 'fade',
    spaceBetween: 0,
    pagination: {
        el: '.home .swp-pagination',
        clickable: true,
    }
});

const swiper2 = new Swiper('.swiperProducts', {
    slidesPerView: 2,
    spaceBetween: 24,
    pagination: {
        el: '.products-pagination',
        clickable: true,
    }
});

const swiper3 = new Swiper('.brandSwiper', {
    slidesPerView: 2,
    spaceBetween: 24,
    loop: true,
    speed: 3000,
    freeMode: true,
    autoplay: {
        delay: 1,
        disableOnInteraction: false,
    },
    breakpoints: {
        740: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        990: {
            slidesPerView: 5,
            spaceBetween: 40,
        },
        1250: {
            slidesPerView: 8,
            spaceBetween: 48,
        },
    },
});

var swiper4 = new Swiper(".systemSwiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
        el: ".system-pagination",
        type: "progressbar",
    },
    breakpoints: {
        520: {
            slidesPerView: 2,
        },
    },
});

var swiper6 = new Swiper(".objectsProducts", {
    slidesPerView: 2,
    spaceBetween: 24,
    pagination: {
        el: ".objects-pagination",
        type: "progressbar",
    },
    breakpoints: {
        650: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        993: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
    },
});

const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        btn.classList.add('active');
        const target = document.getElementById(btn.dataset.tab);
        target.classList.add('active');
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("globalModal");
    const openButtons = document.querySelectorAll(".feedback_btn");
    const closeButton = modal.querySelector(".feedback_close");

    openButtons.forEach(button => {
        button.addEventListener("click", () => {
        modal.classList.add("modal-open");
        });
    });

    closeButton.addEventListener("click", () => {
        modal.classList.remove("modal-open");
    });

    modal.addEventListener("click", e => {
        if (e.target === modal) {
        modal.classList.remove("modal-open");
        }
    });
});

var swiper = new Swiper(".reportSwiper", {
    spaceBetween: 24,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        650: {
            slidesPerView: 5,
        },
        1200: {
            slidesPerView: 9,
        },
    },
});
var swiper5 = new Swiper(".reportSwiper2", {
    spaceBetween: 28,
    navigation: {
    nextEl: ".report-button-next",
    prevEl: ".report-button-prev",
    },
    thumbs: {
    swiper: swiper,
    },
    pagination: {
        el: ".report-pagination",
        type: "progressbar",
    },
});
