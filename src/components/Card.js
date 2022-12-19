import { Col } from "react-bootstrap";

const Card = ({ shoes, index }) => (
    <Col>
        <img src={process.env.PUBLIC_URL + `/img/product0${index + 1}.jpg`} alt="" />
        <h4>{shoes.title}</h4>
        <p>{shoes.content}</p>
        <p>{shoes.price}</p>
    </Col>
);

export default Card;
