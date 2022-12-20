import { Col } from "react-bootstrap";
import styled from "styled-components";

const Card = ({ shoes, index }) => {
    return (
        <Col>
            <img src={`https://codingapple1.github.io/shop/shoes${index + 1}.jpg`} alt="" />
            <h4>{shoes.title}</h4>
            <p>{shoes.content}</p>
            <p>{shoes.price}</p>
        </Col>
    );
};

export default Card;
