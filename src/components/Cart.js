import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { state변경함수이름 } from "./store";

// 221221 18:10 redux 설치
// $ npm install @reduxjs/toolkit react-redux

const Cart = () => {
    // 221221 18:25 리덕스 스토어에서 state가져오려면 아래처럼
    // 인자에 reducer에 저장한 변수를 넣어주면 해당 state만 가져온다.
    const productData = useSelector((state) => state.product);
    console.log(productData);

    // 221221 19:35 redux state 변경하는 방법
    // 3. useDispatch()는 store.js에서 가져온 함수를 쓸 수 있도록 합니다.
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    return (
        <Table>
            {user}의 장바구니
            <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                </tr>
            </thead>
            <tbody>
                {productData.map((product, index) => {
                    console.log(product);
                    return (
                        <tr key={product.id}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.count}</td>
                            <td>안녕</td>
                            <td>
                                <button
                                    onClick={() => {
                                        // 4. 함수를 import하고, dispatch()의 인자로 전달합니다.
                                        dispatch(state변경함수이름());
                                    }}
                                >
                                    +
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
};

export default Cart;
