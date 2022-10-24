const { active, modalSuccess } = {
    active: 'active',
    modalSuccess: 'modalSuccess'
}

const {
    showSeoText,
    textBottomShadow,
    mobileMenuOpen,
    mobileMenu,
    closeMobileMenu,
    closeModalSuccess,
} = {
    showSeoText: $('#show-seo-text'),
    textBottomShadow: $('.text-bottom-shadow'),
    mobileMenuOpen: $('#mobile-menu-open'),
    mobileMenu: $('.mobile-menu'),
    closeMobileMenu: $('#close-mobile-menu'),
    closeModalSuccess: $('#close-modal-success'),
}


$('.header-products').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: `<button class="slider-buttons"><i class="fa-solid fa-angle-right"></i></button>`,
    prevArrow: `<button class="slider-buttons left"><i class="fa-solid fa-angle-left"></i></button>`,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 475,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

const defaultInput = $('.def-input input');
const inpLabel = $('.def-input');

defaultInput.on('blur', function (){
    inpLabel.map((index, e) => {
        if($(e).children('input').val() === ''){
            $(e).removeClass(active);
        }
    })
})

defaultInput.on('focus', function (){
    $(this).parent().addClass(active);
})


showSeoText.on('click', function (){
    if(textBottomShadow.hasClass('open-text')){
        textBottomShadow.removeClass('open-text')
    } else {
        textBottomShadow.addClass('open-text')
    }
})


// OPEN MOBILE MENU
mobileMenuOpen.on('click', openCloseMobileMenu);
closeMobileMenu.on('click', openCloseMobileMenu);

function openCloseMobileMenu(){
    mobileMenu.hasClass(active) ? mobileMenu.removeClass(active) : mobileMenu.addClass(active)
}

// OPEN CLOSE SUCCESS MODAL SITE


const ModalSuccess = new bootstrap.Modal('#modal-success-user', {
    keyboard: false
})
if(!window.localStorage.getItem(modalSuccess)){
    ModalSuccess.show();
}

closeModalSuccess.on('click', function (){
    ModalSuccess.hide();
    window.localStorage.setItem(modalSuccess, '1');
})

