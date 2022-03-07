const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 0
        },

        650: {
            slidesPerView: 2,
            spaceBetween: 10,
        },

        900: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });