import "./css/reset.css";
import "./css/App.scss";
import PRODUCT_DATA from "./data/product.js";
import { lazy, useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import MainVisual from "./components/MainVisual";
import Detail from "./components/Detail";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Event from "./components/Event";
import Cart from "./components/Cart";

// 221224 17:20 Lazy Load 기능으로 import하기
// 아래와 같은 형태로 import를 하게 되면
const Datail = lazy(() => import("./components/Detail.js"));
// 사이트를 발행할 때 하나의 js 파일로 생성되지 않고 별도의 파일로 분리되게 됩니다.
// 그러면 Datail 컴포넌트가 필요할 때가 되어야 로딩을 시작을 하게 되고
// => 모든 페이지를 한 번에 로딩하지 않도록 하여 최초 로딩 시간을 줄여줍니다.

// 로딩중이라는 UI를 나타내고자 한다면 아래와 같이 <Suspense>로 감싸주면 됩니다.

// <Suspense fallback={<div>로딩중</div>}>
//    <Routes></Routes>
// </Suspense>;

function App() {
    // 221223 로컬스토리지는 App에서 생성하면 편하다
    useEffect(() => {
        if (localStorage.getItem("productId") === null) {
            localStorage.setItem("productId", JSON.stringify([]));
        }
    }, []);

    const [shoes, setShoes] = useState(PRODUCT_DATA);

    return (
        <div className="App">
            <NavBar />

            <Routes>
                <Route path="/" element={<MainVisual shoes={shoes} setShoes={setShoes} />} />
                {/* 221219: 18:00 Nested Routes: 여러 페이지, 여러 유사한 페이지 필요할 때
                    Route를 여는 태그, 닫는 태그로 만들고,
                    그 안에 Route를 넣게 되면 /detail/location detail도 보여주고 location도 보여줄 수 있다.
                    어디에 보여줄 지는 <Outlet></Outlet> 태그를 Component안에서 원하는 곳에 위치하면 된다. */}
                <Route path="/about" element={<About />}>
                    <Route path="location" element={<div>위치</div>} />
                    <Route path="membership" element={<div>멤버쉽</div>} />
                </Route>
                <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
                <Route path="/event" element={<Event />}>
                    <Route path="one" element={<EventOne />} />
                    <Route path="two" element={<EventTwo />} />
                </Route>
                <Route path="/cart" element={<Cart />} />

                {/* 221219 18:10
                    이외에 존재하지 않는 모든 Route에 404 페이지 출력 */}
                <Route path="*" element={<div>Error: 404</div>} />
            </Routes>
        </div>
    );
}

const EventOne = () => {
    return <h3>첫 주문시 양배추즙 서비스</h3>;
};
const EventTwo = () => {
    return <h3>생일기념 쿠폰받기</h3>;
};

export default App;
