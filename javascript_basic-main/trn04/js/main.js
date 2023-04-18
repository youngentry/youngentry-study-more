window.addEventListener('DOMContentLoaded', () => {

    window.addEventListener('scroll', () => {
        let sct = window.scrollY;
        console.log(sct);
        sct > 0
            ? document.querySelector('#Header').classList.add('on')
            : document.querySelector('#Header').classList.remove('on');

        sct > 500
            ? document.querySelector('.to_top').classList.add('on')
            : document.querySelector('.to_top').classList.remove('on');
    });

    const MainSlider = new Swiper('.MainSlider', {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    })

    const SCE_ELE = document.querySelectorAll('.active-event');
    window.addEventListener('scroll', () => {
        let sct = window.scrollY;
        SCE_ELE.forEach(el => {
            sct > el.offsetTop - 300
                ? el.classList.add('on')
                : el.classList.remove('on')
        })
    });


    document.querySelector('.to_top').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    });


    document.querySelector('.mopen').addEventListener('click', (e) => {
        const TG = e.currentTarget;
        TG.classList.toggle('on');
        document.querySelector('#Header').classList.toggle('ox')
    });

    document.querySelector('#Header').addEventListener('wheel', (e) => {
        e.preventDefault() //이벤트 자체를 막음...
    })











})