window.addEventListener("DOMContentLoaded", () => {
  const H1 = document.querySelector("h1");
  H1.addEventListener("click", (e) => {
    e.currentTarget.style.color = `blue`;
  });

  const swiper = new Swiper(".swiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    on: {
      // init: function () {
      //   console.log("swiper initialized");
      // },
      slideChangeTransitionEnd: function () {
        console.log(this.slides.length, this.realIndex);

        document.querySelectorAll(".swiper-slide").forEach((e) => e.classList.remove("on"));

        document.querySelector(".swiper-slide-active").classList.add("on");
        document.querySelector("h1 strong").innerText = `${this.realIndex + 1} / ${this.slides.length - 2}`;
      },
    },
  });
});
