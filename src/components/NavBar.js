import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Y MALL</Navbar.Brand>
                <Nav className="me-auto">
                    {/* navigate(1) : 앞으로 n 페이지 이동
                        navigate(-1): 뒤로 n 페이지 이동 */}
                    <Nav.Link
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        MainVisual
                    </Nav.Link>
                    <Nav.Link
                        onClick={() => {
                            navigate("/mainProduct");
                        }}
                    >
                        MainProduct
                    </Nav.Link>
                    <Nav.Link
                        onClick={() => {
                            navigate("/detail");
                        }}
                    >
                        Detail
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;
