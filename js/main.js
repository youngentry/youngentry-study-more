window.addEventListener('DOMContentLoaded', () => {


    const SCE_ELE = document.querySelectorAll('.screvent');

    window.addEventListener('scroll', () => {
        let sct = window.scrollY;
        console.log(sct);
        sct > 0
            ? document.querySelector('#Header').classList.add('on')
            : document.querySelector('#Header').classList.remove('on')
    });

    window.addEventListener('scroll', () => {
        let sct = window.scrollY;
        SCE_ELE.forEach(el => {
            sct > el.offsetTop
                ? el.classList.add('on')
                : el.classList.remove('on')
        })
    });

    const UL = document.querySelector('nav ul');
    const LI = [...UL.children][1];
    console.log(LI);





})