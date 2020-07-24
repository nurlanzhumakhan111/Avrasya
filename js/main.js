document.addEventListener("DOMContentLoaded", function () {
    //WOW animation
    new WOW().init();

    //Slider

    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })


    // Modal

    let modalBtn = document.querySelectorAll(".modal-button"),
        popup = document.querySelector(".popup"),
        closeBtn = document.querySelector(".popup__close"),
        overlay = document.querySelector(".overlay"),
        body = document.querySelector("body");
        for (let i = 0; i < modalBtn.length; i++){
            modalBtn[i].addEventListener('click', function () {
                overlay.classList.add("active")
                popup.classList.add("active")
                body.classList.add("lock")
                
            });
        }
    
    
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', function() {
        if(!event.target.closest(".popup")) {
            closeModal()
        }
    });
    function closeModal() {
            overlay.classList.remove("active")
            popup.classList.remove("active")
            body.classList.remove("lock")
        
    };



    // Accordion

    var accordions = document.getElementsByClassName("info__accordion");
    for (let i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }


    // BURGER

    $(document).ready(function () {
        $('.header__burger').click(function (event) {
            $('.header__burger, .nav, .contact').toggleClass('active');
            $('body').toggleClass('lock');
        })
    });

    $('.nav').click(function (event) {
        $('.header__burger, .nav, .contact').delay(1000).removeClass('active');
        $('body').removeClass('lock');
    });

    // Masked Input

    $(function ($) {
        $(".input__number").mask("+7 (999) 999-9999");
    });

})