import "./css/App.scss";
import PRODUCT_DATA from "./data/product.js";
import { useState } from "react";
import NavBar from "./components/NavBar";
import MainVisual from "./components/MainVisual";
import Detail from "./components/Detail";
import MainProduct from "./components/MainProduct";
import { Route, Routes, Link } from "react-router-dom";

function App() {
    const [shoes] = useState(PRODUCT_DATA);

    return (
        <div className="App">
            <NavBar />

            <Routes>
                <Route path="/" element={<MainVisual />} />
                <Route path="/mainProduct" element={<MainProduct shoes={shoes} />} />
                <Route path="/detail" element={<Detail />} />
                <Route path="*" element={<div>Error: 404</div>} />
            </Routes>
        </div>
    );
}

export default App;
