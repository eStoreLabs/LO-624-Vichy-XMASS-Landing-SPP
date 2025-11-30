(() => {
  const root = document.querySelector("#es-rc #es-rc-content");
  if (!root) return;

  const swiper = new Swiper(root.querySelector(".es-swiper"), {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    autoHeight: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: root.querySelector(".es-swiper-button-next"),
      prevEl: root.querySelector(".es-swiper-button-prev"),
    },
  });
})();
