import axios from "axios";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();

    // 221224 16:40 react-query로 데이터 요청하기
    const requestResult = useQuery(
        "작명",
        () =>
            axios.get("https://codingapple1.github.io/userdata.json").then((resolve) => {
                return resolve.data;
            }),
        { staleTime: 2000 }
    );
    // 장점1: 직접 작성하려면 state부터 만들어주어야 하지만 그 과정을 생략해준다.
    // 성공/실패/로딩중 type: boolean
    // requestResult.data;
    // requestResult.isLoading;
    // requestResult.error;

    // 장점2: 자동으로 재요청(refetch)
    // 간격 설정 방법
    // 프로퍼티에 { staleTime: 2000 }
    // 장점3: 실패시 retry를 자동으로 한다. refetch, retry 종료 기능도 물론 있음.
    // 장점4: state를 공유하지 않고 다른 컴포넌트에서 똑같이 요청하더라도 2회를 수행하는 것이 아니라 1회만 수행한다.
    // 장점5: ajax결과 캐싱. 이전에 요청하여 성공한 결과를 먼저 보여줘서 바로 로딩이 되는 느낌을 줌
    // 그리고 나서 이후 다시 GET요청한 데이터를 다 불러왔을 때 출력해준다.

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Y MALL</Navbar.Brand>
                <Nav className="me-auto">
                    {/* 221219 17:00 페이지 앞뒤로 이동하려면
                        navigate(1) : 앞으로 n 페이지 이동
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
                            navigate("/detail/0");
                        }}
                    >
                        Detail
                    </Nav.Link>
                    <Nav.Link
                        onClick={() => {
                            navigate("/event");
                        }}
                    >
                        Event
                    </Nav.Link>
                    <Nav.Link
                        onClick={() => {
                            navigate("/about");
                        }}
                    >
                        About
                    </Nav.Link>
                    <Nav.Link
                        onClick={() => {
                            navigate("/Cart");
                        }}
                    >
                        Cart
                    </Nav.Link>
                </Nav>
                <div style={{ color: "#fff" }}>
                    {requestResult.data && requestResult.data.name}
                    {requestResult.isLoading && "로딩중"}
                    {requestResult.error && "에러"}
                </div>
            </Container>
        </Navbar>
    );
};

export default NavBar;
