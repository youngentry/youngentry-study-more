import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

// 221221 18:10 redux 설치
// $ npm install @reduxjs/toolkit react-redux

const Cart = () => {
    // 221221 18:25 리덕스 스토어에서 state가져오려면 아래처럼
    // 인자에 reducer에 저장한 변수를 넣어주면 해당 state만 가져온다.
    const productData = useSelector((state) => state.product);
    console.log(productData);

    return (
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                </tr>
            </thead>
            <tbody>
                {productData.map((product) => {
                    console.log(product);
                    return (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.count}</td>
                            <td>안녕</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
};

export default Cart;
