import "./css/App.scss";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import PRODUCT_DATA from "./data/product.js";
import { useState } from "react";

function App() {
    const [shoes] = useState(PRODUCT_DATA);
    return (
        <div className="App">
            <NavBar />
            <MainVisual />
            <MainProduct shoes={shoes} />
        </div>
    );
}

const NavBar = () => (
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Y MALL</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
);

const MainVisual = () => <div className="mainVisual"></div>;

const MainProduct = ({ shoes }) => (
    <Container className="mainProduct">
        <Row>
            {/* {shoes.map((product, index) => (
                <Card key={product.id} product={product} productIndex={index} /> */}
            {shoes.map((_, index) => (
                // 데이터를 전달할 때부터 원본 데이터의 형태를 그대로 사용하여
                // el로 사람 헷갈리에 만들지 말고 data[index] 형태로 처리한다.
                <Card key={shoes[index].id} shoes={shoes[index]} index={index} />
            ))}
        </Row>
    </Container>
);

const Card = ({ shoes, index }) => (
    <Col>
        <img src={process.env.PUBLIC_URL + `/img/product0${index + 1}.jpg`} alt="" />
        <h4>{shoes.title}</h4>
        <p>{shoes.content}</p>
        <p>{shoes.price}</p>
    </Col>
);

export default App;
