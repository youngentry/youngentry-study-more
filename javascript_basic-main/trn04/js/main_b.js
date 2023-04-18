window.addEventListener('DOMContentLoaded', () => {
    const H1 = document.querySelector('h1');
    const TOGGLE = function () {
        this.classList.toggle('on')
    }
    H1.addEventListener('click', TOGGLE);

    new Swiper('.ddd', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        on: {
            // init: function () {
            //     console.log('swiper initialized');
            // },
            slideChangeTransitionEnd: function () {
                console.log(this.slides.length, this.realIndex);
                //console.log(document.querySelectorAll('.swiper-slide'), document.querySelector('.swiper-slide-active'))
                document.querySelectorAll('.swiper-slide').forEach(
                    e => e.classList.remove('on')
                );
                document.querySelector('.swiper-slide-active').classList.add('on');
                document.querySelector('h1 strong').innerText = `${this.realIndex + 1} / ${this.slides.length - 2}`;
            },
        }
    });

    // const dddd = $('.ddd').slick();
})