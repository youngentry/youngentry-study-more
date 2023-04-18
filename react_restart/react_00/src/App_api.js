import TopBanner from "./pages/TopBanner";
import List from "./pages/ListTest";
import "./basic.css";
import { useEffect, useState } from "react";
import { BsSortNumericDown } from "react-icons/bs";

const App = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/")
            .then((response) => response.json())
            .then((json) => setData(json));
    }, []);

    return (
        <>
            {console.log(data[0].id)}
            {data.map((e) => (
                <li key={e.id}>
                    {e.id} / {e.title} / {e.completed ? "true" : "false"}
                </li>
            ))}
        </>
    );
};

export default App;
