import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const SLIDE = [
    {
        slideId: 1,
        content: "01 슬라이드 제목",
        des: "01 슬라이드 내용",
        link: "/1",
    },
    {
        slideId: 2,
        content: "02 슬라이드 제목",
        des: "02 슬라이드 내용",
        link: "/2",
    },
    {
        slideId: 3,
        content: "03 슬라이드 제목",
        des: "03 슬라이드 내용",
        link: "/3",
    },
];

const MainSlider = () => {
    const [num, setNum] = useState(0);
    const slideRef = useRef();
    useEffect(() => {
        setNum(0);
    }, []);

    const slideSet = {
        dots: false,
        arrows: false,
        afterChange: (index) => setNum(index),
    };
    return (
        <section className="MainVisual">
            <Slider {...slideSet} ref={slideRef} className="main_slider">
                {SLIDE.map((slide, idx) => (
                    <figure
                        className={`item0${slide.slideId} ${
                            idx === num ? "on" : ""
                        }`}
                    >
                        <div className="inner">
                            <h2>{slide.content}</h2>
                            <p>{slide.des}</p>
                            <a href={slide.link}>more</a>
                        </div>
                    </figure>
                ))}
            </Slider>
            <div className="arrows">
                <button onClick={() => slideRef.current.slickPrev()}>
                    prev
                </button>
                <button onClick={() => slideRef.current.slickNext()}>
                    next
                </button>
            </div>
            <ul className="dots">
                {SLIDE.map((dots, idx) => (
                    <li
                        className={idx === num ? "on" : ""}
                        onClick={() => slideRef.current.slickGoTo(idx)}
                        key={dots.slideId}
                    >
                        {dots.slideId}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default MainSlider;
