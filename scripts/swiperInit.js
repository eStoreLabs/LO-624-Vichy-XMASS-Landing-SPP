(() => {
  const root = document.querySelector("#es-rc #es-rc-content");
  if (!root) return;

  const swiper = new Swiper(root.querySelector(".es-swiper"), {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    autoHeight: true,

    // If we need pagination
    pagination: {
      el: root.querySelector(".es-swiper-pagination"),
    },

    // Navigation arrows
    navigation: {
      nextEl: root.querySelector(".es-swiper-button-next"),
      prevEl: root.querySelector(".es-swiper-button-prev"),
    },

    // And if we need scrollbar
    scrollbar: {
      el: root.querySelector(".es-swiper-scrollbar"),
    },
  });
})();
