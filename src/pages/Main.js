import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import "../css/Main.scss";
import { useRef, useState } from "react";

const SLIDE = [
    {
        id: 1,
        title: "The world expands along the new path created",
        content:
            "현대엘리베이터가 만든 새로운 길을 따라 세상은 위로 넓어집니다",
        link: "/sub01",
    },
    {
        id: 2,
        title: "The world expands along the new path created",
        content:
            "현대엘리베이터가 만든 새로운 길을 따라 세상은 위로 넓어집니다",
        link: "/sub02",
    },
    {
        id: 3,
        title: "The world expands along the new path created",
        content:
            "현대엘리베이터가 만든 새로운 길을 따라 세상은 위로 넓어집니다",
        link: "/sub03",
    },
];

const Main = () => {
    const [num, setNum] = useState();
    const MSG = useRef(null);
    return (
        <section className="Main">
            <div className="mainVisual">
                <Swiper
                    loop={true}
                    // swiper에서는 onSlideChange를 이용해 슬라이드의 인덱스를 받아옵니다.
                    // setNum을 슬라이드의 index로 값을 줍니다.
                    onSlideChange={(it) => {
                        setNum(it.realIndex);
                        console.log(it);
                    }}
                    className="mainSlider"
                    ref={MSG}
                >
                    {SLIDE.map((slide, idx) => {
                        return (
                            // num의 값은 슬라이드의 index입니다. 그리고 idx가 num과 같은 경우는 현재 슬라이드 하나 뿐으로 'on'을 쉽게 붙일 수 있습니다.
                            <SwiperSlide
                                className={`itm itm0${slide.id} ${
                                    num === idx ? "on" : ""
                                }`}
                                key={slide.id}
                            >
                                <div className="content">
                                    <p>{slide.title}</p>
                                    <div className="des">{slide.content}</div>
                                    {/* react에서는 a 태그를 사용하지 않고, Link컴포넌트를 사용합니다.
                                        a태그는 페이지를 새로 렌더링하지만, Link컴포넌트는 데이터가 변하는 부분만을 재렌더링하여 SPA의 기능을 살릴 수 있습니다. */}
                                    <Link to={slide.link}>자세히보기</Link>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
            <ul className="dots">
                {SLIDE.map((dot, idx) => (
                    <li
                        className={num === idx ? "on" : ""}
                        // Swiper 컴포넌트에 ref를 주었습니다.
                        // 태그이름.current로 해당 태그에 접근할 수 있습니다.
                        // react Swiper에서 dots기능을 구현하려면 ref를 이용해 MSG.current.swiper.slideTo() 속성을 이용합니다.
                        onClick={() => MSG.current.swiper.slideTo(idx + 1)}
                    >
                        {dot.id}
                    </li>
                ))}
            </ul>
            <div className="tab">{SLIDE[num]?.title}</div>
            <div className="slideNum">
                {num + 1} / {SLIDE.length}
            </div>
            {console.log(MSG.current)}
            <button onClick={() => MSG.current.swiper.slidePrev()}>
                뒤로가기
            </button>
            <button onClick={() => MSG.current.swiper.slideNext()}>
                앞로가기
            </button>
        </section>
    );
};

export default Main;
