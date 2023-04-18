import { useState, useTransition } from "react";

let a = new Array(10000).fill(0);

const 후순위처리 = () => {
    let [inputValue, setInputValue] = useState("");
    let [isPending, startTransition] = useTransition();

    // useDeferredValue(늦게실행할state)
    // 같은 기능을 합니다. 인자로 주어진 변수나 스테이트를 후순위로 처리하도록 합니다.
    // let state1 = useDeferredValue(name)
    return (
        <>
            <input
                // 원래는 input에 타이핑을 하면, <div>에 다 넣고 렌더링을 합니다.
                onChange={(e) => {
                    // 그런데 startTransition 함수의 콜백함수에 넣은 state 변경함수는 나중에 처리가 됩니다.
                    // 이제는 input에 타이핑이 되고 나서 <div>안의 내용을 처리하기 시작합니다. => 실행시점을 후순위로 바꿔 UX를 상향하도록 합니다.
                    // isPending은 startTransition 안의 코드가 실행중일 때 true를 반환합니다. (로딩중이면 true임)
                    // {isPending ? "로딩중" : "출력할내용"} 이렇게 로딩 중이라는 표시를 할 수 있겠죠.
                    startTransition(() => {
                        setInputValue(e.target.value);
                    });
                }}
            />
            {a.map(() => {
                return <div>{inputValue}</div>;
            })}
        </>
    );
};
