import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";
import Header from "./pages/Header";
import axios from "axios";

const App = () => {
    const [con, setCon] = useState();
    const [loading, setLoading] = useState(false);
    const url = "http://makeup-api.herokuapp.com/api/v1/products.json";

    useEffect(() => {
        setLoading(false);
        const getData = async () => {
            const res = await axios.get(url);
            const newdata = res.data.slice(0, 50);
            setCon(newdata);
            setLoading(true);
        };
        getData();
        // axios(url).then((res) => {
        //     setCon(res.data);
        //     setLoading(true);
        // });
    }, []);
    return (
        <div>
            {/* 리액트는 객체를 렌더링할 수 없음 */}
            {/* 따라서 map으로 렌더링을 할 수 있도록 해야함 */}
            {/* 그런데 조건문을 쓰면 그냥 출력이 됨... */}
            <ul>
                {loading ? (
                    con.map((el) => {
                        return (
                            <li key={el.id}>
                                <Link to={"/link/" + el.id}>
                                    <div>{el.name}</div>
                                </Link>
                            </li>
                        );
                    })
                ) : (
                    <div>없음</div>
                )}
            </ul>
            <Header />
            <Routes>
                <Route path="/list/:num" element={<Detail list={con} />} />
            </Routes>
        </div>
    );
};

export default App;
