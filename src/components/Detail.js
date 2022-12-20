import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "react-bootstrap/";
import "../css/Detail.scss";

// 221220 02:00 컴포넌트의 lifecycle
// 1. 페이지에 나타남 (mount)
// 2. 업데이트 됨 (update)
// 3. 제거 됨 (unmount)
// 각각의 라이프 사이클에 원하는 기능을 수행시킬 수 있다.

// 과거 class로 Component를 생성했을 때는
// class ComponentName extends React.Component {
//     componentDidMount(){
//      생겨날 때 실행되는 코드
//     }
//     componentDidUpdate(){
//      업데이트 될 때 실행되는 코드
//     }
//     componentWillUnmount(){
//      사라지기 직전에 실행되는 코드
//     }
// }

// 221219 21:26 styled-components 장점
// 1. 스타일이 다른 js 파일로 오염되지 않음
// css에서는 오염시키지 않으려면 App.module.css 처럼 module을 파일명에 추가한다.
// 2. 필요한 페이지의 css만을 불러와 페이지 로딩시간 단축
// 3. JS문법 활용 가능. 주의할 점은 오타나 세미콜론같은 것은 eslint에서 잡아주지 못하므로 오타 주의
const BlueButton = styled.button`
    background: ${(props = "#fff") => props.bg};
    color: ${(props) => (props.bg === "#369" ? "#fff" : "#000")};
    padding: 10px;
`;

// 4. 기존 스타일 복사 가능
const BiggerBlueButton = styled(BlueButton)`
    padding: 20px;
`;

// 221219 21:47 styled-components 단점
// 1. 같은 컴포넌트를 쓰기 때문에 일반 컴포넌트와의 구분이 어렵습니다.
// 2. 다른 파일에 있는 스타일을 import해서 쓰면 css와 별 차이가 없습니다.
// 3. styled-components 문법을 모르는 사람과 협업이 어렵습니다.

// 따라서, 특정 파일 내에서 변수를 이용하는 등 js 문법이 필요한 상황에만 쓰고, sass 씁시다.

