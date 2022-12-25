import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./components/store";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <QueryClientProvider client={queryClient}>
        {/* 221221 18:25 Provider로 감싸면 state 냉장고 완성 */}
        <Provider store={store}>
            {/* 배포할 때 기본 주소 설정 */}
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <App />
            </BrowserRouter>
        </Provider>
    </QueryClientProvider>
);

// 221224 16:25 React Query 실시간 sns, 코인 거래소와 같은 기능 구현시 유용
// 1. ajax 성공/실패에 따른 렌더링
// 2. 일정 주기로 ajax 자동 요청
// 3. 실패한 경우 얼마 후에 재시도 요청
// 4. prefetch 다음 페이지 미리 요청

// $ npm install react-query

// index.js 에서
// const queryClient = new QueryClient(); import 한 뒤에
// 아래와 같이  <QueryClientProvider client={queryClient}>  로 감싸준다.
/* <QueryClientProvider client={queryClient}>
    <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <App />
        </BrowserRouter>
    </Provider>
</QueryClientProvider>; */

// 다음설명은 App.js로
