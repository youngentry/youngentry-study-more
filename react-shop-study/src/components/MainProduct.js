import { Button, Container, Row } from "react-bootstrap";
import Card from "./Card";
import axios from "axios";
import { useState } from "react";

// 221220 18:20 axios get 하는 법
// 설치: npm i axios
// 가져오기: import axios from "axios";
// GET으로 데이터 요청: axios.get("https://codingapple1.github.io/shop/data2.json")
// 가져온 데이터로 뭐할지: .then((result) => {
// 할 일 코드: console.log(result.data)
// })
// 데이터 요청 실패하면: .catch(()=> {
// 할 일 코드: console.log("요청 실패")
// })

// 221220 21:00 여러개 동시에 요청하는 법
// 배열 안에다가 요청 넣기: Promise.all([ axios.get('/url1'), axios.get('/url2')])
// 둘 다 성공하면: .then(()=> {})
// 따옴표로 json형태로 만들어 array나 object도 주고 받는 것이 가능: "{"name":"young"}"

// post하는 법 :axios.post("/보낼 주소", {name:"young"})

const MainProduct = ({ shoes, setShoes }) => {
    const [dataIndex, setDataIndex] = useState(2);
    const [isLastPage, setIsLastPage] = useState(false);
    const [isDataLoading, setIsDataLoading] = useState(false);

    return (
        <Container className="mainProduct">
            <Row>
                {/* {shoes.map((shoe, index) => (
                <Card key={shoe.id} shoe={shoe} productIndex={index} /> */}
                {shoes.map((_, index) => (
                    // 221219 20:00 데이터 props로 전달할 때
                    // 데이터를 전달할 때부터 원본 데이터의 형태를 그대로 사용하여
                    // el로 사람 헷갈리에 만들지 말고 data[index] 형태로 처리한다.
                    <Card key={shoes[index].id} shoes={shoes[index]} index={index} />
                ))}
                {isDataLoading ? <div>로딩중입니다.</div> : null}
                {isLastPage ? (
                    <div>마지막 상품입니다..</div>
                ) : (
                    //  221220 18:45 응용
                    // 응용1: 버튼 두번 누르면 더 나오기
                    // 응용2: 버튼 세번 누르면 상품 더 없다고 알려주기
                    // 응용3: 버튼 누르면 "로딩중입니다" 글자 띄우기
                    <Button
                        variant="primary"
                        onClick={() => {
                            setIsDataLoading(true);
                            axios
                                .get(`https://codingapple1.github.io/shop/data${dataIndex}.json`)
                                .then((result) => {
                                    console.log(result.data);
                                    setIsDataLoading(false);
                                    setShoes([...shoes, ...result.data]);
                                    setDataIndex(dataIndex + 1);
                                    if (dataIndex === 3) {
                                        setIsLastPage(true);
                                    }
                                })
                                .catch(() => {
                                    setIsDataLoading(false);
                                    // 로딩중 UI 숨기기 catch에서도 하는게 더 정확
                                    console.log("데이터 요청 실패함");
                                });
                        }}
                    >
                        상품 더보기
                    </Button>
                )}
            </Row>
        </Container>
    );
};

export default MainProduct;
