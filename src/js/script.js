$(document).ready(function(){
    $('.carousel__inner').slick({          
        infinite: true,        
        slidesToShow: 1,
        speed: 1200,       
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/blue-arrow-left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/blue-arrow-right.png"></button>',
        responsive: [
            {
              breakpoint: 768,
              settings: {                
                dots: true,
                arrows: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                dots: true,
                arrows: false
              }
            },
            {
              breakpoint: 480,
              settings: {
                dots: true,
                arrows: false
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]       
      });
      // Button pageup
      $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
          $('.pageup').fadeIn();    /* Если прокрутили 1600 пх - стрелка появляется */
        } else {
          $('.pageup').fadeOut();   /* Если меньше 1600 - стрелка исчезает */
        }
      });
  
      // Smooth scroll
        $("a[href^='#up']").click(function(){
                const _href = $(this).attr("href");   /* Получаем аттрибут href из ссылки, к-й начинается с # */
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});   /* Анимация от jquery */
                return false;
        }); 
      // Menu adaptive
      window.addEventListener('DOMContentLoaded', () => {
        const menu = document.querySelector('.mainmenu'),
        menuItem = document.querySelectorAll('.mainmenu_item'),
        hamburger = document.querySelector('.hamburger');
    
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('mainmenu_active');
        });
    
        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('hamburger_active');
                menu.classList.toggle('mainmenu_active');
            });
        });
    });
});