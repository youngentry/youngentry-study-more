import { Container, Row } from "react-bootstrap";
import Card from "./Card";

const MainProduct = ({ shoes }) => (
    <Container className="mainProduct">
        <Row>
            {/* {shoes.map((shoe, index) => (
                <Card key={shoe.id} shoe={shoe} productIndex={index} /> */}
            {shoes.map((_, index) => (
                // 데이터를 전달할 때부터 원본 데이터의 형태를 그대로 사용하여
                // el로 사람 헷갈리에 만들지 말고 data[index] 형태로 처리한다.
                <Card key={shoes[index].id} shoes={shoes[index]} index={index} />
            ))}
        </Row>
    </Container>
);

export default MainProduct;
