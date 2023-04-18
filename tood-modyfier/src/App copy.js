import React, { useState } from "react";

const App = () => {
    const [write, setWrite] = useState({});
    const [list, setList] = useState([]);
    console.log(write, list);
    return (
        <div>
            {list.map((el, idx) => {
                return (
                    <div key={idx}>
                        <li>제목 : {el.title}</li>
                        <li>내용 : {el.content}</li>
                    </div>
                );
            })}

            <input type="text" name="title" onChange={(e) => setWrite({ ...write, [e.target.name]: e.target.value })} />
            <input type="text" name="content" onChange={(e) => setWrite({ ...write, [e.target.name]: e.target.value })} />
            <button onClick={() => setList([...list, write])}>작성하기</button>
        </div>
    );
};

export default App;
