import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { increaseAmount, removeProduct } from "./reducer/productSlice";
import { increaseUserAge } from "./reducer/userObjectSlice";

// 221221 18:10 redux 설치
// $ npm install @reduxjs/toolkit react-redux

//  221224 17:50 memo 자식 컴포넌트 재렌더링 막기
// 렌더링에 시간이 오래 걸리는 컴포넌트는 memo로 필요할 때만 재렌더링 하도록 하는 것이 좋다
// const ChildTemp = memo(() => {
//     return <div>ChildTemp</div>;
// });
// 원리는 자식 컴포넌트에 전달된 props가 변할 때만 렌더링하도록 하는 것으로
// 모든 곳에 memo를 붙이면 props가 변했는지 비교하는 연산을 수행해야 하므로 오히려 시간이 더 걸린다.
// => 꼭 필요한 곳에만 쓰고 대부분 쓸 일이 없긴 하다.

// 221224 18:00  useMemo 컴포넌트 안의 함수 1회만 실행
// useEffect와의 차이
// useEffect는 html렌더링 이후 실행
// useMemo는 렌더링 중에 실행
// dependency가 변경되었을 때만 함수를 실행하도록 하여 매번 불필요한 실행을 하지 않도록 한다.
// const result = useMemo(() => {
//     return 오래걸리는함수();
// }, []);

const Cart = () => {
    // 221221 18:25 리덕스 스토어에서 state가져오려면 아래처럼
    // 인자에 reducer에 저장한 변수를 넣어주면 해당 state만 가져온다.
    const productData = useSelector((state) => state.product);

    // 221221 19:35 redux state 변경하는 방법
    // 3. useDispatch()는 store.js에서 가져온 함수를 쓸 수 있도록 합니다.
    const dispatch = useDispatch();
    // const user = useSelector((state) => state.user);

    const userObject = useSelector((state) => state.userObject);
    console.log(productData);

    return (
        <>
            <h1>
                {userObject.name}({userObject.age})의 장바구니{" "}
                <button
                    onClick={() => {
                        dispatch(increaseUserAge(1));
                    }}
                >
                    숫자+1하기
                </button>
            </h1>
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
                    {productData.length === 0 ? (
                        <div>장바구니가 비어있습니다.</div>
                    ) : (
                        productData.map((product, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{product.name}</td>
                                    <td>{product.count}</td>
                                    <td>안녕</td>
                                    <td>
                                        <button
                                            onClick={() => {
                                                // 4. 함수를 import하고, dispatch()의 인자로 전달합니다.
                                                dispatch(increaseAmount(product.id));
                                            }}
                                        >
                                            수량추가
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => {
                                                dispatch(removeProduct(product.id));
                                            }}
                                        >
                                            삭제
                                        </button>
                                    </td>
                                </tr>
                            );
                        })
                    )}
                </tbody>
            </Table>
        </>
    );
};

export default Cart;