const Detail = ({ shoes }) => {
    const [isNoticeVisible, setIsNoticeVisible] = useState(true);
    const [size, setSize] = useState("");
    const [tabVisible, setTabVisible] = useState(0);

    const [fadeIn, setFadeIn] = useState("");
    // 221220 22:30 useEffect는 여러개 사용 가능하다.
    // fadeIn을 페이지 전체에 넣기 위해 useEffect를 검색해보니
    // useEffect는 한 컴포넌트 안에 여러개를 사용하여도 각각 동작하도록 되어 있다.
    useEffect(() => {
        setFadeIn("fadeIn");
        return () => {
            setFadeIn("");
        };
    }, []);

    // 221220 02:10 지금 lifecycle hook을 사용하는 방법
    // useEffect 안의 코드는 html 렌더링 후에 동작한다.
    // 그래서 언제 쓰면 좋은가? => 오래걸리는 것
    // 1. 이용자가 보이는 화면을 다 그린 뒤, 오래 걸리는 연산을 수행하도록 할 때
    // 2. 서버에서 데이터를 가져올 때
    // 3. setTimeout 쓸 때
    // 이름의 유래는 Side Effect에서 들고온 듯
    // mount될 때, update될 때 실행되는 코드
    useEffect(() => {
        // 201220 03:15 setTimeout은 보통 변수에 저장하여 실행시킨다.
        const changeIntoFalse = setTimeout(() => {
            setIsNoticeVisible(false);
        }, 2000);

        // 221220 03:30 숫자만 입력받기(별도로 메모할 필요는 없음)
        isValidNumber(size);

        // 221220 03:10 useEffect에도 return을 쓸 수 있다. clean up function이라고 불리는데(역할을 보면 이름 참 잘 지은 것 같다.)
        // mount(만들어질 때)시에는 실행되지 않고, update(useEffect 실행 전)와 unmount(삭제될 때)시에 실행된다.
        // 1. clearTimeout으로 기존 코드를 정리할 때 사용
        return () => {
            clearTimeout(changeIntoFalse);
            // 2. 데이터 요청을 할 때 에러가 발생하지 않도록 기존 데이터 요청을 제거하면 좋다.
        };

        // 221220 03:00 dependency 역할
        // []와 같이 비워놓으면 mount될 때만 실행시켜라.
        // [isNoticeVisible] 와 같이 state를 넣으면 dependency안의 state가 update될 때마다 실행시켜라
    }, [size]);

    const params = useParams();

    // 221219 21:16 Array.find로 params와 일치하는 id를 가진 상품 찾기
    const foundShoesData = shoes.find((el) => {
        return el.id === parseInt(params.id);
    });

    const isValidNumber = (size) => {
        if (isNaN(size)) {
            alert("숫자를 입력해주세요.");
        }
    };
    return (
        <>
            {foundShoesData ? (
                <div className={`container opacityZero ${fadeIn}`}>
                    {isNoticeVisible ? (
                        <div className="noticeEvent" style={{ background: "#399", padding: "10px" }}>
                            2초 이내에 누르면 할인
                        </div>
                    ) : null}
                    <div className="buttonBox">
                        <BlueButton bg="#369" onClick={() => setIsNoticeVisible(true)}>
                            할인버튼 나타나게 하기
                        </BlueButton>
                        <BlueButton>버튼</BlueButton>
                        <BiggerBlueButton>큰버튼</BiggerBlueButton>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={`https://codingapple1.github.io/shop/shoes${parseInt(params.id) + 1}.jpg`} width="100%" alt="" />
                        </div>
                        <input placeholder="사이즈를 입력해주세요." onChange={(e) => setSize(e.target.value)} />
                        <div className="col-md-6">
                            <h4 className="pt-5">{foundShoesData.title}</h4>
                            <p>{foundShoesData.content}</p>
                            <p>{foundShoesData.price}</p>
                            <button className="btn btn-danger">주문하기</button>
                        </div>
                    </div>
                    <Nav variant="tabs" defaultActiveKey="link0">
                        <Nav.Item>
                            <Nav.Link
                                onClick={() => {
                                    setTabVisible(0);
                                }}
                                eventKey="link0"
                            >
                                버튼0
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                onClick={() => {
                                    setTabVisible(1);
                                }}
                                eventKey="link1"
                            >
                                버튼1
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                onClick={() => {
                                    setTabVisible(2);
                                }}
                                eventKey="link2"
                            >
                                버튼2
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab tabVisible={tabVisible} />
                </div>
            ) : (
                <div>
                    {/* 221219 21:17 존재하지 않는 페이지는 예외처리 */}
                    존재하지 않는 상품입니다.
                </div>
            )}
        </>
    );
};

const Tab = ({ tabVisible }) => {
    // 221220 22:10 css className으로 트랜지션 주기
    // opacityZero클래스에 opacity: 0
    // fadeIn클래스에 opacity: 1, transition: 0.5s
    // useEffect로 특정 state가 변할 때 setTimeout으로 붙였다 떼주면 된다.
    // setTimeout을 써야하는 이유는 리액트 automatic batching 기능 때문
    // 여러 state가 업데이트 될 때마다 수 차례 렌더링을 하게 되는데
    // state의 변화가 다 끝나고 최종적으로 유지되어야 할 상태에서 렌더링을 수행하도록 하여 성능을 높인다.

    const [fadeIn, setFadeIn] = useState("fadeIn");

    useEffect(() => {
        setTimeout(() => {
            setFadeIn("fadeIn");
        }, 10);
        return () => {
            setFadeIn("");
        };
    }, [tabVisible]);

    return <div className={`opacityZero ${fadeIn}`}>{[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tabVisible]}</div>;
};

export default Detail;
