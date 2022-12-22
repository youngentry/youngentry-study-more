import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../css/Card.scss";

const Card = ({ shoes, index }) => {
    const navigate = useNavigate();
    // 122222 18:40 방금 본 상품 내역 기능 만들기
    // 1. 클릭하면 상품 상세 페이지로 이동하기
    const moveToProductDetail = (productData) => {
        return navigate(`/detail/${productData.id}`);
    };

    // 2. 로컬스토리지로 해당 상품 아이디 전달하기
    // const setIdToLocalStorage = (productData) => {
    //     const tempProductIdArray = [...idArray];
    //     return localStorage.setItem("productId", JSON.stringify([...tempProductIdArray, productData.id]));
    // };

    return (
        <Col
            className="card"
            onClick={() => {
                moveToProductDetail(shoes);
            }}
        >
            <img src={`https://codingapple1.github.io/shop/shoes${index + 1}.jpg`} alt="" />
            <h4>{shoes.title}</h4>
            <p>{shoes.content}</p>
            <p>{shoes.price}</p>
        </Col>
    );
};

export default Card;
