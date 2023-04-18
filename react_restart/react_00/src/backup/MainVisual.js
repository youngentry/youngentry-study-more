import { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const MainVisual = () => {

    const mainSliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <Slider ref={mainSliderRef} className='MainSlider' {...settings}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
            </Slider>
            <button onClick={() => (mainSliderRef.current?.slickPrev())}>이전</button>
            <button onClick={() => (mainSliderRef.current?.slickNext())}>다음</button>
        </>
    )
}

export default MainVisual;