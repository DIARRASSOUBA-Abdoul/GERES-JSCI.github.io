const swiper = new Swiper('.image-countainer', {
  loop: true,
  spaceBetween: 30,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints : {
    0: {slidesPerView : 1,
    },
    768: {slidesPerView : 1 ,
    },
    1024: {slidesPerView : 2,
    }
    },
});



  // Récupération des éléments
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");
  const closeBtn = document.querySelector(".close");

  // Attache l'événement à toutes les images dans swiper-slide
  document.querySelectorAll('.swiper-slide img').forEach(img => {
    img.addEventListener('click', () => {
      popup.style.display = "flex";
      popupImg.src = img.src;
    });
  });

  // Fermer la popup
  closeBtn.addEventListener('click', () => {
    popup.style.display = "none";
  });

  // Fermer si on clique en dehors de l'image
  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });

