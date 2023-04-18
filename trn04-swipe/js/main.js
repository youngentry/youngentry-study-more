window.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", () => {
    let sct = window.scrollY;
    console.log(sct);
    sct > 0 ? document.querySelector("#Header").classList.add("on") : document.querySelector("#Header").classList.remove("on");
  });

  new Swiper(".MainSlider", {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false, // 호버, 포커스에도 멈추지 않도록 합니다.
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const SCE_ELE = document.querySelectorAll(".active-event");
  window.addEventListener("scroll", () => {
    let sct = window.scrollY;
    SCE_ELE.forEach((el) => {
      sct > el.offsetTop - 300 ? el.classList.add("on") : el.classList.remove("on");
    });
  });

  // const UL = document.querySelector('nav ul');
  // const LI = [...UL.children][1];
  // console.log(LI);
});
