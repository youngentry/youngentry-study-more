import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const SyncSlick = () => {
    const slideElm = [
        { id: 1, content: "H1" },
        { id: 2, content: "H2" },
        { id: 3, content: "H3" },
        { id: 4, content: "H4" },
    ];
    const s1 = useRef();
    const [slnum, setSlnum] = useState();

    useEffect(() => {
        setSlnum(0);
    }, []);

    const set = {
        // onInit: () => {
        //     setSlnum(0);
        // },
        // onReInit: () => {
        //     setSlnum(0);
        // },
        // beforeChange: (oldIndex, newIndex) => {
        //     console.log(oldIndex, newIndex);
        // },
        afterChange: (idx) => {
            setSlnum(idx);
        },
    };

    return (
        <>
            {slnum + 1} / {slideElm.length}
            <Slider ref={s1} {...set}>
                {slideElm.map((slide, idx) => (
                    <figure
                        key={slide.id}
                        className={`itm0${slide.id} ${
                            idx == slnum ? "on" : ""
                        }`}
                    >
                        {slide.content}
                    </figure>
                ))}
            </Slider>
            <div className="arrows">
                <i
                    className="xi-arrow-left"
                    onClick={() => s1.current.slickPrev()}
                ></i>
                <i
                    className="xi-arrow-right"
                    onClick={() => s1.current.slickNext()}
                ></i>
            </div>
            <ul>
                {slideElm.map((dot, idx) => (
                    <li key={dot.id} onClick={() => s1.current.slickGoTo(idx)}>
                        {dot.id}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default SyncSlick;
