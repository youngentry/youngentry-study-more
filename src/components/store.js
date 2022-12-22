// 221221 18:10
// redux toolkit 기본 세팅
// index.js에서 <Provider store={store}></Provider> 로 감싸면 끝난다.
// 이제 store.js에 있는 state를 어디서든 꺼내 쓸 수 있다.
import { configureStore, createSlice } from "@reduxjs/toolkit";
import product from "./reducer/productSlice";
import userObject from "./reducer/userObjectSlice";
// 컴포넌트 간에 공유가 필요없다면 그냥 useState()를 쓰는게 좋습니다.

// 221221 1820 스테이트 사용 방법
// createSlice와 configureStore 형식 따라하기
const 변수명 = createSlice({
    name: "state를 알기 쉬운 아무이름",
    initialState: "값",
});

const user = createSlice({
    name: "user",
    initialState: "young",

    // 221221 19:35 redux state 변경하는 방법
    // 1. 아래와 같이 reducers 안에 함수를 만들어 줍니다.
    reducers: {
        // 매개변수 state는 initialState의 값이 됩니다.
        state변경함수이름(state) {
            return state + 1;
        },
    },
});
// 2. 함수를 export 해주면 되는데, user.actions에 reducers의 함수들이 저장됩니다.
export let { state변경함수이름 } = user.actions;
// 3. import해서 쓰는 방법은 Cart.js 주석으로

export default configureStore({
    reducer: {
        변수명: 변수명.reducer,
        user: user.reducer,
        product: product.reducer,
        userObject: userObject.reducer,
    },
});
