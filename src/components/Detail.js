import { useParams } from "react-router-dom";
import styled from "styled-components";

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
    const params = useParams();

    // 221219 21:16 Array.find로 params와 일치하는 id를 가진 상품 찾기
    const foundShoesData = shoes.find((el) => {
        return el.id === parseInt(params.id);
    });

    return (
        <>
            {foundShoesData ? (
                <div className="container">
                    <BlueButton bg="#369">버튼</BlueButton>
                    <BlueButton>버튼</BlueButton>
                    <BiggerBlueButton>큰버튼</BiggerBlueButton>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={`https://codingapple1.github.io/shop/shoes${parseInt(params.id) + 1}.jpg`} width="100%" alt="" />
                        </div>
                        <div className="col-md-6">
                            <h4 className="pt-5">{foundShoesData.title}</h4>
                            <p>{foundShoesData.content}</p>
                            <p>{foundShoesData.price}</p>
                            <button className="btn btn-danger">주문하기</button>
                        </div>
                    </div>
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

export default Detail;
