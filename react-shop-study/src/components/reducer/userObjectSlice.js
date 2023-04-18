import { createSlice } from "@reduxjs/toolkit";

// 221221 20:35 object/array 타입의 state 변경하는 방법
const userObject = createSlice({
    name: "user",
    initialState: { name: "young", age: 10 },
    reducers: {
        // 221221 21:00 두번째 매개변수를 함수에서 인자로 쓸 수 있다
        increaseUserAge(state, number) {
            // Immer.js 라이브러리 덕분에 직접 변경하면 된다.
            // 두번째 매개변수를 넣을 위치를 정하고 .payload를 붙여주면 된다.
            state.age += number.payload;
        },
    },
});
export let { increaseUserAge } = userObject.actions;

export default userObject;
