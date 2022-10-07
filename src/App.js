import React, { useRef, useState } from "react";
import ListDiary from "./ListDiary";

import "./css/reset.css";
import "./css/basic.scss";

const App = () => {
    const listNum = useRef(1);
    const titleRef = useRef();
    const contentRef = useRef();

    const [write, setWrite] = useState({
        title: "",
        content: "",
    });
    const [list, setList] = useState([]);

    const writeHandler = (e) => {
        setWrite({ ...write, [e.target.name]: e.target.value, id: listNum.current });
    };

    const listHandler = () => {
        if (write.title.length < 1) {
            alert("제목을 입력해주세요.");
            titleRef.current.focus();
            return;
        }
        if (write.content.length < 1) {
            alert("내용을 입력해주세요.");
            contentRef.current.focus();
            return;
        }

        setList([...list, write]);
        listNum.current++;

        setWrite({
            title: "",
            content: "",
        });
    };

    const removeHandler = (listId) => {
        setList(list.filter((el) => el.id !== listId));
    };

    return (
        <div>
            <input type="text" name="title" onChange={writeHandler} value={write.title} ref={titleRef} />
            <input type="text" name="content" onChange={writeHandler} value={write.content} ref={contentRef} />
            <button onClick={listHandler}>작성하기</button>
            <ListDiary removeHandler={removeHandler} diaryList={list} />
        </div>
    );
};

export default App;
