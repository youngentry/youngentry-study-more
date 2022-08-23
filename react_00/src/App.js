import { useState } from "react";
import Test from "./list";

const App = () => {
    const [num, setNum] = useState(1);
    const numHandler = () => setNum(num + 1);
    return (
        <>
            <h1>{num}</h1>

            <button onClick={numHandler}>num plus</button>
            <Test list="우영우" name="동그라미" age={21} onClick={numHandler} />
            <Test list="스위스" name="동그라미" age={21} />
            <Test list="토마토" name="동그라미" age={21} />
            <Test list="별똥별" name="동그라미" age={21} />
        </>
    );
};
export default App;
