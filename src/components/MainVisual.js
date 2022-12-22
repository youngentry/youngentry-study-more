import MainProduct from "./MainProduct";
import "../css/MainVisual.scss";
import { useNavigate } from "react-router-dom";

const MainVisual = ({ shoes, setShoes }) => {
    const navigate = useNavigate();

    const viewedIdArray = JSON.parse(localStorage.getItem("productId"));

    return (
        <>
            <div className="mainVisual">
                <div className="viewed">
                    <strong>최근 본 상품</strong>
                    <ul>
                        {viewedIdArray.map((el, index) => {
                            return (
                                <li key={index} onClick={() => navigate(`/detail/${el}`)}>
                                    <img src={`https://codingapple1.github.io/shop/shoes${el + 1}.jpg`} alt="" />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <MainProduct shoes={shoes} setShoes={setShoes} />
        </>
    );
};

export default MainVisual;

// 221222 18:00 로컬스토리지
// 로컬스토리지는 재접속 해도 브라우저에 남아있다.
// +세션스토리지는 브라우저를 끄면 휘발된다.

// 로컬스토리지에
// 데이터 저장하는 방법
// localStorage.setItem("key", "value")
// 값 가져오는 방법
// localStorage.setItem("key") // "value"
// 키와 값 지우는 방법
// localStorage.removeItem("key") // undefined

// array/object를 저장하려면 JSON으로 변환한다.
let userData = { name: "Amy" };
localStorage.setItem("userData", JSON.stringify(userData));

let userJSONData = localStorage.getItem("userData");
// console.log(userJSONData); // {"name":"Amy"} JSON 데이터 가져옴

let userParsedData = JSON.parse(userJSONData);
// console.log(userParsedData); // {name: 'Amy'} object로 변환한 데이터 가져옴

let userName = userParsedData.name;
// console.log(userName); // Amy 객체의 name 키의 값을 가져옴
