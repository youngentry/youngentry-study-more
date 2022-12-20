import "./css/App.scss";
import PRODUCT_DATA from "./data/product.js";
import { useState } from "react";
import NavBar from "./components/NavBar";
import MainVisual from "./components/MainVisual";
import Detail from "./components/Detail";
import MainProduct from "./components/MainProduct";
import { Route, Routes, Link, Outlet } from "react-router-dom";
import About from "./components/About";
import Event from "./components/Event";

function App() {
    const [shoes, setShoes] = useState(PRODUCT_DATA);

    return (
        <div className="App">
            <NavBar />

            <Routes>
                <Route path="/" element={<MainVisual />} />
                <Route path="/mainProduct" element={<MainProduct shoes={shoes} setShoes={setShoes} />} />
                {/* 221219: 18:00 Nested Routes: 여러 페이지, 여러 유사한 페이지 필요할 때
                    Route를 여는 태그, 닫는 태그로 만들고,
                    그 안에 Route를 넣게 되면 /detail/location detail도 보여주고 location도 보여줄 수 있다.
                    어디에 보여줄 지는 <Outlet></Outlet> 태그를 Detail 안에 만들어 주면 된다. */}
                <Route path="/about" element={<About />}>
                    <Route path="location" element={<div>위치</div>} />
                    <Route path="membership" element={<div>멤버쉽</div>} />
                </Route>
                <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
                <Route path="/event" element={<Event />}>
                    <Route path="one" element={<EventOne />} />
                    <Route path="two" element={<EventTwo />} />
                </Route>
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
