import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const SlickCustom = () => {
    const SlideEle = [
        {
            id: 1,
            h2: "jewellery collection event",
            p: "asjdkfl fajsid flojsdlfajsd lfikaje slifjalei j.",
        },
        {
            id: 2,
            h2: "jewellery collection event",
            p: "asjdkfl fajsid flojsdlfajsd lfikaje slifjalei j.",
        },
        {
            id: 3,
            h2: "jewellery collection event",
            p: "asjdkfl fajsid flojsdlfajsd lfikaje slifjalei j.",
        },
        {
            id: 4,
            h2: "jewellery collection event",
            p: "asjdkfl fajsid flojsdlfajsd lfikaje slifjalei j.",
        },
    ];

    const s1 = useRef();
    const [num, setNum] = useState();

    useEffect(() => {
        setNum(0);
    }, []);

    const set = {
        arrows: false,
        afterChange: (idx) => {
            setNum(idx);
        },
    };
    return (
        <>
            <Slider ref={s1} {...set} className="MainVisual">
                {SlideEle.map((itm, idx) => (
                    <figure
                        key={itm.id}
                        className={`itm0${idx + 1} ${idx === num ? "on" : ""}`}
                    >
                        {idx + 1}
                        {itm.h2}
                        {itm.p}
                    </figure>
                ))}
            </Slider>

            <div className="num">
                {num + 1} / {SlideEle.length}
            </div>

            <div className="slideArrow">
                <i
                    className="xi-arrow-left"
                    onClick={() => s1.current.slickPrev()}
                ></i>
                {console.log(s1)}
                <i
                    className="xi-arrow-right"
                    onClick={() => s1.current.slickNext()}
                ></i>
            </div>

            <ul className="slideDot">
                {SlideEle.map((el, idx) => (
                    <li
                        key={el.id}
                        onClick={() => s1.current.slickGoTo(idx)}
                        className={idx === num ? "on" : ""}
                    >
                        {el.id}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default SlickCustom;
