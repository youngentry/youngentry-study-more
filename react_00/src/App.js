import { useState } from "react";
import "./basic.css";

const App = () => {
    const [num, setNum] = useState(1);
    const [toggle, setToggle] = useState(true);

    const Test = () => {
        return <div>hello</div>;
    };

    return (
        <>
            {num}
            <section className={toggle ? "" : "on"}>
                {toggle ? "loading" : <Test />}
            </section>
            <div>000</div>
            <button
                onClick={() => (
                    setNum(num + 1),
                    console.log(toggle),
                    setToggle(!toggle),
                    console.log(num)
                )}
            >
                click
            </button>
        </>
    );
};

export default App;
