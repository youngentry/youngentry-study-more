import { useParams } from "react-router-dom";

const Detail = ({ shoes }) => {
    const params = useParams();

    // 221219 21:16 Array.find로 params와 일치하는 id를 가진 상품 찾기
    const shoesDetail = shoes.find((el) => {
        return el.id === parseInt(params.id);
    });

    return (
        <>
            {shoesDetail ? (
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={`https://codingapple1.github.io/shop/shoes${parseInt(params.id) + 1}.jpg`} width="100%" alt="" />
                        </div>
                        <div className="col-md-6">
                            {/* params와 id가 일치하는 상품 출력하기 */}
                            <h4 className="pt-5">{shoesDetail.title}</h4>
                            <p>{shoesDetail.content}</p>
                            <p>{shoesDetail.price}</p>
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
