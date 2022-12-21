// 221221 18:10
// redux toolkit 기본 세팅
// index.js에서 <Provider store={store}></Provider> 로 감싸면 끝난다.
// 이제 store.js에 있는 state를 어디서든 꺼내 쓸 수 있다.
import { configureStore, createSlice } from "@reduxjs/toolkit";
// 컴포넌트 간에 공유가 필요없다면 그냥 useState()를 쓰는게 좋습니다.

// 221221 1820 스테이트 사용 방법
// 1. 아래와 같이 생성한다
const 변수명 = createSlice({
    name: "state를 알기 쉬운 아무이름",
    initialState: "값",
});

const user = createSlice({
    name: "user",
    initialState: "young",
});

const product = createSlice({
    name: "product",
    initialState: [
        { id: 0, name: "White and Black", count: 2 },
        { id: 2, name: "Grey Yordan", count: 1 },
    ],
});

// 2. 아래와 같이 생성한 state를 reducer에 저장하면 사용할 수 있다.
export default configureStore({
    reducer: {
        변수명: 변수명.reducer,
        user: user.reducer,
        product: product.reducer,
    },
});
