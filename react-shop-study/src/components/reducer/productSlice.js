import { createSlice } from "@reduxjs/toolkit";

const product = createSlice({
    name: "product",
    initialState: [
        { id: 0, name: "White and Black", count: 2 },
        { id: 2, name: "Grey Yordan", count: 1 },
    ],
    reducers: {
        addProduct(state, productData) {
            // 응용2. 이미 존재하면 이미 존재하는 상품에 카운트 +1 하기
            const productIndex = state.findIndex((el) => el.id === productData.payload.id);
            if (productIndex === -1) {
                state.unshift(productData.payload);
            } else {
                state[productIndex].count++;
            }
        },

        increaseAmount(state, productId) {
            // 221221 21:48 Array.findIndex() 배열을 순회하며 조건에 일치하는 데이터의 index 반환
            const productIndex = state.findIndex((el) => el.id === productId.payload);
            state[productIndex].count++;
        },

        // 응용1. 장바구니 삭제기능 추가하기
        removeProduct(state, productId) {
            const productIndex = state.findIndex((el) => el.id === productId.payload);
            state.splice(state[productIndex], 1);
        },
    },
});
export let { addProduct, increaseAmount, removeProduct } = product.actions;

export default product;
